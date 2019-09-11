(ns rx-playground.core
  (:require [rx.lang.clojure.core :as rx])
  (:import  (rx Observable)
            (java.util.concurrent TimeUnit)))

(def repl-out *out*)

(defn prn-to-repl [ & args]
  (binding [*out* repl-out]
    (apply prn args)))

(defn musicians []
  (rx/seq->o ["James Hetfield" "Dave Mustaine" "Kerry King"]))

(defn bands []
  (rx/seq->o ["Metallica" "Megadeth" "Slayer"]))

(defn uppercased-obs []
  (rx/map (fn [s] (.toUpperCase s)) (bands)))

(rx/subscribe (->> (Observable/interval 10 TimeUnit/MICROSECONDS)
                   (rx/filter even?)
                   (rx/take 6)
                   (rx/reduce +))
              prn-to-repl)

(-> (rx/map vector
            (musicians)
            (uppercased-obs))
    (rx/subscribe (fn [[musician band]]
                    (prn-to-repl (str musician "- from: " band)))))

(defn factorial [n]
  (reduce * (range 1 (inc n))))

(defn all-positive-integers []
  (Observable/interval 1 TimeUnit/MICROSECONDS))

(defn fact-obs [n]
  (rx/observable*
    (fn [observer]
      (rx/on-next observer (factorial n))
      (rx/on-completed observer))))

(defn repeat-obs [n]
  (rx/seq->o (repeat 2 n)))

(rx/subscribe (fact-obs 5) prn-to-repl)

(rx/subscribe (->> (all-positive-integers)
                   (rx/filter even?)
                   (rx/flatmap fact-obs)
                   (rx/take 1))
              prn-to-repl)

(rx/subscribe (->> (all-positive-integers)
                   (rx/flatmap repeat-obs)
                   (rx/take 6))
              prn-to-repl)

(defn exception-obs []
  (rx/observable*
    (fn [observer]
      (rx/on-next observer (throw (Exception. "Oops. Something went wrong")))
      (rx/on-completed observer))))

(rx/subscribe (->> (exception-obs)
                   (rx/map inc))
              (fn [v] (prn-to-repl "result is " v))
              (fn [e] (prn-to-repl "error is" e)))

(rx/subscribe (->> (exception-obs)
                   (rx/catch Exception e (rx/return 10))
                   (rx/map inc))
              (fn [v] (prn-to-repl "error result is " v)))

(rx/subscribe (->> (exception-obs)
                   (rx/catch Exception e (rx/seq->o (range 5)))
                   (rx/map inc))
              (fn [v] (prn-to-repl "vec error result is " v)))

(defn retry-obs []
  (let [errored (atom false)]
    (rx/observable*
      (fn [observer]
        (if @errored
          (rx/on-next observer 20)
          (do (reset! errored true)
              (throw (Exception. "Oppsss something is wrong"))))))))

(rx/subscribe (->> (retry-obs)
                    (.retry))
              (fn [v] (prn-to-repl "result is" v)))

(defn fast-producing-obs []
  (rx/map inc (Observable/interval 1 TimeUnit/MILLISECONDS)))

(defn slow-producing-obs []
  (rx/map inc (Observable/interval 500 TimeUnit/MILLISECONDS)))

(rx/subscribe (->> (rx/map vector
                           (fast-producing-obs)
                           (slow-producing-obs))
                   (rx/map (fn [[x y]]
                             (+ x y)))
                   (rx/take 10))
              prn-to-repl
              (fn [e] (prn-to-repl "error is " e)))

(rx/subscribe (->> (rx/map vector
                           (.sample (fast-producing-obs) 200 TimeUnit/MILLISECONDS)
                           (slow-producing-obs))
                   (rx/map (fn [[x y]]
                             (+ x y)))
                   (rx/take 10))
              prn-to-repl
              (fn [e] (prn-to-repl "error is " e)))

(rx/subscribe (->> (rx/map vector
                           (.onBackpressureBuffer (fast-producing-obs))
                           (slow-producing-obs))
                   (rx/map (fn [[x y]]
                             (+ x y)))
                   (rx/take 10000))
              prn-to-repl
              (fn [e] (prn-to-repl "error is " e)))

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))

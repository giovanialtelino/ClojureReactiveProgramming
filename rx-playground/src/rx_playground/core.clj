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

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))

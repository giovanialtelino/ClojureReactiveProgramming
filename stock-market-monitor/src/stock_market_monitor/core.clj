(ns stock-market-monitor.core
  (:require [seesaw.core :refer :all]
            [rx.lang.clojure.core :as rx])
  (:import (java.util.concurrent ScheduledThreadPoolExecutor TimeUnit)
           (clojure.lang PersistentQueue)
           (rx Observable)))

(native!)

(def main-frame (frame :title "Stock price monitor"
                       :width 200 :height 100
                       :on-close :exit))

(def price-label (label "Price: -"))

(config! main-frame :content price-label)

(def pool (atom nil))

(defn init-scheduler [num-threads]
  (reset! pool (ScheduledThreadPoolExecutor. num-threads)))

(defn run-every [pool millis f]
  (.scheduleWithFixedDelay pool
                           f
                           0 millis TimeUnit/MILLISECONDS))

(defn shutdown [pool]
  (println "Shutting down scheduler...")
  (.shutdown pool))

(defn share-price [company-core]
  (Thread/sleep 200)
  (rand-int 1000))

(def running-avg-label (label "Running average: -"))
(config! main-frame :content
         (border-panel
           :north price-label
           :center running-avg-label
           :border 5))

(defn roll-buffer [buffer num buffer-size]
  (let [buffer (conj buffer num)]
    (if (> (count buffer) buffer-size)
      (pop buffer)
      buffer)))

(defn avg [numbers]
  (float (/ (reduce + numbers) (count numbers))))

(defn make-running-avg [buffer-size]
  (let [buffer (atom clojure.lang.PersistentQueue/EMPTY)]
    (fn [n]
      (swap! buffer roll-buffer n buffer-size)
      (avg @buffer))))

(def running-avg (make-running-avg 5))

(defn worker []
  (let [price (share-price "XYZ")]
    (->> (str "Price: " price) (text! price-label))
    (->> (str "Running average: " (running-avg price))
         (text! running-avg-label))))

;RX only bellow
(defn make-price-obs [company-code]
  (rx/return (share-price company-code)))

(defn obb [] (rx/flatmap (fn [_] (make-price-obs "XYZ")
                        (Observable/interval 500 TimeUnit/MILLISECONDS))))

(-> (rx/seq->o (vec (range 10)))
    (.buffer 5 1)
    (rx/subscribe
      (fn [price]
        (prn (str "Value: " price)))))

(defn oldmain2 [& args]
  (show! main-frame)
  (let [price-obs (rx/flatmap (fn [_] (make-price-obs "XYZ"))
                              (Observable/interval 500 TimeUnit/MILLISECONDS))]
    (rx/subscribe price-obs
                  (fn [price] (text! price-label (str "Price: " price))))))

(defn -main [& args]
  (show! main-frame)
  (let [price-obs (-> (rx/flatmap make-price-obs (Observable/interval 500 TimeUnit/MILLISECONDS)) (.publish))
        sliding-buffer-obs (.buffer price-obs 5 1)]
    (rx/subscribe price-obs
                  (fn [price]
                    (text! price-label (str "Price: " price))))
    (rx/subscribe sliding-buffer-obs
                  (fn [buffer]
                    (text! running-avg-label (str "Running average: " (avg buffer))))) (.connect price-obs)))

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))

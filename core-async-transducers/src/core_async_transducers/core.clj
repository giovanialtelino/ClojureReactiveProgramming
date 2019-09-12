(ns core-async-transducers.core
  (:require [clojure.core.async :refer [go chan map< filter< into >! <! go-loop close! pipe]]))

(def xform
  (comp (map inc)
        (filter even?)))

(defn p1 []
  (->> (range 100000000)
       (map inc)
       (filter even?)
       (prn "result is ")))

(defn p2 []
  (->> (range 100000000)
       (sequence xform)
       (prn "result is ")))

(def result (chan 10))

(def transformed (->> (pipe result (chan 10 xform))
                      (into [])))

(defn -main []
  ;(time (p1))
  ;(time (p2))

  (go (prn "result is " (<! transformed)))

  (go (doseq [n (range 10)]
        (>! result n))
      (close! result))



  )
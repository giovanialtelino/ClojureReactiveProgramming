(ns coreasync.errortest
  (:require [clojure.core.async :refer [go chan <! >! timeout go-loop map>] :as async])
  (:require [clojure.core.async.lab :refer [broadcast]])
  (:use [seesaw.core]))

(defn get-data []
  (throw (Exception. "Bad things happen!")))

(defn process []
  (let [result (chan)]
    (go (>! result (try (get-data)
                        (catch Exception e e))))
    result))

(defn throw-err [e]
  (when (instance? Throwable e) (throw e)))

(defmacro <? [ch]
  `(throw-err (async/<! ~ch)))

(defn -mainOld []
  (go (let [result (<! (->> (process )
                            (map> #(* % %))
                            (map> #(prn %))))]
        (prn "Result is " result))))

(defn -main []
  (go (try (let [result (<? (->> (process)
                              (map> #(* % %))
                              (map> #(prn %))))]
              (prn "result is: " result))
            (catch Exception e
              (prn "Oops, an error happened! We better do something about it here!" e)))))


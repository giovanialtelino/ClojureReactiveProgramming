(ns coreasync.core
  (:require [clojure.core.async :refer [go chan <! >! timeout]])
  (:import java.util.concurrent.ArrayBlockingQueue))

;Java example
(defn producer [c]
  (prn "Taking a nap")
  (Thread/sleep 5000)
  (prn "Now putting name in queue...")
  (.put c "Leo"))

(defn consumer [c]
  (prn "Attempting to take value from queu now...")
  (prn (str "Got it. Hello " (.take c) "!")))

;(def chan (ArrayBlockingQueue. 10))

;Clojure bellow
(defn prn-with-thread-id [s]
  (prn (str s " - Thread id: " (.getId (Thread/currentThread)))))

(defn producer [c]
  (go (prn-with-thread-id "Taking a nap")
      (<! (timeout 5000))
      (prn-with-thread-id "Now putting a name in the queue...")
      (>! c "Leo")))

(defn consumer [c]
  (go (prn-with-thread-id "Attempting to take value from queue new...")
      (prn-with-thread-id (str "Got it. Hello" (<! c) "!"))))

(def c (chan))

(defn -main []
  (consumer c)
  (producer c)
  )

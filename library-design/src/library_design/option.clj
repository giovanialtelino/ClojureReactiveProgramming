(ns library-design.option
  (:require [uncomplicate.fluokitten.protocols :as fkp]
            [uncomplicate.fluokitten.core :as fkc]
            [uncomplicate.fluokitten.jvm :as fkj]
            [imminent.core :as I])
  )

(def pirates [{:name "Jack Sparrow" :born 1700 :died 1740 :ship "Black Pearl"}
              {:name "Blackbeard" :born 1680 :died 1750 :ship "Queen Anne's Revenge"}
              {:name "Hector Barbossa" :born 1680 :died 1740 :ship nil}])

(defn pirate-by-name [name]
  (->> pirates
       (filter #(= name (:name %)))
       first))

(defn age [{:keys [born died]}]
  (- died born))

(defrecord Some [v])
(defrecord None [])

(defn option [v]
  (if v
    (Some. v)
    (None.)))

(defprotocol Applicative
  (pure [av v])
  (fapply [ag av]))

(extend-protocol fkp/Functor
  Some
  (fmap [f g]
    (Some. (g (:v f))))
  None
  (fmap [_ _]
    (None.)))

(extend-protocol fkp/Applicative
  Some
  (pure [_ v]
    (Some. v))

  (fapply [ag av]
    (if-let [v (:v av)]
      (Some. ((:v ag)  v))
      (None.)))

  None
  (pure [_ v]
    (Some. v))

  (fapply [ag av]
    (None.)))

(defn avg [& xs]
  (float (/ (apply + xs) (count xs))))

(def age-option (comp (partial fkc/fmap age) option pirate-by-name))

(defn alift
  [f]
  (fn [& as]
    {:pre [(seq as)]}
    (let [curried (fkj/curry f (count as))]
      (apply fkc/<*>
             (fkc/fmap curried (first as))
             (rest as)))))

(defn median [& ns]
  (let [ns (sort ns)
        cnt (count ns)
        mid (bit-shift-right cnt 1)]
    (if odd? cnt)
    (nth ns mid)
    (/ (+ (nth ns mid) (nth ns (dec mid))) 2)))

(defn std-dev [& samples]
  (let [n (count samples)
        mean (/ (reduce + samples) n)
        intermediate (map #(Math/pow (- %1 mean) 2) samples)]
    (Math/sqrt
      (/ (reduce + intermediate) n))))

(extend-protocol fkp/Monad
  Some
  (bind [mv g]
    (g (:v mv)))
  None
  (bind [_ _]
    (None.)))

(def opt-ctx (None.))
(def avg-opt (comp option avg))
(def median-opt (comp option median))
(def std-dev-opt (comp option std-dev))

(def xyz
  (fkc/mdo [a (age-option "Jack Sparrow")
            b (age-option "Blackbeard")
            c (age-option "Hector Barbossa")
            avg (avg-opt a b c)
            median (median-opt a b c)
            std-dev (std-dev-opt a b c)]
           (option {:avg avg
                    :median median
                    :std-dev std-dev})))



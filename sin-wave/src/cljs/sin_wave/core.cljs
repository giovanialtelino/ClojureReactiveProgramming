(ns sin-wave.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(def rainbow (reagent/atom "red"))

(def app-state (atom {:text "Hello Chestnutsss!"}))

(def canvas (.getElementById js/document "myCanvas"))
(def ctx (.getContext canvas "2d"))
(.clearRect ctx 0 0 (.-width canvas) (.-height canvas))

(def interval js.Rx.Observable.interval)
(def timing (interval 10))

(defn deg-to-rad [n]
      (* (/ Math/PI 180) n))

(defn sine-coord [x]
      (let [sin (Math/sin (deg-to-rad x))
            y (- 100 (* sin 90))]
           {:x   x
            :y   y
            :sin sin}))

(def sine-wave
  (.map timing sine-coord))

(defn fill-rect [x y]
      (set! (.-fillStyle ctx) @rainbow)
      (.fillRect ctx x y 2 2))

;(def colour (.map sine-wave
;(fn [{:keys [sin]}]
;(if (< sin 0)
;  "red"
;  "blue") ) ) )

(def red (.map timing (fn [_] "red")))
(def blue (.map timing (fn [_] "blue")))
(def orange (.map timing (fn [_] "orange")))
(def yellow (.map timing (fn [_] "yellow")))
(def green (.map timing (fn [_] "green")))
(def purple (.map timing (fn [_] "purple")))
(def black (.map timing (fn [_] "black")))

(def concats js/Rx.Observable.concat)
(def defers js/Rx.Observable.defer)
(def from-events js/Rx.Observable.fromEvent)

(def mouse-click (from-events canvas "click"))

;(def cycle-colour
;(concats (.takeUntil red mouse-click)
;(defers #(concats (.takeUntil blue mouse-click)
;                  cycle-colour)) ) )

; created an atom to manage the color due to the changes into the screen
; the best idea would have an atom as a N, so the list could be split in equal parts between each color
; since the exercise only asked for 600 itens and no user input, just this solves it
(defn changeRainbowColor [n]
      (cond
        (> n 500) (reset! rainbow "red")
        (> n 400) (reset! rainbow "blue")
        (> n 300) (reset! rainbow "purple")
        (> n 200) (reset! rainbow "green")
        (> n 100) (reset! rainbow "yellow")
        (> n 0) (reset! rainbow "orange")
        :else (reset! rainbow "black")
        ))

(-> (.zip sine-wave #(vector % %2))
    (.take 600)
    (.subscribe (fn [[{:keys [x y]}]]
                    (fill-rect x y)
                    (changeRainbowColor x))))

(defn greeting []
      [:h1 (:text @app-state)])

(defn render []
      (reagent/render [greeting] (js/document.getElementById "app")))

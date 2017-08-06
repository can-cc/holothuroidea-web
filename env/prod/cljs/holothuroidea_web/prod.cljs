(ns holothuroidea-web.prod
  (:require
    [holothuroidea-web.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)

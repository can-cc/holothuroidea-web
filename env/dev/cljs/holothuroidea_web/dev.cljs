(ns ^:figwheel-no-load holothuroidea-web.dev
  (:require
    [holothuroidea-web.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)

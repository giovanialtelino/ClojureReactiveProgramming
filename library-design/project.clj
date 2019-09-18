(defproject library-design "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [com.leonardoborges/imminent "0.1.0"]
                 [com.netflix.rxjava/rxjava-clojure "0.20.7"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [uncomplicate/fluokitten "0.3.0"]
                 ]
  :repl-options {:init-ns library-design.core})

(defproject respondent "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/core.async "0.4.500"]
                 [org.clojure/clojurescript "0.0-2202"]]
  :repl-options {:init-ns respondent.core})

  :plugins [[com.keminglabs/cljx "0.3.2"]
            [lein-cljsbuild "1.0.3"]]

  :cljx {:builds [{
                   :source-paths ["src/cljx"]
                   :output-path "target/classes"
                   :rules :clj
                   }
                  {
                   :source-paths ["src/cljx"]
                   :output-path "target/classes"
                   :rules :cljs
                   }]}
  :hooks [cljx.hooks]

  :cljs {:builds [{:source-paths ["target/classes"]
                   :compiler {:output-to "target/main.js"}}]}

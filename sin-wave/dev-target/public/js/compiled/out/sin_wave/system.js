// Compiled by ClojureScript 1.10.439 {}
goog.provide('sin_wave.system');
goog.require('cljs.core');
goog.require('com.stuartsierra.component');
goog.require('sin_wave.components.ui');
sin_wave.system.new_system = (function sin_wave$system$new_system(){
return com.stuartsierra.component.system_map.call(null,new cljs.core.Keyword(null,"app-root","app-root",1723856706),sin_wave.components.ui.new_ui_component.call(null));
});
sin_wave.system.init = (function sin_wave$system$init(){
return sin_wave.system.system = sin_wave.system.new_system.call(null);
});
sin_wave.system.start = (function sin_wave$system$start(){
return sin_wave.system.system = com.stuartsierra.component.start.call(null,sin_wave.system.system);
});
sin_wave.system.stop = (function sin_wave$system$stop(){
return sin_wave.system.system = com.stuartsierra.component.stop.call(null,sin_wave.system.system);
});
sin_wave.system.go = (function sin_wave$system$go(){
sin_wave.system.init.call(null);

return sin_wave.system.start.call(null);
});
goog.exportSymbol('sin_wave.system.go', sin_wave.system.go);
sin_wave.system.reset = (function sin_wave$system$reset(){
sin_wave.system.stop.call(null);

return sin_wave.system.go.call(null);
});

//# sourceMappingURL=system.js.map?rel=1568143501542

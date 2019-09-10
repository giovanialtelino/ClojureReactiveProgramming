// Compiled by ClojureScript 1.10.439 {}
goog.provide('sin_wave.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
sin_wave.core.rainbow = reagent.core.atom.call(null,"red");
sin_wave.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello Chestnutsss!"], null));
sin_wave.core.canvas = document.getElementById("myCanvas");
sin_wave.core.ctx = sin_wave.core.canvas.getContext("2d");
sin_wave.core.ctx.clearRect((0),(0),sin_wave.core.canvas.width,sin_wave.core.canvas.height);
sin_wave.core.interval = Rx.Observable.interval;
sin_wave.core.timing = sin_wave.core.interval.call(null,(10));
sin_wave.core.deg_to_rad = (function sin_wave$core$deg_to_rad(n){
return ((Math.PI / (180)) * n);
});
sin_wave.core.sine_coord = (function sin_wave$core$sine_coord(x){
var sin = Math.sin(sin_wave.core.deg_to_rad.call(null,x));
var y = ((100) - (sin * (90)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"sin","sin",80907862),sin], null);
});
sin_wave.core.sine_wave = sin_wave.core.timing.map(sin_wave.core.sine_coord);
sin_wave.core.fill_rect = (function sin_wave$core$fill_rect(x,y){
sin_wave.core.ctx.fillStyle = cljs.core.deref.call(null,sin_wave.core.rainbow);

return sin_wave.core.ctx.fillRect(x,y,(2),(2));
});
sin_wave.core.red = sin_wave.core.timing.map((function (_){
return "red";
}));
sin_wave.core.blue = sin_wave.core.timing.map((function (_){
return "blue";
}));
sin_wave.core.orange = sin_wave.core.timing.map((function (_){
return "orange";
}));
sin_wave.core.yellow = sin_wave.core.timing.map((function (_){
return "yellow";
}));
sin_wave.core.green = sin_wave.core.timing.map((function (_){
return "green";
}));
sin_wave.core.purple = sin_wave.core.timing.map((function (_){
return "purple";
}));
sin_wave.core.black = sin_wave.core.timing.map((function (_){
return "black";
}));
sin_wave.core.concats = Rx.Observable.concat;
sin_wave.core.defers = Rx.Observable.defer;
sin_wave.core.from_events = Rx.Observable.fromEvent;
sin_wave.core.mouse_click = sin_wave.core.from_events.call(null,sin_wave.core.canvas,"click");
sin_wave.core.changeRainbowColor = (function sin_wave$core$changeRainbowColor(n){
if((n > (500))){
return cljs.core.reset_BANG_.call(null,sin_wave.core.rainbow,"red");
} else {
if((n > (400))){
return cljs.core.reset_BANG_.call(null,sin_wave.core.rainbow,"blue");
} else {
if((n > (300))){
return cljs.core.reset_BANG_.call(null,sin_wave.core.rainbow,"purple");
} else {
if((n > (200))){
return cljs.core.reset_BANG_.call(null,sin_wave.core.rainbow,"green");
} else {
if((n > (100))){
return cljs.core.reset_BANG_.call(null,sin_wave.core.rainbow,"yellow");
} else {
if((n > (0))){
return cljs.core.reset_BANG_.call(null,sin_wave.core.rainbow,"orange");
} else {
return cljs.core.reset_BANG_.call(null,sin_wave.core.rainbow,"black");

}
}
}
}
}
}
});
sin_wave.core.sine_wave.zip((function (p1__41682_SHARP_,p2__41683_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__41682_SHARP_,p2__41683_SHARP_],null));
})).take((600)).subscribe((function (p__41684){
var vec__41685 = p__41684;
var map__41688 = cljs.core.nth.call(null,vec__41685,(0),null);
var map__41688__$1 = (((((!((map__41688 == null))))?(((((map__41688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41688):map__41688);
var x = cljs.core.get.call(null,map__41688__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__41688__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
sin_wave.core.fill_rect.call(null,x,y);

return sin_wave.core.changeRainbowColor.call(null,x);
}));
sin_wave.core.greeting = (function sin_wave$core$greeting(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sin_wave.core.app_state))], null);
});
sin_wave.core.render = (function sin_wave$core$render(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sin_wave.core.greeting], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map?rel=1568143501457

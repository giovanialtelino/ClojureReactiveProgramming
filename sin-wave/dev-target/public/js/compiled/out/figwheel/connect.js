// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__37919__delegate = function (x__37903__auto__){
if(cljs.core.truth_(sin_wave.system.reset)){
return cljs.core.apply.call(null,sin_wave.system.reset,x__37903__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("sin-wave.system/reset"),"' is missing"].join(''));
}
};
var G__37919 = function (var_args){
var x__37903__auto__ = null;
if (arguments.length > 0) {
var G__37920__i = 0, G__37920__a = new Array(arguments.length -  0);
while (G__37920__i < G__37920__a.length) {G__37920__a[G__37920__i] = arguments[G__37920__i + 0]; ++G__37920__i;}
  x__37903__auto__ = new cljs.core.IndexedSeq(G__37920__a,0,null);
} 
return G__37919__delegate.call(this,x__37903__auto__);};
G__37919.cljs$lang$maxFixedArity = 0;
G__37919.cljs$lang$applyTo = (function (arglist__37921){
var x__37903__auto__ = cljs.core.seq(arglist__37921);
return G__37919__delegate(x__37903__auto__);
});
G__37919.cljs$core$IFn$_invoke$arity$variadic = G__37919__delegate;
return G__37919;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1568136995919

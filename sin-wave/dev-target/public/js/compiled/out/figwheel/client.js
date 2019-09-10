// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e37427){if((e37427 instanceof Error)){
var e = e37427;
return "Error: Unable to stringify";
} else {
throw e37427;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37430 = arguments.length;
switch (G__37430) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37428_SHARP_){
if(typeof p1__37428_SHARP_ === 'string'){
return p1__37428_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37428_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___37433 = arguments.length;
var i__4642__auto___37434 = (0);
while(true){
if((i__4642__auto___37434 < len__4641__auto___37433)){
args__4647__auto__.push((arguments[i__4642__auto___37434]));

var G__37435 = (i__4642__auto___37434 + (1));
i__4642__auto___37434 = G__37435;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37432){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37432));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___37437 = arguments.length;
var i__4642__auto___37438 = (0);
while(true){
if((i__4642__auto___37438 < len__4641__auto___37437)){
args__4647__auto__.push((arguments[i__4642__auto___37438]));

var G__37439 = (i__4642__auto___37438 + (1));
i__4642__auto___37438 = G__37439;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37436){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37436));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37440){
var map__37441 = p__37440;
var map__37441__$1 = (((((!((map__37441 == null))))?(((((map__37441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37441):map__37441);
var message = cljs.core.get.call(null,map__37441__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37441__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4047__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__32326__auto___37520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto___37520,ch){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto___37520,ch){
return (function (state_37492){
var state_val_37493 = (state_37492[(1)]);
if((state_val_37493 === (7))){
var inst_37488 = (state_37492[(2)]);
var state_37492__$1 = state_37492;
var statearr_37494_37521 = state_37492__$1;
(statearr_37494_37521[(2)] = inst_37488);

(statearr_37494_37521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37493 === (1))){
var state_37492__$1 = state_37492;
var statearr_37495_37522 = state_37492__$1;
(statearr_37495_37522[(2)] = null);

(statearr_37495_37522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37493 === (4))){
var inst_37445 = (state_37492[(7)]);
var inst_37445__$1 = (state_37492[(2)]);
var state_37492__$1 = (function (){var statearr_37496 = state_37492;
(statearr_37496[(7)] = inst_37445__$1);

return statearr_37496;
})();
if(cljs.core.truth_(inst_37445__$1)){
var statearr_37497_37523 = state_37492__$1;
(statearr_37497_37523[(1)] = (5));

} else {
var statearr_37498_37524 = state_37492__$1;
(statearr_37498_37524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37493 === (15))){
var inst_37452 = (state_37492[(8)]);
var inst_37467 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37452);
var inst_37468 = cljs.core.first.call(null,inst_37467);
var inst_37469 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37468);
var inst_37470 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37469)].join('');
var inst_37471 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37470);
var state_37492__$1 = state_37492;
var statearr_37499_37525 = state_37492__$1;
(statearr_37499_37525[(2)] = inst_37471);

(statearr_37499_37525[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37493 === (13))){
var inst_37476 = (state_37492[(2)]);
var state_37492__$1 = state_37492;
var statearr_37500_37526 = state_37492__$1;
(statearr_37500_37526[(2)] = inst_37476);

(statearr_37500_37526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37493 === (6))){
var state_37492__$1 = state_37492;
var statearr_37501_37527 = state_37492__$1;
(statearr_37501_37527[(2)] = null);

(statearr_37501_37527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37493 === (17))){
var inst_37474 = (state_37492[(2)]);
var state_37492__$1 = state_37492;
var statearr_37502_37528 = state_37492__$1;
(statearr_37502_37528[(2)] = inst_37474);

(statearr_37502_37528[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37493 === (3))){
var inst_37490 = (state_37492[(2)]);
var state_37492__$1 = state_37492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37492__$1,inst_37490);
} else {
if((state_val_37493 === (12))){
var inst_37451 = (state_37492[(9)]);
var inst_37465 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37451,opts);
var state_37492__$1 = state_37492;
if(inst_37465){
var statearr_37503_37529 = state_37492__$1;
(statearr_37503_37529[(1)] = (15));

} else {
var statearr_37504_37530 = state_37492__$1;
(statearr_37504_37530[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37493 === (2))){
var state_37492__$1 = state_37492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37492__$1,(4),ch);
} else {
if((state_val_37493 === (11))){
var inst_37452 = (state_37492[(8)]);
var inst_37457 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37458 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37452);
var inst_37459 = cljs.core.async.timeout.call(null,(1000));
var inst_37460 = [inst_37458,inst_37459];
var inst_37461 = (new cljs.core.PersistentVector(null,2,(5),inst_37457,inst_37460,null));
var state_37492__$1 = state_37492;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37492__$1,(14),inst_37461);
} else {
if((state_val_37493 === (9))){
var inst_37452 = (state_37492[(8)]);
var inst_37478 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37479 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37452);
var inst_37480 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37479);
var inst_37481 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37480)].join('');
var inst_37482 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37481);
var state_37492__$1 = (function (){var statearr_37505 = state_37492;
(statearr_37505[(10)] = inst_37478);

return statearr_37505;
})();
var statearr_37506_37531 = state_37492__$1;
(statearr_37506_37531[(2)] = inst_37482);

(statearr_37506_37531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37493 === (5))){
var inst_37445 = (state_37492[(7)]);
var inst_37447 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37448 = (new cljs.core.PersistentArrayMap(null,2,inst_37447,null));
var inst_37449 = (new cljs.core.PersistentHashSet(null,inst_37448,null));
var inst_37450 = figwheel.client.focus_msgs.call(null,inst_37449,inst_37445);
var inst_37451 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37450);
var inst_37452 = cljs.core.first.call(null,inst_37450);
var inst_37453 = figwheel.client.autoload_QMARK_.call(null);
var state_37492__$1 = (function (){var statearr_37507 = state_37492;
(statearr_37507[(9)] = inst_37451);

(statearr_37507[(8)] = inst_37452);

return statearr_37507;
})();
if(cljs.core.truth_(inst_37453)){
var statearr_37508_37532 = state_37492__$1;
(statearr_37508_37532[(1)] = (8));

} else {
var statearr_37509_37533 = state_37492__$1;
(statearr_37509_37533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37493 === (14))){
var inst_37463 = (state_37492[(2)]);
var state_37492__$1 = state_37492;
var statearr_37510_37534 = state_37492__$1;
(statearr_37510_37534[(2)] = inst_37463);

(statearr_37510_37534[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37493 === (16))){
var state_37492__$1 = state_37492;
var statearr_37511_37535 = state_37492__$1;
(statearr_37511_37535[(2)] = null);

(statearr_37511_37535[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37493 === (10))){
var inst_37484 = (state_37492[(2)]);
var state_37492__$1 = (function (){var statearr_37512 = state_37492;
(statearr_37512[(11)] = inst_37484);

return statearr_37512;
})();
var statearr_37513_37536 = state_37492__$1;
(statearr_37513_37536[(2)] = null);

(statearr_37513_37536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37493 === (8))){
var inst_37451 = (state_37492[(9)]);
var inst_37455 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37451,opts);
var state_37492__$1 = state_37492;
if(cljs.core.truth_(inst_37455)){
var statearr_37514_37537 = state_37492__$1;
(statearr_37514_37537[(1)] = (11));

} else {
var statearr_37515_37538 = state_37492__$1;
(statearr_37515_37538[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32326__auto___37520,ch))
;
return ((function (switch__32231__auto__,c__32326__auto___37520,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32232__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32232__auto____0 = (function (){
var statearr_37516 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37516[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32232__auto__);

(statearr_37516[(1)] = (1));

return statearr_37516;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32232__auto____1 = (function (state_37492){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_37492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e37517){if((e37517 instanceof Object)){
var ex__32235__auto__ = e37517;
var statearr_37518_37539 = state_37492;
(statearr_37518_37539[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37540 = state_37492;
state_37492 = G__37540;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32232__auto__ = function(state_37492){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32232__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32232__auto____1.call(this,state_37492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32232__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32232__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto___37520,ch))
})();
var state__32328__auto__ = (function (){var statearr_37519 = f__32327__auto__.call(null);
(statearr_37519[(6)] = c__32326__auto___37520);

return statearr_37519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto___37520,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37541_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37541_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37547 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37547){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37543 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37544 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37545 = true;
var _STAR_print_fn_STAR__temp_val__37546 = ((function (_STAR_print_newline_STAR__orig_val__37543,_STAR_print_fn_STAR__orig_val__37544,_STAR_print_newline_STAR__temp_val__37545,sb,base_path_37547){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__37543,_STAR_print_fn_STAR__orig_val__37544,_STAR_print_newline_STAR__temp_val__37545,sb,base_path_37547))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37545;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37546;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37544;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37543;
}}catch (e37542){if((e37542 instanceof Error)){
var e = e37542;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37547], null));
} else {
var e = e37542;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37547))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37548){
var map__37549 = p__37548;
var map__37549__$1 = (((((!((map__37549 == null))))?(((((map__37549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37549):map__37549);
var opts = map__37549__$1;
var build_id = cljs.core.get.call(null,map__37549__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37549,map__37549__$1,opts,build_id){
return (function (p__37551){
var vec__37552 = p__37551;
var seq__37553 = cljs.core.seq.call(null,vec__37552);
var first__37554 = cljs.core.first.call(null,seq__37553);
var seq__37553__$1 = cljs.core.next.call(null,seq__37553);
var map__37555 = first__37554;
var map__37555__$1 = (((((!((map__37555 == null))))?(((((map__37555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37555):map__37555);
var msg = map__37555__$1;
var msg_name = cljs.core.get.call(null,map__37555__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37553__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37552,seq__37553,first__37554,seq__37553__$1,map__37555,map__37555__$1,msg,msg_name,_,map__37549,map__37549__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37552,seq__37553,first__37554,seq__37553__$1,map__37555,map__37555__$1,msg,msg_name,_,map__37549,map__37549__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37549,map__37549__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37557){
var vec__37558 = p__37557;
var seq__37559 = cljs.core.seq.call(null,vec__37558);
var first__37560 = cljs.core.first.call(null,seq__37559);
var seq__37559__$1 = cljs.core.next.call(null,seq__37559);
var map__37561 = first__37560;
var map__37561__$1 = (((((!((map__37561 == null))))?(((((map__37561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37561):map__37561);
var msg = map__37561__$1;
var msg_name = cljs.core.get.call(null,map__37561__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37559__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37563){
var map__37564 = p__37563;
var map__37564__$1 = (((((!((map__37564 == null))))?(((((map__37564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37564):map__37564);
var on_compile_warning = cljs.core.get.call(null,map__37564__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37564__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37564,map__37564__$1,on_compile_warning,on_compile_fail){
return (function (p__37566){
var vec__37567 = p__37566;
var seq__37568 = cljs.core.seq.call(null,vec__37567);
var first__37569 = cljs.core.first.call(null,seq__37568);
var seq__37568__$1 = cljs.core.next.call(null,seq__37568);
var map__37570 = first__37569;
var map__37570__$1 = (((((!((map__37570 == null))))?(((((map__37570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37570):map__37570);
var msg = map__37570__$1;
var msg_name = cljs.core.get.call(null,map__37570__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37568__$1;
var pred__37572 = cljs.core._EQ_;
var expr__37573 = msg_name;
if(cljs.core.truth_(pred__37572.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37573))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37572.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37573))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37564,map__37564__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto__,msg_hist,msg_names,msg){
return (function (state_37662){
var state_val_37663 = (state_37662[(1)]);
if((state_val_37663 === (7))){
var inst_37582 = (state_37662[(2)]);
var state_37662__$1 = state_37662;
if(cljs.core.truth_(inst_37582)){
var statearr_37664_37711 = state_37662__$1;
(statearr_37664_37711[(1)] = (8));

} else {
var statearr_37665_37712 = state_37662__$1;
(statearr_37665_37712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (20))){
var inst_37656 = (state_37662[(2)]);
var state_37662__$1 = state_37662;
var statearr_37666_37713 = state_37662__$1;
(statearr_37666_37713[(2)] = inst_37656);

(statearr_37666_37713[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (27))){
var inst_37652 = (state_37662[(2)]);
var state_37662__$1 = state_37662;
var statearr_37667_37714 = state_37662__$1;
(statearr_37667_37714[(2)] = inst_37652);

(statearr_37667_37714[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (1))){
var inst_37575 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37662__$1 = state_37662;
if(cljs.core.truth_(inst_37575)){
var statearr_37668_37715 = state_37662__$1;
(statearr_37668_37715[(1)] = (2));

} else {
var statearr_37669_37716 = state_37662__$1;
(statearr_37669_37716[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (24))){
var inst_37654 = (state_37662[(2)]);
var state_37662__$1 = state_37662;
var statearr_37670_37717 = state_37662__$1;
(statearr_37670_37717[(2)] = inst_37654);

(statearr_37670_37717[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (4))){
var inst_37660 = (state_37662[(2)]);
var state_37662__$1 = state_37662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37662__$1,inst_37660);
} else {
if((state_val_37663 === (15))){
var inst_37658 = (state_37662[(2)]);
var state_37662__$1 = state_37662;
var statearr_37671_37718 = state_37662__$1;
(statearr_37671_37718[(2)] = inst_37658);

(statearr_37671_37718[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (21))){
var inst_37611 = (state_37662[(2)]);
var inst_37612 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37613 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37612);
var state_37662__$1 = (function (){var statearr_37672 = state_37662;
(statearr_37672[(7)] = inst_37611);

return statearr_37672;
})();
var statearr_37673_37719 = state_37662__$1;
(statearr_37673_37719[(2)] = inst_37613);

(statearr_37673_37719[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (31))){
var inst_37641 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37662__$1 = state_37662;
if(inst_37641){
var statearr_37674_37720 = state_37662__$1;
(statearr_37674_37720[(1)] = (34));

} else {
var statearr_37675_37721 = state_37662__$1;
(statearr_37675_37721[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (32))){
var inst_37650 = (state_37662[(2)]);
var state_37662__$1 = state_37662;
var statearr_37676_37722 = state_37662__$1;
(statearr_37676_37722[(2)] = inst_37650);

(statearr_37676_37722[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (33))){
var inst_37637 = (state_37662[(2)]);
var inst_37638 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37639 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37638);
var state_37662__$1 = (function (){var statearr_37677 = state_37662;
(statearr_37677[(8)] = inst_37637);

return statearr_37677;
})();
var statearr_37678_37723 = state_37662__$1;
(statearr_37678_37723[(2)] = inst_37639);

(statearr_37678_37723[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (13))){
var inst_37596 = figwheel.client.heads_up.clear.call(null);
var state_37662__$1 = state_37662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37662__$1,(16),inst_37596);
} else {
if((state_val_37663 === (22))){
var inst_37617 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37618 = figwheel.client.heads_up.append_warning_message.call(null,inst_37617);
var state_37662__$1 = state_37662;
var statearr_37679_37724 = state_37662__$1;
(statearr_37679_37724[(2)] = inst_37618);

(statearr_37679_37724[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (36))){
var inst_37648 = (state_37662[(2)]);
var state_37662__$1 = state_37662;
var statearr_37680_37725 = state_37662__$1;
(statearr_37680_37725[(2)] = inst_37648);

(statearr_37680_37725[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (29))){
var inst_37628 = (state_37662[(2)]);
var inst_37629 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37630 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37629);
var state_37662__$1 = (function (){var statearr_37681 = state_37662;
(statearr_37681[(9)] = inst_37628);

return statearr_37681;
})();
var statearr_37682_37726 = state_37662__$1;
(statearr_37682_37726[(2)] = inst_37630);

(statearr_37682_37726[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (6))){
var inst_37577 = (state_37662[(10)]);
var state_37662__$1 = state_37662;
var statearr_37683_37727 = state_37662__$1;
(statearr_37683_37727[(2)] = inst_37577);

(statearr_37683_37727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (28))){
var inst_37624 = (state_37662[(2)]);
var inst_37625 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37626 = figwheel.client.heads_up.display_warning.call(null,inst_37625);
var state_37662__$1 = (function (){var statearr_37684 = state_37662;
(statearr_37684[(11)] = inst_37624);

return statearr_37684;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37662__$1,(29),inst_37626);
} else {
if((state_val_37663 === (25))){
var inst_37622 = figwheel.client.heads_up.clear.call(null);
var state_37662__$1 = state_37662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37662__$1,(28),inst_37622);
} else {
if((state_val_37663 === (34))){
var inst_37643 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37662__$1 = state_37662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37662__$1,(37),inst_37643);
} else {
if((state_val_37663 === (17))){
var inst_37602 = (state_37662[(2)]);
var inst_37603 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37604 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37603);
var state_37662__$1 = (function (){var statearr_37685 = state_37662;
(statearr_37685[(12)] = inst_37602);

return statearr_37685;
})();
var statearr_37686_37728 = state_37662__$1;
(statearr_37686_37728[(2)] = inst_37604);

(statearr_37686_37728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (3))){
var inst_37594 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37662__$1 = state_37662;
if(inst_37594){
var statearr_37687_37729 = state_37662__$1;
(statearr_37687_37729[(1)] = (13));

} else {
var statearr_37688_37730 = state_37662__$1;
(statearr_37688_37730[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (12))){
var inst_37590 = (state_37662[(2)]);
var state_37662__$1 = state_37662;
var statearr_37689_37731 = state_37662__$1;
(statearr_37689_37731[(2)] = inst_37590);

(statearr_37689_37731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (2))){
var inst_37577 = (state_37662[(10)]);
var inst_37577__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37662__$1 = (function (){var statearr_37690 = state_37662;
(statearr_37690[(10)] = inst_37577__$1);

return statearr_37690;
})();
if(cljs.core.truth_(inst_37577__$1)){
var statearr_37691_37732 = state_37662__$1;
(statearr_37691_37732[(1)] = (5));

} else {
var statearr_37692_37733 = state_37662__$1;
(statearr_37692_37733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (23))){
var inst_37620 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37662__$1 = state_37662;
if(inst_37620){
var statearr_37693_37734 = state_37662__$1;
(statearr_37693_37734[(1)] = (25));

} else {
var statearr_37694_37735 = state_37662__$1;
(statearr_37694_37735[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (35))){
var state_37662__$1 = state_37662;
var statearr_37695_37736 = state_37662__$1;
(statearr_37695_37736[(2)] = null);

(statearr_37695_37736[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (19))){
var inst_37615 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37662__$1 = state_37662;
if(inst_37615){
var statearr_37696_37737 = state_37662__$1;
(statearr_37696_37737[(1)] = (22));

} else {
var statearr_37697_37738 = state_37662__$1;
(statearr_37697_37738[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (11))){
var inst_37586 = (state_37662[(2)]);
var state_37662__$1 = state_37662;
var statearr_37698_37739 = state_37662__$1;
(statearr_37698_37739[(2)] = inst_37586);

(statearr_37698_37739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (9))){
var inst_37588 = figwheel.client.heads_up.clear.call(null);
var state_37662__$1 = state_37662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37662__$1,(12),inst_37588);
} else {
if((state_val_37663 === (5))){
var inst_37579 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37662__$1 = state_37662;
var statearr_37699_37740 = state_37662__$1;
(statearr_37699_37740[(2)] = inst_37579);

(statearr_37699_37740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (14))){
var inst_37606 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37662__$1 = state_37662;
if(inst_37606){
var statearr_37700_37741 = state_37662__$1;
(statearr_37700_37741[(1)] = (18));

} else {
var statearr_37701_37742 = state_37662__$1;
(statearr_37701_37742[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (26))){
var inst_37632 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37662__$1 = state_37662;
if(inst_37632){
var statearr_37702_37743 = state_37662__$1;
(statearr_37702_37743[(1)] = (30));

} else {
var statearr_37703_37744 = state_37662__$1;
(statearr_37703_37744[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (16))){
var inst_37598 = (state_37662[(2)]);
var inst_37599 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37600 = figwheel.client.heads_up.display_exception.call(null,inst_37599);
var state_37662__$1 = (function (){var statearr_37704 = state_37662;
(statearr_37704[(13)] = inst_37598);

return statearr_37704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37662__$1,(17),inst_37600);
} else {
if((state_val_37663 === (30))){
var inst_37634 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37635 = figwheel.client.heads_up.display_warning.call(null,inst_37634);
var state_37662__$1 = state_37662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37662__$1,(33),inst_37635);
} else {
if((state_val_37663 === (10))){
var inst_37592 = (state_37662[(2)]);
var state_37662__$1 = state_37662;
var statearr_37705_37745 = state_37662__$1;
(statearr_37705_37745[(2)] = inst_37592);

(statearr_37705_37745[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (18))){
var inst_37608 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37609 = figwheel.client.heads_up.display_exception.call(null,inst_37608);
var state_37662__$1 = state_37662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37662__$1,(21),inst_37609);
} else {
if((state_val_37663 === (37))){
var inst_37645 = (state_37662[(2)]);
var state_37662__$1 = state_37662;
var statearr_37706_37746 = state_37662__$1;
(statearr_37706_37746[(2)] = inst_37645);

(statearr_37706_37746[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37663 === (8))){
var inst_37584 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37662__$1 = state_37662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37662__$1,(11),inst_37584);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32326__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32231__auto__,c__32326__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32232__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32232__auto____0 = (function (){
var statearr_37707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37707[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32232__auto__);

(statearr_37707[(1)] = (1));

return statearr_37707;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32232__auto____1 = (function (state_37662){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_37662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e37708){if((e37708 instanceof Object)){
var ex__32235__auto__ = e37708;
var statearr_37709_37747 = state_37662;
(statearr_37709_37747[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37748 = state_37662;
state_37662 = G__37748;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32232__auto__ = function(state_37662){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32232__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32232__auto____1.call(this,state_37662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32232__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32232__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto__,msg_hist,msg_names,msg))
})();
var state__32328__auto__ = (function (){var statearr_37710 = f__32327__auto__.call(null);
(statearr_37710[(6)] = c__32326__auto__);

return statearr_37710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto__,msg_hist,msg_names,msg))
);

return c__32326__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32326__auto___37777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto___37777,ch){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto___37777,ch){
return (function (state_37763){
var state_val_37764 = (state_37763[(1)]);
if((state_val_37764 === (1))){
var state_37763__$1 = state_37763;
var statearr_37765_37778 = state_37763__$1;
(statearr_37765_37778[(2)] = null);

(statearr_37765_37778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (2))){
var state_37763__$1 = state_37763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37763__$1,(4),ch);
} else {
if((state_val_37764 === (3))){
var inst_37761 = (state_37763[(2)]);
var state_37763__$1 = state_37763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37763__$1,inst_37761);
} else {
if((state_val_37764 === (4))){
var inst_37751 = (state_37763[(7)]);
var inst_37751__$1 = (state_37763[(2)]);
var state_37763__$1 = (function (){var statearr_37766 = state_37763;
(statearr_37766[(7)] = inst_37751__$1);

return statearr_37766;
})();
if(cljs.core.truth_(inst_37751__$1)){
var statearr_37767_37779 = state_37763__$1;
(statearr_37767_37779[(1)] = (5));

} else {
var statearr_37768_37780 = state_37763__$1;
(statearr_37768_37780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (5))){
var inst_37751 = (state_37763[(7)]);
var inst_37753 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37751);
var state_37763__$1 = state_37763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37763__$1,(8),inst_37753);
} else {
if((state_val_37764 === (6))){
var state_37763__$1 = state_37763;
var statearr_37769_37781 = state_37763__$1;
(statearr_37769_37781[(2)] = null);

(statearr_37769_37781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (7))){
var inst_37759 = (state_37763[(2)]);
var state_37763__$1 = state_37763;
var statearr_37770_37782 = state_37763__$1;
(statearr_37770_37782[(2)] = inst_37759);

(statearr_37770_37782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37764 === (8))){
var inst_37755 = (state_37763[(2)]);
var state_37763__$1 = (function (){var statearr_37771 = state_37763;
(statearr_37771[(8)] = inst_37755);

return statearr_37771;
})();
var statearr_37772_37783 = state_37763__$1;
(statearr_37772_37783[(2)] = null);

(statearr_37772_37783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__32326__auto___37777,ch))
;
return ((function (switch__32231__auto__,c__32326__auto___37777,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32232__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32232__auto____0 = (function (){
var statearr_37773 = [null,null,null,null,null,null,null,null,null];
(statearr_37773[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32232__auto__);

(statearr_37773[(1)] = (1));

return statearr_37773;
});
var figwheel$client$heads_up_plugin_$_state_machine__32232__auto____1 = (function (state_37763){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_37763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e37774){if((e37774 instanceof Object)){
var ex__32235__auto__ = e37774;
var statearr_37775_37784 = state_37763;
(statearr_37775_37784[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37785 = state_37763;
state_37763 = G__37785;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32232__auto__ = function(state_37763){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32232__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32232__auto____1.call(this,state_37763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32232__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32232__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto___37777,ch))
})();
var state__32328__auto__ = (function (){var statearr_37776 = f__32327__auto__.call(null);
(statearr_37776[(6)] = c__32326__auto___37777);

return statearr_37776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto___37777,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto__){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto__){
return (function (state_37791){
var state_val_37792 = (state_37791[(1)]);
if((state_val_37792 === (1))){
var inst_37786 = cljs.core.async.timeout.call(null,(3000));
var state_37791__$1 = state_37791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37791__$1,(2),inst_37786);
} else {
if((state_val_37792 === (2))){
var inst_37788 = (state_37791[(2)]);
var inst_37789 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37791__$1 = (function (){var statearr_37793 = state_37791;
(statearr_37793[(7)] = inst_37788);

return statearr_37793;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37791__$1,inst_37789);
} else {
return null;
}
}
});})(c__32326__auto__))
;
return ((function (switch__32231__auto__,c__32326__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32232__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32232__auto____0 = (function (){
var statearr_37794 = [null,null,null,null,null,null,null,null];
(statearr_37794[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32232__auto__);

(statearr_37794[(1)] = (1));

return statearr_37794;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32232__auto____1 = (function (state_37791){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_37791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e37795){if((e37795 instanceof Object)){
var ex__32235__auto__ = e37795;
var statearr_37796_37798 = state_37791;
(statearr_37796_37798[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37799 = state_37791;
state_37791 = G__37799;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32232__auto__ = function(state_37791){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32232__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32232__auto____1.call(this,state_37791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32232__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32232__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto__))
})();
var state__32328__auto__ = (function (){var statearr_37797 = f__32327__auto__.call(null);
(statearr_37797[(6)] = c__32326__auto__);

return statearr_37797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto__))
);

return c__32326__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto__,figwheel_version,temp__5720__auto__){
return (function (state_37806){
var state_val_37807 = (state_37806[(1)]);
if((state_val_37807 === (1))){
var inst_37800 = cljs.core.async.timeout.call(null,(2000));
var state_37806__$1 = state_37806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37806__$1,(2),inst_37800);
} else {
if((state_val_37807 === (2))){
var inst_37802 = (state_37806[(2)]);
var inst_37803 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37804 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37803);
var state_37806__$1 = (function (){var statearr_37808 = state_37806;
(statearr_37808[(7)] = inst_37802);

return statearr_37808;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37806__$1,inst_37804);
} else {
return null;
}
}
});})(c__32326__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__32231__auto__,c__32326__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32232__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32232__auto____0 = (function (){
var statearr_37809 = [null,null,null,null,null,null,null,null];
(statearr_37809[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32232__auto__);

(statearr_37809[(1)] = (1));

return statearr_37809;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32232__auto____1 = (function (state_37806){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_37806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e37810){if((e37810 instanceof Object)){
var ex__32235__auto__ = e37810;
var statearr_37811_37813 = state_37806;
(statearr_37811_37813[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37814 = state_37806;
state_37806 = G__37814;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32232__auto__ = function(state_37806){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32232__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32232__auto____1.call(this,state_37806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32232__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32232__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto__,figwheel_version,temp__5720__auto__))
})();
var state__32328__auto__ = (function (){var statearr_37812 = f__32327__auto__.call(null);
(statearr_37812[(6)] = c__32326__auto__);

return statearr_37812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto__,figwheel_version,temp__5720__auto__))
);

return c__32326__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37815){
var map__37816 = p__37815;
var map__37816__$1 = (((((!((map__37816 == null))))?(((((map__37816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37816):map__37816);
var file = cljs.core.get.call(null,map__37816__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37816__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37816__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37818 = "";
var G__37818__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37818),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37818);
var G__37818__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37818__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37818__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37818__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37818__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37819){
var map__37820 = p__37819;
var map__37820__$1 = (((((!((map__37820 == null))))?(((((map__37820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37820):map__37820);
var ed = map__37820__$1;
var exception_data = cljs.core.get.call(null,map__37820__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37820__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_37823 = (function (){var G__37822 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37822)," Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,exception_data))].join('');
} else {
return G__37822;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_37823);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37824){
var map__37825 = p__37824;
var map__37825__$1 = (((((!((map__37825 == null))))?(((((map__37825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37825):map__37825);
var w = map__37825__$1;
var message = cljs.core.get.call(null,map__37825__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"dev-target/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"dev-target/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37827 = cljs.core.seq.call(null,plugins);
var chunk__37828 = null;
var count__37829 = (0);
var i__37830 = (0);
while(true){
if((i__37830 < count__37829)){
var vec__37831 = cljs.core._nth.call(null,chunk__37828,i__37830);
var k = cljs.core.nth.call(null,vec__37831,(0),null);
var plugin = cljs.core.nth.call(null,vec__37831,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37837 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37827,chunk__37828,count__37829,i__37830,pl_37837,vec__37831,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37837.call(null,msg_hist);
});})(seq__37827,chunk__37828,count__37829,i__37830,pl_37837,vec__37831,k,plugin))
);
} else {
}


var G__37838 = seq__37827;
var G__37839 = chunk__37828;
var G__37840 = count__37829;
var G__37841 = (i__37830 + (1));
seq__37827 = G__37838;
chunk__37828 = G__37839;
count__37829 = G__37840;
i__37830 = G__37841;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37827);
if(temp__5720__auto__){
var seq__37827__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37827__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__37827__$1);
var G__37842 = cljs.core.chunk_rest.call(null,seq__37827__$1);
var G__37843 = c__4461__auto__;
var G__37844 = cljs.core.count.call(null,c__4461__auto__);
var G__37845 = (0);
seq__37827 = G__37842;
chunk__37828 = G__37843;
count__37829 = G__37844;
i__37830 = G__37845;
continue;
} else {
var vec__37834 = cljs.core.first.call(null,seq__37827__$1);
var k = cljs.core.nth.call(null,vec__37834,(0),null);
var plugin = cljs.core.nth.call(null,vec__37834,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37846 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37827,chunk__37828,count__37829,i__37830,pl_37846,vec__37834,k,plugin,seq__37827__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37846.call(null,msg_hist);
});})(seq__37827,chunk__37828,count__37829,i__37830,pl_37846,vec__37834,k,plugin,seq__37827__$1,temp__5720__auto__))
);
} else {
}


var G__37847 = cljs.core.next.call(null,seq__37827__$1);
var G__37848 = null;
var G__37849 = (0);
var G__37850 = (0);
seq__37827 = G__37847;
chunk__37828 = G__37848;
count__37829 = G__37849;
i__37830 = G__37850;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37852 = arguments.length;
switch (G__37852) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37853_37858 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37854_37859 = null;
var count__37855_37860 = (0);
var i__37856_37861 = (0);
while(true){
if((i__37856_37861 < count__37855_37860)){
var msg_37862 = cljs.core._nth.call(null,chunk__37854_37859,i__37856_37861);
figwheel.client.socket.handle_incoming_message.call(null,msg_37862);


var G__37863 = seq__37853_37858;
var G__37864 = chunk__37854_37859;
var G__37865 = count__37855_37860;
var G__37866 = (i__37856_37861 + (1));
seq__37853_37858 = G__37863;
chunk__37854_37859 = G__37864;
count__37855_37860 = G__37865;
i__37856_37861 = G__37866;
continue;
} else {
var temp__5720__auto___37867 = cljs.core.seq.call(null,seq__37853_37858);
if(temp__5720__auto___37867){
var seq__37853_37868__$1 = temp__5720__auto___37867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37853_37868__$1)){
var c__4461__auto___37869 = cljs.core.chunk_first.call(null,seq__37853_37868__$1);
var G__37870 = cljs.core.chunk_rest.call(null,seq__37853_37868__$1);
var G__37871 = c__4461__auto___37869;
var G__37872 = cljs.core.count.call(null,c__4461__auto___37869);
var G__37873 = (0);
seq__37853_37858 = G__37870;
chunk__37854_37859 = G__37871;
count__37855_37860 = G__37872;
i__37856_37861 = G__37873;
continue;
} else {
var msg_37874 = cljs.core.first.call(null,seq__37853_37868__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37874);


var G__37875 = cljs.core.next.call(null,seq__37853_37868__$1);
var G__37876 = null;
var G__37877 = (0);
var G__37878 = (0);
seq__37853_37858 = G__37875;
chunk__37854_37859 = G__37876;
count__37855_37860 = G__37877;
i__37856_37861 = G__37878;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4647__auto__ = [];
var len__4641__auto___37883 = arguments.length;
var i__4642__auto___37884 = (0);
while(true){
if((i__4642__auto___37884 < len__4641__auto___37883)){
args__4647__auto__.push((arguments[i__4642__auto___37884]));

var G__37885 = (i__4642__auto___37884 + (1));
i__4642__auto___37884 = G__37885;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37880){
var map__37881 = p__37880;
var map__37881__$1 = (((((!((map__37881 == null))))?(((((map__37881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37881):map__37881);
var opts = map__37881__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37879){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37879));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37886){if((e37886 instanceof Error)){
var e = e37886;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37886;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37887){
var map__37888 = p__37887;
var map__37888__$1 = (((((!((map__37888 == null))))?(((((map__37888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37888):map__37888);
var msg_name = cljs.core.get.call(null,map__37888__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1568136995806

// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32386 = arguments.length;
switch (G__32386) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32387 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32387 = (function (f,blockable,meta32388){
this.f = f;
this.blockable = blockable;
this.meta32388 = meta32388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32389,meta32388__$1){
var self__ = this;
var _32389__$1 = this;
return (new cljs.core.async.t_cljs$core$async32387(self__.f,self__.blockable,meta32388__$1));
});

cljs.core.async.t_cljs$core$async32387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32389){
var self__ = this;
var _32389__$1 = this;
return self__.meta32388;
});

cljs.core.async.t_cljs$core$async32387.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32388","meta32388",461724340,null)], null);
});

cljs.core.async.t_cljs$core$async32387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32387";

cljs.core.async.t_cljs$core$async32387.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32387");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32387.
 */
cljs.core.async.__GT_t_cljs$core$async32387 = (function cljs$core$async$__GT_t_cljs$core$async32387(f__$1,blockable__$1,meta32388){
return (new cljs.core.async.t_cljs$core$async32387(f__$1,blockable__$1,meta32388));
});

}

return (new cljs.core.async.t_cljs$core$async32387(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32393 = arguments.length;
switch (G__32393) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32396 = arguments.length;
switch (G__32396) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32399 = arguments.length;
switch (G__32399) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32401 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32401);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32401,ret){
return (function (){
return fn1.call(null,val_32401);
});})(val_32401,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32403 = arguments.length;
switch (G__32403) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___32405 = n;
var x_32406 = (0);
while(true){
if((x_32406 < n__4518__auto___32405)){
(a[x_32406] = (0));

var G__32407 = (x_32406 + (1));
x_32406 = G__32407;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__32408 = (i + (1));
i = G__32408;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32409 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32409 = (function (flag,meta32410){
this.flag = flag;
this.meta32410 = meta32410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32411,meta32410__$1){
var self__ = this;
var _32411__$1 = this;
return (new cljs.core.async.t_cljs$core$async32409(self__.flag,meta32410__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32409.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32411){
var self__ = this;
var _32411__$1 = this;
return self__.meta32410;
});})(flag))
;

cljs.core.async.t_cljs$core$async32409.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32409.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32409.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32409.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32409.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32410","meta32410",-1734245409,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32409.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32409";

cljs.core.async.t_cljs$core$async32409.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32409");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32409.
 */
cljs.core.async.__GT_t_cljs$core$async32409 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32409(flag__$1,meta32410){
return (new cljs.core.async.t_cljs$core$async32409(flag__$1,meta32410));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32409(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32412 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32412 = (function (flag,cb,meta32413){
this.flag = flag;
this.cb = cb;
this.meta32413 = meta32413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32414,meta32413__$1){
var self__ = this;
var _32414__$1 = this;
return (new cljs.core.async.t_cljs$core$async32412(self__.flag,self__.cb,meta32413__$1));
});

cljs.core.async.t_cljs$core$async32412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32414){
var self__ = this;
var _32414__$1 = this;
return self__.meta32413;
});

cljs.core.async.t_cljs$core$async32412.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32412.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32412.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32412.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32413","meta32413",1205644109,null)], null);
});

cljs.core.async.t_cljs$core$async32412.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32412";

cljs.core.async.t_cljs$core$async32412.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32412");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32412.
 */
cljs.core.async.__GT_t_cljs$core$async32412 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32412(flag__$1,cb__$1,meta32413){
return (new cljs.core.async.t_cljs$core$async32412(flag__$1,cb__$1,meta32413));
});

}

return (new cljs.core.async.t_cljs$core$async32412(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32415_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32415_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32416_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32416_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32417 = (i + (1));
i = G__32417;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___32423 = arguments.length;
var i__4642__auto___32424 = (0);
while(true){
if((i__4642__auto___32424 < len__4641__auto___32423)){
args__4647__auto__.push((arguments[i__4642__auto___32424]));

var G__32425 = (i__4642__auto___32424 + (1));
i__4642__auto___32424 = G__32425;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32420){
var map__32421 = p__32420;
var map__32421__$1 = (((((!((map__32421 == null))))?(((((map__32421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32421):map__32421);
var opts = map__32421__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32418){
var G__32419 = cljs.core.first.call(null,seq32418);
var seq32418__$1 = cljs.core.next.call(null,seq32418);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32419,seq32418__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32427 = arguments.length;
switch (G__32427) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32326__auto___32473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto___32473){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto___32473){
return (function (state_32451){
var state_val_32452 = (state_32451[(1)]);
if((state_val_32452 === (7))){
var inst_32447 = (state_32451[(2)]);
var state_32451__$1 = state_32451;
var statearr_32453_32474 = state_32451__$1;
(statearr_32453_32474[(2)] = inst_32447);

(statearr_32453_32474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (1))){
var state_32451__$1 = state_32451;
var statearr_32454_32475 = state_32451__$1;
(statearr_32454_32475[(2)] = null);

(statearr_32454_32475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (4))){
var inst_32430 = (state_32451[(7)]);
var inst_32430__$1 = (state_32451[(2)]);
var inst_32431 = (inst_32430__$1 == null);
var state_32451__$1 = (function (){var statearr_32455 = state_32451;
(statearr_32455[(7)] = inst_32430__$1);

return statearr_32455;
})();
if(cljs.core.truth_(inst_32431)){
var statearr_32456_32476 = state_32451__$1;
(statearr_32456_32476[(1)] = (5));

} else {
var statearr_32457_32477 = state_32451__$1;
(statearr_32457_32477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (13))){
var state_32451__$1 = state_32451;
var statearr_32458_32478 = state_32451__$1;
(statearr_32458_32478[(2)] = null);

(statearr_32458_32478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (6))){
var inst_32430 = (state_32451[(7)]);
var state_32451__$1 = state_32451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32451__$1,(11),to,inst_32430);
} else {
if((state_val_32452 === (3))){
var inst_32449 = (state_32451[(2)]);
var state_32451__$1 = state_32451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32451__$1,inst_32449);
} else {
if((state_val_32452 === (12))){
var state_32451__$1 = state_32451;
var statearr_32459_32479 = state_32451__$1;
(statearr_32459_32479[(2)] = null);

(statearr_32459_32479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (2))){
var state_32451__$1 = state_32451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32451__$1,(4),from);
} else {
if((state_val_32452 === (11))){
var inst_32440 = (state_32451[(2)]);
var state_32451__$1 = state_32451;
if(cljs.core.truth_(inst_32440)){
var statearr_32460_32480 = state_32451__$1;
(statearr_32460_32480[(1)] = (12));

} else {
var statearr_32461_32481 = state_32451__$1;
(statearr_32461_32481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (9))){
var state_32451__$1 = state_32451;
var statearr_32462_32482 = state_32451__$1;
(statearr_32462_32482[(2)] = null);

(statearr_32462_32482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (5))){
var state_32451__$1 = state_32451;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32463_32483 = state_32451__$1;
(statearr_32463_32483[(1)] = (8));

} else {
var statearr_32464_32484 = state_32451__$1;
(statearr_32464_32484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (14))){
var inst_32445 = (state_32451[(2)]);
var state_32451__$1 = state_32451;
var statearr_32465_32485 = state_32451__$1;
(statearr_32465_32485[(2)] = inst_32445);

(statearr_32465_32485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (10))){
var inst_32437 = (state_32451[(2)]);
var state_32451__$1 = state_32451;
var statearr_32466_32486 = state_32451__$1;
(statearr_32466_32486[(2)] = inst_32437);

(statearr_32466_32486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (8))){
var inst_32434 = cljs.core.async.close_BANG_.call(null,to);
var state_32451__$1 = state_32451;
var statearr_32467_32487 = state_32451__$1;
(statearr_32467_32487[(2)] = inst_32434);

(statearr_32467_32487[(1)] = (10));


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
});})(c__32326__auto___32473))
;
return ((function (switch__32231__auto__,c__32326__auto___32473){
return (function() {
var cljs$core$async$state_machine__32232__auto__ = null;
var cljs$core$async$state_machine__32232__auto____0 = (function (){
var statearr_32468 = [null,null,null,null,null,null,null,null];
(statearr_32468[(0)] = cljs$core$async$state_machine__32232__auto__);

(statearr_32468[(1)] = (1));

return statearr_32468;
});
var cljs$core$async$state_machine__32232__auto____1 = (function (state_32451){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_32451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e32469){if((e32469 instanceof Object)){
var ex__32235__auto__ = e32469;
var statearr_32470_32488 = state_32451;
(statearr_32470_32488[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32489 = state_32451;
state_32451 = G__32489;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
cljs$core$async$state_machine__32232__auto__ = function(state_32451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32232__auto____1.call(this,state_32451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32232__auto____0;
cljs$core$async$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32232__auto____1;
return cljs$core$async$state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto___32473))
})();
var state__32328__auto__ = (function (){var statearr_32471 = f__32327__auto__.call(null);
(statearr_32471[(6)] = c__32326__auto___32473);

return statearr_32471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto___32473))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32490){
var vec__32491 = p__32490;
var v = cljs.core.nth.call(null,vec__32491,(0),null);
var p = cljs.core.nth.call(null,vec__32491,(1),null);
var job = vec__32491;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32326__auto___32662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto___32662,res,vec__32491,v,p,job,jobs,results){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto___32662,res,vec__32491,v,p,job,jobs,results){
return (function (state_32498){
var state_val_32499 = (state_32498[(1)]);
if((state_val_32499 === (1))){
var state_32498__$1 = state_32498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32498__$1,(2),res,v);
} else {
if((state_val_32499 === (2))){
var inst_32495 = (state_32498[(2)]);
var inst_32496 = cljs.core.async.close_BANG_.call(null,res);
var state_32498__$1 = (function (){var statearr_32500 = state_32498;
(statearr_32500[(7)] = inst_32495);

return statearr_32500;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32498__$1,inst_32496);
} else {
return null;
}
}
});})(c__32326__auto___32662,res,vec__32491,v,p,job,jobs,results))
;
return ((function (switch__32231__auto__,c__32326__auto___32662,res,vec__32491,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____0 = (function (){
var statearr_32501 = [null,null,null,null,null,null,null,null];
(statearr_32501[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__);

(statearr_32501[(1)] = (1));

return statearr_32501;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____1 = (function (state_32498){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_32498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e32502){if((e32502 instanceof Object)){
var ex__32235__auto__ = e32502;
var statearr_32503_32663 = state_32498;
(statearr_32503_32663[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32664 = state_32498;
state_32498 = G__32664;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__ = function(state_32498){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____1.call(this,state_32498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto___32662,res,vec__32491,v,p,job,jobs,results))
})();
var state__32328__auto__ = (function (){var statearr_32504 = f__32327__auto__.call(null);
(statearr_32504[(6)] = c__32326__auto___32662);

return statearr_32504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto___32662,res,vec__32491,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32505){
var vec__32506 = p__32505;
var v = cljs.core.nth.call(null,vec__32506,(0),null);
var p = cljs.core.nth.call(null,vec__32506,(1),null);
var job = vec__32506;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___32665 = n;
var __32666 = (0);
while(true){
if((__32666 < n__4518__auto___32665)){
var G__32509_32667 = type;
var G__32509_32668__$1 = (((G__32509_32667 instanceof cljs.core.Keyword))?G__32509_32667.fqn:null);
switch (G__32509_32668__$1) {
case "compute":
var c__32326__auto___32670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32666,c__32326__auto___32670,G__32509_32667,G__32509_32668__$1,n__4518__auto___32665,jobs,results,process,async){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (__32666,c__32326__auto___32670,G__32509_32667,G__32509_32668__$1,n__4518__auto___32665,jobs,results,process,async){
return (function (state_32522){
var state_val_32523 = (state_32522[(1)]);
if((state_val_32523 === (1))){
var state_32522__$1 = state_32522;
var statearr_32524_32671 = state_32522__$1;
(statearr_32524_32671[(2)] = null);

(statearr_32524_32671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32523 === (2))){
var state_32522__$1 = state_32522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32522__$1,(4),jobs);
} else {
if((state_val_32523 === (3))){
var inst_32520 = (state_32522[(2)]);
var state_32522__$1 = state_32522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32522__$1,inst_32520);
} else {
if((state_val_32523 === (4))){
var inst_32512 = (state_32522[(2)]);
var inst_32513 = process.call(null,inst_32512);
var state_32522__$1 = state_32522;
if(cljs.core.truth_(inst_32513)){
var statearr_32525_32672 = state_32522__$1;
(statearr_32525_32672[(1)] = (5));

} else {
var statearr_32526_32673 = state_32522__$1;
(statearr_32526_32673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32523 === (5))){
var state_32522__$1 = state_32522;
var statearr_32527_32674 = state_32522__$1;
(statearr_32527_32674[(2)] = null);

(statearr_32527_32674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32523 === (6))){
var state_32522__$1 = state_32522;
var statearr_32528_32675 = state_32522__$1;
(statearr_32528_32675[(2)] = null);

(statearr_32528_32675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32523 === (7))){
var inst_32518 = (state_32522[(2)]);
var state_32522__$1 = state_32522;
var statearr_32529_32676 = state_32522__$1;
(statearr_32529_32676[(2)] = inst_32518);

(statearr_32529_32676[(1)] = (3));


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
});})(__32666,c__32326__auto___32670,G__32509_32667,G__32509_32668__$1,n__4518__auto___32665,jobs,results,process,async))
;
return ((function (__32666,switch__32231__auto__,c__32326__auto___32670,G__32509_32667,G__32509_32668__$1,n__4518__auto___32665,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____0 = (function (){
var statearr_32530 = [null,null,null,null,null,null,null];
(statearr_32530[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__);

(statearr_32530[(1)] = (1));

return statearr_32530;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____1 = (function (state_32522){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_32522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e32531){if((e32531 instanceof Object)){
var ex__32235__auto__ = e32531;
var statearr_32532_32677 = state_32522;
(statearr_32532_32677[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32678 = state_32522;
state_32522 = G__32678;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__ = function(state_32522){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____1.call(this,state_32522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__;
})()
;})(__32666,switch__32231__auto__,c__32326__auto___32670,G__32509_32667,G__32509_32668__$1,n__4518__auto___32665,jobs,results,process,async))
})();
var state__32328__auto__ = (function (){var statearr_32533 = f__32327__auto__.call(null);
(statearr_32533[(6)] = c__32326__auto___32670);

return statearr_32533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(__32666,c__32326__auto___32670,G__32509_32667,G__32509_32668__$1,n__4518__auto___32665,jobs,results,process,async))
);


break;
case "async":
var c__32326__auto___32679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32666,c__32326__auto___32679,G__32509_32667,G__32509_32668__$1,n__4518__auto___32665,jobs,results,process,async){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (__32666,c__32326__auto___32679,G__32509_32667,G__32509_32668__$1,n__4518__auto___32665,jobs,results,process,async){
return (function (state_32546){
var state_val_32547 = (state_32546[(1)]);
if((state_val_32547 === (1))){
var state_32546__$1 = state_32546;
var statearr_32548_32680 = state_32546__$1;
(statearr_32548_32680[(2)] = null);

(statearr_32548_32680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (2))){
var state_32546__$1 = state_32546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32546__$1,(4),jobs);
} else {
if((state_val_32547 === (3))){
var inst_32544 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32546__$1,inst_32544);
} else {
if((state_val_32547 === (4))){
var inst_32536 = (state_32546[(2)]);
var inst_32537 = async.call(null,inst_32536);
var state_32546__$1 = state_32546;
if(cljs.core.truth_(inst_32537)){
var statearr_32549_32681 = state_32546__$1;
(statearr_32549_32681[(1)] = (5));

} else {
var statearr_32550_32682 = state_32546__$1;
(statearr_32550_32682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (5))){
var state_32546__$1 = state_32546;
var statearr_32551_32683 = state_32546__$1;
(statearr_32551_32683[(2)] = null);

(statearr_32551_32683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (6))){
var state_32546__$1 = state_32546;
var statearr_32552_32684 = state_32546__$1;
(statearr_32552_32684[(2)] = null);

(statearr_32552_32684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32547 === (7))){
var inst_32542 = (state_32546[(2)]);
var state_32546__$1 = state_32546;
var statearr_32553_32685 = state_32546__$1;
(statearr_32553_32685[(2)] = inst_32542);

(statearr_32553_32685[(1)] = (3));


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
});})(__32666,c__32326__auto___32679,G__32509_32667,G__32509_32668__$1,n__4518__auto___32665,jobs,results,process,async))
;
return ((function (__32666,switch__32231__auto__,c__32326__auto___32679,G__32509_32667,G__32509_32668__$1,n__4518__auto___32665,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____0 = (function (){
var statearr_32554 = [null,null,null,null,null,null,null];
(statearr_32554[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__);

(statearr_32554[(1)] = (1));

return statearr_32554;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____1 = (function (state_32546){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_32546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e32555){if((e32555 instanceof Object)){
var ex__32235__auto__ = e32555;
var statearr_32556_32686 = state_32546;
(statearr_32556_32686[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32687 = state_32546;
state_32546 = G__32687;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__ = function(state_32546){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____1.call(this,state_32546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__;
})()
;})(__32666,switch__32231__auto__,c__32326__auto___32679,G__32509_32667,G__32509_32668__$1,n__4518__auto___32665,jobs,results,process,async))
})();
var state__32328__auto__ = (function (){var statearr_32557 = f__32327__auto__.call(null);
(statearr_32557[(6)] = c__32326__auto___32679);

return statearr_32557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(__32666,c__32326__auto___32679,G__32509_32667,G__32509_32668__$1,n__4518__auto___32665,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32509_32668__$1)].join('')));

}

var G__32688 = (__32666 + (1));
__32666 = G__32688;
continue;
} else {
}
break;
}

var c__32326__auto___32689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto___32689,jobs,results,process,async){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto___32689,jobs,results,process,async){
return (function (state_32579){
var state_val_32580 = (state_32579[(1)]);
if((state_val_32580 === (7))){
var inst_32575 = (state_32579[(2)]);
var state_32579__$1 = state_32579;
var statearr_32581_32690 = state_32579__$1;
(statearr_32581_32690[(2)] = inst_32575);

(statearr_32581_32690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (1))){
var state_32579__$1 = state_32579;
var statearr_32582_32691 = state_32579__$1;
(statearr_32582_32691[(2)] = null);

(statearr_32582_32691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (4))){
var inst_32560 = (state_32579[(7)]);
var inst_32560__$1 = (state_32579[(2)]);
var inst_32561 = (inst_32560__$1 == null);
var state_32579__$1 = (function (){var statearr_32583 = state_32579;
(statearr_32583[(7)] = inst_32560__$1);

return statearr_32583;
})();
if(cljs.core.truth_(inst_32561)){
var statearr_32584_32692 = state_32579__$1;
(statearr_32584_32692[(1)] = (5));

} else {
var statearr_32585_32693 = state_32579__$1;
(statearr_32585_32693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (6))){
var inst_32560 = (state_32579[(7)]);
var inst_32565 = (state_32579[(8)]);
var inst_32565__$1 = cljs.core.async.chan.call(null,(1));
var inst_32566 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32567 = [inst_32560,inst_32565__$1];
var inst_32568 = (new cljs.core.PersistentVector(null,2,(5),inst_32566,inst_32567,null));
var state_32579__$1 = (function (){var statearr_32586 = state_32579;
(statearr_32586[(8)] = inst_32565__$1);

return statearr_32586;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32579__$1,(8),jobs,inst_32568);
} else {
if((state_val_32580 === (3))){
var inst_32577 = (state_32579[(2)]);
var state_32579__$1 = state_32579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32579__$1,inst_32577);
} else {
if((state_val_32580 === (2))){
var state_32579__$1 = state_32579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32579__$1,(4),from);
} else {
if((state_val_32580 === (9))){
var inst_32572 = (state_32579[(2)]);
var state_32579__$1 = (function (){var statearr_32587 = state_32579;
(statearr_32587[(9)] = inst_32572);

return statearr_32587;
})();
var statearr_32588_32694 = state_32579__$1;
(statearr_32588_32694[(2)] = null);

(statearr_32588_32694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (5))){
var inst_32563 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32579__$1 = state_32579;
var statearr_32589_32695 = state_32579__$1;
(statearr_32589_32695[(2)] = inst_32563);

(statearr_32589_32695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (8))){
var inst_32565 = (state_32579[(8)]);
var inst_32570 = (state_32579[(2)]);
var state_32579__$1 = (function (){var statearr_32590 = state_32579;
(statearr_32590[(10)] = inst_32570);

return statearr_32590;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32579__$1,(9),results,inst_32565);
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
});})(c__32326__auto___32689,jobs,results,process,async))
;
return ((function (switch__32231__auto__,c__32326__auto___32689,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____0 = (function (){
var statearr_32591 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32591[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__);

(statearr_32591[(1)] = (1));

return statearr_32591;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____1 = (function (state_32579){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_32579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e32592){if((e32592 instanceof Object)){
var ex__32235__auto__ = e32592;
var statearr_32593_32696 = state_32579;
(statearr_32593_32696[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32697 = state_32579;
state_32579 = G__32697;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__ = function(state_32579){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____1.call(this,state_32579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto___32689,jobs,results,process,async))
})();
var state__32328__auto__ = (function (){var statearr_32594 = f__32327__auto__.call(null);
(statearr_32594[(6)] = c__32326__auto___32689);

return statearr_32594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto___32689,jobs,results,process,async))
);


var c__32326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto__,jobs,results,process,async){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto__,jobs,results,process,async){
return (function (state_32632){
var state_val_32633 = (state_32632[(1)]);
if((state_val_32633 === (7))){
var inst_32628 = (state_32632[(2)]);
var state_32632__$1 = state_32632;
var statearr_32634_32698 = state_32632__$1;
(statearr_32634_32698[(2)] = inst_32628);

(statearr_32634_32698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (20))){
var state_32632__$1 = state_32632;
var statearr_32635_32699 = state_32632__$1;
(statearr_32635_32699[(2)] = null);

(statearr_32635_32699[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (1))){
var state_32632__$1 = state_32632;
var statearr_32636_32700 = state_32632__$1;
(statearr_32636_32700[(2)] = null);

(statearr_32636_32700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (4))){
var inst_32597 = (state_32632[(7)]);
var inst_32597__$1 = (state_32632[(2)]);
var inst_32598 = (inst_32597__$1 == null);
var state_32632__$1 = (function (){var statearr_32637 = state_32632;
(statearr_32637[(7)] = inst_32597__$1);

return statearr_32637;
})();
if(cljs.core.truth_(inst_32598)){
var statearr_32638_32701 = state_32632__$1;
(statearr_32638_32701[(1)] = (5));

} else {
var statearr_32639_32702 = state_32632__$1;
(statearr_32639_32702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (15))){
var inst_32610 = (state_32632[(8)]);
var state_32632__$1 = state_32632;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32632__$1,(18),to,inst_32610);
} else {
if((state_val_32633 === (21))){
var inst_32623 = (state_32632[(2)]);
var state_32632__$1 = state_32632;
var statearr_32640_32703 = state_32632__$1;
(statearr_32640_32703[(2)] = inst_32623);

(statearr_32640_32703[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (13))){
var inst_32625 = (state_32632[(2)]);
var state_32632__$1 = (function (){var statearr_32641 = state_32632;
(statearr_32641[(9)] = inst_32625);

return statearr_32641;
})();
var statearr_32642_32704 = state_32632__$1;
(statearr_32642_32704[(2)] = null);

(statearr_32642_32704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (6))){
var inst_32597 = (state_32632[(7)]);
var state_32632__$1 = state_32632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32632__$1,(11),inst_32597);
} else {
if((state_val_32633 === (17))){
var inst_32618 = (state_32632[(2)]);
var state_32632__$1 = state_32632;
if(cljs.core.truth_(inst_32618)){
var statearr_32643_32705 = state_32632__$1;
(statearr_32643_32705[(1)] = (19));

} else {
var statearr_32644_32706 = state_32632__$1;
(statearr_32644_32706[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (3))){
var inst_32630 = (state_32632[(2)]);
var state_32632__$1 = state_32632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32632__$1,inst_32630);
} else {
if((state_val_32633 === (12))){
var inst_32607 = (state_32632[(10)]);
var state_32632__$1 = state_32632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32632__$1,(14),inst_32607);
} else {
if((state_val_32633 === (2))){
var state_32632__$1 = state_32632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32632__$1,(4),results);
} else {
if((state_val_32633 === (19))){
var state_32632__$1 = state_32632;
var statearr_32645_32707 = state_32632__$1;
(statearr_32645_32707[(2)] = null);

(statearr_32645_32707[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (11))){
var inst_32607 = (state_32632[(2)]);
var state_32632__$1 = (function (){var statearr_32646 = state_32632;
(statearr_32646[(10)] = inst_32607);

return statearr_32646;
})();
var statearr_32647_32708 = state_32632__$1;
(statearr_32647_32708[(2)] = null);

(statearr_32647_32708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (9))){
var state_32632__$1 = state_32632;
var statearr_32648_32709 = state_32632__$1;
(statearr_32648_32709[(2)] = null);

(statearr_32648_32709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (5))){
var state_32632__$1 = state_32632;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32649_32710 = state_32632__$1;
(statearr_32649_32710[(1)] = (8));

} else {
var statearr_32650_32711 = state_32632__$1;
(statearr_32650_32711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (14))){
var inst_32612 = (state_32632[(11)]);
var inst_32610 = (state_32632[(8)]);
var inst_32610__$1 = (state_32632[(2)]);
var inst_32611 = (inst_32610__$1 == null);
var inst_32612__$1 = cljs.core.not.call(null,inst_32611);
var state_32632__$1 = (function (){var statearr_32651 = state_32632;
(statearr_32651[(11)] = inst_32612__$1);

(statearr_32651[(8)] = inst_32610__$1);

return statearr_32651;
})();
if(inst_32612__$1){
var statearr_32652_32712 = state_32632__$1;
(statearr_32652_32712[(1)] = (15));

} else {
var statearr_32653_32713 = state_32632__$1;
(statearr_32653_32713[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (16))){
var inst_32612 = (state_32632[(11)]);
var state_32632__$1 = state_32632;
var statearr_32654_32714 = state_32632__$1;
(statearr_32654_32714[(2)] = inst_32612);

(statearr_32654_32714[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (10))){
var inst_32604 = (state_32632[(2)]);
var state_32632__$1 = state_32632;
var statearr_32655_32715 = state_32632__$1;
(statearr_32655_32715[(2)] = inst_32604);

(statearr_32655_32715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (18))){
var inst_32615 = (state_32632[(2)]);
var state_32632__$1 = state_32632;
var statearr_32656_32716 = state_32632__$1;
(statearr_32656_32716[(2)] = inst_32615);

(statearr_32656_32716[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (8))){
var inst_32601 = cljs.core.async.close_BANG_.call(null,to);
var state_32632__$1 = state_32632;
var statearr_32657_32717 = state_32632__$1;
(statearr_32657_32717[(2)] = inst_32601);

(statearr_32657_32717[(1)] = (10));


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
}
}
}
}
});})(c__32326__auto__,jobs,results,process,async))
;
return ((function (switch__32231__auto__,c__32326__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____0 = (function (){
var statearr_32658 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32658[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__);

(statearr_32658[(1)] = (1));

return statearr_32658;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____1 = (function (state_32632){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_32632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e32659){if((e32659 instanceof Object)){
var ex__32235__auto__ = e32659;
var statearr_32660_32718 = state_32632;
(statearr_32660_32718[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32719 = state_32632;
state_32632 = G__32719;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__ = function(state_32632){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____1.call(this,state_32632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32232__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto__,jobs,results,process,async))
})();
var state__32328__auto__ = (function (){var statearr_32661 = f__32327__auto__.call(null);
(statearr_32661[(6)] = c__32326__auto__);

return statearr_32661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto__,jobs,results,process,async))
);

return c__32326__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32721 = arguments.length;
switch (G__32721) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32724 = arguments.length;
switch (G__32724) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32727 = arguments.length;
switch (G__32727) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32326__auto___32776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto___32776,tc,fc){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto___32776,tc,fc){
return (function (state_32753){
var state_val_32754 = (state_32753[(1)]);
if((state_val_32754 === (7))){
var inst_32749 = (state_32753[(2)]);
var state_32753__$1 = state_32753;
var statearr_32755_32777 = state_32753__$1;
(statearr_32755_32777[(2)] = inst_32749);

(statearr_32755_32777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (1))){
var state_32753__$1 = state_32753;
var statearr_32756_32778 = state_32753__$1;
(statearr_32756_32778[(2)] = null);

(statearr_32756_32778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (4))){
var inst_32730 = (state_32753[(7)]);
var inst_32730__$1 = (state_32753[(2)]);
var inst_32731 = (inst_32730__$1 == null);
var state_32753__$1 = (function (){var statearr_32757 = state_32753;
(statearr_32757[(7)] = inst_32730__$1);

return statearr_32757;
})();
if(cljs.core.truth_(inst_32731)){
var statearr_32758_32779 = state_32753__$1;
(statearr_32758_32779[(1)] = (5));

} else {
var statearr_32759_32780 = state_32753__$1;
(statearr_32759_32780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (13))){
var state_32753__$1 = state_32753;
var statearr_32760_32781 = state_32753__$1;
(statearr_32760_32781[(2)] = null);

(statearr_32760_32781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (6))){
var inst_32730 = (state_32753[(7)]);
var inst_32736 = p.call(null,inst_32730);
var state_32753__$1 = state_32753;
if(cljs.core.truth_(inst_32736)){
var statearr_32761_32782 = state_32753__$1;
(statearr_32761_32782[(1)] = (9));

} else {
var statearr_32762_32783 = state_32753__$1;
(statearr_32762_32783[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (3))){
var inst_32751 = (state_32753[(2)]);
var state_32753__$1 = state_32753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32753__$1,inst_32751);
} else {
if((state_val_32754 === (12))){
var state_32753__$1 = state_32753;
var statearr_32763_32784 = state_32753__$1;
(statearr_32763_32784[(2)] = null);

(statearr_32763_32784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (2))){
var state_32753__$1 = state_32753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32753__$1,(4),ch);
} else {
if((state_val_32754 === (11))){
var inst_32730 = (state_32753[(7)]);
var inst_32740 = (state_32753[(2)]);
var state_32753__$1 = state_32753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32753__$1,(8),inst_32740,inst_32730);
} else {
if((state_val_32754 === (9))){
var state_32753__$1 = state_32753;
var statearr_32764_32785 = state_32753__$1;
(statearr_32764_32785[(2)] = tc);

(statearr_32764_32785[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (5))){
var inst_32733 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32734 = cljs.core.async.close_BANG_.call(null,fc);
var state_32753__$1 = (function (){var statearr_32765 = state_32753;
(statearr_32765[(8)] = inst_32733);

return statearr_32765;
})();
var statearr_32766_32786 = state_32753__$1;
(statearr_32766_32786[(2)] = inst_32734);

(statearr_32766_32786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (14))){
var inst_32747 = (state_32753[(2)]);
var state_32753__$1 = state_32753;
var statearr_32767_32787 = state_32753__$1;
(statearr_32767_32787[(2)] = inst_32747);

(statearr_32767_32787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (10))){
var state_32753__$1 = state_32753;
var statearr_32768_32788 = state_32753__$1;
(statearr_32768_32788[(2)] = fc);

(statearr_32768_32788[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (8))){
var inst_32742 = (state_32753[(2)]);
var state_32753__$1 = state_32753;
if(cljs.core.truth_(inst_32742)){
var statearr_32769_32789 = state_32753__$1;
(statearr_32769_32789[(1)] = (12));

} else {
var statearr_32770_32790 = state_32753__$1;
(statearr_32770_32790[(1)] = (13));

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
});})(c__32326__auto___32776,tc,fc))
;
return ((function (switch__32231__auto__,c__32326__auto___32776,tc,fc){
return (function() {
var cljs$core$async$state_machine__32232__auto__ = null;
var cljs$core$async$state_machine__32232__auto____0 = (function (){
var statearr_32771 = [null,null,null,null,null,null,null,null,null];
(statearr_32771[(0)] = cljs$core$async$state_machine__32232__auto__);

(statearr_32771[(1)] = (1));

return statearr_32771;
});
var cljs$core$async$state_machine__32232__auto____1 = (function (state_32753){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_32753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e32772){if((e32772 instanceof Object)){
var ex__32235__auto__ = e32772;
var statearr_32773_32791 = state_32753;
(statearr_32773_32791[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32792 = state_32753;
state_32753 = G__32792;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
cljs$core$async$state_machine__32232__auto__ = function(state_32753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32232__auto____1.call(this,state_32753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32232__auto____0;
cljs$core$async$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32232__auto____1;
return cljs$core$async$state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto___32776,tc,fc))
})();
var state__32328__auto__ = (function (){var statearr_32774 = f__32327__auto__.call(null);
(statearr_32774[(6)] = c__32326__auto___32776);

return statearr_32774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto___32776,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto__){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto__){
return (function (state_32813){
var state_val_32814 = (state_32813[(1)]);
if((state_val_32814 === (7))){
var inst_32809 = (state_32813[(2)]);
var state_32813__$1 = state_32813;
var statearr_32815_32833 = state_32813__$1;
(statearr_32815_32833[(2)] = inst_32809);

(statearr_32815_32833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32814 === (1))){
var inst_32793 = init;
var state_32813__$1 = (function (){var statearr_32816 = state_32813;
(statearr_32816[(7)] = inst_32793);

return statearr_32816;
})();
var statearr_32817_32834 = state_32813__$1;
(statearr_32817_32834[(2)] = null);

(statearr_32817_32834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32814 === (4))){
var inst_32796 = (state_32813[(8)]);
var inst_32796__$1 = (state_32813[(2)]);
var inst_32797 = (inst_32796__$1 == null);
var state_32813__$1 = (function (){var statearr_32818 = state_32813;
(statearr_32818[(8)] = inst_32796__$1);

return statearr_32818;
})();
if(cljs.core.truth_(inst_32797)){
var statearr_32819_32835 = state_32813__$1;
(statearr_32819_32835[(1)] = (5));

} else {
var statearr_32820_32836 = state_32813__$1;
(statearr_32820_32836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32814 === (6))){
var inst_32793 = (state_32813[(7)]);
var inst_32796 = (state_32813[(8)]);
var inst_32800 = (state_32813[(9)]);
var inst_32800__$1 = f.call(null,inst_32793,inst_32796);
var inst_32801 = cljs.core.reduced_QMARK_.call(null,inst_32800__$1);
var state_32813__$1 = (function (){var statearr_32821 = state_32813;
(statearr_32821[(9)] = inst_32800__$1);

return statearr_32821;
})();
if(inst_32801){
var statearr_32822_32837 = state_32813__$1;
(statearr_32822_32837[(1)] = (8));

} else {
var statearr_32823_32838 = state_32813__$1;
(statearr_32823_32838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32814 === (3))){
var inst_32811 = (state_32813[(2)]);
var state_32813__$1 = state_32813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32813__$1,inst_32811);
} else {
if((state_val_32814 === (2))){
var state_32813__$1 = state_32813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32813__$1,(4),ch);
} else {
if((state_val_32814 === (9))){
var inst_32800 = (state_32813[(9)]);
var inst_32793 = inst_32800;
var state_32813__$1 = (function (){var statearr_32824 = state_32813;
(statearr_32824[(7)] = inst_32793);

return statearr_32824;
})();
var statearr_32825_32839 = state_32813__$1;
(statearr_32825_32839[(2)] = null);

(statearr_32825_32839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32814 === (5))){
var inst_32793 = (state_32813[(7)]);
var state_32813__$1 = state_32813;
var statearr_32826_32840 = state_32813__$1;
(statearr_32826_32840[(2)] = inst_32793);

(statearr_32826_32840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32814 === (10))){
var inst_32807 = (state_32813[(2)]);
var state_32813__$1 = state_32813;
var statearr_32827_32841 = state_32813__$1;
(statearr_32827_32841[(2)] = inst_32807);

(statearr_32827_32841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32814 === (8))){
var inst_32800 = (state_32813[(9)]);
var inst_32803 = cljs.core.deref.call(null,inst_32800);
var state_32813__$1 = state_32813;
var statearr_32828_32842 = state_32813__$1;
(statearr_32828_32842[(2)] = inst_32803);

(statearr_32828_32842[(1)] = (10));


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
});})(c__32326__auto__))
;
return ((function (switch__32231__auto__,c__32326__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32232__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32232__auto____0 = (function (){
var statearr_32829 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32829[(0)] = cljs$core$async$reduce_$_state_machine__32232__auto__);

(statearr_32829[(1)] = (1));

return statearr_32829;
});
var cljs$core$async$reduce_$_state_machine__32232__auto____1 = (function (state_32813){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_32813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e32830){if((e32830 instanceof Object)){
var ex__32235__auto__ = e32830;
var statearr_32831_32843 = state_32813;
(statearr_32831_32843[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32844 = state_32813;
state_32813 = G__32844;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32232__auto__ = function(state_32813){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32232__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32232__auto____1.call(this,state_32813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32232__auto____0;
cljs$core$async$reduce_$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32232__auto____1;
return cljs$core$async$reduce_$_state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto__))
})();
var state__32328__auto__ = (function (){var statearr_32832 = f__32327__auto__.call(null);
(statearr_32832[(6)] = c__32326__auto__);

return statearr_32832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto__))
);

return c__32326__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto__,f__$1){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto__,f__$1){
return (function (state_32850){
var state_val_32851 = (state_32850[(1)]);
if((state_val_32851 === (1))){
var inst_32845 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32850__$1 = state_32850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32850__$1,(2),inst_32845);
} else {
if((state_val_32851 === (2))){
var inst_32847 = (state_32850[(2)]);
var inst_32848 = f__$1.call(null,inst_32847);
var state_32850__$1 = state_32850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32850__$1,inst_32848);
} else {
return null;
}
}
});})(c__32326__auto__,f__$1))
;
return ((function (switch__32231__auto__,c__32326__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32232__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32232__auto____0 = (function (){
var statearr_32852 = [null,null,null,null,null,null,null];
(statearr_32852[(0)] = cljs$core$async$transduce_$_state_machine__32232__auto__);

(statearr_32852[(1)] = (1));

return statearr_32852;
});
var cljs$core$async$transduce_$_state_machine__32232__auto____1 = (function (state_32850){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_32850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e32853){if((e32853 instanceof Object)){
var ex__32235__auto__ = e32853;
var statearr_32854_32856 = state_32850;
(statearr_32854_32856[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32857 = state_32850;
state_32850 = G__32857;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32232__auto__ = function(state_32850){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32232__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32232__auto____1.call(this,state_32850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32232__auto____0;
cljs$core$async$transduce_$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32232__auto____1;
return cljs$core$async$transduce_$_state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto__,f__$1))
})();
var state__32328__auto__ = (function (){var statearr_32855 = f__32327__auto__.call(null);
(statearr_32855[(6)] = c__32326__auto__);

return statearr_32855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto__,f__$1))
);

return c__32326__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32859 = arguments.length;
switch (G__32859) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto__){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto__){
return (function (state_32884){
var state_val_32885 = (state_32884[(1)]);
if((state_val_32885 === (7))){
var inst_32866 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_32886_32907 = state_32884__$1;
(statearr_32886_32907[(2)] = inst_32866);

(statearr_32886_32907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (1))){
var inst_32860 = cljs.core.seq.call(null,coll);
var inst_32861 = inst_32860;
var state_32884__$1 = (function (){var statearr_32887 = state_32884;
(statearr_32887[(7)] = inst_32861);

return statearr_32887;
})();
var statearr_32888_32908 = state_32884__$1;
(statearr_32888_32908[(2)] = null);

(statearr_32888_32908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (4))){
var inst_32861 = (state_32884[(7)]);
var inst_32864 = cljs.core.first.call(null,inst_32861);
var state_32884__$1 = state_32884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32884__$1,(7),ch,inst_32864);
} else {
if((state_val_32885 === (13))){
var inst_32878 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_32889_32909 = state_32884__$1;
(statearr_32889_32909[(2)] = inst_32878);

(statearr_32889_32909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (6))){
var inst_32869 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
if(cljs.core.truth_(inst_32869)){
var statearr_32890_32910 = state_32884__$1;
(statearr_32890_32910[(1)] = (8));

} else {
var statearr_32891_32911 = state_32884__$1;
(statearr_32891_32911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (3))){
var inst_32882 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32884__$1,inst_32882);
} else {
if((state_val_32885 === (12))){
var state_32884__$1 = state_32884;
var statearr_32892_32912 = state_32884__$1;
(statearr_32892_32912[(2)] = null);

(statearr_32892_32912[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (2))){
var inst_32861 = (state_32884[(7)]);
var state_32884__$1 = state_32884;
if(cljs.core.truth_(inst_32861)){
var statearr_32893_32913 = state_32884__$1;
(statearr_32893_32913[(1)] = (4));

} else {
var statearr_32894_32914 = state_32884__$1;
(statearr_32894_32914[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (11))){
var inst_32875 = cljs.core.async.close_BANG_.call(null,ch);
var state_32884__$1 = state_32884;
var statearr_32895_32915 = state_32884__$1;
(statearr_32895_32915[(2)] = inst_32875);

(statearr_32895_32915[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (9))){
var state_32884__$1 = state_32884;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32896_32916 = state_32884__$1;
(statearr_32896_32916[(1)] = (11));

} else {
var statearr_32897_32917 = state_32884__$1;
(statearr_32897_32917[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (5))){
var inst_32861 = (state_32884[(7)]);
var state_32884__$1 = state_32884;
var statearr_32898_32918 = state_32884__$1;
(statearr_32898_32918[(2)] = inst_32861);

(statearr_32898_32918[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (10))){
var inst_32880 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_32899_32919 = state_32884__$1;
(statearr_32899_32919[(2)] = inst_32880);

(statearr_32899_32919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (8))){
var inst_32861 = (state_32884[(7)]);
var inst_32871 = cljs.core.next.call(null,inst_32861);
var inst_32861__$1 = inst_32871;
var state_32884__$1 = (function (){var statearr_32900 = state_32884;
(statearr_32900[(7)] = inst_32861__$1);

return statearr_32900;
})();
var statearr_32901_32920 = state_32884__$1;
(statearr_32901_32920[(2)] = null);

(statearr_32901_32920[(1)] = (2));


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
});})(c__32326__auto__))
;
return ((function (switch__32231__auto__,c__32326__auto__){
return (function() {
var cljs$core$async$state_machine__32232__auto__ = null;
var cljs$core$async$state_machine__32232__auto____0 = (function (){
var statearr_32902 = [null,null,null,null,null,null,null,null];
(statearr_32902[(0)] = cljs$core$async$state_machine__32232__auto__);

(statearr_32902[(1)] = (1));

return statearr_32902;
});
var cljs$core$async$state_machine__32232__auto____1 = (function (state_32884){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_32884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e32903){if((e32903 instanceof Object)){
var ex__32235__auto__ = e32903;
var statearr_32904_32921 = state_32884;
(statearr_32904_32921[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32922 = state_32884;
state_32884 = G__32922;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
cljs$core$async$state_machine__32232__auto__ = function(state_32884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32232__auto____1.call(this,state_32884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32232__auto____0;
cljs$core$async$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32232__auto____1;
return cljs$core$async$state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto__))
})();
var state__32328__auto__ = (function (){var statearr_32905 = f__32327__auto__.call(null);
(statearr_32905[(6)] = c__32326__auto__);

return statearr_32905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto__))
);

return c__32326__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32923 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32923 = (function (ch,cs,meta32924){
this.ch = ch;
this.cs = cs;
this.meta32924 = meta32924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32925,meta32924__$1){
var self__ = this;
var _32925__$1 = this;
return (new cljs.core.async.t_cljs$core$async32923(self__.ch,self__.cs,meta32924__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32923.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32925){
var self__ = this;
var _32925__$1 = this;
return self__.meta32924;
});})(cs))
;

cljs.core.async.t_cljs$core$async32923.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32923.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32923.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32923.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32923.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32923.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32923.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32924","meta32924",-1276503101,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32923.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32923";

cljs.core.async.t_cljs$core$async32923.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32923");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32923.
 */
cljs.core.async.__GT_t_cljs$core$async32923 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32923(ch__$1,cs__$1,meta32924){
return (new cljs.core.async.t_cljs$core$async32923(ch__$1,cs__$1,meta32924));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32923(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32326__auto___33145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto___33145,cs,m,dchan,dctr,done){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto___33145,cs,m,dchan,dctr,done){
return (function (state_33060){
var state_val_33061 = (state_33060[(1)]);
if((state_val_33061 === (7))){
var inst_33056 = (state_33060[(2)]);
var state_33060__$1 = state_33060;
var statearr_33062_33146 = state_33060__$1;
(statearr_33062_33146[(2)] = inst_33056);

(statearr_33062_33146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (20))){
var inst_32959 = (state_33060[(7)]);
var inst_32971 = cljs.core.first.call(null,inst_32959);
var inst_32972 = cljs.core.nth.call(null,inst_32971,(0),null);
var inst_32973 = cljs.core.nth.call(null,inst_32971,(1),null);
var state_33060__$1 = (function (){var statearr_33063 = state_33060;
(statearr_33063[(8)] = inst_32972);

return statearr_33063;
})();
if(cljs.core.truth_(inst_32973)){
var statearr_33064_33147 = state_33060__$1;
(statearr_33064_33147[(1)] = (22));

} else {
var statearr_33065_33148 = state_33060__$1;
(statearr_33065_33148[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (27))){
var inst_33008 = (state_33060[(9)]);
var inst_33003 = (state_33060[(10)]);
var inst_32928 = (state_33060[(11)]);
var inst_33001 = (state_33060[(12)]);
var inst_33008__$1 = cljs.core._nth.call(null,inst_33001,inst_33003);
var inst_33009 = cljs.core.async.put_BANG_.call(null,inst_33008__$1,inst_32928,done);
var state_33060__$1 = (function (){var statearr_33066 = state_33060;
(statearr_33066[(9)] = inst_33008__$1);

return statearr_33066;
})();
if(cljs.core.truth_(inst_33009)){
var statearr_33067_33149 = state_33060__$1;
(statearr_33067_33149[(1)] = (30));

} else {
var statearr_33068_33150 = state_33060__$1;
(statearr_33068_33150[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (1))){
var state_33060__$1 = state_33060;
var statearr_33069_33151 = state_33060__$1;
(statearr_33069_33151[(2)] = null);

(statearr_33069_33151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (24))){
var inst_32959 = (state_33060[(7)]);
var inst_32978 = (state_33060[(2)]);
var inst_32979 = cljs.core.next.call(null,inst_32959);
var inst_32937 = inst_32979;
var inst_32938 = null;
var inst_32939 = (0);
var inst_32940 = (0);
var state_33060__$1 = (function (){var statearr_33070 = state_33060;
(statearr_33070[(13)] = inst_32938);

(statearr_33070[(14)] = inst_32978);

(statearr_33070[(15)] = inst_32937);

(statearr_33070[(16)] = inst_32939);

(statearr_33070[(17)] = inst_32940);

return statearr_33070;
})();
var statearr_33071_33152 = state_33060__$1;
(statearr_33071_33152[(2)] = null);

(statearr_33071_33152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (39))){
var state_33060__$1 = state_33060;
var statearr_33075_33153 = state_33060__$1;
(statearr_33075_33153[(2)] = null);

(statearr_33075_33153[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (4))){
var inst_32928 = (state_33060[(11)]);
var inst_32928__$1 = (state_33060[(2)]);
var inst_32929 = (inst_32928__$1 == null);
var state_33060__$1 = (function (){var statearr_33076 = state_33060;
(statearr_33076[(11)] = inst_32928__$1);

return statearr_33076;
})();
if(cljs.core.truth_(inst_32929)){
var statearr_33077_33154 = state_33060__$1;
(statearr_33077_33154[(1)] = (5));

} else {
var statearr_33078_33155 = state_33060__$1;
(statearr_33078_33155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (15))){
var inst_32938 = (state_33060[(13)]);
var inst_32937 = (state_33060[(15)]);
var inst_32939 = (state_33060[(16)]);
var inst_32940 = (state_33060[(17)]);
var inst_32955 = (state_33060[(2)]);
var inst_32956 = (inst_32940 + (1));
var tmp33072 = inst_32938;
var tmp33073 = inst_32937;
var tmp33074 = inst_32939;
var inst_32937__$1 = tmp33073;
var inst_32938__$1 = tmp33072;
var inst_32939__$1 = tmp33074;
var inst_32940__$1 = inst_32956;
var state_33060__$1 = (function (){var statearr_33079 = state_33060;
(statearr_33079[(13)] = inst_32938__$1);

(statearr_33079[(15)] = inst_32937__$1);

(statearr_33079[(16)] = inst_32939__$1);

(statearr_33079[(17)] = inst_32940__$1);

(statearr_33079[(18)] = inst_32955);

return statearr_33079;
})();
var statearr_33080_33156 = state_33060__$1;
(statearr_33080_33156[(2)] = null);

(statearr_33080_33156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (21))){
var inst_32982 = (state_33060[(2)]);
var state_33060__$1 = state_33060;
var statearr_33084_33157 = state_33060__$1;
(statearr_33084_33157[(2)] = inst_32982);

(statearr_33084_33157[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (31))){
var inst_33008 = (state_33060[(9)]);
var inst_33012 = done.call(null,null);
var inst_33013 = cljs.core.async.untap_STAR_.call(null,m,inst_33008);
var state_33060__$1 = (function (){var statearr_33085 = state_33060;
(statearr_33085[(19)] = inst_33012);

return statearr_33085;
})();
var statearr_33086_33158 = state_33060__$1;
(statearr_33086_33158[(2)] = inst_33013);

(statearr_33086_33158[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (32))){
var inst_33003 = (state_33060[(10)]);
var inst_33002 = (state_33060[(20)]);
var inst_33001 = (state_33060[(12)]);
var inst_33000 = (state_33060[(21)]);
var inst_33015 = (state_33060[(2)]);
var inst_33016 = (inst_33003 + (1));
var tmp33081 = inst_33002;
var tmp33082 = inst_33001;
var tmp33083 = inst_33000;
var inst_33000__$1 = tmp33083;
var inst_33001__$1 = tmp33082;
var inst_33002__$1 = tmp33081;
var inst_33003__$1 = inst_33016;
var state_33060__$1 = (function (){var statearr_33087 = state_33060;
(statearr_33087[(10)] = inst_33003__$1);

(statearr_33087[(22)] = inst_33015);

(statearr_33087[(20)] = inst_33002__$1);

(statearr_33087[(12)] = inst_33001__$1);

(statearr_33087[(21)] = inst_33000__$1);

return statearr_33087;
})();
var statearr_33088_33159 = state_33060__$1;
(statearr_33088_33159[(2)] = null);

(statearr_33088_33159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (40))){
var inst_33028 = (state_33060[(23)]);
var inst_33032 = done.call(null,null);
var inst_33033 = cljs.core.async.untap_STAR_.call(null,m,inst_33028);
var state_33060__$1 = (function (){var statearr_33089 = state_33060;
(statearr_33089[(24)] = inst_33032);

return statearr_33089;
})();
var statearr_33090_33160 = state_33060__$1;
(statearr_33090_33160[(2)] = inst_33033);

(statearr_33090_33160[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (33))){
var inst_33019 = (state_33060[(25)]);
var inst_33021 = cljs.core.chunked_seq_QMARK_.call(null,inst_33019);
var state_33060__$1 = state_33060;
if(inst_33021){
var statearr_33091_33161 = state_33060__$1;
(statearr_33091_33161[(1)] = (36));

} else {
var statearr_33092_33162 = state_33060__$1;
(statearr_33092_33162[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (13))){
var inst_32949 = (state_33060[(26)]);
var inst_32952 = cljs.core.async.close_BANG_.call(null,inst_32949);
var state_33060__$1 = state_33060;
var statearr_33093_33163 = state_33060__$1;
(statearr_33093_33163[(2)] = inst_32952);

(statearr_33093_33163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (22))){
var inst_32972 = (state_33060[(8)]);
var inst_32975 = cljs.core.async.close_BANG_.call(null,inst_32972);
var state_33060__$1 = state_33060;
var statearr_33094_33164 = state_33060__$1;
(statearr_33094_33164[(2)] = inst_32975);

(statearr_33094_33164[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (36))){
var inst_33019 = (state_33060[(25)]);
var inst_33023 = cljs.core.chunk_first.call(null,inst_33019);
var inst_33024 = cljs.core.chunk_rest.call(null,inst_33019);
var inst_33025 = cljs.core.count.call(null,inst_33023);
var inst_33000 = inst_33024;
var inst_33001 = inst_33023;
var inst_33002 = inst_33025;
var inst_33003 = (0);
var state_33060__$1 = (function (){var statearr_33095 = state_33060;
(statearr_33095[(10)] = inst_33003);

(statearr_33095[(20)] = inst_33002);

(statearr_33095[(12)] = inst_33001);

(statearr_33095[(21)] = inst_33000);

return statearr_33095;
})();
var statearr_33096_33165 = state_33060__$1;
(statearr_33096_33165[(2)] = null);

(statearr_33096_33165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (41))){
var inst_33019 = (state_33060[(25)]);
var inst_33035 = (state_33060[(2)]);
var inst_33036 = cljs.core.next.call(null,inst_33019);
var inst_33000 = inst_33036;
var inst_33001 = null;
var inst_33002 = (0);
var inst_33003 = (0);
var state_33060__$1 = (function (){var statearr_33097 = state_33060;
(statearr_33097[(10)] = inst_33003);

(statearr_33097[(27)] = inst_33035);

(statearr_33097[(20)] = inst_33002);

(statearr_33097[(12)] = inst_33001);

(statearr_33097[(21)] = inst_33000);

return statearr_33097;
})();
var statearr_33098_33166 = state_33060__$1;
(statearr_33098_33166[(2)] = null);

(statearr_33098_33166[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (43))){
var state_33060__$1 = state_33060;
var statearr_33099_33167 = state_33060__$1;
(statearr_33099_33167[(2)] = null);

(statearr_33099_33167[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (29))){
var inst_33044 = (state_33060[(2)]);
var state_33060__$1 = state_33060;
var statearr_33100_33168 = state_33060__$1;
(statearr_33100_33168[(2)] = inst_33044);

(statearr_33100_33168[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (44))){
var inst_33053 = (state_33060[(2)]);
var state_33060__$1 = (function (){var statearr_33101 = state_33060;
(statearr_33101[(28)] = inst_33053);

return statearr_33101;
})();
var statearr_33102_33169 = state_33060__$1;
(statearr_33102_33169[(2)] = null);

(statearr_33102_33169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (6))){
var inst_32992 = (state_33060[(29)]);
var inst_32991 = cljs.core.deref.call(null,cs);
var inst_32992__$1 = cljs.core.keys.call(null,inst_32991);
var inst_32993 = cljs.core.count.call(null,inst_32992__$1);
var inst_32994 = cljs.core.reset_BANG_.call(null,dctr,inst_32993);
var inst_32999 = cljs.core.seq.call(null,inst_32992__$1);
var inst_33000 = inst_32999;
var inst_33001 = null;
var inst_33002 = (0);
var inst_33003 = (0);
var state_33060__$1 = (function (){var statearr_33103 = state_33060;
(statearr_33103[(10)] = inst_33003);

(statearr_33103[(20)] = inst_33002);

(statearr_33103[(29)] = inst_32992__$1);

(statearr_33103[(30)] = inst_32994);

(statearr_33103[(12)] = inst_33001);

(statearr_33103[(21)] = inst_33000);

return statearr_33103;
})();
var statearr_33104_33170 = state_33060__$1;
(statearr_33104_33170[(2)] = null);

(statearr_33104_33170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (28))){
var inst_33019 = (state_33060[(25)]);
var inst_33000 = (state_33060[(21)]);
var inst_33019__$1 = cljs.core.seq.call(null,inst_33000);
var state_33060__$1 = (function (){var statearr_33105 = state_33060;
(statearr_33105[(25)] = inst_33019__$1);

return statearr_33105;
})();
if(inst_33019__$1){
var statearr_33106_33171 = state_33060__$1;
(statearr_33106_33171[(1)] = (33));

} else {
var statearr_33107_33172 = state_33060__$1;
(statearr_33107_33172[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (25))){
var inst_33003 = (state_33060[(10)]);
var inst_33002 = (state_33060[(20)]);
var inst_33005 = (inst_33003 < inst_33002);
var inst_33006 = inst_33005;
var state_33060__$1 = state_33060;
if(cljs.core.truth_(inst_33006)){
var statearr_33108_33173 = state_33060__$1;
(statearr_33108_33173[(1)] = (27));

} else {
var statearr_33109_33174 = state_33060__$1;
(statearr_33109_33174[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (34))){
var state_33060__$1 = state_33060;
var statearr_33110_33175 = state_33060__$1;
(statearr_33110_33175[(2)] = null);

(statearr_33110_33175[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (17))){
var state_33060__$1 = state_33060;
var statearr_33111_33176 = state_33060__$1;
(statearr_33111_33176[(2)] = null);

(statearr_33111_33176[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (3))){
var inst_33058 = (state_33060[(2)]);
var state_33060__$1 = state_33060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33060__$1,inst_33058);
} else {
if((state_val_33061 === (12))){
var inst_32987 = (state_33060[(2)]);
var state_33060__$1 = state_33060;
var statearr_33112_33177 = state_33060__$1;
(statearr_33112_33177[(2)] = inst_32987);

(statearr_33112_33177[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (2))){
var state_33060__$1 = state_33060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33060__$1,(4),ch);
} else {
if((state_val_33061 === (23))){
var state_33060__$1 = state_33060;
var statearr_33113_33178 = state_33060__$1;
(statearr_33113_33178[(2)] = null);

(statearr_33113_33178[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (35))){
var inst_33042 = (state_33060[(2)]);
var state_33060__$1 = state_33060;
var statearr_33114_33179 = state_33060__$1;
(statearr_33114_33179[(2)] = inst_33042);

(statearr_33114_33179[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (19))){
var inst_32959 = (state_33060[(7)]);
var inst_32963 = cljs.core.chunk_first.call(null,inst_32959);
var inst_32964 = cljs.core.chunk_rest.call(null,inst_32959);
var inst_32965 = cljs.core.count.call(null,inst_32963);
var inst_32937 = inst_32964;
var inst_32938 = inst_32963;
var inst_32939 = inst_32965;
var inst_32940 = (0);
var state_33060__$1 = (function (){var statearr_33115 = state_33060;
(statearr_33115[(13)] = inst_32938);

(statearr_33115[(15)] = inst_32937);

(statearr_33115[(16)] = inst_32939);

(statearr_33115[(17)] = inst_32940);

return statearr_33115;
})();
var statearr_33116_33180 = state_33060__$1;
(statearr_33116_33180[(2)] = null);

(statearr_33116_33180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (11))){
var inst_32959 = (state_33060[(7)]);
var inst_32937 = (state_33060[(15)]);
var inst_32959__$1 = cljs.core.seq.call(null,inst_32937);
var state_33060__$1 = (function (){var statearr_33117 = state_33060;
(statearr_33117[(7)] = inst_32959__$1);

return statearr_33117;
})();
if(inst_32959__$1){
var statearr_33118_33181 = state_33060__$1;
(statearr_33118_33181[(1)] = (16));

} else {
var statearr_33119_33182 = state_33060__$1;
(statearr_33119_33182[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (9))){
var inst_32989 = (state_33060[(2)]);
var state_33060__$1 = state_33060;
var statearr_33120_33183 = state_33060__$1;
(statearr_33120_33183[(2)] = inst_32989);

(statearr_33120_33183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (5))){
var inst_32935 = cljs.core.deref.call(null,cs);
var inst_32936 = cljs.core.seq.call(null,inst_32935);
var inst_32937 = inst_32936;
var inst_32938 = null;
var inst_32939 = (0);
var inst_32940 = (0);
var state_33060__$1 = (function (){var statearr_33121 = state_33060;
(statearr_33121[(13)] = inst_32938);

(statearr_33121[(15)] = inst_32937);

(statearr_33121[(16)] = inst_32939);

(statearr_33121[(17)] = inst_32940);

return statearr_33121;
})();
var statearr_33122_33184 = state_33060__$1;
(statearr_33122_33184[(2)] = null);

(statearr_33122_33184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (14))){
var state_33060__$1 = state_33060;
var statearr_33123_33185 = state_33060__$1;
(statearr_33123_33185[(2)] = null);

(statearr_33123_33185[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (45))){
var inst_33050 = (state_33060[(2)]);
var state_33060__$1 = state_33060;
var statearr_33124_33186 = state_33060__$1;
(statearr_33124_33186[(2)] = inst_33050);

(statearr_33124_33186[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (26))){
var inst_32992 = (state_33060[(29)]);
var inst_33046 = (state_33060[(2)]);
var inst_33047 = cljs.core.seq.call(null,inst_32992);
var state_33060__$1 = (function (){var statearr_33125 = state_33060;
(statearr_33125[(31)] = inst_33046);

return statearr_33125;
})();
if(inst_33047){
var statearr_33126_33187 = state_33060__$1;
(statearr_33126_33187[(1)] = (42));

} else {
var statearr_33127_33188 = state_33060__$1;
(statearr_33127_33188[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (16))){
var inst_32959 = (state_33060[(7)]);
var inst_32961 = cljs.core.chunked_seq_QMARK_.call(null,inst_32959);
var state_33060__$1 = state_33060;
if(inst_32961){
var statearr_33128_33189 = state_33060__$1;
(statearr_33128_33189[(1)] = (19));

} else {
var statearr_33129_33190 = state_33060__$1;
(statearr_33129_33190[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (38))){
var inst_33039 = (state_33060[(2)]);
var state_33060__$1 = state_33060;
var statearr_33130_33191 = state_33060__$1;
(statearr_33130_33191[(2)] = inst_33039);

(statearr_33130_33191[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (30))){
var state_33060__$1 = state_33060;
var statearr_33131_33192 = state_33060__$1;
(statearr_33131_33192[(2)] = null);

(statearr_33131_33192[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (10))){
var inst_32938 = (state_33060[(13)]);
var inst_32940 = (state_33060[(17)]);
var inst_32948 = cljs.core._nth.call(null,inst_32938,inst_32940);
var inst_32949 = cljs.core.nth.call(null,inst_32948,(0),null);
var inst_32950 = cljs.core.nth.call(null,inst_32948,(1),null);
var state_33060__$1 = (function (){var statearr_33132 = state_33060;
(statearr_33132[(26)] = inst_32949);

return statearr_33132;
})();
if(cljs.core.truth_(inst_32950)){
var statearr_33133_33193 = state_33060__$1;
(statearr_33133_33193[(1)] = (13));

} else {
var statearr_33134_33194 = state_33060__$1;
(statearr_33134_33194[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (18))){
var inst_32985 = (state_33060[(2)]);
var state_33060__$1 = state_33060;
var statearr_33135_33195 = state_33060__$1;
(statearr_33135_33195[(2)] = inst_32985);

(statearr_33135_33195[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (42))){
var state_33060__$1 = state_33060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33060__$1,(45),dchan);
} else {
if((state_val_33061 === (37))){
var inst_33019 = (state_33060[(25)]);
var inst_33028 = (state_33060[(23)]);
var inst_32928 = (state_33060[(11)]);
var inst_33028__$1 = cljs.core.first.call(null,inst_33019);
var inst_33029 = cljs.core.async.put_BANG_.call(null,inst_33028__$1,inst_32928,done);
var state_33060__$1 = (function (){var statearr_33136 = state_33060;
(statearr_33136[(23)] = inst_33028__$1);

return statearr_33136;
})();
if(cljs.core.truth_(inst_33029)){
var statearr_33137_33196 = state_33060__$1;
(statearr_33137_33196[(1)] = (39));

} else {
var statearr_33138_33197 = state_33060__$1;
(statearr_33138_33197[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33061 === (8))){
var inst_32939 = (state_33060[(16)]);
var inst_32940 = (state_33060[(17)]);
var inst_32942 = (inst_32940 < inst_32939);
var inst_32943 = inst_32942;
var state_33060__$1 = state_33060;
if(cljs.core.truth_(inst_32943)){
var statearr_33139_33198 = state_33060__$1;
(statearr_33139_33198[(1)] = (10));

} else {
var statearr_33140_33199 = state_33060__$1;
(statearr_33140_33199[(1)] = (11));

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
});})(c__32326__auto___33145,cs,m,dchan,dctr,done))
;
return ((function (switch__32231__auto__,c__32326__auto___33145,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32232__auto__ = null;
var cljs$core$async$mult_$_state_machine__32232__auto____0 = (function (){
var statearr_33141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33141[(0)] = cljs$core$async$mult_$_state_machine__32232__auto__);

(statearr_33141[(1)] = (1));

return statearr_33141;
});
var cljs$core$async$mult_$_state_machine__32232__auto____1 = (function (state_33060){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_33060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e33142){if((e33142 instanceof Object)){
var ex__32235__auto__ = e33142;
var statearr_33143_33200 = state_33060;
(statearr_33143_33200[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33201 = state_33060;
state_33060 = G__33201;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32232__auto__ = function(state_33060){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32232__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32232__auto____1.call(this,state_33060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32232__auto____0;
cljs$core$async$mult_$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32232__auto____1;
return cljs$core$async$mult_$_state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto___33145,cs,m,dchan,dctr,done))
})();
var state__32328__auto__ = (function (){var statearr_33144 = f__32327__auto__.call(null);
(statearr_33144[(6)] = c__32326__auto___33145);

return statearr_33144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto___33145,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33203 = arguments.length;
switch (G__33203) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33215 = arguments.length;
var i__4642__auto___33216 = (0);
while(true){
if((i__4642__auto___33216 < len__4641__auto___33215)){
args__4647__auto__.push((arguments[i__4642__auto___33216]));

var G__33217 = (i__4642__auto___33216 + (1));
i__4642__auto___33216 = G__33217;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33209){
var map__33210 = p__33209;
var map__33210__$1 = (((((!((map__33210 == null))))?(((((map__33210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33210):map__33210);
var opts = map__33210__$1;
var statearr_33212_33218 = state;
(statearr_33212_33218[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__33210,map__33210__$1,opts){
return (function (val){
var statearr_33213_33219 = state;
(statearr_33213_33219[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33210,map__33210__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_33214_33220 = state;
(statearr_33214_33220[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33205){
var G__33206 = cljs.core.first.call(null,seq33205);
var seq33205__$1 = cljs.core.next.call(null,seq33205);
var G__33207 = cljs.core.first.call(null,seq33205__$1);
var seq33205__$2 = cljs.core.next.call(null,seq33205__$1);
var G__33208 = cljs.core.first.call(null,seq33205__$2);
var seq33205__$3 = cljs.core.next.call(null,seq33205__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33206,G__33207,G__33208,seq33205__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33221 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33221 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33222){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33222 = meta33222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33223,meta33222__$1){
var self__ = this;
var _33223__$1 = this;
return (new cljs.core.async.t_cljs$core$async33221(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33222__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33221.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33223){
var self__ = this;
var _33223__$1 = this;
return self__.meta33222;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33221.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33221.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33221.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33221.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33221.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33221.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33221.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33221.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33221.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33222","meta33222",-615304464,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33221.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33221.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33221";

cljs.core.async.t_cljs$core$async33221.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async33221");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33221.
 */
cljs.core.async.__GT_t_cljs$core$async33221 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33221(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33222){
return (new cljs.core.async.t_cljs$core$async33221(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33222));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33221(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32326__auto___33385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto___33385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto___33385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33325){
var state_val_33326 = (state_33325[(1)]);
if((state_val_33326 === (7))){
var inst_33240 = (state_33325[(2)]);
var state_33325__$1 = state_33325;
var statearr_33327_33386 = state_33325__$1;
(statearr_33327_33386[(2)] = inst_33240);

(statearr_33327_33386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (20))){
var inst_33252 = (state_33325[(7)]);
var state_33325__$1 = state_33325;
var statearr_33328_33387 = state_33325__$1;
(statearr_33328_33387[(2)] = inst_33252);

(statearr_33328_33387[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (27))){
var state_33325__$1 = state_33325;
var statearr_33329_33388 = state_33325__$1;
(statearr_33329_33388[(2)] = null);

(statearr_33329_33388[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (1))){
var inst_33227 = (state_33325[(8)]);
var inst_33227__$1 = calc_state.call(null);
var inst_33229 = (inst_33227__$1 == null);
var inst_33230 = cljs.core.not.call(null,inst_33229);
var state_33325__$1 = (function (){var statearr_33330 = state_33325;
(statearr_33330[(8)] = inst_33227__$1);

return statearr_33330;
})();
if(inst_33230){
var statearr_33331_33389 = state_33325__$1;
(statearr_33331_33389[(1)] = (2));

} else {
var statearr_33332_33390 = state_33325__$1;
(statearr_33332_33390[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (24))){
var inst_33276 = (state_33325[(9)]);
var inst_33299 = (state_33325[(10)]);
var inst_33285 = (state_33325[(11)]);
var inst_33299__$1 = inst_33276.call(null,inst_33285);
var state_33325__$1 = (function (){var statearr_33333 = state_33325;
(statearr_33333[(10)] = inst_33299__$1);

return statearr_33333;
})();
if(cljs.core.truth_(inst_33299__$1)){
var statearr_33334_33391 = state_33325__$1;
(statearr_33334_33391[(1)] = (29));

} else {
var statearr_33335_33392 = state_33325__$1;
(statearr_33335_33392[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (4))){
var inst_33243 = (state_33325[(2)]);
var state_33325__$1 = state_33325;
if(cljs.core.truth_(inst_33243)){
var statearr_33336_33393 = state_33325__$1;
(statearr_33336_33393[(1)] = (8));

} else {
var statearr_33337_33394 = state_33325__$1;
(statearr_33337_33394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (15))){
var inst_33270 = (state_33325[(2)]);
var state_33325__$1 = state_33325;
if(cljs.core.truth_(inst_33270)){
var statearr_33338_33395 = state_33325__$1;
(statearr_33338_33395[(1)] = (19));

} else {
var statearr_33339_33396 = state_33325__$1;
(statearr_33339_33396[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (21))){
var inst_33275 = (state_33325[(12)]);
var inst_33275__$1 = (state_33325[(2)]);
var inst_33276 = cljs.core.get.call(null,inst_33275__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33277 = cljs.core.get.call(null,inst_33275__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33278 = cljs.core.get.call(null,inst_33275__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33325__$1 = (function (){var statearr_33340 = state_33325;
(statearr_33340[(13)] = inst_33277);

(statearr_33340[(9)] = inst_33276);

(statearr_33340[(12)] = inst_33275__$1);

return statearr_33340;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33325__$1,(22),inst_33278);
} else {
if((state_val_33326 === (31))){
var inst_33307 = (state_33325[(2)]);
var state_33325__$1 = state_33325;
if(cljs.core.truth_(inst_33307)){
var statearr_33341_33397 = state_33325__$1;
(statearr_33341_33397[(1)] = (32));

} else {
var statearr_33342_33398 = state_33325__$1;
(statearr_33342_33398[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (32))){
var inst_33284 = (state_33325[(14)]);
var state_33325__$1 = state_33325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33325__$1,(35),out,inst_33284);
} else {
if((state_val_33326 === (33))){
var inst_33275 = (state_33325[(12)]);
var inst_33252 = inst_33275;
var state_33325__$1 = (function (){var statearr_33343 = state_33325;
(statearr_33343[(7)] = inst_33252);

return statearr_33343;
})();
var statearr_33344_33399 = state_33325__$1;
(statearr_33344_33399[(2)] = null);

(statearr_33344_33399[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (13))){
var inst_33252 = (state_33325[(7)]);
var inst_33259 = inst_33252.cljs$lang$protocol_mask$partition0$;
var inst_33260 = (inst_33259 & (64));
var inst_33261 = inst_33252.cljs$core$ISeq$;
var inst_33262 = (cljs.core.PROTOCOL_SENTINEL === inst_33261);
var inst_33263 = ((inst_33260) || (inst_33262));
var state_33325__$1 = state_33325;
if(cljs.core.truth_(inst_33263)){
var statearr_33345_33400 = state_33325__$1;
(statearr_33345_33400[(1)] = (16));

} else {
var statearr_33346_33401 = state_33325__$1;
(statearr_33346_33401[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (22))){
var inst_33285 = (state_33325[(11)]);
var inst_33284 = (state_33325[(14)]);
var inst_33283 = (state_33325[(2)]);
var inst_33284__$1 = cljs.core.nth.call(null,inst_33283,(0),null);
var inst_33285__$1 = cljs.core.nth.call(null,inst_33283,(1),null);
var inst_33286 = (inst_33284__$1 == null);
var inst_33287 = cljs.core._EQ_.call(null,inst_33285__$1,change);
var inst_33288 = ((inst_33286) || (inst_33287));
var state_33325__$1 = (function (){var statearr_33347 = state_33325;
(statearr_33347[(11)] = inst_33285__$1);

(statearr_33347[(14)] = inst_33284__$1);

return statearr_33347;
})();
if(cljs.core.truth_(inst_33288)){
var statearr_33348_33402 = state_33325__$1;
(statearr_33348_33402[(1)] = (23));

} else {
var statearr_33349_33403 = state_33325__$1;
(statearr_33349_33403[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (36))){
var inst_33275 = (state_33325[(12)]);
var inst_33252 = inst_33275;
var state_33325__$1 = (function (){var statearr_33350 = state_33325;
(statearr_33350[(7)] = inst_33252);

return statearr_33350;
})();
var statearr_33351_33404 = state_33325__$1;
(statearr_33351_33404[(2)] = null);

(statearr_33351_33404[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (29))){
var inst_33299 = (state_33325[(10)]);
var state_33325__$1 = state_33325;
var statearr_33352_33405 = state_33325__$1;
(statearr_33352_33405[(2)] = inst_33299);

(statearr_33352_33405[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (6))){
var state_33325__$1 = state_33325;
var statearr_33353_33406 = state_33325__$1;
(statearr_33353_33406[(2)] = false);

(statearr_33353_33406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (28))){
var inst_33295 = (state_33325[(2)]);
var inst_33296 = calc_state.call(null);
var inst_33252 = inst_33296;
var state_33325__$1 = (function (){var statearr_33354 = state_33325;
(statearr_33354[(15)] = inst_33295);

(statearr_33354[(7)] = inst_33252);

return statearr_33354;
})();
var statearr_33355_33407 = state_33325__$1;
(statearr_33355_33407[(2)] = null);

(statearr_33355_33407[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (25))){
var inst_33321 = (state_33325[(2)]);
var state_33325__$1 = state_33325;
var statearr_33356_33408 = state_33325__$1;
(statearr_33356_33408[(2)] = inst_33321);

(statearr_33356_33408[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (34))){
var inst_33319 = (state_33325[(2)]);
var state_33325__$1 = state_33325;
var statearr_33357_33409 = state_33325__$1;
(statearr_33357_33409[(2)] = inst_33319);

(statearr_33357_33409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (17))){
var state_33325__$1 = state_33325;
var statearr_33358_33410 = state_33325__$1;
(statearr_33358_33410[(2)] = false);

(statearr_33358_33410[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (3))){
var state_33325__$1 = state_33325;
var statearr_33359_33411 = state_33325__$1;
(statearr_33359_33411[(2)] = false);

(statearr_33359_33411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (12))){
var inst_33323 = (state_33325[(2)]);
var state_33325__$1 = state_33325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33325__$1,inst_33323);
} else {
if((state_val_33326 === (2))){
var inst_33227 = (state_33325[(8)]);
var inst_33232 = inst_33227.cljs$lang$protocol_mask$partition0$;
var inst_33233 = (inst_33232 & (64));
var inst_33234 = inst_33227.cljs$core$ISeq$;
var inst_33235 = (cljs.core.PROTOCOL_SENTINEL === inst_33234);
var inst_33236 = ((inst_33233) || (inst_33235));
var state_33325__$1 = state_33325;
if(cljs.core.truth_(inst_33236)){
var statearr_33360_33412 = state_33325__$1;
(statearr_33360_33412[(1)] = (5));

} else {
var statearr_33361_33413 = state_33325__$1;
(statearr_33361_33413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (23))){
var inst_33284 = (state_33325[(14)]);
var inst_33290 = (inst_33284 == null);
var state_33325__$1 = state_33325;
if(cljs.core.truth_(inst_33290)){
var statearr_33362_33414 = state_33325__$1;
(statearr_33362_33414[(1)] = (26));

} else {
var statearr_33363_33415 = state_33325__$1;
(statearr_33363_33415[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (35))){
var inst_33310 = (state_33325[(2)]);
var state_33325__$1 = state_33325;
if(cljs.core.truth_(inst_33310)){
var statearr_33364_33416 = state_33325__$1;
(statearr_33364_33416[(1)] = (36));

} else {
var statearr_33365_33417 = state_33325__$1;
(statearr_33365_33417[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (19))){
var inst_33252 = (state_33325[(7)]);
var inst_33272 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33252);
var state_33325__$1 = state_33325;
var statearr_33366_33418 = state_33325__$1;
(statearr_33366_33418[(2)] = inst_33272);

(statearr_33366_33418[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (11))){
var inst_33252 = (state_33325[(7)]);
var inst_33256 = (inst_33252 == null);
var inst_33257 = cljs.core.not.call(null,inst_33256);
var state_33325__$1 = state_33325;
if(inst_33257){
var statearr_33367_33419 = state_33325__$1;
(statearr_33367_33419[(1)] = (13));

} else {
var statearr_33368_33420 = state_33325__$1;
(statearr_33368_33420[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (9))){
var inst_33227 = (state_33325[(8)]);
var state_33325__$1 = state_33325;
var statearr_33369_33421 = state_33325__$1;
(statearr_33369_33421[(2)] = inst_33227);

(statearr_33369_33421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (5))){
var state_33325__$1 = state_33325;
var statearr_33370_33422 = state_33325__$1;
(statearr_33370_33422[(2)] = true);

(statearr_33370_33422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (14))){
var state_33325__$1 = state_33325;
var statearr_33371_33423 = state_33325__$1;
(statearr_33371_33423[(2)] = false);

(statearr_33371_33423[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (26))){
var inst_33285 = (state_33325[(11)]);
var inst_33292 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33285);
var state_33325__$1 = state_33325;
var statearr_33372_33424 = state_33325__$1;
(statearr_33372_33424[(2)] = inst_33292);

(statearr_33372_33424[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (16))){
var state_33325__$1 = state_33325;
var statearr_33373_33425 = state_33325__$1;
(statearr_33373_33425[(2)] = true);

(statearr_33373_33425[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (38))){
var inst_33315 = (state_33325[(2)]);
var state_33325__$1 = state_33325;
var statearr_33374_33426 = state_33325__$1;
(statearr_33374_33426[(2)] = inst_33315);

(statearr_33374_33426[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (30))){
var inst_33277 = (state_33325[(13)]);
var inst_33276 = (state_33325[(9)]);
var inst_33285 = (state_33325[(11)]);
var inst_33302 = cljs.core.empty_QMARK_.call(null,inst_33276);
var inst_33303 = inst_33277.call(null,inst_33285);
var inst_33304 = cljs.core.not.call(null,inst_33303);
var inst_33305 = ((inst_33302) && (inst_33304));
var state_33325__$1 = state_33325;
var statearr_33375_33427 = state_33325__$1;
(statearr_33375_33427[(2)] = inst_33305);

(statearr_33375_33427[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (10))){
var inst_33227 = (state_33325[(8)]);
var inst_33248 = (state_33325[(2)]);
var inst_33249 = cljs.core.get.call(null,inst_33248,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33250 = cljs.core.get.call(null,inst_33248,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33251 = cljs.core.get.call(null,inst_33248,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33252 = inst_33227;
var state_33325__$1 = (function (){var statearr_33376 = state_33325;
(statearr_33376[(16)] = inst_33251);

(statearr_33376[(17)] = inst_33249);

(statearr_33376[(18)] = inst_33250);

(statearr_33376[(7)] = inst_33252);

return statearr_33376;
})();
var statearr_33377_33428 = state_33325__$1;
(statearr_33377_33428[(2)] = null);

(statearr_33377_33428[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (18))){
var inst_33267 = (state_33325[(2)]);
var state_33325__$1 = state_33325;
var statearr_33378_33429 = state_33325__$1;
(statearr_33378_33429[(2)] = inst_33267);

(statearr_33378_33429[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (37))){
var state_33325__$1 = state_33325;
var statearr_33379_33430 = state_33325__$1;
(statearr_33379_33430[(2)] = null);

(statearr_33379_33430[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33326 === (8))){
var inst_33227 = (state_33325[(8)]);
var inst_33245 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33227);
var state_33325__$1 = state_33325;
var statearr_33380_33431 = state_33325__$1;
(statearr_33380_33431[(2)] = inst_33245);

(statearr_33380_33431[(1)] = (10));


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
});})(c__32326__auto___33385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32231__auto__,c__32326__auto___33385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32232__auto__ = null;
var cljs$core$async$mix_$_state_machine__32232__auto____0 = (function (){
var statearr_33381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33381[(0)] = cljs$core$async$mix_$_state_machine__32232__auto__);

(statearr_33381[(1)] = (1));

return statearr_33381;
});
var cljs$core$async$mix_$_state_machine__32232__auto____1 = (function (state_33325){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_33325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e33382){if((e33382 instanceof Object)){
var ex__32235__auto__ = e33382;
var statearr_33383_33432 = state_33325;
(statearr_33383_33432[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33433 = state_33325;
state_33325 = G__33433;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32232__auto__ = function(state_33325){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32232__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32232__auto____1.call(this,state_33325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32232__auto____0;
cljs$core$async$mix_$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32232__auto____1;
return cljs$core$async$mix_$_state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto___33385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32328__auto__ = (function (){var statearr_33384 = f__32327__auto__.call(null);
(statearr_33384[(6)] = c__32326__auto___33385);

return statearr_33384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto___33385,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33435 = arguments.length;
switch (G__33435) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33439 = arguments.length;
switch (G__33439) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__33437_SHARP_){
if(cljs.core.truth_(p1__33437_SHARP_.call(null,topic))){
return p1__33437_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33437_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33440 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33441){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33441 = meta33441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33442,meta33441__$1){
var self__ = this;
var _33442__$1 = this;
return (new cljs.core.async.t_cljs$core$async33440(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33441__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33440.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33442){
var self__ = this;
var _33442__$1 = this;
return self__.meta33441;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33440.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33440.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33440.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33440.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33440.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33440.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33440.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33440.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33441","meta33441",-1147889454,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33440.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33440";

cljs.core.async.t_cljs$core$async33440.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async33440");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33440.
 */
cljs.core.async.__GT_t_cljs$core$async33440 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33440(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33441){
return (new cljs.core.async.t_cljs$core$async33440(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33441));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33440(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32326__auto___33560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto___33560,mults,ensure_mult,p){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto___33560,mults,ensure_mult,p){
return (function (state_33514){
var state_val_33515 = (state_33514[(1)]);
if((state_val_33515 === (7))){
var inst_33510 = (state_33514[(2)]);
var state_33514__$1 = state_33514;
var statearr_33516_33561 = state_33514__$1;
(statearr_33516_33561[(2)] = inst_33510);

(statearr_33516_33561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (20))){
var state_33514__$1 = state_33514;
var statearr_33517_33562 = state_33514__$1;
(statearr_33517_33562[(2)] = null);

(statearr_33517_33562[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (1))){
var state_33514__$1 = state_33514;
var statearr_33518_33563 = state_33514__$1;
(statearr_33518_33563[(2)] = null);

(statearr_33518_33563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (24))){
var inst_33493 = (state_33514[(7)]);
var inst_33502 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33493);
var state_33514__$1 = state_33514;
var statearr_33519_33564 = state_33514__$1;
(statearr_33519_33564[(2)] = inst_33502);

(statearr_33519_33564[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (4))){
var inst_33445 = (state_33514[(8)]);
var inst_33445__$1 = (state_33514[(2)]);
var inst_33446 = (inst_33445__$1 == null);
var state_33514__$1 = (function (){var statearr_33520 = state_33514;
(statearr_33520[(8)] = inst_33445__$1);

return statearr_33520;
})();
if(cljs.core.truth_(inst_33446)){
var statearr_33521_33565 = state_33514__$1;
(statearr_33521_33565[(1)] = (5));

} else {
var statearr_33522_33566 = state_33514__$1;
(statearr_33522_33566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (15))){
var inst_33487 = (state_33514[(2)]);
var state_33514__$1 = state_33514;
var statearr_33523_33567 = state_33514__$1;
(statearr_33523_33567[(2)] = inst_33487);

(statearr_33523_33567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (21))){
var inst_33507 = (state_33514[(2)]);
var state_33514__$1 = (function (){var statearr_33524 = state_33514;
(statearr_33524[(9)] = inst_33507);

return statearr_33524;
})();
var statearr_33525_33568 = state_33514__$1;
(statearr_33525_33568[(2)] = null);

(statearr_33525_33568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (13))){
var inst_33469 = (state_33514[(10)]);
var inst_33471 = cljs.core.chunked_seq_QMARK_.call(null,inst_33469);
var state_33514__$1 = state_33514;
if(inst_33471){
var statearr_33526_33569 = state_33514__$1;
(statearr_33526_33569[(1)] = (16));

} else {
var statearr_33527_33570 = state_33514__$1;
(statearr_33527_33570[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (22))){
var inst_33499 = (state_33514[(2)]);
var state_33514__$1 = state_33514;
if(cljs.core.truth_(inst_33499)){
var statearr_33528_33571 = state_33514__$1;
(statearr_33528_33571[(1)] = (23));

} else {
var statearr_33529_33572 = state_33514__$1;
(statearr_33529_33572[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (6))){
var inst_33495 = (state_33514[(11)]);
var inst_33445 = (state_33514[(8)]);
var inst_33493 = (state_33514[(7)]);
var inst_33493__$1 = topic_fn.call(null,inst_33445);
var inst_33494 = cljs.core.deref.call(null,mults);
var inst_33495__$1 = cljs.core.get.call(null,inst_33494,inst_33493__$1);
var state_33514__$1 = (function (){var statearr_33530 = state_33514;
(statearr_33530[(11)] = inst_33495__$1);

(statearr_33530[(7)] = inst_33493__$1);

return statearr_33530;
})();
if(cljs.core.truth_(inst_33495__$1)){
var statearr_33531_33573 = state_33514__$1;
(statearr_33531_33573[(1)] = (19));

} else {
var statearr_33532_33574 = state_33514__$1;
(statearr_33532_33574[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (25))){
var inst_33504 = (state_33514[(2)]);
var state_33514__$1 = state_33514;
var statearr_33533_33575 = state_33514__$1;
(statearr_33533_33575[(2)] = inst_33504);

(statearr_33533_33575[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (17))){
var inst_33469 = (state_33514[(10)]);
var inst_33478 = cljs.core.first.call(null,inst_33469);
var inst_33479 = cljs.core.async.muxch_STAR_.call(null,inst_33478);
var inst_33480 = cljs.core.async.close_BANG_.call(null,inst_33479);
var inst_33481 = cljs.core.next.call(null,inst_33469);
var inst_33455 = inst_33481;
var inst_33456 = null;
var inst_33457 = (0);
var inst_33458 = (0);
var state_33514__$1 = (function (){var statearr_33534 = state_33514;
(statearr_33534[(12)] = inst_33480);

(statearr_33534[(13)] = inst_33455);

(statearr_33534[(14)] = inst_33456);

(statearr_33534[(15)] = inst_33457);

(statearr_33534[(16)] = inst_33458);

return statearr_33534;
})();
var statearr_33535_33576 = state_33514__$1;
(statearr_33535_33576[(2)] = null);

(statearr_33535_33576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (3))){
var inst_33512 = (state_33514[(2)]);
var state_33514__$1 = state_33514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33514__$1,inst_33512);
} else {
if((state_val_33515 === (12))){
var inst_33489 = (state_33514[(2)]);
var state_33514__$1 = state_33514;
var statearr_33536_33577 = state_33514__$1;
(statearr_33536_33577[(2)] = inst_33489);

(statearr_33536_33577[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (2))){
var state_33514__$1 = state_33514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33514__$1,(4),ch);
} else {
if((state_val_33515 === (23))){
var state_33514__$1 = state_33514;
var statearr_33537_33578 = state_33514__$1;
(statearr_33537_33578[(2)] = null);

(statearr_33537_33578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (19))){
var inst_33495 = (state_33514[(11)]);
var inst_33445 = (state_33514[(8)]);
var inst_33497 = cljs.core.async.muxch_STAR_.call(null,inst_33495);
var state_33514__$1 = state_33514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33514__$1,(22),inst_33497,inst_33445);
} else {
if((state_val_33515 === (11))){
var inst_33469 = (state_33514[(10)]);
var inst_33455 = (state_33514[(13)]);
var inst_33469__$1 = cljs.core.seq.call(null,inst_33455);
var state_33514__$1 = (function (){var statearr_33538 = state_33514;
(statearr_33538[(10)] = inst_33469__$1);

return statearr_33538;
})();
if(inst_33469__$1){
var statearr_33539_33579 = state_33514__$1;
(statearr_33539_33579[(1)] = (13));

} else {
var statearr_33540_33580 = state_33514__$1;
(statearr_33540_33580[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (9))){
var inst_33491 = (state_33514[(2)]);
var state_33514__$1 = state_33514;
var statearr_33541_33581 = state_33514__$1;
(statearr_33541_33581[(2)] = inst_33491);

(statearr_33541_33581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (5))){
var inst_33452 = cljs.core.deref.call(null,mults);
var inst_33453 = cljs.core.vals.call(null,inst_33452);
var inst_33454 = cljs.core.seq.call(null,inst_33453);
var inst_33455 = inst_33454;
var inst_33456 = null;
var inst_33457 = (0);
var inst_33458 = (0);
var state_33514__$1 = (function (){var statearr_33542 = state_33514;
(statearr_33542[(13)] = inst_33455);

(statearr_33542[(14)] = inst_33456);

(statearr_33542[(15)] = inst_33457);

(statearr_33542[(16)] = inst_33458);

return statearr_33542;
})();
var statearr_33543_33582 = state_33514__$1;
(statearr_33543_33582[(2)] = null);

(statearr_33543_33582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (14))){
var state_33514__$1 = state_33514;
var statearr_33547_33583 = state_33514__$1;
(statearr_33547_33583[(2)] = null);

(statearr_33547_33583[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (16))){
var inst_33469 = (state_33514[(10)]);
var inst_33473 = cljs.core.chunk_first.call(null,inst_33469);
var inst_33474 = cljs.core.chunk_rest.call(null,inst_33469);
var inst_33475 = cljs.core.count.call(null,inst_33473);
var inst_33455 = inst_33474;
var inst_33456 = inst_33473;
var inst_33457 = inst_33475;
var inst_33458 = (0);
var state_33514__$1 = (function (){var statearr_33548 = state_33514;
(statearr_33548[(13)] = inst_33455);

(statearr_33548[(14)] = inst_33456);

(statearr_33548[(15)] = inst_33457);

(statearr_33548[(16)] = inst_33458);

return statearr_33548;
})();
var statearr_33549_33584 = state_33514__$1;
(statearr_33549_33584[(2)] = null);

(statearr_33549_33584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (10))){
var inst_33455 = (state_33514[(13)]);
var inst_33456 = (state_33514[(14)]);
var inst_33457 = (state_33514[(15)]);
var inst_33458 = (state_33514[(16)]);
var inst_33463 = cljs.core._nth.call(null,inst_33456,inst_33458);
var inst_33464 = cljs.core.async.muxch_STAR_.call(null,inst_33463);
var inst_33465 = cljs.core.async.close_BANG_.call(null,inst_33464);
var inst_33466 = (inst_33458 + (1));
var tmp33544 = inst_33455;
var tmp33545 = inst_33456;
var tmp33546 = inst_33457;
var inst_33455__$1 = tmp33544;
var inst_33456__$1 = tmp33545;
var inst_33457__$1 = tmp33546;
var inst_33458__$1 = inst_33466;
var state_33514__$1 = (function (){var statearr_33550 = state_33514;
(statearr_33550[(13)] = inst_33455__$1);

(statearr_33550[(14)] = inst_33456__$1);

(statearr_33550[(17)] = inst_33465);

(statearr_33550[(15)] = inst_33457__$1);

(statearr_33550[(16)] = inst_33458__$1);

return statearr_33550;
})();
var statearr_33551_33585 = state_33514__$1;
(statearr_33551_33585[(2)] = null);

(statearr_33551_33585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (18))){
var inst_33484 = (state_33514[(2)]);
var state_33514__$1 = state_33514;
var statearr_33552_33586 = state_33514__$1;
(statearr_33552_33586[(2)] = inst_33484);

(statearr_33552_33586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33515 === (8))){
var inst_33457 = (state_33514[(15)]);
var inst_33458 = (state_33514[(16)]);
var inst_33460 = (inst_33458 < inst_33457);
var inst_33461 = inst_33460;
var state_33514__$1 = state_33514;
if(cljs.core.truth_(inst_33461)){
var statearr_33553_33587 = state_33514__$1;
(statearr_33553_33587[(1)] = (10));

} else {
var statearr_33554_33588 = state_33514__$1;
(statearr_33554_33588[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__32326__auto___33560,mults,ensure_mult,p))
;
return ((function (switch__32231__auto__,c__32326__auto___33560,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32232__auto__ = null;
var cljs$core$async$state_machine__32232__auto____0 = (function (){
var statearr_33555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33555[(0)] = cljs$core$async$state_machine__32232__auto__);

(statearr_33555[(1)] = (1));

return statearr_33555;
});
var cljs$core$async$state_machine__32232__auto____1 = (function (state_33514){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_33514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e33556){if((e33556 instanceof Object)){
var ex__32235__auto__ = e33556;
var statearr_33557_33589 = state_33514;
(statearr_33557_33589[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33590 = state_33514;
state_33514 = G__33590;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
cljs$core$async$state_machine__32232__auto__ = function(state_33514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32232__auto____1.call(this,state_33514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32232__auto____0;
cljs$core$async$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32232__auto____1;
return cljs$core$async$state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto___33560,mults,ensure_mult,p))
})();
var state__32328__auto__ = (function (){var statearr_33558 = f__32327__auto__.call(null);
(statearr_33558[(6)] = c__32326__auto___33560);

return statearr_33558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto___33560,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33592 = arguments.length;
switch (G__33592) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33595 = arguments.length;
switch (G__33595) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33598 = arguments.length;
switch (G__33598) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__32326__auto___33665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto___33665,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto___33665,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33637){
var state_val_33638 = (state_33637[(1)]);
if((state_val_33638 === (7))){
var state_33637__$1 = state_33637;
var statearr_33639_33666 = state_33637__$1;
(statearr_33639_33666[(2)] = null);

(statearr_33639_33666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (1))){
var state_33637__$1 = state_33637;
var statearr_33640_33667 = state_33637__$1;
(statearr_33640_33667[(2)] = null);

(statearr_33640_33667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (4))){
var inst_33601 = (state_33637[(7)]);
var inst_33603 = (inst_33601 < cnt);
var state_33637__$1 = state_33637;
if(cljs.core.truth_(inst_33603)){
var statearr_33641_33668 = state_33637__$1;
(statearr_33641_33668[(1)] = (6));

} else {
var statearr_33642_33669 = state_33637__$1;
(statearr_33642_33669[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (15))){
var inst_33633 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
var statearr_33643_33670 = state_33637__$1;
(statearr_33643_33670[(2)] = inst_33633);

(statearr_33643_33670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (13))){
var inst_33626 = cljs.core.async.close_BANG_.call(null,out);
var state_33637__$1 = state_33637;
var statearr_33644_33671 = state_33637__$1;
(statearr_33644_33671[(2)] = inst_33626);

(statearr_33644_33671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (6))){
var state_33637__$1 = state_33637;
var statearr_33645_33672 = state_33637__$1;
(statearr_33645_33672[(2)] = null);

(statearr_33645_33672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (3))){
var inst_33635 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33637__$1,inst_33635);
} else {
if((state_val_33638 === (12))){
var inst_33623 = (state_33637[(8)]);
var inst_33623__$1 = (state_33637[(2)]);
var inst_33624 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33623__$1);
var state_33637__$1 = (function (){var statearr_33646 = state_33637;
(statearr_33646[(8)] = inst_33623__$1);

return statearr_33646;
})();
if(cljs.core.truth_(inst_33624)){
var statearr_33647_33673 = state_33637__$1;
(statearr_33647_33673[(1)] = (13));

} else {
var statearr_33648_33674 = state_33637__$1;
(statearr_33648_33674[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (2))){
var inst_33600 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33601 = (0);
var state_33637__$1 = (function (){var statearr_33649 = state_33637;
(statearr_33649[(7)] = inst_33601);

(statearr_33649[(9)] = inst_33600);

return statearr_33649;
})();
var statearr_33650_33675 = state_33637__$1;
(statearr_33650_33675[(2)] = null);

(statearr_33650_33675[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (11))){
var inst_33601 = (state_33637[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33637,(10),Object,null,(9));
var inst_33610 = chs__$1.call(null,inst_33601);
var inst_33611 = done.call(null,inst_33601);
var inst_33612 = cljs.core.async.take_BANG_.call(null,inst_33610,inst_33611);
var state_33637__$1 = state_33637;
var statearr_33651_33676 = state_33637__$1;
(statearr_33651_33676[(2)] = inst_33612);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33637__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (9))){
var inst_33601 = (state_33637[(7)]);
var inst_33614 = (state_33637[(2)]);
var inst_33615 = (inst_33601 + (1));
var inst_33601__$1 = inst_33615;
var state_33637__$1 = (function (){var statearr_33652 = state_33637;
(statearr_33652[(10)] = inst_33614);

(statearr_33652[(7)] = inst_33601__$1);

return statearr_33652;
})();
var statearr_33653_33677 = state_33637__$1;
(statearr_33653_33677[(2)] = null);

(statearr_33653_33677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (5))){
var inst_33621 = (state_33637[(2)]);
var state_33637__$1 = (function (){var statearr_33654 = state_33637;
(statearr_33654[(11)] = inst_33621);

return statearr_33654;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33637__$1,(12),dchan);
} else {
if((state_val_33638 === (14))){
var inst_33623 = (state_33637[(8)]);
var inst_33628 = cljs.core.apply.call(null,f,inst_33623);
var state_33637__$1 = state_33637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33637__$1,(16),out,inst_33628);
} else {
if((state_val_33638 === (16))){
var inst_33630 = (state_33637[(2)]);
var state_33637__$1 = (function (){var statearr_33655 = state_33637;
(statearr_33655[(12)] = inst_33630);

return statearr_33655;
})();
var statearr_33656_33678 = state_33637__$1;
(statearr_33656_33678[(2)] = null);

(statearr_33656_33678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (10))){
var inst_33605 = (state_33637[(2)]);
var inst_33606 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33637__$1 = (function (){var statearr_33657 = state_33637;
(statearr_33657[(13)] = inst_33605);

return statearr_33657;
})();
var statearr_33658_33679 = state_33637__$1;
(statearr_33658_33679[(2)] = inst_33606);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33637__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33638 === (8))){
var inst_33619 = (state_33637[(2)]);
var state_33637__$1 = state_33637;
var statearr_33659_33680 = state_33637__$1;
(statearr_33659_33680[(2)] = inst_33619);

(statearr_33659_33680[(1)] = (5));


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
});})(c__32326__auto___33665,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32231__auto__,c__32326__auto___33665,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32232__auto__ = null;
var cljs$core$async$state_machine__32232__auto____0 = (function (){
var statearr_33660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33660[(0)] = cljs$core$async$state_machine__32232__auto__);

(statearr_33660[(1)] = (1));

return statearr_33660;
});
var cljs$core$async$state_machine__32232__auto____1 = (function (state_33637){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_33637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e33661){if((e33661 instanceof Object)){
var ex__32235__auto__ = e33661;
var statearr_33662_33681 = state_33637;
(statearr_33662_33681[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33682 = state_33637;
state_33637 = G__33682;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
cljs$core$async$state_machine__32232__auto__ = function(state_33637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32232__auto____1.call(this,state_33637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32232__auto____0;
cljs$core$async$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32232__auto____1;
return cljs$core$async$state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto___33665,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32328__auto__ = (function (){var statearr_33663 = f__32327__auto__.call(null);
(statearr_33663[(6)] = c__32326__auto___33665);

return statearr_33663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto___33665,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33685 = arguments.length;
switch (G__33685) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32326__auto___33739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto___33739,out){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto___33739,out){
return (function (state_33717){
var state_val_33718 = (state_33717[(1)]);
if((state_val_33718 === (7))){
var inst_33696 = (state_33717[(7)]);
var inst_33697 = (state_33717[(8)]);
var inst_33696__$1 = (state_33717[(2)]);
var inst_33697__$1 = cljs.core.nth.call(null,inst_33696__$1,(0),null);
var inst_33698 = cljs.core.nth.call(null,inst_33696__$1,(1),null);
var inst_33699 = (inst_33697__$1 == null);
var state_33717__$1 = (function (){var statearr_33719 = state_33717;
(statearr_33719[(7)] = inst_33696__$1);

(statearr_33719[(9)] = inst_33698);

(statearr_33719[(8)] = inst_33697__$1);

return statearr_33719;
})();
if(cljs.core.truth_(inst_33699)){
var statearr_33720_33740 = state_33717__$1;
(statearr_33720_33740[(1)] = (8));

} else {
var statearr_33721_33741 = state_33717__$1;
(statearr_33721_33741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33718 === (1))){
var inst_33686 = cljs.core.vec.call(null,chs);
var inst_33687 = inst_33686;
var state_33717__$1 = (function (){var statearr_33722 = state_33717;
(statearr_33722[(10)] = inst_33687);

return statearr_33722;
})();
var statearr_33723_33742 = state_33717__$1;
(statearr_33723_33742[(2)] = null);

(statearr_33723_33742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33718 === (4))){
var inst_33687 = (state_33717[(10)]);
var state_33717__$1 = state_33717;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33717__$1,(7),inst_33687);
} else {
if((state_val_33718 === (6))){
var inst_33713 = (state_33717[(2)]);
var state_33717__$1 = state_33717;
var statearr_33724_33743 = state_33717__$1;
(statearr_33724_33743[(2)] = inst_33713);

(statearr_33724_33743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33718 === (3))){
var inst_33715 = (state_33717[(2)]);
var state_33717__$1 = state_33717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33717__$1,inst_33715);
} else {
if((state_val_33718 === (2))){
var inst_33687 = (state_33717[(10)]);
var inst_33689 = cljs.core.count.call(null,inst_33687);
var inst_33690 = (inst_33689 > (0));
var state_33717__$1 = state_33717;
if(cljs.core.truth_(inst_33690)){
var statearr_33726_33744 = state_33717__$1;
(statearr_33726_33744[(1)] = (4));

} else {
var statearr_33727_33745 = state_33717__$1;
(statearr_33727_33745[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33718 === (11))){
var inst_33687 = (state_33717[(10)]);
var inst_33706 = (state_33717[(2)]);
var tmp33725 = inst_33687;
var inst_33687__$1 = tmp33725;
var state_33717__$1 = (function (){var statearr_33728 = state_33717;
(statearr_33728[(10)] = inst_33687__$1);

(statearr_33728[(11)] = inst_33706);

return statearr_33728;
})();
var statearr_33729_33746 = state_33717__$1;
(statearr_33729_33746[(2)] = null);

(statearr_33729_33746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33718 === (9))){
var inst_33697 = (state_33717[(8)]);
var state_33717__$1 = state_33717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33717__$1,(11),out,inst_33697);
} else {
if((state_val_33718 === (5))){
var inst_33711 = cljs.core.async.close_BANG_.call(null,out);
var state_33717__$1 = state_33717;
var statearr_33730_33747 = state_33717__$1;
(statearr_33730_33747[(2)] = inst_33711);

(statearr_33730_33747[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33718 === (10))){
var inst_33709 = (state_33717[(2)]);
var state_33717__$1 = state_33717;
var statearr_33731_33748 = state_33717__$1;
(statearr_33731_33748[(2)] = inst_33709);

(statearr_33731_33748[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33718 === (8))){
var inst_33687 = (state_33717[(10)]);
var inst_33696 = (state_33717[(7)]);
var inst_33698 = (state_33717[(9)]);
var inst_33697 = (state_33717[(8)]);
var inst_33701 = (function (){var cs = inst_33687;
var vec__33692 = inst_33696;
var v = inst_33697;
var c = inst_33698;
return ((function (cs,vec__33692,v,c,inst_33687,inst_33696,inst_33698,inst_33697,state_val_33718,c__32326__auto___33739,out){
return (function (p1__33683_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33683_SHARP_);
});
;})(cs,vec__33692,v,c,inst_33687,inst_33696,inst_33698,inst_33697,state_val_33718,c__32326__auto___33739,out))
})();
var inst_33702 = cljs.core.filterv.call(null,inst_33701,inst_33687);
var inst_33687__$1 = inst_33702;
var state_33717__$1 = (function (){var statearr_33732 = state_33717;
(statearr_33732[(10)] = inst_33687__$1);

return statearr_33732;
})();
var statearr_33733_33749 = state_33717__$1;
(statearr_33733_33749[(2)] = null);

(statearr_33733_33749[(1)] = (2));


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
});})(c__32326__auto___33739,out))
;
return ((function (switch__32231__auto__,c__32326__auto___33739,out){
return (function() {
var cljs$core$async$state_machine__32232__auto__ = null;
var cljs$core$async$state_machine__32232__auto____0 = (function (){
var statearr_33734 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33734[(0)] = cljs$core$async$state_machine__32232__auto__);

(statearr_33734[(1)] = (1));

return statearr_33734;
});
var cljs$core$async$state_machine__32232__auto____1 = (function (state_33717){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_33717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e33735){if((e33735 instanceof Object)){
var ex__32235__auto__ = e33735;
var statearr_33736_33750 = state_33717;
(statearr_33736_33750[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33751 = state_33717;
state_33717 = G__33751;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
cljs$core$async$state_machine__32232__auto__ = function(state_33717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32232__auto____1.call(this,state_33717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32232__auto____0;
cljs$core$async$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32232__auto____1;
return cljs$core$async$state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto___33739,out))
})();
var state__32328__auto__ = (function (){var statearr_33737 = f__32327__auto__.call(null);
(statearr_33737[(6)] = c__32326__auto___33739);

return statearr_33737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto___33739,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33753 = arguments.length;
switch (G__33753) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32326__auto___33798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto___33798,out){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto___33798,out){
return (function (state_33777){
var state_val_33778 = (state_33777[(1)]);
if((state_val_33778 === (7))){
var inst_33759 = (state_33777[(7)]);
var inst_33759__$1 = (state_33777[(2)]);
var inst_33760 = (inst_33759__$1 == null);
var inst_33761 = cljs.core.not.call(null,inst_33760);
var state_33777__$1 = (function (){var statearr_33779 = state_33777;
(statearr_33779[(7)] = inst_33759__$1);

return statearr_33779;
})();
if(inst_33761){
var statearr_33780_33799 = state_33777__$1;
(statearr_33780_33799[(1)] = (8));

} else {
var statearr_33781_33800 = state_33777__$1;
(statearr_33781_33800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (1))){
var inst_33754 = (0);
var state_33777__$1 = (function (){var statearr_33782 = state_33777;
(statearr_33782[(8)] = inst_33754);

return statearr_33782;
})();
var statearr_33783_33801 = state_33777__$1;
(statearr_33783_33801[(2)] = null);

(statearr_33783_33801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (4))){
var state_33777__$1 = state_33777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33777__$1,(7),ch);
} else {
if((state_val_33778 === (6))){
var inst_33772 = (state_33777[(2)]);
var state_33777__$1 = state_33777;
var statearr_33784_33802 = state_33777__$1;
(statearr_33784_33802[(2)] = inst_33772);

(statearr_33784_33802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (3))){
var inst_33774 = (state_33777[(2)]);
var inst_33775 = cljs.core.async.close_BANG_.call(null,out);
var state_33777__$1 = (function (){var statearr_33785 = state_33777;
(statearr_33785[(9)] = inst_33774);

return statearr_33785;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33777__$1,inst_33775);
} else {
if((state_val_33778 === (2))){
var inst_33754 = (state_33777[(8)]);
var inst_33756 = (inst_33754 < n);
var state_33777__$1 = state_33777;
if(cljs.core.truth_(inst_33756)){
var statearr_33786_33803 = state_33777__$1;
(statearr_33786_33803[(1)] = (4));

} else {
var statearr_33787_33804 = state_33777__$1;
(statearr_33787_33804[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (11))){
var inst_33754 = (state_33777[(8)]);
var inst_33764 = (state_33777[(2)]);
var inst_33765 = (inst_33754 + (1));
var inst_33754__$1 = inst_33765;
var state_33777__$1 = (function (){var statearr_33788 = state_33777;
(statearr_33788[(8)] = inst_33754__$1);

(statearr_33788[(10)] = inst_33764);

return statearr_33788;
})();
var statearr_33789_33805 = state_33777__$1;
(statearr_33789_33805[(2)] = null);

(statearr_33789_33805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (9))){
var state_33777__$1 = state_33777;
var statearr_33790_33806 = state_33777__$1;
(statearr_33790_33806[(2)] = null);

(statearr_33790_33806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (5))){
var state_33777__$1 = state_33777;
var statearr_33791_33807 = state_33777__$1;
(statearr_33791_33807[(2)] = null);

(statearr_33791_33807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (10))){
var inst_33769 = (state_33777[(2)]);
var state_33777__$1 = state_33777;
var statearr_33792_33808 = state_33777__$1;
(statearr_33792_33808[(2)] = inst_33769);

(statearr_33792_33808[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33778 === (8))){
var inst_33759 = (state_33777[(7)]);
var state_33777__$1 = state_33777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33777__$1,(11),out,inst_33759);
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
});})(c__32326__auto___33798,out))
;
return ((function (switch__32231__auto__,c__32326__auto___33798,out){
return (function() {
var cljs$core$async$state_machine__32232__auto__ = null;
var cljs$core$async$state_machine__32232__auto____0 = (function (){
var statearr_33793 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33793[(0)] = cljs$core$async$state_machine__32232__auto__);

(statearr_33793[(1)] = (1));

return statearr_33793;
});
var cljs$core$async$state_machine__32232__auto____1 = (function (state_33777){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_33777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e33794){if((e33794 instanceof Object)){
var ex__32235__auto__ = e33794;
var statearr_33795_33809 = state_33777;
(statearr_33795_33809[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33810 = state_33777;
state_33777 = G__33810;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
cljs$core$async$state_machine__32232__auto__ = function(state_33777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32232__auto____1.call(this,state_33777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32232__auto____0;
cljs$core$async$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32232__auto____1;
return cljs$core$async$state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto___33798,out))
})();
var state__32328__auto__ = (function (){var statearr_33796 = f__32327__auto__.call(null);
(statearr_33796[(6)] = c__32326__auto___33798);

return statearr_33796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto___33798,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33812 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33812 = (function (f,ch,meta33813){
this.f = f;
this.ch = ch;
this.meta33813 = meta33813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33814,meta33813__$1){
var self__ = this;
var _33814__$1 = this;
return (new cljs.core.async.t_cljs$core$async33812(self__.f,self__.ch,meta33813__$1));
});

cljs.core.async.t_cljs$core$async33812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33814){
var self__ = this;
var _33814__$1 = this;
return self__.meta33813;
});

cljs.core.async.t_cljs$core$async33812.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33812.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33812.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33812.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33812.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33815 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33815 = (function (f,ch,meta33813,_,fn1,meta33816){
this.f = f;
this.ch = ch;
this.meta33813 = meta33813;
this._ = _;
this.fn1 = fn1;
this.meta33816 = meta33816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33817,meta33816__$1){
var self__ = this;
var _33817__$1 = this;
return (new cljs.core.async.t_cljs$core$async33815(self__.f,self__.ch,self__.meta33813,self__._,self__.fn1,meta33816__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33817){
var self__ = this;
var _33817__$1 = this;
return self__.meta33816;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33815.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33811_SHARP_){
return f1.call(null,(((p1__33811_SHARP_ == null))?null:self__.f.call(null,p1__33811_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33815.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33813","meta33813",-1210705091,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33812","cljs.core.async/t_cljs$core$async33812",-251376334,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33816","meta33816",447592747,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33815.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33815";

cljs.core.async.t_cljs$core$async33815.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async33815");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33815.
 */
cljs.core.async.__GT_t_cljs$core$async33815 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33815(f__$1,ch__$1,meta33813__$1,___$2,fn1__$1,meta33816){
return (new cljs.core.async.t_cljs$core$async33815(f__$1,ch__$1,meta33813__$1,___$2,fn1__$1,meta33816));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33815(self__.f,self__.ch,self__.meta33813,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33812.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33812.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33813","meta33813",-1210705091,null)], null);
});

cljs.core.async.t_cljs$core$async33812.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33812.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33812";

cljs.core.async.t_cljs$core$async33812.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async33812");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33812.
 */
cljs.core.async.__GT_t_cljs$core$async33812 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33812(f__$1,ch__$1,meta33813){
return (new cljs.core.async.t_cljs$core$async33812(f__$1,ch__$1,meta33813));
});

}

return (new cljs.core.async.t_cljs$core$async33812(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33818 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33818 = (function (f,ch,meta33819){
this.f = f;
this.ch = ch;
this.meta33819 = meta33819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33820,meta33819__$1){
var self__ = this;
var _33820__$1 = this;
return (new cljs.core.async.t_cljs$core$async33818(self__.f,self__.ch,meta33819__$1));
});

cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33820){
var self__ = this;
var _33820__$1 = this;
return self__.meta33819;
});

cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33818.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33819","meta33819",-864166184,null)], null);
});

cljs.core.async.t_cljs$core$async33818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33818";

cljs.core.async.t_cljs$core$async33818.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async33818");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33818.
 */
cljs.core.async.__GT_t_cljs$core$async33818 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33818(f__$1,ch__$1,meta33819){
return (new cljs.core.async.t_cljs$core$async33818(f__$1,ch__$1,meta33819));
});

}

return (new cljs.core.async.t_cljs$core$async33818(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33821 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33821 = (function (p,ch,meta33822){
this.p = p;
this.ch = ch;
this.meta33822 = meta33822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33823,meta33822__$1){
var self__ = this;
var _33823__$1 = this;
return (new cljs.core.async.t_cljs$core$async33821(self__.p,self__.ch,meta33822__$1));
});

cljs.core.async.t_cljs$core$async33821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33823){
var self__ = this;
var _33823__$1 = this;
return self__.meta33822;
});

cljs.core.async.t_cljs$core$async33821.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33821.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33821.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33821.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33821.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33821.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33821.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33822","meta33822",334043475,null)], null);
});

cljs.core.async.t_cljs$core$async33821.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33821";

cljs.core.async.t_cljs$core$async33821.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async33821");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33821.
 */
cljs.core.async.__GT_t_cljs$core$async33821 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33821(p__$1,ch__$1,meta33822){
return (new cljs.core.async.t_cljs$core$async33821(p__$1,ch__$1,meta33822));
});

}

return (new cljs.core.async.t_cljs$core$async33821(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33825 = arguments.length;
switch (G__33825) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32326__auto___33865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto___33865,out){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto___33865,out){
return (function (state_33846){
var state_val_33847 = (state_33846[(1)]);
if((state_val_33847 === (7))){
var inst_33842 = (state_33846[(2)]);
var state_33846__$1 = state_33846;
var statearr_33848_33866 = state_33846__$1;
(statearr_33848_33866[(2)] = inst_33842);

(statearr_33848_33866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (1))){
var state_33846__$1 = state_33846;
var statearr_33849_33867 = state_33846__$1;
(statearr_33849_33867[(2)] = null);

(statearr_33849_33867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (4))){
var inst_33828 = (state_33846[(7)]);
var inst_33828__$1 = (state_33846[(2)]);
var inst_33829 = (inst_33828__$1 == null);
var state_33846__$1 = (function (){var statearr_33850 = state_33846;
(statearr_33850[(7)] = inst_33828__$1);

return statearr_33850;
})();
if(cljs.core.truth_(inst_33829)){
var statearr_33851_33868 = state_33846__$1;
(statearr_33851_33868[(1)] = (5));

} else {
var statearr_33852_33869 = state_33846__$1;
(statearr_33852_33869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (6))){
var inst_33828 = (state_33846[(7)]);
var inst_33833 = p.call(null,inst_33828);
var state_33846__$1 = state_33846;
if(cljs.core.truth_(inst_33833)){
var statearr_33853_33870 = state_33846__$1;
(statearr_33853_33870[(1)] = (8));

} else {
var statearr_33854_33871 = state_33846__$1;
(statearr_33854_33871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (3))){
var inst_33844 = (state_33846[(2)]);
var state_33846__$1 = state_33846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33846__$1,inst_33844);
} else {
if((state_val_33847 === (2))){
var state_33846__$1 = state_33846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33846__$1,(4),ch);
} else {
if((state_val_33847 === (11))){
var inst_33836 = (state_33846[(2)]);
var state_33846__$1 = state_33846;
var statearr_33855_33872 = state_33846__$1;
(statearr_33855_33872[(2)] = inst_33836);

(statearr_33855_33872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (9))){
var state_33846__$1 = state_33846;
var statearr_33856_33873 = state_33846__$1;
(statearr_33856_33873[(2)] = null);

(statearr_33856_33873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (5))){
var inst_33831 = cljs.core.async.close_BANG_.call(null,out);
var state_33846__$1 = state_33846;
var statearr_33857_33874 = state_33846__$1;
(statearr_33857_33874[(2)] = inst_33831);

(statearr_33857_33874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (10))){
var inst_33839 = (state_33846[(2)]);
var state_33846__$1 = (function (){var statearr_33858 = state_33846;
(statearr_33858[(8)] = inst_33839);

return statearr_33858;
})();
var statearr_33859_33875 = state_33846__$1;
(statearr_33859_33875[(2)] = null);

(statearr_33859_33875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (8))){
var inst_33828 = (state_33846[(7)]);
var state_33846__$1 = state_33846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33846__$1,(11),out,inst_33828);
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
});})(c__32326__auto___33865,out))
;
return ((function (switch__32231__auto__,c__32326__auto___33865,out){
return (function() {
var cljs$core$async$state_machine__32232__auto__ = null;
var cljs$core$async$state_machine__32232__auto____0 = (function (){
var statearr_33860 = [null,null,null,null,null,null,null,null,null];
(statearr_33860[(0)] = cljs$core$async$state_machine__32232__auto__);

(statearr_33860[(1)] = (1));

return statearr_33860;
});
var cljs$core$async$state_machine__32232__auto____1 = (function (state_33846){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_33846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e33861){if((e33861 instanceof Object)){
var ex__32235__auto__ = e33861;
var statearr_33862_33876 = state_33846;
(statearr_33862_33876[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33877 = state_33846;
state_33846 = G__33877;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
cljs$core$async$state_machine__32232__auto__ = function(state_33846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32232__auto____1.call(this,state_33846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32232__auto____0;
cljs$core$async$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32232__auto____1;
return cljs$core$async$state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto___33865,out))
})();
var state__32328__auto__ = (function (){var statearr_33863 = f__32327__auto__.call(null);
(statearr_33863[(6)] = c__32326__auto___33865);

return statearr_33863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto___33865,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33879 = arguments.length;
switch (G__33879) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto__){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto__){
return (function (state_33942){
var state_val_33943 = (state_33942[(1)]);
if((state_val_33943 === (7))){
var inst_33938 = (state_33942[(2)]);
var state_33942__$1 = state_33942;
var statearr_33944_33982 = state_33942__$1;
(statearr_33944_33982[(2)] = inst_33938);

(statearr_33944_33982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (20))){
var inst_33908 = (state_33942[(7)]);
var inst_33919 = (state_33942[(2)]);
var inst_33920 = cljs.core.next.call(null,inst_33908);
var inst_33894 = inst_33920;
var inst_33895 = null;
var inst_33896 = (0);
var inst_33897 = (0);
var state_33942__$1 = (function (){var statearr_33945 = state_33942;
(statearr_33945[(8)] = inst_33897);

(statearr_33945[(9)] = inst_33919);

(statearr_33945[(10)] = inst_33894);

(statearr_33945[(11)] = inst_33895);

(statearr_33945[(12)] = inst_33896);

return statearr_33945;
})();
var statearr_33946_33983 = state_33942__$1;
(statearr_33946_33983[(2)] = null);

(statearr_33946_33983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (1))){
var state_33942__$1 = state_33942;
var statearr_33947_33984 = state_33942__$1;
(statearr_33947_33984[(2)] = null);

(statearr_33947_33984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (4))){
var inst_33883 = (state_33942[(13)]);
var inst_33883__$1 = (state_33942[(2)]);
var inst_33884 = (inst_33883__$1 == null);
var state_33942__$1 = (function (){var statearr_33948 = state_33942;
(statearr_33948[(13)] = inst_33883__$1);

return statearr_33948;
})();
if(cljs.core.truth_(inst_33884)){
var statearr_33949_33985 = state_33942__$1;
(statearr_33949_33985[(1)] = (5));

} else {
var statearr_33950_33986 = state_33942__$1;
(statearr_33950_33986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (15))){
var state_33942__$1 = state_33942;
var statearr_33954_33987 = state_33942__$1;
(statearr_33954_33987[(2)] = null);

(statearr_33954_33987[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (21))){
var state_33942__$1 = state_33942;
var statearr_33955_33988 = state_33942__$1;
(statearr_33955_33988[(2)] = null);

(statearr_33955_33988[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (13))){
var inst_33897 = (state_33942[(8)]);
var inst_33894 = (state_33942[(10)]);
var inst_33895 = (state_33942[(11)]);
var inst_33896 = (state_33942[(12)]);
var inst_33904 = (state_33942[(2)]);
var inst_33905 = (inst_33897 + (1));
var tmp33951 = inst_33894;
var tmp33952 = inst_33895;
var tmp33953 = inst_33896;
var inst_33894__$1 = tmp33951;
var inst_33895__$1 = tmp33952;
var inst_33896__$1 = tmp33953;
var inst_33897__$1 = inst_33905;
var state_33942__$1 = (function (){var statearr_33956 = state_33942;
(statearr_33956[(8)] = inst_33897__$1);

(statearr_33956[(14)] = inst_33904);

(statearr_33956[(10)] = inst_33894__$1);

(statearr_33956[(11)] = inst_33895__$1);

(statearr_33956[(12)] = inst_33896__$1);

return statearr_33956;
})();
var statearr_33957_33989 = state_33942__$1;
(statearr_33957_33989[(2)] = null);

(statearr_33957_33989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (22))){
var state_33942__$1 = state_33942;
var statearr_33958_33990 = state_33942__$1;
(statearr_33958_33990[(2)] = null);

(statearr_33958_33990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (6))){
var inst_33883 = (state_33942[(13)]);
var inst_33892 = f.call(null,inst_33883);
var inst_33893 = cljs.core.seq.call(null,inst_33892);
var inst_33894 = inst_33893;
var inst_33895 = null;
var inst_33896 = (0);
var inst_33897 = (0);
var state_33942__$1 = (function (){var statearr_33959 = state_33942;
(statearr_33959[(8)] = inst_33897);

(statearr_33959[(10)] = inst_33894);

(statearr_33959[(11)] = inst_33895);

(statearr_33959[(12)] = inst_33896);

return statearr_33959;
})();
var statearr_33960_33991 = state_33942__$1;
(statearr_33960_33991[(2)] = null);

(statearr_33960_33991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (17))){
var inst_33908 = (state_33942[(7)]);
var inst_33912 = cljs.core.chunk_first.call(null,inst_33908);
var inst_33913 = cljs.core.chunk_rest.call(null,inst_33908);
var inst_33914 = cljs.core.count.call(null,inst_33912);
var inst_33894 = inst_33913;
var inst_33895 = inst_33912;
var inst_33896 = inst_33914;
var inst_33897 = (0);
var state_33942__$1 = (function (){var statearr_33961 = state_33942;
(statearr_33961[(8)] = inst_33897);

(statearr_33961[(10)] = inst_33894);

(statearr_33961[(11)] = inst_33895);

(statearr_33961[(12)] = inst_33896);

return statearr_33961;
})();
var statearr_33962_33992 = state_33942__$1;
(statearr_33962_33992[(2)] = null);

(statearr_33962_33992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (3))){
var inst_33940 = (state_33942[(2)]);
var state_33942__$1 = state_33942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33942__$1,inst_33940);
} else {
if((state_val_33943 === (12))){
var inst_33928 = (state_33942[(2)]);
var state_33942__$1 = state_33942;
var statearr_33963_33993 = state_33942__$1;
(statearr_33963_33993[(2)] = inst_33928);

(statearr_33963_33993[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (2))){
var state_33942__$1 = state_33942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33942__$1,(4),in$);
} else {
if((state_val_33943 === (23))){
var inst_33936 = (state_33942[(2)]);
var state_33942__$1 = state_33942;
var statearr_33964_33994 = state_33942__$1;
(statearr_33964_33994[(2)] = inst_33936);

(statearr_33964_33994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (19))){
var inst_33923 = (state_33942[(2)]);
var state_33942__$1 = state_33942;
var statearr_33965_33995 = state_33942__$1;
(statearr_33965_33995[(2)] = inst_33923);

(statearr_33965_33995[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (11))){
var inst_33908 = (state_33942[(7)]);
var inst_33894 = (state_33942[(10)]);
var inst_33908__$1 = cljs.core.seq.call(null,inst_33894);
var state_33942__$1 = (function (){var statearr_33966 = state_33942;
(statearr_33966[(7)] = inst_33908__$1);

return statearr_33966;
})();
if(inst_33908__$1){
var statearr_33967_33996 = state_33942__$1;
(statearr_33967_33996[(1)] = (14));

} else {
var statearr_33968_33997 = state_33942__$1;
(statearr_33968_33997[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (9))){
var inst_33930 = (state_33942[(2)]);
var inst_33931 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33942__$1 = (function (){var statearr_33969 = state_33942;
(statearr_33969[(15)] = inst_33930);

return statearr_33969;
})();
if(cljs.core.truth_(inst_33931)){
var statearr_33970_33998 = state_33942__$1;
(statearr_33970_33998[(1)] = (21));

} else {
var statearr_33971_33999 = state_33942__$1;
(statearr_33971_33999[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (5))){
var inst_33886 = cljs.core.async.close_BANG_.call(null,out);
var state_33942__$1 = state_33942;
var statearr_33972_34000 = state_33942__$1;
(statearr_33972_34000[(2)] = inst_33886);

(statearr_33972_34000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (14))){
var inst_33908 = (state_33942[(7)]);
var inst_33910 = cljs.core.chunked_seq_QMARK_.call(null,inst_33908);
var state_33942__$1 = state_33942;
if(inst_33910){
var statearr_33973_34001 = state_33942__$1;
(statearr_33973_34001[(1)] = (17));

} else {
var statearr_33974_34002 = state_33942__$1;
(statearr_33974_34002[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (16))){
var inst_33926 = (state_33942[(2)]);
var state_33942__$1 = state_33942;
var statearr_33975_34003 = state_33942__$1;
(statearr_33975_34003[(2)] = inst_33926);

(statearr_33975_34003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (10))){
var inst_33897 = (state_33942[(8)]);
var inst_33895 = (state_33942[(11)]);
var inst_33902 = cljs.core._nth.call(null,inst_33895,inst_33897);
var state_33942__$1 = state_33942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33942__$1,(13),out,inst_33902);
} else {
if((state_val_33943 === (18))){
var inst_33908 = (state_33942[(7)]);
var inst_33917 = cljs.core.first.call(null,inst_33908);
var state_33942__$1 = state_33942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33942__$1,(20),out,inst_33917);
} else {
if((state_val_33943 === (8))){
var inst_33897 = (state_33942[(8)]);
var inst_33896 = (state_33942[(12)]);
var inst_33899 = (inst_33897 < inst_33896);
var inst_33900 = inst_33899;
var state_33942__$1 = state_33942;
if(cljs.core.truth_(inst_33900)){
var statearr_33976_34004 = state_33942__$1;
(statearr_33976_34004[(1)] = (10));

} else {
var statearr_33977_34005 = state_33942__$1;
(statearr_33977_34005[(1)] = (11));

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
}
}
}
}
}
}
});})(c__32326__auto__))
;
return ((function (switch__32231__auto__,c__32326__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32232__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32232__auto____0 = (function (){
var statearr_33978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33978[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32232__auto__);

(statearr_33978[(1)] = (1));

return statearr_33978;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32232__auto____1 = (function (state_33942){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_33942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e33979){if((e33979 instanceof Object)){
var ex__32235__auto__ = e33979;
var statearr_33980_34006 = state_33942;
(statearr_33980_34006[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34007 = state_33942;
state_33942 = G__34007;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32232__auto__ = function(state_33942){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32232__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32232__auto____1.call(this,state_33942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32232__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32232__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto__))
})();
var state__32328__auto__ = (function (){var statearr_33981 = f__32327__auto__.call(null);
(statearr_33981[(6)] = c__32326__auto__);

return statearr_33981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto__))
);

return c__32326__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34009 = arguments.length;
switch (G__34009) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34012 = arguments.length;
switch (G__34012) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34015 = arguments.length;
switch (G__34015) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32326__auto___34062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto___34062,out){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto___34062,out){
return (function (state_34039){
var state_val_34040 = (state_34039[(1)]);
if((state_val_34040 === (7))){
var inst_34034 = (state_34039[(2)]);
var state_34039__$1 = state_34039;
var statearr_34041_34063 = state_34039__$1;
(statearr_34041_34063[(2)] = inst_34034);

(statearr_34041_34063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (1))){
var inst_34016 = null;
var state_34039__$1 = (function (){var statearr_34042 = state_34039;
(statearr_34042[(7)] = inst_34016);

return statearr_34042;
})();
var statearr_34043_34064 = state_34039__$1;
(statearr_34043_34064[(2)] = null);

(statearr_34043_34064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (4))){
var inst_34019 = (state_34039[(8)]);
var inst_34019__$1 = (state_34039[(2)]);
var inst_34020 = (inst_34019__$1 == null);
var inst_34021 = cljs.core.not.call(null,inst_34020);
var state_34039__$1 = (function (){var statearr_34044 = state_34039;
(statearr_34044[(8)] = inst_34019__$1);

return statearr_34044;
})();
if(inst_34021){
var statearr_34045_34065 = state_34039__$1;
(statearr_34045_34065[(1)] = (5));

} else {
var statearr_34046_34066 = state_34039__$1;
(statearr_34046_34066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (6))){
var state_34039__$1 = state_34039;
var statearr_34047_34067 = state_34039__$1;
(statearr_34047_34067[(2)] = null);

(statearr_34047_34067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (3))){
var inst_34036 = (state_34039[(2)]);
var inst_34037 = cljs.core.async.close_BANG_.call(null,out);
var state_34039__$1 = (function (){var statearr_34048 = state_34039;
(statearr_34048[(9)] = inst_34036);

return statearr_34048;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34039__$1,inst_34037);
} else {
if((state_val_34040 === (2))){
var state_34039__$1 = state_34039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34039__$1,(4),ch);
} else {
if((state_val_34040 === (11))){
var inst_34019 = (state_34039[(8)]);
var inst_34028 = (state_34039[(2)]);
var inst_34016 = inst_34019;
var state_34039__$1 = (function (){var statearr_34049 = state_34039;
(statearr_34049[(10)] = inst_34028);

(statearr_34049[(7)] = inst_34016);

return statearr_34049;
})();
var statearr_34050_34068 = state_34039__$1;
(statearr_34050_34068[(2)] = null);

(statearr_34050_34068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (9))){
var inst_34019 = (state_34039[(8)]);
var state_34039__$1 = state_34039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34039__$1,(11),out,inst_34019);
} else {
if((state_val_34040 === (5))){
var inst_34016 = (state_34039[(7)]);
var inst_34019 = (state_34039[(8)]);
var inst_34023 = cljs.core._EQ_.call(null,inst_34019,inst_34016);
var state_34039__$1 = state_34039;
if(inst_34023){
var statearr_34052_34069 = state_34039__$1;
(statearr_34052_34069[(1)] = (8));

} else {
var statearr_34053_34070 = state_34039__$1;
(statearr_34053_34070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (10))){
var inst_34031 = (state_34039[(2)]);
var state_34039__$1 = state_34039;
var statearr_34054_34071 = state_34039__$1;
(statearr_34054_34071[(2)] = inst_34031);

(statearr_34054_34071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34040 === (8))){
var inst_34016 = (state_34039[(7)]);
var tmp34051 = inst_34016;
var inst_34016__$1 = tmp34051;
var state_34039__$1 = (function (){var statearr_34055 = state_34039;
(statearr_34055[(7)] = inst_34016__$1);

return statearr_34055;
})();
var statearr_34056_34072 = state_34039__$1;
(statearr_34056_34072[(2)] = null);

(statearr_34056_34072[(1)] = (2));


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
});})(c__32326__auto___34062,out))
;
return ((function (switch__32231__auto__,c__32326__auto___34062,out){
return (function() {
var cljs$core$async$state_machine__32232__auto__ = null;
var cljs$core$async$state_machine__32232__auto____0 = (function (){
var statearr_34057 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34057[(0)] = cljs$core$async$state_machine__32232__auto__);

(statearr_34057[(1)] = (1));

return statearr_34057;
});
var cljs$core$async$state_machine__32232__auto____1 = (function (state_34039){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_34039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e34058){if((e34058 instanceof Object)){
var ex__32235__auto__ = e34058;
var statearr_34059_34073 = state_34039;
(statearr_34059_34073[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34074 = state_34039;
state_34039 = G__34074;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
cljs$core$async$state_machine__32232__auto__ = function(state_34039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32232__auto____1.call(this,state_34039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32232__auto____0;
cljs$core$async$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32232__auto____1;
return cljs$core$async$state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto___34062,out))
})();
var state__32328__auto__ = (function (){var statearr_34060 = f__32327__auto__.call(null);
(statearr_34060[(6)] = c__32326__auto___34062);

return statearr_34060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto___34062,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34076 = arguments.length;
switch (G__34076) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32326__auto___34142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto___34142,out){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto___34142,out){
return (function (state_34114){
var state_val_34115 = (state_34114[(1)]);
if((state_val_34115 === (7))){
var inst_34110 = (state_34114[(2)]);
var state_34114__$1 = state_34114;
var statearr_34116_34143 = state_34114__$1;
(statearr_34116_34143[(2)] = inst_34110);

(statearr_34116_34143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (1))){
var inst_34077 = (new Array(n));
var inst_34078 = inst_34077;
var inst_34079 = (0);
var state_34114__$1 = (function (){var statearr_34117 = state_34114;
(statearr_34117[(7)] = inst_34079);

(statearr_34117[(8)] = inst_34078);

return statearr_34117;
})();
var statearr_34118_34144 = state_34114__$1;
(statearr_34118_34144[(2)] = null);

(statearr_34118_34144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (4))){
var inst_34082 = (state_34114[(9)]);
var inst_34082__$1 = (state_34114[(2)]);
var inst_34083 = (inst_34082__$1 == null);
var inst_34084 = cljs.core.not.call(null,inst_34083);
var state_34114__$1 = (function (){var statearr_34119 = state_34114;
(statearr_34119[(9)] = inst_34082__$1);

return statearr_34119;
})();
if(inst_34084){
var statearr_34120_34145 = state_34114__$1;
(statearr_34120_34145[(1)] = (5));

} else {
var statearr_34121_34146 = state_34114__$1;
(statearr_34121_34146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (15))){
var inst_34104 = (state_34114[(2)]);
var state_34114__$1 = state_34114;
var statearr_34122_34147 = state_34114__$1;
(statearr_34122_34147[(2)] = inst_34104);

(statearr_34122_34147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (13))){
var state_34114__$1 = state_34114;
var statearr_34123_34148 = state_34114__$1;
(statearr_34123_34148[(2)] = null);

(statearr_34123_34148[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (6))){
var inst_34079 = (state_34114[(7)]);
var inst_34100 = (inst_34079 > (0));
var state_34114__$1 = state_34114;
if(cljs.core.truth_(inst_34100)){
var statearr_34124_34149 = state_34114__$1;
(statearr_34124_34149[(1)] = (12));

} else {
var statearr_34125_34150 = state_34114__$1;
(statearr_34125_34150[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (3))){
var inst_34112 = (state_34114[(2)]);
var state_34114__$1 = state_34114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34114__$1,inst_34112);
} else {
if((state_val_34115 === (12))){
var inst_34078 = (state_34114[(8)]);
var inst_34102 = cljs.core.vec.call(null,inst_34078);
var state_34114__$1 = state_34114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34114__$1,(15),out,inst_34102);
} else {
if((state_val_34115 === (2))){
var state_34114__$1 = state_34114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34114__$1,(4),ch);
} else {
if((state_val_34115 === (11))){
var inst_34094 = (state_34114[(2)]);
var inst_34095 = (new Array(n));
var inst_34078 = inst_34095;
var inst_34079 = (0);
var state_34114__$1 = (function (){var statearr_34126 = state_34114;
(statearr_34126[(10)] = inst_34094);

(statearr_34126[(7)] = inst_34079);

(statearr_34126[(8)] = inst_34078);

return statearr_34126;
})();
var statearr_34127_34151 = state_34114__$1;
(statearr_34127_34151[(2)] = null);

(statearr_34127_34151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (9))){
var inst_34078 = (state_34114[(8)]);
var inst_34092 = cljs.core.vec.call(null,inst_34078);
var state_34114__$1 = state_34114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34114__$1,(11),out,inst_34092);
} else {
if((state_val_34115 === (5))){
var inst_34079 = (state_34114[(7)]);
var inst_34082 = (state_34114[(9)]);
var inst_34087 = (state_34114[(11)]);
var inst_34078 = (state_34114[(8)]);
var inst_34086 = (inst_34078[inst_34079] = inst_34082);
var inst_34087__$1 = (inst_34079 + (1));
var inst_34088 = (inst_34087__$1 < n);
var state_34114__$1 = (function (){var statearr_34128 = state_34114;
(statearr_34128[(12)] = inst_34086);

(statearr_34128[(11)] = inst_34087__$1);

return statearr_34128;
})();
if(cljs.core.truth_(inst_34088)){
var statearr_34129_34152 = state_34114__$1;
(statearr_34129_34152[(1)] = (8));

} else {
var statearr_34130_34153 = state_34114__$1;
(statearr_34130_34153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (14))){
var inst_34107 = (state_34114[(2)]);
var inst_34108 = cljs.core.async.close_BANG_.call(null,out);
var state_34114__$1 = (function (){var statearr_34132 = state_34114;
(statearr_34132[(13)] = inst_34107);

return statearr_34132;
})();
var statearr_34133_34154 = state_34114__$1;
(statearr_34133_34154[(2)] = inst_34108);

(statearr_34133_34154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (10))){
var inst_34098 = (state_34114[(2)]);
var state_34114__$1 = state_34114;
var statearr_34134_34155 = state_34114__$1;
(statearr_34134_34155[(2)] = inst_34098);

(statearr_34134_34155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (8))){
var inst_34087 = (state_34114[(11)]);
var inst_34078 = (state_34114[(8)]);
var tmp34131 = inst_34078;
var inst_34078__$1 = tmp34131;
var inst_34079 = inst_34087;
var state_34114__$1 = (function (){var statearr_34135 = state_34114;
(statearr_34135[(7)] = inst_34079);

(statearr_34135[(8)] = inst_34078__$1);

return statearr_34135;
})();
var statearr_34136_34156 = state_34114__$1;
(statearr_34136_34156[(2)] = null);

(statearr_34136_34156[(1)] = (2));


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
});})(c__32326__auto___34142,out))
;
return ((function (switch__32231__auto__,c__32326__auto___34142,out){
return (function() {
var cljs$core$async$state_machine__32232__auto__ = null;
var cljs$core$async$state_machine__32232__auto____0 = (function (){
var statearr_34137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34137[(0)] = cljs$core$async$state_machine__32232__auto__);

(statearr_34137[(1)] = (1));

return statearr_34137;
});
var cljs$core$async$state_machine__32232__auto____1 = (function (state_34114){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_34114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e34138){if((e34138 instanceof Object)){
var ex__32235__auto__ = e34138;
var statearr_34139_34157 = state_34114;
(statearr_34139_34157[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34158 = state_34114;
state_34114 = G__34158;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
cljs$core$async$state_machine__32232__auto__ = function(state_34114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32232__auto____1.call(this,state_34114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32232__auto____0;
cljs$core$async$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32232__auto____1;
return cljs$core$async$state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto___34142,out))
})();
var state__32328__auto__ = (function (){var statearr_34140 = f__32327__auto__.call(null);
(statearr_34140[(6)] = c__32326__auto___34142);

return statearr_34140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto___34142,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34160 = arguments.length;
switch (G__34160) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32326__auto___34230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto___34230,out){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto___34230,out){
return (function (state_34202){
var state_val_34203 = (state_34202[(1)]);
if((state_val_34203 === (7))){
var inst_34198 = (state_34202[(2)]);
var state_34202__$1 = state_34202;
var statearr_34204_34231 = state_34202__$1;
(statearr_34204_34231[(2)] = inst_34198);

(statearr_34204_34231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34203 === (1))){
var inst_34161 = [];
var inst_34162 = inst_34161;
var inst_34163 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34202__$1 = (function (){var statearr_34205 = state_34202;
(statearr_34205[(7)] = inst_34162);

(statearr_34205[(8)] = inst_34163);

return statearr_34205;
})();
var statearr_34206_34232 = state_34202__$1;
(statearr_34206_34232[(2)] = null);

(statearr_34206_34232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34203 === (4))){
var inst_34166 = (state_34202[(9)]);
var inst_34166__$1 = (state_34202[(2)]);
var inst_34167 = (inst_34166__$1 == null);
var inst_34168 = cljs.core.not.call(null,inst_34167);
var state_34202__$1 = (function (){var statearr_34207 = state_34202;
(statearr_34207[(9)] = inst_34166__$1);

return statearr_34207;
})();
if(inst_34168){
var statearr_34208_34233 = state_34202__$1;
(statearr_34208_34233[(1)] = (5));

} else {
var statearr_34209_34234 = state_34202__$1;
(statearr_34209_34234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34203 === (15))){
var inst_34192 = (state_34202[(2)]);
var state_34202__$1 = state_34202;
var statearr_34210_34235 = state_34202__$1;
(statearr_34210_34235[(2)] = inst_34192);

(statearr_34210_34235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34203 === (13))){
var state_34202__$1 = state_34202;
var statearr_34211_34236 = state_34202__$1;
(statearr_34211_34236[(2)] = null);

(statearr_34211_34236[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34203 === (6))){
var inst_34162 = (state_34202[(7)]);
var inst_34187 = inst_34162.length;
var inst_34188 = (inst_34187 > (0));
var state_34202__$1 = state_34202;
if(cljs.core.truth_(inst_34188)){
var statearr_34212_34237 = state_34202__$1;
(statearr_34212_34237[(1)] = (12));

} else {
var statearr_34213_34238 = state_34202__$1;
(statearr_34213_34238[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34203 === (3))){
var inst_34200 = (state_34202[(2)]);
var state_34202__$1 = state_34202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34202__$1,inst_34200);
} else {
if((state_val_34203 === (12))){
var inst_34162 = (state_34202[(7)]);
var inst_34190 = cljs.core.vec.call(null,inst_34162);
var state_34202__$1 = state_34202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34202__$1,(15),out,inst_34190);
} else {
if((state_val_34203 === (2))){
var state_34202__$1 = state_34202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34202__$1,(4),ch);
} else {
if((state_val_34203 === (11))){
var inst_34170 = (state_34202[(10)]);
var inst_34166 = (state_34202[(9)]);
var inst_34180 = (state_34202[(2)]);
var inst_34181 = [];
var inst_34182 = inst_34181.push(inst_34166);
var inst_34162 = inst_34181;
var inst_34163 = inst_34170;
var state_34202__$1 = (function (){var statearr_34214 = state_34202;
(statearr_34214[(11)] = inst_34180);

(statearr_34214[(12)] = inst_34182);

(statearr_34214[(7)] = inst_34162);

(statearr_34214[(8)] = inst_34163);

return statearr_34214;
})();
var statearr_34215_34239 = state_34202__$1;
(statearr_34215_34239[(2)] = null);

(statearr_34215_34239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34203 === (9))){
var inst_34162 = (state_34202[(7)]);
var inst_34178 = cljs.core.vec.call(null,inst_34162);
var state_34202__$1 = state_34202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34202__$1,(11),out,inst_34178);
} else {
if((state_val_34203 === (5))){
var inst_34170 = (state_34202[(10)]);
var inst_34166 = (state_34202[(9)]);
var inst_34163 = (state_34202[(8)]);
var inst_34170__$1 = f.call(null,inst_34166);
var inst_34171 = cljs.core._EQ_.call(null,inst_34170__$1,inst_34163);
var inst_34172 = cljs.core.keyword_identical_QMARK_.call(null,inst_34163,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34173 = ((inst_34171) || (inst_34172));
var state_34202__$1 = (function (){var statearr_34216 = state_34202;
(statearr_34216[(10)] = inst_34170__$1);

return statearr_34216;
})();
if(cljs.core.truth_(inst_34173)){
var statearr_34217_34240 = state_34202__$1;
(statearr_34217_34240[(1)] = (8));

} else {
var statearr_34218_34241 = state_34202__$1;
(statearr_34218_34241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34203 === (14))){
var inst_34195 = (state_34202[(2)]);
var inst_34196 = cljs.core.async.close_BANG_.call(null,out);
var state_34202__$1 = (function (){var statearr_34220 = state_34202;
(statearr_34220[(13)] = inst_34195);

return statearr_34220;
})();
var statearr_34221_34242 = state_34202__$1;
(statearr_34221_34242[(2)] = inst_34196);

(statearr_34221_34242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34203 === (10))){
var inst_34185 = (state_34202[(2)]);
var state_34202__$1 = state_34202;
var statearr_34222_34243 = state_34202__$1;
(statearr_34222_34243[(2)] = inst_34185);

(statearr_34222_34243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34203 === (8))){
var inst_34170 = (state_34202[(10)]);
var inst_34166 = (state_34202[(9)]);
var inst_34162 = (state_34202[(7)]);
var inst_34175 = inst_34162.push(inst_34166);
var tmp34219 = inst_34162;
var inst_34162__$1 = tmp34219;
var inst_34163 = inst_34170;
var state_34202__$1 = (function (){var statearr_34223 = state_34202;
(statearr_34223[(14)] = inst_34175);

(statearr_34223[(7)] = inst_34162__$1);

(statearr_34223[(8)] = inst_34163);

return statearr_34223;
})();
var statearr_34224_34244 = state_34202__$1;
(statearr_34224_34244[(2)] = null);

(statearr_34224_34244[(1)] = (2));


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
});})(c__32326__auto___34230,out))
;
return ((function (switch__32231__auto__,c__32326__auto___34230,out){
return (function() {
var cljs$core$async$state_machine__32232__auto__ = null;
var cljs$core$async$state_machine__32232__auto____0 = (function (){
var statearr_34225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34225[(0)] = cljs$core$async$state_machine__32232__auto__);

(statearr_34225[(1)] = (1));

return statearr_34225;
});
var cljs$core$async$state_machine__32232__auto____1 = (function (state_34202){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_34202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e34226){if((e34226 instanceof Object)){
var ex__32235__auto__ = e34226;
var statearr_34227_34245 = state_34202;
(statearr_34227_34245[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34246 = state_34202;
state_34202 = G__34246;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
cljs$core$async$state_machine__32232__auto__ = function(state_34202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32232__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32232__auto____1.call(this,state_34202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32232__auto____0;
cljs$core$async$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32232__auto____1;
return cljs$core$async$state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto___34230,out))
})();
var state__32328__auto__ = (function (){var statearr_34228 = f__32327__auto__.call(null);
(statearr_34228[(6)] = c__32326__auto___34230);

return statearr_34228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto___34230,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1568136990067

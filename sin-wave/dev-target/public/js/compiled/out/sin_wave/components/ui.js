// Compiled by ClojureScript 1.10.439 {}
goog.provide('sin_wave.components.ui');
goog.require('cljs.core');
goog.require('com.stuartsierra.component');
goog.require('sin_wave.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sin_wave.components.ui.UIComponent = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
sin_wave.components.ui.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

sin_wave.components.ui.UIComponent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k41693,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__41697 = k41693;
switch (G__41697) {
default:
return cljs.core.get.call(null,self__.__extmap,k41693,else__4304__auto__);

}
});

sin_wave.components.ui.UIComponent.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__41698){
var vec__41699 = p__41698;
var k__4324__auto__ = cljs.core.nth.call(null,vec__41699,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__41699,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

sin_wave.components.ui.UIComponent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#sin-wave.components.ui.UIComponent{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

sin_wave.components.ui.UIComponent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41692){
var self__ = this;
var G__41692__$1 = this;
return (new cljs.core.RecordIter((0),G__41692__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

sin_wave.components.ui.UIComponent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

sin_wave.components.ui.UIComponent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new sin_wave.components.ui.UIComponent(self__.__meta,self__.__extmap,self__.__hash));
});

sin_wave.components.ui.UIComponent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

sin_wave.components.ui.UIComponent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (547099126 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

sin_wave.components.ui.UIComponent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41694,other41695){
var self__ = this;
var this41694__$1 = this;
return (((!((other41695 == null)))) && ((this41694__$1.constructor === other41695.constructor)) && (cljs.core._EQ_.call(null,this41694__$1.__extmap,other41695.__extmap)));
});

sin_wave.components.ui.UIComponent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new sin_wave.components.ui.UIComponent(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

sin_wave.components.ui.UIComponent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__41692){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__41702 = cljs.core.keyword_identical_QMARK_;
var expr__41703 = k__4309__auto__;
return (new sin_wave.components.ui.UIComponent(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__41692),null));
});

sin_wave.components.ui.UIComponent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

sin_wave.components.ui.UIComponent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__41692){
var self__ = this;
var this__4300__auto____$1 = this;
return (new sin_wave.components.ui.UIComponent(G__41692,self__.__extmap,self__.__hash));
});

sin_wave.components.ui.UIComponent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

sin_wave.components.ui.UIComponent.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

sin_wave.components.ui.UIComponent.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
sin_wave.core.render.call(null);

return component__$1;
});

sin_wave.components.ui.UIComponent.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return component__$1;
});

sin_wave.components.ui.UIComponent.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

sin_wave.components.ui.UIComponent.cljs$lang$type = true;

sin_wave.components.ui.UIComponent.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"sin-wave.components.ui/UIComponent",null,(1),null));
});

sin_wave.components.ui.UIComponent.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"sin-wave.components.ui/UIComponent");
});

/**
 * Positional factory function for sin-wave.components.ui/UIComponent.
 */
sin_wave.components.ui.__GT_UIComponent = (function sin_wave$components$ui$__GT_UIComponent(){
return (new sin_wave.components.ui.UIComponent(null,null,null));
});

/**
 * Factory function for sin-wave.components.ui/UIComponent, taking a map of keywords to field values.
 */
sin_wave.components.ui.map__GT_UIComponent = (function sin_wave$components$ui$map__GT_UIComponent(G__41696){
var extmap__4340__auto__ = (function (){var G__41705 = cljs.core.dissoc.call(null,G__41696);
if(cljs.core.record_QMARK_.call(null,G__41696)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__41705);
} else {
return G__41705;
}
})();
return (new sin_wave.components.ui.UIComponent(null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});

sin_wave.components.ui.new_ui_component = (function sin_wave$components$ui$new_ui_component(){
return sin_wave.components.ui.map__GT_UIComponent.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=ui.js.map?rel=1568143501522

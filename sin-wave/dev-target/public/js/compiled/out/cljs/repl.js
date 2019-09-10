// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37139){
var map__37140 = p__37139;
var map__37140__$1 = (((((!((map__37140 == null))))?(((((map__37140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37140):map__37140);
var m = map__37140__$1;
var n = cljs.core.get.call(null,map__37140__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37140__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37142_37164 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37143_37165 = null;
var count__37144_37166 = (0);
var i__37145_37167 = (0);
while(true){
if((i__37145_37167 < count__37144_37166)){
var f_37168 = cljs.core._nth.call(null,chunk__37143_37165,i__37145_37167);
cljs.core.println.call(null,"  ",f_37168);


var G__37169 = seq__37142_37164;
var G__37170 = chunk__37143_37165;
var G__37171 = count__37144_37166;
var G__37172 = (i__37145_37167 + (1));
seq__37142_37164 = G__37169;
chunk__37143_37165 = G__37170;
count__37144_37166 = G__37171;
i__37145_37167 = G__37172;
continue;
} else {
var temp__5720__auto___37173 = cljs.core.seq.call(null,seq__37142_37164);
if(temp__5720__auto___37173){
var seq__37142_37174__$1 = temp__5720__auto___37173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37142_37174__$1)){
var c__4461__auto___37175 = cljs.core.chunk_first.call(null,seq__37142_37174__$1);
var G__37176 = cljs.core.chunk_rest.call(null,seq__37142_37174__$1);
var G__37177 = c__4461__auto___37175;
var G__37178 = cljs.core.count.call(null,c__4461__auto___37175);
var G__37179 = (0);
seq__37142_37164 = G__37176;
chunk__37143_37165 = G__37177;
count__37144_37166 = G__37178;
i__37145_37167 = G__37179;
continue;
} else {
var f_37180 = cljs.core.first.call(null,seq__37142_37174__$1);
cljs.core.println.call(null,"  ",f_37180);


var G__37181 = cljs.core.next.call(null,seq__37142_37174__$1);
var G__37182 = null;
var G__37183 = (0);
var G__37184 = (0);
seq__37142_37164 = G__37181;
chunk__37143_37165 = G__37182;
count__37144_37166 = G__37183;
i__37145_37167 = G__37184;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37185 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37185);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37185)))?cljs.core.second.call(null,arglists_37185):arglists_37185));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37146_37186 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37147_37187 = null;
var count__37148_37188 = (0);
var i__37149_37189 = (0);
while(true){
if((i__37149_37189 < count__37148_37188)){
var vec__37150_37190 = cljs.core._nth.call(null,chunk__37147_37187,i__37149_37189);
var name_37191 = cljs.core.nth.call(null,vec__37150_37190,(0),null);
var map__37153_37192 = cljs.core.nth.call(null,vec__37150_37190,(1),null);
var map__37153_37193__$1 = (((((!((map__37153_37192 == null))))?(((((map__37153_37192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37153_37192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37153_37192):map__37153_37192);
var doc_37194 = cljs.core.get.call(null,map__37153_37193__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37195 = cljs.core.get.call(null,map__37153_37193__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37191);

cljs.core.println.call(null," ",arglists_37195);

if(cljs.core.truth_(doc_37194)){
cljs.core.println.call(null," ",doc_37194);
} else {
}


var G__37196 = seq__37146_37186;
var G__37197 = chunk__37147_37187;
var G__37198 = count__37148_37188;
var G__37199 = (i__37149_37189 + (1));
seq__37146_37186 = G__37196;
chunk__37147_37187 = G__37197;
count__37148_37188 = G__37198;
i__37149_37189 = G__37199;
continue;
} else {
var temp__5720__auto___37200 = cljs.core.seq.call(null,seq__37146_37186);
if(temp__5720__auto___37200){
var seq__37146_37201__$1 = temp__5720__auto___37200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37146_37201__$1)){
var c__4461__auto___37202 = cljs.core.chunk_first.call(null,seq__37146_37201__$1);
var G__37203 = cljs.core.chunk_rest.call(null,seq__37146_37201__$1);
var G__37204 = c__4461__auto___37202;
var G__37205 = cljs.core.count.call(null,c__4461__auto___37202);
var G__37206 = (0);
seq__37146_37186 = G__37203;
chunk__37147_37187 = G__37204;
count__37148_37188 = G__37205;
i__37149_37189 = G__37206;
continue;
} else {
var vec__37155_37207 = cljs.core.first.call(null,seq__37146_37201__$1);
var name_37208 = cljs.core.nth.call(null,vec__37155_37207,(0),null);
var map__37158_37209 = cljs.core.nth.call(null,vec__37155_37207,(1),null);
var map__37158_37210__$1 = (((((!((map__37158_37209 == null))))?(((((map__37158_37209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37158_37209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37158_37209):map__37158_37209);
var doc_37211 = cljs.core.get.call(null,map__37158_37210__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37212 = cljs.core.get.call(null,map__37158_37210__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37208);

cljs.core.println.call(null," ",arglists_37212);

if(cljs.core.truth_(doc_37211)){
cljs.core.println.call(null," ",doc_37211);
} else {
}


var G__37213 = cljs.core.next.call(null,seq__37146_37201__$1);
var G__37214 = null;
var G__37215 = (0);
var G__37216 = (0);
seq__37146_37186 = G__37213;
chunk__37147_37187 = G__37214;
count__37148_37188 = G__37215;
i__37149_37189 = G__37216;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__37160 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37161 = null;
var count__37162 = (0);
var i__37163 = (0);
while(true){
if((i__37163 < count__37162)){
var role = cljs.core._nth.call(null,chunk__37161,i__37163);
var temp__5720__auto___37217__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___37217__$1)){
var spec_37218 = temp__5720__auto___37217__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37218));
} else {
}


var G__37219 = seq__37160;
var G__37220 = chunk__37161;
var G__37221 = count__37162;
var G__37222 = (i__37163 + (1));
seq__37160 = G__37219;
chunk__37161 = G__37220;
count__37162 = G__37221;
i__37163 = G__37222;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__37160);
if(temp__5720__auto____$1){
var seq__37160__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37160__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__37160__$1);
var G__37223 = cljs.core.chunk_rest.call(null,seq__37160__$1);
var G__37224 = c__4461__auto__;
var G__37225 = cljs.core.count.call(null,c__4461__auto__);
var G__37226 = (0);
seq__37160 = G__37223;
chunk__37161 = G__37224;
count__37162 = G__37225;
i__37163 = G__37226;
continue;
} else {
var role = cljs.core.first.call(null,seq__37160__$1);
var temp__5720__auto___37227__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___37227__$2)){
var spec_37228 = temp__5720__auto___37227__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37228));
} else {
}


var G__37229 = cljs.core.next.call(null,seq__37160__$1);
var G__37230 = null;
var G__37231 = (0);
var G__37232 = (0);
seq__37160 = G__37229;
chunk__37161 = G__37230;
count__37162 = G__37231;
i__37163 = G__37232;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1568136995124

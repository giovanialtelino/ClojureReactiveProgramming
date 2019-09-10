// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4047__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35676_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35676_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__35677 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35678 = null;
var count__35679 = (0);
var i__35680 = (0);
while(true){
if((i__35680 < count__35679)){
var n = cljs.core._nth.call(null,chunk__35678,i__35680);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__35681 = seq__35677;
var G__35682 = chunk__35678;
var G__35683 = count__35679;
var G__35684 = (i__35680 + (1));
seq__35677 = G__35681;
chunk__35678 = G__35682;
count__35679 = G__35683;
i__35680 = G__35684;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35677);
if(temp__5720__auto__){
var seq__35677__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35677__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__35677__$1);
var G__35685 = cljs.core.chunk_rest.call(null,seq__35677__$1);
var G__35686 = c__4461__auto__;
var G__35687 = cljs.core.count.call(null,c__4461__auto__);
var G__35688 = (0);
seq__35677 = G__35685;
chunk__35678 = G__35686;
count__35679 = G__35687;
i__35680 = G__35688;
continue;
} else {
var n = cljs.core.first.call(null,seq__35677__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__35689 = cljs.core.next.call(null,seq__35677__$1);
var G__35690 = null;
var G__35691 = (0);
var G__35692 = (0);
seq__35677 = G__35689;
chunk__35678 = G__35690;
count__35679 = G__35691;
i__35680 = G__35692;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__35693){
var vec__35694 = p__35693;
var _ = cljs.core.nth.call(null,vec__35694,(0),null);
var v = cljs.core.nth.call(null,vec__35694,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__35697){
var vec__35698 = p__35697;
var k = cljs.core.nth.call(null,vec__35698,(0),null);
var v = cljs.core.nth.call(null,vec__35698,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35710_35718 = cljs.core.seq.call(null,deps);
var chunk__35711_35719 = null;
var count__35712_35720 = (0);
var i__35713_35721 = (0);
while(true){
if((i__35713_35721 < count__35712_35720)){
var dep_35722 = cljs.core._nth.call(null,chunk__35711_35719,i__35713_35721);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_35722;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35722));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35722,(depth + (1)),state);
} else {
}


var G__35723 = seq__35710_35718;
var G__35724 = chunk__35711_35719;
var G__35725 = count__35712_35720;
var G__35726 = (i__35713_35721 + (1));
seq__35710_35718 = G__35723;
chunk__35711_35719 = G__35724;
count__35712_35720 = G__35725;
i__35713_35721 = G__35726;
continue;
} else {
var temp__5720__auto___35727 = cljs.core.seq.call(null,seq__35710_35718);
if(temp__5720__auto___35727){
var seq__35710_35728__$1 = temp__5720__auto___35727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35710_35728__$1)){
var c__4461__auto___35729 = cljs.core.chunk_first.call(null,seq__35710_35728__$1);
var G__35730 = cljs.core.chunk_rest.call(null,seq__35710_35728__$1);
var G__35731 = c__4461__auto___35729;
var G__35732 = cljs.core.count.call(null,c__4461__auto___35729);
var G__35733 = (0);
seq__35710_35718 = G__35730;
chunk__35711_35719 = G__35731;
count__35712_35720 = G__35732;
i__35713_35721 = G__35733;
continue;
} else {
var dep_35734 = cljs.core.first.call(null,seq__35710_35728__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_35734;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35734));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35734,(depth + (1)),state);
} else {
}


var G__35735 = cljs.core.next.call(null,seq__35710_35728__$1);
var G__35736 = null;
var G__35737 = (0);
var G__35738 = (0);
seq__35710_35718 = G__35735;
chunk__35711_35719 = G__35736;
count__35712_35720 = G__35737;
i__35713_35721 = G__35738;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35714){
var vec__35715 = p__35714;
var seq__35716 = cljs.core.seq.call(null,vec__35715);
var first__35717 = cljs.core.first.call(null,seq__35716);
var seq__35716__$1 = cljs.core.next.call(null,seq__35716);
var x = first__35717;
var xs = seq__35716__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35715,seq__35716,first__35717,seq__35716__$1,x,xs,get_deps__$1){
return (function (p1__35701_SHARP_){
return clojure.set.difference.call(null,p1__35701_SHARP_,x);
});})(vec__35715,seq__35716,first__35717,seq__35716__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35739 = cljs.core.seq.call(null,provides);
var chunk__35740 = null;
var count__35741 = (0);
var i__35742 = (0);
while(true){
if((i__35742 < count__35741)){
var prov = cljs.core._nth.call(null,chunk__35740,i__35742);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35743_35751 = cljs.core.seq.call(null,requires);
var chunk__35744_35752 = null;
var count__35745_35753 = (0);
var i__35746_35754 = (0);
while(true){
if((i__35746_35754 < count__35745_35753)){
var req_35755 = cljs.core._nth.call(null,chunk__35744_35752,i__35746_35754);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35755,prov);


var G__35756 = seq__35743_35751;
var G__35757 = chunk__35744_35752;
var G__35758 = count__35745_35753;
var G__35759 = (i__35746_35754 + (1));
seq__35743_35751 = G__35756;
chunk__35744_35752 = G__35757;
count__35745_35753 = G__35758;
i__35746_35754 = G__35759;
continue;
} else {
var temp__5720__auto___35760 = cljs.core.seq.call(null,seq__35743_35751);
if(temp__5720__auto___35760){
var seq__35743_35761__$1 = temp__5720__auto___35760;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35743_35761__$1)){
var c__4461__auto___35762 = cljs.core.chunk_first.call(null,seq__35743_35761__$1);
var G__35763 = cljs.core.chunk_rest.call(null,seq__35743_35761__$1);
var G__35764 = c__4461__auto___35762;
var G__35765 = cljs.core.count.call(null,c__4461__auto___35762);
var G__35766 = (0);
seq__35743_35751 = G__35763;
chunk__35744_35752 = G__35764;
count__35745_35753 = G__35765;
i__35746_35754 = G__35766;
continue;
} else {
var req_35767 = cljs.core.first.call(null,seq__35743_35761__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35767,prov);


var G__35768 = cljs.core.next.call(null,seq__35743_35761__$1);
var G__35769 = null;
var G__35770 = (0);
var G__35771 = (0);
seq__35743_35751 = G__35768;
chunk__35744_35752 = G__35769;
count__35745_35753 = G__35770;
i__35746_35754 = G__35771;
continue;
}
} else {
}
}
break;
}


var G__35772 = seq__35739;
var G__35773 = chunk__35740;
var G__35774 = count__35741;
var G__35775 = (i__35742 + (1));
seq__35739 = G__35772;
chunk__35740 = G__35773;
count__35741 = G__35774;
i__35742 = G__35775;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35739);
if(temp__5720__auto__){
var seq__35739__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35739__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__35739__$1);
var G__35776 = cljs.core.chunk_rest.call(null,seq__35739__$1);
var G__35777 = c__4461__auto__;
var G__35778 = cljs.core.count.call(null,c__4461__auto__);
var G__35779 = (0);
seq__35739 = G__35776;
chunk__35740 = G__35777;
count__35741 = G__35778;
i__35742 = G__35779;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35739__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35747_35780 = cljs.core.seq.call(null,requires);
var chunk__35748_35781 = null;
var count__35749_35782 = (0);
var i__35750_35783 = (0);
while(true){
if((i__35750_35783 < count__35749_35782)){
var req_35784 = cljs.core._nth.call(null,chunk__35748_35781,i__35750_35783);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35784,prov);


var G__35785 = seq__35747_35780;
var G__35786 = chunk__35748_35781;
var G__35787 = count__35749_35782;
var G__35788 = (i__35750_35783 + (1));
seq__35747_35780 = G__35785;
chunk__35748_35781 = G__35786;
count__35749_35782 = G__35787;
i__35750_35783 = G__35788;
continue;
} else {
var temp__5720__auto___35789__$1 = cljs.core.seq.call(null,seq__35747_35780);
if(temp__5720__auto___35789__$1){
var seq__35747_35790__$1 = temp__5720__auto___35789__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35747_35790__$1)){
var c__4461__auto___35791 = cljs.core.chunk_first.call(null,seq__35747_35790__$1);
var G__35792 = cljs.core.chunk_rest.call(null,seq__35747_35790__$1);
var G__35793 = c__4461__auto___35791;
var G__35794 = cljs.core.count.call(null,c__4461__auto___35791);
var G__35795 = (0);
seq__35747_35780 = G__35792;
chunk__35748_35781 = G__35793;
count__35749_35782 = G__35794;
i__35750_35783 = G__35795;
continue;
} else {
var req_35796 = cljs.core.first.call(null,seq__35747_35790__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35796,prov);


var G__35797 = cljs.core.next.call(null,seq__35747_35790__$1);
var G__35798 = null;
var G__35799 = (0);
var G__35800 = (0);
seq__35747_35780 = G__35797;
chunk__35748_35781 = G__35798;
count__35749_35782 = G__35799;
i__35750_35783 = G__35800;
continue;
}
} else {
}
}
break;
}


var G__35801 = cljs.core.next.call(null,seq__35739__$1);
var G__35802 = null;
var G__35803 = (0);
var G__35804 = (0);
seq__35739 = G__35801;
chunk__35740 = G__35802;
count__35741 = G__35803;
i__35742 = G__35804;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35805_35809 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35806_35810 = null;
var count__35807_35811 = (0);
var i__35808_35812 = (0);
while(true){
if((i__35808_35812 < count__35807_35811)){
var ns_35813 = cljs.core._nth.call(null,chunk__35806_35810,i__35808_35812);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35813);


var G__35814 = seq__35805_35809;
var G__35815 = chunk__35806_35810;
var G__35816 = count__35807_35811;
var G__35817 = (i__35808_35812 + (1));
seq__35805_35809 = G__35814;
chunk__35806_35810 = G__35815;
count__35807_35811 = G__35816;
i__35808_35812 = G__35817;
continue;
} else {
var temp__5720__auto___35818 = cljs.core.seq.call(null,seq__35805_35809);
if(temp__5720__auto___35818){
var seq__35805_35819__$1 = temp__5720__auto___35818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35805_35819__$1)){
var c__4461__auto___35820 = cljs.core.chunk_first.call(null,seq__35805_35819__$1);
var G__35821 = cljs.core.chunk_rest.call(null,seq__35805_35819__$1);
var G__35822 = c__4461__auto___35820;
var G__35823 = cljs.core.count.call(null,c__4461__auto___35820);
var G__35824 = (0);
seq__35805_35809 = G__35821;
chunk__35806_35810 = G__35822;
count__35807_35811 = G__35823;
i__35808_35812 = G__35824;
continue;
} else {
var ns_35825 = cljs.core.first.call(null,seq__35805_35819__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35825);


var G__35826 = cljs.core.next.call(null,seq__35805_35819__$1);
var G__35827 = null;
var G__35828 = (0);
var G__35829 = (0);
seq__35805_35809 = G__35826;
chunk__35806_35810 = G__35827;
count__35807_35811 = G__35828;
i__35808_35812 = G__35829;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4047__auto__ = goog.require__;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35830__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35830 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35831__i = 0, G__35831__a = new Array(arguments.length -  0);
while (G__35831__i < G__35831__a.length) {G__35831__a[G__35831__i] = arguments[G__35831__i + 0]; ++G__35831__i;}
  args = new cljs.core.IndexedSeq(G__35831__a,0,null);
} 
return G__35830__delegate.call(this,args);};
G__35830.cljs$lang$maxFixedArity = 0;
G__35830.cljs$lang$applyTo = (function (arglist__35832){
var args = cljs.core.seq(arglist__35832);
return G__35830__delegate(args);
});
G__35830.cljs$core$IFn$_invoke$arity$variadic = G__35830__delegate;
return G__35830;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__35833_SHARP_,p2__35834_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35833_SHARP_)),p2__35834_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__35835_SHARP_,p2__35836_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35835_SHARP_),p2__35836_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35837 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35837.addCallback(((function (G__35837){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35837))
);

G__35837.addErrback(((function (G__35837){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35837))
);

return G__35837;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35838){if((e35838 instanceof Error)){
var e = e35838;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35838;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35839){if((e35839 instanceof Error)){
var e = e35839;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35839;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35840 = cljs.core._EQ_;
var expr__35841 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35840.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35841))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__35840.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35841))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__35840.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35841))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__35840,expr__35841){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35840,expr__35841))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35843,callback){
var map__35844 = p__35843;
var map__35844__$1 = (((((!((map__35844 == null))))?(((((map__35844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35844):map__35844);
var file_msg = map__35844__$1;
var request_url = cljs.core.get.call(null,map__35844__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__35844,map__35844__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35844,map__35844__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__32326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto__){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto__){
return (function (state_35882){
var state_val_35883 = (state_35882[(1)]);
if((state_val_35883 === (7))){
var inst_35878 = (state_35882[(2)]);
var state_35882__$1 = state_35882;
var statearr_35884_35910 = state_35882__$1;
(statearr_35884_35910[(2)] = inst_35878);

(statearr_35884_35910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (1))){
var state_35882__$1 = state_35882;
var statearr_35885_35911 = state_35882__$1;
(statearr_35885_35911[(2)] = null);

(statearr_35885_35911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (4))){
var inst_35848 = (state_35882[(7)]);
var inst_35848__$1 = (state_35882[(2)]);
var state_35882__$1 = (function (){var statearr_35886 = state_35882;
(statearr_35886[(7)] = inst_35848__$1);

return statearr_35886;
})();
if(cljs.core.truth_(inst_35848__$1)){
var statearr_35887_35912 = state_35882__$1;
(statearr_35887_35912[(1)] = (5));

} else {
var statearr_35888_35913 = state_35882__$1;
(statearr_35888_35913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (15))){
var inst_35861 = (state_35882[(8)]);
var inst_35863 = (state_35882[(9)]);
var inst_35865 = inst_35863.call(null,inst_35861);
var state_35882__$1 = state_35882;
var statearr_35889_35914 = state_35882__$1;
(statearr_35889_35914[(2)] = inst_35865);

(statearr_35889_35914[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (13))){
var inst_35872 = (state_35882[(2)]);
var state_35882__$1 = state_35882;
var statearr_35890_35915 = state_35882__$1;
(statearr_35890_35915[(2)] = inst_35872);

(statearr_35890_35915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (6))){
var state_35882__$1 = state_35882;
var statearr_35891_35916 = state_35882__$1;
(statearr_35891_35916[(2)] = null);

(statearr_35891_35916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (17))){
var inst_35869 = (state_35882[(2)]);
var state_35882__$1 = state_35882;
var statearr_35892_35917 = state_35882__$1;
(statearr_35892_35917[(2)] = inst_35869);

(statearr_35892_35917[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (3))){
var inst_35880 = (state_35882[(2)]);
var state_35882__$1 = state_35882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35882__$1,inst_35880);
} else {
if((state_val_35883 === (12))){
var state_35882__$1 = state_35882;
var statearr_35893_35918 = state_35882__$1;
(statearr_35893_35918[(2)] = null);

(statearr_35893_35918[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (2))){
var state_35882__$1 = state_35882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35882__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35883 === (11))){
var inst_35853 = (state_35882[(10)]);
var inst_35859 = figwheel.client.file_reloading.blocking_load.call(null,inst_35853);
var state_35882__$1 = state_35882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35882__$1,(14),inst_35859);
} else {
if((state_val_35883 === (9))){
var inst_35853 = (state_35882[(10)]);
var state_35882__$1 = state_35882;
if(cljs.core.truth_(inst_35853)){
var statearr_35894_35919 = state_35882__$1;
(statearr_35894_35919[(1)] = (11));

} else {
var statearr_35895_35920 = state_35882__$1;
(statearr_35895_35920[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (5))){
var inst_35848 = (state_35882[(7)]);
var inst_35854 = (state_35882[(11)]);
var inst_35853 = cljs.core.nth.call(null,inst_35848,(0),null);
var inst_35854__$1 = cljs.core.nth.call(null,inst_35848,(1),null);
var state_35882__$1 = (function (){var statearr_35896 = state_35882;
(statearr_35896[(10)] = inst_35853);

(statearr_35896[(11)] = inst_35854__$1);

return statearr_35896;
})();
if(cljs.core.truth_(inst_35854__$1)){
var statearr_35897_35921 = state_35882__$1;
(statearr_35897_35921[(1)] = (8));

} else {
var statearr_35898_35922 = state_35882__$1;
(statearr_35898_35922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (14))){
var inst_35863 = (state_35882[(9)]);
var inst_35853 = (state_35882[(10)]);
var inst_35861 = (state_35882[(2)]);
var inst_35862 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35863__$1 = cljs.core.get.call(null,inst_35862,inst_35853);
var state_35882__$1 = (function (){var statearr_35899 = state_35882;
(statearr_35899[(8)] = inst_35861);

(statearr_35899[(9)] = inst_35863__$1);

return statearr_35899;
})();
if(cljs.core.truth_(inst_35863__$1)){
var statearr_35900_35923 = state_35882__$1;
(statearr_35900_35923[(1)] = (15));

} else {
var statearr_35901_35924 = state_35882__$1;
(statearr_35901_35924[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (16))){
var inst_35861 = (state_35882[(8)]);
var inst_35867 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35861);
var state_35882__$1 = state_35882;
var statearr_35902_35925 = state_35882__$1;
(statearr_35902_35925[(2)] = inst_35867);

(statearr_35902_35925[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (10))){
var inst_35874 = (state_35882[(2)]);
var state_35882__$1 = (function (){var statearr_35903 = state_35882;
(statearr_35903[(12)] = inst_35874);

return statearr_35903;
})();
var statearr_35904_35926 = state_35882__$1;
(statearr_35904_35926[(2)] = null);

(statearr_35904_35926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35883 === (8))){
var inst_35854 = (state_35882[(11)]);
var inst_35856 = eval(inst_35854);
var state_35882__$1 = state_35882;
var statearr_35905_35927 = state_35882__$1;
(statearr_35905_35927[(2)] = inst_35856);

(statearr_35905_35927[(1)] = (10));


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
});})(c__32326__auto__))
;
return ((function (switch__32231__auto__,c__32326__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32232__auto__ = null;
var figwheel$client$file_reloading$state_machine__32232__auto____0 = (function (){
var statearr_35906 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35906[(0)] = figwheel$client$file_reloading$state_machine__32232__auto__);

(statearr_35906[(1)] = (1));

return statearr_35906;
});
var figwheel$client$file_reloading$state_machine__32232__auto____1 = (function (state_35882){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_35882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e35907){if((e35907 instanceof Object)){
var ex__32235__auto__ = e35907;
var statearr_35908_35928 = state_35882;
(statearr_35908_35928[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35929 = state_35882;
state_35882 = G__35929;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32232__auto__ = function(state_35882){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32232__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32232__auto____1.call(this,state_35882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32232__auto____0;
figwheel$client$file_reloading$state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32232__auto____1;
return figwheel$client$file_reloading$state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto__))
})();
var state__32328__auto__ = (function (){var statearr_35909 = f__32327__auto__.call(null);
(statearr_35909[(6)] = c__32326__auto__);

return statearr_35909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto__))
);

return c__32326__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__35931 = arguments.length;
switch (G__35931) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35933,callback){
var map__35934 = p__35933;
var map__35934__$1 = (((((!((map__35934 == null))))?(((((map__35934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35934):map__35934);
var file_msg = map__35934__$1;
var namespace = cljs.core.get.call(null,map__35934__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35934,map__35934__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35934,map__35934__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35936){
var map__35937 = p__35936;
var map__35937__$1 = (((((!((map__35937 == null))))?(((((map__35937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35937):map__35937);
var file_msg = map__35937__$1;
var namespace = cljs.core.get.call(null,map__35937__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35939){
var map__35940 = p__35939;
var map__35940__$1 = (((((!((map__35940 == null))))?(((((map__35940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35940):map__35940);
var file_msg = map__35940__$1;
var namespace = cljs.core.get.call(null,map__35940__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4036__auto__){
var or__4047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35942,callback){
var map__35943 = p__35942;
var map__35943__$1 = (((((!((map__35943 == null))))?(((((map__35943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35943):map__35943);
var file_msg = map__35943__$1;
var request_url = cljs.core.get.call(null,map__35943__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35943__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32326__auto___35993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto___35993,out){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto___35993,out){
return (function (state_35978){
var state_val_35979 = (state_35978[(1)]);
if((state_val_35979 === (1))){
var inst_35952 = cljs.core.seq.call(null,files);
var inst_35953 = cljs.core.first.call(null,inst_35952);
var inst_35954 = cljs.core.next.call(null,inst_35952);
var inst_35955 = files;
var state_35978__$1 = (function (){var statearr_35980 = state_35978;
(statearr_35980[(7)] = inst_35955);

(statearr_35980[(8)] = inst_35954);

(statearr_35980[(9)] = inst_35953);

return statearr_35980;
})();
var statearr_35981_35994 = state_35978__$1;
(statearr_35981_35994[(2)] = null);

(statearr_35981_35994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (2))){
var inst_35961 = (state_35978[(10)]);
var inst_35955 = (state_35978[(7)]);
var inst_35960 = cljs.core.seq.call(null,inst_35955);
var inst_35961__$1 = cljs.core.first.call(null,inst_35960);
var inst_35962 = cljs.core.next.call(null,inst_35960);
var inst_35963 = (inst_35961__$1 == null);
var inst_35964 = cljs.core.not.call(null,inst_35963);
var state_35978__$1 = (function (){var statearr_35982 = state_35978;
(statearr_35982[(10)] = inst_35961__$1);

(statearr_35982[(11)] = inst_35962);

return statearr_35982;
})();
if(inst_35964){
var statearr_35983_35995 = state_35978__$1;
(statearr_35983_35995[(1)] = (4));

} else {
var statearr_35984_35996 = state_35978__$1;
(statearr_35984_35996[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (3))){
var inst_35976 = (state_35978[(2)]);
var state_35978__$1 = state_35978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35978__$1,inst_35976);
} else {
if((state_val_35979 === (4))){
var inst_35961 = (state_35978[(10)]);
var inst_35966 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35961);
var state_35978__$1 = state_35978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35978__$1,(7),inst_35966);
} else {
if((state_val_35979 === (5))){
var inst_35972 = cljs.core.async.close_BANG_.call(null,out);
var state_35978__$1 = state_35978;
var statearr_35985_35997 = state_35978__$1;
(statearr_35985_35997[(2)] = inst_35972);

(statearr_35985_35997[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (6))){
var inst_35974 = (state_35978[(2)]);
var state_35978__$1 = state_35978;
var statearr_35986_35998 = state_35978__$1;
(statearr_35986_35998[(2)] = inst_35974);

(statearr_35986_35998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (7))){
var inst_35962 = (state_35978[(11)]);
var inst_35968 = (state_35978[(2)]);
var inst_35969 = cljs.core.async.put_BANG_.call(null,out,inst_35968);
var inst_35955 = inst_35962;
var state_35978__$1 = (function (){var statearr_35987 = state_35978;
(statearr_35987[(7)] = inst_35955);

(statearr_35987[(12)] = inst_35969);

return statearr_35987;
})();
var statearr_35988_35999 = state_35978__$1;
(statearr_35988_35999[(2)] = null);

(statearr_35988_35999[(1)] = (2));


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
});})(c__32326__auto___35993,out))
;
return ((function (switch__32231__auto__,c__32326__auto___35993,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32232__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32232__auto____0 = (function (){
var statearr_35989 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35989[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32232__auto__);

(statearr_35989[(1)] = (1));

return statearr_35989;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32232__auto____1 = (function (state_35978){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_35978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e35990){if((e35990 instanceof Object)){
var ex__32235__auto__ = e35990;
var statearr_35991_36000 = state_35978;
(statearr_35991_36000[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36001 = state_35978;
state_35978 = G__36001;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32232__auto__ = function(state_35978){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32232__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32232__auto____1.call(this,state_35978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32232__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32232__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto___35993,out))
})();
var state__32328__auto__ = (function (){var statearr_35992 = f__32327__auto__.call(null);
(statearr_35992[(6)] = c__32326__auto___35993);

return statearr_35992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto___35993,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36002,opts){
var map__36003 = p__36002;
var map__36003__$1 = (((((!((map__36003 == null))))?(((((map__36003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36003):map__36003);
var eval_body = cljs.core.get.call(null,map__36003__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36003__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4036__auto__ = eval_body;
if(cljs.core.truth_(and__4036__auto__)){
return typeof eval_body === 'string';
} else {
return and__4036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36005){var e = e36005;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__36006_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36006_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__36007){
var vec__36008 = p__36007;
var k = cljs.core.nth.call(null,vec__36008,(0),null);
var v = cljs.core.nth.call(null,vec__36008,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36011){
var vec__36012 = p__36011;
var k = cljs.core.nth.call(null,vec__36012,(0),null);
var v = cljs.core.nth.call(null,vec__36012,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36018,p__36019){
var map__36020 = p__36018;
var map__36020__$1 = (((((!((map__36020 == null))))?(((((map__36020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36020):map__36020);
var opts = map__36020__$1;
var before_jsload = cljs.core.get.call(null,map__36020__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36020__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36020__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36021 = p__36019;
var map__36021__$1 = (((((!((map__36021 == null))))?(((((map__36021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36021):map__36021);
var msg = map__36021__$1;
var files = cljs.core.get.call(null,map__36021__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36021__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36021__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32326__auto__,map__36020,map__36020__$1,opts,before_jsload,on_jsload,reload_dependents,map__36021,map__36021__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32327__auto__ = (function (){var switch__32231__auto__ = ((function (c__32326__auto__,map__36020,map__36020__$1,opts,before_jsload,on_jsload,reload_dependents,map__36021,map__36021__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36175){
var state_val_36176 = (state_36175[(1)]);
if((state_val_36176 === (7))){
var inst_36036 = (state_36175[(7)]);
var inst_36037 = (state_36175[(8)]);
var inst_36035 = (state_36175[(9)]);
var inst_36038 = (state_36175[(10)]);
var inst_36043 = cljs.core._nth.call(null,inst_36036,inst_36038);
var inst_36044 = figwheel.client.file_reloading.eval_body.call(null,inst_36043,opts);
var inst_36045 = (inst_36038 + (1));
var tmp36177 = inst_36036;
var tmp36178 = inst_36037;
var tmp36179 = inst_36035;
var inst_36035__$1 = tmp36179;
var inst_36036__$1 = tmp36177;
var inst_36037__$1 = tmp36178;
var inst_36038__$1 = inst_36045;
var state_36175__$1 = (function (){var statearr_36180 = state_36175;
(statearr_36180[(7)] = inst_36036__$1);

(statearr_36180[(8)] = inst_36037__$1);

(statearr_36180[(11)] = inst_36044);

(statearr_36180[(9)] = inst_36035__$1);

(statearr_36180[(10)] = inst_36038__$1);

return statearr_36180;
})();
var statearr_36181_36264 = state_36175__$1;
(statearr_36181_36264[(2)] = null);

(statearr_36181_36264[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (20))){
var inst_36078 = (state_36175[(12)]);
var inst_36086 = figwheel.client.file_reloading.sort_files.call(null,inst_36078);
var state_36175__$1 = state_36175;
var statearr_36182_36265 = state_36175__$1;
(statearr_36182_36265[(2)] = inst_36086);

(statearr_36182_36265[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (27))){
var state_36175__$1 = state_36175;
var statearr_36183_36266 = state_36175__$1;
(statearr_36183_36266[(2)] = null);

(statearr_36183_36266[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (1))){
var inst_36027 = (state_36175[(13)]);
var inst_36024 = before_jsload.call(null,files);
var inst_36025 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36026 = (function (){return ((function (inst_36027,inst_36024,inst_36025,state_val_36176,c__32326__auto__,map__36020,map__36020__$1,opts,before_jsload,on_jsload,reload_dependents,map__36021,map__36021__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36015_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36015_SHARP_);
});
;})(inst_36027,inst_36024,inst_36025,state_val_36176,c__32326__auto__,map__36020,map__36020__$1,opts,before_jsload,on_jsload,reload_dependents,map__36021,map__36021__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36027__$1 = cljs.core.filter.call(null,inst_36026,files);
var inst_36028 = cljs.core.not_empty.call(null,inst_36027__$1);
var state_36175__$1 = (function (){var statearr_36184 = state_36175;
(statearr_36184[(14)] = inst_36025);

(statearr_36184[(13)] = inst_36027__$1);

(statearr_36184[(15)] = inst_36024);

return statearr_36184;
})();
if(cljs.core.truth_(inst_36028)){
var statearr_36185_36267 = state_36175__$1;
(statearr_36185_36267[(1)] = (2));

} else {
var statearr_36186_36268 = state_36175__$1;
(statearr_36186_36268[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (24))){
var state_36175__$1 = state_36175;
var statearr_36187_36269 = state_36175__$1;
(statearr_36187_36269[(2)] = null);

(statearr_36187_36269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (39))){
var inst_36128 = (state_36175[(16)]);
var state_36175__$1 = state_36175;
var statearr_36188_36270 = state_36175__$1;
(statearr_36188_36270[(2)] = inst_36128);

(statearr_36188_36270[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (46))){
var inst_36170 = (state_36175[(2)]);
var state_36175__$1 = state_36175;
var statearr_36189_36271 = state_36175__$1;
(statearr_36189_36271[(2)] = inst_36170);

(statearr_36189_36271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (4))){
var inst_36072 = (state_36175[(2)]);
var inst_36073 = cljs.core.List.EMPTY;
var inst_36074 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36073);
var inst_36075 = (function (){return ((function (inst_36072,inst_36073,inst_36074,state_val_36176,c__32326__auto__,map__36020,map__36020__$1,opts,before_jsload,on_jsload,reload_dependents,map__36021,map__36021__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36016_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36016_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36016_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36016_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_36072,inst_36073,inst_36074,state_val_36176,c__32326__auto__,map__36020,map__36020__$1,opts,before_jsload,on_jsload,reload_dependents,map__36021,map__36021__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36076 = cljs.core.filter.call(null,inst_36075,files);
var inst_36077 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36078 = cljs.core.concat.call(null,inst_36076,inst_36077);
var state_36175__$1 = (function (){var statearr_36190 = state_36175;
(statearr_36190[(12)] = inst_36078);

(statearr_36190[(17)] = inst_36072);

(statearr_36190[(18)] = inst_36074);

return statearr_36190;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36191_36272 = state_36175__$1;
(statearr_36191_36272[(1)] = (16));

} else {
var statearr_36192_36273 = state_36175__$1;
(statearr_36192_36273[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (15))){
var inst_36062 = (state_36175[(2)]);
var state_36175__$1 = state_36175;
var statearr_36193_36274 = state_36175__$1;
(statearr_36193_36274[(2)] = inst_36062);

(statearr_36193_36274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (21))){
var inst_36088 = (state_36175[(19)]);
var inst_36088__$1 = (state_36175[(2)]);
var inst_36089 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36088__$1);
var state_36175__$1 = (function (){var statearr_36194 = state_36175;
(statearr_36194[(19)] = inst_36088__$1);

return statearr_36194;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36175__$1,(22),inst_36089);
} else {
if((state_val_36176 === (31))){
var inst_36173 = (state_36175[(2)]);
var state_36175__$1 = state_36175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36175__$1,inst_36173);
} else {
if((state_val_36176 === (32))){
var inst_36128 = (state_36175[(16)]);
var inst_36133 = inst_36128.cljs$lang$protocol_mask$partition0$;
var inst_36134 = (inst_36133 & (64));
var inst_36135 = inst_36128.cljs$core$ISeq$;
var inst_36136 = (cljs.core.PROTOCOL_SENTINEL === inst_36135);
var inst_36137 = ((inst_36134) || (inst_36136));
var state_36175__$1 = state_36175;
if(cljs.core.truth_(inst_36137)){
var statearr_36195_36275 = state_36175__$1;
(statearr_36195_36275[(1)] = (35));

} else {
var statearr_36196_36276 = state_36175__$1;
(statearr_36196_36276[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (40))){
var inst_36150 = (state_36175[(20)]);
var inst_36149 = (state_36175[(2)]);
var inst_36150__$1 = cljs.core.get.call(null,inst_36149,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36151 = cljs.core.get.call(null,inst_36149,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36152 = cljs.core.not_empty.call(null,inst_36150__$1);
var state_36175__$1 = (function (){var statearr_36197 = state_36175;
(statearr_36197[(20)] = inst_36150__$1);

(statearr_36197[(21)] = inst_36151);

return statearr_36197;
})();
if(cljs.core.truth_(inst_36152)){
var statearr_36198_36277 = state_36175__$1;
(statearr_36198_36277[(1)] = (41));

} else {
var statearr_36199_36278 = state_36175__$1;
(statearr_36199_36278[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (33))){
var state_36175__$1 = state_36175;
var statearr_36200_36279 = state_36175__$1;
(statearr_36200_36279[(2)] = false);

(statearr_36200_36279[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (13))){
var inst_36048 = (state_36175[(22)]);
var inst_36052 = cljs.core.chunk_first.call(null,inst_36048);
var inst_36053 = cljs.core.chunk_rest.call(null,inst_36048);
var inst_36054 = cljs.core.count.call(null,inst_36052);
var inst_36035 = inst_36053;
var inst_36036 = inst_36052;
var inst_36037 = inst_36054;
var inst_36038 = (0);
var state_36175__$1 = (function (){var statearr_36201 = state_36175;
(statearr_36201[(7)] = inst_36036);

(statearr_36201[(8)] = inst_36037);

(statearr_36201[(9)] = inst_36035);

(statearr_36201[(10)] = inst_36038);

return statearr_36201;
})();
var statearr_36202_36280 = state_36175__$1;
(statearr_36202_36280[(2)] = null);

(statearr_36202_36280[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (22))){
var inst_36092 = (state_36175[(23)]);
var inst_36091 = (state_36175[(24)]);
var inst_36096 = (state_36175[(25)]);
var inst_36088 = (state_36175[(19)]);
var inst_36091__$1 = (state_36175[(2)]);
var inst_36092__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36091__$1);
var inst_36093 = (function (){var all_files = inst_36088;
var res_SINGLEQUOTE_ = inst_36091__$1;
var res = inst_36092__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36092,inst_36091,inst_36096,inst_36088,inst_36091__$1,inst_36092__$1,state_val_36176,c__32326__auto__,map__36020,map__36020__$1,opts,before_jsload,on_jsload,reload_dependents,map__36021,map__36021__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36017_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36017_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36092,inst_36091,inst_36096,inst_36088,inst_36091__$1,inst_36092__$1,state_val_36176,c__32326__auto__,map__36020,map__36020__$1,opts,before_jsload,on_jsload,reload_dependents,map__36021,map__36021__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36094 = cljs.core.filter.call(null,inst_36093,inst_36091__$1);
var inst_36095 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36096__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36095);
var inst_36097 = cljs.core.not_empty.call(null,inst_36096__$1);
var state_36175__$1 = (function (){var statearr_36203 = state_36175;
(statearr_36203[(23)] = inst_36092__$1);

(statearr_36203[(24)] = inst_36091__$1);

(statearr_36203[(25)] = inst_36096__$1);

(statearr_36203[(26)] = inst_36094);

return statearr_36203;
})();
if(cljs.core.truth_(inst_36097)){
var statearr_36204_36281 = state_36175__$1;
(statearr_36204_36281[(1)] = (23));

} else {
var statearr_36205_36282 = state_36175__$1;
(statearr_36205_36282[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (36))){
var state_36175__$1 = state_36175;
var statearr_36206_36283 = state_36175__$1;
(statearr_36206_36283[(2)] = false);

(statearr_36206_36283[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (41))){
var inst_36150 = (state_36175[(20)]);
var inst_36154 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36155 = cljs.core.map.call(null,inst_36154,inst_36150);
var inst_36156 = cljs.core.pr_str.call(null,inst_36155);
var inst_36157 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36156)].join('');
var inst_36158 = figwheel.client.utils.log.call(null,inst_36157);
var state_36175__$1 = state_36175;
var statearr_36207_36284 = state_36175__$1;
(statearr_36207_36284[(2)] = inst_36158);

(statearr_36207_36284[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (43))){
var inst_36151 = (state_36175[(21)]);
var inst_36161 = (state_36175[(2)]);
var inst_36162 = cljs.core.not_empty.call(null,inst_36151);
var state_36175__$1 = (function (){var statearr_36208 = state_36175;
(statearr_36208[(27)] = inst_36161);

return statearr_36208;
})();
if(cljs.core.truth_(inst_36162)){
var statearr_36209_36285 = state_36175__$1;
(statearr_36209_36285[(1)] = (44));

} else {
var statearr_36210_36286 = state_36175__$1;
(statearr_36210_36286[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (29))){
var inst_36092 = (state_36175[(23)]);
var inst_36091 = (state_36175[(24)]);
var inst_36096 = (state_36175[(25)]);
var inst_36094 = (state_36175[(26)]);
var inst_36128 = (state_36175[(16)]);
var inst_36088 = (state_36175[(19)]);
var inst_36124 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36127 = (function (){var all_files = inst_36088;
var res_SINGLEQUOTE_ = inst_36091;
var res = inst_36092;
var files_not_loaded = inst_36094;
var dependencies_that_loaded = inst_36096;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36092,inst_36091,inst_36096,inst_36094,inst_36128,inst_36088,inst_36124,state_val_36176,c__32326__auto__,map__36020,map__36020__$1,opts,before_jsload,on_jsload,reload_dependents,map__36021,map__36021__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36126){
var map__36211 = p__36126;
var map__36211__$1 = (((((!((map__36211 == null))))?(((((map__36211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36211):map__36211);
var namespace = cljs.core.get.call(null,map__36211__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36092,inst_36091,inst_36096,inst_36094,inst_36128,inst_36088,inst_36124,state_val_36176,c__32326__auto__,map__36020,map__36020__$1,opts,before_jsload,on_jsload,reload_dependents,map__36021,map__36021__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36128__$1 = cljs.core.group_by.call(null,inst_36127,inst_36094);
var inst_36130 = (inst_36128__$1 == null);
var inst_36131 = cljs.core.not.call(null,inst_36130);
var state_36175__$1 = (function (){var statearr_36213 = state_36175;
(statearr_36213[(28)] = inst_36124);

(statearr_36213[(16)] = inst_36128__$1);

return statearr_36213;
})();
if(inst_36131){
var statearr_36214_36287 = state_36175__$1;
(statearr_36214_36287[(1)] = (32));

} else {
var statearr_36215_36288 = state_36175__$1;
(statearr_36215_36288[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (44))){
var inst_36151 = (state_36175[(21)]);
var inst_36164 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36151);
var inst_36165 = cljs.core.pr_str.call(null,inst_36164);
var inst_36166 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36165)].join('');
var inst_36167 = figwheel.client.utils.log.call(null,inst_36166);
var state_36175__$1 = state_36175;
var statearr_36216_36289 = state_36175__$1;
(statearr_36216_36289[(2)] = inst_36167);

(statearr_36216_36289[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (6))){
var inst_36069 = (state_36175[(2)]);
var state_36175__$1 = state_36175;
var statearr_36217_36290 = state_36175__$1;
(statearr_36217_36290[(2)] = inst_36069);

(statearr_36217_36290[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (28))){
var inst_36094 = (state_36175[(26)]);
var inst_36121 = (state_36175[(2)]);
var inst_36122 = cljs.core.not_empty.call(null,inst_36094);
var state_36175__$1 = (function (){var statearr_36218 = state_36175;
(statearr_36218[(29)] = inst_36121);

return statearr_36218;
})();
if(cljs.core.truth_(inst_36122)){
var statearr_36219_36291 = state_36175__$1;
(statearr_36219_36291[(1)] = (29));

} else {
var statearr_36220_36292 = state_36175__$1;
(statearr_36220_36292[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (25))){
var inst_36092 = (state_36175[(23)]);
var inst_36108 = (state_36175[(2)]);
var inst_36109 = cljs.core.not_empty.call(null,inst_36092);
var state_36175__$1 = (function (){var statearr_36221 = state_36175;
(statearr_36221[(30)] = inst_36108);

return statearr_36221;
})();
if(cljs.core.truth_(inst_36109)){
var statearr_36222_36293 = state_36175__$1;
(statearr_36222_36293[(1)] = (26));

} else {
var statearr_36223_36294 = state_36175__$1;
(statearr_36223_36294[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (34))){
var inst_36144 = (state_36175[(2)]);
var state_36175__$1 = state_36175;
if(cljs.core.truth_(inst_36144)){
var statearr_36224_36295 = state_36175__$1;
(statearr_36224_36295[(1)] = (38));

} else {
var statearr_36225_36296 = state_36175__$1;
(statearr_36225_36296[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (17))){
var state_36175__$1 = state_36175;
var statearr_36226_36297 = state_36175__$1;
(statearr_36226_36297[(2)] = recompile_dependents);

(statearr_36226_36297[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (3))){
var state_36175__$1 = state_36175;
var statearr_36227_36298 = state_36175__$1;
(statearr_36227_36298[(2)] = null);

(statearr_36227_36298[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (12))){
var inst_36065 = (state_36175[(2)]);
var state_36175__$1 = state_36175;
var statearr_36228_36299 = state_36175__$1;
(statearr_36228_36299[(2)] = inst_36065);

(statearr_36228_36299[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (2))){
var inst_36027 = (state_36175[(13)]);
var inst_36034 = cljs.core.seq.call(null,inst_36027);
var inst_36035 = inst_36034;
var inst_36036 = null;
var inst_36037 = (0);
var inst_36038 = (0);
var state_36175__$1 = (function (){var statearr_36229 = state_36175;
(statearr_36229[(7)] = inst_36036);

(statearr_36229[(8)] = inst_36037);

(statearr_36229[(9)] = inst_36035);

(statearr_36229[(10)] = inst_36038);

return statearr_36229;
})();
var statearr_36230_36300 = state_36175__$1;
(statearr_36230_36300[(2)] = null);

(statearr_36230_36300[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (23))){
var inst_36092 = (state_36175[(23)]);
var inst_36091 = (state_36175[(24)]);
var inst_36096 = (state_36175[(25)]);
var inst_36094 = (state_36175[(26)]);
var inst_36088 = (state_36175[(19)]);
var inst_36099 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36101 = (function (){var all_files = inst_36088;
var res_SINGLEQUOTE_ = inst_36091;
var res = inst_36092;
var files_not_loaded = inst_36094;
var dependencies_that_loaded = inst_36096;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36092,inst_36091,inst_36096,inst_36094,inst_36088,inst_36099,state_val_36176,c__32326__auto__,map__36020,map__36020__$1,opts,before_jsload,on_jsload,reload_dependents,map__36021,map__36021__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36100){
var map__36231 = p__36100;
var map__36231__$1 = (((((!((map__36231 == null))))?(((((map__36231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36231):map__36231);
var request_url = cljs.core.get.call(null,map__36231__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36092,inst_36091,inst_36096,inst_36094,inst_36088,inst_36099,state_val_36176,c__32326__auto__,map__36020,map__36020__$1,opts,before_jsload,on_jsload,reload_dependents,map__36021,map__36021__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36102 = cljs.core.reverse.call(null,inst_36096);
var inst_36103 = cljs.core.map.call(null,inst_36101,inst_36102);
var inst_36104 = cljs.core.pr_str.call(null,inst_36103);
var inst_36105 = figwheel.client.utils.log.call(null,inst_36104);
var state_36175__$1 = (function (){var statearr_36233 = state_36175;
(statearr_36233[(31)] = inst_36099);

return statearr_36233;
})();
var statearr_36234_36301 = state_36175__$1;
(statearr_36234_36301[(2)] = inst_36105);

(statearr_36234_36301[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (35))){
var state_36175__$1 = state_36175;
var statearr_36235_36302 = state_36175__$1;
(statearr_36235_36302[(2)] = true);

(statearr_36235_36302[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (19))){
var inst_36078 = (state_36175[(12)]);
var inst_36084 = figwheel.client.file_reloading.expand_files.call(null,inst_36078);
var state_36175__$1 = state_36175;
var statearr_36236_36303 = state_36175__$1;
(statearr_36236_36303[(2)] = inst_36084);

(statearr_36236_36303[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (11))){
var state_36175__$1 = state_36175;
var statearr_36237_36304 = state_36175__$1;
(statearr_36237_36304[(2)] = null);

(statearr_36237_36304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (9))){
var inst_36067 = (state_36175[(2)]);
var state_36175__$1 = state_36175;
var statearr_36238_36305 = state_36175__$1;
(statearr_36238_36305[(2)] = inst_36067);

(statearr_36238_36305[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (5))){
var inst_36037 = (state_36175[(8)]);
var inst_36038 = (state_36175[(10)]);
var inst_36040 = (inst_36038 < inst_36037);
var inst_36041 = inst_36040;
var state_36175__$1 = state_36175;
if(cljs.core.truth_(inst_36041)){
var statearr_36239_36306 = state_36175__$1;
(statearr_36239_36306[(1)] = (7));

} else {
var statearr_36240_36307 = state_36175__$1;
(statearr_36240_36307[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (14))){
var inst_36048 = (state_36175[(22)]);
var inst_36057 = cljs.core.first.call(null,inst_36048);
var inst_36058 = figwheel.client.file_reloading.eval_body.call(null,inst_36057,opts);
var inst_36059 = cljs.core.next.call(null,inst_36048);
var inst_36035 = inst_36059;
var inst_36036 = null;
var inst_36037 = (0);
var inst_36038 = (0);
var state_36175__$1 = (function (){var statearr_36241 = state_36175;
(statearr_36241[(7)] = inst_36036);

(statearr_36241[(8)] = inst_36037);

(statearr_36241[(32)] = inst_36058);

(statearr_36241[(9)] = inst_36035);

(statearr_36241[(10)] = inst_36038);

return statearr_36241;
})();
var statearr_36242_36308 = state_36175__$1;
(statearr_36242_36308[(2)] = null);

(statearr_36242_36308[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (45))){
var state_36175__$1 = state_36175;
var statearr_36243_36309 = state_36175__$1;
(statearr_36243_36309[(2)] = null);

(statearr_36243_36309[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (26))){
var inst_36092 = (state_36175[(23)]);
var inst_36091 = (state_36175[(24)]);
var inst_36096 = (state_36175[(25)]);
var inst_36094 = (state_36175[(26)]);
var inst_36088 = (state_36175[(19)]);
var inst_36111 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36113 = (function (){var all_files = inst_36088;
var res_SINGLEQUOTE_ = inst_36091;
var res = inst_36092;
var files_not_loaded = inst_36094;
var dependencies_that_loaded = inst_36096;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36092,inst_36091,inst_36096,inst_36094,inst_36088,inst_36111,state_val_36176,c__32326__auto__,map__36020,map__36020__$1,opts,before_jsload,on_jsload,reload_dependents,map__36021,map__36021__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36112){
var map__36244 = p__36112;
var map__36244__$1 = (((((!((map__36244 == null))))?(((((map__36244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36244):map__36244);
var namespace = cljs.core.get.call(null,map__36244__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36244__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36092,inst_36091,inst_36096,inst_36094,inst_36088,inst_36111,state_val_36176,c__32326__auto__,map__36020,map__36020__$1,opts,before_jsload,on_jsload,reload_dependents,map__36021,map__36021__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36114 = cljs.core.map.call(null,inst_36113,inst_36092);
var inst_36115 = cljs.core.pr_str.call(null,inst_36114);
var inst_36116 = figwheel.client.utils.log.call(null,inst_36115);
var inst_36117 = (function (){var all_files = inst_36088;
var res_SINGLEQUOTE_ = inst_36091;
var res = inst_36092;
var files_not_loaded = inst_36094;
var dependencies_that_loaded = inst_36096;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36092,inst_36091,inst_36096,inst_36094,inst_36088,inst_36111,inst_36113,inst_36114,inst_36115,inst_36116,state_val_36176,c__32326__auto__,map__36020,map__36020__$1,opts,before_jsload,on_jsload,reload_dependents,map__36021,map__36021__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36092,inst_36091,inst_36096,inst_36094,inst_36088,inst_36111,inst_36113,inst_36114,inst_36115,inst_36116,state_val_36176,c__32326__auto__,map__36020,map__36020__$1,opts,before_jsload,on_jsload,reload_dependents,map__36021,map__36021__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36118 = setTimeout(inst_36117,(10));
var state_36175__$1 = (function (){var statearr_36246 = state_36175;
(statearr_36246[(33)] = inst_36111);

(statearr_36246[(34)] = inst_36116);

return statearr_36246;
})();
var statearr_36247_36310 = state_36175__$1;
(statearr_36247_36310[(2)] = inst_36118);

(statearr_36247_36310[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (16))){
var state_36175__$1 = state_36175;
var statearr_36248_36311 = state_36175__$1;
(statearr_36248_36311[(2)] = reload_dependents);

(statearr_36248_36311[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (38))){
var inst_36128 = (state_36175[(16)]);
var inst_36146 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36128);
var state_36175__$1 = state_36175;
var statearr_36249_36312 = state_36175__$1;
(statearr_36249_36312[(2)] = inst_36146);

(statearr_36249_36312[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (30))){
var state_36175__$1 = state_36175;
var statearr_36250_36313 = state_36175__$1;
(statearr_36250_36313[(2)] = null);

(statearr_36250_36313[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (10))){
var inst_36048 = (state_36175[(22)]);
var inst_36050 = cljs.core.chunked_seq_QMARK_.call(null,inst_36048);
var state_36175__$1 = state_36175;
if(inst_36050){
var statearr_36251_36314 = state_36175__$1;
(statearr_36251_36314[(1)] = (13));

} else {
var statearr_36252_36315 = state_36175__$1;
(statearr_36252_36315[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (18))){
var inst_36082 = (state_36175[(2)]);
var state_36175__$1 = state_36175;
if(cljs.core.truth_(inst_36082)){
var statearr_36253_36316 = state_36175__$1;
(statearr_36253_36316[(1)] = (19));

} else {
var statearr_36254_36317 = state_36175__$1;
(statearr_36254_36317[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (42))){
var state_36175__$1 = state_36175;
var statearr_36255_36318 = state_36175__$1;
(statearr_36255_36318[(2)] = null);

(statearr_36255_36318[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (37))){
var inst_36141 = (state_36175[(2)]);
var state_36175__$1 = state_36175;
var statearr_36256_36319 = state_36175__$1;
(statearr_36256_36319[(2)] = inst_36141);

(statearr_36256_36319[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36176 === (8))){
var inst_36035 = (state_36175[(9)]);
var inst_36048 = (state_36175[(22)]);
var inst_36048__$1 = cljs.core.seq.call(null,inst_36035);
var state_36175__$1 = (function (){var statearr_36257 = state_36175;
(statearr_36257[(22)] = inst_36048__$1);

return statearr_36257;
})();
if(inst_36048__$1){
var statearr_36258_36320 = state_36175__$1;
(statearr_36258_36320[(1)] = (10));

} else {
var statearr_36259_36321 = state_36175__$1;
(statearr_36259_36321[(1)] = (11));

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
}
});})(c__32326__auto__,map__36020,map__36020__$1,opts,before_jsload,on_jsload,reload_dependents,map__36021,map__36021__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32231__auto__,c__32326__auto__,map__36020,map__36020__$1,opts,before_jsload,on_jsload,reload_dependents,map__36021,map__36021__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32232__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32232__auto____0 = (function (){
var statearr_36260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36260[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32232__auto__);

(statearr_36260[(1)] = (1));

return statearr_36260;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32232__auto____1 = (function (state_36175){
while(true){
var ret_value__32233__auto__ = (function (){try{while(true){
var result__32234__auto__ = switch__32231__auto__.call(null,state_36175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32234__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32234__auto__;
}
break;
}
}catch (e36261){if((e36261 instanceof Object)){
var ex__32235__auto__ = e36261;
var statearr_36262_36322 = state_36175;
(statearr_36262_36322[(5)] = ex__32235__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36323 = state_36175;
state_36175 = G__36323;
continue;
} else {
return ret_value__32233__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32232__auto__ = function(state_36175){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32232__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32232__auto____1.call(this,state_36175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32232__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32232__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32232__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32232__auto__;
})()
;})(switch__32231__auto__,c__32326__auto__,map__36020,map__36020__$1,opts,before_jsload,on_jsload,reload_dependents,map__36021,map__36021__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32328__auto__ = (function (){var statearr_36263 = f__32327__auto__.call(null);
(statearr_36263[(6)] = c__32326__auto__);

return statearr_36263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32328__auto__);
});})(c__32326__auto__,map__36020,map__36020__$1,opts,before_jsload,on_jsload,reload_dependents,map__36021,map__36021__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32326__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36326,link){
var map__36327 = p__36326;
var map__36327__$1 = (((((!((map__36327 == null))))?(((((map__36327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36327):map__36327);
var file = cljs.core.get.call(null,map__36327__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__36327,map__36327__$1,file){
return (function (p1__36324_SHARP_,p2__36325_SHARP_){
if(cljs.core._EQ_.call(null,p1__36324_SHARP_,p2__36325_SHARP_)){
return p1__36324_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__36327,map__36327__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36330){
var map__36331 = p__36330;
var map__36331__$1 = (((((!((map__36331 == null))))?(((((map__36331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36331):map__36331);
var match_length = cljs.core.get.call(null,map__36331__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36331__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36329_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36329_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36333_SHARP_,p2__36334_SHARP_){
return cljs.core.assoc.call(null,p1__36333_SHARP_,cljs.core.get.call(null,p2__36334_SHARP_,key),p2__36334_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_36335 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36335);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36335);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36336,p__36337){
var map__36338 = p__36336;
var map__36338__$1 = (((((!((map__36338 == null))))?(((((map__36338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36338):map__36338);
var on_cssload = cljs.core.get.call(null,map__36338__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36339 = p__36337;
var map__36339__$1 = (((((!((map__36339 == null))))?(((((map__36339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36339):map__36339);
var files_msg = map__36339__$1;
var files = cljs.core.get.call(null,map__36339__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1568136993232

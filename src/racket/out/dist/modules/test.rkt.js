"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.__rjs_quoted__=void 0;var _core=require("../runtime/core.js"),$rjs_core=_interopRequireWildcard(_core),_interopRkt=require("../links/racketscript-compiler/racketscript/private/interop.rkt.js"),M0=_interopRequireWildcard(_interopRkt),_kernelRkt=require("../runtime/kernel.rkt.js"),M1=_interopRequireWildcard(_kernelRkt),_forRkt=require("../collects/racket/private/for.rkt.js"),M2=_interopRequireWildcard(_forRkt),_memwatchNext=require("memwatch-next"),_memwatchNext2=_interopRequireDefault(_memwatchNext),obj_assign=global.Object.assign,console=global.console,JSON=global.JSON,record=function(e,r){_memwatchNext2.default.gc();var t=new _memwatchNext2.default.HeapDiff,s=[],i=e;if(M1.real_p(0)){if(M1.real_p(i))l=M1.real_p(1);else var l=!1;n=l}else var n=!1;if(n)M1.rvoid();else M2.__rjs_quoted__.in_range(0,i,1);return function e(t){if(M1._lt_(t,i)){if(s.push(r()),M1.values(),M1.values(),M1.not(!1))l=e(t+1);else var l=M1.values();n=l}else var n=M1.values();return n}(0),M1.rvoid(),t.end().change.size_bytes/e},fill_hash=function(e,r){var t=e;if(M1.real_p(0)){if(M1.real_p(t))s=M1.real_p(1);else var s=!1;i=s}else var i=!1;if(i)M1.rvoid();else M2.__rjs_quoted__.in_range(0,t,1);return function e(s){if(M1._lt_(s,t)){var i=s;if(r=M1.hash_set(r,M1.string_append("key-",M1.number__gt_string(i)),i),M1.values(),M1.values(),M1.not(!1))l=e(s+1);else var l=M1.values();n=l}else var n=M1.values();return n}(0),M1.rvoid(),r},fill_list=function(e,r){var t=e;if(M1.real_p(0)){if(M1.real_p(t))s=M1.real_p(1);else var s=!1;i=s}else var i=!1;if(i)M1.rvoid();else M2.__rjs_quoted__.in_range(0,t,1);return function e(s){if(M1._lt_(s,t)){var i=s;if(r=M1.cons(i,r),M1.values(),M1.values(),M1.not(!1))l=e(s+1);else var l=M1.values();n=l}else var n=M1.values();return n}(0),M1.rvoid(),r},fill_vec=function(e,r){var t=e;if(M1.real_p(0)){if(M1.real_p(t))s=M1.real_p(1);else var s=!1;i=s}else var i=!1;if(i)M1.rvoid();else M2.__rjs_quoted__.in_range(0,t,1);return function e(s){if(M1._lt_(s,t)){var i=s;if(M1.vector_set_bang_(r,i,i),M1.values(),M1.values(),M1.not(!1))l=e(s+1);else var l=M1.values();n=l}else var n=M1.values();return n}(0),M1.rvoid(),r},results={};results=obj_assign(results=obj_assign(results=obj_assign(results=obj_assign(results=obj_assign(results=obj_assign(results=obj_assign(results=obj_assign(results=obj_assign(results=obj_assign(results=obj_assign(results=obj_assign(results,{"empty vector":record(1e3,function(){return M1.vector()})}),{"empty hash map":record(1e3,function(){return M1.hash()})}),{"empty list":record(1e3,function(){return M1.list()})}),{"10 item vector":record(1e3,function(){return fill_vec(10,M1.vector())})}),{"10 item hash map":record(1e3,function(){return fill_hash(10,M1.hash())})}),{"10 item list":record(1e3,function(){return fill_list(10,M1.list())})}),{"100 item vector":record(1e3,function(){return fill_vec(100,M1.vector())})}),{"100 item hash map":record(1e3,function(){return fill_hash(100,M1.hash())})}),{"100 item list":record(1e3,function(){return fill_list(100,M1.list())})}),{"1000 item vector":record(1e3,function(){return fill_vec(100,M1.vector())})}),{"1000 item hash map":record(1e3,function(){return fill_hash(1e3,M1.hash())})}),{"1000 item list":record(1e3,function(){return fill_list(1e3,M1.list())})}),console.log(JSON.stringify(results));var __rjs_quoted__={};exports.__rjs_quoted__=__rjs_quoted__;
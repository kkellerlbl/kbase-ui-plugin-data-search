!function(e,t){
"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()
}(this,(function(){"use strict";var e,t;function n(){
return e.apply(null,arguments)}function s(e){
return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}
function i(e){
return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}
function r(e){return void 0===e}function a(e){
return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}
function o(e){
return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}
function u(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}
function l(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
function h(e,t){for(var n in t)l(t,n)&&(e[n]=t[n])
;return l(t,"toString")&&(e.toString=t.toString),
l(t,"valueOf")&&(e.valueOf=t.valueOf),e}function d(e,t,n,s){
return St(e,t,n,s,!0).utc()}function c(e){return null==e._pf&&(e._pf={empty:!1,
unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,
invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],
meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function f(e){
if(null==e._isValid){var n=c(e),s=t.call(n.parsedDateParts,(function(e){
return null!=e
})),i=!isNaN(e._d.getTime())&&n.overflow<0&&!n.empty&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&s)
;if(e._strict&&(i=i&&0===n.charsLeftOver&&0===n.unusedTokens.length&&void 0===n.bigHour),
null!=Object.isFrozen&&Object.isFrozen(e))return i;e._isValid=i}
return e._isValid}function m(e){var t=d(NaN)
;return null!=e?h(c(t),e):c(t).userInvalidated=!0,t}
t=Array.prototype.some?Array.prototype.some:function(e){
for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0
;return!1};var _=n.momentProperties=[];function y(e,t){var n,s,i
;if(r(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),
r(t._i)||(e._i=t._i),
r(t._f)||(e._f=t._f),r(t._l)||(e._l=t._l),r(t._strict)||(e._strict=t._strict),
r(t._tzm)||(e._tzm=t._tzm),
r(t._isUTC)||(e._isUTC=t._isUTC),r(t._offset)||(e._offset=t._offset),
r(t._pf)||(e._pf=c(t)),
r(t._locale)||(e._locale=t._locale),_.length>0)for(n=0;n<_.length;n++)r(i=t[s=_[n]])||(e[s]=i)
;return e}var g=!1;function v(e){
y(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),
this.isValid()||(this._d=new Date(NaN)),!1===g&&(g=!0,n.updateOffset(this),g=!1)
}function p(e){return e instanceof v||null!=e&&null!=e._isAMomentObject}
function w(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function M(e){
var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=w(t)),n}function k(e,t,n){
var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0
;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&M(e[s])!==M(t[s]))&&a++;return a+r}
function S(e){
!1===n.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)
}function D(e,t){var s=!0;return h((function(){
if(null!=n.deprecationHandler&&n.deprecationHandler(null,e),s){
for(var i,r=[],a=0;a<arguments.length;a++){
if(i="","object"==typeof arguments[a]){
for(var o in i+="\n["+a+"] ",arguments[0])i+=o+": "+arguments[0][o]+", "
;i=i.slice(0,-2)}else i=arguments[a];r.push(i)}
S(e+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+(new Error).stack),
s=!1}return t.apply(this,arguments)}),t)}var Y,O={};function T(e,t){
null!=n.deprecationHandler&&n.deprecationHandler(e,t),O[e]||(S(t),O[e]=!0)}
function b(e){
return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)
}function x(e,t){var n,s=h({},e)
;for(n in t)l(t,n)&&(i(e[n])&&i(t[n])?(s[n]={},h(s[n],e[n]),
h(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n])
;for(n in e)l(e,n)&&!l(t,n)&&i(e[n])&&(s[n]=h({},s[n]));return s}function P(e){
null!=e&&this.set(e)}n.suppressDeprecationWarnings=!1,n.deprecationHandler=null,
Y=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)l(e,t)&&n.push(t)
;return n};var W={};function C(e,t){var n=e.toLowerCase();W[n]=W[n+"s"]=W[t]=e}
function H(e){return"string"==typeof e?W[e]||W[e.toLowerCase()]:void 0}
function R(e){var t,n,s={};for(n in e)l(e,n)&&(t=H(n))&&(s[t]=e[n]);return s}
var U={};function F(e,t){U[e]=t}function L(e,t,n){
var s=""+Math.abs(e),i=t-s.length
;return(e>=0?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}
var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,G=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,V={},E={}
;function I(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()
}),e&&(E[e]=i),t&&(E[t[0]]=function(){
return L(i.apply(this,arguments),t[1],t[2])}),n&&(E[n]=function(){
return this.localeData().ordinal(i.apply(this,arguments),e)})}function A(e){
return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}
function j(e,t){
return e.isValid()?(t=Z(t,e.localeData()),V[t]=V[t]||function(e){
var t,n,s=e.match(N)
;for(t=0,n=s.length;t<n;t++)E[s[t]]?s[t]=E[s[t]]:s[t]=A(s[t])
;return function(t){var i,r="";for(i=0;i<n;i++)r+=b(s[i])?s[i].call(t,e):s[i]
;return r}}(t),V[t](e)):e.localeData().invalidDate()}function Z(e,t){var n=5
;function s(e){return t.longDateFormat(e)||e}
for(G.lastIndex=0;n>=0&&G.test(e);)e=e.replace(G,s),G.lastIndex=0,n-=1;return e}
var z=/\d/,$=/\d\d/,q=/\d{3}/,J=/\d{4}/,B=/[+-]?\d{6}/,Q=/\d\d?/,X=/\d\d\d\d?/,K=/\d\d\d\d\d\d?/,ee=/\d{1,3}/,te=/\d{1,4}/,ne=/[+-]?\d{1,6}/,se=/\d+/,ie=/[+-]?\d+/,re=/Z|[+-]\d\d:?\d\d/gi,ae=/Z|[+-]\d\d(?::?\d\d)?/gi,oe=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,ue={}
;function le(e,t,n){ue[e]=b(t)?t:function(e,s){return e&&n?n:t}}
function he(e,t){
return l(ue,e)?ue[e](t._strict,t._locale):new RegExp(function(e){
return de(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,(function(e,t,n,s,i){
return t||n||s||i})))}(e))}function de(e){
return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var ce={};function fe(e,t){
var n,s=t;for("string"==typeof e&&(e=[e]),a(t)&&(s=function(e,n){n[t]=M(e)
}),n=0;n<e.length;n++)ce[e[n]]=s}function me(e,t){fe(e,(function(e,n,s,i){
s._w=s._w||{},t(e,s._w,s,i)}))}function _e(e,t,n){
null!=t&&l(ce,e)&&ce[e](t,n._a,n,e)}function ye(e){return ge(e)?366:365}
function ge(e){return e%4==0&&e%100!=0||e%400==0}I("Y",0,0,(function(){
var e=this.year();return e<=9999?""+e:"+"+e})),I(0,["YY",2],0,(function(){
return this.year()%100
})),I(0,["YYYY",4],0,"year"),I(0,["YYYYY",5],0,"year"),I(0,["YYYYYY",6,!0],0,"year"),
C("year","y"),
F("year",1),le("Y",ie),le("YY",Q,$),le("YYYY",te,J),le("YYYYY",ne,B),
le("YYYYYY",ne,B),fe(["YYYYY","YYYYYY"],0),fe("YYYY",(function(e,t){
t[0]=2===e.length?n.parseTwoDigitYear(e):M(e)})),fe("YY",(function(e,t){
t[0]=n.parseTwoDigitYear(e)})),fe("Y",(function(e,t){t[0]=parseInt(e,10)
})),n.parseTwoDigitYear=function(e){return M(e)+(M(e)>68?1900:2e3)}
;var ve,pe=we("FullYear",!0);function we(e,t){return function(s){
return null!=s?(ke(this,e,s),n.updateOffset(this,t),this):Me(this,e)}}
function Me(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}
function ke(e,t,n){
e.isValid()&&!isNaN(n)&&("FullYear"===t&&ge(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Se(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))
}function Se(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=function(e,t){
return(e%t+t)%t}(t,12);return e+=(t-n)/12,1===n?ge(e)?29:28:31-n%7%2}
ve=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t
;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1
},I("M",["MM",2],"Mo",(function(){return this.month()+1
})),I("MMM",0,0,(function(e){return this.localeData().monthsShort(this,e)
})),I("MMMM",0,0,(function(e){return this.localeData().months(this,e)
})),C("month","M"),F("month",8),le("M",Q),le("MM",Q,$),le("MMM",(function(e,t){
return t.monthsShortRegex(e)})),le("MMMM",(function(e,t){return t.monthsRegex(e)
})),fe(["M","MM"],(function(e,t){t[1]=M(e)-1
})),fe(["MMM","MMMM"],(function(e,t,n,s){
var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[1]=i:c(n).invalidMonth=e}))
;var De=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Ye="January_February_March_April_May_June_July_August_September_October_November_December".split("_")
;var Oe="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
;function Te(e,t,n){var s,i,r,a=e.toLocaleLowerCase()
;if(!this._monthsParse)for(this._monthsParse=[],
this._longMonthsParse=[],this._shortMonthsParse=[],
s=0;s<12;++s)r=d([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),
this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase()
;return n?"MMM"===t?-1!==(i=ve.call(this._shortMonthsParse,a))?i:null:-1!==(i=ve.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=ve.call(this._shortMonthsParse,a))?i:-1!==(i=ve.call(this._longMonthsParse,a))?i:null:-1!==(i=ve.call(this._longMonthsParse,a))?i:-1!==(i=ve.call(this._shortMonthsParse,a))?i:null
}function be(e,t){var n;if(!e.isValid())return e
;if("string"==typeof t)if(/^\d+$/.test(t))t=M(t);else if(!a(t=e.localeData().monthsParse(t)))return e
;return n=Math.min(e.date(),Se(e.year(),t)),
e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function xe(e){
return null!=e?(be(this,e),n.updateOffset(this,!0),this):Me(this,"Month")}
var Pe=oe;var We=oe;function Ce(){function e(e,t){return t.length-e.length}
var t,n,s=[],i=[],r=[]
;for(t=0;t<12;t++)n=d([2e3,t]),s.push(this.monthsShort(n,"")),
i.push(this.months(n,"")),
r.push(this.months(n,"")),r.push(this.monthsShort(n,""))
;for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=de(s[t]),i[t]=de(i[t])
;for(t=0;t<24;t++)r[t]=de(r[t])
;this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),
this._monthsShortRegex=this._monthsRegex,
this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),
this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}
function He(e,t,n,s,i,r,a){var o
;return e<100&&e>=0?(o=new Date(e+400,t,n,s,i,r,a),
isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,s,i,r,a),o}
function Re(e){var t;if(e<100&&e>=0){var n=Array.prototype.slice.call(arguments)
;n[0]=e+400,
t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)
}else t=new Date(Date.UTC.apply(null,arguments));return t}function Ue(e,t,n){
var s=7+t-n;return-((7+Re(e,0,s).getUTCDay()-t)%7)+s-1}function Fe(e,t,n,s,i){
var r,a,o=1+7*(t-1)+(7+n-s)%7+Ue(e,s,i)
;return o<=0?a=ye(r=e-1)+o:o>ye(e)?(r=e+1,a=o-ye(e)):(r=e,a=o),{year:r,
dayOfYear:a}}function Le(e,t,n){
var s,i,r=Ue(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1
;return a<1?s=a+Ne(i=e.year()-1,t,n):a>Ne(e.year(),t,n)?(s=a-Ne(e.year(),t,n),
i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ne(e,t,n){
var s=Ue(e,t,n),i=Ue(e+1,t,n);return(ye(e)-s+i)/7}
I("w",["ww",2],"wo","week"),I("W",["WW",2],"Wo","isoWeek"),
C("week","w"),C("isoWeek","W"),
F("week",5),F("isoWeek",5),le("w",Q),le("ww",Q,$),
le("W",Q),le("WW",Q,$),me(["w","ww","W","WW"],(function(e,t,n,s){
t[s.substr(0,1)]=M(e)}));function Ge(e,t){
return e.slice(t,7).concat(e.slice(0,t))}
I("d",0,"do","day"),I("dd",0,0,(function(e){
return this.localeData().weekdaysMin(this,e)})),I("ddd",0,0,(function(e){
return this.localeData().weekdaysShort(this,e)})),I("dddd",0,0,(function(e){
return this.localeData().weekdays(this,e)
})),I("e",0,0,"weekday"),I("E",0,0,"isoWeekday"),
C("day","d"),C("weekday","e"),C("isoWeekday","E"),
F("day",11),F("weekday",11),F("isoWeekday",11),
le("d",Q),le("e",Q),le("E",Q),le("dd",(function(e,t){
return t.weekdaysMinRegex(e)})),le("ddd",(function(e,t){
return t.weekdaysShortRegex(e)})),le("dddd",(function(e,t){
return t.weekdaysRegex(e)})),me(["dd","ddd","dddd"],(function(e,t,n,s){
var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:c(n).invalidWeekday=e
})),me(["d","e","E"],(function(e,t,n,s){t[s]=M(e)}))
;var Ve="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
;var Ee="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
;var Ie="Su_Mo_Tu_We_Th_Fr_Sa".split("_");function Ae(e,t,n){
var s,i,r,a=e.toLocaleLowerCase()
;if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],
this._minWeekdaysParse=[],
s=0;s<7;++s)r=d([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),
this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),
this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase()
;return n?"dddd"===t?-1!==(i=ve.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=ve.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=ve.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=ve.call(this._weekdaysParse,a))?i:-1!==(i=ve.call(this._shortWeekdaysParse,a))?i:-1!==(i=ve.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=ve.call(this._shortWeekdaysParse,a))?i:-1!==(i=ve.call(this._weekdaysParse,a))?i:-1!==(i=ve.call(this._minWeekdaysParse,a))?i:null:-1!==(i=ve.call(this._minWeekdaysParse,a))?i:-1!==(i=ve.call(this._weekdaysParse,a))?i:-1!==(i=ve.call(this._shortWeekdaysParse,a))?i:null
}var je=oe;var Ze=oe;var ze=oe;function $e(){function e(e,t){
return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[]
;for(t=0;t<7;t++)n=d([2e3,1]).day(t),
s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),
r=this.weekdays(n,""),a.push(s),
o.push(i),u.push(r),l.push(s),l.push(i),l.push(r)
;for(a.sort(e),o.sort(e),u.sort(e),
l.sort(e),t=0;t<7;t++)o[t]=de(o[t]),u[t]=de(u[t]),l[t]=de(l[t])
;this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),
this._weekdaysShortRegex=this._weekdaysRegex,
this._weekdaysMinRegex=this._weekdaysRegex,
this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),
this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),
this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function qe(){
return this.hours()%12||12}function Je(e,t){I(e,0,0,(function(){
return this.localeData().meridiem(this.hours(),this.minutes(),t)}))}
function Be(e,t){return t._meridiemParse}
I("H",["HH",2],0,"hour"),I("h",["hh",2],0,qe),I("k",["kk",2],0,(function(){
return this.hours()||24})),I("hmm",0,0,(function(){
return""+qe.apply(this)+L(this.minutes(),2)})),I("hmmss",0,0,(function(){
return""+qe.apply(this)+L(this.minutes(),2)+L(this.seconds(),2)
})),I("Hmm",0,0,(function(){return""+this.hours()+L(this.minutes(),2)
})),I("Hmmss",0,0,(function(){
return""+this.hours()+L(this.minutes(),2)+L(this.seconds(),2)
})),Je("a",!0),Je("A",!1),
C("hour","h"),F("hour",13),le("a",Be),le("A",Be),le("H",Q),
le("h",Q),le("k",Q),le("HH",Q,$),
le("hh",Q,$),le("kk",Q,$),le("hmm",X),le("hmmss",K),
le("Hmm",X),le("Hmmss",K),fe(["H","HH"],3),fe(["k","kk"],(function(e,t,n){
var s=M(e);t[3]=24===s?0:s})),fe(["a","A"],(function(e,t,n){
n._isPm=n._locale.isPM(e),n._meridiem=e})),fe(["h","hh"],(function(e,t,n){
t[3]=M(e),c(n).bigHour=!0})),fe("hmm",(function(e,t,n){var s=e.length-2
;t[3]=M(e.substr(0,s)),t[4]=M(e.substr(s)),c(n).bigHour=!0
})),fe("hmmss",(function(e,t,n){var s=e.length-4,i=e.length-2
;t[3]=M(e.substr(0,s)),t[4]=M(e.substr(s,2)),t[5]=M(e.substr(i)),c(n).bigHour=!0
})),fe("Hmm",(function(e,t,n){var s=e.length-2
;t[3]=M(e.substr(0,s)),t[4]=M(e.substr(s))})),fe("Hmmss",(function(e,t,n){
var s=e.length-4,i=e.length-2
;t[3]=M(e.substr(0,s)),t[4]=M(e.substr(s,2)),t[5]=M(e.substr(i))}))
;var Qe,Xe=we("Hours",!0),Ke={calendar:{sameDay:"[Today at] LT",
nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",
lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",
LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",
LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",
dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",
s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",
hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",
yy:"%d years"},months:Ye,monthsShort:Oe,week:{dow:0,doy:6},weekdays:Ve,
weekdaysMin:Ie,weekdaysShort:Ee,meridiemParse:/[ap]\.?m?\.?/i},et={},tt={}
;function nt(e){return e?e.toLowerCase().replace("_","-"):e}function st(e){
var t=null;if(!et[e]&&"undefined"!=typeof module&&module&&module.exports)try{
t=Qe._abbr,require("./locale/"+e),it(t)}catch(n){}return et[e]}function it(e,t){
var n
;return e&&((n=r(t)?at(e):rt(e,t))?Qe=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),
Qe._abbr}function rt(e,t){if(null!==t){var n,s=Ke
;if(t.abbr=e,null!=et[e])T("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
s=et[e]._config;else if(null!=t.parentLocale)if(null!=et[t.parentLocale])s=et[t.parentLocale]._config;else{
if(null==(n=st(t.parentLocale)))return tt[t.parentLocale]||(tt[t.parentLocale]=[]),
tt[t.parentLocale].push({name:e,config:t}),null;s=n._config}
return et[e]=new P(x(s,t)),tt[e]&&tt[e].forEach((function(e){rt(e.name,e.config)
})),it(e),et[e]}return delete et[e],null}function at(e){var t
;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Qe;if(!s(e)){
if(t=st(e))return t;e=[e]}return function(e){for(var t,n,s,i,r=0;r<e.length;){
for(t=(i=nt(e[r]).split("-")).length,n=(n=nt(e[r+1]))?n.split("-"):null;t>0;){
if(s=st(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&k(i,n,!0)>=t-1)break
;t--}r++}return Qe}(e)}function ot(e){var t,n=e._a
;return n&&-2===c(e).overflow&&(t=n[1]<0||n[1]>11?1:n[2]<1||n[2]>Se(n[0],n[1])?2:n[3]<0||n[3]>24||24===n[3]&&(0!==n[4]||0!==n[5]||0!==n[6])?3:n[4]<0||n[4]>59?4:n[5]<0||n[5]>59?5:n[6]<0||n[6]>999?6:-1,
c(e)._overflowDayOfYear&&(t<0||t>2)&&(t=2),
c(e)._overflowWeeks&&-1===t&&(t=7),c(e)._overflowWeekday&&-1===t&&(t=8),
c(e).overflow=t),e}function ut(e,t,n){return null!=e?e:null!=t?t:n}
function lt(e){var t,s,i,r,a,o=[];if(!e._d){for(i=function(e){
var t=new Date(n.now())
;return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]
}(e),e._w&&null==e._a[2]&&null==e._a[1]&&function(e){var t,n,s,i,r,a,o,u
;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,
a=4,n=ut(t.GG,e._a[0],Le(Dt(),1,4).year),
s=ut(t.W,1),((i=ut(t.E,1))<1||i>7)&&(u=!0);else{
r=e._locale._week.dow,a=e._locale._week.doy;var l=Le(Dt(),r,a)
;n=ut(t.gg,e._a[0],l.year),
s=ut(t.w,l.week),null!=t.d?((i=t.d)<0||i>6)&&(u=!0):null!=t.e?(i=t.e+r,
(t.e<0||t.e>6)&&(u=!0)):i=r}
s<1||s>Ne(n,r,a)?c(e)._overflowWeeks=!0:null!=u?c(e)._overflowWeekday=!0:(o=Fe(n,s,i,r,a),
e._a[0]=o.year,e._dayOfYear=o.dayOfYear)
}(e),null!=e._dayOfYear&&(a=ut(e._a[0],i[0]),
(e._dayOfYear>ye(a)||0===e._dayOfYear)&&(c(e)._overflowDayOfYear=!0),
s=Re(a,0,e._dayOfYear),
e._a[1]=s.getUTCMonth(),e._a[2]=s.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=o[t]=i[t]
;for(;t<7;t++)e._a[t]=o[t]=null==e._a[t]?2===t?1:0:e._a[t]
;24===e._a[3]&&0===e._a[4]&&0===e._a[5]&&0===e._a[6]&&(e._nextDay=!0,e._a[3]=0),
e._d=(e._useUTC?Re:He).apply(null,o),r=e._useUTC?e._d.getUTCDay():e._d.getDay(),
null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),
e._nextDay&&(e._a[3]=24),
e._w&&void 0!==e._w.d&&e._w.d!==r&&(c(e).weekdayMismatch=!0)}}
var ht=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,dt=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ct=/Z|[+-]\d\d(?::?\d\d)?/,ft=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],mt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],_t=/^\/?Date\((\-?\d+)/i
;function yt(e){var t,n,s,i,r,a,o=e._i,u=ht.exec(o)||dt.exec(o);if(u){
for(c(e).iso=!0,t=0,n=ft.length;t<n;t++)if(ft[t][1].exec(u[1])){
i=ft[t][0],s=!1!==ft[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){
for(t=0,n=mt.length;t<n;t++)if(mt[t][1].exec(u[3])){r=(u[2]||" ")+mt[t][0];break
}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1)
;if(u[4]){if(!ct.exec(u[4]))return void(e._isValid=!1);a="Z"}
e._f=i+(r||"")+(a||""),Mt(e)}else e._isValid=!1}
var gt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/
;function vt(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}var pt={
UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,
PST:-480};function wt(e){var t=gt.exec(function(e){
return e.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")
}(e._i));if(t){var n=function(e,t,n,s,i,r){
var a=[vt(e),Oe.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)]
;return r&&a.push(parseInt(r,10)),a}(t[4],t[3],t[2],t[5],t[6],t[7])
;if(!function(e,t,n){
return!e||Ee.indexOf(e)===new Date(t[0],t[1],t[2]).getDay()||(c(n).weekdayMismatch=!0,
n._isValid=!1,!1)}(t[1],n,e))return;e._a=n,e._tzm=function(e,t,n){
if(e)return pt[e];if(t)return 0;var s=parseInt(n,10),i=s%100
;return 60*((s-i)/100)+i
}(t[8],t[9],t[10]),e._d=Re.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),
c(e).rfc2822=!0}else e._isValid=!1}function Mt(e){
if(e._f!==n.ISO_8601)if(e._f!==n.RFC_2822){e._a=[],c(e).empty=!0
;var t,s,i,r,a,o=""+e._i,u=o.length,l=0
;for(i=Z(e._f,e._locale).match(N)||[],t=0;t<i.length;t++)r=i[t],
(s=(o.match(he(r,e))||[])[0])&&((a=o.substr(0,o.indexOf(s))).length>0&&c(e).unusedInput.push(a),
o=o.slice(o.indexOf(s)+s.length),
l+=s.length),E[r]?(s?c(e).empty=!1:c(e).unusedTokens.push(r),
_e(r,s,e)):e._strict&&!s&&c(e).unusedTokens.push(r)
;c(e).charsLeftOver=u-l,o.length>0&&c(e).unusedInput.push(o),
e._a[3]<=12&&!0===c(e).bigHour&&e._a[3]>0&&(c(e).bigHour=void 0),
c(e).parsedDateParts=e._a.slice(0),
c(e).meridiem=e._meridiem,e._a[3]=function(e,t,n){var s;if(null==n)return t
;return null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?((s=e.isPM(n))&&t<12&&(t+=12),
s||12!==t||(t=0),t):t}(e._locale,e._a[3],e._meridiem),lt(e),ot(e)
}else wt(e);else yt(e)}function kt(e){var t=e._i,l=e._f
;return e._locale=e._locale||at(e._l),null===t||void 0===l&&""===t?m({
nullInput:!0
}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),p(t)?new v(ot(t)):(o(t)?e._d=t:s(l)?function(e){
var t,n,s,i,r
;if(0===e._f.length)return c(e).invalidFormat=!0,void(e._d=new Date(NaN))
;for(i=0;i<e._f.length;i++)r=0,t=y({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),
t._f=e._f[i],
Mt(t),f(t)&&(r+=c(t).charsLeftOver,r+=10*c(t).unusedTokens.length,c(t).score=r,
(null==s||r<s)&&(s=r,n=t));h(e,n||t)}(e):l?Mt(e):function(e){var t=e._i
;r(t)?e._d=new Date(n.now()):o(t)?e._d=new Date(t.valueOf()):"string"==typeof t?function(e){
var t=_t.exec(e._i)
;null===t?(yt(e),!1===e._isValid&&(delete e._isValid,wt(e),!1===e._isValid&&(delete e._isValid,
n.createFromInputFallback(e)))):e._d=new Date(+t[1])
}(e):s(t)?(e._a=u(t.slice(0),(function(e){return parseInt(e,10)
})),lt(e)):i(t)?function(e){if(!e._d){var t=R(e._i)
;e._a=u([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],(function(e){
return e&&parseInt(e,10)})),lt(e)}
}(e):a(t)?e._d=new Date(t):n.createFromInputFallback(e)
}(e),f(e)||(e._d=null),e))}function St(e,t,n,r,a){var o={}
;return!0!==n&&!1!==n||(r=n,n=void 0),(i(e)&&function(e){
if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length
;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0
}(e)||s(e)&&0===e.length)&&(e=void 0),
o._isAMomentObject=!0,o._useUTC=o._isUTC=a,
o._l=n,o._i=e,o._f=t,o._strict=r,function(e){var t=new v(ot(kt(e)))
;return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}(o)}function Dt(e,t,n,s){
return St(e,t,n,s,!1)}
n.createFromInputFallback=D("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",(function(e){
e._d=new Date(e._i+(e._useUTC?" UTC":""))
})),n.ISO_8601=function(){},n.RFC_2822=function(){}
;var Yt=D("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){
var e=Dt.apply(null,arguments)
;return this.isValid()&&e.isValid()?e<this?this:e:m()
})),Ot=D("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){
var e=Dt.apply(null,arguments)
;return this.isValid()&&e.isValid()?e>this?this:e:m()}));function Tt(e,t){
var n,i;if(1===t.length&&s(t[0])&&(t=t[0]),!t.length)return Dt()
;for(n=t[0],i=1;i<t.length;++i)t[i].isValid()&&!t[i][e](n)||(n=t[i]);return n}
var bt=["year","quarter","month","week","day","hour","minute","second","millisecond"]
;function xt(e){
var t=R(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||t.isoWeek||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,h=t.millisecond||0
;this._isValid=function(e){
for(var t in e)if(-1===ve.call(bt,t)||null!=e[t]&&isNaN(e[t]))return!1
;for(var n=!1,s=0;s<bt.length;++s)if(e[bt[s]]){if(n)return!1
;parseFloat(e[bt[s]])!==M(e[bt[s]])&&(n=!0)}return!0
}(t),this._milliseconds=+h+1e3*l+6e4*u+1e3*o*60*60,
this._days=+a+7*r,this._months=+i+3*s+12*n,
this._data={},this._locale=at(),this._bubble()}function Pt(e){
return e instanceof xt}function Wt(e){
return e<0?-1*Math.round(-1*e):Math.round(e)}function Ct(e,t){
I(e,0,0,(function(){var e=this.utcOffset(),n="+"
;return e<0&&(e=-e,n="-"),n+L(~~(e/60),2)+t+L(~~e%60,2)}))}
Ct("Z",":"),Ct("ZZ",""),le("Z",ae),le("ZZ",ae),fe(["Z","ZZ"],(function(e,t,n){
n._useUTC=!0,n._tzm=Rt(ae,e)}));var Ht=/([\+\-]|\d\d)/gi;function Rt(e,t){
var n=(t||"").match(e);if(null===n)return null
;var s=((n[n.length-1]||[])+"").match(Ht)||["-",0,0],i=60*s[1]+M(s[2])
;return 0===i?0:"+"===s[0]?i:-i}function Ut(e,t){var s,i
;return t._isUTC?(s=t.clone(),
i=(p(e)||o(e)?e.valueOf():Dt(e).valueOf())-s.valueOf(),
s._d.setTime(s._d.valueOf()+i),n.updateOffset(s,!1),s):Dt(e).local()}
function Ft(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Lt(){
return!!this.isValid()&&(this._isUTC&&0===this._offset)}
n.updateOffset=function(){}
;var Nt=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Gt=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/
;function Vt(e,t){var n,s,i,r=e,o=null;return Pt(e)?r={ms:e._milliseconds,
d:e._days,M:e._months
}:a(e)?(r={},t?r[t]=e:r.milliseconds=e):(o=Nt.exec(e))?(n="-"===o[1]?-1:1,r={
y:0,d:M(o[2])*n,h:M(o[3])*n,m:M(o[4])*n,s:M(o[5])*n,ms:M(Wt(1e3*o[6]))*n
}):(o=Gt.exec(e))?(n="-"===o[1]?-1:1,r={y:Et(o[2],n),M:Et(o[3],n),w:Et(o[4],n),
d:Et(o[5],n),h:Et(o[6],n),m:Et(o[7],n),s:Et(o[8],n)
}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){
var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0}
;t=Ut(t,e),e.isBefore(t)?n=It(e,t):((n=It(t,e)).milliseconds=-n.milliseconds,
n.months=-n.months);return n
}(Dt(r.from),Dt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),
s=new xt(r),Pt(e)&&l(e,"_locale")&&(s._locale=e._locale),s}function Et(e,t){
var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function It(e,t){
var n={}
;return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,
n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function At(e,t){
return function(n,s){var i
;return null===s||isNaN(+s)||(T(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
i=n,n=s,s=i),jt(this,Vt(n="string"==typeof n?+n:n,s),e),this}}
function jt(e,t,s,i){var r=t._milliseconds,a=Wt(t._days),o=Wt(t._months)
;e.isValid()&&(i=null==i||i,
o&&be(e,Me(e,"Month")+o*s),a&&ke(e,"Date",Me(e,"Date")+a*s),
r&&e._d.setTime(e._d.valueOf()+r*s),i&&n.updateOffset(e,a||o))}
Vt.fn=xt.prototype,Vt.invalid=function(){return Vt(NaN)}
;var Zt=At(1,"add"),zt=At(-1,"subtract");function $t(e,t){
var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months")
;return-(n+(t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(n+1,"months")-s)))||0
}function qt(e){var t
;return void 0===e?this._locale._abbr:(null!=(t=at(e))&&(this._locale=t),this)}
n.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",
n.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]"
;var Jt=D("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",(function(e){
return void 0===e?this.localeData():this.locale(e)}));function Bt(){
return this._locale}function Qt(e,t){return(e%t+t)%t}function Xt(e,t,n){
return e<100&&e>=0?new Date(e+400,t,n)-126227808e5:new Date(e,t,n).valueOf()}
function Kt(e,t,n){
return e<100&&e>=0?Date.UTC(e+400,t,n)-126227808e5:Date.UTC(e,t,n)}
function en(e,t){I(0,[e,e.length],0,t)}function tn(e,t,n,s,i){var r
;return null==e?Le(this,s,i).year:(t>(r=Ne(e,s,i))&&(t=r),
nn.call(this,e,t,n,s,i))}function nn(e,t,n,s,i){
var r=Fe(e,t,n,s,i),a=Re(r.year,0,r.dayOfYear)
;return this.year(a.getUTCFullYear()),
this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}
I(0,["gg",2],0,(function(){return this.weekYear()%100
})),I(0,["GG",2],0,(function(){return this.isoWeekYear()%100
})),en("gggg","weekYear"),
en("ggggg","weekYear"),en("GGGG","isoWeekYear"),en("GGGGG","isoWeekYear"),
C("weekYear","gg"),
C("isoWeekYear","GG"),F("weekYear",1),F("isoWeekYear",1),le("G",ie),
le("g",ie),le("GG",Q,$),
le("gg",Q,$),le("GGGG",te,J),le("gggg",te,J),le("GGGGG",ne,B),
le("ggggg",ne,B),me(["gggg","ggggg","GGGG","GGGGG"],(function(e,t,n,s){
t[s.substr(0,2)]=M(e)})),me(["gg","GG"],(function(e,t,s,i){
t[i]=n.parseTwoDigitYear(e)
})),I("Q",0,"Qo","quarter"),C("quarter","Q"),F("quarter",7),
le("Q",z),fe("Q",(function(e,t){t[1]=3*(M(e)-1)
})),I("D",["DD",2],"Do","date"),C("date","D"),
F("date",9),le("D",Q),le("DD",Q,$),le("Do",(function(e,t){
return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient
})),fe(["D","DD"],2),fe("Do",(function(e,t){t[2]=M(e.match(Q)[0])}))
;var sn=we("Date",!0)
;I("DDD",["DDDD",3],"DDDo","dayOfYear"),C("dayOfYear","DDD"),
F("dayOfYear",4),le("DDD",ee),le("DDDD",q),fe(["DDD","DDDD"],(function(e,t,n){
n._dayOfYear=M(e)
})),I("m",["mm",2],0,"minute"),C("minute","m"),F("minute",14),le("m",Q),
le("mm",Q,$),fe(["m","mm"],4);var rn=we("Minutes",!1)
;I("s",["ss",2],0,"second"),
C("second","s"),F("second",15),le("s",Q),le("ss",Q,$),fe(["s","ss"],5)
;var an,on=we("Seconds",!1);for(I("S",0,0,(function(){
return~~(this.millisecond()/100)})),I(0,["SS",2],0,(function(){
return~~(this.millisecond()/10)
})),I(0,["SSS",3],0,"millisecond"),I(0,["SSSS",4],0,(function(){
return 10*this.millisecond()})),I(0,["SSSSS",5],0,(function(){
return 100*this.millisecond()})),I(0,["SSSSSS",6],0,(function(){
return 1e3*this.millisecond()})),I(0,["SSSSSSS",7],0,(function(){
return 1e4*this.millisecond()})),I(0,["SSSSSSSS",8],0,(function(){
return 1e5*this.millisecond()})),I(0,["SSSSSSSSS",9],0,(function(){
return 1e6*this.millisecond()
})),C("millisecond","ms"),F("millisecond",16),le("S",ee,z),
le("SS",ee,$),le("SSS",ee,q),an="SSSS";an.length<=9;an+="S")le(an,se)
;function un(e,t){t[6]=M(1e3*("0."+e))}for(an="S";an.length<=9;an+="S")fe(an,un)
;var ln=we("Milliseconds",!1);I("z",0,0,"zoneAbbr"),I("zz",0,0,"zoneName")
;var hn=v.prototype;function dn(e){return e}hn.add=Zt,hn.calendar=function(e,t){
var s=e||Dt(),i=Ut(s,this).startOf("day"),r=n.calendarFormat(this,i)||"sameElse",a=t&&(b(t[r])?t[r].call(this,s):t[r])
;return this.format(a||this.localeData().calendar(r,this,Dt(s)))
},hn.clone=function(){return new v(this)},hn.diff=function(e,t,n){var s,i,r
;if(!this.isValid())return NaN;if(!(s=Ut(e,this)).isValid())return NaN
;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=H(t)){case"year":
r=$t(this,s)/12;break;case"month":r=$t(this,s);break;case"quarter":
r=$t(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":
r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":
r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}
return n?r:w(r)},hn.endOf=function(e){var t
;if(void 0===(e=H(e))||"millisecond"===e||!this.isValid())return this
;var s=this._isUTC?Kt:Xt;switch(e){case"year":t=s(this.year()+1,0,1)-1;break
;case"quarter":t=s(this.year(),this.month()-this.month()%3+3,1)-1;break
;case"month":t=s(this.year(),this.month()+1,1)-1;break;case"week":
t=s(this.year(),this.month(),this.date()-this.weekday()+7)-1;break
;case"isoWeek":
t=s(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break
;case"day":case"date":t=s(this.year(),this.month(),this.date()+1)-1;break
;case"hour":
t=this._d.valueOf(),t+=36e5-Qt(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1
;break;case"minute":t=this._d.valueOf(),t+=6e4-Qt(t,6e4)-1;break;case"second":
t=this._d.valueOf(),t+=1e3-Qt(t,1e3)-1}
return this._d.setTime(t),n.updateOffset(this,!0),this},hn.format=function(e){
e||(e=this.isUtc()?n.defaultFormatUtc:n.defaultFormat);var t=j(this,e)
;return this.localeData().postformat(t)},hn.from=function(e,t){
return this.isValid()&&(p(e)&&e.isValid()||Dt(e).isValid())?Vt({to:this,from:e
}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()
},hn.fromNow=function(e){return this.from(Dt(),e)},hn.to=function(e,t){
return this.isValid()&&(p(e)&&e.isValid()||Dt(e).isValid())?Vt({from:this,to:e
}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()
},hn.toNow=function(e){return this.to(Dt(),e)},hn.get=function(e){
return b(this[e=H(e)])?this[e]():this},hn.invalidAt=function(){
return c(this).overflow},hn.isAfter=function(e,t){var n=p(e)?e:Dt(e)
;return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())
},hn.isBefore=function(e,t){var n=p(e)?e:Dt(e)
;return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())
},hn.isBetween=function(e,t,n,s){var i=p(e)?e:Dt(e),r=p(t)?t:Dt(t)
;return!!(this.isValid()&&i.isValid()&&r.isValid())&&(("("===(s=s||"()")[0]?this.isAfter(i,n):!this.isBefore(i,n))&&(")"===s[1]?this.isBefore(r,n):!this.isAfter(r,n)))
},hn.isSame=function(e,t){var n,s=p(e)?e:Dt(e)
;return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()===s.valueOf():(n=s.valueOf(),
this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))
},hn.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)
},hn.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)
},hn.isValid=function(){return f(this)
},hn.lang=Jt,hn.locale=qt,hn.localeData=Bt,
hn.max=Ot,hn.min=Yt,hn.parsingFlags=function(){return h({},c(this))
},hn.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[]
;for(var n in e)t.push({unit:n,priority:U[n]});return t.sort((function(e,t){
return e.priority-t.priority})),t
}(e=R(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(b(this[e=H(e)]))return this[e](t)
;return this},hn.startOf=function(e){var t
;if(void 0===(e=H(e))||"millisecond"===e||!this.isValid())return this
;var s=this._isUTC?Kt:Xt;switch(e){case"year":t=s(this.year(),0,1);break
;case"quarter":t=s(this.year(),this.month()-this.month()%3,1);break;case"month":
t=s(this.year(),this.month(),1);break;case"week":
t=s(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":
t=s(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":
case"date":t=s(this.year(),this.month(),this.date());break;case"hour":
t=this._d.valueOf(),t-=Qt(t+(this._isUTC?0:6e4*this.utcOffset()),36e5);break
;case"minute":t=this._d.valueOf(),t-=Qt(t,6e4);break;case"second":
t=this._d.valueOf(),t-=Qt(t,1e3)}
return this._d.setTime(t),n.updateOffset(this,!0),this
},hn.subtract=zt,hn.toArray=function(){var e=this
;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]
},hn.toObject=function(){var e=this;return{years:e.year(),months:e.month(),
date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),
milliseconds:e.milliseconds()}},hn.toDate=function(){
return new Date(this.valueOf())},hn.toISOString=function(e){
if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this
;return n.year()<0||n.year()>9999?j(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):b(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",j(n,"Z")):j(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")
},hn.inspect=function(){
if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t=""
;this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z")
;var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]'
;return this.format(n+s+"-MM-DD[T]HH:mm:ss.SSS"+i)},hn.toJSON=function(){
return this.isValid()?this.toISOString():null},hn.toString=function(){
return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
},hn.unix=function(){return Math.floor(this.valueOf()/1e3)
},hn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)
},hn.creationData=function(){return{input:this._i,format:this._f,
locale:this._locale,isUTC:this._isUTC,strict:this._strict}
},hn.year=pe,hn.isLeapYear=function(){return ge(this.year())
},hn.weekYear=function(e){
return tn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)
},hn.isoWeekYear=function(e){
return tn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)
},hn.quarter=hn.quarters=function(e){
return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)
},hn.month=xe,hn.daysInMonth=function(){return Se(this.year(),this.month())
},hn.week=hn.weeks=function(e){var t=this.localeData().week(this)
;return null==e?t:this.add(7*(e-t),"d")},hn.isoWeek=hn.isoWeeks=function(e){
var t=Le(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")
},hn.weeksInYear=function(){var e=this.localeData()._week
;return Ne(this.year(),e.dow,e.doy)},hn.isoWeeksInYear=function(){
return Ne(this.year(),1,4)},hn.date=sn,hn.day=hn.days=function(e){
if(!this.isValid())return null!=e?this:NaN
;var t=this._isUTC?this._d.getUTCDay():this._d.getDay()
;return null!=e?(e=function(e,t){
return"string"!=typeof e?e:isNaN(e)?"number"==typeof(e=t.weekdaysParse(e))?e:null:parseInt(e,10)
}(e,this.localeData()),this.add(e-t,"d")):t},hn.weekday=function(e){
if(!this.isValid())return null!=e?this:NaN
;var t=(this.day()+7-this.localeData()._week.dow)%7
;return null==e?t:this.add(e-t,"d")},hn.isoWeekday=function(e){
if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=function(e,t){
return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e
}(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7
},hn.dayOfYear=function(e){
var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1
;return null==e?t:this.add(e-t,"d")
},hn.hour=hn.hours=Xe,hn.minute=hn.minutes=rn,
hn.second=hn.seconds=on,hn.millisecond=hn.milliseconds=ln,
hn.utcOffset=function(e,t,s){var i,r=this._offset||0
;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){
if(null===(e=Rt(ae,e)))return this}else Math.abs(e)<16&&!s&&(e*=60)
;return!this._isUTC&&t&&(i=Ft(this)),
this._offset=e,this._isUTC=!0,null!=i&&this.add(i,"m"),
r!==e&&(!t||this._changeInProgress?jt(this,Vt(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,
n.updateOffset(this,!0),this._changeInProgress=null)),this}
return this._isUTC?r:Ft(this)},hn.utc=function(e){return this.utcOffset(0,e)
},hn.local=function(e){
return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Ft(this),"m")),
this},hn.parseZone=function(){
if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){
var e=Rt(re,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this
},hn.hasAlignedHourOffset=function(e){
return!!this.isValid()&&(e=e?Dt(e).utcOffset():0,(this.utcOffset()-e)%60==0)
},hn.isDST=function(){
return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()
},hn.isLocal=function(){return!!this.isValid()&&!this._isUTC
},hn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC
},hn.isUtc=Lt,hn.isUTC=Lt,hn.zoneAbbr=function(){return this._isUTC?"UTC":""
},hn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""
},hn.dates=D("dates accessor is deprecated. Use date instead.",sn),
hn.months=D("months accessor is deprecated. Use month instead",xe),
hn.years=D("years accessor is deprecated. Use year instead",pe),
hn.zone=D("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",(function(e,t){
return null!=e?("string"!=typeof e&&(e=-e),
this.utcOffset(e,t),this):-this.utcOffset()
})),hn.isDSTShifted=D("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",(function(){
if(!r(this._isDSTShifted))return this._isDSTShifted;var e={}
;if(y(e,this),(e=kt(e))._a){var t=e._isUTC?d(e._a):Dt(e._a)
;this._isDSTShifted=this.isValid()&&k(e._a,t.toArray())>0
}else this._isDSTShifted=!1;return this._isDSTShifted}));var cn=P.prototype
;function fn(e,t,n,s){var i=at(),r=d().set(s,t);return i[n](r,e)}
function mn(e,t,n){
if(a(e)&&(t=e,e=void 0),e=e||"",null!=t)return fn(e,t,n,"month");var s,i=[]
;for(s=0;s<12;s++)i[s]=fn(e,s,n,"month");return i}function _n(e,t,n,s){
"boolean"==typeof e?(a(t)&&(n=t,
t=void 0),t=t||""):(n=t=e,e=!1,a(t)&&(n=t,t=void 0),t=t||"")
;var i,r=at(),o=e?r._week.dow:0;if(null!=n)return fn(t,(n+o)%7,s,"day");var u=[]
;for(i=0;i<7;i++)u[i]=fn(t,(i+o)%7,s,"day");return u}
cn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse
;return b(s)?s.call(t,n):s},cn.longDateFormat=function(e){
var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()]
;return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,(function(e){
return e.slice(1)})),this._longDateFormat[e])},cn.invalidDate=function(){
return this._invalidDate},cn.ordinal=function(e){
return this._ordinal.replace("%d",e)
},cn.preparse=dn,cn.postformat=dn,cn.relativeTime=function(e,t,n,s){
var i=this._relativeTime[n];return b(i)?i(e,t,n,s):i.replace(/%d/i,e)
},cn.pastFuture=function(e,t){var n=this._relativeTime[e>0?"future":"past"]
;return b(n)?n(t):n.replace(/%s/i,t)},cn.set=function(e){var t,n
;for(n in e)b(t=e[n])?this[n]=t:this["_"+n]=t
;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)
},cn.months=function(e,t){
return e?s(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||De).test(t)?"format":"standalone"][e.month()]:s(this._months)?this._months:this._months.standalone
},cn.monthsShort=function(e,t){
return e?s(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[De.test(t)?"format":"standalone"][e.month()]:s(this._monthsShort)?this._monthsShort:this._monthsShort.standalone
},cn.monthsParse=function(e,t,n){var s,i,r
;if(this._monthsParseExact)return Te.call(this,e,t,n)
;for(this._monthsParse||(this._monthsParse=[],
this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){
if(i=d([2e3,s]),
n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),
this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),
n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),
this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),
n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s
;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s
;if(!n&&this._monthsParse[s].test(e))return s}},cn.monthsRegex=function(e){
return this._monthsParseExact?(l(this,"_monthsRegex")||Ce.call(this),
e?this._monthsStrictRegex:this._monthsRegex):(l(this,"_monthsRegex")||(this._monthsRegex=We),
this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)
},cn.monthsShortRegex=function(e){
return this._monthsParseExact?(l(this,"_monthsRegex")||Ce.call(this),
e?this._monthsShortStrictRegex:this._monthsShortRegex):(l(this,"_monthsShortRegex")||(this._monthsShortRegex=Pe),
this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)
},cn.week=function(e){return Le(e,this._week.dow,this._week.doy).week
},cn.firstDayOfYear=function(){return this._week.doy
},cn.firstDayOfWeek=function(){return this._week.dow},cn.weekdays=function(e,t){
var n=s(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"]
;return!0===e?Ge(n,this._week.dow):e?n[e.day()]:n},cn.weekdaysMin=function(e){
return!0===e?Ge(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin
},cn.weekdaysShort=function(e){
return!0===e?Ge(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort
},cn.weekdaysParse=function(e,t,n){var s,i,r
;if(this._weekdaysParseExact)return Ae.call(this,e,t,n)
;for(this._weekdaysParse||(this._weekdaysParse=[],
this._minWeekdaysParse=[],this._shortWeekdaysParse=[],
this._fullWeekdaysParse=[]),s=0;s<7;s++){
if(i=d([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),
this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),
this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),
this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),
this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),
n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s
;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s
;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s
;if(!n&&this._weekdaysParse[s].test(e))return s}},cn.weekdaysRegex=function(e){
return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||$e.call(this),
e?this._weekdaysStrictRegex:this._weekdaysRegex):(l(this,"_weekdaysRegex")||(this._weekdaysRegex=je),
this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)
},cn.weekdaysShortRegex=function(e){
return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||$e.call(this),
e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(l(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Ze),
this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)
},cn.weekdaysMinRegex=function(e){
return this._weekdaysParseExact?(l(this,"_weekdaysRegex")||$e.call(this),
e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(l(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=ze),
this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)
},cn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)
},cn.meridiem=function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},it("en",{
dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10
;return e+(1===M(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}
}),n.lang=D("moment.lang is deprecated. Use moment.locale instead.",it),
n.langData=D("moment.langData is deprecated. Use moment.localeData instead.",at)
;var yn=Math.abs;function gn(e,t,n,s){var i=Vt(t,n)
;return e._milliseconds+=s*i._milliseconds,
e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function vn(e){
return e<0?Math.floor(e):Math.ceil(e)}function pn(e){return 4800*e/146097}
function wn(e){return 146097*e/4800}function Mn(e){return function(){
return this.as(e)}}
var kn=Mn("ms"),Sn=Mn("s"),Dn=Mn("m"),Yn=Mn("h"),On=Mn("d"),Tn=Mn("w"),bn=Mn("M"),xn=Mn("Q"),Pn=Mn("y")
;function Wn(e){return function(){return this.isValid()?this._data[e]:NaN}}
var Cn=Wn("milliseconds"),Hn=Wn("seconds"),Rn=Wn("minutes"),Un=Wn("hours"),Fn=Wn("days"),Ln=Wn("months"),Nn=Wn("years")
;var Gn=Math.round,Vn={ss:44,s:45,m:45,h:22,d:26,M:11};function En(e,t,n,s,i){
return i.relativeTime(t||1,!!n,e,s)}var In=Math.abs;function An(e){
return(e>0)-(e<0)||+e}function jn(){
if(!this.isValid())return this.localeData().invalidDate()
;var e,t,n=In(this._milliseconds)/1e3,s=In(this._days),i=In(this._months)
;e=w(n/60),t=w(e/60),n%=60,e%=60
;var r=w(i/12),a=i%=12,o=s,u=t,l=e,h=n?n.toFixed(3).replace(/\.?0+$/,""):"",d=this.asSeconds()
;if(!d)return"P0D"
;var c=d<0?"-":"",f=An(this._months)!==An(d)?"-":"",m=An(this._days)!==An(d)?"-":"",_=An(this._milliseconds)!==An(d)?"-":""
;return c+"P"+(r?f+r+"Y":"")+(a?f+a+"M":"")+(o?m+o+"D":"")+(u||l||h?"T":"")+(u?_+u+"H":"")+(l?_+l+"M":"")+(h?_+h+"S":"")
}var Zn=xt.prototype;return Zn.isValid=function(){return this._isValid
},Zn.abs=function(){var e=this._data
;return this._milliseconds=yn(this._milliseconds),
this._days=yn(this._days),this._months=yn(this._months),
e.milliseconds=yn(e.milliseconds),
e.seconds=yn(e.seconds),e.minutes=yn(e.minutes),
e.hours=yn(e.hours),e.months=yn(e.months),e.years=yn(e.years),this
},Zn.add=function(e,t){return gn(this,e,t,1)},Zn.subtract=function(e,t){
return gn(this,e,t,-1)},Zn.as=function(e){if(!this.isValid())return NaN
;var t,n,s=this._milliseconds
;if("month"===(e=H(e))||"quarter"===e||"year"===e)switch(t=this._days+s/864e5,
n=this._months+pn(t),e){case"month":return n;case"quarter":return n/3
;case"year":return n/12
}else switch(t=this._days+Math.round(wn(this._months)),e){case"week":
return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5
;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3
;case"millisecond":return Math.floor(864e5*t)+s;default:
throw new Error("Unknown unit "+e)}
},Zn.asMilliseconds=kn,Zn.asSeconds=Sn,Zn.asMinutes=Dn,
Zn.asHours=Yn,Zn.asDays=On,
Zn.asWeeks=Tn,Zn.asMonths=bn,Zn.asQuarters=xn,Zn.asYears=Pn,
Zn.valueOf=function(){
return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*M(this._months/12):NaN
},Zn._bubble=function(){
var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data
;return r>=0&&a>=0&&o>=0||r<=0&&a<=0&&o<=0||(r+=864e5*vn(wn(o)+a),
a=0,o=0),u.milliseconds=r%1e3,
e=w(r/1e3),u.seconds=e%60,t=w(e/60),u.minutes=t%60,
n=w(t/60),u.hours=n%24,a+=w(n/24),
o+=i=w(pn(a)),a-=vn(wn(i)),s=w(o/12),o%=12,u.days=a,u.months=o,u.years=s,this
},Zn.clone=function(){return Vt(this)},Zn.get=function(e){
return e=H(e),this.isValid()?this[e+"s"]():NaN
},Zn.milliseconds=Cn,Zn.seconds=Hn,
Zn.minutes=Rn,Zn.hours=Un,Zn.days=Fn,Zn.weeks=function(){return w(this.days()/7)
},Zn.months=Ln,Zn.years=Nn,Zn.humanize=function(e){
if(!this.isValid())return this.localeData().invalidDate()
;var t=this.localeData(),n=function(e,t,n){
var s=Vt(e).abs(),i=Gn(s.as("s")),r=Gn(s.as("m")),a=Gn(s.as("h")),o=Gn(s.as("d")),u=Gn(s.as("M")),l=Gn(s.as("y")),h=i<=Vn.ss&&["s",i]||i<Vn.s&&["ss",i]||r<=1&&["m"]||r<Vn.m&&["mm",r]||a<=1&&["h"]||a<Vn.h&&["hh",a]||o<=1&&["d"]||o<Vn.d&&["dd",o]||u<=1&&["M"]||u<Vn.M&&["MM",u]||l<=1&&["y"]||["yy",l]
;return h[2]=t,h[3]=+e>0,h[4]=n,En.apply(null,h)}(this,!e,t)
;return e&&(n=t.pastFuture(+this,n)),t.postformat(n)
},Zn.toISOString=jn,Zn.toString=jn,
Zn.toJSON=jn,Zn.locale=qt,Zn.localeData=Bt,Zn.toIsoString=D("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",jn),
Zn.lang=Jt,
I("X",0,0,"unix"),I("x",0,0,"valueOf"),le("x",ie),le("X",/[+-]?\d+(\.\d{1,3})?/),
fe("X",(function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))
})),fe("x",(function(e,t,n){n._d=new Date(M(e))
})),n.version="2.24.0",function(t){e=t}(Dt),n.fn=hn,n.min=function(){
var e=[].slice.call(arguments,0);return Tt("isBefore",e)},n.max=function(){
var e=[].slice.call(arguments,0);return Tt("isAfter",e)},n.now=function(){
return Date.now?Date.now():+new Date},n.utc=d,n.unix=function(e){
return Dt(1e3*e)},n.months=function(e,t){return mn(e,t,"months")
},n.isDate=o,n.locale=it,
n.invalid=m,n.duration=Vt,n.isMoment=p,n.weekdays=function(e,t,n){
return _n(e,t,n,"weekdays")},n.parseZone=function(){
return Dt.apply(null,arguments).parseZone()
},n.localeData=at,n.isDuration=Pt,n.monthsShort=function(e,t){
return mn(e,t,"monthsShort")},n.weekdaysMin=function(e,t,n){
return _n(e,t,n,"weekdaysMin")},n.defineLocale=rt,n.updateLocale=function(e,t){
if(null!=t){var n,s,i=Ke
;null!=(s=st(e))&&(i=s._config),(n=new P(t=x(i,t))).parentLocale=et[e],
et[e]=n,it(e)
}else null!=et[e]&&(null!=et[e].parentLocale?et[e]=et[e].parentLocale:null!=et[e]&&delete et[e])
;return et[e]},n.locales=function(){return Y(et)
},n.weekdaysShort=function(e,t,n){return _n(e,t,n,"weekdaysShort")
},n.normalizeUnits=H,n.relativeTimeRounding=function(e){
return void 0===e?Gn:"function"==typeof e&&(Gn=e,!0)
},n.relativeTimeThreshold=function(e,t){
return void 0!==Vn[e]&&(void 0===t?Vn[e]:(Vn[e]=t,"s"===e&&(Vn.ss=t-1),!0))
},n.calendarFormat=function(e,t){var n=e.diff(t,"days",!0)
;return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"
},n.prototype=hn,n.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",
DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",
DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",
TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"
},n}));
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{339:function(t,e,n){t.exports=n.p+"img/yes_logo.44c4bfa.png"},349:function(t,e,n){"use strict";n.r(e);var r=n(95),c=n(60),o=Object(c.c)("counter",{state:function(){return{counter:0}},actions:{increment:function(){this.counter++},decrement:function(){this.counter--}},getters:{counterValue:function(t){return t.counter}}}),l=n(225),x=Object(r.b)({head:function(){},setup:function(){Object(r.h)().title.value="🍕 Hi";var t=o(),e=Object(l.a)();return{counterStore:t,tenantStore:e,increment:function(){return t.increment()},decrement:function(){return t.decrement()}}}}),d=n(70),component=Object(d.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"},[r("div",{staticClass:"max-w-md w-full space-y-8"},[r("h2",{staticClass:"mt-6 text-center text-2xl font-bold text-sky-400/100"},[t._v("\n      "+t._s(t.tenantStore.tenantName)+"\n    ")]),t._v(" "),r("img",{staticClass:"mx-auto h-24 w-auto",attrs:{src:n(339),alt:"Workflow"}}),t._v(" "),r("h2",{staticClass:"mt-6 text-center text-6xl font-extrabold text-gray-900"},[t._v("\n      "+t._s(t.counterStore.counter)+"\n    ")]),t._v(" "),r("div",{staticClass:"flex rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700"},[r("li",{staticClass:"w-full list-none"},[r("button",{staticClass:"inline-block relative py-4 px-4 w-full text-3xl font-bold text-center hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300",on:{click:function(e){return t.increment()}}},[t._v("\n          +\n        ")])]),t._v(" "),r("li",{staticClass:"w-full list-none"},[r("button",{staticClass:"inline-block relative py-4 px-4 w-full text-3xl font-bold text-center hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300",attrs:{href:"#"},on:{click:function(e){return t.decrement()}}},[t._v("\n        -\n        ")])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[14,8,9],{338:function(t,e,r){t.exports=r.p+"img/yes_logo.44c4bfa.png"},344:function(t,e,r){"use strict";r.r(e);var n=r(95),o=r(165),c=r(345),l=Object(n.b)({components:{TailWind:c.default},setup:function(){var t=Object(n.f)(!1),e=Object(n.j)(),r=Object(o.a)();return Object(n.k)(t,(function(e,r){t.value?document.body.style.setProperty("overflow","hidden"):document.body.style.removeProperty("overflow")}),{immediate:!0}),Object(n.d)((function(){document.addEventListener("keydown",(function(e){27==e.keyCode&&t.value&&(t.value=!1)}))})),{store:r,isOpen:t,logout:function(){r.logoutUser().then((function(t){t&&e.push("/LoginPage")}))},drawer:function(){return t.value=!t.value}}}}),f=r(70),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"fixed w-full p-6 bg-transparent"},[r("div",{staticClass:"flex items-center justify-between"},[r("div",[r("tail-wind")],1),t._v(" "),r("div",{staticClass:"md:hidden"},[r("button",{on:{click:t.drawer}},[r("svg",{staticClass:"h-8 w-8 fill-current text-black",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16"}})])])]),t._v(" "),r("div",{staticClass:"hidden md:block"},[r("ul",{staticClass:"flex space-x-8 text-sm font-sans"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("li",[r("button",{staticClass:"cta bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white font-semibold",on:{click:t.logout}},[t._v("Log out")])])])]),t._v(" "),r("transition",{attrs:{"enter-class":"opacity-0","enter-active-class":"ease-out transition-medium","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-active-class":"ease-out transition-medium","leave-to-class":"opacity-0"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"z-10 fixed inset-0 transition-opacity",on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.isOpen=!1}}},[r("div",{staticClass:"absolute inset-0 bg-black opacity-50",attrs:{tabindex:"0"},on:{click:function(e){t.isOpen=!1}}})])]),t._v(" "),r("aside",{staticClass:"p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-50",class:t.isOpen?"translate-x-0":"-translate-x-full"},[r("div",{staticClass:"close"},[r("button",{staticClass:"absolute top-0 right-0 mt-4 mr-4",on:{click:function(e){t.isOpen=!1}}},[r("svg",{staticClass:"w-6 h-6",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{d:"M6 18L18 6M6 6l12 12"}})])])]),t._v(" "),r("span",{staticClass:"flex w-full items-center p-4 border-b",on:{click:function(e){t.isOpen=!1}}},[r("tail-wind")],1),t._v(" "),r("ul",{staticClass:"divide-y font-sans"},[r("li",[r("a",{staticClass:"my-4 inline-block",attrs:{href:"#"},on:{click:function(e){t.isOpen=!1}}},[t._v("Home")])]),t._v(" "),r("li",[r("a",{staticClass:"my-4 inline-block",attrs:{href:"#"},on:{click:function(e){t.isOpen=!1}}},[t._v("Services")])]),t._v(" "),r("li",[r("a",{staticClass:"my-4 inline-block",attrs:{href:"#"},on:{click:function(e){t.isOpen=!1}}},[t._v("Features")])]),t._v(" "),r("li",[r("a",{staticClass:"my-8 w-full text-center font-semibold cta inline-block bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white",on:{click:t.logout}},[t._v("Log Out")])])]),t._v(" "),r("div",{staticClass:"follow"},[r("p",{staticClass:"italic font-sans text-sm"},[t._v("follow us:")]),t._v(" "),r("div",{staticClass:"social flex space-x-5 mt-4 "},[r("a",{attrs:{href:"#"}},[r("svg",{staticClass:"h-5 w-5 fill-current text-gray-600",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"twitter",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[r("path",{attrs:{fill:"currentColor",d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}})])]),t._v(" "),r("a",{attrs:{href:"#"}},[r("svg",{staticClass:"h-5 w-5 fill-current text-gray-600",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook-f",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[r("path",{attrs:{fill:"currentColor",d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}})])]),t._v(" "),r("a",{attrs:{href:"#"}},[r("svg",{staticClass:"h-5 w-5 fill-current text-gray-600",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"instagram",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[r("path",{attrs:{fill:"currentColor",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}})])]),t._v(" "),r("a",{attrs:{href:"#"}},[r("svg",{staticClass:"h-5 w-5 fill-current text-gray-600",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"youtube",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"}},[r("path",{attrs:{fill:"currentColor",d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"}})])])])])])],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{staticClass:"active border-b-2 border-blue-500 pb-1",attrs:{href:"#"}},[t._v("Home")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"#"}},[t._v("Services")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:"#"}},[t._v("Features")])])}],!1,null,null,null);e.default=component.exports},345:function(t,e,r){"use strict";r.r(e);var n=r(70),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"object-contain h-8 w-20",attrs:{src:r(338),alt:"Workflow"}})])}),[],!1,null,null,null);e.default=component.exports},346:function(t,e,r){"use strict";r.d(e,"a",(function(){return _}));var n=r(8),o=(r(35),r(60)),c=(r(18),r(42),r(69)),l=r(77),f=Object(c.g)(l.f);function v(t,e){return d.apply(this,arguments)}function d(){return(d=Object(n.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(c.c)(f,e),t.next=3,Object(c.b)(n,r);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,e){return m.apply(this,arguments)}function m(){return(m=Object(n.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(c.d)(f,e,r),t.next=3,Object(c.e)(n);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t,e,r){return x.apply(this,arguments)}function x(){return(x=Object(n.a)(regeneratorRuntime.mark((function t(e,param,r){var q,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return q=Object(c.h)(Object(c.c)(f,e),Object(c.k)(param,"==",r)),t.next=3,Object(c.f)(q);case 3:return n=t.sent,o=[],n.forEach((function(t){var e=t.data();e.id=t.id,o.push(e)})),t.abrupt("return",o);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var _=Object(o.c)("postStore",{state:function(){return{posts:[],error:null}},getters:{isAvailable:function(t){return null!==t.posts},userError:function(t){return t.error}},actions:{loadPosts:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,w("posts","userId",t);case 3:return data=r.sent,e.posts=data||null,e.error=null,r.abrupt("return",e.posts);case 9:return r.prev=9,r.t0=r.catch(0),e.posts=[],e.error=r.t0,r.abrupt("return",!1);case 14:case"end":return r.stop()}}),r,null,[[0,9]])})))()},addPost:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v("posts",t);case 3:return data=r.sent,e.error=null,r.abrupt("return",data.id);case 8:return r.prev=8,r.t0=r.catch(0),e.error=r.t0,r.abrupt("return",!1);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))()},getPost:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,h("posts",t);case 3:return n=r.sent,e.error=null,r.abrupt("return",n.doc());case 8:return r.prev=8,r.t0=r.catch(0),e.error=r.t0,r.abrupt("return",!1);case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))()}}})},350:function(t,e,r){var content=r(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(130).default)("2ab8ce4c",content,!0,{sourceMap:!1})},355:function(t,e,r){"use strict";r(350)},356:function(t,e,r){var n=r(129)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.nuxt-content p{\n  margin-bottom:20px\n}\n.nuxt-content h2{\n  font-weight:700;\n  font-size:28px\n}\n.nuxt-content h3{\n  font-weight:700;\n  font-size:22px\n}\n.icon.icon-link{\n  display:inline-block;\n  width:20px;\n  height:20px;\n  background-size:20px 20px\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},360:function(t,e,r){"use strict";r.r(e);r(226),r(18);var n=r(344),o=r(95),c=r(346),l=Object(o.b)({components:{NavBar:n.default},setup:function(){var t=Object(o.i)(),e=Object(c.a)(),r=Object(o.a)((function(){return t.value.params.id}));console.log("postId: ",r.value);var n=Object(o.a)((function(){return e.posts.find((function(p){return p.id===r.value}))}));console.log("Post: ",n.value.title);return{post:n,formatDate:function(t){return new Date(1e3*t.seconds).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}}),f=(r(355),r(70)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav-bar"),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"w-3/4 mx-auto overflow-hidden rounded-lg shadow-lg cursor-pointer"},[r("img",{staticClass:"object-cover w-full h-96",attrs:{src:t.post.imageUrl,alt:"Post Image"}}),t._v(" "),r("div",{staticClass:"absolute top-32 p-16 w-3/4"},[r("p",{staticClass:"leading-normal text-gray-100"},[t._v(t._s(t.formatDate(t.post.createdOn)))]),t._v(" "),r("h4",{staticClass:"mb-3 text-2xl font-semibold tracking-tight text-white"},[t._v(t._s(t.post.title))]),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"leading-normal text-ellipsis text-gray-100"},[t._v(t._s(t.post.message))])])]),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"flex flex-col justify-center items-center cursor-pointer"},[r("a",{staticClass:"group relative inline-flex items-center px-3 py-3",attrs:{href:"/"}},[r("svg-icon",{staticClass:"h-5 w-5 group-hover:text-indigo-700",attrs:{name:"circle-left"}}),t._v(" "),r("span",{staticClass:"ml-2 text-lg font-semibold"},[t._v(" Back to Home")])],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavBar:r(344).default})}}]);
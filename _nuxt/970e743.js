(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{297:function(t,e,n){var content=n(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("d71ad70c",content,!0,{sourceMap:!1})},312:function(t,e,n){"use strict";n(297)},313:function(t,e,n){var r=n(67)((function(i){return i[1]}));r.push([t.i,".nuxt-content h2{font-weight:700;font-size:28px}.nuxt-content h3{font-weight:700;font-size:22px}.nuxt-content p{margin-bottom:20px}",""]),r.locals={},t.exports=r},356:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(23),n(49),n(43),n(303)),c=n.n(o);n(304),n(305),n(306),n(308),n(309),n(311);c.a.languages.vue=c.a.languages.markup;var l=c.a,d=n(143),m={data:function(){return{title:0,siteMetadata:d.a}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("articles",r.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},mounted:function(){l.highlightAll()},head:function(){return{title:this.article.title,meta:[{hid:"description",name:"description",content:this.article.description}]}}},x=(n(312),n(19)),component=Object(x.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 mt-10"},[n("p",{staticClass:"text-center font-bold my-5 text-indigo-500"},[t._v("\n    "+t._s(t.formatDate(t.article.date))+"\n  ")]),t._v(" "),n("h1",{staticClass:"text-4xl text-gray-700 font-extrabold mb-10 text-center"},[t._v("\n    "+t._s(t.article.title)+"\n  ")]),t._v(" "),n("div",{staticClass:"flex items-center font-medium mt-6 sm:mx-3 justify-center"},[n("nuxt-img",{staticClass:"mr-3 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800",attrs:{src:t.siteMetadata.author_image,loading:"lazy",alt:""}}),t._v(" "),n("div",[n("div",{staticClass:"text-slate-900 dark:text-slate-200"},[t._v("\n        "+t._s(t.siteMetadata.author)+"\n      ")]),t._v(" "),n("a",{staticClass:"text-sky-500 hover:text-sky-600 dark:text-sky-400",attrs:{target:"_blank",href:t.siteMetadata.twitter}},[t._v("\n        @"+t._s(t.siteMetadata.twitter_user)+"\n      ")])])],1),t._v(" "),n("img",{staticClass:"mx-auto w-4/5 my-10 rounded-md drop-shadow-sm",attrs:{src:t.article.image}}),t._v(" "),n("nuxt-content",{staticClass:"prose min-w-full p-10 mx-auto",attrs:{document:t.article}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);
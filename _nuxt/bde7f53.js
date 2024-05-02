(window.webpackJsonp=window.webpackJsonp||[]).push([[9,5],{336:function(t,e,n){"use strict";n.r(e);n(21),n(52);var r={props:["title","description","date","slug"],data:function(){return{postTitle:this.title,postDescription:this.description,postSlug:this.slug,postDate:this.date}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},l=n(24),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("article",{staticClass:"relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem]"},[e("h3",{staticClass:"mb-4 text-4xl text-slate-700 tracking-tight font-bold dark:text-slate-200"},[e("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:t.postSlug}}}},[t._v("\n        "+t._s(t.postTitle))])],1),t._v(" "),e("div",{staticClass:"mb-6 prose prose-slate dark:prose-dark"},[e("p",[t._v("\n        "+t._s(t.postDescription)+"\n      ")])]),t._v(" "),e("div",{staticClass:"mt-auto flex flex-row-reverse items-center justify-end"},[e("dl",[e("dt",{staticClass:"sr-only"},[t._v("Date")]),t._v(" "),e("dd",{staticClass:"text-sm leading-6 dark:text-slate-400 lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:whitespace-nowrap font-bold"},[e("time",{staticClass:"bg-indigo-500 text-white py-1 px-2 rounded-md",attrs:{datetime:"2022-02-24T12:00:00.000Z"}},[t._v(t._s(t.formatDate(t.postDate)))])])])]),t._v(" "),e("br")])])}),[],!1,null,null,null);e.default=component.exports},394:function(t,e,n){"use strict";n.r(e);n(21),n(52);var r=n(8),l=(n(44),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("articles").only(["title","description","img","slug","tag","author","date","draft"]).sortBy("date","asc").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()},head:{title:"AJ Barea | Blog",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Structure thoughts, capture ideas, take notes"}],link:[{rel:"icon",type:"image/x-icon",href:"/portfolio/favicon.ico"}]}}),o=n(24),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"space-y-16 mx-auto max-w-7xl"},t._l(t.articles,(function(article){return e("blog-item",{key:article.title,attrs:{title:article.title,description:article.description,date:article.date,slug:article.slug}})})),1)])}),[function(){var t=this,e=t._self._c;return e("header",{staticClass:"pt-16 pb-9 sm:pb-16 sm:text-center"},[e("h1",{staticClass:"mb-4 text-8xl sm:text-4xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200"},[t._v("\n    Blog\n    ")]),t._v(" "),e("p",{staticClass:"text-lg text-slate-700 dark:text-slate-400"},[t._v("\n      Structured thoughts, notes, resources, and recommendations.\n      ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogItem:n(336).default})}}]);
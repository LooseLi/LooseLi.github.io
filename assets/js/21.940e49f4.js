(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{585:function(s,v,a){"use strict";a.r(v);var e=a(6),t=Object(e.a)({},(function(){var s=this,v=s.$createElement,a=s._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("今天继续来写微信小程序系列的第二篇，简单记录一下项目的基本结构、开发第一个页面以及如何在 vscode 中开发微信小程序")]),s._v(" "),a("h2",{attrs:{id:"项目结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[s._v("#")]),s._v(" 项目结构")]),s._v(" "),a("p",[s._v("较为完整的项目结构如图，其中：")]),s._v(" "),a("img",{staticStyle:{zoom:"60%"},attrs:{src:"https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/faf6747d0e5d4788dbcb58425f852472d7254c60.png",alt:"项目结构"}}),s._v(" "),a("h3",{attrs:{id:"pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pages"}},[s._v("#")]),s._v(" pages")]),s._v(" "),a("p",[s._v("存放各个页面文件")]),s._v(" "),a("img",{staticStyle:{zoom:"60%"},attrs:{src:"https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/d32c9654310cd843c7517c5fc633cea554e64e8d.png",alt:"pages"}}),s._v(" "),a("p",[s._v("每一个页面文件夹都默认包含 "),a("code",[s._v(".wxml")]),s._v("、"),a("code",[s._v(".wxss")]),s._v("、"),a("code",[s._v(".js")]),s._v("、"),a("code",[s._v(".json")]),s._v("后缀的文件。其中"),a("code",[s._v(".wxml")]),s._v("存放页面元素，即"),a("code",[s._v("html")]),s._v("；"),a("code",[s._v(".wxss")]),s._v("存放页面样式，即"),a("code",[s._v("css")]),s._v("；"),a("code",[s._v(".js")]),s._v("存放页面的逻辑代码；"),a("code",[s._v(".json")]),s._v("存放页面配置")]),s._v(" "),a("h3",{attrs:{id:"components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[s._v("#")]),s._v(" components")]),s._v(" "),a("p",[s._v("存放公共组件")]),s._v(" "),a("h3",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[s._v("#")]),s._v(" request")]),s._v(" "),a("p",[s._v("api 接口")]),s._v(" "),a("h3",{attrs:{id:"utils"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utils"}},[s._v("#")]),s._v(" utils")]),s._v(" "),a("p",[s._v("存放配置项、封装的工具函数等")]),s._v(" "),a("h3",{attrs:{id:"styles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#styles"}},[s._v("#")]),s._v(" styles")]),s._v(" "),a("p",[s._v("公共样式")]),s._v(" "),a("h3",{attrs:{id:"images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#images"}},[s._v("#")]),s._v(" images")]),s._v(" "),a("p",[s._v("公共图片")]),s._v(" "),a("h2",{attrs:{id:"全局配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局配置"}},[s._v("#")]),s._v(" 全局配置")]),s._v(" "),a("h3",{attrs:{id:"app-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-js"}},[s._v("#")]),s._v(" app.js")]),s._v(" "),a("p",[s._v("调用App()，注册一个小程序")]),s._v(" "),a("h3",{attrs:{id:"app-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-json"}},[s._v("#")]),s._v(" app.json")]),s._v(" "),a("p",[s._v("全局配置")]),s._v(" "),a("h3",{attrs:{id:"app-wxss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-wxss"}},[s._v("#")]),s._v(" app.wxss")]),s._v(" "),a("p",[s._v("全局样式")]),s._v(" "),a("h2",{attrs:{id:"开发第一个页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发第一个页面"}},[s._v("#")]),s._v(" 开发第一个页面")]),s._v(" "),a("p",[s._v("新建小程序项目后，点击编译即可运行当前项目。接下来，我们来创建新页面并展示！创建页面有两种方式：")]),s._v(" "),a("p",[s._v("1.在"),a("code",[s._v("pages")]),s._v("中创建"),a("code",[s._v("demo")]),s._v("文件夹，然后在"),a("code",[s._v("demo")]),s._v("中在分别创建"),a("code",[s._v(".wxml")]),s._v("、"),a("code",[s._v(".wxss")]),s._v("、"),a("code",[s._v(".js")]),s._v("、"),a("code",[s._v(".json")]),s._v("后缀的文件；最后我们在"),a("code",[s._v("app.json")]),s._v("中的"),a("code",[s._v("pages")]),s._v("中添加新创建的"),a("code",[s._v("demo")]),s._v("文件夹的路径即可")]),s._v(" "),a("p",[s._v("2."),a("u",[s._v("第一种方式并不推荐，比较繁琐")]),s._v("，接下来展示第二种方式：我们不需要事先创建好"),a("code",[s._v("demo")]),s._v("文件夹，而是直接在"),a("code",[s._v("app.json")]),s._v("中的"),a("code",[s._v("pages")]),s._v("中添加需要创建的"),a("code",[s._v("demo")]),s._v("路径，然后手动保存一下，那么小程序开发工具就已经帮我们把"),a("code",[s._v("pages")]),s._v("中的"),a("code",[s._v("demo")]),s._v("文件创建好了！")]),s._v(" "),a("p",[s._v("注意：小程序默认加载"),a("code",[s._v("app.json")]),s._v("中"),a("code",[s._v("pages")]),s._v("数组中的第一个元素。所以，如果你希望小程序在初始化时默认加载哪个页面，只需要将其路径放在第一个即可！")]),s._v(" "),a("h2",{attrs:{id:"vscode-开发小程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscode-开发小程序"}},[s._v("#")]),s._v(" VSCode 开发小程序")]),s._v(" "),a("p",[s._v("使用VSCode开发前，先安装微信小程序开发工具插件，这样在VSCode中就支持小程序语法啦。我们可以在VSCode中敲击代码，然后在小程序开发编辑器中保存并查看效果，也可以进行真机调试等。")]),s._v(" "),a("p",[s._v("注意：如果是在VSCode中开发，那么上述第二种创建页面的方式就无效了！")])])}),[],!1,null,null,null);v.default=t.exports}}]);
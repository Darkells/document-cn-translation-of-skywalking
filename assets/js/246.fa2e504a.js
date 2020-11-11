(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{523:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"初始化模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化模式"}},[e._v("#")]),e._v(" 初始化模式")]),e._v(" "),a("p",[e._v("Skywalking后端支持多个存储实施器。它们中的大多数，比如Elastic Search, Database可以在启动时自动初始化存储。")]),e._v(" "),a("p",[e._v("但是根据存储情况，会有一些意外的情况发生，比如\n"),a("code",[e._v("由于多个后端实例同时启动，会同时创建Elastic Search的索引。")]),e._v("\n当出现一个Change，Elastic Search的API会被阻塞并且不报异常。\n在类似K8S这样的容器管理平台上，发生的几率更大。")]),e._v(" "),a("p",[e._v("这就是您需要"),a("strong",[e._v("初始化模式")]),e._v("启动的地方。")]),e._v(" "),a("h2",{attrs:{id:"解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[e._v("#")]),e._v(" 解决方法")]),e._v(" "),a("p",[e._v("在其它实例启动前，只有一个实例可以在"),a("strong",[e._v("初始化模式")]),e._v("运行。\n完成所有初始化步骤后，该实例将优雅地退出。")]),e._v(" "),a("p",[e._v("使用"),a("code",[e._v("oapServiceInit.sh")]),e._v("/"),a("code",[e._v("oapServiceInit.bat")]),e._v("来启动backend。你可以看到下面的log")]),e._v(" "),a("blockquote",[a("p",[e._v("2018-11-09 23:04:39,465 - org.apache.skywalking.oap.server.starter.OAPServerStartUp -2214 [main] INFO  [] - OAP starts up in init mode successfully, exit now...")])]),e._v(" "),a("h2",{attrs:{id:"kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes"}},[e._v("#")]),e._v(" Kubernetes")]),e._v(" "),a("p",[e._v("这种模式下的初始化将包含在我们的kubernetes脚本和helm中。")])])}],!1,null,null,null);t.default=r.exports}}]);
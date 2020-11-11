(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{324:function(t,e,a){"use strict";a.r(e);var i=a(0),s=Object(i.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"启动模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动模式"}},[t._v("#")]),t._v(" 启动模式")]),t._v(" "),a("p",[t._v("在不同的部署工具（如K8S）中，可能需要不同的启动模式。\n我们还提供另外两种可选的启动模式。")]),t._v(" "),a("h2",{attrs:{id:"default-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-mode"}},[t._v("#")]),t._v(" Default mode")]),t._v(" "),a("p",[t._v("Default mode。 如果需要，进行初始化工作，启动listen并提供服务。")]),t._v(" "),a("p",[t._v("运行 "),a("code",[t._v("/bin/oapService.sh")]),t._v("(.bat) 来启动这个模式。也可以在使用 "),a("code",[t._v("startup.sh")]),t._v("(.bat)来启动。")]),t._v(" "),a("h2",{attrs:{id:"init-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-mode"}},[t._v("#")]),t._v(" Init mode")]),t._v(" "),a("p",[t._v("在此模式下，OAP服务器启动以执行初始化工作，然后退出。\n您可以使用此模式初始化存储，例如ElasticSearch索引、MySQL和TIDB表，和init数据。")]),t._v(" "),a("p",[t._v("运行 "),a("code",[t._v("/bin/oapServiceInit.sh")]),t._v("(.bat) 来启动这个模式。")]),t._v(" "),a("h2",{attrs:{id:"no-init-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-init-mode"}},[t._v("#")]),t._v(" No-init mode")]),t._v(" "),a("p",[t._v("在此模式下，OAP服务器不进行初始化。\n但它等待存在弹性搜索索引、mysql和tidb表，开始倾听并提供服务。意味着此OAP服务希望别的OAP服务器进行初始化。")]),t._v(" "),a("p",[t._v("运行 "),a("code",[t._v("/bin/oapServiceNoInit.sh")]),t._v("(.bat) 来启动这个模式。")])])}],!1,null,null,null);e.default=s.exports}}]);
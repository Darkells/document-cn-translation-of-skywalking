(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{273:function(t,n,s){"use strict";s.r(n);var i=s(0),e=Object(i.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("SkyWalking：一个开源的观测平台, 用于从服务和云原生基础设施收集, 分析, 聚合以及可视化数据.\nSkyWalking 为你提供了一种简便的方式来清晰地观测分布式系统, 甚至可以观测横跨不同云的系统.\nSkyWalking 更是一种现代的应用程序性能监控(Application Performance Monitoring)工具, 尤其是专为云原生, 基于容器以及分布式的系统.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("使用 SkyWalking 时, 你可以看到服务与端点之间的拓扑结构, 每个服务/服务实例/端点的性能指标, 还可以设置报警规则.")]),t._v(" "),s("p",[t._v("除此之外, 你还可以通过 SkyWalking 原生代理, SDK 以及 Zipkin, Jaeger 和 OpenCensus 来进行分布式追踪.")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("SkyWalking 逻辑上分为四部分: 探针, 平台后端, 存储和用户界面.")]),t._v(" "),s("img",{attrs:{src:"http://skywalking.apache.org/assets/frame.jpeg"}}),t._v(" "),s("ul",[t._m(6),t._v(" "),s("li",[s("strong",[t._v("平台后端")]),t._v("是一个支持集群的后台, 用于数据聚合, 数据分析以及驱动数据流从探针到用户界面的流程.\n平台后端还提供了各种可插拔的能力, 如不同来源数据(如来自 Zipkin)格式化, 不同存储系统以及集群管理.\n你甚至还可以使用"),s("router-link",{attrs:{to:"./oal.html"}},[t._v("观测分析语言")]),t._v("来进行自定义聚合分析.")],1),t._v(" "),t._m(7),t._v(" "),t._m(8)]),t._v(" "),t._m(9),t._v(" "),s("ul",[s("li",[t._v("学习 SkyWalking 的"),s("router-link",{attrs:{to:"./project-goals.html"}},[t._v("项目目标")])],1)])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"总览"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总览"}},[this._v("#")]),this._v(" 总览")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"为什么要使用-skywalking"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用-skywalking"}},[this._v("#")]),this._v(" 为什么要使用 SkyWalking?")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("在许多不同的场景下, SkyWalking 为观察和监控分布式系统提供了解决方案.\n首先是像传统的方式那样, SkyWalking 为服务提供了自动打点代理, 如 Java, C# 和 Node.js.\n同时也提供了手动打点 SDK, 像 Go (尚未支持) , C++ (尚未支持).\n随着越来越多的编程语言需要获得支持, 运行时操作代码的危险性, 以及云原生基础设施越来越强大,\nSkyWalking 还可以使用服务网格基础探针来收集数据, 以帮助了解整个分布式系统.\n总之, SkyWalking 为 "),n("strong",[this._v("服务(service)")]),this._v(", "),n("strong",[this._v("服务实例(service instance)")]),this._v(", 以及 "),n("strong",[this._v("端点(endpoint)")]),this._v(" 提供了观测能力.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("服务(Service)")]),this._v(", "),n("strong",[this._v("实例(Instance)")]),this._v(" 以及 "),n("strong",[this._v("端点(Endpoint)")]),this._v(" 等概念在如今随处可见, 所以让我们先了解一下他们在 SkyWalking 中都表示什么意思.")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ul",[s("li",[s("strong",[t._v("服务(Service)")]),t._v(". 表示对请求提供相同行为的一系列或一组工作负载. 在使用打点代理或 SDK 的时候,\n你可以定义服务的名字. 如果不定义的话, SkyWalking 将会使用你在平台上定义的名字, 如 Istio.")]),t._v(" "),s("li",[s("strong",[t._v("服务实例(Service Instance)")]),t._v(". 上述的一组工作负载中的每一个工作负载称为一个实例. 就像 Kubernetes 中的 "),s("code",[t._v("pods")]),t._v(" 一样,\n服务实例未必就是操作系统上的一个进程. 但当你在使用打点代理的时候, 一个服务实例实际就是操作系统上的一个真实进程.")]),t._v(" "),s("li",[s("strong",[t._v("端点(Endpoint)")]),t._v(". 对于特定服务所接收的请求路径, 如 HTTP 的 URI 路径和 gRPC 服务的类名 + 方法签名.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"架构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[this._v("#")]),this._v(" 架构")])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("strong",[this._v("探针")]),this._v("基于不同的来源可能是不一样的, 但作用都是收集数据, 将数据格式化为 SkyWalking 适用的格式.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("strong",[this._v("存储")]),this._v("是开放式的. 你可以选择一个既有的存储系统, 如 ElasticSearch, H2 和 MySQL 集群(Sharding-Sphere 管理),\n也可以选择自己实现一个存储系统. 当然, 我们非常欢迎你贡献新的存储系统实现.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("strong",[this._v("用户界面")]),this._v("对于 SkyWalking 的最终用户来说非常炫酷且强大. 同样它也是可定制以匹配你已存在的后端的.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"下一步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下一步"}},[this._v("#")]),this._v(" 下一步")])}],!1,null,null,null);n.default=e.exports}}]);
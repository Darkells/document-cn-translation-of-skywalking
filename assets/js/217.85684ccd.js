(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{525:function(t,s,e){"use strict";e.r(s);var r=e(0),i=Object(r.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("服务网格探针利用了服务网格实现者的可扩展机制, 如 Istio.")]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("以下是来自 Istio 文档中对服务网格的解释:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("img",{attrs:{src:"https://istio.io/docs/concepts/what-is-istio/arch.svg"}}),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("从探针方面来看, 你知道服务网格探针中肯定没有和链路追踪相关的东西, 那么为什么 SkyWalking 平台还能正常工作?")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("ul",[e("li",[t._v("如果你想使用服务网格探针, 请阅读"),e("router-link",{attrs:{to:"./../setup/#on-service-mesh"}},[t._v("在服务网格中配置 SkyWalking")]),t._v(" 一文.")],1)])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"服务网格探针-server-mesh-probe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务网格探针-server-mesh-probe"}},[this._v("#")]),this._v(" 服务网格探针(Server Mesh Probe)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"什么是服务网格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是服务网格"}},[this._v("#")]),this._v(" 什么是服务网格?")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v('术语"服务网格"通常用来描述一种微服务网络, 这些微服务构成了一个完整的应用以及他们之间的交互.\n随着服务网格不断增大, 复杂性不断增加, 可能会使其难以理解和管理.\n服务网格的需求可能包含服务发现, 负载均衡, 失败探测, 性能指标以及监控, 通常可能还有更复杂的\n操作性需求, 如 AB 测试, 灰度发布, 频率限制, 访问控制以及端到端鉴权.')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"探针从哪里收集数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#探针从哪里收集数据"}},[this._v("#")]),this._v(" 探针从哪里收集数据?")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Istio 是一个非常典型的服务网格设计和实现, 它定义了"),s("strong",[this._v("控制面板")]),this._v("和"),s("strong",[this._v("数据面板")]),this._v(", 受到广泛应用.\n以下是 Istio 的架构:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("服务网格探针可以选择从"),s("strong",[this._v("控制面板")]),this._v("或"),s("strong",[this._v("数据面板")]),this._v("收集数据. 对应到 Istio 中, 则是从 Mixer(控制面板)\n或 Envoy sidecar(数据面板) 收集遥测数据. 底层上它们都是相同的数据, 探针会从每个请求的服务端和客户端\n收集两方面的遥测实体.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"后端是如何在服务网格奏效的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后端是如何在服务网格奏效的"}},[this._v("#")]),this._v(" 后端是如何在服务网格奏效的?")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("服务网格探针从每一个请求那里收集遥测数据, 因此它知道请求的源, 目标, 端点, 耗时以及状态.\n通过把这些调用关系以及每个节点的性能指标进行结合, 后端能够构造出一张完整的拓扑图.\n后端同时还从解析链路追踪数据那里获得同样的指标数据. 因此完整的描述如下:\n"),s("strong",[this._v("服务网格指标正是链路追踪解析器产生的指标数据, 它们是一样的.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"下一步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下一步"}},[this._v("#")]),this._v(" 下一步?")])}],!1,null,null,null);s.default=i.exports}}]);
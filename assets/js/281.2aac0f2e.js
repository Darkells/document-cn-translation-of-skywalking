(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{417:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("在当前版本中，令牌为简单的字符串。")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("在agent.config文件中设置令牌")]),t._v(" "),t._m(3),a("p",[t._v("同时，开启"),a("router-link",{attrs:{to:"./../../backend/backend-token-auth.html"}},[t._v("后端令牌鉴权")]),t._v(".")],1),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("Collector会对从agent来的每一个请求进行验证，仅允许令牌匹配上的请求通过。")]),t._v(" "),a("p",[t._v("如果令牌不对，你会在agent日志中看到如下错误。")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("不能，也不应该。从技术的角度，当然是可以的，令牌和TLS都用于不可信的网络环境。在不可信网络下，TLS与令牌相比应当优先考虑。只有在使用TLS时，令牌才是可信的。在非TLS网络中，在发送令牌时，很容易被窃取。")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("目前不支持。但是我们真诚感谢其他伙伴对此特性贡献力量。")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"令牌鉴权"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#令牌鉴权"}},[this._v("#")]),this._v(" 令牌鉴权")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"令牌"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#令牌"}},[this._v("#")]),this._v(" 令牌")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"设置令牌"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置令牌"}},[this._v("#")]),this._v(" 设置令牌")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Authentication active is based on backend setting, see application.yml for more details.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("agent.authentication")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("xxxx")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"鉴权失败"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#鉴权失败"}},[this._v("#")]),this._v(" 鉴权失败")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("org.apache.skywalking.apm.dependencies.io.grpc.StatusRuntimeException: PERMISSION_DENIED\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"faq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[this._v("#")]),this._v(" FAQ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"我能使用令牌鉴权代替tls吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我能使用令牌鉴权代替tls吗"}},[this._v("#")]),this._v(" 我能使用令牌鉴权代替TLS吗?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"支持其他鉴权机制吗？比如ak-sk？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持其他鉴权机制吗？比如ak-sk？"}},[this._v("#")]),this._v(" 支持其他鉴权机制吗？比如ak/sk？")])}],!1,null,null,null);e.default=r.exports}}]);
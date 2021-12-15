(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{592:function(t,s,a){"use strict";a.r(s);var e=a(21),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_01-jsx简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01-jsx简介"}},[t._v("#")]),t._v(" 01. JSX简介")]),t._v(" "),a("h2",{attrs:{id:"什么是jsx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是jsx"}},[t._v("#")]),t._v(" 什么是JSX？")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" element "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" world"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("以类似模板语法的方式描述UI的一种语法。它是JS的"),a("strong",[t._v("语法糖")]),t._v("，"),a("strong",[t._v("本质上也是JS")]),t._v("。可以在其中使用"),a("strong",[t._v("变量或表达式、函数等")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"为什么使用jsx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用jsx"}},[t._v("#")]),t._v(" 为什么使用JSX？")]),t._v(" "),a("p",[t._v("将"),a("em",[t._v("标记与逻辑")]),t._v(" 共同存放在称之为“组件”的松散耦合单元之中，来实现"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Separation_of_concerns",target:"_blank",rel:"noopener noreferrer"}},[a("em",[t._v("关注点分离")]),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("React不强制使用JSX，但在 JavaScript 代码中将 JSX 和 UI 放在一起时，会在"),a("strong",[t._v("视觉上有辅助作用")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"在-jsx-中嵌入表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-jsx-中嵌入表达式"}},[t._v("#")]),t._v(" 在 JSX 中嵌入表达式")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" element "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在 JSX 语法中，你可以在大括号内放置任何有效的 "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 表达式"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"jsx-也是一个表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsx-也是一个表达式"}},[t._v("#")]),t._v(" JSX 也是一个表达式")]),t._v(" "),a("p",[t._v("在编译之后，JSX 表达式会被转为普通 JavaScript 函数调用，并且对其取值后"),a("strong",[t._v("得到 JavaScript 对象")])]),t._v(" "),a("blockquote",[a("p",[t._v("可以把JSX当初一个对象来对待，可以使用它赋值给变量、当参数输入函数、返回JSX等。")])]),t._v(" "),a("h2",{attrs:{id:"jsx-特定属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsx-特定属性"}},[t._v("#")]),t._v(" JSX 特定属性")]),t._v(" "),a("p",[t._v("通过使用引号，来将属性值指定为字符串字面量：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" element "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div tabIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("JSX中的属性名使用camelCase(小驼峰)命名。如上面例子中的"),a("code",[t._v("tabIndex")])])]),t._v(" "),a("p",[t._v("使用大括号，来在属性值中插入一个 JavaScript 表达式：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" element "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("img src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("avatarUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"使用-jsx-指定子元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-jsx-指定子元素"}},[t._v("#")]),t._v(" 使用 JSX 指定子元素")]),t._v(" "),a("p",[t._v("JSX 标签里能够包含很多子元素:")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" element "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("Hello!")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("Good to see you here.")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"jsx-防止注入攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsx-防止注入攻击"}},[t._v("#")]),t._v(" JSX 防止注入攻击")]),t._v(" "),a("p",[t._v("React DOM 在渲染所有输入内容之前，默认会进行"),a("a",{attrs:{href:"https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html",target:"_blank",rel:"noopener noreferrer"}},[t._v("转义"),a("OutboundLink")],1),t._v("。它可以确保在你的应用中，"),a("strong",[t._v("永远不会注入那些并非自己明确编写的内容")]),t._v("。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cross-site_scripting",target:"_blank",rel:"noopener noreferrer"}},[t._v("XSS（cross-site-scripting, 跨站脚本）"),a("OutboundLink")],1),t._v("攻击。")]),t._v(" "),a("h2",{attrs:{id:"jsx-表示对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsx-表示对象"}},[t._v("#")]),t._v(" JSX 表示对象")]),t._v(" "),a("p",[t._v("Babel 会把 JSX 转译成一个名为 "),a("code",[t._v("React.createElement()")]),t._v(" 函数调用。")]),t._v(" "),a("p",[t._v("以下两种示例代码完全等效：")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" element "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("greeting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    Hello, world!\n  ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" element "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标签名")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("className"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'greeting'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 属性对象")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello, world!'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 内容")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
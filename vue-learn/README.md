# vue-study

[slot解析栗子]
[echarts使用栗子]

vuex课程(20200530)

vue.prototype.$content1 = 'hello world'
window.$content2 = 'hello world'

<!-- 可以使用vm.$forceUpdata强制刷新，页面全部刷新 -->

以上全局变量更新无法触发更新视图，而vuex可以

鼻祖：flux

用vue-cli3初始化的项目中加typescript和less
vue add @vue/typescript
vue install less less-loader style-resource-loader save

white-space 返回的段落换行符显示
vuex对ts的支持弱

20201103:

总结两点：
- tsconfig.json只在语法层面对项目语法进行校验
- vue.config.js是webpack启动时的校验，在其中设置了别名来访问文件,那么tsconfig.json也应该设置,不能路径会不通过ts语法而报错,原因是webpack认识,但ts语法不认识
- 积极查看npm及github文档

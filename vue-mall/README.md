# FE|learning

> A Vue.js project about daily practise(vue + node + MongoDB) 【vue + node + MongoDB 全栈日常练习】

## 初步设想

```
1. 资源型:
    - 趣蹦跶（仿趣极限）
    - 极限运动/旅游攻略/生活小窍门（实时编辑加精帖）（注：注明出处，法律声明，导流AD）
    - 艺术/书（音乐，电影，百度资源分享，豆瓣引流），绘画（相框贴墙，书窗），
    - 自留地（生活记录，写作，照片）
    - 商城（小配件，伴手礼，运动器材，艺术拍卖）
2. h5(练手vue + node + MongoDB) + 主打小程序（云开发） + APP(flutter)
```

## 创建 + 启动

``` bash
# 安装依赖
npm install

# 启动项目
npm run dev

# 生产打包
npm run build

# 打包分析报告
npm run build --report
```

## MongoDB 连接和数据库简单操作（增，删，改，查）
``` 
# mongod --dbpath D:\mongoAll\data（没配置环境变量bin中打开）
# mongod --config D:\MongoDB\etc\mongo.conf(配置环境变量后直接命令行打开)
# mongo （再开启一个命令行）
# show dbs 看看有几个数据库
# 增，删，改，查
# db.user.insert({id: 123, name:'xszi'})
# $ db.user.remove({"这里填入要删除的条件"})
# $ db.user.update({},{$set:{}})
# $ db.user.find()
```

## 项目包含：

```
1. h5主页
    - 待完成1： h5主页(设计一个与小程序可兼容的项目);
    - 待完成2： 定位，具体要做一个怎样的项目
2. 项目登录，注册（包括后台特殊键登录操作）;  (userLogin.vue组件)
    - 待完成1： 登录界面

3. 利用socket.io实现简单的实时聊天; (socketChat组件)
    - 待完成1： 将聊天记录以用户为单位保存下来，也能在前端实现删除该记录

4. vue过渡和去动画练习---transition; (transition.vue)
    - 有 6 种 class 类名会在进入/离开(enter/leave)过渡中处理:

    - v-enter：进入式过渡(entering transition)的开始状态。在插入元素之前添加，在插入元素之后一帧移除。

    - v-enter-active：进入式过渡的激活状态。应用于整个进入式过渡时期。在插入元素之前添加，过渡/动画(transition/animation)完成之后移除。此 class 可用于定义进入式过渡的 duration, delay 和 easing 曲线。

    - v-enter-to：仅适用于版本 2.1.8+。进入式过渡的结束状态。在插入元素之后一帧添加（同时，移除 v-enter），在过渡/动画完成之后移除。

    - v-leave：离开式过渡(leaving transition)的开始状态。在触发离开式过渡时立即添加，在一帧之后移除。

    - v-leave-active：离开式过渡的激活状态。应用于整个离开式过渡时期。在触发离开式过渡时立即添加，在过渡/动画(transition/animation)完成之后移除。此 class 可用于定义离开式过渡的 duration, delay 和 easing 曲线。

    - v-leave-to：仅适用于版本 2.1.8+。离开式过渡的结束状态。在触发离开式过渡之后一帧添加（同时，移除 v-leave），在过渡/动画完成之后移除。
```

### 屏幕适配解决方案

* rem适配:
    - https://github.com/amfe/lib-flexible
    - https://github.com/cuth/postcss-pxtorem

* viewprot适配:
    - https://github.com/evrone/postcss-px-to-viewport

> 现阶段viewprot的兼容性已经不错了, 所以选用这个方案

* 如何使用:

  - 前提: 需要设计稿的宽度为375px, 蓝湖直接把宽度调成375就行

  - 使用: 样式中直接写px就行, 编译时会自动转换

  - minPixelValue: 1, 1px不转换(已设置)

  - selectorBlackList:['line'] 需要忽略的CSS选择器(设置后,带有line类名的元素不会被转换)


# vue-information-flow-app

### 功能

1. 首页
2. slider
3. 文章列表/视频列表（包含整体滚动结构，列表项）
4. 实时搜索
5. 详情页
6. axios 请求/mock
7. vuex 的使用
8. router 动效

### 开始

1. 构建页面和路由
   1.1 新建 List.vue
   1.2 新建 Detail.vue
   1.3 router/index.ts 中, enum RouteNames, 动态导入两个组件, /list 和/detail 路由带参

2. 首页组件
   2.1 Slider 组件 ,active, change 事件, 横向滚动, transition, ["我的", "发现", "文章", "视频", "他的", "娱乐", "朋友"];
   2.2 banner 组件, 单 image, border-radius, 随着 slider 切换更改 banner，transition fade
   2.3 视频列表组件，slider 切换到视频的时候，展示。v-show
   2.4 首页推荐列表， 添加 axios，baseUrl, 添加 services https://www.fastmock.site/#/project/10542, 点击 Item translate3d
   2.5 首页引用这些组件

    视频资源
    [
    "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
    "http://vjs.zencdn.net/v/oceans.mp4",
    "https://www.w3school.com.cn/example/html5/mov_bbb.mp4",
    "https://vod-progressive.akamaized.net/exp=1590688030~acl=%2A%2F623661526.mp4%2A~hmac=6a569635b0dfd5f24b6acf31603b99819e0da93534a8a85c5c47caaf46afbfa6/vimeo-prod-skyfire-std-us/01/2684/7/188421287/623661526.mp4"
    ]


    banner 图片资源
    [
    "https://img.tukuppt.com//ad_preview/00/11/13/5c9940242bf11.jpg!/fw/780",
    "https://img.tukuppt.com//ad_preview/00/03/56/5c98abb074bdd.jpg!/fw/780",
    "https://img.tukuppt.com//ad_preview/00/10/15/5c992911709f7.jpg!/fw/780",
    "https://img.tukuppt.com//ad_preview/00/19/70/5c9a0504de105.jpg!/fw/780",
    "http://pic.616pic.com/bg_w1180/00/14/61/bjDQ7hTsKA.jpg!/fw/1120",
    "https://img.tukuppt.com//ad_preview/00/10/15/5c992911709f7.jpg!/fw/780",
    "https://img.tukuppt.com//ad_preview/00/19/70/5c9a0504de105.jpg!/fw/780",
    "http://pic.616pic.com/bg_w1180/00/14/61/bjDQ7hTsKA.jpg!/fw/1120"
    ];

3. 列表页
   3.1 顶部搜索框 v-model 联动列表展示，样式优化，sticky
   3.2 列表项 左侧方块，emoji 表情。右侧上方 title, 下方 desc
   3.3 点击携带 id 跳转 detail
   3.4 超过两行省略号
   3.5 loading 组件
   3.6 调接口获取数据，数据存储 vuex

    emoji 资源

    ["😨", "🤡", "👻", "👩", "💖"]

4. 详情页 获取 params.id，根据 id 从 vuex 拿数据
   4.1 头图
   4.2 title
   4.3 content white-space:pre-wrap

5. router keep-alive 必须在组件内，给组件命名，用字符串
   5.1 home -> list, list 组件刷新
   5.2 detail -> list, list 组件是缓存住的
   5.3 由于 list 组件缓存住了,search 也被缓存了，所以需要在 activated 里清空
6. router 动效

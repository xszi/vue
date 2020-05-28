
# echarts 的装载方法

监听echart点击事件

```js
    // 点击图表某点进行后续的操作
    this.$refs['chart'].chartObj.on('click', (params) => {
        const changedOptions = xxx
        this.$refs['chart'].setOptions(changedOptions, false)
    })
```

```js
    // 点击图表某点选择
    this.$refs['chart'].chartObj.on('legendselectchanged', (params) => {
        const changedOptions = xxx
        this.$refs['chart'].setOptions(changedOptions, false)
    })
```

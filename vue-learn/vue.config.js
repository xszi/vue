const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 给路径设置别名
    chainWebpack: (config) => { 
        config.resolve.alias
            .set('@components', resolve('src/components'))
            .set('@views', resolve('src/views'))
        config.resolve.extensions.add('.ts')
    }
}
const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    outputDir: 'dist',
    // publicPath: process.env.NODE_ENV === 'production' ? '/xdh-mall/' : '/',
    publicPath: './',
    devServer: {
        proxy: 'https://www.easy-mock.com/mock/5d26d02f62e721147f60ad0a/v1',
        // proxy: {
        //     //配置自动启动浏览器
        //     "/v1/*": {
        //         target: "https://www.easy-mock.com/project/5d26d02f62e721147f60ad0a",
        //         changeOrigin: true,
        //         // ws: true,//websocket支持
        //         secure: false
        //     }
        // }
    },
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtoviewport({
                        viewportWidth: 375,
                        selectorBlackList: ['van-circle__layer']
                    })
                ]
            }
        }
    }
};

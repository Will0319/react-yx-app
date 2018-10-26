const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    // 调试模式
    devtool: 'inline-source-map',
    // 入口
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',  //热加载的文档   https://gaearon.github.io/react-hot-loader/getstarted/
            path.join(__dirname, 'src/index.js')
        ]
    },
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader", "postcss-loader"]
        }]
    },
    // 轻量级的服务器 详情可参考 https://webpack.docschina.org/configuration/dev-server
    devServer: {
        // 运行端口
        port: 3000,
        // URL的根目录。如果不设定的话，默认指向项目根目录
        contentBase: path.join(__dirname, './dist'),
        // 所有404定位到index.html
        historyApiFallback: true,
        open:true,
        host: 'localhost',
        // proxy: {
        //     "/api/*": "http://localhost:8090/$1"
        // }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEV__: false
        }),
        // 很多库的内部，有process.NODE_ENV的判断语句，
        // 改为production。最直观的就是没有所有的debug相关的东西，体积会减少很多
    ],
};

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

commonConfig = {
    entry: {
        app: [
            "babel-polyfill",
            path.join(__dirname, 'src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux','react-router-redux']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: "/"
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'public/index.html'),
            favicon: 'public/moon.ico',
            hash: false,
            // 这样每次客户端页面就会根据这个hash来判断页面是否有必要刷新
            // 在项目后续过程中，经常需要做些改动更新什么的，一但有改动，客户端页面就会自动更新！
            showErrors: true,
            // 是否将错误信息输出到html页面中
            minify: {
                // 压缩HTML文件
                removeComments: true,
                // 移除HTML中的注释
                collapseWhitespace: true
                // 删除空白符与换行符
            }
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })
    ],

    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            components: path.join(__dirname, 'src/components'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers'),
            mock: path.join(__dirname, 'mock')
        }
    }
};

module.exports = commonConfig;
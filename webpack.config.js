const path = require('path');
const webpack = require('webpack');
const copyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    entry: path.join(__dirname, '/index.js'), // 入口文件
    output: {
        path: path.join(__dirname, '/dist'), //打包后的文件存放的地方
        filename: 'bundle.js' //打包后输出文件的文件名
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './dist/src')
        }, // 本地服务器所加载文件的目录
        port: '8088', // 设置端口号为8088
        historyApiFallback: true, //不跳转
        open: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin,
        new copyWebpackPlugin({

            patterns: [{
                from: __dirname + '/src',
                to: './src'
            }]

        })
    ]
}
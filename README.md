# threejsStudy

## 使用 webpack 搭建 threejs 项目

```bash
  $ yarn add --save-dev webpack
  $ yarn add --save-dev webpack-cli
  $ yarn add --save-dev webpack-dev-server
  $ yarn add three -save
  $ yarn add cross-env -save
  $ yarn add copy-webpack-plugin -save
```

## 配置 webpack,config.js

```javascript
const path = require("path");
const webpack = require("webpack");
const copyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: path.join(__dirname, "/index.js"), // 入口文件
  output: {
    path: path.join(__dirname, "/dist"), //打包后的文件存放的地方
    filename: "bundle.js", //打包后输出文件的文件名
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist/src"),
    }, // 本地服务器所加载文件的目录
    port: "8088", // 设置端口号为8088
    historyApiFallback: true, //不跳转
    open: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new copyWebpackPlugin({
      //使用threejs加载字体json文件的时候使用url路径，打包无法识别，目前没想到更好的办法，打包成静态资源
      patterns: [
        {
          from: __dirname + "/src",
          to: "./src",
        },
      ],
    }),
  ],
};
```

## 学习过程，陆续更新。

```javascript
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js"; //FontLoader已经不在全局需要局部引入
```

const path =require('path');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const {DefinePlugin}=require("webpack");
const CopyWebpackPlugin =require("copy-webpack-plugin");

module.exports = {
    // 设置模式
    // development 开发阶段
    // production 准备打包上线
    mode:"development",
    // 设置source-map，建立js映射文件，方便调试代码错误
    devtool: "source-map",
    entry: "./src/main.js",
    output:{
        path: path.resolve(__dirname,"./build"),
        filename:"js/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            },{
                test: /\.less$/,
                use :[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
            // ,{
            //     test: /\.(jpe?g|png|gif|svg)$/,
            //     use: {
            //         loader: "file-loader",
            //         options:{
            //             outputPath: "img",
            //             name: "[name]_[hash:6].[ext]"
            //         }
            //     }
            // }
            // ,{
            //     test: /\.(jpe?g|png|gif|svg)$/,
            //     use: {
            //         loader: "url-loader",
            //         options:{
            //             outputPath: "img",
            //             name: "[name]_[hash:6].[ext]",
            //             limit: 50 *1024
            //         }
            //     }
            // }
            ,{
                test: /\.(jpe?g|png|gif|svg)$/,
                type: "asset",
                generator: {
                    filename: "img/[name]_[hash:6][ext]"
                },
                parser: {
                    dataUrlCondition:{
                        maxSize: 10*1024
                    }
                }
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            title: "learn vue3"
        }),
        new DefinePlugin({
            BASE_URL: "'./'"
        })
        ,
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./public",
                    to: "./",
                    globOptions:{
                        ignore:[
                            "**/index.html"
                        ]
                    }
                }
            ]
        })
    ]
}
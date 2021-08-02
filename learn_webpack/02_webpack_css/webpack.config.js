const path =require('path');

module.exports = {
    entry: "./src/main.js",
    output:{
        path: path.resolve(__dirname,"./build"),
        filename:"bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/, //正则表达式
                // 1.loader的写法（语法糖）
                // loader: "css-loader"
                
                // 2.完整写法
                // 用一个loader搞不定，需要用数组定义多个loader
                use: [
                    // {loader: "css-loader"}
                    // 执行顺序是数组元素的逆序
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                    // {
                    //     loader: "postcss-loader",
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [
                    //                 require("autoprefixer")
                    //             ]
                    //         }
                    //     }
                    // }
                ]
            },{
                test: /\.less$/,
                use :[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    }
}
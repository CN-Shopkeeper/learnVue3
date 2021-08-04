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
                        maxSize: 50*1024
                    }
                }
            }
        ]
    }
}
# 使用webpack来运行TypeScript代码：
<br>
在当前文件夹下：
```npm init```
<br>
安装webpack：
```npm install webpack webpack-cli -D```
<br>
为webpack安装ts-loader：
```npm install ts-loader typescript -D``` 
<br>
配置webpack：在webpack.config.js文件中进行配置
<br>
在package.json中配置build指令。
<br>
此时执行build指令时，会提示需要有tsconfig.json这个文件
<br>
执行```tsc --init```生成默认的tsconfig.json文件
<br>
此时就可以正常运行了
---
安装webpack-dev-server
```npm install webpack-dev-server -D```
<br>
安装html-webpack-plugin
```npm install html-webpack-plugin -D```
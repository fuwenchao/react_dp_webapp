# 付文超test

============

# webApp react 仿大众点评

## 参照慕课网教程

* 开发时间

2017年12月31日 22:25:00




安装yeoman


安装generetor

$ npm install -g generator-react-webpack


生成骨架

yo react-webpack fortest

查看结构
mkdir test5
cd test5
yo react-webpack fortest
$ ll
total 552
drwxr-xr-x 1 wenchaofu 197121      0 十二 20 14:32 cfg/
drwxr-xr-x 1 wenchaofu 197121      0 十二 20 14:32 dist/
-rw-r--r-- 1 wenchaofu 197121    733 十二 20 14:32 karma.conf.js
drwxr-xr-x 1 wenchaofu 197121      0 十二 20 14:34 node_modules/
-rw-r--r-- 1 wenchaofu 197121   2220 十二 20 14:32 package.json
-rw-r--r-- 1 wenchaofu 197121 276369 十二 20 14:35 package-lock.json
-rw-r--r-- 1 wenchaofu 197121   1237 十二 20 14:32 server.js
drwxr-xr-x 1 wenchaofu 197121      0 十二 20 14:32 src/
drwxr-xr-x 1 wenchaofu 197121      0 十二 20 14:32 test/
-rw-r--r-- 1 wenchaofu 197121    824 十二 20 14:32 webpack.config.js

wenchaofu@wenchaofu-PC MINGW64 /c/webApp/test5




安装路由
npm install react-router --save
npm install react-router-dom --save
npm install react-redux --save

cnpm install react-addons-pure-render-mixin --save


npm install font-awesome-webpack --save-dev
npm install redux --save
npm install less less-loader --save-dev

cnpm install font-awesome --save-dev
cnpm install autoprefixer-loader --save-dev





* 2018年1月1日 17:39:40
修复提交评价bug

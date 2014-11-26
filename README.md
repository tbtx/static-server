static-server
=============

tbtx static server

## 安装

1. 安装nodejs

2. 在当前目录执行npm install安装依赖文件

3. 运行node app.js启动服务

4. 将static.tianxia.taobao.com绑定到127.0.0.1

5. 访问一个文件，会在当前目录生成.flex-combo目录

6. 修改.flex-combo目录下的.flex-combo.json，在urls里加入一条

    "/tbtx": "E:\\tbcdn"

7. 可以在根目录新建一个settings.js, 或者拷贝settings.example.js文件来修改端口配置

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

    "/tbtx": "E:\\\\tbcdn"

7. 可以在根目录新建一个settings.js, 或者拷贝settings.example.js文件来修改端口配置

8. 在.flex-combo的urls里将static.tianxia.taobao.com的线上地址加上

    "static.tianxia.taobao.com": "223.6.248.150"

## nginx配置

比如combo服务跑在9000端口,注意不要用127.0.0.1:9000/这样最后带反斜杠的地址，否则会有问题

    server {
        listen 80;
        server_name static.tianxia.taobao.com;
        location ^~ /tbtx/ {
            proxy_pass http://127.0.0.1:9000;
        }
        location / {
            proxy_pass http://223.6.248.150;
        }
    }


## bug

    // 帮flex-combo找出了个bug，node下path.join会将/重新变成\\
    pathLib.join(base, i).replace(/\\|\/{1,}/g, '/');
---
title: 从零开始React（一）：构建webpack项目
date: 2020-03-11 19:29:41
tags:
	- React
	- 前端
categories:
	- React
description:
---

*webpack* 是一个现代 JavaScript 应用程序的**静态模块打包器**。

为了我们后面使用 *React*  的便利，我们先熟悉如何构建一个简单的 *webpack*  项目。

<!--more-->

>   本博客的内容会实时在Github上同步更新，博客内涉及的代码也会在GitHub上上传：
>
>   https://github.com/qianfanguojin/react-practise

### 准备工作

工具：

-   [VSCode ](https://code.visualstudio.com/)（安装一些必要的[插件](https://segmentfault.com/a/1190000006697219)）
-   [Node.js](https://nodejs.org/en/)  
-   一台电脑

确保满足以上条件后，我们开始下面的步骤。

### 1. 建立必要文件(夹)

打开`VSCode`，建立一个空文件夹 `react_basic`，在`react_basic` 根目录下建立新文件夹 `src` 、`dist`，在`src`目录新建 `index.html` ,`index.js`。

编辑`index.html` :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 此时处于内存中的index.html会自动引用根目录下的main.js,不需要手动导入 -->
    <!-- <script src="../main.js"></script> -->
</head>
<body>
    Hello React
  <div id="app"></div>
</body>
</html>
```

此时项目结构：

![](https://cdn.jsdelivr.net/gh/qianfanguojin/ImageHosting_1/hexo/20200311202537.png)

### 2. 初始化npm项目

在终端中进入 `react_basic` 目录，接下来所有的命令都在这个目录下执行。

执行初始化：

```
npm init -y
```

根目录会生成 `package.json` 文件。

![](https://cdn.jsdelivr.net/gh/qianfanguojin/ImageHosting_1/hexo/20200311202953.png)

### 3. 安装配置 webpack

#### 安装

安装`webpack`

```javascript
npm i webpack -D
```

安装`webpack-cli`

```javascript
npm i webpack-cli -D
```

在 `package.json` 可以看到：

![img-01](https://cdn.jsdelivr.net/gh/qianfanguojin/ImageHosting_1/hexo/20200311195622.png)

#### 配置

在项目根目录新建 `webpack.config.js`，并填入：

```json
module.exports ={
	mode:'development' //生成不压缩的代码，production：会压缩代码
    // webpack4.x中约定默认打包入口为src->index.js
}
```



最终的项目结构如下：

![img-02](https://cdn.jsdelivr.net/gh/qianfanguojin/ImageHosting_1/hexo/20200311195712.png)



终端输入 `webpack` ，会在dist目录生成`main.js`文件：

![img-03](https://cdn.jsdelivr.net/gh/qianfanguojin/ImageHosting_1/hexo/20200311195757.png)

![image-20200311142401824](https://cdn.jsdelivr.net/gh/qianfanguojin/ImageHosting_1/hexo/20200311195811.png)

### 4. 安装配置 webpack-dev-server

#### 安装

安装`webpack-dev-server` ,`webpack-dev-server`工具可以实时监听代码文件的更改来执行内存打包，速度非常快。

这样我们就可以实时在网页中看到代码修改的效果，而不用每次使用`webpack`手动打包了：

![image-20200311142658000](https://cdn.jsdelivr.net/gh/qianfanguojin/ImageHosting_1/hexo/20200311195842.png)

#### 配置

为了方便调用`webpack-dev-server`工具，我们编辑`package.json`文件中的`scripts`部分，修改如下：

```json
 scripts:{

    "dev":"webpack-dev-server --open"

}
```

![image-20200311142826506](https://cdn.jsdelivr.net/gh/qianfanguojin/ImageHosting_1/hexo/20200311195853.png)

之后使用`npm run dev`命令调用 `dev` 对应的命令，就会自动启动`webpack-dev-server`，此时当前项目将被托管于本地的web服务器，默认托管于8080端口。

同时会在项目根目录下生成`main.js`(内存中，磁盘中不会存在此文件)，可以直接通过`localhost:8080/main.js`访问。

同时在`index.html` 的`head`标签下引人：

```javascript
 <script src="../main.js"></script>
```

![image-20200311155407161](https://cdn.jsdelivr.net/gh/qianfanguojin/ImageHosting_1/hexo/20200311200732.png)

这样，`index.js` (生成`main.js`)的内容更改就会实时更新配置到`index.html`中。

运行测试：

![image-20200311155514231](https://cdn.jsdelivr.net/gh/qianfanguojin/ImageHosting_1/hexo/20200311200807.png)

![image-20200311154937096](https://cdn.jsdelivr.net/gh/qianfanguojin/ImageHosting_1/hexo/20200311200836.png)



### 5. 安装辅助工具

虽然 `index.js` 通过`webpack-dev-server` 自动打包`main.js`更新`index.html`，但是由于`index.html`文件存放于`src`目录，目前访问`index.htm`l还需要切换至`src`目录，而且`index.html`也无法实时更改、自动更新。

因此我们需要将`index.html`也加载到内存中，实现自动加载更新。

借助新的工具 `html-webpack-plugin` ，其可以提供将`index.html`自动加载到项目根目录中（内存中），通过`localhost:8080`可以直接访问`index.html`,并且可以将`main.js`自动导入到`index.html`。

#### 安装

```javascript
npm i html-webpack-plugin -D
```

![image-20200311143213485](https://cdn.jsdelivr.net/gh/qianfanguojin/ImageHosting_1/hexo/20200311200940.png)

#### 配置

编辑`webpack-config.js`文件，使用require导入`html-webpack-plugin`，同时导入node的系统内置模块path。

**这段语句放在 `module.exports`  前**：

```javascript
const HtmlWebpackPlugin =  require('html-webpack-plugin')
const path = require("path")
//创建插件对象，使用path拼接当前项目的路径，如果直接写/,是相对于系统磁盘的，此时/不代表项目的根目录，因此需要使用path模块进行拼接
 const htmlPlugin = new HtmlWebpackPlugin(
    {
        template:path.join((__dirname),"/src/index.html"),
        filename:"index.html"
    }
 )

```

配置`plugins`选项来启用插件：

```js
module.exports = {

  mode: "development", //production：会压缩代码

  // webpack4.x中约定默认打包入口为src->index.js

  plugins:[htmlPlugin]

}
```

此时再运行，`main.js`会被自动引入，而且`index.html`的更新也会被实时反映到浏览器中:

```javascript
 npm run dev
```

![image-20200311162642328](https://cdn.jsdelivr.net/gh/qianfanguojin/ImageHosting_1/hexo/20200311201013.png)


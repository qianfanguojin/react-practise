---
title: 从零开始React（二）：搭建React环境
date: 2020-03-11 21:40:19
tags:
	- React
	- 前端
categories:
	- React
description:
---

上一节我们通过一些简单的配置，搭建了基于  *webpack*  的开发环境。



<!--more-->

>   本博客的内容会实时在Github上同步更新，博客内涉及的代码也会在GitHub上上传：
>
>   https://github.com/qianfanguojin/react-practise

## 1. 准备工作

首先确保你有一个 `webpack` 构建好的项目，不然接下来的步骤无法结合。

不知道如何搭建的，请看我上一篇文章：[从零开始React（一）：构建webpack项目](https://www.qianfanguojin.top/2020/03/11/从零开始React（一）：构建webpack项目/#more)。

## 2. React 介绍

两大组件：react 、react-dom

概念：

-   react：专门用于创建组建和虚拟的dom元素 同时，组建的生命周期也在react包中

-   react-dom：专门进行DOM操作的，最主要的应用场景就是 `ReactDOM.render()`

-   容器(一个div 标签)：React 创建的虚拟DOM元素会被渲染到该容器中

    ```html
    <div id="app"></div>
    ```

## 3. 安装

在搭建好的`webpack`项目 (我这里是上一节的`react_basic`项目)，在根目录终端执行以下命令(可以再开启一个终端,之前终端被`webpack`占用):

```shell
npm i react react-dom -S:安装React插件和React Dom插件
```

在根目录的 `package.json` 文件中可以看到 `dependencies` 下有react 和 react-dom ，说明安装成功： 

![](https://cdn.jsdelivr.net/gh/qianfanguojin/ImageHosting_1/hexo/20200311220614.png)

## 4. 开始使用

在已经配置好的`webpack`项目中，在 `/src/index.js` 中加入：

```react
import React from 'react' //导入react 包并命名为 React
import ReactDOM from 'react-dom' // 导入ReactDOM并命名为ReactDOM
/**
 * 1.使用React中的createElement()方法创建虚拟dom元素 <h1 title:'标题',id:'myh1'>我是一个标题</h1>
 *   参数一：表示要创建的dom元素（h1）
 *   参数二：对象类型的参数{}，表示 创建的元素的属性节点 如果没有属性可以设置为null或者{}
 *   参数三：对象类型（dom）标签内的内容
 *   参数四~参数n：子节点
 * 2.使用ReactDOM中的render()方法渲染虚拟dom元素
 *   参数一：要渲染的虚拟dom对象（myh1）
 *   参数二：指定要渲染到的容器dom
 */
const myh1 = React.createElement('h1',null,'h1标题');//创建虚拟元素
ReactDOM.render(myh1,document.getElementById('app'));//将myh1渲染到id='app'的容器标签下
```

![image-20200311153143914](https://cdn.jsdelivr.net/gh/qianfanguojin/ImageHosting_1/others/20200311153146.png)

浏览器效果：

![image-20200311153229566](https://cdn.jsdelivr.net/gh/qianfanguojin/ImageHosting_1/others/20200311153235.png)
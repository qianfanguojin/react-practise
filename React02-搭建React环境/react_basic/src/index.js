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
const myh1 = React.createElement('h1',null,'h1标题');
ReactDOM.render(myh1,document.getElementById('app'));

const myDiv = React.createElement();
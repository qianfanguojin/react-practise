const HtmlWebpackPlugin =  require('html-webpack-plugin');
const path = require("path");
//创建插件对象，使用path拼接当前项目的路径，如果直接写/,是相对于系统磁盘的，此时/不代表项目的根目录，因此需要使用path模块进行拼接
const htmlPlugin = new HtmlWebpackPlugin(
    {
        template:path.join((__dirname),"/src/index.html"),
        filename:"index.html"
    }
 );


module.exports ={
	mode:'development', //生成不压缩的代码，production：会压缩代码
    // webpack4.x中约定默认打包入口为src->index.js
   plugins:[htmlPlugin]
}
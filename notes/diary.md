* 创建以`·`开头的文件
```
1.创建txt文件，重名名为`.filename.`
2.`cmd`中输入`echo filecontent >.filename`
```

* js 点击复制内容

```js
function jsCopy(){
		var e=document.getElementById("content");//对象是content
		e.select(); //选择对象
		document.execCommand("Copy"); //执行浏览器复制命令
		alert("已复制好，可贴粘。");
}
```

* 电脑黑屏修复

```
cmd -> SLMGR -REARM
```

* 命令行生成文件（TXT、js、html、css...）
```
1、copy con 01.txt
2、输入内容
3、ctrl+D
4、enter（回车确定生成）
```

* 创建文件夹
```
mkdir images(文件夹名)
```

* 验证Github、Coding是否成功配置好SSH Keys
```
	ssh -T git@github.com
```

* 查看电脑是什么系统
```
systeminfo
```
* 查看电脑环境变量
```
set path
path
```
* 打开电脑系统设置
```
sysdm.cpl
```

* js取正整数（绝对值）

```javascript
var a = -5;
console.log(Math.abs(a))	// 5
```

* js保留两位有效数字

```javascirip
var a = 3.5
console.log(a.toFixed(2));	// 3.50
```

* node处理跨域请求
```javascript
var express = require('express');
var app = express();
//设置跨域访问
app.all('*', function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "X-Requested-With");
res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
res.header("X-Powered-By",' 3.2.1');
res.header("Content-Type", "application/json;charset=utf-8");
next();
});
//app.listen(8088);
```

* node+express跨域请求处理
```javascript
var express = require('express'); var app = express(); 
//设置跨域访问 
app.all('*', function(req, res, next) { 
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With"); 
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS"); res.header("X-Powered-By",' 3.2.1') 
	res.header("Content-Type", "application/json;charset=utf-8"); 
	next(); 
}); 
app.get('/auth/:id/:password', function(req, res) { 
	res.send({id:req.params.id, name: req.params.password}); 
}); 
app.listen(3000); 
console.log('Listening on port 3000...');
```

* 查看端口占用情况

```
netstat -ano
netstat -aon|findstr "49157" // 查看被占用端口的PID。
```

* node实时更新并不间断服务

```
npm install -g supervisor
```

### Math属性方法
---

* 对象属性

|属性|描述|
|:-----:|:------|
|E|返回算术常量 e，即自然对数的底数（约等于2.718）|
|LN2|返回 2 的自然对数（约等于0.693）|
|LN10|返回 10 的自然对数（约等于2.302）|
|LOG2E|返回以 2 为底的 e 的对数（约等于 1.414）|
|LOG10E|返回以 10 为底的 e 的对数（约等于0.434）|
|PI|返回圆周率（约等于3.14159）|
|SQRT1_2|返回返回 2 的平方根的倒数（约等于 0.707）|
|SQRT2|返回 2 的平方根（约等于 1.414）|

* 对象方法

|方法|描述|
|:---:|:---|
|ceil(x)|向上取整|
|floor(x)|向下取整|
|abs(x)|返回 x 的绝对值（取非负数）|
|pow(x,y)|返回 x 的 y 次幂|
|random()|返回 0 ~ 1 之间的随机数|
|round(x)|把数四舍五入为最接近的整数|
|sin(x)|返回数的正弦|
|sqrt(x)|返回数的平方根|
|acos(x)|返回 x 的反余弦值|
|asin(x)|	返回 x 的反正弦值|
|atan(x)|以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值|
|atan2(y,x)|返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）|
|cos(x)|返回数的余弦|
|exp(x)|返回 Ex 的指数|
|log(x)|返回数的自然对数（底为e）|
|max(x,y,z,...,n)|返回 x,y,z,...,n 中的最高值|
|min(x,y,z,...,n)|返回 x,y,z,...,n中的最低值|
|tan(x)|返回角的正切|


## jQuery

---

* class 包含

```
$('div').is('.div');// true || false
$('div').hasClass('div');// true || false
```

* class 添加

```
append() - 在被选元素的结尾插入内容
prepend() - 在被选元素的开头插入内容
after() - 在被选元素之后插入内容
before() - 在被选元素之前插入内容
```

### 选择器

----

* 属性选择器

```
$("[href]") 选取所有带有 href 属性的元素。
$("[href='#']") 选取所有带有 href 值等于 "#" 的元素。
$("[href!='#']") 选取所有带有 href 值不等于 "#" 的元素。
$("[href$='.jpg']") 选取所有 href 值以 ".jpg" 结尾的元素。
```

* 元素选择器

```
jQuery 使用 CSS 选择器来选取 HTML 元素。
$("p") 选取 <p> 元素。
$("p.intro") 选取所有 class="intro" 的 <p> 元素。
$("p#demo") 选取所有 id="demo" 的 <p> 元素。
````

### 方法

```
addClass()	向匹配的元素添加指定的类名。
after()		在匹配的元素之后插入内容。
append()	向匹配元素集合中的每个元素结尾插入由参数指定的内容。
appendTo()	向目标结尾插入匹配元素集合中的每个元素。
attr()		设置或返回匹配元素的属性和值。
before()	在每个匹配的元素之前插入内容。
clone()		创建匹配元素集合的副本。
detach()	从 DOM 中移除匹配元素集合。
empty()		删除匹配的元素集合中所有的子节点。
hasClass()	检查匹配的元素是否拥有指定的类。
html()		设置或返回匹配的元素集合中的 HTML 内容。
insertAfter()	把匹配的元素插入到另一个指定的元素集合的后面。
insertBefore()	把匹配的元素插入到另一个指定的元素集合的前面。
prepend()	向匹配元素集合中的每个元素开头插入由参数指定的内容。
prependTo()	向目标开头插入匹配元素集合中的每个元素。
remove()	移除所有匹配的元素。
removeAttr()	从所有匹配的元素中移除指定的属性。
removeClass()	从所有匹配的元素中删除全部或者指定的类。
replaceAll()	用匹配的元素替换所有匹配到的元素。
replaceWith()	用新内容替换匹配的元素。
text()		设置或返回匹配元素的内容。
toggleClass()	从匹配的元素中添加或删除一个类。
unwrap()	移除并替换指定元素的父元素。
val()		设置或返回匹配元素的值。
wrap()		把匹配的元素用指定的内容或元素包裹起来。
wrapAll()	把所有匹配的元素用指定的内容或元素包裹起来。
wrapinner()	将每一个匹配的元素的子内容用指定的内容或元素包裹起来。
```

* css 操作函数

```
css()	设置或返回匹配元素的样式属性。
height()	设置或返回匹配元素的高度。
offset()	返回第一个匹配元素相对于文档的位置。
offsetParent()	返回最近的定位祖先元素。
position()	返回第一个匹配元素相对于父元素的位置。
scrollLeft()	设置或返回匹配元素相对滚动条左侧的偏移。
scrollTop()	设置或返回匹配元素相对滚动条顶部的偏移。
width()	设置或返回匹配元素的宽度。
```

* 遍历

```
.add()	将元素添加到匹配元素的集合中。
.andSelf()	把堆栈中之前的元素集添加到当前集合中。
.children()	获得匹配元素集合中每个元素的所有子元素。
.closest()	从元素本身开始，逐级向上级元素匹配，并返回最先匹配的祖先元素。
.contents()	获得匹配元素集合中每个元素的子元素，包括文本和注释节点。
.each()	对 jQuery 对象进行迭代，为每个匹配元素执行函数。
.end()	结束当前链中最近的一次筛选操作，并将匹配元素集合返回到前一次的状态。
.eq()	将匹配元素集合缩减为位于指定索引的新元素。
.filter()	将匹配元素集合缩减为匹配选择器或匹配函数返回值的新元素。
.find()	获得当前匹配元素集合中每个元素的后代，由选择器进行筛选。
.first()	将匹配元素集合缩减为集合中的第一个元素。
.has()	将匹配元素集合缩减为包含特定元素的后代的集合。
.is()	根据选择器检查当前匹配元素集合，如果存在至少一个匹配元素，则返回 true。
.last()	将匹配元素集合缩减为集合中的最后一个元素。
.map()	把当前匹配集合中的每个元素传递给函数，产生包含返回值的新 jQuery 对象。
.next()	获得匹配元素集合中每个元素紧邻的同辈元素。
.nextAll()	获得匹配元素集合中每个元素之后的所有同辈元素，由选择器进行筛选（可选）。
.nextUntil()	获得每个元素之后所有的同辈元素，直到遇到匹配选择器的元素为止。
.not()	从匹配元素集合中删除元素。
.offsetParent()	获得用于定位的第一个父元素。
.parent()	获得当前匹配元素集合中每个元素的父元素，由选择器筛选（可选）。
.parents()	获得当前匹配元素集合中每个元素的祖先元素，由选择器筛选（可选）。
.parentsUntil()	获得当前匹配元素集合中每个元素的祖先元素，直到遇到匹配选择器的元素为止。
.prev()	获得匹配元素集合中每个元素紧邻的前一个同辈元素，由选择器筛选（可选）。
.prevAll()	获得匹配元素集合中每个元素之前的所有同辈元素，由选择器进行筛选（可选）。
.prevUntil()	获得每个元素之前所有的同辈元素，直到遇到匹配选择器的元素为止。
.siblings()	获得匹配元素集合中所有元素的同辈元素，由选择器筛选（可选）。
.slice()	将匹配元素集合缩减为指定范围的子集。
```

* 数据

```
.clearQueue()	从队列中删除所有未运行的项目。
.data()	存储与匹配元素相关的任意数据。
jQuery.data()	存储与指定元素相关的任意数据。
.dequeue()	从队列最前端移除一个队列函数，并执行它。
jQuery.dequeue()	从队列最前端移除一个队列函数，并执行它。
jQuery.hasData()	存储与匹配元素相关的任意数据。
.queue()	显示或操作匹配元素所执行函数的队列。
jQuery.queue()	显示或操作匹配元素所执行函数的队列。
.removeData()	移除之前存放的数据。
jQuery.removeData()	移除之前存放的数据。
```

* DOM元素方法

```
.get()	获得由选择器指定的 DOM 元素。
.index()	返回指定元素相对于其他指定元素的 index 位置。
.size()	返回被 jQuery 选择器匹配的元素的数量。
.toArray()	以数组的形式返回 jQuery 选择器匹配的元素。
```

## CSS3 选择器

```
.class	.intro	选择 class="intro" 的所有元素。	
#id	#firstname	选择 id="firstname" 的所有元素。	
*	*	选择所有元素。	
element	p	选择所有 <p> 元素。	
element,element	div,p	选择所有 <div> 元素和所有 <p> 元素。	
element element	div p	选择 <div> 元素内部的所有 <p> 元素。	
element>element	div>p	选择父元素为 <div> 元素的所有 <p> 元素。	
element+element	div+p	选择紧接在 <div> 元素之后的所有 <p> 元素。	
[attribute]	[target]	选择带有 target 属性所有元素。	
[attribute=value]	[target=_blank]	选择 target="_blank" 的所有元素。	
[attribute~=value]	[title~=flower]	选择 title 属性包含单词 "flower" 的所有元素。	
[attribute|=value]	[lang|=en]	选择 lang 属性值以 "en" 开头的所有元素。	
:link	a:link	选择所有未被访问的链接。	
:visited	a:visited	选择所有已被访问的链接。	
:active	a:active	选择活动链接。	
:hover	a:hover	选择鼠标指针位于其上的链接。	
:focus	input:focus	选择获得焦点的 input 元素。	
:first-letter	p:first-letter	选择每个 <p> 元素的首字母。	
:first-line	p:first-line	选择每个 <p> 元素的首行。	
:first-child	p:first-child	选择属于父元素的第一个子元素的每个 <p> 元素。
:before	p:before	在每个 <p> 元素的内容之前插入内容。	
:after	p:after	在每个 <p> 元素的内容之后插入内容。	
:lang(language)	p:lang(it)	选择带有以 "it" 开头的 lang 属性值的每个 <p> 元素。	
element1~element2	p~ul	选择前面有 <p> 元素的每个 <ul> 元素。	
[attribute^=value]	a[src^="https"]	选择其 src 属性值以 "https" 开头的每个 <a> 元素。	
[attribute$=value]	a[src$=".pdf"]	选择其 src 属性以 ".pdf" 结尾的所有 <a> 元素。	
[attribute*=value]	a[src*="abc"]	选择其 src 属性中包含 "abc" 子串的每个 <a> 元素。	
:first-of-type	p:first-of-type	选择属于其父元素的首个 <p> 元素的每个 <p> 元素。	
:last-of-type	p:last-of-type	选择属于其父元素的最后 <p> 元素的每个 <p> 元素。	
:only-of-type	p:only-of-type	选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。	
:only-child	p:only-child	选择属于其父元素的唯一子元素的每个 <p> 元素。	
:nth-child(n)	p:nth-child(2)	选择属于其父元素的第二个子元素的每个 <p> 元素。	
:nth-last-child(n)	p:nth-last-child(2)	同上，从最后一个子元素开始计数。	
:nth-of-type(n)	p:nth-of-type(2)	选择属于其父元素第二个 <p> 元素的每个 <p> 元素。	
:nth-last-of-type(n)	p:nth-last-of-type(2)	同上，但是从最后一个子元素开始计数。	
:last-child	p:last-child	选择属于其父元素最后一个子元素每个 <p> 元素。	
:root	:root	选择文档的根元素。
:empty	p:empty	选择没有子元素的每个 <p> 元素（包括文本节点）。
:target	#news:target	选择当前活动的 #news 元素。	
:enabled	input:enabled	选择每个启用的 <input> 元素。	
:disabled	input:disabled	选择每个禁用的 <input> 元素
:checked	input:checked	选择每个被选中的 <input> 元素。
:not(selector)	:not(p)	选择非 <p> 元素的每个元素。	
::selection	::selection	选择被用户选取的元素部分。
```

* js去掉空格

先后空格
```
// 原生js方法：
function Trim(str){ 
	return str.replace(/(^\s*)|(\s*$)/g, ""); 
}

// jq方法
$.trim(str)
```

所有空格
```
function Trim(str,is_global){
		var result;
		result = str.replace(/(^\s+)|(\s+$)/g,"");
		if(is_global.toLowerCase()=="g"){
			result = result.replace(/\s/g,"");
		}
		return result;
}
```

### url中文编码和解码

```
将url中非英文部分（包括【://?=&】）编码为16进制
编码：
encodeURIComponent('周');// %e5%91%a8
encodeURIComponent('?');// %3F
解码：
decodeURIComponent('%e5%91%a8');// 周
```

* jquery--对象合并

```
/*
使用jQuery提供的辅助方法$.extend(target, obj1, obj2, ...)，它把多个object对象的属性合并到第一个target对象中，遇到同名属性，总是使用靠后的对象的值，也就是越往后优先级越高
*/
// 把默认值和用户传入的options合并到对象{}中并返回:
var opts = $.extend({}, {
    backgroundColor: '#00a8e6',
    color: '#ffffff'
}, options);
```

* jquery--方法扩展

```
1.
$.fn.highlight2 = function (options) {
	// 要考虑到各种情况:
	// options为undefined
	// options只有部分key
	var bgcolor = options && options.backgroundColor || '#fffceb';
	var color = options && options.color || '#d85030';
	this.css('backgroundColor', bgcolor).css('color', color);
	return this;
}
2.
$.fn.highlight = function (options) {
    // 合并默认值和用户设定值:
    var opts = $.extend({}, $.fn.highlight.defaults, options);
    this.css('backgroundColor', opts.backgroundColor).css('color', opts.color);
    return this;
}
// 设定默认值:
$.fn.highlight.defaults = {
    color: '#d85030',
    backgroundColor: '#fff8de'
}
```

* 移动端webAPP拨打电话

```html
1、移动web页面自动探测电话号码
<meta name="format-detection" content="telephone=no">
<meta http-equiv="x-rim-auto-match" content="none">
2、电话短信功能
<a href="tel:12345678901">拨打电话</a>
<a href="sms:12345678901">发送短信</a>
3、微信端防止屏蔽
<a href="tel:10086#mp.weixin.qq.com">一键拨号</a>
```

* jq自定义选择器

```js
定义：
$.expr[':'].withAttr = function(obj, index, meta, stack){
  return ($(obj).attr(meta[3]) != '');
};
使用：
$('a:withAttr(rel)').css('background-color', 'yellow');
```

* node——proxy代理

```js
const express = require('express');
const proxy = require('http-proxy-middleware');//引入代理中间件
const app = express();
app.use(express.static('./'));
//app.use(express.static('client'));
// Add middleware for http proxying
const apiProxy = proxy('/api', { target: 'https://dev.badoufax.com',changeOrigin: true });
app.use('/api/*', apiProxy);//api子目录下的都是用代理
//app.use('*', apiProxy);//api子目录下的都是用代理
// Render your site
app.get('/index.html', function(req,res){
  res.sendFile(__dirname+'/index.html');
});
var port = 3001;
var host = '192.168.1.187';
app.listen(port,host, () => {
  console.log('Listening on: http://'+host+':'+port);
});
````

### jQuery 

* event

```js
// ev : event对象
// ev.pageX(相对于文档的) : clientX(相对于可视区)
// ev.which : keyCode
// ev.preventDefault();  //阻止默认事件
// ev.stopPropagation();  //阻止冒泡的操作
// return false;   //阻止默认事件 + 阻止冒泡的操作
$('#div1').on('click',{name:'hello'},function(ev){
//alert(ev.data.name);// 数据
//alert( ev.target );// 事件源
alert( ev.type );// 事件类型
});
```

* offset

```js
//alert( $('#div2').offset().left );  
//获取到屏幕的左距离
alert( $('#div2').position().left );  
//到有定位的父级的left值,把当前元素转化成类似定位的形式
```

* parent和offsetParent

```js
//parent() : 获取父级
//offsetParent() : 获取有定位的父级
//$('#div2').parent().css('background','blue');
$('#div2').offsetParent().css('background','blue');
```

* get——jq转化原生js

```js
//get() : 就是把JQ转成原生JS
//alert( $('#div1').get(0).innerHTML );
for(var i=0;i<$('li').length;i++){
	$('li').get(i).style.background = 'red';
	//$('li')[i].style.background = 'red';
}
```

* offsetWidth和outerWidth

```js
//offsetWidth : 是获取不到隐藏元素的值（display:none;的元素）
//outerWidth : 可获取到隐藏元素的值
//alert( $('#div1').get(0).offsetWidth );
alert( $('#div1').outerWidth() );
```

* detach——删除

```js
//detach() : 跟remove方法一样，只不过会保留删除这个元素的操作行为(事件操作)
```

* clone——克隆

```js
//$('div').appendTo( $('span') );
//$('span').get(0).appendChild( $('div').get(0) );
//clone() : 可以接收一个参数 ，作用可以复制之前的操作行为
$('div').click(function(){
	alert(123);
});
$('div').clone(true).appendTo( $('span') );
```

* wrap——包装

```js
//wrap() : 包装
//wrapAll() : 整体包装
//wrapInner() : 内部包装
//unwrap() : 删除包装 ( 删除父级 : 不包括body )
$(function(){
	//$('span').wrapInner('<div>');
	$('span').unwrap();
});
```

* animate——运动

```js
//animate() : 
//第一个参数 : {} 运动的值和属性
//第二个参数 : 时间(运动快慢的)  默认 : 400
//第三个参数 : 运动形式 只有两种运动形式 ( 默认 : swing(慢快慢) linear(匀速) )
//第四个参数 :  回调函数
$(this).animate({width : 300 , height : 300} , 4000 , 'linear',function(){
	alert(123);
});
$(this).animate({width : 300} , 2000).delay(1000).animate({height : 300} , 2000);
// delay:延迟1000ms启动
//$('#div1').stop();   //默认 : 只会阻止当前运动
//$('#div1').stop(true); //阻止后续的运动
//$('#div1').stop(true,true); //可以立即停止到指定的目标点
$('#div1').finish();  //立即停止到所有指定的目标点
```

* delegate——事件委托

```js
$('ul').delegate('li','click',function(){
	this.style.background = 'red';
	$('ul').undelegate();// 删除委托
});
```

* trigger——主动触发

```js
// 可用于自定义事件
$('#div1').on('show',function(){
	alert(123);
});
$('#div1').on('show',function(){
	alert(456);
});
$('#div1').trigger('show');
```	

* has-no-filter

```js
// has : 包含
//filter : 过滤
//not : filter的反义词
//$('div').has('span').css('background','red');
//$('div').has('.box').css('background','red');
$('div').filter('.box').css('background','red');
```

* jq工具方法

```js
//$().css()  $().html()  $().val()  : 只能给JQ对象用
//$.xxx()  $.yyy()  $.zzz()  : 不仅可以给JQ用，也可以给原生JS用 : 叫做工具方法
//var a = null;
//$.type() : 也是判断类型
//alert( typeof a );
//alert( $.type(a) );
var str = '   hello  ';
alert('('+$.trim(str)+')');
//inArray() : 类似于 indexOf
//var arr = ['a','b','c','d'];
//alert(  $.inArray('b',arr)  );
//proxy()  : 改变this指向的
function show(n1,n2){
	alert(n1);
	alert(n2);
	alert(this);
}
//show();
//$.proxy(show , document,3)(4);
$(document).click( $.proxy(show,window,3,4)  );
```

* jquery($)冲突解决

```js
//$ , jQuery
//noConflict() : 防止冲突的
/*var miaov = $.noConflict();
var $ = 10;
miaov(function(){
	miaov('body').css('background','red');
});*/
//var str = '{"name":"hello"}';
//alert($.parseJSON( str ).name);
window.onload = function(){
	var aDiv = document.getElementsByTagName('div');  //类数组
	$.makeArray(aDiv).push();
};
```

* jq方法拓展

```js
//$.extend : 扩展工具方法下的插件形式  
// 调用：$.xxx(传值)——$.xxx() $.yyy()
//$.fn.extend  :  扩展到JQ对象下的插件形式  
// 调用：jq对象.xxx()——$().xxx()  $().yyy()
```

* jq页面高度自适应

```js
window.onready = function(){
	var hOther = $('.header').height()+$('.footer').height();
	getH();
	$(window).resize(getH);
	function getH(){
		var mHeight = $(window).height() - hOther;
		if(mHeight>400){
			$('.main').css('height',mHeight+'px');
		}else{
			$('.main').css('height','400px');
		}
	}
}
```





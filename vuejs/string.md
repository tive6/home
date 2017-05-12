# 字符串

* length——长度

```
var str='zmnaer';
console.log(str.length);// 6
/*引号中间的空格也算长度*/
```

* charAt()

```
var str='zmnaer';
console.log(str.charAt());// z
console.log(str.charAt(0));// z
console.log(str.charAt(11));// (空)
console.log(str.charAt(-1));// (空)
/*不写值，默认为0，大于字符串最大长度和取负数都返回值为空*/
```

* charCodeAt()——Unicode编码值

```
alert('周'.charCodeAt());// 21608
```

* fromCharCode()——反译Unicode码

```
console.log(String.fromCharCode(21608,22937));// 周妙
```

* substring

```
var str='这是一个字符串';
console.log(str.substring(2));// 一个字符串
console.log(str.substring(0,2));// 这是
console.log(str.substring(2,0));// 这是
console.log(str.substring());// 这是一个字符串
console.log(str.substring(0));// 这是一个字符串
console.log(str.substring(-3,2));// 这是
console.log(str.substring(2,-3));// 这是
/*
*不写参数默认为0，取所有
*两个参数，会自动排序，值小的在前，大的在后
*负数为自动转化为0
*/
```

* slice

```
var str='这是一个字符串';
console.log(str.slice(4));// 字符串
console.log(str.slice(-2));// 符串
console.log(str.slice(0,2));// 这是
console.log(str.slice(2,0));// （空）
console.log(str.slice(-2,-4));// 个字
```

* toUpperCase()——转换成大写

```
console.log('zmnaer'.toUpperCase());// ZMNAER
```

* toLowerCse()——转换成小写

```
console.log('ZMnaer'.toLowerCse());// zmnaer
```

* split——切割字符串

```
var str='www.zmnaer.com';
console.log(str.split('.');// ['www','zmnaer','com']
console.log('zmnaer'.split());// ['zmnaer']
console.log('zmnaer'.split(''));// ['z','m','n','a','e','r']
console.log('zmnaer'.split('m'));// ['z','naer']
```






















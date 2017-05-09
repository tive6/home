# 字符串

* charCodeAt()——unicode编码值

```
alert('周'.charCodeAt());// 21608
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





















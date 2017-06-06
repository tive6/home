# 正则表达式（RegExp）

----

## 正则的方法

1. test // 检测
2. match // 获取匹配的项目
3. search // 字符串搜索
4. replcae // 对象替换

* 创建正则对象

```
1、方法一：
/* 正则区分大小写 */
var str = 'hgdfa';
var re = new RegExp('a','i');// i (ignore)忽略大小写
console.log(re.test(str));// true
2、方法二：
var re = /a/i;// 推荐写法
console.log(re.test(str));// true
```

* search——查找字符串的位置

```
var str = 'abcdefab';
console.log(str.search('b'));// 1
/* 只查找第一次出现的位置 */
```

* replace——字符串替换

```
var str = 'abcdCec';
console.log(str.replace('c','T'));// 'abTdCec'
/* 只替换第一次出现的字符 */
console.log(str.replace(/c/gi,'T'));// 'abTdTeT'
```

* 匹配所有数字

```
var str = '12 0asd,5asd2,asd585 51+as5 844f 5 549';
var re = /\d/g; // g：global (全部)
console.log(str.match(re)); // match返回匹配到的数字
```

* 正则

|正则|表示|
|:----:|:----:|
|\d|数字,相当于[0-9]|
|+|任意长度，表示不确定，相当于{1,}（+前边所表示的数量）|
|丨|或者，相当于js中的或|
|1[abc]2|[]中只匹配任意一位，1a2,1b2,1c2|
|[^a]|除了a以外的任意字符|
|\w|[a-z0-9_]|
|\s|空格、tab|
|\D|[^0-9],除了数字|
|\W|[^a-z0-9_]，除了字母，下划线|
|\S|除了空格|
|{n,m}|最少n次，最多m次|
|{n,}|最少n次，最多不限|
|{,m}|最少不限，最多m次|
|{n}|正好n次，不多不少|
|*|相当于{0,}，可有可无|
|?|相当于{0,1}|
|.|可以用\ .表示|
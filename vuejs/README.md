# vue

## 实例化

```javascript
new Vue({
    el:'#box',              // 选择器 class id elements
    data:{
        msg:'welcome vue'
    }
});
```        

## 指令

|指令|简写|
|:---:|:---:|
|v-on:click|@click|
|v-bind:src|:src|


## 事件深入

* 事件对象

```javascript
@click($event)
methods:{
  fn:fn(e){
    e.clientX
  }
}
```

* 事件冒泡

1. e.cancelBubble = true;
2. @click.stop="show()" // 推荐

* 默认行为

1. e.preventDefault();
1. @contextmenu.prevent="show()"    // 推荐

* 键盘事件

1. @keydown/keyup
2. e.keyCode    // 键值
2. @keyup.13="" // 事件触发 等同于下边
2. @keyup.enter="" // 事件触发
2. @keyup.up/down/left/right="" // 事件触发
2. @keydown.up/down/left/right="" // 事件触发

## 属性

* 常见属性

1. v-bind:src
1. :src // 简写
1. :src/width/id/title

#### class

用法一：

```
<style>
    .red{
        color: red;
    }
    .bule{
        background: blue;
    }
</style>

<p :class="[red,b]">文字....</p>

Vue({
    data:{
        red:'red',
        b:'blue'
    }
})
```

用法二：

```
<style>
    .red{
        color: red;
    }
    .bule{
        background: blue;
    }
</style>

<p :class="{red:true,blue:true}">文字....</p>
```

用法三：

```
<style>
    .red{
        color: red;
    }
    .bule{
        background: blue;
    }
</style>

<p :class="{red:a,blue:b}">文字....</p>

Vue({
    data:{
        a:true,   
        b:false
    }
})
```

用法四：

```
<style>
    .red{
        color: red;
    }
    .bule{
        background: blue;
    }
</style>

<p :class="json">文字....</p>

Vue({
    data:{
        json:{
            red:true,
            blue:false
        }
    }
})
```

---- 

#### style

用法三：

```
<style>
    .red{
        color: red;
    }
    .bule{
        background: blue;
    }
</style>

<p :class="{red:a,blue:b}">文字....</p>

Vue({
    data:{
        a:true,   
        b:false
    }
})
```

## 模板









# 组件通信

* props 父——>子组件通信

* 父组件

```
export default {
    data:function(){
        return {
            arr:[]
        }
    }
}

```

* 子组件

```
export default {
    pros:{
        arr:{
            type:Object
        }
    }
}

```




# ajax交互

## `vue-resouce`的ajax请求

* 引入vue-resouce

### get 请求

```
/*获取一个普通文本数据:*/
this.$http.get('aa.txt').then(function(res){
    alert(res.data);
},function(res){
    alert(res.status);
});
/*给服务发送数据:*/
this.$http.get('get.php',{
    a:1,
    b:2
}).then(function(res){
    alert(res.data);
},function(res){
    alert(res.status);
});
```

### post 请求

```
this.$http.post('post.php',{
    a:1,
    b:20
},{
    emulateJSON:true
}).then(function(res){
    alert(res.data);
},function(res){
    alert(res.status);
});
```

### jsonp 请求

```
/*
https://sug.so.360.cn/suggest?callback=suggest_so&word=a
https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a&cb=jshow
*/
this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
    wd:'a'
},{
    jsonp:'cb'	//callback名字，默认名字就是"callback"
}).then(function(res){
    alert(res.data.s);
},function(res){
    alert(res.status);
});
```

## `axios`的ajax请求

* 安装：`npm i axios -D`

* 引入：`import axios from 'axios'`

### 配置参数

```
/*
* 关于 axios 配置
axios.defaults.baseURL = 'http://localhost:8080/'; // 配置请求根路径
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded'; // 配置 post 请求头
 */
Vue.prototype.$http = axios;// 将 axios对象 挂在到 Vue 原型上
axios.interceptors.request.use(function(req){// 发起请求
   store.dispatch('show');
    return req;
},function(err){
    return Promise.reject(err);
});
axios.interceptors.response.use(function(res){// 返回响应
   store.dispatch('hide');
    return res;
},function(err){
    return Promise.reject(err);
});

```

### 使用

```javascript
export dedault {
    data:function(){
        return {
            data:[]
        }
    }
    mounted:{
        this.fetchData() // 在 Vue 实例化完成后 调用 methods 中定义的方法
    },
    methods:{ // 定义方法
        fetchData:function(){
            vat this = _this;
            this.$http.get('src/data/index.data').then(function(res){ // res.data 是 get 请求返回的数据 
                _this.data = res.data;
            }).catch(function(err){ // catch 抛出错误
                console.log(err);
            });
        }
    }
}
```



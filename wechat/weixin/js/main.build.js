/**
 * @author keeying wenkun0526@live.cn
 * @version 1.0.0
 * @copyright 八斗金服版权所有
 */
require.config({
  baseUrl: 'weixin/js',
  paths: {
    // 外部库／插件
    'jquery': 'wechat/vendor',
    'cookie': 'wechat/vendor',
    'jqueryForm': 'wechat/vendor',
    'swiper': 'wechat/vendor',
    'iScroll': 'wechat/vendor',
    'ImagePicker': 'wechat/vendor',
    'Transform': 'wechat/vendor',
    'AlloyFinger': 'wechat/vendor',
    'AlloyCrop': 'wechat/vendor',
    // 公共配置／工具类、方法
    'config': 'wechat/app',
    'util': 'wechat/app',
    'AsyncTaskManager': 'wechat/app',
    'WebView': 'wechat/app',
    'localFileReader': 'wechat/app',
    'Interceptor': 'wechat/app',
    'swipeLoader': 'wechat/app',

    // 实体类
    'Result': 'wechat/app',
    'User': 'wechat/app',
    'Underlying': 'wechat/app',
    'Record': 'wechat/app',
    'Asset': 'wechat/app',
    'Bond': 'wechat/app',
    'CapitalFlow': 'wechat/app',
    'Fuiou': 'wechat/app',
    'Feedback': 'wechat/app',
    'Focus': 'wechat/app',
    'Overview': 'wechat/app',
    'Booking': 'wechat/app',
    'Project': 'wechat/app',
    'Message': 'wechat/app',
    'District': 'wechat/app',
    'Bank': 'wechat/app',
    'H5Urls': 'wechat/app',

    // 服务层
    'appService': 'wechat/app',
    'bondService': 'wechat/app',
    'userService': 'wechat/app',
    'investService': 'wechat/app',
    'ajaxFileUploadService': 'wechat/app',

    // 控制器
    'appController': 'wechat/app',
    'bondController': 'wechat/app',
    'userController': 'wechat/app',
    'investController': 'wechat/app',
    'ajaxFileUploadController': 'wechat/app',

    // 活动相关
    'activityService': 'wechat/activity',
    'activityController': 'wechat/activity',
    'Shake': 'wechat/activity',
  },
  waitSeconds: 600
});

require([
  'Interceptor'
], function(
  Interceptor
) {
  'use strict';
  var url = window.location.pathname;
  url = url.substring(url.lastIndexOf('/') + 1);
  Interceptor.loginPageInterceptor(null, url);
});
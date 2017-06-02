/**
 * @author keeying wenkun0526@live.cn
 * @version 1.0.0
 * @copyright 八斗金服版权所有
 */
require.config({
  baseUrl: 'weixin/js',
  paths: {
    // 外部库／插件
    'jquery': [
      '//cdn.bootcss.com/jquery/1.12.4/jquery.min',
      'lib/jquery/1.12.4/jquery.min'
    ],
    'jqueryForm': [
      '//cdn.bootcss.com/jquery.form/3.51/jquery.form.min',
      'lib/jquery.form/3.51/jquery.form.min'
    ],
    'cookie': [
      // '//cdn.bootcss.com/cookie.js/1.1.0/cookie.min',
      'lib/cookie/1.1.0/cookie.min'
    ],
    'swiper': [
      '//cdn.bootcss.com/Swiper/3.4.2/js/swiper.min',
      'lib/swiper/3.4.2/swiper.min'
    ],
    'iScroll': [
      '//cdn.bootcss.com/iScroll/5.2.0/iscroll-infinite.min',
      'lib/iscroll/5.2.0/iscroll-infinite.min'
    ],
    'ImagePicker': 'plugins/imagePicker/index',
    'Transform': 'plugins/imagePicker/transform',
    'AlloyFinger': 'plugins/imagePicker/alloyFinger',
    'AlloyCrop': 'plugins/imagePicker/alloyCrop',
    // 公共配置／工具类、方法
    'config': 'settings',
    'util': 'common/util',
    'AsyncTaskManager': 'common/AsyncTaskManager',
    'WebView': 'common/webView',
    'localFileReader': 'common/localFileReader',
    'Interceptor': 'common/interceptor',
    'swipeLoader': 'common/swipeLoader',

    // 实体类
    'Result': 'model/result',
    'User': 'model/user',
    'Underlying': 'model/underlying',
    'Record': 'model/record',
    'Asset': 'model/asset',
    'Bond': 'model/bond',
    'CapitalFlow': 'model/capitalFlow',
    'Fuiou': 'model/fuiou',
    'Feedback': 'model/feedback',
    'Focus': 'model/focus',
    'Overview': 'model/overview',
    'Booking': 'model/booking',
    'Project': 'model/project',
    'Message': 'model/message',
    'District': 'model/district',
    'Bank': 'model/bank',
    'H5Urls': 'model/h5urls',

    // 服务层
    'appService': 'service/appService',
    'bondService': 'service/bondService',
    'userService': 'service/userService',
    'investService': 'service/investService',
    'ajaxFileUploadService': 'service/ajaxFileUploadService',

    // 控制器
    'appController': 'controller/appController',
    'bondController': 'controller/bondController',
    'userController': 'controller/userController',
    'investController': 'controller/investController',
    'ajaxFileUploadController': 'controller/ajaxFileUploadController',

    // 活动相关
    'Shake': '../../activity/js/lib/shake/shake',
    'activityService': '../../activity/js/service',
    'activityController': '../../activity/js/controller'
  },
  waitSeconds: 600
});

require([
  'Interceptor'
  // 'jquery', 'jqueryForm', 'cookie', 'swiper', 'iScroll',
  // 'config', 'util',
  // 'Result', 'User', 'Underlying', 'Record',
  // 'appService', 'userService', 'investService', 'ajaxFileUploadService',
  // 'appController', 'userController', 'investController' , 'ajaxFileUploadController'
], function (
  Interceptor
  // $, jqueryForm, cookie, Swiper, IScroll,
  // config, util, Result, User, Underlying, Record,
  // appService, userService, investService,
  // appController, userController, investController
) {
    'use strict';
    var url = window.location.pathname;
    url = url.substring(url.lastIndexOf('/') + 1);

    Interceptor.loginPageInterceptor(null, url);
  });
require.config({
  baseUrl: 'C:/Users/Zwk/Desktop/wechat/weixin/js',
  paths: {
    // 外部库／插件
    'jquery': 'lib/jquery/1.12.4/jquery.min',
    'jqueryForm': 'lib/jquery.form/3.51/jquery.form.min',
    'cookie': 'lib/cookie/1.1.0/cookie.min',
    'swiper': 'lib/swiper/3.3.1/swiper.min',
    'iScroll': 'lib/iscroll/5.2.0/iscroll-infinite.min',
    'Shake': '../../activity/js/lib/shake/shake',
    'ImagePicker': 'plugins/imagePicker/index',
    'Transform': 'plugins/imagePicker/transform',
    'AlloyFinger': 'plugins/imagePicker/alloyFinger',
    'AlloyCrop': 'plugins/imagePicker/alloyCrop',
    'Chart':'lib/chart/Chart.min',
    // 公共配置／工具类、方法
    'config': 'settings.build',
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
    'Bond': 'model/Bond',
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
    // 活动
    'activityService': '../../activity/js/service',
    'activityController': '../../activity/js/controller',
  }
});
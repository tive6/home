(function (factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * @module {Interceptor} Interceptor
     */
    define('Interceptor', [
      'jquery', 'config', 'util', 'userService'
    ], factory);
  } else {
    window.Interceptor = factory();
  }
}(function ($, config, util, userService) {
  'use strict';
  var INSTANCE = null;

  /**
   * 构造器
   * @constructor {Interceptor} Interceptor
   */
  function Interceptor() {}

  /**
   * 需要登录才允许访问的页面
   * @param {string} page 页面
   */
  Interceptor.prototype.loginPageInterceptor = function (user, page) {
    // console.log(page);
    var include = true,
      _isLogin = null;
    // console.log(config.LOGIN_INTERCEPTOR_EXCLUDE_REG.test(page));
    if (!config.LOGIN_INTERCEPTOR_EXCLUDE_REG.test(page)) {
      _isLogin = userService.isLogin(user);
      // console.log(_isLogin);

      if (!_isLogin.getStatus()) {
        util.jump2LoginPage(window.location.href);
      }
    }

    // $.each(config.LOGIN_INTERCEPTOR_EXCLUDE, function (index, item) {
    //   if (item === page) {
    //     return (include = false);
    //   }
    //   console.log(index);
    // });

    // if (include) {
    //   _isLogin = userService.isLogin(null);

    //   if (!_isLogin.getStatus()) {
    //     window.location = config.BASE_URL + config.SERVICE_URI_MAP.LOGIN_PAGE;
    //   }
    // }

  };

  if (INSTANCE === null) {
    INSTANCE = new Interceptor();
  }

  return INSTANCE;
}));
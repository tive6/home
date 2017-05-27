(function ($) {
  'use strict';
  var util = HL.util;
  var config = HL.config;
  HL.userService = {
    /**
     * @description 注册
     * @argument user 注册用户信息
     * @argument succCallback 请求成功回调
     * @argument errCalllback 请求失败回调
     */
    register: function (user, succCallback, errCallback) {
      var url = config.SERVICE_URL + config.SERVICE_URI_MAP.LOGIN;
      doFetch(url, user, succCallback, errCallback, 'userService.register');
    },
    /**
     * @description 登录
     * @argument user 登录用户信息
     * @argument succCallback 请求成功回调
     * @argument errCalllback 请求失败回调
     */
    login: function (user, succCallback, errCallback) {
      var url = config.SERVICE_URL + config.SERVICE_URI_MAP.LOGIN;
      doFetch(url, user, succCallback, errCallback, 'userService.login');
    },
  };

  function doFetch(url, data, succCallback, errCallback, fnName) {
    console.info('............' + (fnName ? fnName : '') + '.............');
    console.info('fetch: ' + url);
    console.info(data);
    $.ajax({
      url: url,
      data: util.JSONStringify2(data)
    }).then(function (res) {
      console.log(res);
      if (typeof succCallback == 'function') {
        succCallback(res);
      }
    }, function (xhr, status, error) {
      console.log(error);
      if (typeof errCallback == 'function') {
        errCallback(xhr, status, error);
      }
    });
  }
}(jQuery));
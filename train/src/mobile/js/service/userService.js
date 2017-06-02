(function ($, cookie) {
  'use strict';
  var util = HL.util;
  var config = HL.config;
  HL.userService = {
    /**
     * 从本地存储获（cookie）取登录用户
     */
    getLoginUserFromLocalStorage: function () {
      try {
        return util.parseJSON(decodeURIComponent(cookie.get(config.LOGIN_COOKIE_NAME)));
      } catch (error) {
        return null;
      }
    },
    /**
     * 重置密码
     * @param {Object} user 用户信息
     * @param {Function} succCallback 请求成功回调
     * @param {Function} errCalllback 请求失败回调
     * actionCode : H921003
     */
    resetPassword: function (user, succCallback, errCallback) {
      var url = config.SERVICE_URL + config.SERVICE_URI_MAP.RESET_PASSWORD;
      doFetch(url, user, succCallback, errCallback, 'H921003')
    },
    /**
     * 注册
     * @param {Object} user 注册用户信息
     * @param {Function} succCallback 请求成功回调
     * @param {Function} errCalllback 请求失败回调
     * actionCode : H921001
     */
    register: function (user, succCallback, errCallback) {
      var url = config.SERVICE_URL + config.SERVICE_URI_MAP.REGISTER;
      doFetch(url, user, succCallback, errCallback, 'H921001');
    },
    /**
     * 登录
     * @param {Object} user 登录用户信息
     * @param {Function} succCallback 请求成功回调
     * @param {Function} errCalllback 请求失败回调
     * actionCode : H921002
     */
    login: function (user, succCallback, errCallback) {
      var url = config.SERVICE_URL + (user.hasOwnProperty('pwd') ? config.SERVICE_URI_MAP.LOGIN : config.SERVICE_URI_MAP.LOGIN_CODE);
      doFetch(url, user, succCallback, errCallback, 'H921002');
    },
  };

  /**
   * 发起请求
   * @param {String} url 
   * @param {Object} data 
   * @param {Function} succCallback 请求成功回调
   * @param {Function} errCalllback 请求失败回调
   * @param {String} actionCode 请求接口编号
   */
  function doFetch(url, params, succCallback, errCallback, actionCode) {
    console.info('............' + (actionCode || '') + '.............');
    console.info('fetch: ' + url);
    console.info(params);
    $.ajax({
      url: url,
      data: util.JSONStringify(params)
    }).then(function (res) {
      var _res = {
        status: true,
        msg: '',
        data: null,
        sign: ''
      };
      console.log(res);
      var _status = res.data.status;
      _res.msg = res.data.msg || '';
      _res.sign = res.sign;
      if (_status == config.LOGIN_FAILURE_STATUS_CODE) {
        _res.status = _status;
      } else if (_status == '1') {
        _res.data = res.data.data || null;
      } else {
        // (_status == '0')
        _res.status = false;
      }
      console.log(_res);
      executeCallback(_res, succCallback);
    }, function (xhr, status, error) {
      handleError(status, actionCode, errCallback);
    });
  }

  /**
   * ajax 错误处理
   * @param {String} errCode 
   * @param {Function} errCallback 
   */
  function handleError(status, errCode, errCallback) {
    var errMsg = '';
    switch (status) {
      case null:
      case 'error':
        errMsg = '未知错误，请稍后重试';
        break;
      case 'timeout':
        errMsg = '请求超时，请稍后重试';
        break;
      case 'parsererror':
        errMsg = '数据解析失败，请稍后重试';
        break;
      case 'notmodified':
        errMsg = '数据解析失败，请稍后重试';
        break;
      default:
        break;
    }
    var res = {
      status: false,
      msg: errMsg + '<br/>( ' + errCode + ' )',
      data: null
    };
    executeCallback(res, errCallback);
  }

  /**
   * 执行回调
   * @param {Object} res 
   * @param {Function} callback 
   */
  function executeCallback(res, callback) {
    if (typeof callback == 'function') {
      callback(res);
    }
  }
}(jQuery, cookie));
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * @module {BondController} bondController
     */
    define('bondController', [
      'jquery', 'config', 'util', 'WebView', 'Result', 'userService', 'bondService'
    ], factory);
  } else {
    window.bondController = factory();
  }
}(function ($, config, util, WebView, Result, userService, bondService) {
  'use strict';
  var INSTANCE = null;

  /**
   * 构造器
   * @constructor {BondController} BondController
   */
  function BondController() {}

  /**
   * 债权转让
   */
  BondController.prototype.transfer = function (options,callback) {
    var user = null,
      token = null;
    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
        $.extend(options, {
        	pageSize: options.pageSize || config.PAGE_SIZE,
          token: token
        });console.log(options);
        bondService.transfer(options, function (result) {
        	console.log(result);
          if (config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
            WebView.msgAlert({
              msg: config.LOGIN_FAILURE_STATUS_TEXT,
              action: function () {
                util.jump2LoginPage(window.location.href);
              }
            }).show();
          } else{
          	executeCallback(result, callback);
          }
        }, handleError);
      } else {
        util.jump2LoginPage(window.location.href);
      }
    } catch (error) {
      systemErrorTips(error);
    }
  };

  /**
   * 获取手续费
   */
  BondController.prototype.getFactorace = function (options, callback) {
    var user = null,
      token = null;
    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
        $.extend(options, {
          token: token
        });

        bondService.getFactorace(options, function (result) {
          if (config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
            WebView.msgAlert({
              msg: config.LOGIN_FAILURE_STATUS_TEXT,
              action: function () {
                util.jump2LoginPage(window.location.href);
              }
            }).show();
          } else if (result.getStatus()) {
            executeCallback(result.data, callback);
          } else {
            WebView.msgAlert({
              msg: result.getMsg()
            }).show();
          }
        }, handleError);
      } else {
        util.jump2LoginPage(window.location.href);
      }
    } catch (error) {
      systemErrorTips(error);
    }
  };

  /**
   * 获取手机验证码
   * @param {string} telphone 接收验证码的手机号
   */
  BondController.prototype.getTransferList = function (options,callback) {
    // alert(2);
    var user = null,
      token = null;
    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
        options.token = token;
        bondService.getTransferList(options, function (result) {
          console.log(result);console.log(options);
          if (config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
            WebView.msgAlert({
              msg: config.LOGIN_FAILURE_STATUS_TEXT,
              action: function () {
                util.jump2LoginPage(window.location.href);
              }
            }).show();
          } else if (result.getStatus()) {
            executeCallback(result.getData(), callback);
          } else {
            WebView.msgAlert({
              msg: result.getMsg()
            }).show();
          }
        }, handleError);
      } else {
        util.jump2LoginPage(window.location.href);
      }
    } catch (error) {
      // alert(500);
      systemErrorTips(error);
    }
  };


	/**
   * 债权转让 可转让
   */
  BondController.prototype.getTransfersList = function (options,callback) {
    var user = null,
      token = null;
    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
        options.token = token;
        bondService.getTransfersList(options, function (result) {
          
          if (config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
            WebView.msgAlert({
              msg: config.LOGIN_FAILURE_STATUS_TEXT,
              action: function () {
                util.jump2LoginPage(window.location.href);
              }
            }).show();
          } else if (result.getStatus()) {
            executeCallback(result.getData(), callback);
          } else {
            WebView.msgAlert({
              msg: result.getMsg()
            }).show();
          }
        }, handleError);
      } else {
        util.jump2LoginPage(window.location.href);
      }
    } catch (error) {
      systemErrorTips(error);
    }
  };

	/**
   * 债权转让 转让中
   */
  BondController.prototype.getTransferingsList = function (options,callback) {
    var user = null,
      token = null;
    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
        options.token = token;
        bondService.getTransferingsList(options, function (result) {
          
          if (config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
            WebView.msgAlert({
              msg: config.LOGIN_FAILURE_STATUS_TEXT,
              action: function () {
                util.jump2LoginPage(window.location.href);
              }
            }).show();
          } else if (result.getStatus()) {
            executeCallback(result.getData(), callback);
          } else {
            WebView.msgAlert({
              msg: result.getMsg()
            }).show();
          }
        }, handleError);
      } else {
        util.jump2LoginPage(window.location.href);
      }
    } catch (error) {
      systemErrorTips(error);
    }
  };

	/**
   * 债权转让 已转让transfereds
   */
  BondController.prototype.getTransferedsList = function (options,callback) {
    var user = null,
      token = null;
    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
        options.token = token;
        bondService.getTransferedsList(options, function (result) {
          
          if (config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
            WebView.msgAlert({
              msg: config.LOGIN_FAILURE_STATUS_TEXT,
              action: function () {
                util.jump2LoginPage(window.location.href);
              }
            }).show();
          } else if (result.getStatus()) {
            executeCallback(result.getData(), callback);
          } else {
            WebView.msgAlert({
              msg: result.getMsg()
            }).show();
          }
        }, handleError);
      } else {
        util.jump2LoginPage(window.location.href);
      }
    } catch (error) {
      systemErrorTips(error);
    }
  };

	/**
   * 债权转让合同
   */
  BondController.prototype.getDownLoadContract = function (options, callback) {console.log(options)
    var user = null,
      token = null;
    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
				options.token = token;
        bondService.getDownLoadContract(options, function (result) {console.log(result);
          if (config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
            WebView.msgAlert({
              msg: config.LOGIN_FAILURE_STATUS_TEXT,
              action: function () {
                util.jump2LoginPage(window.location.href);
              }
            }).show();
          } else if (result.getStatus()) {
            executeCallback(result.getData(), callback);
          } else {
            WebView.msgAlert({
              msg: result.getMsg()
            }).show();
          }
        }, handleError);
      } else {
        util.jump2LoginPage(window.location.href);
      }
    } catch (error) {
      systemErrorTips(error);
    }
  };


  /**
   * 执行成功回调
   * @param {Result} result 返回的结果
   * @param {Function} callback 成功回调
   */
  function executeCallback(result, callback) {
    if (typeof callback === 'function') {
      callback(result);
    } else {
      systemErrorTips('The second argument must be a function.');
    }
  }

  /**
   * 请求出错处理函数
   * @param {any} result 请求出错
   */
  function handleError(result) {
    WebView.msgAlert({
      msg: result.getMsg()
    }).show();
  }

  /**
   * 系统错误处理函数
   * @param {Error} error 错误对象
   */
  function systemErrorTips(error) {
    WebView.msgTips({
      msg: '系统错误，请稍后重试。'
    }).show();
  }

  if (INSTANCE === null) {
    INSTANCE = new BondController();
  }

  return INSTANCE;
}));
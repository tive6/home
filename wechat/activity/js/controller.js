(function (factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * @module {ActivityController} activityController
     */
    define('activityController', [
      'jquery', 'config', 'util', 'WebView', 'Result', 'userController', 'activityService'
    ], factory);
  } else {
    window.activityController = factory();
  }
}(function ($, config, util, WebView, Result, userController, activityService) {
  'use strict';
  var INSTANCE = null;

  /**
   * 构造器
   * @constructor {ActivityController} ActivityController
   */
  function ActivityController() {}

  /**
   * 领奖
   */
  ActivityController.prototype.award = function (options, succCallback, errCallback) {
    var user = null,
      token = null;

    try {
      user = userController.getLoginUserFromLocalStorage();
      if (user) {
        $.extend(options, {
          token: user.getToken()
        });
        activityService.award(options, function (result) {
          if (config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
            util.jump2LoginPage(window.location.href);
          } else if (result.getStatus()) {
            WebView.msgAlert({
              title: '<span style="color:#F9364D">系统提示</span>',
              msg: '领取成功。',
              action: function () {
                $('#award').hide();
              }
            }).show();
          } else {
            WebView.msgAlert({
              title: '<span style="color:#F9364D">系统提示</span>',
              msg: '领取失败，请稍后重试。'
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
   * 摇一摇抽奖
   */
  ActivityController.prototype.shake4Lottery = function (options, callback) {
    var user = null,
      token = null;
    try {
      user = userController.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
        $.extend(options, {
          token: token
        });
        activityService.shake4Lottery(options, function (result) {
          if (config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
            // 登录失效
            WebView.msgAlert({
              msg: '<span style="display:block;font-size:16px;">立即参与摇奖</span>登录八斗金服账户',
              action: function () {
                util.jump2LoginPage(window.location.href);
              },
              buttonText: ['立即登录']
            }).show();
          } else if ('99' === result.getStatus()) {
            // 实名认证
            // 登录失效
            WebView.msgAlert({
              title: '<span style="color:#F9364D">系统提示</span>',
              msg: '请先进行实名认证',
              action: function () {
                util.jump2RealNameAuthPage(window.location.href);
              },
              buttonText: ['前往认证']
            }).show();

          } else {
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
   * 执行成功回调
   * @param {Result} result 返回的结果
   * @param {Function} callback 成功回调
   */
  function executeCallback(result, callback) {
    if (typeof callback === 'function') {
      callback(result);
    }
  }

  /**
   * 请求出错处理函数
   * @param {any} result 请求出错
   */
  function handleError(result) {
    WebView.msgAlert({
      title: '<span style="color:#F9364D">系统提示</span>',
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
    INSTANCE = new ActivityController();
  }

  return INSTANCE;
}));
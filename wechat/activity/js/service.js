(function (factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * @module {ActivityService} activityService
     */
    define('activityService', [
      'jquery', 'config', 'util', 'Result'
    ], factory);
  } else {
    window.activityService = factory();
  }
}(function ($, config, util, Result) {
  'use strict';
  var INSTANCE = null;

  /**
   * 构造器
   * @constructor {ActivityService} ActivityService
   */
  function ActivityService() {}

  /**
   * 领奖
   */
  ActivityService.prototype.award = function (options, succCallback, errCallback) {
    console.log(options);
    var result = new Result();
    $.ajax({
      url: 'https://192.168.0.220/api/annualmeeting/receiveMoney.json',
      data: util.JSONStringify(options)
    }).then(function (res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        result.setStatus(_status);
      } else if ('1' === _status) {
        result.setStatus(true);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function (xhr, status, error) {
      handleError(result, errCallback);
    });
  };

  /**
   * 摇一摇抽奖
   */
  ActivityService.prototype.shake4Lottery = function (options, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: 'https://192.168.0.220/api/annualmeeting/playshake.json',
      data: util.JSONStringify(options)
    }).then(function (res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        result.setStatus(_status);
      } else {
        result.setStatus(_status);
        result.setData(res.data.msg);
      }

      executeSuccCallback(result, succCallback);
    }, function (xhr, status, error) {
      handleError(result, errCallback);
    });
  };

  /**
   * 执行成功回调
   * @param {Result} result 返回的结果
   * @param {Function} callback 成功回调
   */
  function executeSuccCallback(result, callback) {
    if (typeof callback === 'function') {
      callback(result);
    }
  }

  /**
   * 请求出错处理函数
   * @param {any} result 请求出错
   */
  function handleError(result, callback) {
    result.setStatus(false);
    result.setMsg('系统错误请稍后再试。');
    if (typeof callback === 'function') {
      callback(result);
    }
  }

  if (INSTANCE === null) {
    INSTANCE = new ActivityService();
  }

  return INSTANCE;
}));
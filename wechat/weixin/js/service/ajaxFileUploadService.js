define([
  'jquery', 'jqueryForm', 'config', 'Result'
], function($, jqueryForm, config, Result) {
  'use strict';
  var INSTANCE = null;

  /**
   * 构造器
   * @constructor {AjaxFileUploadService} AjaxFileUploadService
   */
  function AjaxFileUploadService() {}

  /**
   * 意见反馈
   * @param {jQuery} $form 修改头像
   */
  AjaxFileUploadService.prototype.mondifyPortrait = function($form, succCallback, errCalback) {
    $form.ajaxSubmit({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.MODIFY_IMAGE,
      success: function(res, status, xhr) {
        saveAuthInfoSuccessResponse(res, succCallback);
      },
      error: function(xhr, status, error) {
        handleError(xhr, errCalback);
      }
    });
  };

  /**
   * 意见反馈
   * @param {jQuery} $form 意见反馈表单
   */
  AjaxFileUploadService.prototype.feedback = function($form, succCallback, errCalback) {

    $form.ajaxSubmit({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.SUBMIT_FEEDBACK,
      success: function(res, status, xhr) {
        saveAuthInfoSuccessResponse(res, succCallback);
      },
      error: function(xhr, status, error) {
        handleError(error, errCalback);
      }
    });
  };

  // /**
  //  * 征信报告
  //  * @param {jQuery} $form 征信报告表单
  //  */
  // AjaxFileUploadService.prototype.saveCreditReport = function ($form, succCallback, errCalback) {
  //   $form.ajaxSubmit({
  //     url: config.SERVICE_URL + config.SERVICE_URI_MAP.SAVE_CREDIT_INFO,
  //     success: function (res, status, xhr) {
  //       saveAuthInfoSuccessResponse(res, succCallback);
  //     },
  //     error: function (xhr, status, error) {
  //       handleError(errCalback);
  //     }
  //   });
  // };

  // /**
  //  * 添加收入证明
  //  * @param {jQuery} $form 收入证明信息表单
  //  */
  // AjaxFileUploadService.prototype.saveIncomeCertificate = function ($form, succCallback, errCalback) {

  //   $form.ajaxSubmit({
  //     url: config.SERVICE_URL + config.SERVICE_URI_MAP.SAVE_INCOME_ATTACHMENT,
  //     success: function (res, status, xhr) {
  //       saveAuthInfoSuccessResponse(res, succCallback);
  //     },
  //     error: function (xhr, status, error) {
  //       handleError(errCalback);
  //     }
  //   });
  // };

  // /**
  //  * 添加工作信息
  //  * @param {jQuery} $form 工作信息表单
  //  */
  // AjaxFileUploadService.prototype.saveWorkInfo = function ($form, succCallback, errCalback) {

  //   $form.ajaxSubmit({
  //     url: config.SERVICE_URL + config.SERVICE_URI_MAP.SAVE_WORK_INFO,
  //     success: function (res, status, xhr) {
  //       saveAuthInfoSuccessResponse(res, succCallback);
  //     },
  //     error: function (xhr, status, error) {
  //       handleError(errCalback);
  //     }
  //   });
  // };



  // /**
  //  * 添加身份信息
  //  * @param {jQuery} $form 身份信息表单
  //  */
  // AjaxFileUploadService.prototype.saveIdentityInfo = function ($form, succCallback, errCalback) {

  //   $form.ajaxSubmit({
  //     url: config.SERVICE_URL + config.SERVICE_URI_MAP.AUTHENTICATE,
  //     success: function (res, status, xhr) {
  //       saveAuthInfoSuccessResponse(res, succCallback);
  //     },
  //     error: function (xhr, status, error) {
  //       handleError(errCalback);
  //     }
  //   });
  // };


  // /**
  //  * 添加车辆信息
  //  * @param {jQuery} $form 车辆信息表单
  //  */
  // AjaxFileUploadService.prototype.saveCarInfo = function ($form, succCallback, errCalback) {

  //   $form.ajaxSubmit({
  //     url: config.SERVICE_URL + config.SERVICE_URI_MAP.SAVE_CAR_ATTACHMENT,
  //     success: function (res, status, xhr) {
  //       saveAuthInfoSuccessResponse(res, succCallback);
  //     },
  //     error: function (xhr, status, error) {
  //       handleError(errCalback);
  //     }
  //   });
  // };

  // /**
  //  * 添加房屋信息
  //  * @param {jQuery} $form 房屋信息表单
  //  */
  // AjaxFileUploadService.prototype.saveHouseInfo = function ($form, succCallback, errCalback) {

  //   $form.ajaxSubmit({
  //     url: config.SERVICE_URL + config.SERVICE_URI_MAP.SAVE_HOUSE_ATTACHMENT,
  //     success: function (res, status, xhr) {
  //       saveAuthInfoSuccessResponse(res, succCallback);
  //     },
  //     error: function (xhr, status, error) {
  //       handleError(errCalback);
  //     }
  //   });
  // };

  /**
   * 保存认证信息成功返回操作
   * @param {Object} response 服务端响应数据
   * @param {Function} callback 回调函数
   */
  function saveAuthInfoSuccessResponse(response, callback) {
    var result = new Result(),
      _status = response.data.status;
    result.setMsg(response.data.msg);
    if (_status === '1') {
      result.setData(response.data.imgUrl);
      result.setStatus(true);
    } else if (_status === '0') {
      result.setStatus(false);
    } else if (_status === config.LOGIN_FAILURE_STATUS_CODE) {
      result.setStatus(_status);
    }

    if (typeof callback === 'function') {
      callback(result);
    }
  }

  /**
   * 请求接口出错执行函数
   */
  function handleError(xhr, callback) {
    var result = new Result();
    result.setStatus(false);
    result.setMsg('系统错误请稍后重试。');
    if (xhr.status == 413) {
      result.setMsg('上传图片过大');
    }
    result.setData(null);

    if (typeof callback === 'function') {
      callback(result);
    }
  }

  if (INSTANCE === null) {
    INSTANCE = new AjaxFileUploadService();
  }

  return INSTANCE;
});
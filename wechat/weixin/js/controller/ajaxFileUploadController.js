define([
  'jquery', 'jqueryForm', 'config', 'ajaxFileUploadService', 'WebView'
], function($, jqueryForm, config, ajaxFileUploadService, WebView) {
  'use strict';
  var INSTANCE = null;

  /**
   * 构造器
   * @constructor {AjaxFileUploadController} AjaxFileUploadController
   */
  function AjaxFileUploadController() {}

  /**
   * 意见反馈
   * @param {jQuery} $form 修改头像
   */
  AjaxFileUploadController.prototype.mondifyPortrait = function($form, callback) {
    ajaxFileUploadService.mondifyPortrait($form, function(result) {
      if (result.getStatus() === config.LOGIN_FAILURE_STATUS_CODE) {
        // 登录失效跳转至登录页
        WebView.msgAlert({
          msg: config.LOGIN_FAILURE_STATUS_TEXT,
          action: function() {
            util.jump2LoginPage(window.location.href);
          }
        }).show();
      } else if (result.getStatus()) {
        typeof callback === 'function' && callback(result.getData());
        /**@todo 提交成功，做些什么 */
      } else {
        WebView.msgAlert({
          msg: result.getMsg()
        }).show();
        /**@todo 提交失败，做些什么 */
      }
    }, handleError);
  };

  /**
   * @param {jQuery} form 意见反馈表单
   */
  AjaxFileUploadController.prototype.feedback = function(form) {
    if ('' === form.find('[name="feedbackText"]').val()) {
      WebView.msgAlert({
        msg: '请输入您要反馈的信息。'
      }).show();
      return;
    }
    ajaxFileUploadService.feedback(form, function(result) {
      if (result.getStatus() === config.LOGIN_FAILURE_STATUS_CODE) {
        // 登录失效跳转至登录页
        WebView.msgAlert({
          msg: config.LOGIN_FAILURE_STATUS_TEXT,
          action: function() {
            util.jump2LoginPage(window.location.href);
          }
        }).show();
      } else if (result.getStatus()) {
        WebView.msgAlert({
          msg: result.getMsg()
        }).show();
        /**@todo 提交成功，做些什么 */
      } else {
        WebView.msgAlert({
          msg: result.getMsg()
        }).show();
        /**@todo 提交失败，做些什么 */
      }
    }, handleError);
  };

  // /**
  //  * @param {jQuery} form 征信报告
  //  */
  // AjaxFileUploadController.prototype.saveCreditReport = function (form) {
  //   ajaxFileUploadService.saveCreditReport(form, function (result) {
  //     if (result.getStatus() === config.LOGIN_FAILURE_STATUS_CODE) {
  //       // 登录失效跳转至登录页
  // WebView.msgAlert({
  //   msg: config.LOGIN_FAILURE_STATUS_TEXT,
  //   action: function () {
  //     util.jump2LoginPage(window.location.href);
  //   }
  // }).show();
  //     } else if (result.getStatus()) {
  //       WebView.msgAlert({
  //         msg: result.getMsg()
  //       }).show();
  //       /**@todo 提交成功，做些什么 */
  //     } else {
  //       WebView.msgAlert({
  //         msg: result.getMsg()
  //       }).show();
  //       /**@todo 提交失败，做些什么 */
  //     }
  //   }, handleError);
  // };

  // /**
  //  * @param {jQuery} form 收入证明表单
  //  */
  // AjaxFileUploadController.prototype.saveIncomeCertificate = function (form) {
  //   ajaxFileUploadService.saveIncomeCertificate(form, function (result) {
  //     if (result.getStatus() === config.LOGIN_FAILURE_STATUS_CODE) {
  //       // 登录失效跳转至登录页
  // WebView.msgAlert({
  //   msg: config.LOGIN_FAILURE_STATUS_TEXT,
  //   action: function () {
  //     util.jump2LoginPage(window.location.href);
  //   }
  // }).show();
  //     } else if (result.getStatus()) {
  //       WebView.msgAlert({
  //         msg: result.getMsg()
  //       }).show();
  //       /**@todo 提交成功，做些什么 */
  //     } else {
  //       WebView.msgAlert({
  //         msg: result.getMsg()
  //       }).show();
  //       /**@todo 提交失败，做些什么 */
  //     }
  //   }, handleError);
  // };


  // /**
  //  * @param {jQuery} form 工作信息表单
  //  */
  // AjaxFileUploadController.prototype.saveWorkInfo = function (form) {
  //   ajaxFileUploadService.saveWorkInfo(form, function (result) {
  //     if (result.getStatus() === config.LOGIN_FAILURE_STATUS_CODE) {
  //       // 登录失效跳转至登录页
  // WebView.msgAlert({
  //   msg: config.LOGIN_FAILURE_STATUS_TEXT,
  //   action: function () {
  //     util.jump2LoginPage(window.location.href);
  //   }
  // }).show();
  //     } else if (result.getStatus()) {
  //       WebView.msgAlert({
  //         msg: result.getMsg()
  //       }).show();
  //       /**@todo 提交成功，做些什么 */
  //     } else {
  //       WebView.msgAlert({
  //         msg: result.getMsg()
  //       }).show();
  //       /**@todo 提交失败，做些什么 */
  //     }
  //   }, handleError);
  // };

  // /**
  //  * @param {jQuery} form 身份信息表单
  //  */
  // AjaxFileUploadController.prototype.saveIdentityInfo = function (form) {
  //   ajaxFileUploadService.saveIdentityInfo(form, function (result) {
  //     if (result.getStatus() === config.LOGIN_FAILURE_STATUS_CODE) {
  //       // 登录失效跳转至登录页
  // WebView.msgAlert({
  //   msg: config.LOGIN_FAILURE_STATUS_TEXT,
  //   action: function () {
  //     util.jump2LoginPage(window.location.href);
  //   }
  // }).show();
  //     } else if (result.getStatus()) {
  //       WebView.msgAlert({
  //         msg: result.getMsg()
  //       }).show();
  //       /**@todo 提交成功，做些什么 */
  //     } else {
  //       WebView.msgAlert({
  //         msg: result.getMsg()
  //       }).show();
  //       /**@todo 提交失败，做些什么 */
  //     }
  //   }, handleError);
  // };

  // /**
  //  * @param {jQuery} form 房屋信息表单
  //  */
  // AjaxFileUploadController.prototype.saveHouseInfo = function (form) {
  //   ajaxFileUploadService.saveHouseInfo(form, function (result) {
  //     if (result.getStatus() === config.LOGIN_FAILURE_STATUS_CODE) {
  //       // 登录失效跳转至登录页
  // WebView.msgAlert({
  //   msg: config.LOGIN_FAILURE_STATUS_TEXT,
  //   action: function () {
  //     util.jump2LoginPage(window.location.href);
  //   }
  // }).show();
  //     } else if (result.getStatus()) {
  //       WebView.msgAlert({
  //         msg: result.getMsg()
  //       }).show();
  //       /**@todo 提交成功，做些什么 */
  //     } else {
  //       WebView.msgAlert({
  //         msg: result.getMsg()
  //       }).show();
  //       /**@todo 提交失败，做些什么 */
  //     }
  //   }, handleError);
  // };

  // /**
  //  * @param {jQuery} form 车辆信息表单
  //  */
  // AjaxFileUploadController.prototype.saveCarInfo = function (form) {
  //   ajaxFileUploadService.saveCarInfo(form, function (result) {
  //     if (result.getStatus() === config.LOGIN_FAILURE_STATUS_CODE) {
  //       // 登录失效跳转至登录页
  // WebView.msgAlert({
  //   msg: config.LOGIN_FAILURE_STATUS_TEXT,
  //   action: function () {
  //     util.jump2LoginPage(window.location.href);
  //   }
  // }).show();
  //     } else if (result.getStatus()) {
  //       WebView.msgAlert({
  //         msg: result.getMsg()
  //       }).show();
  //       /**@todo 提交成功，做些什么 */
  //     } else {
  //       WebView.msgAlert({
  //         msg: result.getMsg()
  //       }).show();
  //       /**@todo 提交失败，做些什么 */
  //     }
  //   }, handleError);
  // };


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
    INSTANCE = new AjaxFileUploadController();
  }

  return INSTANCE;
});
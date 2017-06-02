(function (factory) {
  if (typeof define === 'function' && define.amd) {

    /**
     * @module {AppController} appController
     */
    define('appController', [
      'jquery', 'config', 'util', 'WebView', 'userService', 'appService'
    ], factory);
  } else {
    window.appController = factory();
  }
}(function ($, config, util, WebView, userService, appService) {
  'use strict';
  var INSTANCE = null;

  /**
   * 构造器
   * @constructor {AppController} AppController
   */
  function AppController() { }

  /**
   * 是否有待领取红包
   * IS_EXSIT_WAIT_TAKE_RED_PACKET
   */
  AppController.prototype.isExsitWaitTakeRedPacket = function (callback) {
    var user = null, opts = {};
    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        opts.token = user.getToken();
        appService.isExsitWaitTakeRedPacket(opts, function (res) {
          if (config.LOGIN_FAILURE_STATUS_CODE === res.getStatus()) {
            WebView.msgAlert({
              msg: config.LOGIN_FAILURE_STATUS_TEXT,
              action: function () {
                util.jump2LoginPage(window.location.href);
              }
            }).show();
          } else if (res.getStatus()) {
            executeCallback(res.getData() == 'true', callback);
          } else {
            WebView.msgAlert({
              msg: res.getMsg()
            }).show();
          }
        }, handleError);
      } else {
        util.jump2LoginPage(window.location.href);
      }
    } catch (e) {
      systemErrorTips(error);
    }
  }

  /**
   * 我的奖励 失效列表
   * EN_USED_AWARD_LIST
   */
  AppController.prototype.enUsedAwardList = function (opts, callback) {
    var user = null;
    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        $.extend(opts, {
          token: user.getToken()
        });
        appService.enUsedAwardList(opts, function (res) {
          if (config.LOGIN_FAILURE_STATUS_CODE === res.getStatus()) {
            WebView.msgAlert({
              msg: config.LOGIN_FAILURE_STATUS_TEXT,
              action: function () {
                util.jump2LoginPage(window.location.href);
              }
            }).show();
          } else if (res.getStatus()) {
            executeCallback(res.getData(), callback);
          } else {
            WebView.msgAlert({
              msg: res.getMsg()
            }).show();
          }
        }, handleError);
      } else {
        util.jump2LoginPage(window.location.href);
      }
    } catch (e) {
      systemErrorTips(error);
    }
  }

  /**
   * 我的奖励 已使用列表
   * USED_AWARD_LIST
   */
  AppController.prototype.usedAwardList = function (opts, callback) {
    var user = null;
    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        $.extend(opts, {
          token: user.getToken()
        });
        appService.usedAwardList(opts, function (res) {
          if (config.LOGIN_FAILURE_STATUS_CODE === res.getStatus()) {
            WebView.msgAlert({
              msg: config.LOGIN_FAILURE_STATUS_TEXT,
              action: function () {
                util.jump2LoginPage(window.location.href);
              }
            }).show();
          } else if (res.getStatus()) {
            executeCallback(res.getData(), callback);
          } else {
            WebView.msgAlert({
              msg: res.getMsg()
            }).show();
          }
        }, handleError);
      } else {
        util.jump2LoginPage(window.location.href);
      }
    } catch (e) {
      systemErrorTips(error);
    }
  }

  /**
   * 我的奖励 可用红包列表
   * AVAILABLE_AWARD_LIST
   */
  AppController.prototype.availableAwardList = function (opts, callback) {
    var user = null;
    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        $.extend(opts, {
          token: user.getToken()
        });
        appService.availableAwardList(opts, function (res) {
          if (config.LOGIN_FAILURE_STATUS_CODE === res.getStatus()) {
            WebView.msgAlert({
              msg: config.LOGIN_FAILURE_STATUS_TEXT,
              action: function () {
                util.jump2LoginPage(window.location.href);
              }
            }).show();
          } else if (res.getStatus()) {
            executeCallback(res.getData(), callback);
          } else {
            WebView.msgAlert({
              msg: res.getMsg()
            }).show();
          }
        }, handleError);
      } else {
        util.jump2LoginPage(window.location.href);
      }
    } catch (e) {
      systemErrorTips(error);
    }
  }

  /**
   * 立即领取
   * TAKE_RED_PACKET
   */
  AppController.prototype.takeRedPacket = function (callback) {
    var user = null, opts = {};
    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        opts.token = user.getToken()
        appService.takeRedPacket(opts, function (res) {
          if (config.LOGIN_FAILURE_STATUS_CODE === res.getStatus()) {
            WebView.msgAlert({
              msg: config.LOGIN_FAILURE_STATUS_TEXT,
              action: function () {
                util.jump2LoginPage(window.location.href);
              }
            }).show();
          } else if (res.getStatus()) {
            executeCallback(res, callback);
          } else {
            WebView.msgAlert({
              msg: res.getMsg()
            }).show();
          }
        }, handleError);
      } else {
        util.jump2LoginPage(window.location.href);
      }
    } catch (e) {
      systemErrorTips(error);
    }
  }

  /**
   * 点击控件加载 待领取 现金红包列表
   * WAIT_TAKE_RED_PACKET
   */
  AppController.prototype.waitTakeRedPacket = function (callback) {
    var user = null, opts = {};
    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        opts.token = user.getToken()
        appService.waitTakeRedPacket(opts, function (res) {
          if (config.LOGIN_FAILURE_STATUS_CODE === res.getStatus()) {
            WebView.msgAlert({
              msg: config.LOGIN_FAILURE_STATUS_TEXT,
              action: function () {
                util.jump2LoginPage(window.location.href);
              }
            }).show();
          } else if (res.getStatus()) {
            executeCallback(res.getData(), callback);
          } else {
            WebView.msgAlert({
              msg: res.getMsg()
            }).show();
          }
        }, handleError);
      } else {
        util.jump2LoginPage(window.location.href);
      }
    } catch (e) {
      systemErrorTips(error);
    }
  }

  /**
   * 买入可用红包列表
   * AVAILABLE_AWARD
   */
  AppController.prototype.availableAward = function (opts, callback) {
    var user = null;
    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        $.extend(opts, {
          token: user.getToken()
        });
        appService.availableAward(opts, function (res) {
          if (config.LOGIN_FAILURE_STATUS_CODE === res.getStatus()) {
            WebView.msgAlert({
              msg: config.LOGIN_FAILURE_STATUS_TEXT,
              action: function () {
                util.jump2LoginPage(window.location.href);
              }
            }).show();
          } else if (res.getStatus()) {
            executeCallback(res.getData(), callback);
          } else {
            WebView.msgAlert({
              msg: res.getMsg()
            }).show();
          }
        }, handleError);
      } else {
        util.jump2LoginPage(window.location.href);
      }
    } catch (e) {
      systemErrorTips(error);
    }
  }

  /**
   * 收益计算器
   */
  AppController.prototype.caculate = function (opts, callback) {
    if (!opts.money) {
      WebView.msgAlert({
        msg: '请输入金额'
      }).show();
      return;
    }
    if (!opts.annualRate) {
      WebView.msgAlert({
        msg: '请输入年化收益率'
      }).show();
      return;
    }
    if (!opts.period) {
      WebView.msgAlert({
        msg: '请输入投资期限'
      }).show();
      return;
    }

    appService.caculate(opts, function (result) {
      console.log(result);
      if (result.getStatus()) {
        executeCallback(result.getData(), callback);
      } else {
        systemErrorTips('');
      }
    }, handleError);
  };

  /**
   * 各种URL
   */
  AppController.prototype.getH5Urls = function (callback) {
    appService.getH5Urls(function (result) {
      if (result.getStatus()) {
        executeCallback(result.getData(), callback);
      } else {
        systemErrorTips('');
      }
    }, handleError);
  };

  /**
   * 帮助中心
   */
  AppController.prototype.getHelpCenter = function (callback) {
    appService.getHelpCenter(function (result) {
      if (result.getStatus()) {
        executeCallback(result.getData(), callback);
      } else {
        WebView.msgAlert({
          msg: result.getMsg()
        }).show();
      }
    }, handleError);
  };

  /**
   * 充值富友支付密码
   */
  AppController.prototype.resetPassWordReq = function (options, callback) {
    var user = null,
      token = null;
    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
        $.extend(options, {
          token: token
        });
        appService.resetPassWordReq(options, function (result) {
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
   * 获取支持银行列表
   */
  AppController.prototype.getSupportedBanks = function (callback) {
    appService.getSupportedBanks(function (result) {
      if (result.getStatus()) {
        executeCallback(result.getData(), callback);
      } else {
        WebView.msgAlert({
          msg: result.getMsg()
        }).show();
      }
    }, handleError);
  };

  /**
   * 获取城市
   */
  AppController.prototype.getCities = function (pCode, callback) {
    var options = {
      provinceCode: pCode
    };
    appService.getCities(options, function (result) {
      if (result.getStatus()) {
        executeCallback(result.getData(), callback);
      } else {
        WebView.msgAlert({
          msg: result.getMsg()
        }).show();
      }
    }, handleError);
  };

  /**
   * 获取省份
   */
  AppController.prototype.getProvinces = function (callback) {
    appService.getProvinces(function (result) {
      if (result.getStatus()) {
        executeCallback(result.getData(), callback);
      } else {
        WebView.msgAlert({
          msg: result.getMsg()
        }).show();
      }
    }, handleError);
  };

  /**
   * 风险评估页面
   */
  AppController.prototype.risk = function (callback) {
    var user = null,
      token = null;

    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
        appService.getRiskUrl(token, function (result) {
          console.log(result);
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
            });
          }
        }, handleError);
      } else {
        util.jump2LoginPage(window.location.href);
      }
    } catch (error) {

    }
  };

  /**
   * 更新已读消息状态
   */
  AppController.prototype.msgReaded = function (options, callback) {
    var user = null,
      token = null;
    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
        $.extend(options, {
          token: token
        });

        appService.msgReaded(options, function (result) {
          console.log(result);
          if (config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
            WebView.msgAlert({
              msg: config.LOGIN_FAILURE_STATUS_TEXT,
              action: function () {
                util.jump2LoginPage(window.location.href);
              }
            }).show();
          } else if (result.getStatus()) {
            executeCallback(result.getStatus(), callback);
          } else {
            /**@todo 更新失败，就失败吧！再看一遍吧 */
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
   * 我的消息
   */
  AppController.prototype.getMyMessage = function (options, callback) {
    var user = null,
      token = null;

    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
        $.extend(options, {
          pageSize: options.pageSize || config.PAGE_SIZE,
          token: token
        });
        appService.getMyMessage(options, function (result) {
          console.log(result);
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
   * 官方消息
   */
  AppController.prototype.getCommuniqueMessage = function (options, callback) {
    var user = null,
      token = null;

    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
        $.extend(options, {
          pageSize: options.pageSize || config.PAGE_SIZE,
          token: token
        });
        appService.getCommuniqueMessage(options, function (result) {
          console.log(result);
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
              msg: result.setMsg()
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
   * 消息-智享预约
   * LOAD_NOTICE
   */
  AppController.prototype.getNotice = function (options, callback) {
    var
      user = null,
      token = null;

    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
        options.token = token;
        appService.getNotice(options, function (result) {
          console.log(result)
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
            WebView
              .msgAlert({
                msg: result.getMsg()
              })
              .show();
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
   * 消息-我的资产
   */
  AppController.prototype.getMyAssetsMessage = function (options, callback) {
    var user = null,
      token = null;
    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
        options.token = token;
        //      console.log(token)
        appService.getMyAssetsMessage(options, function (result) {
          console.log(result);
          if (result.getStatus() === config.LOGIN_FAILURE_STATUS_CODE) {
            WebView.msgAlert({
              msg: config.LOGIN_FAILURE_STATUS_TEXT,
              action: function () {
                util.jump2LoginPage(window.location.href);
              }
            }).show();
          } else if (result.getStatus()) {
            executeCallback(result.getData(), callback);
          } else {
            WebView
              .msgAlert({
                msg: result.getMsg()
              })
              .show();
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
   * 消息-智享预约详情
   * LOAD_NOTICE
   */
  AppController.prototype.getNoticeDetail = function (options, callback) {
    var
      user = null,
      token = null;

    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
        options.token = token;
        appService.getNoticeDetail(options, function (result) {
          console.log(result)
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
            WebView
              .msgAlert({
                msg: result.getMsg()
              })
              .show();
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
   * 加载焦点列表
   */
  AppController.prototype.getFocusList = function (options, callback) {
    var user = null,
      token = null;

    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
      } else {
        util.jump2LoginPage(window.location.href);
      }
    } catch (error) {
      systemErrorTips(error);
    }

    $.extend(options, {
      pageSize: config.PAGE_SIZE,
      token: token
    });

    appService.getFocusList(options, function (result) {
      console.log(result);
      if (result.getStatus()) {
        executeCallback(result.getData(), callback);
      } else {
        WebView.msgAlert({
          msg: result.getMsg()
        }).show();
      }
    }, handleError);
  };

	/**
   * 投资列表
   */
  AppController.prototype.getInvestNewList = function (options, callback) {
    var
      user = null,
      token = null;

    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
        options.token = token;
        appService.getInvestNewList(options, function (result) {
          console.log(result); console.log(options)
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
            WebView
              .msgAlert({
                msg: result.getMsg()
              })
              .show();
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
   * 意见反馈
   */
  AppController.prototype.feedback = function (feedback) {
    if (!validateFeedback(feedback)) {
      return;
    }

    var user = null,
      token = null;

    user = userService.getLoginUserFromLocalStorage();
    if (user) {
      token = user.getToken();
      $.extend(feedback, {
        token: token
      });
    } else {
      util.jump2LoginPage(window.location.href);
    }

    appService.feedback(feedback, function (result) {
      if (config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
        WebView.msgAlert({
          msg: config.LOGIN_FAILURE_STATUS_TEXT,
          action: function () {
            util.jump2LoginPage(window.location.href);
          }
        }).show();
      } else if (result.getStatus()) {
        $(".feedback-alert").show();
        /*WebView.msgAlert({
          msg: result.getMsg()
        }).show();*/
      } else {
        WebView.msgAlert({
          msg: result.getMsg()
        }).show();
      }
    }, handleError);
  };

  function validateFeedback(feedback) {
    if ('' === feedback.getFeedbackText) {
      WebView.msgAlert({
        msg: '请输入具体的反馈内容'
      }).show();
      return false;
    }
    if (feedback.getContact() && !util.checkTelphone(feedback.getContact())) {
      WebView.msgAlert({
        msg: '手机号不正确'
      }).show();
      return false;
    }

    return true;
  }

  /**
   * 资金流水
   */
  AppController.prototype.getCapitalList = function (options, callback) {
    var user = null;

    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        $.extend(options, {
          pageSize: options.pageSize || 15,
          token: user.getToken()
        });
        appService.getCapitalList(options, function (result) {
          console.log(result);
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
   * 获取手机验证码
   * @param {Object} options 获取验证码所需参数
   *                  {
   *                    telphone: '18337877656', // 手机号
   *                    codeTag: 'register' // 用途
   *                  }
   * @param {jQuery} context 按钮元素
   * @param {Function} callback 倒计时结束时执行的回调
   * 
   */
  AppController.prototype.getPhoneCode = function (options, context, callback) {
    if (!util.checkTelphone(options.telphone)) {
      WebView.msgAlert({
        msg: '请输入有效的手机号。'
      }).show();
      if (typeof callback === 'function') {
        callback(timer);
      }
      return;
    }
    appService.getPhoneCode(options, function (result) { }, handleError);

    var times = 60,
      _timerStr = '<span class="count-times">{{times}}</span>秒后重试',
      _className = 'disabled';

    context.html(_timerStr.replace(/\{\{times\}\}/, times)).addClass(_className).off('click');
    var timer = setInterval(function () {
      context.html(_timerStr.replace(/\{\{times\}\}/, --times));
      if (times <= 0) {
        context.html('获取验证码').removeClass(_className);
        if (typeof callback === 'function') {
          callback(timer);
        }
        clearInterval(timer);
      }
    }, 1000);
    return timer;
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
    console.log(error);
    WebView.msgTips({
      msg: '系统错误，请稍后重试。'
    }).show();
  }

  if (INSTANCE === null) {
    INSTANCE = new AppController();
  }

  return INSTANCE;
}));
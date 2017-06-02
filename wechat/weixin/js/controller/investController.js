(function(factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * @module {InvestController} investController
     */
    define('investController', [
      'jquery',
      'config',
      'util',
      'WebView',
      'investService',
      'userService'
    ], factory);
  } else {
    window.investController = factory();
  }
}(function($, config, util, WebView, investService, userService) {
  'use strict';
  var INSTANCE = null;

  /**
   * 构造器
   * @constructor {InvestController} InvestController
   */
  function InvestController() {}

  /**
   * 发送支付码
   */
  InvestController.prototype.getPayCode = function(callback) {
    var user = null,
      options = {
        codeTag: 'buycode'
      };
    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        options.telphone = user.getTelphone();
        console.log(options);
        investService.getPayCode(options, function(res) {
          executeCallback(res, callback);
        }, handleError);
      } else {
        util.jump2LoginPage(window.location.href);
      }
    } catch (error) {

    }
  };

  /**
   * 根据锁定期 加载利率
   */
  InvestController.prototype.loadRateByPeriod = function(period, callback) {
    // console.log(period);
    investService.loadRateByPeriod({ lockperiod: period }, function(res) {
      if (res.getStatus()) {
        executeCallback(res.getData(), callback);
      } else {
        WebView.msgAlert({
          msg: res.getMsg()
        }).show();
      }
    }, handleError);
  };

  /**
   * 是否预约过
   */
  InvestController.prototype.isHaveBooked = function(callback) {
    var user = null,
      token = null;

    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
        investService.isHaveBooked(token, function(result) {
          console.log(result);
          if (config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
            WebView.msgAlert({
              msg: config.LOGIN_FAILURE_STATUS_TEXT,
              action: function() {
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
   * 加载银行卡
   */
  InvestController.prototype.getBankCard = function(callback) {
    var user = null,
      token = null;

    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
        investService.getBankCard(token, function(result) {
          console.log(result);
          if (config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
            WebView.msgAlert({
              msg: config.LOGIN_FAILURE_STATUS_TEXT,
              action: function() {
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
   * 解冻未匹配金额
   */
  InvestController.prototype.unfreeze = function(options) {
    if (!validateUnfreeze(options)) {
      return;
    }
    var user = null,
      token = null;
    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        options.token = user.getToken();
        delete options.money;
        investService.unfreeze(options, function(result) {
          console.log(result);
          if (config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
            WebView.msgAlert({
              msg: config.LOGIN_FAILURE_STATUS_TEXT,
              action: function() {
                util.jump2LoginPage(window.location.href);
              }
            }).show();
          } else if (result.getStatus()) {
            WebView.msgAlert({
              msg: result.getMsg(),
              action: function() {
                window
                  .history
                  .go(-1);
              }
            }).show();
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
   * 校验解冻数据格式
   */
  function validateUnfreeze(options) {
    // if (!options.amt || !/^[0-9]*(?:\.[0-9]*)?$/.test(options.amt)) {
    // WebView.msgAlert({     msg: '请输入有效的转出金额（大于零的有效数字）'   }).show();   return
    // false; }
    if (options.amt <= 0) {
      WebView
        .msgAlert({
          msg: '无可转出金额。'
        })
        .show();
      return false;
    }
    return true;
  }

    /*查看合同*/
    InvestController.prototype.contract = function(options, callback){
        var user = null,
            token = null;
        // try {
        user = userService.getLoginUserFromLocalStorage();
        if (user) {
            token = user.getToken();
            $.extend(options, {
                token: token
            });
            console.log(options);
            investService.contract(options, function(result) {
                console.log(result);
                if (config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
                    WebView.msgAlert({
                        msg: config.LOGIN_FAILURE_STATUS_TEXT,
                        action: function() {
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
    };

  /**
   * 智享计划  计划详情  还款计划
   * LOAD_INVEST_DETAIL
   */
  InvestController.prototype.repayPlan = function(options, callback) {
    var user = null,
      token = null;
    // try {
    user = userService.getLoginUserFromLocalStorage();
    if (user) {
      token = user.getToken();
      $.extend(options, {
        token: token
      });
      investService.repayPlan(options, function(result) {
        console.log(result);
        if (config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
          WebView.msgAlert({
            msg: config.LOGIN_FAILURE_STATUS_TEXT,
            action: function() {
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
    // } catch (error) {   systemErrorTips(error); }
  };

  /**
   * 智享计划  计划详情
   * LOAD_INVEST_DETAIL
   */
  InvestController.prototype.getInvestDetail = function(id, callback) {
    var param = {},
      user = null,
      token = null;

    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
        param.bookid = id;
        param.token = token;
        investService.getInvestDetail(param, function(result) {
          if (config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
            WebView.msgAlert({
              msg: config.LOGIN_FAILURE_STATUS_TEXT,
              action: function() {
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
   * 预约记录
   */
  InvestController.prototype.getBookList = function(options, callback) {
    var user = null,
      token = null;

    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
        $.extend(options, {
          token: token,
          pageSize: config.PAGE_SIZE
        });
        investService.getBooklList(options, function(result) {
          if (config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
            WebView.msgAlert({
              msg: config.LOGIN_FAILURE_STATUS_TEXT,
              action: function() {
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
   * 预约总览
   */
  InvestController.prototype.getInvestPandect = function(callback) {
    var user = null,
      token = null;

    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();

        investService.getInvestPandect(token, function(result) {
          if (config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
            WebView.msgAlert({
              msg: config.LOGIN_FAILURE_STATUS_TEXT,
              action: function() {
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
   * 充值
   */
  InvestController.prototype.rechargeOrWithdraw = function(options, callback) {
    var user = null,
      token = null;
    // if (!/^[1-9][0-9]*0{2}(?:\.0*)?$/.test(options.amt) && options.type ===
    // 'recharge') {
    if (options.type === 'recharge' && options.amt < 100) {
      WebView
        .msgAlert({
          msg: '充值金额必须大于100。'
        })
        .show();
      return;
    }
    if (options.type === 'withdraw' && options.amt > options.balance) {
      WebView
        .msgAlert({
          msg: '提现金额不可大于账户余额。'
        })
        .show();
      return;
    }
    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        options.token = user.getToken();
      } else {
        util.jump2LoginPage(window.location.href);
      }
    } catch (error) {
      systemErrorTips(error);
    }
    investService
      .rechargeOrWithdraw(options, function(result) {
        if (config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
          WebView.msgAlert({
            msg: config.LOGIN_FAILURE_STATUS_TEXT,
            action: function() {
              util.jump2LoginPage(window.location.href);
            }
          }).show();
          // util.jump2LoginPage(window.location.href);
        } else if (result.getStatus()) {
          // var fuiou = result.getData(),   data = {     amt: fuiou.getAmt(),
          // back_notify_url: fuiou.getBackNotifyUrl(),     login_id: fuiou.getLoginId(),
          // mchnt_cd: fuiou.getMchntCd(),     mchnt_txn_ssn: fuiou.getMchntTxnSsn(),
          // page_notify_url: fuiou.getPageNotifyUrl(),     signature:
          // fuiou.getSignature(),   };

          executeCallback(result.getData(), callback);

          // loadFuiouRechargePage(data); investService.recharge2Fuiou(result.getData(),
          // function (result) {   console.log(result); }, handleError);
          // alert(result.getMsg());
        } else {
          /**@todo 获取信息失败 */
          WebView
            .msgAlert({
              msg: result.getMsg()
            })
            .show();
        }
      }, handleError);
  };

  /**
   * 调取富有充值界面
   */
  function loadFuiouRechargePage(params) {
    var pStr = $.param(params),
      iframeSrc = config.PAGE_URI_MAP.FUIOU_FORM + '?' + pStr;
    $('body').html($('<iframe src="' + iframeSrc + '"></iframe>'));
  }

  /**
   * 预约投资
   * @param {object} options 预约信息
   */
  InvestController.prototype.invest = function(options, callback, errCallback) {
    var token = null,
      user = null;
    // 投资数据不合法，直接返回
    if (!validateInvestInfo(options)) {
      return;
    }
    try {
      user = userService.getLoginUserFromLocalStorage();
      if (user) {
        token = user.getToken();
        $.extend(options, {
          token: token,
          booksource: 2
        });
        // 不需要余额参数
        delete options.balance;
      } else {
        util.jump2LoginPage(window.location.href);
      }
      investService
        .invest(options, function(result) {
          var tmp = result.getData();
          if (tmp) {
            tmp.telphone = util.replacePhoneNumberUseAsterisk(user.getTelphone());
          }
          result.setData(tmp);
          executeCallback(result, callback);
        }, function(res) {
          executeCallback(res, errCallback);
        });
    } catch (error) {
      systemErrorTips(error);
    }
  };

  /**
   * 验证投资数据合法性
   */
  function validateInvestInfo(options) {
    if ('' === options.code) {
      WebView
        .msgAlert({
          msg: '请输入验证码。'
        })
        .show();
      return false;
    }
    if (!(config.INTEGER_MULTIPLE_100.test(options.money))) {
      WebView
        .msgAlert({
          msg: '请输入合法的预约金额（100的整数倍）。'
        })
        .show();
      return false;
    }
    if (options.money > options.balance) {
      WebView
        .msgAlert({
          msg: '余额不足，请充值。'
        })
        .show();
      return false;
    }
    return true;
  }

  /**
   * 加载标的的总投资记录
   * @param {number} currentPage 当前页
   */
  InvestController.prototype.getInvestList = function(currentPage, callback, errCallback) {
    var options = {
      currentPage: currentPage,
      pageSize: 10
    };

    investService.getInvestList(options, function(result) {
      if (result.getStatus()) {
        executeCallback(result.getData(), callback);
      } else {
        /**@todo 获取信息失败 */
        WebView
          .msgAlert({
            msg: result.getMsg()
          })
          .show();
        typeof errCallback === 'function' && errCallback();
      }
    }, handleError);
  };

  /**
   * 首页加载标的信息
   * @param {function} callback 回调
   */
  InvestController.prototype.getInvestInfo = function(callback) {
    investService
      .getInvestInfo(function(result) {
        if (result.getStatus()) {
          executeCallback(result.getData(), callback);
        } else {
          /**@todo 获取信息失败 */
          WebView
            .msgAlert({
              msg: result.getMsg()
            })
            .show();
        }
      }, handleError);
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
    WebView
      .msgAlert({
        msg: result.getMsg()
      })
      .show();
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
    INSTANCE = new InvestController();
  }

  return INSTANCE;
}));
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * @module {AppService} appService
     */
    define('appService', [
      'jquery', 'config', 'util', 'Result', 'Focus', 'CapitalFlow', 'Message', 'District', 'Bank', 'Fuiou', 'H5Urls'
    ], factory);
  } else {
    window.appService = factory();
  }
}(function ($, config, util, Result, Focus, CapitalFlow, Message, District, Bank, Fuiou, H5Urls) {
  'use strict';
  var INSTANCE = null;
  /**
   * 构造器
   * @constructor {AppService} AppService
   */
  function AppService() { }

  /**
   * 是否有待领取红包
   * IS_EXSIT_WAIT_TAKE_RED_PACKET
   */
  AppService.prototype.isExsitWaitTakeRedPacket = function (opts, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.IS_EXSIT_WAIT_TAKE_RED_PACKET,
      data: util.JSONStringify(opts)
    }).then(function (res) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);

      if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        result.setStatus(_status);
      } else if ('1' === _status) {
        result.setStatus(true);
        result.setData(res.data.isExist);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function (xhr, status, error) {
      handleError(result, errCallback);
    });
  }

  /**
   * 我的奖励 失效列表
   * EN_USED_AWARD_LIST
   */
  AppService.prototype.enUsedAwardList = function (opts, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.EN_USED_AWARD_LIST,
      data: util.JSONStringify(opts)
    }).then(function (res) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);

      if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        result.setStatus(_status);
      } else if ('1' === _status) {
        result.setStatus(true);
        result.setData(res.data.data);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function (xhr, status, error) {
      handleError(result, errCallback);
    });
  }

  /**
   * 我的奖励 已使用列表
   * USED_AWARD_LIST
   */
  AppService.prototype.usedAwardList = function (opts, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.USED_AWARD_LIST,
      data: util.JSONStringify(opts)
    }).then(function (res) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);

      if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        result.setStatus(_status);
      } else if ('1' === _status) {
        result.setStatus(true);
        result.setData(res.data.data);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function (xhr, status, error) {
      handleError(result, errCallback);
    });
  }

  /**
   * 我的奖励 可用红包列表
   * AVAILABLE_AWARD_LIST
   */
  AppService.prototype.availableAwardList = function (opts, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.AVAILABLE_AWARD_LIST,
      data: util.JSONStringify(opts)
    }).then(function (res) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);

      if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        result.setStatus(_status);
      } else if ('1' === _status) {
        result.setStatus(true);
        result.setData(res.data.data);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function (xhr, status, error) {
      handleError(result, errCallback);
    });
  }

  /**
   * 立即领取
   * TAKE_RED_PACKET
   */
  AppService.prototype.takeRedPacket = function (opts, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.TAKE_RED_PACKET,
      data: util.JSONStringify(opts)
    }).then(function (res) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);

      if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        result.setStatus(_status);
      } else if ('1' === _status) {
        result.setStatus(true);
        // result.setData(res.data.isExist);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function (xhr, status, error) {
      handleError(result, errCallback);
    });
  }

  /**
   * 点击控件加载 待领取 现金红包列表
   * WAIT_TAKE_RED_PACKET
   */
  AppService.prototype.waitTakeRedPacket = function (opts, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.WAIT_TAKE_RED_PACKET,
      data: util.JSONStringify(opts)
    }).then(function (res) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);

      if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        result.setStatus(_status);
      } else if ('1' === _status) {
        result.setStatus(true);
        result.setData(res.data.redPackets);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function (xhr, status, error) {
      handleError(result, errCallback);
    });
  }

  /**
   * 买入可用红包列表
   * AVAILABLE_AWARD
   */
  AppService.prototype.availableAward = function (opts, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.AVAILABLE_AWARD,
      data: util.JSONStringify(opts)
    }).then(function (res) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);

      if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        result.setStatus(_status);
      } else if ('1' === _status) {
        result.setStatus(true);
        result.setData(res.data.data);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function (xhr, status, error) {
      handleError(result, errCallback);
    });
  }

  /**
   * 收益计算器
   */
  AppService.prototype.caculate = function (opts, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.CALCULATOR,
      data: util.JSONStringify(opts)
    }).then(function (res) {
      // console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if (_status == '1') {
        result.setStatus(true);
        result.setData({
          sumEarn: res.data.sumEarn,
          sumMoney: res.data.sumMoney,
          list: res.data.list
        })
      } else if (_status == '0') {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function (xhr, status, error) {
      handleError(result, errCallback);
    });
  };

  /**
   * 各种URL
   */
  AppService.prototype.getH5Urls = function (succCallback, errCallback) {
    var result = new Result(),
      urls = null;
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.H5_URL
    }).then(function (res) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if ('1' === _status) {
        urls = new H5Urls();
        urls.setAllocationUrl(res.data.allocationUrl);
        urls.setSafetyUrl(res.data.safetyUrl);
        urls.setRegistrationUrl(res.data.registrationUrl);
        urls.setRegistration4fuiouUrl(res.data.registration4fuiouUrl);
        result.setStatus(true);
        result.setData(urls);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function () {
      handleError(result, errCallback);
    });
  };

  /**
   * 帮助中心
   */
  AppService.prototype.getHelpCenter = function (succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.HELP_CENTER
    }).then(function (res) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if ('1' === _status) {
        result.setStatus(true);
        result.setData(res.data.helpURL);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function () {
      handleError(result, errCallback);
    });
  };

  /**
   * 修改支付密码 获取签名
   */
  AppService.prototype.resetPassWordReq = function (options, succCallback, errCallback) {
    var result = new Result(),
      f = null;
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.RESET_PASSWORD_REQ,
      data: util.JSONStringify(options)
    }).then(function (res) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        result.setStatus(_status);
      } else if ('1' === _status) {
        f = new Fuiou();
        result.setStatus(true);
        result.setData();
      } else if ('0' === _status) {
        result.setStatus(false);
      }
    }, function () {
      handleError(result, errCallback);
    });
  };

  /**
   * 获取支持银行列表
   */
  AppService.prototype.getSupportedBanks = function (succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.LOAD_BANK_CODE
    }).then(function (res) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if ('1' === _status) {
        result.setStatus(true);
        result.setData(mapSupportedbanks(res.data.datas));
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function () {
      handleError(result, errCallback);
    });
  };

  function mapSupportedbanks(list) {
    var tmp = [],
      b = null;

    $.each(list, function (index, item) {
      b = new Bank();
      b.setId(item.id);
      b.setName(item.bankName);
      b.setCode(item.bankCode);
      b.setIsCompany(item.isCompany);
      b.setIsIndividual(item.isIndividual);
      tmp.push(b);
    });

    return tmp;
  }

  /**
   * 获取城市
   */
  AppService.prototype.getCities = function (options, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.LOAD_CITY,
      data: util.JSONStringify(options)
    }).then(function (res) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if ('1' === _status) {
        result.setStatus(true);
        result.setData(mapCities(res.data.datas));
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function () {
      handleError(result, errCallback);
    });
  };

  function mapCities(list) {
    var tmp = [],
      d = null;

    $.each(list, function (index, item) {
      d = new District();
      d.setId(item.id);
      d.setName(item.area);
      d.setCode(item.areaCode);
      d.setParentName(item.province);
      d.setParentCode(item.provinceCode);
      tmp.push(d);
    });

    return tmp;
  }


  /**
   * 获取省份
   */
  AppService.prototype.getProvinces = function (succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.LOAD_PROVINCE
    }).then(function (res) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if ('1' === _status) {
        result.setStatus(true);
        result.setData(mapProvinces(res.data.datas));
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function () {
      handleError(result, errCallback);
    });
  };

  function mapProvinces(list) {
    var tmp = [],
      d = null;

    $.each(list, function (index, item) {
      d = new District();
      d.setId(item.id);
      d.setName(item.province);
      d.setCode(item.provinceCode);
      d.setParentName('');
      d.setParentCode('');
      tmp.push(d);
    });

    return tmp;
  }

  /**
   * 风险评估页面
   */
  AppService.prototype.getRiskUrl = function (token, succCallback, errCallback) {
    var result = new Result(),
      data = {
        token: token
      };
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.RISK_URL,
      data: util.JSONStringify(data)
    }).then(function (res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        result.setStatus(_status);
      } else if ('1' === _status) {
        result.setStatus(true);
        result.setData(res.data.riskUrl);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function (xhr, status, error) {
      handleError(result, errCallback);
    });
  };

  /**
   * 更新已读消息状态
   */
  AppService.prototype.msgReaded = function (options, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.MSG_READED,
      data: util.JSONStringify(options)
    }).then(function (res) {
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
    }, function () {
      handleError(result, errCallback);
    });
  };


  /**
   * 我的消息
   */
  AppService.prototype.getMyMessage = function (options, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.MY_MESSAGE,
      data: util.JSONStringify(options)
    }).then(function (res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        result.setStatus(_status);
      } else if ('1' === _status) {
        result.setStatus(true);
        result.setData(mapMyMessageInfo(res.data));
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function (xhr, status, error) {
      handleError(result, errCallback);
    });
  };

  function mapMyMessageInfo(data) {
    var mo = {},
      tmp = [],
      message = null;
    $.each(data.data, function (index, item) {
      message = new Message();
      message.setId(item.id);
      message.setTitle(item.title);
      message.setCreateDate(item.createDateStr);
      message.setContent(item.content);
      message.setStatus(item.status);
      message.setNum(item.num);
      tmp.push(message);
    });

    mo.messages = tmp;
    mo.num = data.num;

    return mo;
  }
  /**
   * 官方消息
   */
  AppService.prototype.getCommuniqueMessage = function (options, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.COMMUNIQUE_MESSAGE,
      data: util.JSONStringify(options)
    }).then(function (res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        result.setStatus(_status);
      } else if ('1' === _status) {
        result.setStatus(true);
        result.setData(mapCommuniqueMessage(res.data));
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function (xhr, status, error) {
      handleError(result, errCallback);
    });
  };

  function mapCommuniqueMessage(data) {
    var mo = {},
      tmp = [],
      mapCommuniqueMessage = null;
    $.each(data.data, function (index, item) {
      mapCommuniqueMessage = new Message();
      mapCommuniqueMessage.setNewsContent(item.newsContent);
      mapCommuniqueMessage.setAppAbstract(item.appAbstract);
      mapCommuniqueMessage.setOpdateString(item.opdateString);
      mapCommuniqueMessage.setUrl(item.url);
      mapCommuniqueMessage.setAppIcon(item.appIcon);
      tmp.push(mapCommuniqueMessage);
    });

    mo.mapCommuniqueMessage = tmp;

    return mo;
  }

  /**
   * 消息-智享预约
   */
  AppService.prototype.getNotice = function (options, succCallback, errCallback) {
    console.log(options)
    var result = new Result(),
      ip = null;
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.GET_NOTICE,
      data: util.JSONStringify(options)
    }).then(function (res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        result.setStatus(_status);
      } else if ('1' == _status) {
        result.setStatus(true);
        result.setData(res.data.data);
      } else if ('0' == _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function (xhr, status, error) {
      handleError(result, errCallback);
    });
  };

  /**
   * 消息-智享预约详情
   */
  AppService.prototype.getNoticeDetail = function (options, succCallback, errCallback) {
    var result = new Result();
    console.log(options);
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.GET_NOTICE_DETAIL,
      data: util.JSONStringify(options)
    }).then(function (res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        result.setStatus(_status);
      } else if ('1' == _status) {
        result.setStatus(true);
        result.setData(res.data.data);
      } else if ('0' == _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function (xhr, status, error) {
      handleError(result, errCallback);
    });
  };

  /**
   * 消息-我的资产
   * @param {string} token 登录用户token
   * @param {Function} succCallback 请求结果成功返回时的回调
   * @param {Function} errCallback 请求发生错误时的回调
   */
  AppService.prototype.getMyAssetsMessage = function (options, succCallback, errCallback) {
    var
      result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.MY_ASSETS_MESSAGE,
      data: util.JSONStringify(options)
    }).then(function (res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);

      if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        result.setStatus(_status);
      } else if ('1' === _status) {
        result.setStatus(true);
        result.setData({
          list: mapAssetMessages(res.data.data),
          num: res.data.num
        });
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function (xhr, status, error) {
      handleError(result, errCallback);
    });
  };

  function mapAssetMessages(list) {
    var m = null,
      l = [];
    $.each(list, function (idx, msg) {
      m = new Message();
      m.setCreateDate(msg.dateStr);
      m.setTitle(msg.title);
      m.setContent(msg.content);
      m.setStatus(msg.status);
      m.setId(msg.id);
      l.push(m);
    });
    return l;
  }
  /**
   * 加载焦点列表
   */
  AppService.prototype.getFocusList = function (options, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.MESSAGE_LIST,
      data: util.JSONStringify(options)
    }).then(function (res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if ('1' === _status) {
        result.setStatus(true);
        result.setData(mapFocus(res.data.data));
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function (xhr, status, error) {
      handleError(result, errCallback);
    });
  };

  function mapFocus(list) {
    var F = null,
      tmp = [];
    $.each(list, function (index, focus) {
      F = new Focus();
      F.setId(focus.id);
      F.setTypeIcon(focus.typeIcon);
      F.setTitle(focus.title);
      F.setImage(focus.image);
      F.setSource(focus.source);
      F.setAimUrl(focus.aimUrl);
      F.setCreateTime(focus.creattimeStr);
      F.setMessage(focus.message);
      F.setIsValid(focus.isValid === 'Y');
      tmp.push(F);
    });
    return tmp;
  }

  /**
   * 意见反馈
   */
  AppService.prototype.feedback = function (feedback, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.SUBMIT_FEEDBACK,
      data: util.JSONStringify(feedback)
    }).then(function (res, status, xhr) {
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

  AppService.prototype.openFuiouAccount = function () {

  };

  /**
   * 资金流水列表
   */
  AppService.prototype.getCapitalList = function (options, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.CAPITAL_LIST,
      data: util.JSONStringify(options)
    }).then(function (res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        result.setStatus(_status);
      } else if ('1' === _status) {
        result.setStatus(true);
        result.setData(mapData2CapitalFlow(res.data.datas));
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function (xhr, status, error) {
      handleError(result, errCallback);
    });
  };


  /**
   * 映射数据到 @listens {Array<CapitalFlow>}
   */
  function mapData2CapitalFlow(list) {
    var tmp = [],
      cf = null,
      signSymbol;
    $.each(list, function (index, item) {
      signSymbol = '+';
      if (/^2|3|4|7|13|14|15$/.test(item.dealtype)) {
        signSymbol = '-';
      }
      cf = new CapitalFlow();
      cf.setId(item.fid);
      cf.setDealtype(item.dealtype);
      cf.setDealtypeStr(item.dealtypeStr);
      cf.setOpdate(item.opdateStr);
      cf.setDealmoney(item.dealmoney);
      cf.setUserloginname(item.userloginname);
      cf.setRealname(item.realname);
      cf.setSSN(item.ssn);
      cf.setSignSymbol(signSymbol);

      tmp.push(cf);
    });

    return tmp;
  }

	/**
   * 投资记录
   */
  AppService.prototype.getInvestNewList = function (options, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.INVEST_NEWLIST,
      data: util.JSONStringify(options)
    }).then(function (res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        result.setStatus(_status);
      } else if ('1' === _status) {
        result.setStatus(true);
        result.setData(res.data.data);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function (xhr, status, error) {
      handleError(result, errCallback);
    });
  };


  /**
   * 获取手机验证码
   * @param {string} telphone 接收验证码的手机号
   */
  AppService.prototype.getPhoneCode = function (options, succCallback, errCallback) {
    console.log(options);
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.SEND_RAND_CODE,
      data: util.JSONStringify(options)
    }).then(function (res, status, xhr) {
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if ('1' === _status) {
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
    INSTANCE = new AppService();
  }

  return INSTANCE;
}));
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define('userService', [
      'jquery', 'cookie', 'config', 'util', 'Result', 'User', 'Asset', 'Fuiou', 'Message'
    ], factory);
  } else {
    window.userService = factory();
  }
}(function($, cookie, config, util, Result, User, Asset, Fuiou, Message) {
  'use strict';
  var INSTANCE = null;

  /**
   * 构造器
   * @constructor {UserService} UserService
   */
  function UserService() {}

  /**
   * 上传头像
   */
  UserService.prototype.uploadPortrait = function(opts, succCallback, errCallback) {
    console.log(opts)
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.MODIFY_IMAGE,
      data: util.JSONStringify(opts)
    }).then(function(res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if (_status == config.LOGIN_FAILURE_STATUS_CODE) {
        result.setStatus(_status);
      } else if (_status == '1') {
        result.setData(res.data.imgUrl);
        result.setStatus(true);
      } else if (_status == '0') {
        result.setStatus(false);
      }
      executeSuccCallback(result, succCallback);
    }, function(xhr, status, error) {
      handleError(result, errCallback);
    });
  };

  /**
   * 加载头像
   */
  UserService.prototype.loadPortrait = function(opts, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.LOAD_IMAGE,
      data: util.JSONStringify(opts)
    }).then(function(res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if (_status == config.LOGIN_FAILURE_STATUS_CODE) {
        result.setStatus(_status);
      } else if (_status == '1') {
        result.setData(res.data.imgUrl);
        result.setStatus(true);
      } else if (_status == '0') {
        result.setStatus(false);
      }
      executeSuccCallback(result, succCallback);
    }, function(xhr, status, error) {
      handleError(result, errCallback);
    });
  };

  /**
   * 验证安心签授权吗
   */
  UserService.prototype.checkVerification = function(opts, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.CHECK_VERIFICATION,
      data: util.JSONStringify(opts)
    }).then(function(res, status, xhr) {
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if (_status == config.LOGIN_FAILURE_STATUS_CODE) {
        result.setStatus(_status);
      } else if (_status == '1') {
        result.setStatus(true);
      } else if (_status == '0') {
        result.setStatus(false);
      }
      executeSuccCallback(result, succCallback);
    }, function(xhr, status, error) {
      handleError(result, errCallback);
    });
  };

  /**
   * 发送安心签授权码
   */
  UserService.prototype.sendverification = function(opts, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.SEND_VERIFICATION,
      data: util.JSONStringify(opts)
    }).then(function(res, status, xhr) {
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if (_status == config.LOGIN_FAILURE_STATUS_CODE) {
        result.setStatus(_status);
      } else if (_status == '1') {
        result.setStatus(true);
      } else if (_status == '0') {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function(xhr, status, error) {
      handleError(result, errCallback);
    });
  };

  /**
   * 富友开户，获取签名
   */
  UserService.prototype.fuiouReg = function(fuiou, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URI_MAP.FUIOU_WEB_REG,
      data: fuiou,
      dataType: 'xml'
    }).then(function(res, status, xhr) {
      console.log(res);
      // executeSuccCallback(result, succCallback);
    }, function(xhr, status, error) {
      handleError(result, errCallback);
    });
  };

  /**
   * 加载老用户信息
   */
  UserService.prototype.loadOldCustomerInfo = function(options, succCallback, errCallback) {
    var result = new Result(),
      user = null;
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.LOAD_OLD_CUSTOMER_INFO,
      data: util.JSONStringify(options)
    }).then(function(res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        result.setStatus(_status);
      } else if ('1' === _status) {
        result.setStatus(true);
        user = new User();
        user.setUsername(res.data.userinfos.realname);
        user.setTelphone(res.data.userinfos.mobile_no);
        user.setCardnum(res.data.userinfos.cardnum);
        user.setBankCardNum(res.data.userinfos.bankcardnum);
        user.setCityId(res.data.userinfos.city_id);
        user.setCityName(res.data.userinfos.city);
        user.setBankCode(res.data.userinfos.bankname);
        user.setBankName(res.data.userinfos.bank);
        result.setData(user);
      } else if ('0' === _status) {
        result.setStatus(false);
      }
      executeSuccCallback(result, succCallback);
    }, function(xhr, status, error) {
      handleError(result, errCallback);
    });
  };

  /**
   * 富友开户，获取签名
   */
  UserService.prototype.fuiouWebRegData = function(options, succCallback, errCallback) {
    var result = new Result(),
      f = null;
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.FUIOU_WEB_REG_DATA,
      data: util.JSONStringify(options)
    }).then(function(res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        result.setStatus(_status);
      } else if ('1' === _status) {
        // var formData = res.data.formData;
        // f = new Fuiou();
        // f.setBankName(formData.bank_nm);
        // f.setCapAcntNo(formData.capAcntNo);
        // f.setCertifId(formData.certif_id);
        // f.setCityId(formData.city_id);
        // f.setCustomName(formData.cust_nm);
        // f.setEmail(formData.email);
        // f.setLoginPassword(formData.lpassword);
        // f.setPassword(formData.password);
        // f.setMchntTxnSsn(formData.mchnt_txn_ssn);
        // f.setMobileNo(formData.mobile_no);
        // f.setParentBankId(formData.parent_bank_id);
        // f.setSignature(formData.signature);
        // f.setMchntCd(formData.mchnt_cd);
        // f.setCertifType((formData.certif_tp || '0'));
        result.setStatus(true);
        // result.setData(f);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function(xhr, status, error) {
      handleError(result, errCallback);
    });
  };

  /**
   * 加载姓名、身份证号
   * @param {string} token 登录用户token
   * @param {Function} succCallback 请求结果成功返回时的回调
   * @param {Function} errCallback 请求发生错误时的回调
   */
  UserService.prototype.loadRealnameAuth = function(token, succCallback, errCallback) {
    var result = new Result(),
      user = null,
      options = {
        token: token
      };
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.LOAD_AUTH,
      data: util.JSONStringify(options)
    }).then(function(res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        result.setStatus(_status);
      } else if ('1' === _status) {
        user = new User();
        user.setUsername(res.data.username);
        user.setCardnum(res.data.cardnum);
        result.setStatus(true);
        result.setData(user);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function(xhr, status, error) {
      handleError(result, error);
    });
  };

  /**
   * 实名认证(保存姓名、身份证号)
   * @param {User} user 用户实名信息
   * @param {Function} succCallback 请求结果成功返回时的回调
   * @param {Function} errCallback 请求发生错误时的回调
   */
  UserService.prototype.realnameAuth = function(user, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.AUTH,
      data: util.JSONStringify(user)
    }).then(function(res, status, xhr) {
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
    }, function(xhr, status, error) {
      handleError(result, error);
    });
  };

  /**
   * 我的资产
   * @param {string} token 登录用户token
   * @param {Function} succCallback 请求结果成功返回时的回调
   * @param {Function} errCallback 请求发生错误时的回调
   */
  UserService.prototype.getMyAsset = function(token, succCallback, errCallback) {
    var data = {
        token: token
      },
      result = new Result(),
      asset = null;
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.MY_ASSET,
      data: util.JSONStringify(data)
    }).then(function(res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        result.setStatus(_status);
      } else if ('1' === _status) {
        result.setStatus(true);
        asset = new Asset();
        asset.setCTBalance(res.data.ct_balance);
        asset.setCABalance(res.data.ca_balance);
        asset.setCFBalance(res.data.cf_balance);
        asset.setMobile(res.data.mobile);
        asset.setRechargeSum(res.data.rechargeSum);
        asset.setSumEarnings(res.data.sumEarnings);
        asset.setWithdrawSum(res.data.withdrawSum);
        asset.setSumUnGetInterest(res.data.sumUnGetInterest);
        asset.setAwardOfActivity(res.data.awardOfActivity);
        asset.setFreezeOfGeneral(res.data.freezeOfGeneral);
        asset.setFreezeOfZhix(res.data.freezeOfZhix);
        asset.setMyAsset(res.data.myAsset);
        asset.setOtherMoney(res.data.otherMoney);
        asset.setSumEarned(res.data.sumEarned);
        asset.setWaitingOfCapital(res.data.waitingOfCapital);
        asset.setWaitingOfCapital(res.data.waitingOfCapital);
        result.setData(asset);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function(xhr, status, error) {
      handleError(result, errCallback);
    });
  };


  /**
   * 我的（包含实名认证结果）
   * @param {string} token 登录用户token
   * @param {Function} succCallback 请求结果成功返回时的回调
   * @param {Function} errCallback 请求发生错误时的回调
   */
  UserService.prototype.loadUserAuthResult = function(token, succCallback, errCallback) {
    var data = {
        token: token
      },
      result = new Result(),
      user = null;
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.LOAD_USER_AUTH_RESULT,
      data: util.JSONStringify(data)
    }).then(function(res, status, xhr) {
      console.log(res);
      var _status = res.data.status,
        isAuth = false;
      result.setMsg(res.data.msg);
      if ('1' === _status) {
        user = new User();
        user.setIsSign('Y' === res.data.issign);
        user.setIsAuth('Y' === res.data.isauth);
        user.setInvestusertype(res.data.investusertype);
        user.setInvestusertypeNum(res.data.investusertypeNum);
        user.setUsername(res.data.username);
        user.setInvitecode(res.data.invitecode);
        result.setStatus(true);
        result.setData(user);
      } else if ('0' === _status) {
        result.setStatus(false);
      } else if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
        // 登录失效
        result.setStatus(_status);
      }

      executeSuccCallback(result, succCallback);

    }, function(xhr, stauts, error) {
      handleError(result, errCallback);
    });
  };
  /**
   * 判断账户是否登录，在本地取登录状态 cookie，
   *  如果获取到有效的值，
   *     如果未指定用户则返回已登录（cookie记录的用户信息）； 
   *     如果指定了用户，并且cookie记录的用户信息与指定用户信息匹配则说明是登录状态。
   * 
   * @param {User} user 用户信息
   * @return {Result} 如果已经登录返回登录成功信息
   */
  UserService.prototype.isLogin = function(user) {
    var result = new Result(),
      loginUser;
    try {
      loginUser = this.getLoginUserFromLocalStorage();
      if (loginUser !== null) {
        if (user && loginUser.getTelphone() !== user.telphone()) {
          return _notLogin();
        } else {
          return _hasLogin();
        }
        return _hasLogin();
      } else {
        return _notLogin();
      }
    } catch (error) {
      return _notLogin();
    }
    // 已经登录
    function _hasLogin() {
      result.setStatus(true);
      result.setMsg('已登录。');
      result.setData(loginUser);

      return result;
    }
    // 未登录
    function _notLogin() {
      result.setStatus(false);
      result.setMsg('请登录。');
      result.setData(null);

      return result;
    }
  };


  /**
   * 从本地存储获取登录用户信息
   * @return {User} 当前登录用户
   * @return {User} 用户存在返回当前用户信息，否则返回null
   */
  UserService.prototype.getLoginUserFromLocalStorage = function() {
    var tmp, cookie_user = null,
      user = null;
    try {
      tmp = cookie.get(config.LOGIN_COOKIE_NAME);
      if (tmp) {
        cookie_user = util.parseJSON(decodeURIComponent(tmp));
      }
      if (cookie_user) {
        user = new User();
        user.setTelphone(cookie_user.telphone);
        user.setSign(cookie_user.sign);
        user.setToken(cookie_user.token);
      }
    } catch (error) {
      /**@todo （ 读取cookie|解码|解析JSON ） 失败 */
      throw new Error('从cookie本地存储中获取登录用户信息失败。');
    }

    return user;
  };

  /**
   * 修改密码
   * @param {object} user
   */
  UserService.prototype.mondifyLoginPassword = function(user, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.CHANGE_PASSWORD,
      data: util.JSONStringify(user)
    }).then(function(res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if ('1' === _status) {
        result.setStatus(true);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function(xhr, status, error) {
      handleError(result, errCallback);
    });
  };
  
   /**
   * 判断是否已设置支付密码
   * @param {object} user
   */
  UserService.prototype.isHadPaypwd = function(token, succCallback, errCallback) {
    var data = {
        token: token
      },
      result = new Result(),
      user = null;
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.ISHADPAYPWD,
      data: util.JSONStringify(data)
    }).then(function(res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if ('1' === _status) {
      	user = new User();
        result.setData(res);
        result.setStatus(true);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function(xhr, status, error) {
      handleError(result, errCallback);
    });
  };
  
	/**
   * 身份验证手机验证码
   * @param {object} user
   */
  UserService.prototype.checkCode4checkEquipment = function(token, succCallback, errCallback) {
    var data = {
        token: token
      },
      result = new Result(),
      user = null;
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.CHECKCODE4CHECKEQUIPMENT,
      data: util.JSONStringify(data)
    }).then(function(res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if ('1' === _status) {
      	user = new User();
        result.setData(res);
        result.setStatus(true);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function(xhr, status, error) {
      handleError(result, errCallback);
    });
  };
  
  /**
   * 添加支付密码
   * @param {object} user
   */
  UserService.prototype.addPayPwd = function(opts, succCallback, errCallback) {
    var result = new Result(),
      user = null;
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.ADDPAYPWD,
      data: util.JSONStringify(opts)
    }).then(function(res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if ('1' === _status) {
        user = new User();
        result.setData(res);
        result.setStatus(true);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function(xhr, status, error) {
      handleError(result, errCallback);
    });
  };

	/**
   * 验证原始支付密码
   * @param {object} user
   */
  UserService.prototype.verifyPaypwd = function(options, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.VERIFYPAYPWD,
      data: util.JSONStringify(options)
    }).then(function(res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if ('1' === _status) {
        result.setStatus(true);
      } else if ('0' === _status) {
        result.setStatus(false);
      } else{
      	result.setStatus(_status);
      }
      
      result.setData(res.data.Time);

      executeSuccCallback(result, succCallback);
    }, function(xhr, status, error) {
      handleError(result, errCallback);
    });
  };
  
  
  
  /**
   * 根据旧密码修改支付密码
   * @param {object} user
   */
  UserService.prototype.changePayPwdOld = function(options, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.CHANGEPAYPWDOLD,
      data: util.JSONStringify(options)
    }).then(function(res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if ('1' === _status) {
        result.setStatus(true);
      } else if ('0' === _status) {
        result.setStatus(false);
      } else{
      	result.setStatus(_status);
      }
      
      result.setData(res.data.Time);

      executeSuccCallback(result, succCallback);
    }, function(xhr, status, error) {
      handleError(result, errCallback);
    });
  };
  
  /**
   * 身份认证
   * @param {object} user
   */
  UserService.prototype.authentication = function(options, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.AUTHENTICATION,
      data: util.JSONStringify(options)
    }).then(function(res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if ('1' === _status) {
        result.setStatus(true);
      } else if ('0' === _status) {
        result.setStatus(false);
      } else{
      	result.setStatus(_status);
      }
      
      result.setData(res.data.Time);

      executeSuccCallback(result, succCallback);
    }, function(xhr, status, error) {
      handleError(result, errCallback);
    });
  };
  
  
	/**
   * 根据认证修改支付密码
   * @param {object} user
   */
  UserService.prototype.changePayPwdByAuth = function(options, succCallback, errCallback) {
    var result = new Result(),
      user = null;
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.CHANGEPAYPWDBYAUTH,
      data: util.JSONStringify(options)
    }).then(function(res, status, xhr) {
      console.log(res);
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if ('1' === _status) {
        user = new User();
        result.setData(res);
        result.setStatus(true);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function(xhr, status, error) {
      handleError(result, errCallback);
    });
  };

  /**
   * 登录
   * @param {User} user 用户信息
   * @param {Function} succCallback 请求结果成功返回时的回调
   * @param {Function} errCallback 请求发生错误时的回调
   */
  UserService.prototype.loginCode2Login = function(user, succCallback, errCallback) {
    var result = new Result(),
      _user = null;
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.LOGIN_BY_CODE,
      data: util.JSONStringify(user)
    }).then(function(res, status, xhr) {
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if ('1' === _status) {
        _user = new User();
        _user.setTelphone(user.getTelphone());
        _user.setToken(res.data.token);
        _user.setSign(res.data.sign);
        result.setStatus(true);
        result.setData(_user);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function(xhr, status, error) {
      handleError(result, errCallback);
    });
  };


  /**
   * 登录
   * @param {User} user 用户信息
   * @param {Function} succCallback 请求结果成功返回时的回调
   * @param {Function} errCallback 请求发生错误时的回调
   */
  UserService.prototype.password2login = function(user, succCallback, errCallback) {
    var result = new Result(),
      _user = null;
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.LOGIN_BY_PASSWORD,
      data: util.JSONStringify(user)
    }).then(function(res, status, xhr) {
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if ('1' === _status) {
        _user = new User();
        _user.setTelphone(user.getTelphone());
        _user.setToken(res.data.token);
        _user.setSign(res.data.sign);
        result.setStatus(true);
        result.setData(_user);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function(xhr, status, error) {
      handleError(result, errCallback);
    });
  };

  /**
   * 注册
   * @param {User} user 注册用户信息
   * @param {Function} succCallback 请求结果成功返回时的回调
   * @param {Function} errCallback 请求发生错误时的回调
   */
  UserService.prototype.register = function(user, succCallback, errCallback) {
    var result = new Result();
    $.ajax({
      url: config.SERVICE_URL + config.SERVICE_URI_MAP.REGISTER,
      data: util.JSONStringify(user)
    }).then(function(res, status, xhr) {
      var _status = res.data.status;
      result.setMsg(res.data.msg);
      if ('1' === _status) {
        result.setStatus(true);
        user.setSign(res.sign);
        user.setToken(res.data.token);
      } else if ('0' === _status) {
        result.setStatus(false);
      }

      executeSuccCallback(result, succCallback);
    }, function(xhr, status, error) {
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
    result.setMsg('未知错误请稍后重试。');
    result.setData(null);
    if (typeof callback === 'function') {
      callback(result);
    }
  }

  if (INSTANCE === null) {
    INSTANCE = new UserService();
  }

  return INSTANCE;

}));
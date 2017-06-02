(function (factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * 工具方法类
     * @module {Util} util
     */
    define('util', [
      'jquery', 'config'
    ], factory);
  } else {
    window.util = factory();
  }
}(function ($, config) {

  var Util = {};

  /**
   * 替换后台返回资源域
   * @param {string} resUrl
   */
  Util.replaceResUrlOrigin = function (resUrl) {
    return resUrl && resUrl.replace(/^https?:\/\/[^/]*\//, config.RES_PAGE_URL_RP_ORIGIN);
  };

  /**
   * 跳转到实名认证页
   * @param {string} backUrl 跳转发起页面
   */
  Util.jump2RealNameAuthPage = function (backUrl) {
    if (typeof backUrl === 'string') {
      backUrl = encodeURIComponent(backUrl);
      window.location = config.BASE_URL + config.PAGE_URI_MAP.REALNAME_AUTH_PAGE + '?backUrl=' + backUrl;
    }
  };

  /**
   * 跳转到登录页
   * @param {string} backUrl 跳转发起页面
   */
  Util.jump2LoginPage = function (backUrl) {
    if (typeof backUrl === 'string') {
      backUrl = encodeURIComponent(backUrl);
      window.location = config.BASE_URL + config.PAGE_URI_MAP.LOGIN_PAGE + '?backUrl=' + backUrl;
    } else {
      window.location = config.BASE_URL + config.PAGE_URI_MAP.LOGIN_PAGE;
    }
  };

  /**
   * 图片404显示默认图片
   */
  Util.imgLoadFailed = function (img) {
    if (img) {
      img.src = config.BROKEN_IMAGE;
    }
  };

  /**
   * 用星号替换手机号码显示
   */
  Util.replacePhoneNumberUseAsterisk = function (value) {
    return value && value.replace(/^([0-9]{3})[0-9]{4}([0-9]{4})$/, '$1****$2');
  };

  /**
   * 验证邀请码合法性
   * @param {string} inviteCode 邀请码
   * @return {Boolean} 邀请码格式合法返回true，否则返回false
   */
  Util.checkInviteCode = function (inviteCode) {
    return config
      .INVITE_CODE_REG
      .test(inviteCode);
  };
  /**
   * 验证密码
   * @param {string} password 密码
   * @return {Boolean} 密码格式合法返回true，否则返回false
   */
  Util.checkPassword = function (password) {
    return config
      .PASSWORD_REG
      .test(password);
  };

  /**
   * 检查数字是否是合法的具有两位有效小数位的数字
   * @param {Number} decimal 小数
   * @return {Boolean} 数字合法返回true，否则返回false
   */
  Util.is2DecimalPlaces = function (decimal) {
    return config
      .TWO_DECIMAL_PLACES
      .test(decimal);
  };

  /**
   * 验证验证码
   * @param {string} code 验证码
   * @return {Boolean} 验证码格式合法返回true，否则返回false
   */
  Util.checkLoginCode = function (code) {
    return config
      .CODE_REG
      .test(code);
  };

  /**
   * 验证手机号码
   * @return {Boolean} 手机格式合法返回true，否则返回false
   */
  Util.checkTelphone = function (telphone) {
    return config
      .TEL_REG
      .test(telphone);
  };

  /**
   * 身份证号验证
   * @param {String} idNumber 身份证号
   * @return {Boolean} 身份证合法返回true，否则返回false
   */
  Util.checkIDCardNumber = function (idNumber) {
    if (!config.ID_CARD.test(idNumber)) {
      return false;
    }
    var idArr = [];
    if (idNumber.length === 15) {
      /**
       * 如果是15位身份证号，则先转换为18位
       * 转化成4位生日年份  '88' -> '1988'
       * 计算添加最后一位校验位 ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
       */
      idArr = idNumber.match(config.ID_CARD_NUMBER_15);
      idArr = idArr.slice(1);
      idArr[3] = '19' + idArr[3];
      idArr.push(calculateTheCheckDigit(idArr.join('')));
    } else if (idNumber.length === 18) {
      idArr = idNumber
        .match(config.ID_CARD_NUMBER_18)
        .slice(1);
    }
    return checkID(idArr);
  };

  /**
   * 检验身份证合法性：
   *  @param {Array} idArr 根据身份证规则切分成的字符数组
   *      省    市    地区    年      月    日   顺序吗  校验位
   *    ["43", "14", "03", "1968", "11", "24", "361", "3"]
   */
  function checkID(idArr) {
    var CS,
      Y,
      M,
      D,
      birthday,
      age;
    // 省份信息不合法，返回false
    if (!config.PROVINCE_CODE.test(idArr[0])) {
      return false;
    }
    CS = idArr
      .join('')
      .slice(0, 17);
    // 校验位不匹配，返回false
    if (idArr[7] !== calculateTheCheckDigit(CS)) {
      return false;
    }
    Y = parseInt(idArr[3], 10);
    M = parseInt(idArr[4] - 1, 10);
    D = parseInt(idArr[5], 10);
    birthday = new Date(Y, M, D);
    // 出生日期是否合法
    if (birthday.getFullYear() !== Y || birthday.getMonth() !== M || birthday.getDate() !== D) {
      return false;
    }
    // 年龄小于0岁，或者大于120岁，妖精
    age = (new Date()).getFullYear() - birthday.getFullYear();
    if (0 > age || age > 120) {
      return false;
    }
    return true;
  }

  /**
   * 计算身份证的校验位
   * @param {string} id 身份证号
   * @return {string} 校验位字符
   */
  function calculateTheCheckDigit(id) {
    var W = [
        7,
        9,
        10,
        5,
        8,
        4,
        2,
        1,
        6,
        3,
        7,
        9,
        10,
        5,
        8,
        4,
        2
      ],
      C = [
        '1',
        '0',
        'X',
        '9',
        '8',
        '7',
        '6',
        '5',
        '4',
        '3',
        '2'
      ],
      A = id.split(''),
      length = A.length,
      sum = 0,
      i = 0;
    for (; i < length; i++) {
      sum += parseInt(A[i], 10) * W[i];
    }
    // 返回校验位
    return C[sum % 11];
  }

  /**
   * 银行卡号验证
   */
  Util.checkBankNumber = function (bNumber) {};

  /**
   * 去除 URL 协议
   */
  Util.trimProtocol = function (url) {
    return url
      .replace(config.LEADING_OR_TRAILING_BLANKS, '')
      .replace(config.PROTOCOL_REG, '');
  };

  /**
   * @param {string} dateStr // "2016-12-12 17:27:12"
   * @param {string} format // YY年M月D日 H:m
   */
  Util.formatDate = function (dateStr, format) {
    var dateReg =
      //  年         月         日          时         分         秒
      /([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})/,
      dArr = dateStr
        .match(dateReg)
        .slice(1),
      _tmp;
    // console.log(dArr);
    _tmp = format
      .replace(/YY/, dArr[0])
      .replace(/Y/, dArr[0].slice(2, 4))
      .replace(/M/, dArr[1])
      .replace(/D/, dArr[2])
      .replace(/H/, dArr[3])
      .replace(/h/, parseInt(dArr[3], 10) % 12)
      .replace(/m/, dArr[4])
      .replace(/s/, dArr[5]);

    return _tmp;
  };

  /**
   * 获取查询字段
   */
  Util.getSearchField = function (field) {
    var searchStr = window.location.search,
      searchArr = searchStr && searchStr
        .substring(1)
        .split('&'),
      i = 0,
      length = searchArr.length;
    if (searchArr) {
      for (; i < length; i++) {
        item = searchArr[i].split('=');
        if (item[0] === field) {
          return decodeURIComponent(item[1]);
        }
      }
    }
    return null;
  };

  /**
   * 对象转化成JSON串
   */
  Util.JSONStringify2 = function (object) {
    var jsonStr = '',
      key;

    if (window.JSON && typeof JSON.stringify === 'function') {
      jsonStr = JSON.stringify(object);
    } else {
      if ($.isPlainObject(object)) {
        jsonStr += '{';

        for (key in object) {
          jsonStr += '"' + key + '":"' + object[key] + '",';
        }

        jsonStr = jsonStr.replace(/,$/, '');
        jsonStr += '}';
      }
    }
    return jsonStr;
  };

  /**
   * 对象转化成JSON串
   */
  Util.JSONStringify = function (object) {
    var jsonStr = '',
      key;

    if (window.JSON && typeof JSON.stringify === 'function') {
      jsonStr = JSON.stringify(object);
    } else {
      if ($.isPlainObject(object)) {
        jsonStr += '{';

        for (key in object) {
          jsonStr += '"' + key + '":"' + object[key] + '",';
        }

        jsonStr = jsonStr.replace(/,$/, '');
        jsonStr += '}';
      }
    }
    return encodeURIComponent(jsonStr);
  };

  /**
   * 解析 JSON 字符串
   */
  Util.parseJSON = function (jsonStr) {
    return $.parseJSON(jsonStr);
  };

  /**
   * 解析消息数据
   */
  Util.parseResponseMsg = function (msg) {
    var _msg = msg.split(config.MSG_SEPARATOR_REG);

    if (_msg.length > 1) {
      _msg[0] = '<span class="alert-msg-title">' + _msg[0] + '</span>';
    }
    return _msg.join('');
  };

  return Util;
}));
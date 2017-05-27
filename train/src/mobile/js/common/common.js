(function ($) {
  'use strict';
  var HL = {};
  var config = {
    // keying
    BASE_URL: 'http://192.168.12.109:8282',
    SERVICE_URL: 'http://192.168.12.109:8282',
    RES_PAGE_URL_RP_ORIGIN: 'https://fuyoutest.badoufax.com/',
    AJAX_MIME: 'application/json;charset="UTF-8"',
    TEL_400: '400-168-8885',
    PAGE_SIZE: 7,
    // 开启 debug 模式，控制台打印输出日志
    DEBUG: true,

    LOGIN_COOKIE_NAME: 'hzfl_1471934911365',
    LOGIN_FAILURE_STATUS_CODE: '100',
    LOGIN_FAILURE_STATUS_TEXT: '您的账号有异常登陆行为，如非本人操作请尽快修改密码。',

    // 首尾处的空白正则
    LEADING_OR_TRAILING_BLANKS: /(^\s*)|(\s*$)/g,
    // 协议正则
    PROTOCOL_REG: /^https?:/,
    // 消息分割符正则
    MSG_SEPARATOR_REG: /\s*[：:]+\s*/,
    // 100的整数倍
    INTEGER_MULTIPLE_100: /^[1-9][0-9]*0{2}$/,

    // 手机号校验正则
    TEL_REG: /^1[34578][0-9]{9}$/,
    // 密码校验正则
    PASSWORD_REG: /^(?!([a-zA-Z]+|[0-9]+)$)[a-zA-Z0-9]{8,16}$/,
    // 验证码校验正则
    CODE_REG: /^[0-9]{4,6}$/,
    // 邀请码校验正则
    INVITE_CODE_REG: /^[a-zA-Z0-9]*$/,
    // 身份证(位数&字符校验)
    ID_CARD: /^[0-9]{15}(?:[0-9]{2}[0-9Xx])?$/,
    // 身份证号正则18位，次序为省（3位）市（3位）年（4位）月（2位）日（2位）顺序码（4位），末尾校验位可能为X
    ID_CARD_NUMBER_18: /^([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{4})([0-9]{2})([0-9]{2})([0-9]{3})([0-9Xx])$/,
    // 身份证号正则15位，次序为省（3位）市（3位）年（2位）月（2位）日（2位）顺序码（3位），皆为数字
    ID_CARD_NUMBER_15: /^([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{3})$/,
    // 身份证号省份代码
    PROVINCE_CODE: /^(?:11|12|13|14|15|21|22|23|31|32|33|34|35|36|37|41|42|43|44|45|46|50|51|52|53|54|61|62|63|64|65|71|81|82|91)$/,
    // 两位有效小数位数字校验正则
    TWO_DECIMAL_PLACES: /^[1-9][0-9]*(?:.[0-9]{1,2})?$/,
    // 不需要登录的页面正则
    LOGIN_INTERCEPTOR_EXCLUDE_REG: /(?:index|login|register|help|reset-password|registration-agreement|fuioureg-aggrement|mondify-password)\.html$/,
    // 不需要登录的页面集合
    LOGIN_INTERCEPTOR_EXCLUDE: [],

    PAGE_URI_MAP: {
      REG_AND_LOGIN: '/tpl/register-login.html',
      RESET_PASSWOED: '/tpl/reset-password.html',
      CHANGE_PASSWOED: '/tpl/change-password.html'
    },

    SERVICE_URI_MAP: {
      LOGIN: '/login.json'
    },
    BROKEN_IMAGE: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABGUAAAGkCAIAAAAXBA+/AAAAGXRFWHRTb2' +
      'Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eH' +
      'BhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldG' +
      'EgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3ID' +
      'c5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPS' +
      'JodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdG' +
      'lvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bW' +
      'xuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dH' +
      'A6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD' +
      '0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaW' +
      'lkOjYxMDk3NTYzM0MzMjExRTZCNkRBOUE3NkJBMzYyQjA4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZG' +
      'lkOjYxMDk3NTY0M0MzMjExRTZCNkRBOUE3NkJBMzYyQjA4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0Um' +
      'VmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjEwOTc1NjEzQzMyMTFFNkI2REE5QTc2QkEzNjJCMDgiIHN0Um' +
      'VmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjEwOTc1NjIzQzMyMTFFNkI2REE5QTc2QkEzNjJCMDgiLz4gPC' +
      '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' +
      'BALwEAAOglAAAAvQQAAKCXAAAA0EsAAAB6CQAAQC8BAADoJQAAAL0EAACglwAAAPQSAACAXgIAANBLAA' +
      'AAegkAAEAvAQAA6CUAAAD0EgAAgF4CAADQSwAAAHoJAABALwEAAOglAAAAvQQAAKCXAAAA9BIAAIBeAg' +
      'AA0EsAAADoJQAAAL0EAACglwAAAPQSAACAXgIAANBLAAAAegkAAEAvAQAA6CUAAAC9BAAAoJcAAAD0Eg' +
      'AAAHoJAABALwEAAOglAAAAvQQAAKCXAAAA9BIAAIBeAgAA0EsAAAB6CQAAQC8BAADoJQAAAL0EAACAXg' +
      'IAANBLAAAAegkAAEAvAQAA6CUAAAC9BAAAoJcAAAD0EgAAgF4CAADQSwAAAHoJAAAAvQQAAKCXAAAA9B' +
      'IAAIBeAgAA0EsAAAB6CQAAQC8BAADoJQAAAL0EAACglwAAAPQSAACAXgIAAEAvAQAA6CUAAAC9BAAAoJ' +
      'cAAAD0EgAAgF4CAADQSwAAAHoJAABALwEAAOglAAAAvQQAAKCXAAAA0EsAAAB6CQAAQC8BAADoJQAAAL' +
      '0EAACglwAAAPQSAACAXgIAANBLAAAAegkAAEAvAQAA6CUAAAD0EgAAgF4CAADQSwAAAHoJAABALwEAAP' +
      'zX/ifAAGP2lDm1mDJmAAAAAElFTkSuQmCC'

  };

  HL.config = config;

  /** 全局设置 ajax 请求／响应数据格式为：application/json */
  jQuery.ajaxSetup({
    global: false,
    type: "POST",
    contentType: config.AJAX_MIME,
    accepts: config.AJAX_MIME,
    dataType: 'json'
  });


  // 工具方法
  HL.util = {
    /**
     * 获取hash值
     */
    getHash: function (url) {
      var _tmp;
      if (url) {
        _tmp = url.match(/#[^#]*/);
        return _tmp && _tmp[0];
      }
      return window.location.hash;
    },

    /**
     * 更新hash值
     */
    updateHash: function (hash) {
      window.location.hash = hash;
    },

    /**
     * 替换后台返回资源域
     * @param {string} resUrl
     */
    replaceResUrlOrigin: function (resUrl) {
      return resUrl && resUrl.replace(/^https?:\/\/[^/]*\//, config.RES_PAGE_URL_RP_ORIGIN);
    },

    /**
     * 跳转到实名认证页
     * @param {string} backUrl 跳转发起页面
     */
    jump2RealNameAuthPage: function (backUrl) {
      if (typeof backUrl === 'string') {
        backUrl = encodeURIComponent(backUrl);
        window.location = config.BASE_URL + config.PAGE_URI_MAP.REALNAME_AUTH_PAGE + '?backUrl=' + backUrl;
      }
    },

    /**
     * 跳转到登录页
     * @param {string} backUrl 跳转发起页面
     */
    jump2LoginPage: function (backUrl) {
      if (typeof backUrl === 'string') {
        backUrl = encodeURIComponent(backUrl);
        window.location = config.BASE_URL + config.PAGE_URI_MAP.LOGIN_PAGE + '?backUrl=' + backUrl;
      } else {
        window.location = config.BASE_URL + config.PAGE_URI_MAP.LOGIN_PAGE;
      }
    },

    /**
     * 图片404显示默认图片
     */
    imgLoadFailed: function (img) {
      if (img) {
        img.src = config.BROKEN_IMAGE;
      }
    },

    /**
     * 用星号替换手机号码显示
     */
    replacePhoneNumberUseAsterisk: function (value) {
      return value && value.replace(/^([0-9]{3})[0-9]{4}([0-9]{4})$/, '$1****$2');
    },

    /**
     * 验证邀请码合法性
     * @param {string} inviteCode 邀请码
     * @return {Boolean} 邀请码格式合法返回true，否则返回false
     */
    checkInviteCode: function (inviteCode) {
      return config
        .INVITE_CODE_REG
        .test(inviteCode);
    },
    /**
     * 验证密码
     * @param {string} password 密码
     * @return {Boolean} 密码格式合法返回true，否则返回false
     */
    checkPassword: function (password) {
      return config
        .PASSWORD_REG
        .test(password);
    },

    /**
     * 检查数字是否是合法的具有两位有效小数位的数字
     * @param {Number} decimal 小数
     * @return {Boolean} 数字合法返回true，否则返回false
     */
    is2DecimalPlaces: function (decimal) {
      return config
        .TWO_DECIMAL_PLACES
        .test(decimal);
    },

    /**
     * 验证验证码
     * @param {string} code 验证码
     * @return {Boolean} 验证码格式合法返回true，否则返回false
     */
    checkLoginCode: function (code) {
      return config
        .CODE_REG
        .test(code);
    },

    /**
     * 验证手机号码
     * @return {Boolean} 手机格式合法返回true，否则返回false
     */
    checkTelphone: function (telphone) {
      return config
        .TEL_REG
        .test(telphone);
    },

    /**
     * 身份证号验证
     * @param {String} idNumber 身份证号
     * @return {Boolean} 身份证合法返回true，否则返回false
     */
    checkIDCardNumber: function (idNumber) {
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
    },

    /**
     * 银行卡号验证
     */
    checkBankNumber: function (bNumber) {},

    /**
     * 去除 URL 协议
     */
    trimProtocol: function (url) {
      return url
        .replace(config.LEADING_OR_TRAILING_BLANKS, '')
        .replace(config.PROTOCOL_REG, '');
    },

    /**
     * @param {string} dateStr // "2016-12-12 17:27:12"
     * @param {string} format // YY年M月D日 H:m
     */
    formatDate: function (dateStr, format) {
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
    },

    /**
     * 获取查询字段
     */
    getSearchField: function (field) {
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
    },

    /**
     * 对象转化成JSON串
     */
    JSONStringify2: function (object) {
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
    },

    /**
     * 对象转化成JSON串
     */
    JSONStringify: function (object) {
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
    },

    /**
     * 解析 JSON 字符串
     */
    parseJSON: function (jsonStr) {
      return $.parseJSON(jsonStr);
    },

    /**
     * 解析消息数据
     */
    parseResponseMsg: function (msg) {
      var _msg = msg.split(config.MSG_SEPARATOR_REG);

      if (_msg.length > 1) {
        _msg[0] = '<span class="alert-msg-title">' + _msg[0] + '</span>';
      }
      return _msg.join('');
    }
  };

  // 拦截器
  HL.interceptor = {
    loginPageInterceptor: function (user, page) {
      var include = true,
        _isLogin = null;
      if (!config.LOGIN_INTERCEPTOR_EXCLUDE_REG.test(page)) {
        // _isLogin = userService.isLogin(user);
        if (!_isLogin.getStatus()) {
          util.jump2LoginPage(window.location.href);
        }
      }
    }
  }

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
    var W = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
      C = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'],
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

  window.HL = HL;
}(jQuery));
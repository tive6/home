(function ($) {
  var config = HL.config;
  var util = HL.util;
  var userService = HL.userService;
  var appService = HL.appService;
  var Alert = HL.Alert;
  var ActivityIndicator = HL.ActivityIndicator;
  $.extend(HL, {
    /**
     * @description 注册协议
     * @param speed:@number (ms) 动画执行时间（毫秒）默认 360ms
     */
    _getRegistrationProtocol: function (speed) {
      var _self = this;
      var titles = [$('title').html(), '汇智方略注册协议'];
      var _s = typeof speed == 'number' ? speed : 360;

      $('<div>').load(config.BASE_URL + config.PAGE_URI_MAP.REGISTRATION_PROTOCOL, function () {
        var rp = $(this).find('.protocol-container');
        $('body').append(rp);
        util.updateHash('#protocol');
        rp.data('title', titles[0]);
        rp.data('speed', _s);
        rp.animate({
          top: 0
        }, _s, function () {
          $('title').html(titles[1]);
        });
      });
    },
    /**
     * @description 修改密码
     * @param speed:@number (ms) 动画执行时间（毫秒）默认 360ms
     */
    _changePassword: function (speed) {
      var _self = this;
      var titles = [$('title').html(), '修改密码'];
      // var cp = $('.change-password-container');
      var _s = typeof speed == 'number' ? speed : 360;
      // 如果已存在修改密码UI则直接显示
      // if (cp.length > 0) {
      //   $('title').html(titles[1]);
      //   show('CP', cp, _s);
      //   return;
      // }
      $('<div>').load(config.BASE_URL + config.PAGE_URI_MAP.CHANGE_PASSWOED, function () {
        cp = $(this).find('.change-password-container');
        $('body').append(cp);
        // 显示
        util.updateHash('#change');
        cp.animate({
          left: 0
        }, _s, function () {
          $('title').html(titles[1]);
        });
        cp.data('speed', _s);
        cp.data('title', titles[0]);

        // 修改密码操作
        function changePassword() {
          var user = {
            cellphone: $('[name="celphone"]').val(),
            password: $('[name="password"]').val()
          };
          userService.changePassword(user, function () {}, function () {});
        }

        $('#confirm').on('click', changePassword);
      });
    },

    /**
     * @description 忘记密码
     * @param speed:@number (ms) 动画执行时间（毫秒）默认 360ms
     */
    _resetPassword: function (speed) {
      var _self = this;
      var titles = [$('title').html(), '重置密码'];
      // var rp = $('.reset-password-container');
      var _s = typeof speed == 'number' ? speed : 360;
      // 如果已存在修改密码UI则直接显示
      // if (rp.length > 0) {
      //   $('title').html(titles[1]);
      //   show('RP', rp, _s);
      //   return;
      // }
      $('<div>').load(config.BASE_URL + config.PAGE_URI_MAP.RESET_PASSWOED, function () {
        rp = $(this).find('.reset-password-container');
        $('body').append(rp);
        // 显示
        util.updateHash('#reset');
        rp.animate({
          left: 0
        }, _s, function () {
          $('title').html(titles[1]);
        });
        rp.data('speed', _s);
        rp.data('title', titles[0]);

        // 重置密码操作
        function resetPassword() {
          var user = {
              loginname: $('[name="reset_cellphone"]').val(),
              code: $('[name="reset_code"]').val(),
              pwd: $('[name="reset_password"]').val()
            },
            indicator = null;

          if (!validateUserInfo(user)) return;
          indicator = ActivityIndicator.indicator();
          userService.resetPassword(user, function (res) {
            indicator.immediatelyHide();
            console.log(res);
            if (res.status) {
              Alert.alert('系统提示', res.msg, [{
                text: '前往登录',
                onPress: function () {
                  this.immediatelyHide();
                  window.history.go(-1);
                }
              }]);
            } else {
              serviceError(res);
            }
          }, function (err) {
            handleResuestError(err, indicator);
          });
        }

        function getResetPasswordCode(e) {
          e.preventDefault();
          e.stopPropagation();
          var opts = {
            loginname: $('[name="reset_cellphone"]').val(),
            codeTag: 'RESETPWD'
          }
          if (!validateUserInfo(opts)) {
            $('#get_reset_pwd_code').one('click', getResetPasswordCode);
            return;
          }
          _self._getCellphoneVerificationCode($(this), opts, function () {
            $('#get_reset_pwd_code').one('click', getResetPasswordCode);
          });
        }

        $('#get_reset_pwd_code').one('click', getResetPasswordCode);

        $('#confirm').on('click', resetPassword);
      });
    },

    /**
     * @description 调起注册登录页
     * @param type {Number} 0:显示登陆；1:显示注册
     * @param callback {Function} 登錄成功後回調
     * @param speed {Number} (ms) 动画执行时间（毫秒）默认 360ms
     */
    _shouldLogin: function (type, callback, speed) {
      var _self = this;
      // console.log(this);
      var titles = [$('title').html(), '登录', '注册'];
      // var uc = $('.user-container');
      var _s = typeof speed == 'number' ? speed : 360;
      type = type ? type : 0;
      // 如果已存在注册登录UI则直接显示
      // if (uc.length > 0) {
      //   this.register.slideTo(type, 0);
      //   show('UC', uc, _s, function () {
      //     $('title').html(type ? '注册' : '登录');
      //   });
      //   return;
      // }
      $('<div>').load(config.BASE_URL + config.PAGE_URI_MAP.REG_AND_LOGIN, function () {
        var register, login;
        // 注册用户类型，默认 0：企业； 1：讲师
        var regType = 0;
        // 登录方式，默认 0：密码；1：验证码
        var loginType = 0;

        var uc = $(this).find('.user-container');
        $('body').append(uc);
        // console.log(type)
        register = new Swiper('#registerSwiper', {
          initialSlide: type,
          resistanceRatio: false
        });
        login = new Swiper('#loginSwiper', {
          resistanceRatio: false,
          onSlideChangeEnd: function (swiper) {
            loginType = swiper.activeIndex;
          }
        });
        // 显示
        uc.animate({
          top: 0
        }, speed, function () {
          $('title').html(titles[type + 1]);
        });


        function doRegister() {
          // TODO 注册
          var user = {
              userType: regType + 1,
              loginname: $('[name="reg_cellphone"]').val(),
              pwd: $('[name="reg_password"]').val(),
              confirm_pwd: $('[name="reg_confirm_password"]').val(),
              code: $('[name="reg_code"]').val()
            },
            indicator = null;
          if (!validateUserInfo(user)) return;
          indicator = ActivityIndicator.indicator();
          userService.register(user, function (res) {
            indicator.immediatelyHide();
            if (res.status) {
              Alert.alert('系统提示', res.msg, [{
                text: '确定',
                onPress: function () {
                  this.hide();
                }
              }, {
                text: '前往登录',
                onPress: function () {
                  this.immediatelyHide();
                  register.slideTo(0);
                }
              }]);
            } else {
              serviceError(res);
            }
            // console.log(res);
          }, function (err) {
            handleResuestError(err, indicator);
          });
        }

        function doLogin() {
          // TODO 登陆 
          var user = {
              loginname: $('[name="login_cellphone"]').val()
            },
            indicator = null;
          loginType == 0 ? user.pwd = $('[name="login_password"]').val() : user.code = $('[name="login_code"]').val();

          if ((!util.checkCellphone(user.loginname) && user.hasOwnProperty('pwd')) || (user.hasOwnProperty('pwd') && !util.checkPassword(user.pwd))) {
            Alert.alert('系统提示', '手机号或密码错误');
            return;
          } else if ((!util.checkCellphone(user.loginname) && user.hasOwnProperty('code')) || (user.hasOwnProperty('code') && !util.checkLoginCode(user.code))) {
            Alert.alert('系统提示', '手机号或验证码错误');
            return;
          }
          indicator = ActivityIndicator.indicator();
          userService.login(user, function (res) {
            indicator.immediatelyHide();
            if (res.status) {
              try {
                successedLogin(res.data);
                typeof callback === 'function' && callback(res);
                Alert.alert('系统提示', res.msg, [{
                  text: '确定',
                  onPress: function () {
                    this.immediatelyHide();
                    $('.toolbar-left-icon').trigger('click');
                  }
                }]);
              } catch (error) {
                Alert.alert('系统提示', '未知错误，请稍后重试');
              }
            } else {
              serviceError(res);
            }
          }, function (err) {
            handleResuestError(err, indicator);
          });
        }

        // 登录成功
        function successedLogin(user) {
          var lu = {
            cellphone: user.loginname,
            token: user.token,
            userId: user.userId,
            userType: user.userType
          };
          cookie.set(config.LOGIN_COOKIE_NAME, util.JSONStringify(lu));console.log(config.LOGIN_COOKIE_NAME);console.log(util.JSONStringify(lu))
        }

        // 获取注册手机验证码
        function getRegisterCode(e) {
          e.preventDefault();
          e.stopPropagation();
          var opts = {
            loginname: $('[name="reg_cellphone"]').val(),
            codeTag: 'REGISTER'
          };
          if (!validateUserInfo(opts)) {
            $('#get_reset_pwd_code').one('click', getRegisterCode);
            return;
          }
          _self._getCellphoneVerificationCode($(this), opts, function () {
            $('#get_register_code').one('click', getRegisterCode);
          }, 1);
        }

        // 获取登录手机验证码
        function getLoginCode(e) {
          e.preventDefault();
          e.stopPropagation();
          var opts = {
            loginname: $('[name="login_cellphone_fast"]').val(),
            codeTag: 'PX_CODE'
          };
          if (!validateUserInfo(opts)) {
            $('#get_reset_pwd_code').one('click', getLoginCode);
            return;
          }
          _self._getCellphoneVerificationCode($(this), opts, function () {
            $('#get_login_code').one('click', getLoginCode);
          });
        }

        // 执行登陆
        $('.login-button').on('click', doLogin);
        // 执行注册
        $('#do_register').on('click', doRegister);

        // 获取注册手机验证码
        $('#get_register_code').one('click', getRegisterCode);
        // 获取登录验证码
        $('#get_login_code').one('click', getLoginCode);

        $('[name="login_cellphone_fast"]').on('input', function () {
          $('[name="login_cellphone"]').val($(this).val());
        });
        $('[name="login_cellphone"]').on('input', function () {
          $('[name="login_cellphone_fast"]').val($(this).val());
        });

        $('#get_ptotocol').on('click', function () {
          _self._getRegistrationProtocol();
        });

        // 关闭登录注册区
        $('.toolbar-left-icon').on('click', function (e) {
          e.stopPropagation();
          uc.animate({
            top: '100%'
          }, _s, function () {
            $('title').html(titles[0]);
            uc.remove();
          });
        });
        // 切换至注册区
        $('#go_register_section').on('click', function (e) {
          e.stopPropagation();
          register.slideTo(1);
          $('title').html(titles[2]);
        });
        // 切换至登录区
        $('#go_login_section').on('click', function (e) {
          e.stopPropagation();
          register.slideTo(0);
          $('title').html(titles[1]);
        });
        // 切换至手机验证登录
        $('.cellphone-fast-login').on('click', function (e) {
          e.stopPropagation();
          login.slideTo(1);
        });
        // 切换至密码登录
        $('.password-login').on('click', function (e) {
          e.stopPropagation();
          login.slideTo(0);
        });
        // 注册用户选择是企业还是讲师
        $('.register-tabs').on('click', '.register-tab-item', function (e) {
          e.stopPropagation();
          var $this = $(this);
          regType = $this.index();
          $this.addClass('active');
          $this.siblings().removeClass('active');
        });
        $('.forget-password').on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          _self._resetPassword();
        });
      });
    },
    _getCellphoneVerificationCode: function (context, opts, callback, times) {
      // TODO 获取手机验证码
      var _t = context.html(),
        times = times || 60;
      appService.getCellphoneCode(opts);
      context.html('<span>' + times-- + '</span>秒后重试');
      context.addClass('disabled');
      var _timer = setInterval(function () {
        if (times <= 0) {
          context.removeClass('disabled');
          context.html(_t);
          clearInterval(_timer);
          typeof callback === 'function' && callback();
        } else {
          context.html('<span>' + times-- + '</span>秒后重试');
        }
      }, 1000);
    }
  });

  // 验证用户信息
  function validateUserInfo(user) {
    console.log(user)
    if (user.hasOwnProperty('loginname') && !util.checkCellphone(user.loginname)) {
      Alert.alert('系统提示', '请输入合法的手机号');
      return false;
    }
    if (user.hasOwnProperty('code') && !util.checkLoginCode(user.code)) {
      Alert.alert('系统提示', '验证码不正确');
      return false;
    }
    if (user.hasOwnProperty('pwd') && !util.checkPassword(user.pwd)) {
      Alert.alert('系统提示', '请输入6-12位数字、字母组合密码');
      return false;
    }
    if (user.hasOwnProperty('confirm_pwd') && user.hasOwnProperty('pwd') && user.pwd !== user.confirm_pwd) {
      Alert.alert('系统提示', '密码不一致，请检查后重新输入');
      return false;
    }
    return true;
  }

  // 请求错误
  function handleResuestError(err, indicator) {
    indicator.immediatelyHide();
    Alert.alert('系统提示', err.msg);
  }

  // 业务错误
  function serviceError(err) {
    Alert.alert('系统提示', err.msg);
  }
}(jQuery));
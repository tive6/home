(function ($) {
  var config = HL.config;
  var util = HL.util;
  var userService = HL.userService;
  $.extend(HL, {
    /**
     * @description 修改密码
     * @argument speed:@number (ms) 动画执行时间（毫秒）默认 360ms
     */
    _changePassword: function (speed) {
      var _self = this;
      var titles = [$('title').html(), '重置密码'];
      var cp = $('.change-password-container');
      var _s = typeof speed == 'number' ? speed : 360;
      // 如果已存在修改密码UI则直接显示
      if (cp.length > 0) {
        $('title').html(titles[1]);
        show('CP', cp, _s);
        return;
      }
      $('<div>').load(config.BASE_URL + config.PAGE_URI_MAP.RESET_PASSWOED, function () {
        cp = $(this).find('.change-password-container');
        $('body').append(cp);
        $('title').html(titles[1]);
        show('CP', cp, _s);

        // 修改密码操作
        function changePassword() {
          var user = {
            cellphone: $('[name="celphone"]').val(),
            password: $('[name="password"]').val()
          };
          userService.changePassword(user, function () {}, function () {});
        }

        $('#confirm').on('click', changePassword);

        $(windwo)
      });
    },

    /**
     * @description 忘记密码
     * @argument speed:@number (ms) 动画执行时间（毫秒）默认 360ms
     */
    _resetPassword: function (speed) {
      var _self = this;
      var titles = [$('title').html(), '重置密码'];
      var cp = $('.reset-password-container');
      var _s = typeof speed == 'number' ? speed : 360;
      // 如果已存在修改密码UI则直接显示
      if (cp.length > 0) {
        $('title').html(titles[1]);
        show('CP', cp, _s);
        return;
      }
      $('<div>').load(config.BASE_URL + config.PAGE_URI_MAP.RESET_PASSWOED, function () {
        cp = $(this).find('.reset-password-container');
        $('body').append(cp);
        $('title').html(titles[1]);
        show('CP', cp, _s);
        cp.data('speed', _s);

        // 重置密码操作
        function resetPassword() {
          var user = {
            cellphone: $('[name="celphone"]').val(),
            code: $('[name="code"]').val(),
            password: $('[name="password"]').val()
          };
          userService.resetPassword(user, function () {}, function () {});
        }

        $('#confirm').on('click', resetPassword);
      });
    },

    /**
     * @description 调起注册登录页
     * @argument type:@number 0:显示登陆；1:显示注册
     * @argument speed:@number (ms) 动画执行时间（毫秒）默认 360ms
     */
    _shouldLogin: function (type, speed) {
      var _self = this;
      var titles = [$('title').html(), '注册', '登录'];
      var uc = $('.user-container');
      var _s = typeof speed == 'number' ? speed : 360;
      type = type ? type : 0;
      // 如果已存在注册登录UI则直接显示
      if (uc.length > 0) {
        $('title').html(type ? '注册' : '登录');
        show('UC', uc, _s);
        return;
      }
      $('<div>').load(config.BASE_URL + config.PAGE_URI_MAP.REG_AND_LOGIN, function () {
        var register, login;
        // 注册用户类型，默认 0：企业； 1：讲师
        var regType = 0;
        // 登录方式，默认 0：密码；1：验证码
        var loginType = 0;

        console.log(type)

        uc = $(this).find('.user-container');
        $('body').append(uc);
        $('title').html(type ? '注册' : '登录');

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
        register.slideTo(type, 0);
        show('UC', uc, _s);

        function doRegister() {
          // TODO 注册
          var user = {
            cellphone: $('[name="reg_cellphone"]').val(),
            password: $('[name="reg_password"]').val(),
            code: $('[name="reg_code"]').val()
          };
          userService.register(user, function () {

          }, function () {

          });
        }

        function doLogin() {
          // TODO 登陆 
          var user = {
            cellphone: $('[name="reg_cellphone"]').val()
          };
          loginType == 0 ? user.password = $('[name="login_password"]').val() : user.code = $('[name="login_code"]').val();
          userService.login(user, function () {

          }, function () {

          });
        }

        // 执行登陆
        $('.login-button').on('click', doLogin);
        // 执行注册
        $('#do_register').on('click', doRegister);

        $('[name="login_cellphone_fast"]').on('input', function () {
          $('[name="login_cellphone"]').val($(this).val());
        });
        $('[name="login_cellphone"]').on('input', function () {
          $('[name="login_cellphone_fast"]').val($(this).val());
        });

        // 关闭登录注册区
        $('.toolbar-left-icon').on('click', function (e) {
          e.stopPropagation();
          uc.animate({
            top: '100%'
          }, _s, function () {
            $('.register-tab-item').eq(0).trigger('click');
            register.slideTo(type, 0);
            login.slideTo(0, 0);
            $('title').html(titles[0]);
          });
        });
        // 切换至注册区
        $('#go_register_section').on('click', function (e) {
          e.stopPropagation();
          register.slideTo(1);
          $('title').html(titles[1]);
        });
        // 切换至登录区
        $('#go_login_section').on('click', function (e) {
          e.stopPropagation();
          register.slideTo(0);
          $('title').html(titles[2]);
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

      // 显示UI
      function show() {
        uc.animate({
          top: 0
        }, _s);
      }
    }
  });
  // 显示UI
  function show(type, ele, speed) {
    switch (type) {
      case 'UC': // 登录注册
        ele.animate({
          top: 0
        }, speed);
        break;
      case 'CP': // 修改密码
        util.updateHash('#reset');
        ele.animate({
          left: 0
        }, speed);
        break;
      default:
        break;
    }
  }
}(jQuery));
(function($) {
  'use strict';
  Hzfl.interceptor = {
    loginPageInterceptor: function(user, page) {
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
}(jQuery));
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * 弹层
     * @module {WebView} WebView
     */
    define('WebView', [
      'jquery'
    ], factory);
  } else {
    window.WebView = factory();
  }
}(function($) {
  'use strict';

  /**
   * 构造器
   * @constructor {WebView} WebView
   */
  function WebView() {
    throw new Error('This is a factory method that can not be initialized.');
  }
  /**
   * 
   */
  WebView.loading = function(options) {
    return new LoadAnimate(options);
  };
  /**
   * 
   */
  WebView.timerUI = function(options) {
    return new TimerUI(options);
  };
  /**
   * 
   */
  WebView.msgTips = function(options) {
    return new MsgTips(options);
  };
  /**
   * 
   */
  WebView.msgAlert = function(options) {
    return new MsgAlert(options);
  };

  // 共享空函数
  function empty() {}

  /**
   * 消息弹窗
   * @constructor {MsgAlert} MsgAlert
   * @param {Object} options 初始化参数
   */
  function MsgAlert(options) {
    this.options = $.extend({}, MsgAlert.SETTINGS, options);
    return this.init();
  }

  MsgAlert.prototype.init = function() {
    var _self = this,
      opts = this.options,
      $alert = $('[data-component="msgalert"]');
    if ($alert.length === 0) {
      $alert = $('<div data-component="msgalert" class="msgalert"><div class="msgalert-container"></div></div>');
      if (opts.title) {
        $alert.find('.msgalert-container')
          .append($('<header class="msgalert-header"><h3>' + opts.title + '</h3></header>'));
      }
      $alert.find('.msgalert-container')
        .append($('<div class="msgalert-content"><div class="msgalert-msg"></div></div>'));
      $alert.find('.msgalert-container')
        .append($('<footer class="msgalert-footer"><button class="msgalert-confirm">' + opts.buttonText + '</button></footer>'));

      $alert.appendTo($(opts.context));

    }

    $alert.find('.msgalert-msg').html(opts.msg);
    $alert.find('.msgalert-confirm').on('click', function(e) {
      e.stopPropagation();
      _self.hide();
      if (opts.action && typeof opts.action === 'function') {
        opts.action.call(_self);
      }
    });
    $alert.on('click', function() {
      _self.hide();
    });
    $alert.find('.invest-code-wrapper').on('click', function(e) {
      e.stopPropagation();
    });
    this.component = $alert;
    return this;
  };

  // 显示消息层
  MsgAlert.prototype.show = function() {
    var _self = this,
      $component = this.component,
      $container = $component.find('.msgalert-container');
    $component.finish().fadeIn(300);
    $container.finish().delay(150).animate({
      opacity: 'show',
      top: '35%'
    }, 200);
  };

  // 隐藏消息层
  MsgAlert.prototype.hide = function() {
    var _self = this,
      $component = this.component,
      $container = $component.find('.msgalert-container');
    $component.finish().delay(150).fadeOut(300);
    $container.finish().animate({
      opacity: 'hide',
      top: '30%'
    }, 300);
  };

  MsgAlert.SETTINGS = {
    context: 'body',
    title: null,
    msg: '欢迎使用八斗金服。',
    action: empty,
    buttonText: '确&nbsp;定'
  };

  /**
   * 加载动画
   * @constructor {LoadAnimate} LoadAnimate
   * @param {Object} options 初始化参数
   */
  function LoadAnimate(options) {
    this.options = $.extend({}, LoadAnimate.SETTINGS, options);
    return this.init();
  }

  LoadAnimate.prototype.init = function() {
    var _self = this,
      opts = this.options,
      $loading = $('[data-component="loading"]');
    if ($loading === 0) {
      $loading = $('<div data-component="loading" class="loading"><div class="loading-container"></div></div>');
      $(opts.context).append($laoding);
    }
    this.component = $loading;
  };

  LoadAnimate.prototype.show = function() {
    var $component = this.component;
    $component.finish().fadeIn();
  };

  LoadAnimate.prototype.hide = function() {
    var _self = this,
      $component = this.component;
    setTimeout(function() {
      $component.finish().fadeOut(300, function() {
        $component.remove();
        if (typeof _self.options.ready === 'function') {
          _self.options.ready(_self);
        }
      });
    }, this.options.delay);
  };

  LoadAnimate.SETTINGS = {
    context: 'body',
    delay: 600, // 加载完成后延迟显示内容（毫秒）
    ready: empty // 资源加载完成回调（动画隐藏后）
  };

  /**
   * 简单的消息弹出层
   * @constructor {MsgTips} MsgTips
   * @param {Object} options 弹层消息
   */
  function MsgTips(options) {
    this.options = $.extend({}, MsgTips.SETTINGS, options);
    return this.init();
  }

  MsgTips.prototype.init = function() {
    var _self = this,
      opts = this.options,
      $alert = $('[data-component="msgTips"]');

    if ($alert.length === 0) {
      $alert = $('<div data-component="msgTips" class="msgtips"><div class="msgtips-container"><div class="msgtips-wrapper"></div></div></div>');
      if (opts.title) {
        $alert.find('.msgtips-wrapper').prepend($('<div class="msgtips-header"><h3>' + opts.title + '</h3></div>'));
      }
      $alert.find('.msgtips-wrapper').append('<div class="msgtips-content"><div class="msgtips-msg"></div></div>');
      $alert.appendTo($(opts.context));
    }
    $alert.find('.msgtips-msg').html(opts.msg);

    this.component = $alert;
    return this;
  };
  // 显示消息弹层
  MsgTips.prototype.show = function() {
    var _self = this,
      $component = this.component,
      $alert = $component.find('.msgtips-container');
    $component.finish().fadeIn(300);
    $alert.finish().delay(150).animate({
      bottom: '15%',
      opacity: 'show'
    }, function() {
      if (_self.options.autoHide) {
        setTimeout(function() {
          _self.hide();
        }, _self.options.keep);
      }
    });
  };
  // 显示消息弹层
  MsgTips.prototype.hide = function() {
    var $component = this.component,
      $alert = $component.find('.msgtips-container');
    $component.finish().delay(250).fadeOut(500);
    $alert.finish().fadeOut(500);
  };

  MsgTips.SETTINGS = {
    context: 'body',
    title: null,
    msg: '欢迎使用八斗金服。',
    keep: 1500,
    autoHide: true,
    position: 'bottom'
  };

  var timer = null;
  /**
   * 带有定时器的消息弹层
   * @constructor {TimerUI} TimerUI
   * @param {Object} options 弹层参数
   *    options : {
   *       times: 3, // UI 更新次数
   *       interval：1000, // 时间间隔(毫秒)
   *       confirm: function(){}, // 确定按钮执行动作 Function
   *       cancle: function(){}, // 取消按钮执行动作 Function
   *       buttonText: ['确定', '取消']
   *    }
   */
  function TimerUI(options) {
    this.options = $.extend({}, TimerUI.SETTINGS, options);
    return this.init();
  }
  // 初始化弹层
  TimerUI.prototype.init = function(options) {
    var opts = this.options,
      $component = $('[data-component="' + opts.component + '"]'),
      $title,
      $confirm,
      $cancle,
      $message;
    if ($component.length === 0) {
      $component = $('<section data-component="' + opts.component + '" class="timerui"><article class="timerui-container"></article></section>');
      $component.find('.timerui-container')
        .append($('<header class="timerui-header"><h3>' + opts.title + '</h3></header>'))
        .append($('<div class="timerui-content"><div class="timerui-msg"></div></div>'))
        .append($('<footer class="timerui-footer"><button class="timerui-confirm">' + opts.buttonText[0] + '</button></footer>'));
      $component.appendTo($(opts.context));
    }
    $confirm = $component.find('.timerui-confirm');
    $cancle = $component.find('.timerui-cancle');
    // 确定按钮事件绑定
    $confirm.on('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      if (opts.confirm && typeof opts.confirm === 'function') {
        opts.confirm.call(this);
      }
    });
    // 取消按钮事件绑定
    $cancle.on('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      if (opts.cancle && typeof opts.cancle === 'function') {
        opts.confirm.call(this);
      }
    });
    this.component = $component;
    return this;
  };
  // 显示弹层
  TimerUI.prototype.show = function() {
    this.component.finish().fadeIn(300);
    this.component.find('.timerui-container').finish().delay(150)
      .animate({
        opacity: 'show',
        top: '10%'
      }, 200, 'linear');

    this.run('run');
    return this;
  };
  // 隐藏弹层
  TimerUI.prototype.hide = function() {
    // this.component.fadeOut();
    this.run('stop');
    return this;
  };
  // 隐藏弹层
  TimerUI.prototype.run = function(action) {
    var _self = this,
      $msg = this.component.find('.timerui-msg'),
      msg = this.options.msgText,
      times = this.options.times;
    if (action === 'run') {
      $msg.html(msg.replace(/{{times}}/, times));
      timer = setInterval(function() {
        $msg.html(msg.replace(/{{times}}/, --times));
        if (times <= 0) {
          if (typeof _self.options.confirm === 'function') {
            _self.options.confirm.call(_self, _self);
          }
          clearInterval(timer);
        }
      }, this.options.interval);
    } else if (action === 'stop') {
      if (timer !== null) {
        clearInterval(timer);
      }
    }

  };

  TimerUI.SETTINGS = {
    context: 'body',
    component: 'timerui',
    times: 3,
    interval: 1000,
    confirm: empty,
    cancle: empty,
    msgText: '恭喜您！注册成功<br/>将于<span>{{times}}</span>秒后跳转至首页',
    buttonText: ['立即前往'],
    title: '系统消息'
  };
  return WebView;
}));
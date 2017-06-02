(function(factory) {
	if(typeof define === 'function' && define.amd) {
		/**
		 * @module {SwipeLoader} swipeLoader
		 */
		define('swipeLoader', [
			'jquery', 'iScroll'
		], factory);
	} else {
		window.swipeLoader = factory();
	}
}(function($, IScroll) {
	'use strict';
	var INSTANCE = null;

	/**
	 * 构造器
	 * @constructor {SwipeLoader} SwipeLoader
	 */
	function SwipeLoader() {}

	/**
	 * 开始监听用户操作执行滑动更新／加载更多
	 */
	
	SwipeLoader.prototype.listener = function(options, refreshCallback, loadCallback) {
		var opts = $.extend({}, SwipeLoader.DEFAULTS ,options);
		return new SwipeMonitor(opts, refreshCallback, loadCallback);
	};
	
	SwipeLoader.DEFAULTS = {
		selector: '#wrapper'
	};

	/**
	 * 滑动监听器，构造器
	 * @constructor {SwipeMonitor} SwipeMonitor
	 */
	var SwipeMonitor = function(options, refreshCallback, loadCallback) {
		this.run(options, refreshCallback, loadCallback);
	};

	SwipeMonitor.prototype.run = function(options, refreshCallback, loadCallback) {
		var mySwiper = null,
			_self = this,
			pullDownFlag = 0,
			pullUpFlag = 0,
			selector = options.selector,
			pullDown = $(selector).find(".pull-down"),
			pullUp = $(selector).find(".pull-up");

		mySwiper = new IScroll(selector, {
			click: true,
			probeType: 3,
			shrinkScrollbars: 'scale', // 当滚动边界之外的滚动条是由少量的收缩
			useTransform: true, //CSS转化
			useTransition: true, //CSS过渡
			freeScroll: false, //只能在一个方向上滑动
			startX: 0,
			startY: 0,
		});

		mySwiper.on('scroll', onScrollMove);
		mySwiper.on("scrollEnd", onScrollEnd);

		function onScrollMove() {
			if(this.y > 20) { //判断下拉
				pullDown.innerHTML = "下拉刷新页面...";
				pullDown.css('display', 'block');
				pullDownFlag = 1;
			} else if(this.y < (this.maxScrollY - 20)) { //判断上拉
				pullUp.innerHTML = "加载更多...";
				pullUp.css('display', 'block');
				pullUpFlag = 1;
			}
		}

		function onScrollEnd() {
			if(pullDownFlag == 1) {
				pullDown.innerHTML = "下拉刷新页面…";
				pullDown.slideUp();
				if(typeof refreshCallback === 'function') {
					refreshCallback(mySwiper);
				}
				pullDownFlag = 0;
			} else if(pullUpFlag == 1) {
				pullUp.innerHTML = "加载更多…";
				pullUp.slideUp();
				if(typeof loadCallback === 'function') {
					loadCallback(mySwiper);
				}
				pullUpFlag = 0;
			}
		}

	};

	if(INSTANCE === null) {
		INSTANCE = new SwipeLoader();
	}

	return INSTANCE;
}));
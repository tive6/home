(function(factory) {
	if(typeof define === 'function' && define.amd) {
		/**
		 * @module {UserController} userController
		 */
		define('userController', [
			'jquery',
			'cookie',
			'config',
			'util',
			'WebView',
			'userService'
		], factory);
	} else {
		window.userController = factory();
	}
}(function($, cookie, config, util, WebView, userService) {
	'use strict';
	var INSTANCE = null;

	/**
	 * 构造器
	 * @constructor {UserController} UserController
	 */
	function UserController() {}

	/**
	 * 上传头像
	 */
	UserController.prototype.uploadPortrait = function(base64, callback) {
		var user = userService.getLoginUserFromLocalStorage();
		if(user) {
			var token = user.getToken();
			userService.uploadPortrait({
				token: token,
				img: base64
			}, function(res) {
				console.log(res);
				if(config.LOGIN_FAILURE_STATUS_CODE === res.getStatus()) {
					WebView.msgAlert({
						msg: config.LOGIN_FAILURE_STATUS_TEXT,
						action: function() {
							util.jump2LoginPage(window.location.href);
						}
					}).show();
				} else {
					console.log(res.getData())
					executeCallback(res, callback);
				}
			}, handleError);
		} else {
			util.jump2LoginPage(window.location.href);
		}
	};

	/**
	 * 加载头像
	 */
	UserController.prototype.loadPortrait = function(callback) {
		var user = userService.getLoginUserFromLocalStorage();
		if(user) {
			var token = user.getToken();
			userService.loadPortrait({
				token: token
			}, function(res) {
				console.log(res);
				if(config.LOGIN_FAILURE_STATUS_CODE === res.getStatus()) {
					WebView.msgAlert({
						msg: config.LOGIN_FAILURE_STATUS_TEXT,
						action: function() {
							util.jump2LoginPage(window.location.href);
						}
					}).show();
				} else if(res.getStatus()) {
					console.log(res.getData())
					executeCallback(res.getData(), callback);
				} else {
					WebView.msgAlert({
						msg: res.getMsg()
					}).show();
				}
			}, handleError);
		} else {
			util.jump2LoginPage(window.location.href);
		}
	};

	/**
	 * 验证安心签授权吗
	 */
	UserController.prototype.checkVerification = function(authCode, callback) {
		var user = userService.getLoginUserFromLocalStorage();
		if(user) {
			var token = user.getToken();
			userService.checkVerification({
				token: token,
				authCode: authCode
			}, function(res) {
				console.log(res);
				res.setData(user.getTelphone());
				if(config.LOGIN_FAILURE_STATUS_CODE === res.getStatus()) {
					WebView.msgAlert({
						msg: config.LOGIN_FAILURE_STATUS_TEXT,
						action: function() {
							util.jump2LoginPage(window.location.href);
						}
					}).show();
				} else {
					executeCallback(res, callback);
				}
			}, handleError);
		} else {
			util.jump2LoginPage(window.location.href);
		}
	};

	/**
	 * 发送安心签授权吗
	 */
	UserController.prototype.sendverification = function(callback) {
		var user = userService.getLoginUserFromLocalStorage();
		if(user) {
			var token = user.getToken();
			userService.sendverification({
				token: token
			}, function(res) {
				console.log(res);
				res.setData(user.getTelphone());
				if(config.LOGIN_FAILURE_STATUS_CODE === res.getStatus()) {
					WebView.msgAlert({
						msg: config.LOGIN_FAILURE_STATUS_TEXT,
						action: function() {
							util.jump2LoginPage(window.location.href);
						}
					}).show();
				} else {
					executeCallback(res, callback);
				}
			}, handleError);
		} else {
			util.jump2LoginPage(window.location.href);
		}
	};

	/**
	 * 富友开户，获取签名
	 */
	UserController.prototype.fuiouWebRegData = function(options, callback) {
		var user = null,
			token = null;

		if(!validateFuiouRegData(options)) {
			return;
		}

		try {
			user = userService.getLoginUserFromLocalStorage();
			if(user) {
				token = user.getToken();
				$.extend(options, {
					token: token
				});
				userService.fuiouWebRegData(options, function(result) {
					console.log(result);
					if(config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
						WebView.msgAlert({
							msg: config.LOGIN_FAILURE_STATUS_TEXT,
							action: function() {
								util.jump2LoginPage(window.location.href);
							}
						}).show();
					} else {
						executeCallback(result, callback);
					}
				}, handleError);
			} else {
				util.jump2LoginPage(window.location.href);
			}
		} catch(error) {
			systemErrorTips(error);
		}
	};

	/**
	 * 验证富友开户信息
	 */
	function validateFuiouRegData(options) {
		if(!options.agreement) {
			WebView
				.msgAlert({
					msg: '实名认证需同意《开通富友专属账户》协议。'
				})
				.show();
			return false;
		}
		if(!util.checkTelphone(options.mobile_no)) {
			WebView
				.msgAlert({
					msg: '请输入合法的手机号。'
				})
				.show();
			return false;
		}
		if('' === options.city_id) {
			WebView
				.msgAlert({
					msg: '请选择银行卡开户所在地。'
				})
				.show();
			return false;
		}
		if('' === options.parent_bank_id) {
			WebView
				.msgAlert({
					msg: '请选择银行卡开户行。'
				})
				.show();
			return false;
		}
		if(!/^[0-9]{6,}$/.test(options.capAcntNo)) {
			WebView
				.msgAlert({
					msg: '请输入有效的银行卡号。'
				})
				.show();
			return false;
		}
		return true;
	}

	/**
	 * 加载老用户信息
	 */
	UserController.prototype.loadOldCustomerInfo = function(callback) {
		var user = null,
			token = null;

		try {
			user = userService.getLoginUserFromLocalStorage();
			if(user) {
				token = user.getToken();
			} else {
				util.jump2LoginPage(window.location.href);
			}

			userService
				.loadOldCustomerInfo({
					token: token
				}, function(result) {
					console.log(result);
					if(config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
						WebView.msgAlert({
							msg: config.LOGIN_FAILURE_STATUS_TEXT,
							action: function() {
								util.jump2LoginPage(window.location.href);
							}
						}).show();
					}
					// else if (result.getStatus()) {
					// executeCallback(result.getData(), callback);
					// } 
					else {
						executeCallback(result, callback);
						// WebView.msgAlert({   msg: result.getMsg() }).show();
					}
				}, handleError);
		} catch(error) {
			systemErrorTips(error);
		}
	};

	/**
	 * 实名认证
	 */
	UserController.prototype.loadRealnameAuth = function(callback) {
		var user = null,
			token = null;

		try {
			user = userService.getLoginUserFromLocalStorage();
			if(user) {
				token = user.getToken();
			} else {
				util.jump2LoginPage(window.location.href);
			}

			userService
				.loadRealnameAuth(token, function(result) {
					console.log(result);
					if(config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
						WebView.msgAlert({
							msg: config.LOGIN_FAILURE_STATUS_TEXT,
							action: function() {
								util.jump2LoginPage(window.location.href);
							}
						}).show();
					} else if(result.getStatus()) {
						executeCallback(result, callback);
					} else {
						WebView.msgAlert({
							msg: result.getMsg(),
							action: function() {
								window.location = config.BASE_URL + config.PAGE_URI_MAP.OPEN_FUIOU_ACCOUNT;
							}
						}).show();
					}
				}, handleError);
		} catch(error) {
			systemErrorTips(error);
		}
	};

	/**
	 * 实名认证
	 * @param {User} user 用户实名信息
	 */
	UserController.prototype.realnameAuth = function(user) {
		var _u = null,
			backUrl = null,
			params = {};
		if(!validateRealnameInfo(user)) {
			return;
		}
		try {
			_u = userService.getLoginUserFromLocalStorage();
			if(_u) {
				user.setToken(_u.getToken());
			} else {
				util.jump2LoginPage(window.location.href);
			}

			userService
				.realnameAuth(user, function(result) {
					console.log(result);
					if(config.LOGIN_FAILURE_STATUS_CODE == result.getStatus()) {
						WebView.msgAlert({
							msg: config.LOGIN_FAILURE_STATUS_TEXT,
							action: function() {
								util.jump2LoginPage(window.location.href);
							}
						}).show();
					} else if(result.getStatus()) {
						backUrl = util.getSearchField('backUrl');
						if(backUrl !== null) {
							params.backUrl = backUrl;
						}
						params.name = user.getUsername();
						params.cardnum = user.getCardnum();
						window.location = config.BASE_URL + config.PAGE_URI_MAP.OPEN_FUIOU_ACCOUNT + '?' + $.param(params);
					} else {
						WebView
							.msgAlert({
								msg: result.getMsg()
							})
							.show();
					}
				}, handleError);
		} catch(error) {
			systemErrorTips(error);
		}
	};

	/**
	 * 验证实名信息
	 */
	function validateRealnameInfo(user) {
		if('' === user.getUsername()) {
			WebView
				.msgAlert({
					msg: '请输入您的真实姓名'
				})
				.show();
			return false;
		}
		if(!util.checkIDCardNumber(user.getCardnum())) {
			WebView
				.msgAlert({
					msg: '请输入合法有效的身份证号'
				})
				.show();
			return false;
		}
		return true;
	}

	/**
	 * 我的资产
	 */
	UserController.prototype.getMyAsset = function(callback) {
		var user = null,
			token = null;
		try {
			user = userService.getLoginUserFromLocalStorage();
			if(user) {
				token = user.getToken();
				userService.getMyAsset(token, function(result) {
					console.log(result);
					if(result.getStatus() === config.LOGIN_FAILURE_STATUS_CODE) {
						WebView.msgAlert({
							msg: config.LOGIN_FAILURE_STATUS_TEXT,
							action: function() {
								util.jump2LoginPage(window.location.href);
							}
						}).show();
					} else if(result.getStatus()) {
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
		} catch(error) {
			systemErrorTips(error);
		}

	};

	/**
	 * 判断是否已经登录,
	 *   如果未登录，指引用户跳转到登录页面
	 * @param {User} user 指定用户
	 * @return {Boolean} 已经登录返回 true，未登录引导至登录页面
	 */
	UserController.prototype.isLogin = function(user) {
		var _isLogin = userService.isLogin(user);
		if(!_isLogin.getStatus()) {
			window.location = config.BASE_URL + config.PAGE_URI_MAP.LOGIN_PAGE;
		} else {
			return true;
		}
	};

	/**
	 * 判断用户认证信息
	 */
	UserController.prototype.loadUserAuthResult = function(callback) {
		var user = null,
			token = null,
			backUrl = null,
			telphone = null;
		try {
			user = userService.getLoginUserFromLocalStorage();
			if(user) {
				telphone = util.replacePhoneNumberUseAsterisk(user.getTelphone());
				token = user.getToken();
				userService.loadUserAuthResult(token, function(result) {
					console.log(result);
					if(config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
						WebView.msgAlert({
							msg: config.LOGIN_FAILURE_STATUS_TEXT,
							action: function() {
								util.jump2LoginPage(window.location.href);
							}
						}).show();
					} else if(result.getStatus()) {
						user = result.getData();
						user.setTelphone(telphone);
						executeCallback(user, callback);
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
		} catch(error) {
			systemErrorTips(error);
		}
	};

	/**
	 * 本地缓存中获取用户信息
	 */
	UserController.prototype.getLoginUserFromLocalStorage = function() {
		return userService.getLoginUserFromLocalStorage();
	};

	/**
	 * 安全退出
	 */
	UserController.prototype.logout = function() {
		cookie.remove(config.LOGIN_COOKIE_NAME);
		WebView.msgAlert({
			msg: '已安全退出系统。',
			action: function() {
				util.jump2LoginPage();
			}
		}).show();
	};

	/**
	 * 修改密码
	 */
	UserController.prototype.mondifyLoginPassword = function(user, sucCallback, errCallback) {
		var _this = this;
		if(!validateMP(user)) {
			return;
		}
		userService
			.mondifyLoginPassword(
				user,
				function(result) {
					var backUrl = null;
					executeCallback(result, sucCallback);
				},
				function(res) {
					executeCallback(res, errCallback);
				});
	};

	/**
	 * 验证修改密码数据格式
	 */
	function validateMP(user) {
		if('' === user.getLoginCode()) {
			WebView
				.msgAlert({
					msg: '请输入验证码。'
				})
				.show();
			return false;
		}
		if(!util.checkTelphone(user.getTelphone())) {
			WebView
				.msgAlert({
					msg: '请输入有效的手机号。'
				})
				.show();
			return false;
		}
		if(!util.checkPassword(user.getPassword())) {
			WebView
				.msgAlert({
					msg: '请输入8-16位数字、字母组合的密码。'
				})
				.show();
			return false;
		}
		return true;
	}
	
	/**
	 * 判断是否设置支付密码
	 */
	UserController.prototype.isHadPaypwd = function(callback) {
		var user = null,
			token = null;
		try {
			user = userService.getLoginUserFromLocalStorage();
			if(user) {
				token = user.getToken();
				userService.isHadPaypwd(token, function(result) {
					console.log(result);
					if(config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
						WebView.msgAlert({
							msg: config.LOGIN_FAILURE_STATUS_TEXT,
							action: function() {
								util.jump2LoginPage(window.location.href);
							}
						}).show();
					} else if(result.getStatus()) {
						user = result.getData();
						executeCallback(user, callback);
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
		} catch(error) {
			systemErrorTips(error);
		}
	};
	
	/**
	 * 添加支付密码
	 */
	UserController.prototype.addPayPwd = function(options, sucCallback, errCallback) {
		var token = null,
			user = null;

		try {
			user = userService.getLoginUserFromLocalStorage();
			if(user) {
				token = user.getToken();
				$.extend(options, {
					token: token
				});
			} else {
				util.jump2LoginPage(window.location.href);
			}
			userService
				.addPayPwd(options, function(result) {
					executeCallback(result, sucCallback);
				}, function(res) {
					if(config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
						WebView.msgAlert({
							msg: config.LOGIN_FAILURE_STATUS_TEXT,
							action: function() {
								util.jump2LoginPage(window.location.href);
							}
						}).show();
					} else {
						executeCallback(res, errCallback);
					}
				});
		} catch(error) {
			systemErrorTips(error);
		}
	};

	/**
	 * 验证原始支付密码
	 */
	UserController.prototype.verifyPaypwd = function(options, sucCallback, errCallback) {
		var token = null,
			user = null;

		try {
			user = userService.getLoginUserFromLocalStorage();
			if(user) {
				token = user.getToken();
				$.extend(options, {
					token: token
				});

			} else {
				util.jump2LoginPage(window.location.href);
			}
			userService
				.verifyPaypwd(options, function(result) {
					executeCallback(result, sucCallback);
				}, function(res) {
					if(config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
						WebView.msgAlert({
							msg: config.LOGIN_FAILURE_STATUS_TEXT,
							action: function() {
								util.jump2LoginPage(window.location.href);
							}
						}).show();
						// util.jump2LoginPage(window.location.href);
					} else {
						executeCallback(res, errCallback);
					}
				});
		} catch(error) {
			systemErrorTips(error);
		}
	};
	
	/**
	 * 根据旧密码修改支付密码
	 */
	UserController.prototype.changePayPwdOld = function(options, sucCallback, errCallback) {
		var token = null,
			user = null;

		try {
			user = userService.getLoginUserFromLocalStorage();
			if(user) {
				token = user.getToken();
				$.extend(options, {
					token: token
				});

			} else {
				util.jump2LoginPage(window.location.href);
			}
			userService
				.changePayPwdOld(options, function(result) {
					executeCallback(result, sucCallback);
				}, function(res) {
					if(config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
						WebView.msgAlert({
							msg: config.LOGIN_FAILURE_STATUS_TEXT,
							action: function() {
								util.jump2LoginPage(window.location.href);
							}
						}).show();
					} else {
						executeCallback(res, errCallback);
					}
				});
		} catch(error) {
			systemErrorTips(error);
		}
	};
	
	/**
	 * 身份认证
	 */
	UserController.prototype.authentication = function(options, sucCallback, errCallback) {
		var token = null,
			user = null;

		try {
			user = userService.getLoginUserFromLocalStorage();
			if(user) {
				token = user.getToken();
				$.extend(options, {
					token: token
				});

			} else {
				util.jump2LoginPage(window.location.href);
			}
			userService
				.authentication(options, function(result) {
					executeCallback(result, sucCallback);
				}, function(res) {
					if(config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
						WebView.msgAlert({
							msg: config.LOGIN_FAILURE_STATUS_TEXT,
							action: function() {
								util.jump2LoginPage(window.location.href);
							}
						}).show();
					} else {
						executeCallback(res, errCallback);
					}
				});
		} catch(error) {
			systemErrorTips(error);
		}
	};
	
	/**
	 * 身份认证手机验证码
	 */
	UserController.prototype.checkCode4checkEquipment = function(callback) {
		var user = null,
			token = null;
		try {
			user = userService.getLoginUserFromLocalStorage();
			if(user) {
				token = user.getToken();
				userService.checkCode4checkEquipment(token, function(result) {
					console.log(result);
					if(config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
						WebView.msgAlert({
							msg: config.LOGIN_FAILURE_STATUS_TEXT,
							action: function() {
								util.jump2LoginPage(window.location.href);
							}
						}).show();
					} else if(result.getStatus()) {
						user = result.getData();
						executeCallback(user, callback);
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
		} catch(error) {
			systemErrorTips(error);
		}
	};
	
	/**
	 * 根据认证修改支付密码
	 */
	UserController.prototype.changePayPwdByAuth = function(options, sucCallback, errCallback) {
		var token = null,
			user = null;

		try {
			user = userService.getLoginUserFromLocalStorage();
			if(user) {
				token = user.getToken();
				$.extend(options, {
					token: token
				});

			} else {
				util.jump2LoginPage(window.location.href);
			}
			userService
				.changePayPwdByAuth(options, function(result) {console.log(result);
					executeCallback(result, sucCallback);
				}, function(res) {
					if(config.LOGIN_FAILURE_STATUS_CODE === result.getStatus()) {
						WebView.msgAlert({
							msg: config.LOGIN_FAILURE_STATUS_TEXT,
							action: function() {
								util.jump2LoginPage(window.location.href);
							}
						}).show();
					} else {
						executeCallback(res, errCallback);
					}
				});
		} catch(error) {
			systemErrorTips(error);
		}
	};

	/**
	 * 验证码方式登录
	 * @param {User} user 登录用户信息
	 */
	UserController.prototype.loginCode2Login = function(user, sucCallback, errCallback) {
		if(!validateLoginUserInfo(user, true)) {
			return;
		}
		userService
			.loginCode2Login(user, function(res) {
				executeCallback(res, sucCallback);
			}, function(res) {
				typeof errCallback === 'function' && errCallback(res);
			});
	};

	/**
	 * 密码方式登录
	 * @param {User} user 登录用户信息
	 */
	UserController.prototype.password2login = function(user, sucCallback, errCallback) {
		if(!validateLoginUserInfo(user, false)) {
			return;
		}
		userService
			.password2login(user, function(res) {
				executeCallback(res, sucCallback);
			}, function(res) {
				typeof errCallback === 'function' && errCallback(res);
			});
	};

	/**
	 * 注册新用户
	 * @param {User} user 注册用户信息
	 */
	UserController.prototype.register = function(user, regCallback, loginCallback, regError, loginError) {
		if(!validateRegisterUserInfo(user)) {
			return;
		}
		userService
			.register(user, function(result) {
				executeCallback(result, regCallback);
				if(result.getStatus()) {
					userService
						.password2login(user, function(res) {
							executeCallback(res, loginCallback);
						}, function(res) {
							typeof loginError === 'function' && loginError(res);
						});
				} else {
					typeof regError === 'function' && regError(result);
				}
			}, function(result) {
				typeof regError === 'function' && regError(result)
			});
	};

	/**
	 * 自动登录
	 *    将用户信息以cookie的形式保存在本地
	 */
	UserController.prototype.saveAutoLoginUser2Local = function(user) {
		var data = {
			telphone: user.getTelphone(),
			token: user.getToken(),
			// sign: user.getSign()
		};
		try {
			cookie.set(config.LOGIN_COOKIE_NAME, util.JSONStringify(data), {
				path: '/',
				expires: 30
			});
			return true;
		} catch(error) {
			return false;
			// throw new Error('Save user info to local storage failth.');
		}
	};

	/**
	 * 密码方式登录
	 * @param {User} user 登录用户信息
	 */
	// UserController.prototype.password2login = function (user) {   if
	// (!validateLoginUserInfo(user, false)) {     return;   }
	// userService.password2login(user, handleLogin, handleError); };

	/**
	 * 注册新用户
	 * @param {User} user 注册用户信息
	 */
	// UserController.prototype.register = function (user, callback) {   var _self =
	// this;   if (!validateRegisterUserInfo(user)) {     return;   }
	// userService.register(user, function (result) {     if (result.getStatus()) {
	// // 注册成功自动登录       userService.password2login(user, function (result) {
	// handleLogin(result, true);       }, handleError);     } else {
	// WebView.msgAlert({         msg: result.getMsg()       }).show();     }   },
	// handleError); };

	/**
	 * 注册成功后自动远程登录结果
	 * @param {Result} result 自动登录结果
	 */
	function handleLogin(result, autoLogin) {
		console.log(result);
		var backUrl = null,
			actiontText = '登录';
		if(autoLogin) {
			actiontText = '注册';
		}
		if(result.getStatus()) {
			try {
				backUrl = util.getSearchField('backUrl');
				if(!saveAutoLoginUser2Local(result.getData())) {
					WebView
						.msgAlert({
							msg: '登录失败，请重试。'
						})
						.show();
				} else {
					if(backUrl === null) {
						WebView.timerUI({
							msgText: '恭喜您！' + actiontText + '成功<br/>将于<span>{{times}}</span>秒后跳转至首页',
							buttonText: ['立即前往'],
							confirm: function() {
								// 自动登录失败，引导用户至登录页
								window.location = config.BASE_URL + config.PAGE_URI_MAP.HOME_PAGE;
							}
						}).show();
					} else {
						WebView.timerUI({
							msgText: '恭喜您！' + actiontText + '成功<br/>将于<span>{{times}}</span>秒后返回',
							buttonText: ['立即前往'],
							confirm: function() {
								// 自动登录失败，引导用户至登录页
								window
									.history
									.go(-1);
							}
						}).show();
					}
				}
			} catch(error) {
				systemErrorTips(error);
			}
		} else {
			if(autoLogin) {
				WebView.timerUI({
					msgText: '恭喜您！' + actiontText + '成功<br/>将于<span>{{times}}</span>秒后跳转至登录页',
					buttonText: ['立即前往登录'],
					confirm: function() {
						// 自动登录失败，引导用户至登录页
						window.location = config.BASE_URL + config.PAGE_URI_MAP.LOGIN_PAGE;
					}
				}).show();
			} else {
				WebView.msgAlert({
					msg: result.getMsg()
				}).show();
			}
		}
	}

	/**
	 * 自动登录
	 *    将用户信息以cookie的形式保存在本地
	 */
	function saveAutoLoginUser2Local(user) {
		var data = {
			telphone: user.getTelphone(),
			token: user.getToken(),
			// sign: user.getSign()
		};
		try {
			cookie.set(config.LOGIN_COOKIE_NAME, util.JSONStringify(data), {
				path: '/',
				expires: 30
			});
			return true;
		} catch(error) {
			return false;
			// throw new Error('Save user info to local storage failth.');
		}
	}

	/**
	 * 验证登录用户数据合法性
	 * @param {User} user 登录用户
	 * @return {boolean} 数据合法返回true，否则返回false
	 */
	function validateLoginUserInfo(user, isCode) {
		if(!util.checkTelphone(user.getTelphone())) {
			WebView.msgAlert({
				msg: '手机号不合法'
			}).show();
			return false;
		}
		if(isCode) {
			// 手机验证码不合法
			if(!util.checkLoginCode(user.getLoginCode())) {
				WebView.msgAlert({
					msg: '验证码不合法'
				}).show();
				return false;
			}
		} else {
			if('' === user.getPassword()) {
				WebView.msgAlert({
					msg: '请输入密码'
				}).show();
				return false;
			}
		}
		return true;
	}

	/**
	 * 远程验证手机验证码
	 * @param {string} loginCode 验证码
	 */
	function remoteValidateLoginCode(loginCode) {
		/**@todo 远程验证手机验证码合法性 */
	}

	/**
	 * 验证注册用户数据合法性
	 * @param {User} user 注册用户
	 * @return {boolean} 数据合法返回true，否则返回false
	 */
	function validateRegisterUserInfo(user) {
		// 手机号不合法
		if(!util.checkTelphone(user.getTelphone())) {
			WebView.msgAlert({
				msg: '请输入有效的手机号。'
			}).show();
			return false;
		}
		// 手机验证码不合法
		if(!util.checkLoginCode(user.getLoginCode())) {
			WebView.msgAlert({
				msg: '验证码不正确。'
			}).show();
			return false;
		}
		// 密码不合法
		if(!util.checkPassword(user.getPassword())) {
			WebView.msgAlert({
				msg: '请输入8-16位数字、字母组合的密码。'
			}).show();
			return false;
		}
		// 填写邀请码不合法
		if(!util.checkInviteCode(user.getByinvitecode())) {
			WebView.msgAlert({
				msg: '请输入合法的邀请码。'
			}).show();
			return false;
		}
		return true;
	}

	/**
	 * 执行成功回调
	 * @param {Result} result 返回的结果
	 * @param {Function} callback 成功回调
	 */
	function executeCallback(result, callback) {
		if(typeof callback === 'function') {
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
		WebView.msgAlert({
			msg: result.getMsg()
		}).show();
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

	if(INSTANCE === null) {
		INSTANCE = new UserController();
	}

	return INSTANCE;

}));
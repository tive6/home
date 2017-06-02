(function(factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * @module {User} User
     */
    define('User', factory);
  } else {
    factory();
  }
}(function() {
  'use strict';

  function User(id, username, telphone, password, isAuth, cardnum, investusertype, investusertypeNum, token, loginCode, invitecode, byinvitecode, sign, isSign, registorigin, bankcardnum, city_id, cityName, bankcode, bankname) {
    this.id = id;
    this.username = username; // 姓名
    this.telphone = telphone;
    this.pwd = password;
    this.isAuth = isAuth; // 是否实名认证
    this.cardnum = cardnum; // 身份证号
    this.investusertype = investusertype; // 风险等级
    this.investusertypeNum = investusertypeNum; // 风险等级
    this.token = token;
    this.loginCode = loginCode;
    this.invitecode = invitecode; // 邀请码
    this.byinvitecode = byinvitecode;
    this.sign = sign;
    this.isSign = isSign; // 安心签
    this.registorigin = registorigin || '2';
    this.bankcardnum = bankcardnum; // 银行卡号
    this.city_id = city_id; // 城市
    this.cityName = cityName; // 城市名称
    this.bankcode = bankcode; // 银行代码
    this.bankname = bankname; // 银行名称
  }

  User.prototype.setIsSign = function(isSign) {
    this.isSign = isSign;
  };
  User.prototype.getIsSign = function() {
    return this.isSign;
  };


  User.prototype.setCityName = function(cityName) {
    this.cityName = cityName;
  };
  User.prototype.getCityName = function() {
    return this.cityName;
  };

  User.prototype.setCityId = function(city_id) {
    this.city_id = city_id;
  };
  User.prototype.getCityId = function() {
    return this.city_id;
  };

  User.prototype.setBankName = function(bankname) {
    this.bankname = bankname;
  };
  User.prototype.getBankName = function() {
    return this.bankname;
  };

  User.prototype.setBankCode = function(bankcode) {
    this.bankcode = bankcode;
  };
  User.prototype.getBankCode = function() {
    return this.bankcode;
  };

  User.prototype.setCityId = function(city_id) {
    this.city_id = city_id;
  };
  User.prototype.getCityId = function() {
    return this.city_id;
  };

  User.prototype.setBankCardNum = function(bankcardnum) {
    this.bankcardnum = bankcardnum;
  };
  User.prototype.getBankCardNum = function() {
    return this.bankcardnum;
  };

  User.prototype.setId = function(id) {
    this.id = id;
  };
  User.prototype.getId = function() {
    return this.id;
  };

  User.prototype.setUsername = function(username) {
    this.username = username;
  };
  User.prototype.getUsername = function() {
    return this.username;
  };

  User.prototype.setTelphone = function(telphone) {
    this.telphone = telphone;
  };
  User.prototype.getTelphone = function() {
    return this.telphone;
  };

  User.prototype.setPassword = function(password) {
    this.pwd = password;
  };

  User.prototype.getPassword = function(password) {
    return this.pwd;
  };

  User.prototype.setIsAuth = function(isAuth) {
    this.isAuth = isAuth;
  };
  User.prototype.getIsAuth = function() {
    return this.isAuth;
  };

  User.prototype.setCardnum = function(cardnum) {
    this.cardnum = cardnum;
  };
  User.prototype.getCardnum = function() {
    return this.cardnum;
  };

  User.prototype.setInvestusertype = function(investusertype) {
    this.investusertype = investusertype;
  };
  User.prototype.getInvestusertype = function(investusertype) {
    return this.investusertype;
  };
  
	User.prototype.setInvestusertypeNum = function(investusertypeNum) {
    this.investusertypeNum = investusertypeNum;
  };
  User.prototype.getInvestusertypeNum = function(investusertypeNum) {
    return this.investusertypeNum;
  };
  
  User.prototype.setToken = function(token) {
    this.token = token;
  };
  User.prototype.getToken = function() {
    return this.token;
  };

  User.prototype.setLoginCode = function(loginCode) {
    this.loginCode = loginCode;
  };
  User.prototype.getLoginCode = function() {
    return this.loginCode;
  };

  User.prototype.setByinvitecode = function(byinvitecode) {
    this.byinvitecode = byinvitecode;
  };
  User.prototype.getByinvitecode = function() {
    return this.byinvitecode;
  };

  User.prototype.setInvitecode = function(invitecode) {
    this.invitecode = invitecode;
  };
  User.prototype.getInvitecode = function() {
    return this.invitecode;
  };

  User.prototype.setRegistorigin = function(registorigin) {
    this.registorigin = registorigin;
  };
  User.prototype.getRegistorigin = function() {
    return this.registorigin;
  };

  User.prototype.setSign = function(sign) {
    this.sign = sign;
  };
  User.prototype.getSign = function() {
    return this.sign;
  };

  return User;
}));
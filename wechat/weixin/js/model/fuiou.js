(function (factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * @module {Fuiou} Fuiou
     */
    define('Fuiou', [], function () {
      return factory();
    });
  } else {
    factory();
  }
}(function () {
  'use strict';

  /**
   * @constructor {Fuiou} Fuiou
   */
  function Fuiou(login_id, mchnt_txn_ssn, mchnt_cd, signature, back_notify_url, amt, page_notify_url, cust_nm, certif_tp, certif_id, mobile_no, email, city_id, parent_bank_id, bank_nm, capAcntNm, capAcntNo, password, lpassword) {
    this.login_id = login_id;
    this.mchnt_txn_ssn = mchnt_txn_ssn; // 商户端唯一标识
    this.mchnt_cd = mchnt_cd; // 商户代码
    this.signature = signature; // 签名信息
    this.back_notify_url = back_notify_url;
    this.amt = amt || 0.00;
    this.page_notify_url = page_notify_url;
    this.cust_nm = cust_nm; // 客户姓名
    this.certif_tp = certif_tp; // 证件类型
    this.certif_id = certif_id; // 身份证号码/证件
    this.mobile_no = mobile_no; // 手机号码
    this.email = email; // 邮箱
    this.city_id = city_id; // 开户行地区代码
    this.parent_bank_id = parent_bank_id; // 开户行行别
    this.bank_nm = bank_nm; // 开户行支行名称
    this.capAcntNm = capAcntNm; // 提现账户开户名(留空)
    this.capAcntNo = capAcntNo; // 帐号
    this.password = password; // 提现密码
    this.lpassword = lpassword; // 登录密码
  }

  Fuiou.prototype.setLoginPassword = function (lpassword) {
    this.lpassword = lpassword;
  };
  Fuiou.prototype.getLoginPassword = function () {
    return this.lpassword;
  };

  Fuiou.prototype.setPassword = function (password) {
    this.password = password;
  };
  Fuiou.prototype.getPassword = function () {
    return this.password;
  };

  Fuiou.prototype.setCapAcntNo = function (capAcntNo) {
    this.capAcntNo = capAcntNo;
  };
  Fuiou.prototype.getCapAcntNo = function () {
    return this.capAcntNo;
  };

  Fuiou.prototype.setCapAcntNm = function (capAcntNm) {
    this.capAcntNm = capAcntNm;
  };
  Fuiou.prototype.getCapAcntNm = function () {
    return this.capAcntNm;
  };

  Fuiou.prototype.setBankName = function (bank_nm) {
    this.bank_nm = bank_nm;
  };
  Fuiou.prototype.getBankName = function () {
    return this.bank_nm;
  };

  Fuiou.prototype.setCityId = function (city_id) {
    this.city_id = city_id;
  };
  Fuiou.prototype.getCityId = function () {
    return this.city_id;
  };

  Fuiou.prototype.setParentBankId = function (parent_bank_id) {
    this.parent_bank_id = parent_bank_id;
  };
  Fuiou.prototype.getParentBankId = function () {
    return this.parent_bank_id;
  };

  Fuiou.prototype.setEmail = function (email) {
    this.email = email;
  };
  Fuiou.prototype.getEmail = function () {
    return this.email;
  };

  Fuiou.prototype.setMobileNo = function (mobile_no) {
    this.mobile_no = mobile_no;
  };
  Fuiou.prototype.getMobileNo = function () {
    return this.mobile_no;
  };

  Fuiou.prototype.setCertifId = function (certif_id) {
    this.certif_id = certif_id;
  };
  Fuiou.prototype.getCertifId = function () {
    return this.certif_id;
  };

  Fuiou.prototype.setCertifType = function (certif_tp) {
    this.certif_tp = certif_tp;
  };
  Fuiou.prototype.getCertifType = function () {
    return this.certif_tp;
  };

  Fuiou.prototype.setCustomName = function (cust_nm) {
    this.cust_nm = cust_nm;
  };
  Fuiou.prototype.getCustomName = function () {
    return this.cust_nm;
  };

  Fuiou.prototype.setLoginId = function (login_id) {
    this.login_id = login_id;
  };
  Fuiou.prototype.getLoginId = function () {
    return this.login_id;
  };

  Fuiou.prototype.setMchntTxnSsn = function (mchnt_txn_ssn) {
    this.mchnt_txn_ssn = mchnt_txn_ssn;
  };
  Fuiou.prototype.getMchntTxnSsn = function () {
    return this.mchnt_txn_ssn;
  };

  Fuiou.prototype.setMchntCd = function (mchnt_cd) {
    this.mchnt_cd = mchnt_cd;
  };
  Fuiou.prototype.getMchntCd = function () {
    return this.mchnt_cd;
  };

  Fuiou.prototype.setSignature = function (signature) {
    this.signature = signature;
  };
  Fuiou.prototype.getSignature = function () {
    return this.signature;
  };

  Fuiou.prototype.setBackNotifyUrl = function (back_notify_url) {
    this.back_notify_url = back_notify_url;
  };
  Fuiou.prototype.getBackNotifyUrl = function () {
    return this.back_notify_url;
  };

  Fuiou.prototype.setAmt = function (amt) {
    this.amt = amt;
  };
  Fuiou.prototype.getAmt = function () {
    return this.amt;
  };

  Fuiou.prototype.setPageNotifyUrl = function (page_notify_url) {
    this.page_notify_url = page_notify_url;
  };
  Fuiou.prototype.getPageNotifyUrl = function () {
    return this.page_notify_url;
  };

  return Fuiou;
}));
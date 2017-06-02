(function (factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * @module {CapitalFlow} CapitalFlow
     */
    define('CapitalFlow', [], function () {
      return factory();
    });
  } else {
    factory();
  }
}(function () {
  'use strict';

  /**
   * @constructor {CapitalFlow} CapitalFlow
   */
  function CapitalFlow(id, dealtype, opdate, dealmoney, userloginname, realname, ssn, signSymbol,dealtypeStr) {
    this.id = id;
    this.dealtype = dealtype;
    this.opdate = opdate;
    this.dealmoney = parseFloat(dealmoney) || 0.00;
    this.userloginname = userloginname;
    this.realname = realname;
    this.ssn = ssn;
    this.signSymbol = signSymbol; // 正负符号Î
    this.dealtypeStr = dealtypeStr;
  }

  CapitalFlow.prototype.setId = function (id) {
    this.id = id;
  };
  CapitalFlow.prototype.getId = function () {
    return this.id;
  };

  CapitalFlow.prototype.setDealtype = function (dealtype) {
    this.dealtype = dealtype;
  };
  CapitalFlow.prototype.getDealtype = function () {
    return this.dealtype;
  };
  
  CapitalFlow.prototype.setDealtypeStr = function (dealtypeStr) {
    this.dealtypeStr = dealtypeStr;
  };
  CapitalFlow.prototype.getDealtypeStr = function () {
    return this.dealtypeStr;
  };

  CapitalFlow.prototype.setOpdate = function (opdate) {
    this.opdate = opdate;
  };
  CapitalFlow.prototype.getOpdate = function () {
    return this.opdate;
  };

  CapitalFlow.prototype.setDealmoney = function (dealmoney) {
    this.dealmoney = parseFloat(dealmoney) || 0.00;
  };
  CapitalFlow.prototype.getDealmoney = function () {
    return this.dealmoney.toFixed(2);
  };

  CapitalFlow.prototype.setUserloginname = function (userloginname) {
    this.userloginname = userloginname;
  };
  CapitalFlow.prototype.getUserloginname = function () {
    return this.userloginname;
  };

  CapitalFlow.prototype.setRealname = function (realname) {
    this.realname = realname;
  };
  CapitalFlow.prototype.getRealname = function () {
    return this.realname;
  };

  CapitalFlow.prototype.setSSN = function (ssn) {
    this.ssn = ssn;
  };
  CapitalFlow.prototype.getSSN = function () {
    return this.ssn;
  };

  CapitalFlow.prototype.setSignSymbol = function (signSymbol) {
    this.signSymbol = signSymbol;
  };
  CapitalFlow.prototype.getSignSymbol = function () {
    return this.signSymbol;
  };

  return CapitalFlow;
}));
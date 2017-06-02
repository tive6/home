(function (factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * @module {Underlying} Underlying
     */
    define('Underlying', factory);
  } else {
    factory();
  }
}(function () {
  'use strict';
  var id_ser = 0;

  function Underlying(id, amount, rate, buyNum) {
    this.id = id || id_ser++;
    this.amount = amount || 0.00; // 总金额
    this.rate = rate || 0.00; // 年利率
    this.buyNum = buyNum || 0.00; // 已购买人数
  }

  Underlying.prototype.setId = function (id) {
    this.id = id;
  };
  Underlying.prototype.getId = function () {
    return this.id;
  };

  Underlying.prototype.setAmount = function (amount) {
    this.amount = parseFloat(amount) || 0.00;
  };
  Underlying.prototype.getAmount = function () {
    return this.amount.toFixed(2);
  };

  Underlying.prototype.setRate = function (rate) {
    this.rate = rate;
  };
  Underlying.prototype.getRate = function () {
    return this.rate;
  };

  Underlying.prototype.setBuyNum = function (buyNum) {
    this.buyNum = buyNum;
  };
  Underlying.prototype.getBuyNum = function () {
    return this.buyNum;
  };

  return Underlying;
}));
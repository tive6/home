(function (factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * @module {Bank} Bank
     */
    define('Bank', [], function () {
      return factory();
    });
  } else {
    factory();
  }
}(function () {
  'use strict';

  /**
   * @constructor {Bank} Bank
   */
  function Bank(id, name, code, number, isCompany, isIndividual) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.number = number;
    this.isCompany = isCompany;
    this.isIndividual = isIndividual;
  }

  Bank.prototype.setId = function (id) {
    this.id = id;
  };
  Bank.prototype.getId = function () {
    return this.id;
  };

  Bank.prototype.setName = function (name) {
    this.name = name;
  };
  Bank.prototype.getName = function () {
    return this.name;
  };

  Bank.prototype.setNumber = function (number) {
    this.number = number;
  };
  Bank.prototype.getNumber = function () {
    return this.number;
  };

  Bank.prototype.setCode = function (code) {
    this.code = code;
  };
  Bank.prototype.getCode = function () {
    return this.code;
  };

  Bank.prototype.setIsCompany = function (isCompany) {
    this.isCompany = isCompany;
  };
  Bank.prototype.getIsCompany = function () {
    return this.isCompany;
  };

  Bank.prototype.setIsIndividual = function (isIndividual) {
    this.isIndividual = isIndividual;
  };
  Bank.prototype.getIsIndividual = function () {
    return this.isIndividual;
  };

  return Bank;
}));
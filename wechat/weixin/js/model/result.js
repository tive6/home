(function (factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * @module {Result} Result
     */
    define('Result', [], function () {
      return factory();
    });
  } else {
    factory();
  }
}(function () {
  'use strict';

  /**
   * @constructor {Result} Result
   */
  function Result(status, msg, data) {
    this.status = status;
    this.msg = msg;
    this.data = data || null;
  }

  Result.prototype.setStatus = function (status) {
    this.status = status;
  };
  Result.prototype.getStatus = function () {
    return this.status;
  };

  Result.prototype.setMsg = function (msg) {
    this.msg = msg;
  };
  Result.prototype.getMsg = function () {
    return this.msg;
  };

  Result.prototype.setData = function (data) {
    this.data = data;
  };
  Result.prototype.getData = function () {
    return this.data;
  };

  return Result;
}));
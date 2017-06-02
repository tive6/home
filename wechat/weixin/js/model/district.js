(function (factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * @module {District} District
     */
    define('District', [], function () {
      return factory();
    });
  } else {
    factory();
  }
}(function () {
  'use strict';

  /**
   * @constructor {District} District
   */
  function District(id, name, code, parentName, parentCode) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.parentName = parentName;
    this.parentCode = parentCode;
  }

  District.prototype.setId = function (id) {
    this.id = id;
  };
  District.prototype.getId = function () {
    return this.id;
  };

  District.prototype.setName = function (name) {
    this.name = name;
  };
  District.prototype.getName = function () {
    return this.name;
  };

  District.prototype.setCode = function (code) {
    this.code = code;
  };
  District.prototype.getCode = function () {
    return this.code;
  };

  District.prototype.setParentName = function (parentName) {
    this.parentName = parentName;
  };
  District.prototype.getParentName = function () {
    return this.parentName;
  };

  District.prototype.setParentCode = function (parentCode) {
    this.parentCode = parentCode;
  };
  District.prototype.getParentCode = function () {
    return this.parentCode;
  };

  return District;
}));
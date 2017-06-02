(function (factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * @module {H5Urls} H5Urls
     */
    define('H5Urls', [], function () {
      return factory();
    });
  } else {
    factory();
  }
}(function () {
  'use strict';

  /**
   * @constructor {H5Urls} H5Urls
   */
  function H5Urls(allocationUrl, safetyUrl, registrationUrl, registration4fuiouUrl) {
    this.allocationUrl = allocationUrl;
    this.safetyUrl = safetyUrl;
    this.registrationUrl = registrationUrl;
    this.registration4fuiouUrl = registration4fuiouUrl;
  }

  H5Urls.prototype.setAllocationUrl = function (allocationUrl) {
    this.allocationUrl = allocationUrl;
  };
  H5Urls.prototype.getAllocationUrl = function () {
    return this.allocationUrl;
  };

  H5Urls.prototype.setSafetyUrl = function (safetyUrl) {
    this.safetyUrl = safetyUrl;
  };
  H5Urls.prototype.getSafetyUrl = function () {
    return this.safetyUrl;
  };

  H5Urls.prototype.setRegistrationUrl = function (registrationUrl) {
    this.registrationUrl = registrationUrl;
  };
  H5Urls.prototype.getRegistrationUrl = function () {
    return this.registrationUrl;
  };

  H5Urls.prototype.setRegistration4fuiouUrl = function (registration4fuiouUrl) {
    this.registration4fuiouUrl = registration4fuiouUrl;
  };
  H5Urls.prototype.getRegistration4fuiouUrl = function () {
    return this.registration4fuiouUrl;
  };

  return H5Urls;
}));
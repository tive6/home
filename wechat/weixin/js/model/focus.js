(function(factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * @module {Focus} Focus
     */
    define('Focus', [], function() {
      return factory();
    });
  } else {
    factory();
  }
}(function() {
  'use strict';

  /**
   * @constructor {Focus} Focus
   */
  function Focus(id, title, image, source, creattimeStr, aimUrl, typeIcon, message, isValid) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.source = source;
    this.creattimeStr = creattimeStr;
    this.aimUrl = aimUrl;
    this.typeIcon = typeIcon;
    this.message = message;
    this.isValid = isValid; // 是否过期
  }

  Focus.prototype.setId = function(id) {
    this.id = id;
  };
  Focus.prototype.getId = function() {
    return this.id;
  };

  Focus.prototype.setIsValid = function(isValid) {
    this.isValid = isValid;
  };
  Focus.prototype.getIsValid = function() {
    return this.isValid;
  };

  Focus.prototype.setMessage = function(message) {
    this.message = message;
  };
  Focus.prototype.getMessage = function() {
    return this.message;
  };


  Focus.prototype.setTypeIcon = function(typeIcon) {
    this.typeIcon = typeIcon;
  };
  Focus.prototype.getTypeIcon = function() {
    return this.typeIcon;
  };

  Focus.prototype.setAimUrl = function(aimUrl) {
    this.aimUrl = aimUrl;
  };
  Focus.prototype.getAimUrl = function() {
    return this.aimUrl;
  };

  Focus.prototype.setSource = function(source) {
    this.source = source;
  };
  Focus.prototype.getSource = function() {
    return this.source;
  };

  Focus.prototype.setTitle = function(title) {
    this.title = title;
  };
  Focus.prototype.getTitle = function() {
    return this.title;
  };

  Focus.prototype.setCreateTime = function(creattimeStr) {
    this.creattimeStr = creattimeStr;
  };
  Focus.prototype.getCreateTime = function() {
    return this.creattimeStr;
  };

  Focus.prototype.setImage = function(image) {
    this.image = image;
  };
  Focus.prototype.getImage = function() {
    return this.image;
  };

  return Focus;
}));
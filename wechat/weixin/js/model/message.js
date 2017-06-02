(function (factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * @module {Message} Message
     */
    define('Message', [], function () {
      return factory();
    });
  } else {
    factory();
  }
}(function () {
  'use strict';

  /**
   * @constructor {Message} Message
   */
  function Message(id, title, createDate, content, status, num, newsContent, appAbstract, opdateString, url, appIcon) {
    this.id = id;
    this.title = title;
    this.createDate = createDate;
    this.content = content;
    this.status = status;
    this.num = num;
   
   
    this.newsContent = newsContent;
    this.appAbstract = appAbstract;
    this.opdateString = opdateString;
    this.url = url;
    this.appIcon = appIcon;
  }

  Message.prototype.setId = function (id) {
    this.id = id;
  };
  Message.prototype.getId = function () {
    return this.id;
  };

  Message.prototype.setTitle = function (title) {
    this.title = title;
  };
  Message.prototype.getTitle = function () {
    return this.title;
  };

  Message.prototype.setCreateDate = function (createDate) {
    this.createDate = createDate;
  };
  Message.prototype.getCreateDate = function () {
    return this.createDate;
  };

  Message.prototype.setContent = function (content) {
    this.content = content;
  };
  Message.prototype.getContent = function () {
    return this.content;
  };

  Message.prototype.setStatus = function (status) {
    this.status = status;
  };
  Message.prototype.getStatus = function () {
    return this.status;
  };

  Message.prototype.setNum = function (num) {
    this.num = num;
  };
  Message.prototype.getNum = function () {
    return this.num;
  };

	Message.prototype.setNewsContent = function (newsContent) {
    this.newsContent = newsContent;
  };
  Message.prototype.getNewsContent = function () {
    return this.newsContent;
  };

  Message.prototype.setAppAbstract = function (appAbstract) {
    this.appAbstract = appAbstract;
  };
  Message.prototype.getAppAbstract = function () {
    return this.appAbstract;
  };

  Message.prototype.setOpdateString = function (opdateString) {
    this.opdateString= opdateString;
  };
  Message.prototype.getOpdateString = function () {
    return this.opdateString;
  };
  
	Message.prototype.setUrl = function (url) {
    this.url= url;
  };
  Message.prototype.getUrl = function () {
    return this.url;
  };
  
  Message.prototype.setAppIcon = function (appIcon) {
    this.appIcon= appIcon;
  };
  Message.prototype.getAppIcon = function () {
    return this.appIcon;
  };


  return Message;
}));
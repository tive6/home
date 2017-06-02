(function(factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * 本地文件数据读取
     * @module {LocalFileReader} localFileReader
     */
    define('localFileReader', [], factory);
  } else {
    window.localFileReader = factory();
  }
}(function($) {
  'use strict';
  var INSTANCE = null;

  /**
   * 本地文件数据读取
   * @constructor {LocalFileReader} LocalFileReader
   */
  function LocalFileReader() {}

  LocalFileReader.prototype.readFile = function(file) {
    var reader = new FileReader();
  };

  /**
   * 
   */
  LocalFileReader.prototype.getImageElementsByObjectURL = function(files, width, height) {
    var i = 0,
      length = files.length,
      fileList = [],
      file = null,
      _filename, _key, _img;

    for (; i < length; i++) {
      _img = document.createElement('img');
      _img.src = window.URL.createObjectURL(files[i]);

      if (width) {
        _img.width = width;
      }
      if (height) {
        _img.height = height;
      }

      _img.onload = function(e) {
        window.URL.revokeObjectURL(this.src);
      };

      fileList.push(_img);
    }

    return fileList;
  };

  if (INSTANCE === null) {
    INSTANCE = new LocalFileReader();
  }

  return INSTANCE;

}));
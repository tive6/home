(function(factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * @module {AsyncTaskManager} AsyncTaskManager
     */
    define('AsyncTaskManager', [], factory);
  } else {
    window.AsyncTaskManager = factory();
  }
}(function() {
  'use strict';

  /**
   * 构造器
   * @constructor {AsyncTaskManager} AsyncTaskManager
   */
  function AsyncTaskManager() {
    this._flag = [];
    this._tasks = [];
    this._args = [];
  }

  AsyncTaskManager.of = function() {
    return new AsyncTaskManager();
  }

  AsyncTaskManager.prototype.addTask = function(f, arg) {
    this._flag.push(false);
    this._tasks.push(f)
    this._args.push(arg);
    return this;
  };

  AsyncTaskManager.prototype.every = function(f) {
    var _self = this,
      s = this._tasks.length,
      af = false,
      count = 0,
      r = [],
      i, g;
    for (i = 0; i < s; i++) {
      var arg = _self._args[i];
      console.log(arg)
      if (arg !== null && typeof arg !== 'undefined') {
        // console.log('With args......')
        this._tasks[i](arg, function(res) {
          // 本任务完成
          _self._flag[count] = true;
          r.push(res);
          count++;
          // 探测其他任务执行进度
          ask(f);
        });
      } else {
        // console.log('Without args......')
        this._tasks[i](function(res) {
          // 本任务完成
          _self._flag[count] = true;
          r.push(res);
          count++;
          // 探测其他任务执行进度
          ask(f);
        });
      }
    }

    function ask(f) {
      var j = 0,
        finished = true;
      for (; j < s; j++) {
        if (!_self._flag[j]) {
          finished = false;
          return;
        }
      }
      if (finished) {
        f(r);
      }
    }

    return this;
  };

  return AsyncTaskManager;
}));
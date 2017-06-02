(function (factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * @module {BondService} bondService
     */
    define('bondService', [
      'jquery', 'config', 'util', 'Result', 'Bond'
    ], factory);
  } else {
    window.bondService = factory();
  }
}(function ($, config, util, Result, Bond) {
  'use strict';
  var INSTANCE = null;

  /**
   * 构造器
   * @constructor {BondService} BondService
   */
  function BondService() {}

  /**
   * 立即转让
   */
  BondService.prototype.transfer = function (options, succCallback, errCallback) {
    var result = new Result();
    $
      .ajax({
        url: config.SERVICE_URL + config.SERVICE_URI_MAP.TRANSFER,
        data: util.JSONStringify(options)
      })
      .then(function (res, status, xhr) {
        console.log(res);
        var _status = res.data.status;
        result.setMsg(res.data.msg);
        if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
          result.setStatus(_status);
        } else if ('1' === _status) {
          result.setStatus(true);
        } else if ('0' === _status) {
          result.setStatus(false);
        }

        executeSuccCallback(result, succCallback);
      }, function (xhr, status, error) {
        handleError(result, errCallback);
      });
  };

  /**
   * 获取手续费
   */
  BondService.prototype.getFactorace = function (options, succCallback, errCallback) {
    var result = new Result();
    $
      .ajax({
        url: config.SERVICE_URL + config.SERVICE_URI_MAP.GET_FACTORAGE,
        data: util.JSONStringify(options)
      })
      .then(function (res, status, xhr) {
        console.log(res);
        var _status = res.data.status;
        result.setMsg(res.data.msg);
        if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
          result.setStatus(_status);
        } else if ('1' === _status) {
          result.setStatus(true);
          result.setData(res.data);
        } else if ('0' === _status) {
          result.setStatus(false);
        }

        executeSuccCallback(result, succCallback);
      }, function (xhr, status, error) {
        handleError(result, errCallback);
      });
  };

  /**
   * 获取债券转让列表（可转让、转让中、已转让） 在投收益 累计收益
   * @param {string} telphone 接收验证码的手机号
   */
  BondService.prototype.getTransferList = function (options, succCallback, errCallback) {
    var result = new Result();
    $
      .ajax({
        url: config.SERVICE_URL + config.SERVICE_URI_MAP.TRANSFER_LIST,
        data: util.JSONStringify(options)
      })
      .then(function (res, status, xhr) {
        console.log(res);
        var _status = res.data.status;
        result.setMsg(res.data.msg);
        if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
          result.setStatus(_status);
        } else if ('1' === _status) {
          var data = {
            earn: {
              investEarned: res.data.investingEarnings,
              sumEarned: res.data.sumEarnings
            },
            transfered: mapData2Bond(res.data.transfereds),
            transfering: mapData2Bond(res.data.transferings),
            transfer: mapData2Bond(res.data.transfers)
          };
          result.setData(data);
          result.setStatus(true);
        } else if ('0' === _status) {
          result.setStatus(false);
        }
        executeSuccCallback(result, succCallback);
      }, function (xhr, status, error) {
        handleError(result, errCallback);
      });
  };

  /*债权转让  可转让*/

  BondService.prototype.getTransfersList = function (options, succCallback, errCallback) {
    console.log(options)
    var result = new Result();
    $
      .ajax({
        url: config.SERVICE_URL + config.SERVICE_URI_MAP.TRANSFERS_LIST,
        data: util.JSONStringify(options)
      })
      .then(function (res, status, xhr) {
        console.log(res);
        var _status = res.data.status;
        result.setMsg(res.data.msg);
        if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
          result.setStatus(_status);
        } else if ('1' === _status) {
          result.setData(res.data.transfers);
          result.setStatus(true);
        } else if ('0' === _status) {
          result.setStatus(false);
        }
        executeSuccCallback(result, succCallback);
      }, function (xhr, status, error) {
        handleError(result, errCallback);
      });
  };

  /*债权转让  转让中*/

  BondService.prototype.getTransferingsList = function (options, succCallback, errCallback) {
    console.log(options)
    var result = new Result();
    $
      .ajax({
        url: config.SERVICE_URL + config.SERVICE_URI_MAP.TRANSFERINGS_LIST,
        data: util.JSONStringify(options)
      })
      .then(function (res, status, xhr) {
        console.log(res);
        var _status = res.data.status;
        result.setMsg(res.data.msg);
        if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
          result.setStatus(_status);
        } else if ('1' === _status) {
          result.setData(res.data.transferings);
          result.setStatus(true);
        } else if ('0' === _status) {
          result.setStatus(false);
        }
        executeSuccCallback(result, succCallback);
      }, function (xhr, status, error) {
        handleError(result, errCallback);
      });
  };

  /*债权转让  已转让*/

  BondService.prototype.getTransferedsList = function (options, succCallback, errCallback) {
    console.log(options)
    var result = new Result();
    $
      .ajax({
        url: config.SERVICE_URL + config.SERVICE_URI_MAP.TRANSFERDS_LIST,
        data: util.JSONStringify(options)
      })
      .then(function (res, status, xhr) {
        console.log(res);
        var _status = res.data.status;
        result.setMsg(res.data.msg);
        if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
          result.setStatus(_status);
        } else if ('1' === _status) {
          result.setData(res.data.transfereds);
          result.setStatus(true);
        } else if ('0' === _status) {
          result.setStatus(false);
        }
        executeSuccCallback(result, succCallback);
      }, function (xhr, status, error) {
        handleError(result, errCallback);
      });
  };

  /**
   * 数据转换成 @license {Bond}
   * @return {Array<Bond>} description
   */
  function mapData2Bond(list) {
    var tmp = [],
      bond = null;
    $.each(list, function (index, item) {
      bond = new Bond();
      bond.setBidId(item.bidId); // 标的ID
      bond.setOrderId(item.orderId); // 订单ID
      bond.setBidTitle(item.bidTitle); // 标的标题
      bond.setBidType(item.bidType); // 标的类型（房、车）
      bond.setYearRate(item.yearRate); // 年化收益率
      bond.setMoney(item.money); // 买入金额
      bond.setExpireDateStr(item.expireDateStr); // 到期时间
      bond.setProspective(item.prospective); // 预期收益
      bond.setFactorage(item.factorage); // 手续费
      bond.setRedemption(item.redemption); // 实际回款

      bond.setCanTranferMoney(item.canTranferMoney); // 可转让金额
      bond.setHoldMoney(item.money); // 持有金额
      bond.setDeploydate(item.deploydateStr); // 发起时间
      bond.setTransferMoney(item.transferMoney); // 转让金额
      bond.setRedeemMoney(item.remainMoney); // 剩余金额
      bond.setSuccDateStr(item.succDateStr); // 成功时间

      bond.setInvestSource(item.investSource); // 标的类别
      bond.setSubsidyRate(item.subsidyRate); // 补贴年化收益率
      bond.setInvestMoney(item.investMoney); // 理财金额
      tmp.push(bond);
    });
    return tmp;
  }

  /**
   * 债权转让合同
   */
  BondService.prototype.getDownLoadContract = function (options, succCallback, errCallback) {
    console.log(options)
    var result = new Result();
    $
      .ajax({
        url: config.SERVICE_URL + config.SERVICE_URI_MAP.CONTRACT,
        data: util.JSONStringify(options)
      })
      .then(function (res, status, xhr) {
        console.log(res);
        var _status = res.data.status;
        result.setMsg(res.data.msg);
        if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
          result.setStatus(_status);
        } else if ('1' === _status) {
          result.setStatus(true);
        } else if ('0' === _status) {
          result.setStatus(false);
        }

        executeSuccCallback(result, succCallback);
      }, function (xhr, status, error) {
        handleError(result, errCallback);
      });
  };

  /**
   * 执行成功回调
   * @param {Result} result 返回的结果
   * @param {Function} callback 成功回调
   */
  function executeSuccCallback(result, callback) {
    if (typeof callback === 'function') {
      callback(result);
    }
  }

  /**
   * 请求出错处理函数
   * @param {any} result 请求出错
   */
  function handleError(result, callback) {
    result.setStatus(false);
    result.setMsg('系统错误请稍后再试。');
    if (typeof callback === 'function') {
      callback(result);
    }
  }

  if (INSTANCE === null) {
    INSTANCE = new BondService();
  }

  return INSTANCE;
}));
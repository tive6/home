(function(factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * @module {Asset} Asset
     */
    define('Asset', [], function() {
      return factory();
    });
  } else {
    factory();
  }
}(function() {
  'use strict';

  /**
   * @constructor {Asset} Asset
   */
  function Asset(ct_balance, ca_balance, cf_balance, rechargeSum, withdrawSum, mobile, sumEarnings, sumUnGetInterest, id, money, lockperiod, unmatched, matchtime, operatype, matchedmoney, enmatchedmoney, unfreezemoney, myAsset, sumEarned, freezeOfZhix, freezeOfGeneral, waitingOfCapital, awardOfActivity, otherMoney) {
    //账面总余额
    this.ct_balance = parseFloat(ct_balance) || 0.00;
    //可以余额
    this.ca_balance = parseFloat(ca_balance) || 0.00;
    //冻结余额
    this.cf_balance = parseFloat(cf_balance) || 0.00;
    //累计充值
    this.rechargeSum = parseFloat(rechargeSum) || 0.00;
    //累计提现
    this.withdrawSum = parseFloat(withdrawSum) || 0.00;
    // 手机号
    this.mobile = mobile;

    // 待收收益
    this.sumUnGetInterest = parseFloat((sumUnGetInterest || 0.00));
    //累计投资收益
    this.sumEarnings = parseFloat((sumEarnings || 0.00));
    // 资产总额
    this.myAsset = parseFloat((myAsset || 0.00));
    //已收收益
    this.sumEarned = parseFloat((sumEarned || 0.00));
    // 智享冻结
    this.freezeOfZhix = parseFloat((freezeOfZhix || 0.00));
    //散标冻结
    this.freezeOfGeneral = parseFloat((freezeOfGeneral || 0.00));
    //待收本金
    this.waitingOfCapital = parseFloat((waitingOfCapital || 0.00));
    //活动奖励
    this.awardOfActivity = parseFloat((awardOfActivity || 0.00));
    //其他费用
    this.otherMoney = parseFloat((otherMoney || 0.00));


    this.id = id;
    this.money = parseFloat((money || 0.00));
    this.lockperiod = lockperiod;
    this.unmatched = parseFloat((unmatched || 0.00));
    this.matchtime = matchtime;
    this.operatype = operatype;
    this.matchedmoney = parseFloat((matchedmoney || 0.00));
    this.enmatchedmoney = parseFloat((enmatchedmoney || 0.00));
    this.unfreezemoney = parseFloat((unfreezemoney || 0.00));

  }

  Asset.prototype.setOtherMoney = function(otherMoney) {
    this.otherMoney = parseFloat(otherMoney) || 0.00;
  }
  Asset.prototype.getOtherMoney = function() {
    return this.otherMoney.toFixed(2);
  }

  Asset.prototype.setAwardOfActivity = function(awardOfActivity) {
    this.awardOfActivity = parseFloat(awardOfActivity) || 0.00;
  }
  Asset.prototype.getAwardOfActivity = function() {
    return this.awardOfActivity.toFixed(2);
  }

  Asset.prototype.setWaitingOfCapital = function(waitingOfCapital) {
    this.waitingOfCapital = parseFloat(waitingOfCapital) || 0.00;
  }
  Asset.prototype.getWaitingOfCapital = function() {
    return this.waitingOfCapital.toFixed(2);
  }

  Asset.prototype.setFreezeOfGeneral = function(freezeOfGeneral) {
    this.freezeOfGeneral = parseFloat(freezeOfGeneral) || 0.00;
  }
  Asset.prototype.getFreezeOfGeneral = function() {
    return this.freezeOfGeneral.toFixed(2);
  }

  Asset.prototype.setFreezeOfZhix = function(freezeOfZhix) {
    this.freezeOfZhix = parseFloat(freezeOfZhix) || 0.00;
  }
  Asset.prototype.getFreezeOfZhix = function() {
    return this.freezeOfZhix.toFixed(2);
  }

  Asset.prototype.setSumEarned = function(sumEarned) {
    this.sumEarned = parseFloat(sumEarned) || 0.00;
  }
  Asset.prototype.getSumEarned = function() {
    return this.sumEarned.toFixed(2);
  }

  Asset.prototype.setMyAsset = function(myAsset) {
    this.myAsset = parseFloat(myAsset) || 0.00;
  }
  Asset.prototype.getMyAsset = function() {
    return this.myAsset.toFixed(2);
  }

  Asset.prototype.setCTBalance = function(ct_balance) {
    this.ct_balance = parseFloat(ct_balance) || 0.00;
  };
  Asset.prototype.getCTBalance = function() {
    return this.ct_balance.toFixed(2);
  };

  Asset.prototype.setCABalance = function(ca_balance) {
    this.ca_balance = parseFloat(ca_balance) || 0.00;
  };
  Asset.prototype.getCABalance = function() {
    return this.ca_balance.toFixed(2);
  };

  Asset.prototype.setCFBalance = function(cf_balance) {
    this.cf_balance = parseFloat(cf_balance) || 0.00;
  };
  Asset.prototype.getCFBalance = function() {
    return this.cf_balance.toFixed(2);
  };

  Asset.prototype.setRechargeSum = function(rechargeSum) {
    this.rechargeSum = parseFloat(rechargeSum) || 0.00;
  };
  Asset.prototype.getRechargeSum = function() {
    return this.rechargeSum.toFixed(2);
  };

  Asset.prototype.setWithdrawSum = function(withdrawSum) {
    this.withdrawSum = parseFloat(withdrawSum) || 0.00;
  };
  Asset.prototype.getWithdrawSum = function() {
    return this.withdrawSum.toFixed(2);
  };

  Asset.prototype.setMobile = function(mobile) {
    this.mobile = mobile;
  };
  Asset.prototype.getMobile = function() {
    return this.mobile;
  };

  Asset.prototype.setSumEarnings = function(sumEarnings) {
    this.sumEarnings = parseFloat(sumEarnings) || 0.00;
  };
  Asset.prototype.getSumEarnings = function() {
    return this.sumEarnings.toFixed(2);
  };

  Asset.prototype.setSumUnGetInterest = function(sumUnGetInterest) {
    this.sumUnGetInterest = parseFloat(sumUnGetInterest) || 0.00;
  };
  Asset.prototype.getSumUnGetInterest = function() {
    return this.sumUnGetInterest.toFixed(2);
  };


  return Asset;
}));
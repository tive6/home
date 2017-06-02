(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /**
         * @module {Bond} Bond
         */
        define('Bond', factory);
    } else {
        factory();
    }
}(function () {
    'use strict';

    function Bond(bidId, orderId, bidTitle, bidType, yearRate, money, holdMoney, expireDateStr, prospective, deploydate, transferMoney, canTranferMoney, redeemMoney, succDateStr, factorage, redemption, investSource, subsidyRate, investMoney) {
        this.bidId = bidId; // 标的id
        this.orderId = orderId; // 订单id
        this.bidTitle = bidTitle; // 标的标题
        this.bidType = bidType; // 标的类型
        this.yearRate = yearRate; // 年化利率
        this.money = parseFloat(money) || 0.00; // 买入金额
        this.expireDate = expireDateStr; // 到期时间
        this.prospective = prospective; // 预期收益
        this.holdMoney = parseFloat(holdMoney) || 0.00; // 持有金额
        this.deploydate = deploydate; // 发起时间
        this.transferMoney = parseFloat(transferMoney) || 0.00; // 转让金额
        this.canTranferMoney = parseFloat(canTranferMoney) || 0.00; // 可转让金额
        this.redeemMoney = parseFloat(redeemMoney) || 0.00; // 剩余金额
        this.succDateStr = succDateStr; // 成功时间
        this.factorage = parseFloat(factorage) || 0.00; // 手续费
        this.redemption = parseFloat(redemption) || 0.00; // 赎回金额(实际回款)
        this.investSource = investSource; // 投资标的类别标识
        this.subsidyRate = subsidyRate; // 贴补收益年化利率
        this.investMoney = parseFloat(investMoney) || 0.00; // 理财金额
    }

    Bond.prototype.setCanTranferMoney = function (canTranferMoney) {
        this.canTranferMoney = parseFloat(canTranferMoney) || 0.00;
    };
    Bond.prototype.getCanTranferMoney = function () {
        return this.canTranferMoney.toFixed(2);
    };

    Bond.prototype.setRedemption = function (redemption) {
        this.redemption = parseFloat(redemption) || 0.00;
    };
    Bond.prototype.getRedemption = function () {
        return this.redemption.toFixed(2);
    };

    Bond.prototype.setFactorage = function (factorage) {
        this.factorage = parseFloat(factorage) || 0.00;
    };
    Bond.prototype.getFactorage = function () {
        return this.factorage.toFixed(2);
    };

    Bond.prototype.setBidId = function (bidId) {
        this.bidId = bidId;
    };
    Bond.prototype.getBidId = function () {
        return this.bidId;
    };

    Bond.prototype.setOrderId = function (orderId) {
        this.orderId = orderId;
    };
    Bond.prototype.getOrderId = function () {
        return this.orderId;
    };

    Bond.prototype.setBidTitle = function (bidTitle) {
        this.bidTitle = bidTitle;
    };
    Bond.prototype.getBidTitle = function () {
        return this.bidTitle;
    };

    Bond.prototype.setBidType = function (bidType) {
        this.bidType = bidType;
    };
    Bond.prototype.getBidType = function () {
        return this.bidType;
    };

    Bond.prototype.setYearRate = function (yearRate) {
        this.yearRate = yearRate;
    };
    Bond.prototype.getYearRate = function () {
        return this.yearRate;
    };

    Bond.prototype.setMoney = function (money) {
        this.money = parseFloat(money) || 0.00;
    };
    Bond.prototype.getMoney = function () {
        return this.money.toFixed(2);
    };

    Bond.prototype.setExpireDateStr = function (expireDateStr) {
        this.expireDateStr = expireDateStr;
    };
    Bond.prototype.getExpireDateStr = function () {
        return this.expireDateStr;
    };

    Bond.prototype.setProspective = function (prospective) {
        this.prospective = parseFloat(prospective) || 0.00;
    };
    Bond.prototype.getProspective = function () {
        return this.prospective.toFixed(2);
    };

    Bond.prototype.setHoldMoney = function (holdMoney) {
        this.holdMoney = parseFloat(holdMoney) || 0.00;
    };
    Bond.prototype.getHoldMoney = function () {
        return this.holdMoney.toFixed(2);
    };

    Bond.prototype.setDeploydate = function (deploydate) {
        this.deploydate = deploydate;
    };
    Bond.prototype.getDeploydate = function () {
        return this.deploydate;
    };

    Bond.prototype.setTransferMoney = function (transferMoney) {
        this.transferMoney = parseFloat(transferMoney) || 0.00;
    };
    Bond.prototype.getTransferMoney = function () {
        return this.transferMoney.toFixed(2);
    };

    Bond.prototype.setRedeemMoney = function (redeemMoney) {
        this.redeemMoney = parseFloat(redeemMoney) || 0.00;
    };
    Bond.prototype.getRedeemMoney = function () {
        return this.redeemMoney.toFixed(2);
    };

    Bond.prototype.setSuccDateStr = function (succDateStr) {
        this.succDateStr = succDateStr;
    };
    Bond.prototype.getSuccDateStr = function () {
        return this.succDateStr;
    };

    /*添加*/
    Bond.prototype.setInvestSource = function (investSource) {
        this.investSource = investSource;
    };
    Bond.prototype.getInvestSource = function () {
        return this.investSource;
    };

    Bond.prototype.setSubsidyRate = function (subsidyRate) {
        this.subsidyRate = subsidyRate;
    };
    Bond.prototype.getSubsidyRate = function () {
        return this.subsidyRate;
    };

    Bond.prototype.setInvestMoney = function (investMoney) {
        this.investMoney = investMoney;
    };
    Bond.prototype.getInvestMoney = function () {
        return this.investMoney;
    };

    return Bond;
}));
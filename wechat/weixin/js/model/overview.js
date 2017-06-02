(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /**
         * @module {Overview} Overview
         */
        define('Overview', [], function () {
            return factory();
        });
    } else {
        factory();
    }
}(function () {
    'use strict';

    /**
     * @constructor {Overview} Overview
     */
    function Overview(amountMoney, subSidy, earningMoney, sumEarnOfZX, waitSubSidy, matchSum, nuMatchSum, latestEarn, waitEarnSum, sumMatchedBid, licha, waitlicha ) {
        this.amountMoney = parseFloat(amountMoney) || 0.00; // 理财金额
        this.subSidy = parseFloat(subSidy) || 0.00; // 累计贴息补偿
        this.earningMoney = parseFloat(earningMoney) || 0.00;   //
        this.sumEarnOfZX = parseFloat(sumEarnOfZX) || 0.00;   // 累计投资收益
        this.waitSubSidy = parseFloat(waitSubSidy) || 0.00;   // 待收贴息补偿
        this.matchSum = parseFloat(matchSum) || 0.00;   // 已匹配总额
        this.nuMatchSum = parseFloat(nuMatchSum) || 0.00;   // 未匹配总额
        this.latestEarn = parseFloat(latestEarn) || 0.00;   // 最新投资收益
        this.waitEarnSum = parseFloat(waitEarnSum) || 0.00;   // 待收投资收益
        this.sumMatchedBid = parseFloat(sumMatchedBid) || 0.00;   // 已匹配标的（笔）

        this.licha = parseFloat(licha) || 0.00; // 利差
        this.waitLicha = parseFloat(waitlicha) || 0.00; // 利差
    }

    Overview.prototype.setWaitLicha = function (waitLicha) {
        this.waitLicha = parseFloat(waitLicha) || 0.00;
    };
    Overview.prototype.getWaitLicha = function () {
        return this.waitLicha.toFixed(2);
    };

    Overview.prototype.setLicha = function (licha) {
        this.licha = parseFloat(licha) || 0.00;
    };
    Overview.prototype.getLicha = function () {
        return this.licha.toFixed(2);
    };

    Overview.prototype.setAmountMoney = function (amountMoney) {
        this.amountMoney = parseFloat(amountMoney) || 0.00;
    };
    Overview.prototype.getAmountMoney = function () {
        return this.amountMoney.toFixed(2);
    };

    Overview.prototype.setSubSidy = function (subSidy) {
        this.subSidy = parseFloat(subSidy) || 0.00;
    };
    Overview.prototype.getSubSidy = function () {
        return this.subSidy.toFixed(2);
    };

    Overview.prototype.setEarningMoney = function (earningMoney) {
        this.earningMoney = parseFloat(earningMoney) || 0.00;
    };
    Overview.prototype.getEarningMoney = function () {
        return this.earningMoney.toFixed(2);
    };

    Overview.prototype.setSumEarnOfZX = function (sumEarnOfZX) {
        this.sumEarnOfZX = parseFloat(sumEarnOfZX) || 0.00;
    };
    Overview.prototype.getSumEarnOfZX = function () {
        return this.sumEarnOfZX.toFixed(2);
    };

    // 添加
    Overview.prototype.setWaitSubSidy = function (waitSubSidy) {
        this.waitSubSidy = parseFloat(waitSubSidy) || 0.00;
    };
    Overview.prototype.getWaitSubSidy = function () {
        return this.waitSubSidy;
    };

    Overview.prototype.setMatchSum = function (matchSum) {
        this.matchSum = parseFloat(matchSum) || 0.00;
    };
    Overview.prototype.getMatchSum = function () {
        return this.matchSum.toFixed(2);
    };

    Overview.prototype.setNuMatchSum = function (nuMatchSum) {
        this.nuMatchSum = parseFloat(nuMatchSum) || 0.00;
    };
    Overview.prototype.getNuMatchSum = function () {
        return this.nuMatchSum.toFixed(2);
    };

    Overview.prototype.setLatestEarn = function (latestEarn) {
        this.latestEarn = parseFloat(latestEarn) || 0.00;
    };
    Overview.prototype.getLatestEarn = function () {
        return this.latestEarn.toFixed(2);
    };

    Overview.prototype.setWaitEarnSum = function (waitEarnSum) {
        this.waitEarnSum = parseFloat(waitEarnSum) || 0.00;
    };
    Overview.prototype.getWaitEarnSum = function () {
        return this.waitEarnSum;
    };

    Overview.prototype.setSumMatchedBid = function (sumMatchedBid) {
        this.sumMatchedBid = parseInt(sumMatchedBid) || 0;
    };
    Overview.prototype.getSumMatchedBid = function () {
        return this.sumMatchedBid;
    };

    return Overview;
}));
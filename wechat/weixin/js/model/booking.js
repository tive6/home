(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /**
         * @module {Booking} Booking
         */
        define('Booking', [], function () {
            return factory();
        });
    } else {
        factory();
    }
}(function () {
    'use strict';

    /**
     * @constructor {Booking} Booking
     */
    function Booking(bookid, orderdate, lockperiod, lockperiodStr, money, matched, unmatched, thawched, tag, groupByMothTag, countPage, currentPage, yearRate, orderTimeStr) {
        this.bookid = bookid; // 预约id
        this.orderdate = orderdate; // 预约时间
        this.lockperiod = lockperiod; // 锁定期
        this.lockperiodStr = lockperiodStr; // 锁定期文字
        this.money = parseFloat(money) || 0.00; // 预约金额
        this.matched = parseFloat(matched) || 0.00; // 匹配金额
        this.unmatched = parseFloat(unmatched) || 0.00; // 未匹配金额
        this.thawched = parseFloat(thawched) || 0.00; // 解冻金额
        /* 新增 */
        this.tag = tag; // 标签
        this.groupByMothTag = groupByMothTag; // 按月分组时间标志
        this.countPage = countPage; // 总页数
        this.currentPage = currentPage; // 当前页
        this.yearRate = yearRate; // 年利率
        this.orderTimeStr = orderTimeStr; // 时间
    }

    Booking.prototype.setThawched = function (thawched) {
        this.thawched = parseFloat(thawched) || 0.00;
    };
    Booking.prototype.getThawched = function () {
        return this.thawched.toFixed(2);
    };

    Booking.prototype.setBookid = function (bookid) {
        this.bookid = bookid;
    };
    Booking.prototype.getBookid = function () {
        return this.bookid;
    };

    Booking.prototype.setOrderdate = function (orderdate) {
        this.orderdate = orderdate;
    };
    Booking.prototype.getOrderdate = function () {
        return this.orderdate;
    };

    Booking.prototype.setLockperiod = function (lockperiod) {
        this.lockperiod = lockperiod;
    };
    Booking.prototype.getLockperiod = function () {
        return this.lockperiod;
    };

    Booking.prototype.setMoney = function (money) {
        this.money = parseFloat(money) || 0.00;
    };
    Booking.prototype.getMoney = function () {
        return this.money.toFixed(2);
    };

    Booking.prototype.setMatched = function (matched) {
        this.matched = parseFloat(matched) || 0.00;
    };
    Booking.prototype.getMatched = function () {
        return this.matched.toFixed(2);
    };

    Booking.prototype.setUnmatched = function (unmatched) {
        this.unmatched = parseFloat(unmatched) || 0.00;
    };
    Booking.prototype.getUnmatched = function () {
        return this.unmatched.toFixed(2);
    };

    /* 新增 */
    Booking.prototype.setTag = function (tag) {
        this.tag = tag;
    };
    Booking.prototype.getTag = function () {
        return this.tag;
    };

    Booking.prototype.setGroupByMothTag = function (groupByMothTag) {
        this.groupByMothTag = groupByMothTag;
    };
    Booking.prototype.getGroupByMothTag = function () {
        return this.groupByMothTag;
    };

    Booking.prototype.setCountPage = function (countPage) {
        this.countPage = countPage;
    };
    Booking.prototype.getCountPage = function () {
        return this.countPage;
    };

    Booking.prototype.setCurrentPage = function (currentPage) {
        this.currentPage = currentPage;
    };
    Booking.prototype.getCurrentPage = function () {
        return this.currentPage;
    };

    Booking.prototype.setYearRate = function (yearRate) {
        this.yearRate = yearRate;
    };
    Booking.prototype.getYearRate = function () {
        return this.yearRate;
    };

    Booking.prototype.setOrderTimeStr = function (orderTimeStr) {
        this.orderTimeStr = orderTimeStr;
    };
    Booking.prototype.getOrderTimeStr = function () {
        return this.orderTimeStr;
    };

    Booking.prototype.setLockperiodStr = function (lockperiodStr) {
        this.lockperiodStr = lockperiodStr;
    };
    Booking.prototype.getLockperiodStr = function () {
        return this.lockperiodStr;
    };

    return Booking;
}));
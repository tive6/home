(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /**
         * @module {Record} Record
         */
        define('Record', factory);
    } else {
        factory();
    }
}(function () {
    'use strict';
    var id_ser = 0;

    function Record(id, username, displayname, telphone, money, orderDate, img, orderTime ) {
        this.id = id || id_ser++;
        this.username = username;// 姓名
        this.displayname = displayname;// 登录名
        this.telphone = telphone;// （暂时无返回值）
        this.money = parseFloat(money) || 0;// 投资金额
        this.orderDate = orderDate;// 投资时间 XX日
        this.img = img;// 头像
        this.orderTime = orderTime;// 投资时间 HH:mm
    }

    Record.prototype.setId = function (id) {
        this.id = id;
    };
    Record.prototype.getId = function () {
        return this.id;
    };

    Record.prototype.setUsername = function (username) {
        this.username = username;
    };
    Record.prototype.getUsername = function () {
        return this.username;
    };

    Record.prototype.setDisplayname = function (displayname) {
        this.displayname = displayname;
    };
    Record.prototype.getDisplayname = function () {
        return this.displayname;
    };

    Record.prototype.setTelphone = function (telphone) {
        this.telphone = telphone;
    };
    Record.prototype.getTelphone = function () {
        return this.telphone;
    };

    Record.prototype.setMoney = function (money) {
        this.money = parseFloat(money) || 0;
    };
    Record.prototype.getMoney = function () {
        return this.money.toFixed(2);
    };

    Record.prototype.setOrderDate = function (orderDate) {
        this.orderDate = orderDate;
    };
    Record.prototype.getOrderDate = function () {
        return this.orderDate;
    };

    Record.prototype.setImg = function (img) {
        this.img = img;
    };
    Record.prototype.getImg = function () {
        return this.img;
    };

    return Record;
}));
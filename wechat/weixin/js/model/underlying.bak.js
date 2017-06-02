var Underlying = (function () {
  var U = function (id, bidName, saleDate, rate, isSellout, amount, buyedAmount, remainingAmount, introductionUrl, allocationUrl, buyNum, closed) {
    this.id = id; // 标的ID
    this.saleDate = saleDate; // 预售日期 yyyy-MM-dd HH:mm:ss
    this.rate = rate || 0.0; // 年化率
    this.isSellout = isSellout || false; // 是否售罄
    this.amount = amount || 0.0; // 总金额
    this.buyedAmount = buyedAmount || 0.0; // 当前标实际购买金额数
    this.remainingAmount = remainingAmount || 0.0; //当前标可以投入的总金额
    this.bidName = bidName || null; //项目名称 标的名称
    this.introductionUrl = introductionUrl || null; //项目介绍url
    this.allocationUrl = allocationUrl || null; //资金分配url
    this.buyNum = buyNum || 0; //购买人数
    this.closed = closed || false; //封闭期
  };

  U.prototype = {
    getIntroductionUrl: function () {
      return introductionUrl;
    },
    setIntroductionUrl: function (introductionUrl) {
      this.introductionUrl = introductionUrl;
    },
    getAllocationUrl: function () {
      return allocationUrl;
    },
    setAllocationUrl: function (allocationUrl) {
      this.allocationUrl = allocationUrl;
    },
    getAmount: function () {
      return amount.toFixed(2);
    },
    setAmount: function (amount) {
      this.amount = amount;
    },
    getBuyNum: function () {
      return buyNum;
    },
    setBuyNum: function (buyNum) {
      this.buyNum = buyNum;
    },
    getSaleDate: function () {
      return saleDate;
    },
    setSaleDate: function (saleDate) {
      this.saleDate = saleDate;
    },
    getRate: function () {
      return rate;
    },
    setRate: function (rate) {
      this.rate = rate;
    },
    getIsSellout: function () {
      return isSellout;
    },
    setIsSellout: function (isSellout) {
      this.isSellout = isSellout;
    },
    getBuyedAmount: function () {
      return buyedAmount;
    },
    setBuyedAmount: function (buyedAmount) {
      this.buyedAmount = buyedAmount;
    },
    getRemainingAmount: function () {
      return remainingAmount;
    },
    setRemainingAmount: function (remainingAmount) {
      this.remainingAmount = remainingAmount;
    },
    getBidId: function () {
      return bidId;
    },
    setBidId: function (bidId) {
      this.bidId = bidId;
    },
    getBidName: function () {
      return bidName;
    },
    setBidName: function (bidName) {
      this.bidName = bidName;
    },
    getClosed: function () {
      return closed;
    },
    setClosed: function (closed) {
      this.closed = closed;
    }

  };
  return U;
}());
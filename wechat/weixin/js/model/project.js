(function (factory) {
    if (typeof define === 'function' && define.amd) {
        /**
         * @module {Project} Project
         */
        define('Project', [], function () {
            return factory();
        });
    } else {
        factory();
    }
}(function () {
    'use strict';

    /**
     * @constructor {Project} Project
     */
    function Project(latestEarn, totalRepay, maxYearRate/*, endDate*/, predictMatchDate, predictAccrualDate, predictDoneDate, matchedNum, book,
        matchedDate, interestDate, endDateStr, sumRepayment, investMoney, principalAndInterest, subsidymoney, matchdate,
        uncollected, bidTime, isHolding, holdingdays, days, currentPeriod, repaymentResult, sumInterest, subSidy, zxsmed, waitingzxsm,
        wpaig, wpai, waitSubSidy, waitingGotMoney, sumGotMoney) {
        this.latestEarn = parseFloat(latestEarn) || 0.00; // 最新收益
        this.totalRepay = parseFloat(totalRepay) || 0.00; // 总回款金额
        this.maxYearRate = maxYearRate;
        //this.endDate = endDate;
        this.matchs = []; // 匹配记录
        this.repaymentList = []; // 回款计划list
        this.book = book;// 返回值

        // 添加
        this.predictMatchDate = predictMatchDate;// 预计撮合时间
        this.predictAccrualDate = predictAccrualDate;// 预计计息时间
        this.predictDoneDate = predictDoneDate;// 预计结算时间
        this.matchedNum = matchedNum;// 匹配记录总数

        // 回款 字段
        this.matchedDate = matchedDate;// 匹配时间
        this.interestDate = interestDate;// 起息时间
        this.endDateStr = endDateStr;// 本息结算时间
        this.sumRepayment = parseFloat(sumRepayment) || 0.00; // 回款总金额
        this.investMoney = parseFloat(investMoney) || 0.00; // 在投金额 (持有本金)
        this.principalAndInterest = parseFloat(principalAndInterest) || 0.00;// 本息
        this.subsidymoney = parseFloat(subsidymoney) || 0.00; // 贴息金额
        this.matchdate = matchdate; // 匹配时间
        this.uncollected = uncollected; // 待收金额
        this.bidTime = bidTime; // 投资期限
        this.isHolding = isHolding;// 是否持有中
        this.holdingdays = holdingdays;// 理财累计用时（天）
        this.days = days;// 距离本息结算
        this.currentPeriod = currentPeriod;// 当前已还期数
        this.repaymentResult = repaymentResult;// 回款结果
        this.sumInterest = sumInterest;// 累计投资收益


        // 0523 回款详情 - 添加字段
        this.zxsmed = zxsmed;// 已收利差补偿
        this.waitingzxsm = waitingzxsm;// 待收利差补偿
        this.wpaig = wpaig;// 已收本息
        this.wpai = wpai;// 未收本息
        this.subSidy = subSidy;// 已收补贴
        this.waitSubSidy = waitSubSidy;// 待收贴息
        this.waitingGotMoney = waitingGotMoney;// 待收金额
        this.sumGotMoney = sumGotMoney;// 已收金额

    }

    /*
    * 0523 回款详情 - 添加字段 start
    * */
    Project.prototype.setZxsmed = function (zxsmed) {
      this.zxsmed = zxsmed;
    };
    Project.prototype.getZxsmed = function () {
      return this.zxsmed;
    };

    Project.prototype.setWaitingzxsm = function (waitingzxsm) {
      this.waitingzxsm = waitingzxsm;
    };
    Project.prototype.getWaitingzxsm = function () {
      return this.waitingzxsm;
    };

    Project.prototype.setWpaig = function (wpaig) {
      this.wpaig = wpaig;
    };
    Project.prototype.getWpaig = function () {
      return this.wpaig;
    };

    Project.prototype.setWpai = function (wpai) {
      this.wpai = wpai;
    };
    Project.prototype.getWpai = function () {
      return this.wpai;
    };

    Project.prototype.setWaitSubSidy = function (waitSubSidy) {
      this.waitSubSidy = waitSubSidy;
    };
    Project.prototype.getWaitSubSidy = function () {
      return this.waitSubSidy;
    };

    Project.prototype.setWaitingGotMoney = function (waitingGotMoney) {
      this.waitingGotMoney = waitingGotMoney;
    };
    Project.prototype.getWaitingGotMoney = function () {
      return this.waitingGotMoney;
    };

    Project.prototype.setSumGotMoney = function (sumGotMoney) {
      this.sumGotMoney = sumGotMoney;
    };
    Project.prototype.getSumGotMoney = function () {
      return this.sumGotMoney;
    };

  /*
   * 0523 回款详情 - 添加字段 end
   * */

    Project.prototype.setBook = function (book) {
        this.book = book;
    };
    Project.prototype.getBook = function () {
        return this.book;
    };

    Project.prototype.setLatestEarn = function (latestEarn) {
        this.latestEarn = parseFloat(latestEarn) || 0.00;
    };
    Project.prototype.getLatestEarn = function () {
        return this.latestEarn.toFixed(2);
    };

    Project.prototype.setTotalRepay = function (totalRepay) {
        this.totalRepay = parseFloat(totalRepay) || 0.00;
    };
    Project.prototype.getTotalRepay = function () {
        return this.totalRepay.toFixed(2);
    };

    Project.prototype.setMaxYearRate = function (maxYearRate) {
        this.maxYearRate = maxYearRate;
    };
    Project.prototype.getMaxYearRate = function (maxYearRate) {
        return this.maxYearRate;
    };

    Project.prototype.setMatchs = function (matchs) {
        this.matchs = matchs;
    };
    Project.prototype.getMatchs = function () {
        return this.matchs;
    };

    Project.prototype.setRepaymentList = function (repaymentList) {
        this.repaymentList = repaymentList;
    };
    Project.prototype.getRepaymentList = function () {
        return this.repaymentList;
    };

    /*新增
    * 计划详情部分
    * */
    Project.prototype.setPredictMatchDate = function (predictMatchDate) {
        this.predictMatchDate = predictMatchDate;
    };
    Project.prototype.getPredictMatchDate = function () {
        return this.predictMatchDate;
    };

    Project.prototype.setPredictAccrualDate = function (predictAccrualDate) {
        this.predictAccrualDate = predictAccrualDate;
    };
    Project.prototype.getPredictAccrualDate = function () {
        return this.predictAccrualDate;
    };

    Project.prototype.setPredictDoneDate = function (predictDoneDate) {
        this.predictDoneDate = predictDoneDate || 0;
    };
    Project.prototype.getPredictDoneDate = function () {
        return this.predictDoneDate;
    };

    Project.prototype.setMatchedNum = function (matchedNum) {
        this.matchedNum = matchedNum;
    };
    Project.prototype.getMatchedNum = function () {
        return this.matchedNum;
    };

    // 回款部分
    Project.prototype.setMatchedDate = function (matchedDate) {
        this.matchedDate = matchedDate;
    };
    Project.prototype.getMatchedDate = function () {
        return this.matchedDate;
    };

    Project.prototype.setInterestDate = function (interestDate) {
        this.interestDate = interestDate || 0;
    };
    Project.prototype.getInterestDate = function () {
        return this.interestDate;
    };

    Project.prototype.setEndDateStr = function (endDateStr) {
        this.endDateStr = endDateStr;
    };
    Project.prototype.getEndDateStr = function () {
        return this.endDateStr;
    };

    Project.prototype.setSumRepayment = function (sumRepayment) {
        this.sumRepayment = sumRepayment;
    };
    Project.prototype.getSumRepayment = function () {
        return this.sumRepayment;
    };

    Project.prototype.setPrincipalAndInterest = function (principalAndInterest) {
        this.principalAndInterest = principalAndInterest || 0;
    };
    Project.prototype.getPrincipalAndInterest = function () {
        return this.principalAndInterest;
    };

    Project.prototype.setSubSidy = function (subSidy) {
        this.subSidy = subSidy;
    };
    Project.prototype.getSubSidy = function () {
        return this.subSidy;
    };

    Project.prototype.setSumInterest = function (sumInterest) {
        this.sumInterest = sumInterest;
    };
    Project.prototype.getSumInterest = function () {
        return this.sumInterest;
    };

    Project.prototype.setRepaymentResult = function (repaymentResult) {
        this.repaymentResult = repaymentResult || 0;
    };
    Project.prototype.getRepaymentResult = function () {
        return this.repaymentResult;
    };

    Project.prototype.setCurrentPeriod = function (currentPeriod) {
        this.currentPeriod = currentPeriod;
    };
    Project.prototype.getCurrentPeriod = function () {
        return this.currentPeriod;
    };

    Project.prototype.setDays = function (days) {
        this.days = days;
    };
    Project.prototype.getDays = function () {
        return this.days;
    };

    Project.prototype.setHoldingdays = function (holdingdays) {
        this.holdingdays = holdingdays || 0;
    };
    Project.prototype.getHoldingdays = function () {
        return this.holdingdays;
    };

    Project.prototype.setIsHolding = function (isHolding) {
        this.isHolding = isHolding;
    };
    Project.prototype.getIsHolding = function () {
        return this.isHolding;
    };

    Project.prototype.setSubsidymoney = function (subsidymoney) {
        this.subsidymoney = subsidymoney;
    };
    Project.prototype.getSubsidymoney = function () {
        return this.subsidymoney;
    };

    Project.prototype.setInvestMoney = function (investMoney) {
        this.investMoney = investMoney;
    };
    Project.prototype.getInvestMoney = function () {
        return this.investMoney;
    };

    /**
     * 匹配记录
     */
    function Match(bidId, orderId, loanType, sumEarn, bidTitle, yearRate, repaymentType,
        sumRepayment, investMoney, loanDate, subsidymoney, matchdate, matchdateStr, bidTime,
        lockperiod, lockperiodStr, money, unmatched, matched, thawched,
        isCreateRepayplan, planSumRepayment, planPrincipal, planInterest, repaymentResult) {
        this.bidId = bidId; // 标的id
        this.orderId = orderId; // 订单id
        this.loanType = loanType; // 借款类型
        this.sumEarn = parseFloat(sumEarn) || 0.00; // 累计收益
        this.bidTitle = bidTitle; // 标的标题
        this.yearRate = yearRate; // 年利率
        this.repaymentType = repaymentType; // 还款方式
        this.sumRepayment = parseFloat(sumRepayment) || 0.00; // 回款总金额
        this.investMoney = parseFloat(investMoney) || 0.00; // 在投金额

        this.loanDate = loanDate; // 起息时间
        this.subsidymoney = parseFloat(subsidymoney) || 0.00; // 贴息金额
        this.matchdate = matchdate; // 匹配时间
        this.uncollected = matchdateStr; // 待收金额
        this.bidTime = bidTime; // 投资期限

        // 添加
        this.lockperiod = lockperiod; // 锁定期
        this.lockperiodStr = lockperiodStr; // 锁定期汉字
        this.money = money; // 预约金额
        this.unmatched = unmatched || 0; // 未匹配金额
        this.matched = matched || 0; // 已匹配金额
        this.thawched = thawched; // 解冻金额
        this.isCreateRepayplan = isCreateRepayplan; // 是否已生成回款计划
        this.planSumRepayment = planSumRepayment; // 应回款总额
        this.planPrincipal = planPrincipal; // 应回款本金
        this.planInterest = planInterest; // 应回款利息
        this.repaymentResult = repaymentResult; // 回款结果
    }

    Match.prototype = {
        setBidTime: function (bidTime) {
            this.bidTime = bidTime;
        },
        getBidTime: function () {
            return this.bidTime;
        },
        setUncollected: function (uncollected) {
            this.uncollected = uncollected;
        },
        getUncollected: function () {
            return this.uncollected;
        },
        setMatchDate: function (matchdate) {
            this.matchdate = matchdate;
        },
        getMatchDate: function () {
            return this.matchdate;
        },
        setSubsidyMoney: function (subsidymoney) {
            this.subsidymoney = parseFloat(subsidymoney) || 0.00;
        },
        getSubsidyMoney: function () {
            return this.subsidymoney;
        },
        setLoanDate: function (loanDate) {
            this.loanDate = loanDate;
        },
        getLoanDate: function () {
            return this.loanDate;
        },
        setBidId: function (bidId) {
            this.bidId = bidId;
        },
        getBidId: function () {
            return this.bidId;
        },
        setOrderId: function (orderId) {
            this.orderId = orderId;
        },
        getOrderId: function () {
            return this.orderId;
        },
        setLoanType: function (loanType) {
            this.loanType = loanType;
        },
        getLoanType: function () {
            return this.loanType;
        },
        setSumEarn: function (sumEarn) {
            this.sumEarn = parseFloat(sumEarn) || 0.00;
        },
        getSumEarn: function () {
            return this.sumEarn.toFixed(2);
        },
        setBidTitle: function (bidTitle) {
            this.bidTitle = bidTitle;
        },
        getBidTitle: function () {
            return this.bidTitle;
        },
        setYearRate: function (yearRate) {
            this.yearRate = yearRate;
        },
        getYearRate: function () {
            return this.yearRate;
        },
        setRepaymentType: function (repaymentType) {
            this.repaymentType = repaymentType;
        },
        getRepaymentType: function () {
            return this.repaymentType;
        },
        setSumRepayment: function (sumRepayment) {
            this.sumRepayment = parseFloat(sumRepayment) || 0.00;
        },
        getSumRepayment: function () {
            return this.sumRepayment.toFixed(2);
        },
        setInvestMoney: function (investMoney) {
            this.investMoney = parseFloat(investMoney) || 0.00;
        },
        getInvestMoney: function () {
            return this.investMoney.toFixed(2);
        },
        // 添加
        setLockperiod: function (lockperiod) {
            this.lockperiod = lockperiod;
        },
        getLockperiod: function () {
            return this.lockperiod;
        },
        setLockperiodStr: function (lockperiodStr) {
            this.lockperiodStr = lockperiodStr;
        },
        getLockperiodStr: function () {
            return this.lockperiodStr;
        },
        setMoney: function (money) {
            this.money = parseFloat(money) || 0.00;
        },
        getMoney: function () {
            return this.money.toFixed(2);
        },
        setUnmatched: function (unmatched) {
            this.unmatched = parseFloat(unmatched) || 0.00;
        },
        getUnmatched: function () {
            return this.unmatched.toFixed(2);
        },
        setMatched: function (matched) {
            this.matched = parseFloat(matched) || 0.00;
        },
        getMatched: function () {
            return this.matched.toFixed(2);
        },
        setThawched: function (thawched) {
            this.thawched = parseFloat(thawched) || 0.00;
        },
        getThawched: function () {
            return this.thawched.toFixed(2);
        },
        setIsCreateRepayplan: function (isCreateRepayplan) {
            this.isCreateRepayplan = isCreateRepayplan;
        },
        getIsCreateRepayplan: function () {
            return this.isCreateRepayplan;
        },
        setPlanSumRepayment: function (planSumRepayment) {
            this.planSumRepayment = parseFloat(planSumRepayment) || 0.00;
        },
        getPlanSumRepayment: function () {
            return this.planSumRepayment;
        },
        setPlanPrincipal: function (planPrincipal) {
            this.planPrincipal = parseFloat(planPrincipal) || 0.00;
        },
        getPlanPrincipal: function () {
            return this.planPrincipal;
        },
        setPlanInterest: function (planInterest) {
            this.planInterest = parseFloat(planInterest) || 0.00;
        },
        getPlanInterest: function () {
            return this.planInterest;
        },
        setRepaymentResult: function (repaymentResult) {
            this.repaymentResult = repaymentResult;
        },
        getRepaymentResult: function () {
            return this.repaymentResult;
        }
    };

    function Repayment(principal, interest, repaymentstatus, repaymentDate, period, repaymentsum, investMoney) {
        this.principal = parseFloat(principal) || 0.00; // 回款本金
        this.interest = parseFloat(interest) || 0.00; // 回款利息
        this.repaymentstatus = repaymentstatus; // 回款状态 1:已还 2未还，3，还款失败
        this.repaymentDate = repaymentDate; // 还款时间
        this.period = period; // 还款期数
        this.repaymentsum = parseFloat(repaymentsum) || 0.00; // 总回款金额
        this.investMoney = parseFloat(investMoney) || 0.00; // 持有金额
    }

    Repayment.prototype = {
        setPrincipal: function (principal) {
            this.principal = parseFloat(principal) || 0.00;
        },
        getPrincipal: function () {
            return this.principal.toFixed(2);
        },
        setInterest: function (interest) {
            this.interest = parseFloat(interest) || 0.00;
        },
        getInterest: function () {
            return this.interest.toFixed(2);
        },
        setRepaymentstatus: function (repaymentstatus) {
            this.repaymentstatus = repaymentstatus;
        },
        getRepaymentstatus: function (repaymentstatus) {
            return this.repaymentstatus;
        },
        setRepaymentDate: function (repaymentDate) {
            this.repaymentDate = repaymentDate;
        },
        getRepaymentDate: function () {
            return this.repaymentDate;
        },
        setPeriod: function (period) {
            this.period = period;
        },
        getPeriod: function () {
            return this.period;
        },
        setInvestMoney: function (investMoney) {
            this.investMoney = parseFloat(investMoney) || 0.00;
        },
        getInvestMoney: function () {
            return this.investMoney.toFixed(2);
        },
        setRepaymentSum: function (repaymentsum) {
            this.repaymentsum = parseFloat(repaymentsum) || 0.00;
        },
        getRepaymentSum: function () {
            return this.repaymentsum.toFixed(2);
        }
    };

    Project.Repayment = Repayment;
    Project.Match = Match;
    return Project;
}));
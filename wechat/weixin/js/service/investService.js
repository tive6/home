(function(factory) {
    if (typeof define === 'function' && define.amd) {
        /**
         * @module {InvestService} investService
         */
        define('investService', [
            'jquery', 'config', 'util', 'Result', 'Underlying', 'Record', 'Fuiou', 'Overview', 'Booking', 'Project', 'Bank'
        ], factory);
    } else {
        window.investService = factory();
    }
}(function($, config, util, Result, Underlying, Record, Fuiou, Overview, Booking, Project, Bank) {
    'use strict';
    var INSTANCE = null;

    /**
     * 构造器
     * @constructor {InvestService} InvestService
     */
    function InvestService() {}
    /**
     * 发送支付码
     */
    InvestService.prototype.getPayCode = function(opts, succCallback, errCallback) {
        // console.log(opts);
        var result = new Result();
        $.ajax({
            url: config.SERVICE_URL + config.SERVICE_URI_MAP.SEND_RAND_CODE,
            data: util.JSONStringify(opts)
        }).then(function(res) {
            console.log(res);
            var _status = res.data.status;
            if (_status == '1') {
                result.setStatus(true);
            } else if (_status == '0') {
                result.setStatus(false);
            }
            executeSuccCallback(result, succCallback);
        }, function() {
            handleError(result, errCallback);
        });
    };

    /**
     * 根据锁定期 加载利率
     */
    InvestService.prototype.loadRateByPeriod = function(opts, succCallback, errCallback) {
        // console.log(opts);
        var result = new Result();
        $.ajax({
            url: config.SERVICE_URL + config.SERVICE_URI_MAP.LOAD_YEAR_RATE_BY_PERIOD,
            data: util.JSONStringify(opts)
        }).then(function(res) {
            console.log(res);
            var _status = res.data.status;
            result.setMsg(res.data.msg);
            result.setData(res.data.rate || '0.0')
            if (_status == '1') {
                result.setStatus(true);
            } else if (_status == '0') {
                result.setStatus(false);
            }
            executeSuccCallback(result, succCallback);
        }, function() {
            handleError(result, errCallback);
        });
    };

    /**
     * 是否预约过
     */
    InvestService.prototype.isHaveBooked = function(token, succCallback, errCallback) {
        var result = new Result(),
            data = {
                token: token
            };
        $.ajax({
            url: config.SERVICE_URL + config.SERVICE_URI_MAP.IS_HAVE_BOOKED,
            data: util.JSONStringify(data)
        }).then(function(res) {
            console.log(res);
            var _status = res.data.status;
            result.setMsg(res.data.msg);
            result.setData(false);
            if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
                result.setStatus(_status);
            } else if ('1' === _status) {
                result.setStatus(true);
                if (res.data.isHaveBook === 'Y') {
                    result.setData(true);
                }
            } else if ('0' === _status) {
                result.setStatus(false);
            }

            executeSuccCallback(result, succCallback);
        }, function() {
            handleError(result, errCallback);
        });
    };


    /**
     * 加载银行卡
     */
    InvestService.prototype.getBankCard = function(token, succCallback, errCallback) {
        var result = new Result(),
            data = {
                token: token
            },
            bank = null;
        $.ajax({
            url: config.SERVICE_URL + config.SERVICE_URI_MAP.LOAD_BANK_CARD,
            data: util.JSONStringify(data)
        }).then(function(res) {
            console.log(res);
            var _status = res.data.status;
            result.setMsg(res.data.msg);
            if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
                result.setStatus(_status);
            } else if ('1' === _status) {
                bank = new Bank();
                bank.setNumber(res.data.bankcardnum);
                bank.setCode(res.data.bankname);
                bank.setName(res.data.banknameStr);
                result.setStatus(true);
                result.setData(bank);
            } else if ('0' === _status) {
                result.setStatus(false);
            }

            executeSuccCallback(result, succCallback);
        }, function() {
            handleError(result, errCallback);
        });
    };

    /**
     * 解冻未匹配金额
     */
    InvestService.prototype.unfreeze = function(options, succCallback, errCallback) {
        var result = new Result();
        $.ajax({
            url: config.SERVICE_URL + config.SERVICE_URI_MAP.UNFREEZE,
            data: util.JSONStringify(options)
        }).then(function(res, status, xhr) {
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
        }, function(xhr, status, error) {
            handleError(result, errCallback);
        });
    };

    /*查看合同*/

    InvestService.prototype.contract = function(options, succCallback, errCallback){
        var result = new Result();
        $.ajax({
            url: config.SERVICE_URL + config.SERVICE_URI_MAP.CONTRACT,
            data: util.JSONStringify(options)
        }).then(function(res,status,xhr){
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
        }, function(xhr, status, error) {
            handleError(result, errCallback);

        })
    };

    /**
     * 智享计划  计划详情  还款计划
     * LOAD_INVEST_DETAIL
     */
    InvestService.prototype.repayPlan = function(options, succCallback, errCallback) {
        var result = new Result();
        $.ajax({
            url: config.SERVICE_URL + config.SERVICE_URI_MAP.REPAY_PLAN,
            data: util.JSONStringify(options)
        }).then(function(res, status, xhr) {
            console.log(res);
            var _status = res.data.status;
            result.setMsg(res.data.msg);
            if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
                result.setStatus(_status);
            } else if ('1' === _status) {
                result.setStatus(true);
                result.setData(mapProject(res.data));
            } else if ('0' === _status) {
                result.setStatus(false);
            }

            executeSuccCallback(result, succCallback);
        }, function(xhr, status, error) {
            handleError(result, errCallback);
        });
    };

    /**
     * 智享计划  计划详情
     * LOAD_INVEST_DETAIL
     */
    InvestService.prototype.getInvestDetail = function(options, succCallback, errCallback) {
        var result = new Result();
        $.ajax({
            url: config.SERVICE_URL + config.SERVICE_URI_MAP.LOAD_INVEST_DETAIL,
            data: util.JSONStringify(options)
        }).then(function(res, status, xhr) {
            console.log(res);
            console.log(res.data);
            console.log(res.data.book);
            var _status = res.data.status;
            result.setMsg(res.data.msg);
            if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
                result.setStatus(_status);
            } else if ('1' === _status) {
                result.setStatus(true);
                result.setData(mapProject(res.data));
            } else if ('0' === _status) {
                result.setStatus(false);
            }

            executeSuccCallback(result, succCallback);
        }, function(xhr, status, error) {
            handleError(result, errCallback);
        });
    };

    function mapProject(data) {
        var matchs = [],
            books = null,
            book = [],
            repaymentList = [],
            project = new Project(),
            maxRate = 0,
            totalRepay = 0,
            latestEarn = data.latestEarn || 0,
            match, repay;

        $.each(data.matchs, function(index, item) {
            maxRate = item.yearRate > maxRate ? item.yearRate : maxRate;
            match = new Project.Match();
            match.setBidId(item.bidId);
            match.setOrderId(item.orderId);
            match.setBidTitle(item.bidTitle);
            match.setInvestMoney(item.investMoney);
            match.setLoanType(item.loanType);
            match.setRepaymentType(item.repaymentType);
            match.setSumEarn(item.sumEarn);
            match.setSumRepayment(item.sumRepayment);
            match.setYearRate(item.yearRate);

            match.setBidTime(item.bidTime);
            match.setUncollected(item.uncollected);
            match.setMatchDate(item.matchdateStr);
            match.setSubsidyMoney(item.subsidymoney);
            match.setLoanDate(item.loanDateStr);

            match.setIsCreateRepayplan(item.isCreateRepayplan);
            match.setPlanSumRepayment(item.planSumRepayment);
            match.setPlanPrincipal(item.planPrincipal);
            match.setPlanInterest(item.planInterest);
            match.setRepaymentResult(item.repaymentResult);//汇款结果

            matchs.push(match);
        });

        $.each(data.repayments, function(index, item) {
            totalRepay += (item.principal + item.interest);
            repay = new Project.Repayment();
            repay.setPrincipal(item.principal);
            repay.setInterest(item.interest);
            repay.setRepaymentstatus(item.repaymentstatus);
            repay.setRepaymentDate(item.repaymentDateStr);
            repay.setPeriod(item.period);
            repay.setRepaymentSum(item.repaymentsum);
            repay.setInvestMoney(item.investMoney);
            repaymentList.push(repay);
        });
        /*$.each(data.book,function(index,item){
         books = new Project.Match();
         books.setBidId(item.bidId);
         books.setOrderId(item.orderId);
         books.setBidTitle(item.bidTitle);
         books.setInvestMoney(item.investMoney);
         books.setLoanType(item.loanType);
         books.setRepaymentType(item.repaymentType);
         books.setSumEarn(item.sumEarn);
         books.setSumRepayment(item.sumRepayment);
         books.setYearRate(item.yearRate);
         books.setBidTime(item.bidTime);
         books.setUncollected(item.uncollected);
         books.setMatchDate(item.matchdateStr);
         books.setSubsidyMoney(item.subsidymoney);
         books.setLoanDate(item.loanDateStr);
         // 添加
         books.setLockperiod(item.lockperiod);
         books.setLockperiodStr(item.lockperiodStr);
         books.setMoney(item.money);
         books.setUnmatched(item.unmatched);
         books.setMatched(item.matched);
         books.setThawched(item.thawched);
         books.setIsCreateRepayplan(item.isCreateRepayplan);
         books.setPlanSumRepayment(item.planSumRepayment);
         books.setPlanPrincipal(item.planPrincipal);
         books.setPlanInterest(item.planInterest);
         book.push(books);
         //return books;
         });*/
        project.setMatchs(matchs);
        project.setRepaymentList(repaymentList);
        project.setLatestEarn(latestEarn);
        project.setTotalRepay(totalRepay);
        project.setMaxYearRate(maxRate);
        /*添加*/
        project.setPredictMatchDate(data.predictMatchDate);//预计撮合时间
        project.setPredictAccrualDate(data.predictAccrualDate);//预计计息时间
        project.setPredictDoneDate(data.predictDoneDate);//预计结算时间
        project.setMatchedNum(data.matchedNum);//预计结算时间
        project.setBook(data.book);
        /*回款*/
        project.setMatchedDate(data.matchedDate);//
        project.setInterestDate(data.interestDate);//
        project.setEndDateStr(data.endDateStr);//
        project.setSumRepayment(data.sumRepayment);//
        project.setInvestMoney(data.investMoney);//
        project.setPrincipalAndInterest(data.principalAndInterest);//
        project.setSubsidymoney(data.subsidymoney);//
        project.setSumInterest(data.sumInterest);//
        project.setRepaymentResult(data.repaymentResult);//
        project.setCurrentPeriod(data.currentPeriod);//
        project.setDays(data.days);//
        project.setHoldingdays(data.holdingdays);//
        project.setIsHolding(data.isHolding);//
        project.zxsmed = data.zxsmed;
        project.waitingzxsm = data.waitingzxsm;
        project.principalAndInterestGot = data.principalAndInterestGot;
        project.waitingPrincipalAndInterest = data.waitingPrincipalAndInterest;
        project.subSidy = data.subSidy;
        project.waitSubSidy = data.waitSubSidy;
        project.waitingGotMoney = data.waitingGotMoney;
        project.sumGotMoney = data.sumGotMoney;

      // 0523 回款详情 - 添加字段
        project.setZxsmed(data.zxsmed);// 已收利差补偿
        project.setWaitingzxsm(data.waitingzxsm);// 待收利差补偿
        project.setWpaig(data.principalAndInterestGot);// 已收本息
        project.setWpai(data.waitingPrincipalAndInterest);// 未收本息
        project.setSubSidy(data.subSidy);// 已收补贴
        project.setWaitSubSidy(data.waitSubSidy);// 待收贴息
        project.setWaitingGotMoney(data.waitingGotMoney);// 待收金额
        project.setSumGotMoney(data.sumGotMoney);// 已收金额

        return project;
    }

    /**
     * 预约记录
     */
    InvestService.prototype.getBooklList = function(options, succCallback, errCallback) {
        var result = new Result(),
            ip = null;
        console.log(options);
        $.ajax({
            url: config.SERVICE_URL + config.SERVICE_URI_MAP.LOAD_INVEST_RECORD,
            data: util.JSONStringify(options)
        }).then(function(res, status, xhr) {
            console.log(res);
            var _status = res.data.status;
            result.setMsg(res.data.msg);
            if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
                result.setStatus(_status);
            } else if ('1' == _status) {
                result.setStatus(true);
                result.setData(mapBookList(res.data.data));
            } else if ('0' == _status) {
                result.setStatus(false);
            }

            executeSuccCallback(result, succCallback);
        }, function(xhr, status, error) {
            handleError(result, errCallback);
        });
    };

    function mapBookList(list) {
        var tmp = [],
            b = null;
        $.each(list, function(index, book) {
            b = new Booking();
            b.setBookid(book.id);
            b.setOrderdate(book.orderdateStr);
            b.setLockperiod(book.lockperiod);
            b.setLockperiodStr(book.lockperiodStr);
            b.setMoney(book.money);
            b.setUnmatched(book.unmatched);
            b.setMatched(book.matched);
            b.setThawched(book.thawched);
            b.setGroupByMothTag(book.groupByMothTag);
            b.setYearRate(book.yearRate);
            b.setOrderTimeStr(book.orderTimeStr);
            tmp.push(b);
        });

        return tmp;
    }

    /**
     * 预约总览
     */
    InvestService.prototype.getInvestPandect = function(token, succCallback, errCallback) {
        var result = new Result(),
            ip = null,
            data = {
                token: token
            };
        $.ajax({
            url: config.SERVICE_URL + config.SERVICE_URI_MAP.INVEST_PANDECT,
            data: util.JSONStringify(data)
        }).then(function(res, status, xhr) {
            console.log(res);
            console.log(res.data);
            var _status = res.data.status;
            result.setMsg(res.data.msg);
            if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
                result.setStatus(_status);
            } else if ('1' == _status) {
                ip = new Overview();
                ip.setAmountMoney(res.data.amountMoney);// 理财金额
                ip.setSubSidy(res.data.subSidy);// 累计贴息补偿
                ip.setEarningMoney(res.data.earningMoney);//
                ip.setSumEarnOfZX(res.data.sumEarnOfZX);// 累计投资收益
                ip.setMatchSum(res.data.matchSum);// 已匹配总额
                ip.setNuMatchSum(res.data.nuMatchSum);// 未匹配总额
                ip.setWaitSubSidy(res.data.waitSubSidy);// 待收贴息补偿
                ip.setLatestEarn(res.data.latestEarn);// 最新投资收益
                ip.setWaitEarnSum(res.data.waitEarnSum);// 待收投资收益
                ip.setSumMatchedBid(res.data.sumMatchedBid);// 已匹配标的（笔）
                result.setStatus(true);
                result.setData(ip);
            } else if ('0' == _status) {
                result.setStatus(false);
            }

            executeSuccCallback(result, succCallback);
        }, function(xhr, status, error) {
            handleError(result, errCallback);
        });
    };

    /**
     * 富有提交充值
     * @param {Fuiou} fuiou 富有接口参数信息
     */
    InvestService.prototype.recharge2Fuiou = function(fuiou, succCallback, errCallback) {
        var result = new Result();
        console.log(fuiou);
        var data = {
            amt: fuiou.getAmt(),
            back_notify_url: fuiou.getAmt(),
            login_id: fuiou.getLoginId(),
            mchnt_cd: fuiou.getMchntCd(),
            mchnt_txn_ssn: fuiou.getMchntTxnSsn(),
            page_notify_url: fuiou.getPageNotifyUrl(),
            signature: fuiou.getSignature()
        };
        $.ajax({
            url: config.SERVICE_URI_MAP.FOUIOU,
            data: data
        }).then(function(res, status, xhr) {
            console.log(res);
        }, function(xhr, status, error) {
            handleError(result, errCallback);
        });
    };

    /**
     * 充值
     */
    InvestService.prototype.rechargeOrWithdraw = function(options, succCallback, errCallback) {
        var result = new Result(),
            f = null;
        $.ajax({
            url: config.SERVICE_URL + config.SERVICE_URI_MAP.RECHARGE_OR_WITHDRAW,
            data: util.JSONStringify(options)
        }).then(function(res, status, xhr) {
            console.log(res);
            var _status = res.data.status;
            result.setMsg(res.data.msg);
            if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
                result.setStatus(_status);
            } else if ('1' === _status) {
                f = new Fuiou();
                f.setAmt(res.data.amt);
                f.setBackNotifyUrl(res.data.back_notify_url);
                f.setLoginId(res.data.login_id);
                f.setMchntCd(res.data.mchnt_cd);
                f.setMchntTxnSsn(res.data.mchnt_txn_ssn);
                f.setPageNotifyUrl(res.data.page_notify_url);
                f.setSignature(res.data.signature);
                console.log(f);
                result.setStatus(true);
                result.setData(f);
            } else if ('0' === _status) {
                result.setStatus(false);
            }

            executeSuccCallback(result, succCallback);
        }, function(xhr, status, error) {
            handleError(result, errCallback);
        });
    };

    /**
     * 投资
     */
    InvestService.prototype.invest = function(options, succCallback, errCallback) {
        var result = new Result();
        $.ajax({
            url: config.SERVICE_URL + config.SERVICE_URI_MAP.BUY,
            data: util.JSONStringify(options)
        }).then(function(res, status, xhr) {
            console.log(res);
            var _status = res.data.status;
            result.setMsg(res.data.msg);
            if (config.LOGIN_FAILURE_STATUS_CODE === _status) {
                result.setStatus(_status);
            } else if ('1' === _status) {
                result.setData({
                    lockperiod: res.data.lockperiod,
                    lockperiodStr: res.data.lockperiodStr,
                    money: res.data.money,
                    predictSuccDate: res.data.predictSuccDate,
                    rate: res.data.rate
                });
                result.setStatus(true);
            } else if ('0' === _status) {
                result.setStatus(false);
            }

            executeSuccCallback(result, succCallback);
        }, function(xhr, status, error) {
            handleError(result, errCallback);
        });
    };

    /**
     * 加载标的的总投资记录
     * @param {object} options 当前页和每页条数
     *            {
   *              currentPage: 0, // 当前页
   *              pageSize: 25 // 每页条数
   *            }
     */
    InvestService.prototype.getInvestList = function(options, succCallback, errCallback) {
        var result = new Result();
        $.ajax({
            url: config.SERVICE_URL + config.SERVICE_URI_MAP.INVEST_LIST,
            data: util.JSONStringify(options)
        }).then(function(res, status, xhr) {
            console.log(res);
            var _status = res.data.status;
            result.setMsg(res.data.msg);
            if ('1' === _status) {
                result.setStatus(true);
                result.setData(res.data.data);
            } else if ('0' === _status) {
                result.setStatus(false);
                result.setData(null);
            }

            executeSuccCallback(result, succCallback);
        }, function(xhr, status, error) {
            handleError(result, errCallback);
        });
    };

    function mapUnderlyingList(data) {
        var list = [],
            record = null;
        $.each(data, function(index, item) {
            record = new Record();
            record.setTelphone(item.loginname);
            record.setUsername(item.username);
            record.setDisplayname(item.Username2);
            record.setMoney(item.money);
            record.setOrderDate(item.orderdateStr);
            record.setImg(item.img);
            list.push(record);
        });
        return list;
    }

    /**
     * 首页加载标的信息
     * @return {Underlying} 标的信息
     */
    InvestService.prototype.getInvestInfo = function(succCallback, errCallback) {
        var result = new Result(),
            u = null;
        $.ajax({
            url: config.SERVICE_URL + config.SERVICE_URI_MAP.INVEST_INDEX
        }).then(function(res, status, xhr) {
            // console.log(res)
            var _status = res.data.status;
            result.setMsg(res.data.msg);
            result.setData(null);
            if ('1' === _status) {
                u = new Underlying();
                result.setStatus(true);
                u.setRate(res.data.rate);
                u.setBuyNum(res.data.buyNum);
                result.setData(u);
            } else if ('0' === _status) {
                result.setStatus(false);
            }

            executeSuccCallback(result, succCallback);
        }, function() {
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
        result.setMsg('系统错误请稍后重试。');
        result.setData(null);
        if (typeof callback === 'function') {
            callback(result);
        }
    }

    if (INSTANCE === null) {
        INSTANCE = new InvestService();
    }

    return INSTANCE;
}));
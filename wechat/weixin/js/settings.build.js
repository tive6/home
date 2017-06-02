(function (factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * 公共配置类
     * @module {config} config
     */
    define('config', ['jquery'], factory);
  } else {
    window.config = factory();
  }
}(function ($) {
  'use strict';
  var config = {
    // BASE_URL: 'http://192.168.13.220',
    // SERVICE_URL: 'http://192.168.13.220',
    BASE_URL: 'https://m.badoufax.com',
    SERVICE_URL: 'https://m.badoufax.com',
    // 后台返回静态资源域(最后 '/' 不可缺少)
    RES_PAGE_URL_RP_ORIGIN: 'https://www.badoufax.com/',
    AJAX_MIME: 'application/json;charset="UTF-8"',
    TEL_400: '400-168-8885',
    PAGE_SIZE: 7,
    // 开启 debug 模式，控制台打印输出日志
    DEBUG: true,

    LOGIN_COOKIE_NAME: 'BD_H5_INVEST_1471934911365',
    LOGIN_FAILURE_STATUS_CODE: '100',
    LOGIN_FAILURE_STATUS_TEXT: '您的账号有异常登陆行为，如非本人操作请尽快修改密码。',

    // 首尾处的空白正则
    LEADING_OR_TRAILING_BLANKS: /(^\s*)|(\s*$)/g,
    // 协议正则
    PROTOCOL_REG: /^https?:/,
    // 消息分割符正则
    MSG_SEPARATOR_REG: /\s*[：:]+\s*/,
    // 100的整数倍
    INTEGER_MULTIPLE_100: /^[1-9][0-9]*0{2}$/,

    // 手机号校验正则
    TEL_REG: /^1[34578][0-9]{9}$/,
    // 密码校验正则
    PASSWORD_REG: /^(?!([a-zA-Z]+|[0-9]+)$)[a-zA-Z0-9]{8,16}$/,
    // 验证码校验正则
    CODE_REG: /^[0-9]{4,6}$/,
    // 邀请码校验正则
    INVITE_CODE_REG: /^[a-zA-Z0-9]*$/,
    // 身份证(位数&字符校验)
    ID_CARD: /^[0-9]{15}(?:[0-9]{2}[0-9Xx])?$/,
    // 身份证号正则18位，次序为省（3位）市（3位）年（4位）月（2位）日（2位）顺序码（4位），末尾校验位可能为X
    ID_CARD_NUMBER_18: /^([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{4})([0-9]{2})([0-9]{2})([0-9]{3})([0-9Xx])$/,
    // 身份证号正则15位，次序为省（3位）市（3位）年（2位）月（2位）日（2位）顺序码（3位），皆为数字
    ID_CARD_NUMBER_15: /^([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{3})$/,
    // 身份证号省份代码
    PROVINCE_CODE: /^(?:11|12|13|14|15|21|22|23|31|32|33|34|35|36|37|41|42|43|44|45|46|50|51|52|53|54|61|62|63|64|65|71|81|82|91)$/,
    // 两位有效小数位数字校验正则
    TWO_DECIMAL_PLACES: /^[1-9][0-9]*(?:.[0-9]{1,2})?$/,
    // 不需要登录的页面正则
    LOGIN_INTERCEPTOR_EXCLUDE_REG: /(?:recharge_or_withdraw_result|index|login|register|help|reset-password|registration-agreement|fuioureg-aggrement|mondify-password)\.html$/,
    // 不需要登录的页面集合
    LOGIN_INTERCEPTOR_EXCLUDE: [
      'recharge_or_withdraw_result.html',
      'index.html',
      'registration-agreement.html',
      'fuioureg-aggrement.html',
      'login.html',
      'register.html',
      'help.html',
      'reset-password.html',
      'mondify-password.html'
    ],

    PAGE_URI_MAP: {
      HOME_PAGE: '/index.html', // 首页
      LOGIN_PAGE: '/login.html', // 登录
      INVEST_PAGE: '/invest-start.html', // 买入
      PAY_PAGE: '/pay.html', // 预约
      INVEST_SUCCESS:'/invest-sucess.html', // 预约成功
      CALCULATOR_PAGE:'/calculator.html', // 计算器
      SIGN:'/sign.html', // 安心签
      UNDERLYING_INFO_PAGE: '/underlying.html', // 智享计划
      REALNAME_AUTH_PAGE: '/realnameauth.html', // 实名认证
      OPEN_FUIOU_ACCOUNT: '/fuioureg.html', // 开通富友金账户
      REALNAME_AUTH_SUCC_PAGE:'/realname_auth_succ_page.html', // 实名认证结果页
      RECHARGE_PAGE: '/recharge.1.html', // 充值
      RISK_ASSESSMENT: '/risk-assessment.html', // 风险等级评测
      ACCOUNT_CENTER: '/account-center.html', // 账户中心
      FUIOU_FORM: '/fuiou-form.html', // 富友充值
      UNFREEZE_PAGE: '/unfreeze.html', // 解冻
      ZHIXIANG_PLAN_PAGE: '/zhixiang-plan.html', // 智享计划
      CREDITOR_TRANSFER_PAGE: '/assignment-creditorRights.html', // 债权转让列表
    },

    SERVICE_URI_MAP: {
      // FUIOU_WEB_REG: 'https://jzh-test.fuiou.com/jzh/reg.action', // 富友账户 开户
      FUIOU_RECHARGE: 'https://jzh.fuiou.com/app/500002.action', // 富友账户 充值
      FUIOU_WITHDRAW: 'https://jzh.fuiou.com/app/500003.action', // 富友账户 提现
      // FUIOU_RECHARGE: 'https://jzh-test.fuiou.com/jzh/app/500002.action', // 富友账户 充值
      // FUIOU_WITHDRAW: 'https://jzh-test.fuiou.com/jzh/app/500003.action', // 富友账户 提现
      FUIOU_WEB_REG_DATA: '/api/appUser/appWeixinFuiouCreateAccount.json', // 富友开户
      RESET_PASSWORD_REQ: '/api/appUser/resetPassWordReqData.json', // 重置富友（相关）密码
      LOAD_OLD_CUSTOMER_INFO: '/api/appUser/loadOldCustomerInfo.json', // 客户迁移   带出老客户数据  进行开户
      H5_URL: '/api/other/h5Url.json', // 各种

      WAIT_TAKE_RED_PACKET:'/api/appInvest/waitTakeRedPacket.json', // 点击控件加载 待领取 现金红包列表
      TAKE_RED_PACKET:'/api/appInvest/takeRedPacket.json', // 立即领取
      AVAILABLE_AWARD:'/api/appInvest/availableAward.json', // 买入时可用红包列表
      AVAILABLE_AWARD_LIST:'/api/appInvest/availableAwardList.json', // 我的奖励 可用红包列表
      USED_AWARD_LIST:'/api/appInvest/usedAwardList.json', // 我的奖励  已使用列表
      EN_USED_AWARD_LIST:'/api/appInvest/enUsedAwardList.json', // 我的奖励  失效列表
      IS_EXSIT_WAIT_TAKE_RED_PACKET:'/api/appInvest/isExsitWaitTakeRedPacket.json', // 是否有待领取红包
      
      CONTRACT: '/api/appCfca/downloadContract.json', // 查看合同
      CALCULATOR: "/api/appInvest/calculater.json", // 收益计算器
      SEND_VERIFICATION: "/api/appCfca/sendverification.json", // 发送授权码
      CHECK_VERIFICATION: "/api/appCfca/checkVerification.json", // 授权码校验
      LOAD_YEAR_RATE_BY_PERIOD: "/api/appInvest/loadYearRateByperiod.json", // 不同投资期限获得不同年化收益
      LOAD_IMAGE: "/api/appUser/loadImag.json", // 加载头像
      MODIFY_IMAGE: "/api/appUser/modifyImg4Wechat.json", // 修改头像
      LOAD_BANK_CARD: '/api/appUser/loadCard.json', // 加载银行卡
      IS_HAVE_BOOKED: '/api/appInvest/isHaveBook.json', // 是否有预约纪录
      LOGIN_BY_PASSWORD: '/api/appUser/loginPwd.json', // 密码登录
      LOGIN_BY_CODE: '/api/appUser/loginCode.json', // 验证码登录
      REGISTER: '/api/appUser/registered.json', // 注册
      CHANGE_PASSWORD: '/api/appUser/changeLoginPwd.json', // 修改密码
      INVEST_LIST: '/api/appInvest/investList.json', // 预约记录
      BUY: '/api/appInvest/buy.json', // 买入
      INVEST_INDEX: '/api/appInvest/investIndex.json', // 加载年利率及购买人数
      CAPITAL_LIST: '/api/appInvest/capitalList.json', // 资金流水
      MESSAGE_LIST: '/api/other/messageList.json', // 焦点
      LOAD_USER_AUTH_RESULT: '/api/appUser/loadUserAuthResult.json', // 我的
      SAVE_AUTH_RESULT: '/api/appUser/saveAuthResult.json', // 保存实名认证成功
      MY_ASSET: '/api/appUser/myAsset.json', // 我的资产

      // 债权转让
      TRANSFERS_LIST:'/api/appInvest/transfers.json', // 可转让
      TRANSFERINGS_LIST: '/api/appInvest/transferings.json', // 转让中
      TRANSFERDS_LIST: '/api/appInvest/transfereds.json', // 已转让

      MY_MESSAGE: '/api/appUser/myMessage.json', // 我的消息
      COMMUNIQUE_MESSAGE: "/api/appInvest/communiqueMessage.json", // 我的消息  官方消息
      MY_ASSETS_MESSAGE: "/api/appInvest/myAssetsMessage.json", // 我的消息  我的资产
      GET_NOTICE: "/api/appUser/getNotice.json", // 我的消息  智享预约
      GET_NOTICE_DETAIL: "/api/appUser/getNoticeDetail.json", // 我的消息  智享预约详情
      INVEST_NEWLIST: "/api/appInvest/investNewList.json", // 投资记录

      SUBMIT_FEEDBACK: '/api/feedback/submitFeedback.json', // 意见反馈
      AUTH: '/api/appUser/auth.json', // 实名认证(保存姓名、身份证号)
      LOAD_AUTH: '/api/appUser/loadAuth.json', // 加载姓名、身份证号
      HELP_CENTER: '/api/other/helpCenter.json', // 帮助中心
      SEND_RAND_CODE: '/api/other/sendRandCode.json', // 获取验证码
      RECHARGE_OR_WITHDRAW: '/api/appUser/rechargeOrWithdraw.json', // 充值提现
      TRANSFER_LIST: '/api/appInvest/transferList.json', // 列表（可转让、转让中、已转让） 在投收益 累计收益
      GET_FACTORAGE: '/api/appInvest/getFactorage.json', // 获取债转手续费
      TRANSFER: '/api/appInvest/transfer.json', // 立即转让
      INVEST_PANDECT: '/api/appInvest/investPandect.json', // 预约总览
      LOAD_INVEST_RECORD: '/api/appInvest/loadInvestRecord.json', // 预约记录
      UNFREEZE: '/api/appInvest/unfreeze.json', // 转出
      LOAD_INVEST_DETAIL: '/api/appInvest/loadInvestDetail.json', // 智享计划  计划详情
      REPAY_PLAN: '/api/appInvest/repayPlan.json', // 智享计划  计划详情 还款计划
      RISK_URL: '/api/appUser/riskUrl.json', // 风险等级评测
      LOTTERY: '/api/appUser/lottery.json', // 风险等级评测
      LOAD_PROVINCE: '/api/code/findAreaCodeSheng.json', // 获取省份列表
      LOAD_CITY: '/api/code/findAreaCodeShi.json', // 获取城市列表
      LOAD_BANK_CODE: '/api/code/findBankCode.json', // 获取支持银行列表
      MSG_READED: '/api/appUser/messReaded.json', // 我的消息 更新为已读
    },
    BROKEN_IMAGE: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABGUAAAGkCAIAAAAXBA+/AAAAGXRFWHRTb2' +
        'Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eH' +
        'BhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldG' +
        'EgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3ID' +
        'c5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPS' +
        'JodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdG' +
        'lvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bW' +
        'xuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dH' +
        'A6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD' +
        '0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaW' +
        'lkOjYxMDk3NTYzM0MzMjExRTZCNkRBOUE3NkJBMzYyQjA4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZG' +
        'lkOjYxMDk3NTY0M0MzMjExRTZCNkRBOUE3NkJBMzYyQjA4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0Um' +
        'VmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjEwOTc1NjEzQzMyMTFFNkI2REE5QTc2QkEzNjJCMDgiIHN0Um' +
        'VmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjEwOTc1NjIzQzMyMTFFNkI2REE5QTc2QkEzNjJCMDgiLz4gPC' +
        '9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz' +
        '5LxkwkAAAOwUlEQVR42uzdbVPaWAOA4QUNIC8SUMqLOv3/f6nfdqttd1eqoKAglees7ORhbNWgrQvmuj' +
        '44oOSFIzPMPUlOch8+fPgNAACA7+QNAQAAgF4CAADQSwAAAHoJAABALwEAAOglAAAAvQQAAKCXAAAA9B' +
        'IAAIBeAgAA0EsAAAB6CQAAAL0EAACglwAAAPQSAACAXgIAANBLAAAAegkAAEAvAQAA6CUAAAC9BAAAoJ' +
        'cAAAD0EgAAgF4CAABALwEAAOglAAAAvQQAAKCXAAAA9BIAAIBeAgAA0EsAAAB6CQAAQC8BAADoJQAAAL' +
        '0EAACglwAAANBLAAAAegkAAEAvAQAA6CUAAAC9BAAAoJcAAAD0EgAAgF4CAADQSwAAAHoJAABALwEAAK' +
        'CXAAAA9BIAAIBeAgAA0EsAAAB6CQAAQC8BAADoJQAAAL0EAACglwAAAPQSAACAXgIAANBLAAAA6CUAAA' +
        'C9BAAAoJcAAAD0EgAAgF4CAADQSwAAAHoJAABALwEAAOglAAAAvQQAAKCXAAAA9BIAAAB6CQAAQC8BAA' +
        'DoJQAAAL0EAACglwAAAPQSAACAXgIAANBLAAAAegkAAEAvAQAA6CUAAAC9BAAAgF4CAADQSwAAAHoJAA' +
        'BALwEAAOglAAAAvQQAAKCXAAAA9BIAAIBeAgAA0EsAAAB6CQAAAL0EAACglwAAAPQSAACAXgIAANBLAA' +
        'AAegkAAEAvAQAA6CUAAAC9BAAAoJcAAAD0EgAAgF4CAABALwEAAOglAAAAvQQAAKCXAAAA9BIAAIBeAg' +
        'AA0EsAAAB6CQAAQC8BAADoJQAAAL0EAACglwAAANBLAAAAegkAAEAvAQAA6CUAAAC9BAAAoJcAAAD0Eg' +
        'AAgF4CAADQSwAAAHoJAABALwEAAOglQwAAAKCXAAAA9BIAAIBeAgAA0EsAAAB6CQAAQC8BAADoJQAAAL' +
        '0EAACglwAAAPQSAACAXgIAAEAvAQAA6CUAAAC9BAAAoJcAAAD0EgAAgF4CAADQSwAAAHoJAABALwEAAO' +
        'glAAAAvQQAAKCXAAAA0EsAAAB6CQAAQC8BAADoJQAAAL0EAACglwAAAPQSAACAXgIAANBLAAAAegkAAE' +
        'AvAQAA6CUAAAD0EgAAgF4CAADQSwAAAHoJAABALwEAAPzHtg0BQMbV6/VarVYqlXK5XMaH4vb29vr6ej' +
        'AYXF5e+mAAoJcAMm1ra6vX64VSMhQL+Xy+fGc0Gn358iXkkzEByPpXgyEAyKZcLndwcCCWfqhSqXS7Xe' +
        'MAgF4CyKhms1ksFo3DQ8rlcr1eNw4AGed8PIAsyuVycRwnT+fz+XA4nEwmGR+WEJDLjdRoNAaDgU8LgF' +
        '4CIFt2dnby+f+fYtDv98/OzgzLIh2TkoyiqFAoTKdTwwKQWc7HA8iikAHLTx1FSQyHw0cGCgC9BMDbtz' +
        'x1+Gw2MxFc4t7RJHOsA+glAOBf8/ncIACglwAAAPQSAACAXgIAANBLAAAAegkAAEAvAQAA6CUAAAC9BA' +
        'AAoJcAAAD0EgAAgF4CAADQSwAAAOglAAAAvQQAAKCXAAAA9BIAAIBeAgAA0EsAAAB6CQAAQC8BAABsuG' +
        '1DAMDLFQqFOI53dnbC48lkcnZ2Fn4aFgD0EgBZV61WO51OLpdL2in85q+//hoOhwYHgI3mfDwAXqRUKi' +
        '3H0kJ42m63QzUZHwD0EgAZtb293ev17sVSInRUuVw2SgDoJQAyJ2RSiKWtra1HXtDtdkulkrECQC8BkC' +
        '2dTqdYLD7xNZPPh6YqFAqGCwC9BEBW7O3tpbw8aWtr6+DgYHvbDEMA6CUAMqBWqzWbzfSvD7F0eHj4yJ' +
        'l7AKCXAHgLSqVSu91edakoinq9Xj7vewcAvQTAG7W9vd3tdh+aEO/J0Hr2sgCglwBYa4v57l5yJVK5XA' +
        '5rSP/6arXaarWazWYURcYfAL0EwPpqt9svnxy8UqmkOZ1vMUtEiKs4jvf29t6/fx8WfJ23+enTp9ls5t' +
        '8NQGC2IgBSaTabtVrtp6xqd3f327dvp6enD72gWCz2er3lA1mLQ1snJydXV1crbSt0186dQqEQVri4gO' +
        'r29jYU0XQ6vb6+Ho/HYWeWFxmNRr///nur1Qr76f8OoJcA4AnVanVvb+8nrrDRaIRKOTs7+/5PlUql0+' +
        'l8PzPE4va4x8fHk8kkzSbK5XIcx+HnD6+YCvkU/rR4HJJpMBhcXl4mfw1B9eeff6bcEAB6CYDsKhaLIW' +
        'B++mr39/fn8/n5+fnyL0PhtFqthxYJEXVwcPDx48ebm5tH1lwqlcJK0p86WL4znU5PT09Ho1Hy+7BvZq' +
        'cAyDjXLwHwmK2trV6v94uyIVTNu3fvFufdRVHU7XYfiaVkfw4PDx+acyLsZ1jD0dHRM66zKhQK4Z3eO7' +
        'QVis5nACDLHF8C4EGLU+BeMiHek+p3QpakT7KwPwcHB8fHx/euO1qk3QtnpKjVamENJycnjx/CAiAjHF' +
        '8C4EHv3r17+YR4KcNspdcXCoV7R6JCRB0eHv6UvY2i6OjoKGzCBwAAvQTAjzUajbWdIG4+ny/PFZHP53' +
        'u9XprCub6+Ho1GT55lt5jN/JceWANgI/gmAOAHKpXK/v7+2u7ecDhcnryu0+kUi8UnE+vz58+L6RyiKA' +
        'o59Pg9cEMshQb7+PGjS5gAsszxJQDuKxQKv2JCvJ8lBEy/30+e7u7uprmV7cXFRTL33c3NzfIaHhIarN' +
        'ls+jwA6CUA+Ndi1oTvb3+0PgaDQTLTQ9jblMfB7t1MaTqdplmq0Wg8fhgKAL0EQFbkcrlOp7PmhRB6KX' +
        'kcx3FIpjRLPe+0ujAgDjEB6CUA+Eer1SqXy+u8h5PJJDk0FGKmXq//6i3WajUTPwDoJQCyLo7jV8iPF0' +
        'quQfrtblKKlAeXXiJUWUgmHw8AvQRAdpXL5Xt3NFpP4/E4eVytVl9no6+2IQD0EgBrJ4qibre7Ebu6PG' +
        '3Dq506WCwW13kCDAD0EgC/Si6XW/MJ8RKz2ez29nbxeOvOqw1RmpvhAqCXAHhrQnVsSgyEXkoev/I+6y' +
        'UAvQQAay257dIi8165Ko0/gF4CgM2Qy+Xe8OYA0EsA8Pxoed79Z5/tlTcHgF4CgBW/tJYmpVg+Ny+NKI' +
        'qWn656C9pVNweAXgKAV7UcOTc3NystW6/XkzkbQnc1m82VFl91cwC8ka8eQwDABvVSSJ3FlOKz2ezbt2' +
        '/pp2EICx4dHV1cXMzn80qlcu9w05Om06nxB8ggx5cA2CTFYjF5fHV1tdp3Xj5fr9fjOF41liaTifPxAP' +
        'QSAKy7nZ2d5PFoNFpp2el02u/3//777/F4vNKCq24IAL0EAP+BSqWSPL68vFycm5fG9fX1H3/88fXr1/' +
        'Pz85OTk/Az/UaHw6GRB9BLALDuSqVScjZdiKXBYJBywX6/vzwn+L2njwhVZrIHAL0EQIZsdADU6/Xk8d' +
        'nZWcpDTPfeclgq5SVJX79+9YEB0EsAZMiqMyWsWy8l0+KF5un3+2mWWp4oIghrSHMLpvPz88lk4gMDoJ' +
        'cAyJCQGRcXF5v61ZXPNxqN5aRJk3/7+/tJIOVyuXa7/eQii/khfFoAssz9lwAy6vT0tFwup79/0VqJ43' +
        'g4HCb3RPr8+fPR0dHjs4SHv75//340Gs3n8/DGnzy4dHt7G1abfj4JAN4kx5cAMmo2m3369GlDbyu0OE' +
        'AUfi6ehndxcnIS3tET33n5fK1W293dTRNLYYXuUQuAXgLIrsUU2xcXFylnilsrpVJpf38/eXpzc3N8fP' +
        'xTCmdRX2FwfEIAyH348MEoAGRcPp+PomgTz827urpajr3wRtrtdrVaffYKx+Pxly9fNvSwGwA/neuXAP' +
        'jn9LO3MQvc4qKjSqXSarUev5zpe6GRTk9P3ZoWAL0EwFs2Go3G43G1Wo3juFQqPfn60IohkwaDwSaelw' +
        'iAXgKA1YTyubgTRVG5XN7Z2SkUCtvb2/l8fvHXmztXd9xhCQC9BEAWhSga3DEUADyD+fEAAAD0EgAAgF' +
        '4CAADQSwAAAHoJAABALwEAAOglAAAAvQQAAKCXAAAA9BIAAIBeAgAA0EsAAADoJQAAAL0EAACglwAAAP' +
        'QSAACAXgIAANBLAAAAegkAAEAvAQAA6CUAAAC9BAAAoJcAAAD0EgAAAHoJAABALwEAAOglAAAAvQQAAK' +
        'CXAAAA9BIAAIBeAgAA0EsAAAB6CQAAQC8BAADoJQAAAL0EAACAXgIAANBLAAAAegkAAEAvAQAA6CUAAA' +
        'C9BAAAoJcAAAD0EgAAgF4CAADQSwAAAHoJAAAAvQQAAKCXAAAA9BIAAIBeAgAA0EsAAAB6CQAAQC8BAA' +
        'DoJQAAAL0EAACglwAAAPQSAACAXgIAAEAvAQAA6CUAAAC9BAAAoJcAAAD0EgAAgF4CAADQSwAAAHoJAA' +
        'BALwEAAOglAAAAvQQAAKCXAAAA0EsAAAB6CQAAQC8BAADoJQAAAL0EAACglwAAAPQSAACAXgIAANBLAA' +
        'AAegkAAEAvAQAA6CUAAAD0EgAAgF4CAADQSwAAAHoJAABALwEAAOglAAAAvQQAAKCXAAAA9BIAAIBeAg' +
        'AA0EsAAADoJQAAAL0EAACglwAAAPQSAACAXgIAANBLAAAAegkAAEAvAQAA6CUAAAC9BAAAoJcAAAD0Eg' +
        'AAAHoJAABALwEAAOglAAAAvQQAAKCXAAAA9BIAAIBeAgAA0EsAAAB6CQAAQC8BAADoJQAAAL0EAACAXg' +
        'IAANBLAAAAegkAAEAvAQAA6CUAAAC9BAAAoJcAAAD0EgAAgF4CAADQSwAAAHoJAAAAvQQAAKCXAAAA9B' +
        'IAAIBeAgAA0EsAAAB6CQAAQC8BAADoJQAAAL0EAACglwAAAPQSAACAXgIAAEAvAQAA6CUAAAC9BAAAoJ' +
        'cAAAD0EgAAgF4CAADQSwAAAHoJAABALwEAAOglAAAAvQQAAKCXAAAA0EsAAAB6CQAAQC8BAADoJQAAAL' +
        '0EAACglwAAAPQSAACAXgIAANBLAAAAegkAAEAvAQAA6CUAAAD0EgAAgF4CAADQSwAAAHoJAABALwEAAP' +
        'zX/ifAAGP2lDm1mDJmAAAAAElFTkSuQmCC'

  };

  (function () {
    /** 全局设置 ajax 请求／响应数据格式为：application/json */
    $.ajaxSetup({global: false, type: "POST", contentType: config.AJAX_MIME, accepts: config.AJAX_MIME, dataType: 'json'});
  }());

  return config;
}));
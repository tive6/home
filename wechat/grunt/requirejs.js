module.exports = {
  compile: {
    options: {
      baseUrl: 'weixin/js',
      mainConfigFile: "./requirejs.r.conf/config.js",
      optimize: 'none',
      // optimizeCss: 'standard',
      // fileExclusionRegExp: /main\.js$/,
      // uglify2: {
      //   output: {
      //     beautify: false
      //   },
      //   compress: {
      //     sequences: true,
      //     global_defs: {
      //       DEBUG: false
      //     }
      //   },
      //   // warnings: true,
      //   mangle: true
      // },
      modules: [{
          name: 'wechat/app',
          exclude: [
            'jquery', 'jqueryForm', 'cookie', 'swiper', 'iScroll', 'Shake', 'ImagePicker', 'Transform', 'AlloyFinger', 'AlloyCrop', 'Chart'
          ]
        }, {
          name: 'wechat/activity',
          exclude: [
            'jquery', 'jqueryForm', 'cookie', 'swiper', 'iScroll', 'config', 'util', 'Result', 'userController', 'WebView', 'ImagePicker', 'Transform', 'AlloyFinger', 'AlloyCrop', 'Chart'
          ]
        },
        {
          name: 'wechat/vendor'
        }
      ],
      dir: './build/weixin/js'
    }
  }
};
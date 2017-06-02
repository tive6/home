/**
 * html 压缩配置
 */

var crypto = require('crypto');
// MD5版本号串
var _md5 = crypto.createHash('MD5').update((new Date()).toString()).digest('hex');
console.log(`\n把下面的字符串添加到/build/weixin/js/mian的配置中\nurlArgs:"v=${_md5}"\n`);

module.exports = {
  target: {
    options: { // Target options 
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: 'standed',

      minifyJS: true,
    },
    files: [{
      expand: true,
      cwd: '.',
      src: [
        '*.html', '!test.html', '!h5camera.html', './activity/**/*.html'
      ],
      dest: 'html',
    }]
  },
  replaceRequirejs: {
    options: {
      // 压缩js
      minifyJS: function(text, inline) {
        var pathsReg = /paths\s*:\s*\{[^\}]*\}/,
          // spacesTrim = /(^\s*)|(\s*$)/g,
          // sepReg = /\s*(,|:|=)\s*/g,
          // funReg = /(function [\w\d]*\(\))\s*/g,
          i = 0,
          tmp, pathTmp, length, item;
        if (text) {
          // 获取原字符中配置paths的信息部分
          pathTmp = text.match(pathsReg);
          if (pathTmp) {
            pathTmp = pathTmp[0].slice(6);
            pathTmp = pathTmp.replace(/(\w+):/g, '"$1":');
            pathTmp = JSON.parse(pathTmp);
            // .replace(/\[[^\]]*\]/, '\'app/vendor\'');
            for (var key in pathTmp) {
              if (/jquery|cookie|jqueryForm|iScroll|swiper|ImagePicker|Transform|AlloyFinger|AlloyCrop|Chart/.test(key)) {
                pathTmp[key] = 'wechat/vendor';
              } else if (/Shake|activityService|activityController/.test(key)) {
                pathTmp[key] = 'wechat/activity';
              } else {
                pathTmp[key] = 'wechat/app';
              }
            }
          }
          pathTmp = 'paths:' + JSON.stringify(pathTmp);
          pathTmp += ',urlArgs:"v='+_md5+'",waitSeconds:600'
          // pathTmp += ',waitSeconds:600'
          // console.log(text.match(/console\.(log|info|error)\([^\)]*\);{0,1}/g));
          text = text.replace(pathsReg, pathTmp);
          // // 以换行符把字符串切分为数组
          // tmp = text.split(/[\n\r]+/);

          // for (; i < (length = tmp.length); i++) {
          //   item = tmp[i];
          //   // 去除前后空格
          //   tmp[i] = item.replace(spacesTrim, '')
          //     // 去除单行注释
          //     .replace(commontReg, '')
          //     .replace(sepReg, '$1')
          //     // 去除函数定义前后空格
          //     .replace(funReg, '$1');
          // }
          // tmp = tmp.join('');
          // console.log(tmp);
          return text;
        }
      }
    },
    files: [{
      expand: true,
      cwd: './html',
      src: [
        '**/*.html',
      ],
      dest: 'build',
    }]
  }
};
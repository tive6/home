/**
 * uglify config
 */
module.exports = {
  options: {
    sourceMap: true,
    banner: '/**\n *@version <%= pkg.version %>\n *@author <%= pkg.author.name %> <%= pkg.author.email %>\n *@copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.copyright %>\n */',
    compress: {
      drop_console: true
    }
  },

  build: {
    mangle: false,
    files: [{
      expand: true,
      cwd: 'build/weixin/js/wechat',
      src: '*.js',
      dest: 'build/weixin/js/wechat',
      ext: '.js',
      extDot: 'last'
    }, {
      'build/weixin/js/main.js': 'build/weixin/js/main.build.js'
    }, {
      // 'build/weixin/js/require.js': 'build/weixin/js/require.js'
    }]
  }
};
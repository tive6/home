/**
 * cssmin config
 */

module.exports = {
  options: {
    sourceMap: true,
    banner: '/*!\n *@version <%= pkg.version %>\n *@author <%= pkg.author.name %> <%= pkg.author.email %>\n *@copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.copyright %>\n */\n'
  },
  build: {
    files: [{
        'build/weixin/css/wechat.css': ['weixin/css/wechat.css'],
      }, {
        'build/activity/css/style.css': ['activity/css/style.css']
      }
      // , {
      //   expand: true,
      //   cwd: 'weixin/css',
      //   src: ['**/*.css', '!style.css', '!*.min.css'],
      //   dest: 'build/weixin/css',
      //   ext: '.min.css'
      // }
    ]
  }

};
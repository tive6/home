module.exports = {
  target: {
    files: [{
      expand: true,
      cwd: '.',
      src: ['weixin/images/**', 'activity/audio/**', 'activity/images/**'],
      dest: 'build/',
    }, {
      'build/weixin/js/main.js': 'weixin/js/main.build.js'
    }]
  },
  copySwiper: {
    files: [{
      'build/weixin/css/swiper/3.3.1/swiper.min.css': 'weixin/css/swiper/3.3.1/swiper.min.css'
    }]
  }
};
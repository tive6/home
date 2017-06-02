/**
 * clean config
 */

module.exports = {
  target: {
    files: [{
      src: ['build', 'html']
    }]
  },
  removeHtml: {
    files: [{
      src: 'html'
    }]
  },
  removeUnuseFiles: {
    files: [{
      expand: true,
      cwd: 'build/weixin/js',
      src: [
        'activity',
        'controller',
        'service',
        'common',
        'lib',
        'model',
        'main.build.js',
        'settings.js',
        'settings.build.js',
        'activityController.js',
        'activityService.js',
        'Shake.js'
      ]
    }, {

      expand: true,
      cwd: 'build',
      src: [
        'cashed.html',
        'recharge.html',
        'fuioureg.1.html',
        'bank-list.1.html'
      ]
    }]
  }
};
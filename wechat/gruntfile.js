var path = require('path');
var loadGruntConfig = require('load-grunt-config');
var packageJson = require('./package.json');

module.exports = function (grunt) {
  loadGruntConfig(grunt, {
    configPath: path.join(process.cwd(), 'grunt'),
    config: {
      pkg: grunt.file.readJSON('package.json')
    },
    loadGruntTasks: {
      pattern: 'grunt-*',
      config: packageJson,
      scope: 'devDependencies'
    }
  });


  grunt.registerTask('default', [
    'clean:target',
    'requirejs',
    'copy:target',
    'htmlmin:target',
    'htmlmin:replaceRequirejs',
    'uglify',
    'cssmin',
    'copy:copySwiper',
    'clean:removeHtml',
    'clean:removeUnuseFiles'
  ]);

  grunt.registerTask('replaceRequirejs', [
    'htmlmin:replaceRequirejs'
  ]);

  grunt.registerTask('uglifyjs', [
    'uglify'
  ]);
};
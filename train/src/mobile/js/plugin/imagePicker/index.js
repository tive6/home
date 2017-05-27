define('ImagePicker', [
  'AlloyCrop', 'AlloyFinger'
], function(AlloyCrop, AlloyFinger) {
  'use strict';
  var ImagePicker = {};
  ImagePicker.AlloyCrop = AlloyCrop;
  ImagePicker.AlloyFinger = AlloyFinger;
  return ImagePicker;
});
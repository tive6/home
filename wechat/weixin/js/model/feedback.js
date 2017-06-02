(function (factory) {
  if (typeof define === 'function' && define.amd) {
    /**
     * @module {Feedback} Feedback
     */
    define('Feedback', [], function () {
      return factory();
    });
  } else {
    factory();
  }
}(function () {
  'use strict';

  /**
   * @constructor {Feedback} Feedback
   */
  function Feedback(feedbackText, contact, image) {
    this.feedbackText = feedbackText;
    this.contact = contact;
    this.image = image;
  }

  Feedback.prototype.setFeedbackText = function (feedbackText) {
    this.feedbackText = feedbackText;
  };
  Feedback.prototype.getFeedbackText = function () {
    return this.feedbackText;
  };

  Feedback.prototype.setContact = function (contact) {
    this.contact = contact;
  };
  Feedback.prototype.getContact = function () {
    return this.contact;
  };

  Feedback.prototype.setImage = function (image) {
    this.image = image;
  };
  Feedback.prototype.getImage = function () {
    return this.image;
  };

  return Feedback;
}));
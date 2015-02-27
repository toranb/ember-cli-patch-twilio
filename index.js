/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-patch-twilio',
  contentFor: function(type) {
      var environment = this.app.env.toString();
      if (type === 'head') {
          if (environment === 'production') {
              return '<script type="text/javascript" src="//static.twilio.com/libs/twiliojs/1.2/twilio.min.js"></script>';
          } else {
              return '<script type="text/javascript"> var Twilio = { disconnectCallback: false, Device: { error: function() {}, setup: function() {}, connect: function() {}, disconnect: function (callback) { if (callback) { this.disconnectCallback = callback; } else { this.disconnectCallback(); } }, disconnectAll: function() {} } }; </script>';
          }
      }
  }
};

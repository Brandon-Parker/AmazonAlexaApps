'use strict';
var APP_ID = undefined;
var AlexaSkill = require('./AlexaSkill');
var SPEECH_OUTPUT = 'Hello';

var GreeterService = function() {
  AlexaSkill.call(this, APP_ID);
};
GreeterService.prototype = Object.create(AlexaSkill.prototype);

var helloResponseFunction = function(intent, session, response) {
  response.tell(SPEECH_OUTPUT);
};

GreeterService.prototype.eventHandlers.onLaunch = helloResponseFunction;

const express = require('express');
let AdminAPI = require('./server/admin');

function initialize() {
  let api = express();

  api.use('/admin', AdminAPI());

  return api;
}

module.exports = {
  initialize: initialize,
};
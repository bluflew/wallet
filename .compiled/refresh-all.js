// Generated by LiveScript 1.6.0
(function(){
  var refreshAccount, web3, toString$ = {}.toString;
  refreshAccount = require('./refresh-account.ls');
  web3 = require('./web3.ls');
  module.exports = function(store, cb){
    return refreshAccount(web3(store), store, function(){
      if (toString$.call(cb).slice(8, -1) === 'Function') {
        return cb(null);
      }
    });
  };
}).call(this);

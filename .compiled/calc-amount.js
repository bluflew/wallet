// Generated by LiveScript 1.6.0
(function(){
  var ref$, times, minus, plus, div, toJS, transaction, calcFee, calcCrypto, calcUsd, changeAmount, out$ = typeof exports != 'undefined' && exports || this;
  ref$ = require('./math.ls'), times = ref$.times, minus = ref$.minus, plus = ref$.plus, div = ref$.div;
  ref$ = require('mobx'), toJS = ref$.toJS, transaction = ref$.transaction;
  calcFee = require('./api.ls').calcFee;
  out$.calcCrypto = calcCrypto = function(store, amountSendUsd){
    var send, wallet, token, usdRate, ref$;
    if (amountSendUsd == null) {
      return '0';
    }
    send = store.current.send;
    wallet = send.wallet;
    token = send.coin.token;
    usdRate = (ref$ = wallet != null ? wallet.usdRate : void 8) != null ? ref$ : 0;
    return div(amountSendUsd, usdRate);
  };
  out$.calcUsd = calcUsd = function(store, amountSend){
    var send, wallet, token, usdRate, ref$;
    if (amountSend == null) {
      return '0';
    }
    send = store.current.send;
    wallet = send.wallet;
    token = send.coin.token;
    usdRate = (ref$ = wallet != null ? wallet.usdRate : void 8) != null ? ref$ : 0;
    return times(amountSend, usdRate);
  };
  out$.changeAmount = changeAmount = function(store, amountSend){
    var send, wallet, token, resultAmountSend;
    send = store.current.send;
    wallet = send.wallet;
    token = send.coin.token;
    if (wallet == null) {
      return send.error = "Balance is not loaded";
    }
    resultAmountSend = amountSend != null ? amountSend : 0;
    return calcFee({
      token: token,
      network: send.network,
      amount: resultAmountSend
    }, function(err, calcedFee){
      var ref$, txFee, usdRate;
      if (err != null) {
        return send.error = "Calc Fee Error: " + ((ref$ = err.message) != null ? ref$ : err);
      }
      txFee = calcedFee != null
        ? calcedFee
        : send.network.txFee;
      usdRate = (ref$ = wallet != null ? wallet.usdRate : void 8) != null ? ref$ : 0;
      return transaction(function(){
        send.amountSend = amountSend != null ? amountSend : "";
        send.value = times(resultAmountSend, Math.pow(10, send.network.decimals));
        send.amountObtain = resultAmountSend;
        send.amountObtainUsd = times(send.amountObtain, usdRate);
        send.amountSendUsd = calcUsd(store, amountSend);
        send.amountSendFee = txFee;
        send.amountCharged = (function(){
          switch (false) {
          case (resultAmountSend != null ? resultAmountSend : "").length !== 0:
            return txFee;
          case resultAmountSend !== '0':
            return txFee;
          case resultAmountSend !== 0:
            return txFee;
          default:
            return plus(resultAmountSend, txFee);
          }
        }());
        send.amountChargedUsd = times(send.amountCharged, usdRate);
        send.amountSendFeeUsd = times(txFee, usdRate);
        return send.error = (function(){
          switch (false) {
          case wallet.balance !== '...':
            return "Balance is not yet loaded";
          case !(parseFloat(minus(wallet.balance, resultAmountSend)) < 0):
            return "Not Enough Funds";
          default:
            return "";
          }
        }());
      });
    });
  };
}).call(this);

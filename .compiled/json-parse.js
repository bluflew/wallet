// Generated by LiveScript 1.5.0
(function(){
  module.exports = function(obj, cb){
    var err;
    try {
      return cb(null, JSON.parse(obj));
    } catch (e$) {
      err = e$;
      return cb(err);
    }
  };
}).call(this);
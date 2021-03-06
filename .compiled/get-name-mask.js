// Generated by LiveScript 1.6.0
(function(){
  module.exports = function(n){
    switch (false) {
    case n.length !== 0:
      return 'nickname@gmail.com';
    case !n.match(/^[a-z][a-z0-9]+$/):
      return n + "@gmail.com";
    case !n.match(/^[a-z][a-z0-9\.]+@$/):
      return n + "gmail.com";
    case !n.match(/^[a-z][a-z0-9\.]+@[a-z]+$/):
      return n + ".com";
    case !n.match(/^[a-z][a-z0-9\.]+@[a-z]+\.$/):
      return n + "com";
    case n.length !== 0:
      return 'nickname.domain.com';
    case !n.match(/^[a-z][a-z0-9]+\.$/):
      return n + "ethnamed.io";
    case !n.match(/^[a-z][a-z0-9]+\.[a-z]([a-z0-9]+)?\.$/):
      return n + "com";
    case !(n.indexOf('.') > -1):
      return n;
    default:
      return n + ".ethnamed.io";
    }
  };
}).call(this);

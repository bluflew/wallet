// Generated by LiveScript 1.5.0
(function(){
  var btc, eth, zec, ltc, dash, out$ = typeof exports != 'undefined' && exports || this;
  out$.btc = btc = {
    id: 'bitcoin',
    token: 'btc',
    decimals: 8,
    txFee: '0.0000004',
    mask: '1000000000000000000000000000000000',
    image: '//res.cloudinary.com/nixar-work/image/upload/v1525223912/btc-ethnamed.png',
    api: {
      provider: 'insight',
      url: 'https://insight.bitpay.com',
      decimal: 8
    },
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {
      'public': 0x0488b21e,
      'private': 0x0488ade4
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80
  };
  out$.eth = eth = {
    id: 'ethereum',
    token: 'eth',
    decimals: 18,
    txFee: '0.000084',
    messagePrefix: 'Ethereum',
    mask: '0x0000000000000000000000000000000000000000',
    image: 'http://res.cloudinary.com/nixar-work/image/upload/v1525224009/eth-ethnamed.png',
    api: {
      provider: 'none',
      url: 'https://ropsten.etherscan.io'
    }
  };
  out$.zec = zec = {
    id: 'zcash',
    decimals: 8,
    token: 'zec',
    txFee: '0.0001',
    mask: 't000000000000000000000000000000000',
    image: '//res.cloudinary.com/nixar-work/image/upload/v1525380044/zcash_icon.png',
    api: {
      provider: 'insight',
      url: 'https://zcashnetwork.info',
      decimal: 8
    },
    messagePrefix: '\x18Zcash Signed Message:\n',
    bip32: {
      'public': 0x0488b21e,
      'private': 0x05358394
    },
    pubKeyHash: 0x1CB8,
    scriptHash: 0x1CBD,
    wif: 0x80
  };
  out$.ltc = ltc = {
    id: 'litecoin',
    decimals: 8,
    token: 'ltc',
    txFee: '0.0001',
    mask: 'L000000000000000000000000000000000',
    image: '//res.cloudinary.com/nixar-work/image/upload/v1525224071/litecoin-ethnamed.png',
    api: {
      provider: 'insight',
      url: 'https://insight.litecore.io',
      decimal: 8
    },
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bip32: {
      'public': 0x019da462,
      'private': 0x019d9cfe
    },
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0
  };
  out$.dash = dash = {
    id: 'dash',
    decimals: 8,
    token: 'dash',
    txFee: '0.0001',
    mask: 'X000000000000000000000000000000000',
    image: '//res.cloudinary.com/nixar-work/image/upload/v1525224030/dash-ethnamed.png',
    api: {
      provider: 'insight',
      url: 'https://insight.dash.org',
      decimal: 8
    },
    messagePrefix: '\x19DarkCoin Signed Message:\n',
    bip32: {
      'public': 0x02fe52f8,
      'private': 0x02fe52cc
    },
    pubKeyHash: 0x4c,
    scriptHash: 0x10,
    wif: 0xcc,
    dustThreshold: 5460
  };
}).call(this);
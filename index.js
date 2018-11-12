(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ping = factory());
}(this, (function () { 'use strict';

  function ping(host, image, timeout) {
      if (image === void 0) { image = '/favicon.ico'; }
      if (timeout === void 0) { timeout = 0; }
      host = host.replace(/^(?!https?:\/\/)(\/\/)?/, 'http://').replace(/\/$/, '');
      if (typeof image === 'number') {
          timeout = image;
          image = '/favicon.ico';
      }
      image = image.replace(/^(?!\/)/, '/');
      return new Promise(function (resolve) {
          var timer;
          if (timeout) {
              timer = setTimeout(function () { return resolve(false); }, timeout);
          }
          function done(err) {
              if (timer) {
                  clearTimeout(timer);
              }
              if (err.type === 'error') {
                  resolve(false);
              }
              else {
                  resolve(true);
              }
          }
          var img = new Image();
          img.onload = done;
          img.onerror = done;
          img.src = "" + host + image + "?" + +new Date();
      });
  }

  return ping;

})));

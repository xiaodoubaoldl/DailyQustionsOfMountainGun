(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    function promisify(fn) {
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return new Promise(function (resolve, reject) {
          args.push(function (err) {
            if (err) {
              reject(err);
              return;
            }

            for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              rest[_key2 - 1] = arguments[_key2];
            }

            resolve.apply(void 0, rest);
          });
          fn.apply(null, args);
        });
      };
    }

    promisify(function (payload) {
      return payload;
    })('test').then(function (payload) {
      return console.log(payload);
    });

})));

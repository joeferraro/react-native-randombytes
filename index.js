if (typeof Buffer === 'undefined') {
  global.Buffer = require('buffer').Buffer
}

let RNRandomBytes = require('react-native').NativeModules.RNRandomBytes

function noop() {};

function toBuffer(nativeStr) {
  return new Buffer(nativeStr, 'base64');
}

export function randomBytes(length) {
  return new Promise((resolve, reject) => {
    RNRandomBytes.randomBytes(length, function (err, base64String) {
      if (err) {
        reject(err);
      } else {
        resolve(toBuffer(base64String));
      }
    })
  });
}
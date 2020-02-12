module.exports = {
  randomBytes: function(length, _rng) {
    return crypto.randomBytes(length)
  },

  randomAlphaNumericString: function(length, _rng) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let rnd = crypto.randomBytes(length)
    let value = new Array(length)
    let len = Math.min(256, chars.length)
    let d = 256 / len

    for (let i = 0; i < length; i++) {
        value[i] = chars[Math.floor(rnd[i] / d)]
    };

    return value.join('');
  }
};

const loaderUtils = require('loader-utils');

module.exports = function demoLoader(input) {
  const { text } = loaderUtils.getOptions(this);

  return `module.exports = ${JSON.stringify(input.trim() + text)};`;
};

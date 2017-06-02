module.exports = function demoLoader(input) {
  return `module.exports = ${JSON.stringify(input.trim())};`;
};

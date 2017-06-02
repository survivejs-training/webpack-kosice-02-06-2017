module.exports = function demoLoader(input) {
  // TODO: capture option here
  // TODO: append the captured option to output
  return `module.exports = ${JSON.stringify(input.trim())};`;
};

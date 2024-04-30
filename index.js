const NODE_ENV = process.env.NODE_ENV;
function ConsoleTestLoader(source) {
  let transformCode = source;
  if (NODE_ENV == "development" || !NODE_ENV) {
    const reg = /console\.test\((.+)\)/gi;
    transformCode = source.replace(reg, (match, param) => {
      return `console.log("${param}", ${param})`;
    });
  } else if (NODE_ENV == "production") {
    const reg = /console\.(test|log)\(.+\)/gi;
    transformCode = source.replace(reg, "");
  }
  return transformCode;
}

module.exports = ConsoleTestLoader;

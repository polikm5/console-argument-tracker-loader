var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// index.js
var require_console_argument_tracker_loader = __commonJS({
  "index.js"(exports, module) {
    var NODE_ENV = process.env.NODE_ENV;
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
  }
});
export default require_console_argument_tracker_loader();

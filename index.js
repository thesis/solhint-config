"use strict"

// The list of rules that can be used in Solhint can be found at:
// https://protofire.github.io/solhint/docs/rules.html

// The rules below use the recommended rules from solhint with some
// modifications
module.exports = {
  "extends": "solhint:recommended",
  "rules": {
    "imports-on-top": "error",                     // recommended uses warn
    "use-forbidden-name": "error",                 // recommended uses warn
    "no-unused-vars": "error",                     // recommended uses warn
    "reason-string": ["error", {"maxLength": 250}],// recommended uses warn
    "constructor-syntax": "error",                 // recommended uses warn
    "visibility-modifier-order": "error",          // recommended uses warn
    "ordering": "error",                           // not used in recommended
    "var-name-mixedcase": "off",
    "contract-name-camelcase": "off",
    "const-name-snakecase": "off",
    "compiler-version": "off"
  }
}

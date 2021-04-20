"use strict"

// The list of rules that can be used in Solhint can be found at:
// https://protofire.github.io/solhint/docs/rules.html

// The rules below are from the solhint:recommended ruleset with some
// modifications. Unfortunately, we cannot extend from solhint:recommended here
// (when used in a project, this sharable config would lose the rules from
// solhint:recommended), so we need to list all the rules explicitly. It looks
// like sharable configurations don't support extending.

module.exports = {
  "rules": {
    /* Best Practise Rules */
    "max-states-count": ["warn", 15],
    "no-unused-vars": "error",
    "payable-fallback": "warn",
    "reason-string": ["error", {"maxLength": 250}],
    "constructor-syntax": "error",
    /* Style Guide Rules */
    "quotes": ["error","double"],
    "event-name-camelcase": "warn",
    "func-name-mixedcase": "warn",
    "use-forbidden-name": "error",
    "imports-on-top": "error",
    "ordering": "warn",
    "visibility-modifier-order": "error",
    /* Security Rules */
    "avoid-call-value": "error",
    "avoid-low-level-calls": "error",
    "avoid-sha3": "error",
    "avoid-suicide": "error",
    "avoid-throw": "error",
    "avoid-tx-origin": "error",
    "check-send-result": "error",
    "func-visibility": ["error", {"ignoreConstructors": false}],
    "multiple-sends": "error",
    "no-complex-fallback": "error",
    "no-inline-assembly": "error",
    "not-rely-on-block-hash": "error",
    "not-rely-on-time": "error",
    "reentrancy": "error",
    "state-visibility": "error"
  }
}

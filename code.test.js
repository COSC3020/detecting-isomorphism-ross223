const code = require("./code.js");
const assert = require("assert");

var test1 = code.are_isomorphic([], []);
var test2 = code.are_isomorphic([[0]], [[1]]);
var test3 = code.are_isomorphic([[0, 1], [1, 2], [2, 3]], [])

assert(test1 = true);

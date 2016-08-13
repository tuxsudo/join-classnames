'use strict';

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tape2.default)("join-classnames", function (t) {
    t.equal((0, _index2.default)('a', 'b', 'c'), "a b c", "it joins arguments separated by spaces");

    t.equal((0, _index2.default)('a', false && 'b', 'c'), "a c", "it removes falsey values");

    t.equal((0, _index2.default)('a', false && 'b', 'c', function () {}, {}, false, [], 100, ""), "a c", "it removes non-string values");

    t.equal((0, _index2.default)('a', ' b ', 'c', " "), "a  b  c  ", "it does not remove extra spaces, do that yourself, kthxbye.");

    t.end();
});
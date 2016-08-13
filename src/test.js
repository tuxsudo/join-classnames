import join from './index.js';
import test from 'tape';

test("join-classnames", (t) => {
    t.equal(
        join('a', 'b', 'c'),
        "a b c",
        "it joins arguments separated by spaces"
    );

    t.equal(
        join('a', false && 'b', 'c'),
        "a c",
        "it removes falsey values"
    );

    t.equal(
        join('a', false && 'b', 'c', ()=>{}, {}, false, [], 100, ""),
        "a c",
        "it removes non-string values"
    );

    t.equal(
        join('a', ' b ', 'c', " "),
        "a  b  c  ",
        "it does not remove extra spaces, do that yourself, kthxbye."
    );

    t.end();
})

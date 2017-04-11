/**
 * Created by lbuthman on 4/10/17.
 */

function countChar(phrase, character) {
    "use strict";
    var count = 0;

    for (var i=0; i<phrase.length; i  ++) {
        if (phrase[i] === character) {count++}
    }

    return count;
}

function countBs(s) {
    "use strict"
    return countChar(s, "B");
}

console.log(countBs("mynameis"));
console.log(countBs("myBnameBis"));
console.log(countBs("BmyBBisB"));
console.log(countChar("hello world!", "l"));



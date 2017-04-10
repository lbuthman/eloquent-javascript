/**
 * Created by lbuthman on 4/6/17.
 */

function countBs(s) {

    var count = 0;

    for (var i=0; i<s.length; i++) {
        if (s[i] == 'B') {count++}
    }

    return count;
}

console.log(countBs("mynameis"));
console.log(countBs("myBnameBis"));
console.log(countBs("myBBBBis"));


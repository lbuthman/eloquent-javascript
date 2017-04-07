/**
 * Created by lbuthman on 4/6/17.
 */

var size = 8;
var row1 = "";
var row2 = "";
var hash = "#";
var space = " ";
var row1_next = space;
var row2_next = hash;

for (var i=0; i<size; i++) {

    row1 += row1_next;
    row2 += row2_next;

    //swap
    var temp = row1_next;
    row1_next = row2_next;
    row2_next = temp;
}

var turn = 1;
for (var i=0; i<size; i++) {

    if (turn == 1) {
        console.log(row1);
        turn = 2;

    } else if (turn == 2) {
        console.log(row2);
        turn = 1;

    }
}
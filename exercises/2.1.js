/**
 * Created by lbuthman on 4/6/17. Looping a triangle
 */

var hash = "#";
var space = " ";

for (var i=0; i<7; i++) {

    var spacer = "";
    for (var j=0; j<hash.length; j++) {
        spacer += space;
    }

    console.log(hash + spacer);

    hash += "#";
}
/**
 * Created by lbuthman on 4/6/17.
 */
function isEven(number) {

    number = Math.abs(number);

    if (number == 0) {return true}
    else if (number == 1) {return false}

    return isEven(number - 2);

}

console.log(isEven(75))
console.log(isEven(50))
console.log(isEven(-1))
console.log(isEven(-50))
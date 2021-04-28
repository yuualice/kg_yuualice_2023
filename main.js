const strings = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
var input =  process.argv.slice(2);

function numToString (n) {
    let s = '';
    for (let digit of String(n)){
        s += strings[Number(digit)];
    }
    return s;
}
console.log(input.map(n => numToString(n)).toString());

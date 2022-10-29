const arguments = process.argv.slice(2)

let field = 0;
const pi = Math.PI;

function fieldOfCircle(halfDiameter) {
    field = pi * Math.pow(halfDiameter, 2);
    console.log(`Yarıçapı ${halfDiameter} olan dairenin alanı: ${field}`);
}


fieldOfCircle(arguments[0] * 1, arguments[1] * 1);
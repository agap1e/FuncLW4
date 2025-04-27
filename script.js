var add = function (a, b) { return a + b; };
var subtract = function (a, b) { return a - b; };
var multiply = function (a, b) { return a * b; };
var divide = function (a, b) { return (b !== 0 ? a / b : NaN); };
var power = function (a, b) { return Math.pow(a, b); };
var sqrt = function (a) { return Math.sqrt(a); };
var operations = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    power: power,
    sqrt: sqrt
};
var calculate = function (operation) {
    var input1 = parseFloat(document.getElementById('input1').value);
    var input2 = parseFloat(document.getElementById('input2').value);
    var result;
    if (operation === 'sqrt') {
        result = operations[operation](input1);
    }
    else {
        result = operations[operation](input1, input2);
    }
    document.getElementById('display').value = result.toString();
};
window.calculate = calculate;

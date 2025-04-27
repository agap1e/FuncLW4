type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const subtract: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => (b !== 0 ? a / b : NaN);
const power: Operation = (a, b) => Math.pow(a, b);
const sqrt = (a: number): number => Math.sqrt(a);

const operations: { [key: string]: Operation | ((a: number) => number) } = {
    add,
    subtract,
    multiply,
    divide,
    power,
    sqrt
};

const calculate = (operation: string) => {
    const input1 = parseFloat((<HTMLInputElement>document.getElementById('input1')).value);
    const input2 = parseFloat((<HTMLInputElement>document.getElementById('input2')).value);
    let result: number;

    if (operation === 'sqrt') {
        result = (operations[operation] as (a: number) => number)(input1);
    } else {
        result = (operations[operation] as Operation)(input1, input2);
    }

    (<HTMLInputElement>document.getElementById('display')).value = result.toString();
};

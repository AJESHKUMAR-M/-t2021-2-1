// Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
//     Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
//     Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string


class calculator {
    constructor(x, y, opt) {
        this.x = x
        this.y = y
        this.opt = opt
    }
    calculate() {
        var calculate

        if (this.opt == "+") {
            calculate = this.x + this.y
        } else if (this.opt == "-") {
            calculate = this.a - this.y
        } else if (this.opt == "*") {
            calculate = this.x * this.y
        } else if (this.opt == "/") {
            calculate = this.x / this.y
        } else {
            console.log("error");
        }

        console.log(`${this.x} ${this.opt} ${this.y} = ${calculate}`);
    }
}

var operation = new calculator(5, 5, "+")
operation.calculate()
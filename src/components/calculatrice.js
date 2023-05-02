import * as React from "react";
import Test from "./test";


//create function for add , sub , mul , div
function add(a, b) {
    return a + b;
}

function sub(c, d) {
    return c - d;
}

function mul(e, f) {
    return e * f;
}

function div(g, h) {
    return g / h;
}


export default class Calculatrice extends React.Component {
    render() {
        return (
            <div>
                <h1>Calculatrice</h1>
                <p>addition : {add(5, 3)}</p>
                <p>soustraction : {sub(2, 3)}</p>
                <p>multiplication : {mul(2, 3)}</p>
                <p>division : {div(2, 3)}</p>
                <Test />
            </div>
        )
    }
}
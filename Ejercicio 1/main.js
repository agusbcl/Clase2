function suma(a, b, callback) {
    let c = a + b;
    callback();
    return c;
}

function textResult() {
    console.log("La función callback fue ejecutada con éxito.");
}

suma(1, 2, textResult);
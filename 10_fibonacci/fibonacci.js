const fibonacci = function(a) {
    if (a<0) return "OOPS";
    let previous = 0;
    let result = 1;
    for (let index = 1; index < a; index++) {
        let temp = previous;
        previous = result;
        result += temp;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;

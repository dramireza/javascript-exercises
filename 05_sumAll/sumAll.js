const sumAll = function (add1, add2) {

    if (!(typeof add1 === 'number') || !(typeof add2 === 'number') ) return "ERROR";
    if (add1 <0 || add2<0) return "ERROR";
    
    let high = 0;
    let low = 0;
    let sum = 0;

    if (add1 > add2){
        high = add1;
        low = add2;
    }else{
        high = add2;
        low = add1;
    }

    for (let index = low; index <= high; index++) {
        
        sum += index;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;

const reverseString = function(text) {

    let Reversed='';

    for (let index = text.length-1; index >= 0; index--) {
        
        Reversed += text.charAt(index)
    }
    return Reversed
};
// Do not edit below this line
module.exports = reverseString;

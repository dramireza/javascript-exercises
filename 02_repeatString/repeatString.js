const repeatString = function(text, num) {

if (num < 0) return "ERROR";
let repeat = '';
for (let index = 0; index < num; index++) {
    repeat += text;
    
}

return repeat;

};

// Do not edit below this line
module.exports = repeatString;

const palindromes = function (pal) {
    let reg = pal.replace(/[^\w]/gi,'')
    let rev = reg.split("").reverse().join("")
    if ((reg.localeCompare(rev,undefined, {sensitivity:'accent'}))==0)return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;

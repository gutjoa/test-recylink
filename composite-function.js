function rokket(num1){
    return function(num2){
        return function(num3){
            return num1 * num2 *num3;
        }
    }
}

// const rokket = num1 => num2 => num3 => num1 * num2 * num3;


console.log(rokket(2)(5)(3))
console.log(rokket(4)(2)(2))
console.log(rokket(8)(2)(1)) 
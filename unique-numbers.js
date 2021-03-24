function rokket(arr1, arr2){
    return new Set(arr1.concat(arr2))
}

// const rokket = (arr1, arr2) => new Set(arr1.concat(arr2))

console.log(rokket([1, 2, 5], [2, 1, 6]))
console.log(rokket([1, 2, 3], [4, 5, 6])) 
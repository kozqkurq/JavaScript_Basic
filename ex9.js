function sum1(num1, num2){
    result = num1 + num2;
    return result;
}
console.log(sum1(3, 5));

sum2 = function(num1, num2){
    result = num1 + num2;
    return result;
}
console.log(sum2(3, 5));

sum3 = (num1, num2) => {
    result = num1 + num2;
    return result;
}
console.log(sum3(3, 5));
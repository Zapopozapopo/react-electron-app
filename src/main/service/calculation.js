export const complexCalculation = (number1, number2) => {
    if(isNaN(number1) || isNaN(number2)) return 0;

    return parseFloat(number1) + parseFloat(number2);
}

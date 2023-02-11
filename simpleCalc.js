const calculate = (number1 , number2 , operation) => {
    var result

     switch (operation) {
        case "+":
         result = number1 + number2
         break;

        case "-":
         result = number1 - number2 
         break;

        case "/":
         result = number1 / number2
         break;

         case "*":
         result = number1 * number2
         break;

        default: result = "Enter an operation sign (+,-,*,/)"
            break;
     }
       return result
}

console.log(calculate(2,3,"*"))

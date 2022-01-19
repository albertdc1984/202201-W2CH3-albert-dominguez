function calculator(num1, num2) 

{
var num1 = prompt("Introdueix un número");
var num2 = prompt("Torna-hi amb un altre número");  
var sum = parseFloat(num1) + parseFloat(num2);
var res = parseFloat(num1) - parseFloat(num2);
var mul = parseFloat(num1) * parseFloat(num2);
var div = parseFloat(num1) / parseFloat(num2);
var calcs = [sum.toFixed(3).replace(/(\.0*|(?<=(\..*))0*)$/, ''),
 res.toFixed(3).replace(/(\.0*|(?<=(\..*))0*)$/, ''),
  mul.toFixed(3).replace(/(\.0*|(?<=(\..*))0*)$/, ''),
   div.toFixed(3).replace(/(\.0*|(?<=(\..*))0*)$/, '')];

if (isNaN(num1) && isNaN(num2) ||num1 === "" && num2 === "" || num1 === null && num2 === null)
      {
            console.log("Introdueix, com a mínim, un número vàlid");
      }

else if (isNaN(num1) || num1 === "" || num1 === null&& num2 !== NaN)
      {
            console.log("L'Arrel quadrada de "+num2+" és "+Math.sqrt(num2).toFixed(3));
      }
else if (isNaN(num2) || num2 === "" || num2 === null && num1 !== NaN)
      {
            console.log("L'Arrel quadrada de "+num1+" és "+Math.sqrt(num1).toFixed(3));
      }
else 
      {
            console.log("El resultat de la suma és "+calcs[0]+
            "\r\nEl resultat de la resta és " +calcs[1]+
            "\r\nEl resultat de la multiplicació és "+calcs[2]+
            "\r\nEl resultat de la divisió és "+calcs[3]);
      }
        
}
calculator();
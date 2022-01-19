function calculator() {
  const num1 = prompt("Introdueix un número");
  const num2 = prompt("Torna-hi amb un altre número");
  const sum = parseFloat(num1) + parseFloat(num2);
  const res = parseFloat(num1) - parseFloat(num2);
  const mul = parseFloat(num1) * parseFloat(num2);
  const div = parseFloat(num1) / parseFloat(num2);
  const calcs = [
    sum.toFixed(3),
    res.toFixed(3),
    mul.toFixed(3),
    div.toFixed(3),
  ];

  if (
    (typeof number1 === "string" && typeof number1 === "string") ||
    (num1 === "" && num2 === "")
  ) {
    console.log("Introdueix, com a mínim, un número vàlid");
  } else if (
    typeof number1 === "string" ||
    (num1 === undefined && !Number.isNaN(num2))
  ) {
    console.log(`L'Arrel quadrada de ${num2} és ${Math.sqrt(num2).toFixed(3)}`);
  } else if (
    typeof number2 === "string" ||
    (num2 === undefined && !Number.isNaN(num1))
  ) {
    console.log(`L'Arrel quadrada de ${num1} és ${Math.sqrt(num1).toFixed(3)}`);
  } else {
    console.log(
      `El resultat de la suma és ${calcs[0]}\r\nEl resultat de la resta és ${calcs[1]}\r\nEl resultat de la multiplicació és ${calcs[2]}\r\nEl resultat de la divisió és ${calcs[3]}`
    );
  }
}
calculator();

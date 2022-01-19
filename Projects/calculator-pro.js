function calculatorPro() {
  let newNumber;
  const numberList = [];
  const results = [];
  let sum = 0;
  let res = 0;
  let mult = 1;
  let div = 1;

  do {
    newNumber = prompt("Enter a number or press cancel to stop");
    numberList.push(newNumber);

    if (Number.isNaN(newNumber)) {
      alert("Enter a valid number");
      numberList.pop(newNumber);
    }
  } while (newNumber !== null);

  numberList.pop();

  if (numberList.length === 1) {
    console.log(`The square root is ${Math.sqrt(numberList[0]).toFixed(3)}`);
  } else {
    for (let i = 0; i < numberList.length; i++) {
      sum = parseFloat(sum) + parseFloat(numberList[i]);
    }
    results.push(sum);

    for (let i = 0; i < numberList.length; i++) {
      res = parseFloat(res) - parseFloat(numberList[i]);
    }
    results.push(res + parseFloat(numberList[0] * 2));

    for (let i = 0; i < numberList.length; i++) {
      mult = parseFloat(mult) * parseFloat(numberList[i]);
    }
    results.push(mult);

    for (let i = 0; i < numberList.length; i++) {
      div = parseFloat(div) / parseFloat(numberList[i]);
    }
    results.push(div * parseFloat(numberList[0] ** 2));

    console.log(
      `The result of the sum is ${results[0]
        .toFixed(3)
        .replace(
          /(\.0*|(?<=(\..*))0*)$/,
          ""
        )}\r\nThe result of the rest is ${results[1]
        .toFixed(3)
        .replace(
          /(\.0*|(?<=(\..*))0*)$/,
          ""
        )}\r\nThe result of the multiplication is ${results[2]
        .toFixed(3)
        .replace(
          /(\.0*|(?<=(\..*))0*)$/,
          ""
        )}\r\nThe result of the division is ${results[3]
        .toFixed(3)
        .replace(/(\.0*|(?<=(\..*))0*)$/, "")}`
    );
  }
  if (confirm("New numbers?")) {
    calculatorPro();
  } else {
    alert("Bye!");
  }
}
calculatorPro();

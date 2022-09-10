var number = prompt("");

function oddishOrEvenish(number){
    var sum = 0;
    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    const result = (sum % 2  == 0) ? "Even" : "Odd";
    return result;
}

document.querySelector('#header').innerHTML = oddishOrEvenish(number);
console.log(oddishOrEvenish(number));
var weatherData = [15, 20, 25, 30, 31];

var iteratorData = weatherData.values();
for (var elements of iteratorData) {
    if (elements <= 15) {
        console.log("Cold")
        console.log("--------------------")
    } else if (elements <= 30) {
        console.log("Sunny")
        console.log("--------------------")
    } else {
        console.log("Hot")
        console.log("--------------------")
    }
}

const prompt = require("prompt-sync")({ straight: true });
const convertedNumber = prompt("Convert Celsius or Fahrenheit? c for Celsius and f for Fahrenheit")


if (convertedNumber == 'c') {
    var outputData = (elements - 32) / 1.8
    console.log(outputData)
    console.log("--------------------")
} else if (convertedNumber == 'f') {
    var outputData = (elements * 1.8) + 32
    console.log(outputData)
    console.log("--------------------")
}
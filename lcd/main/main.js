function printLcd(inputs) {
    var allLcds = loadAllLcds();
    var numberArray = buildNumberArray(inputs);
    var lcdArray = buildLcdString(allLcds, numberArray);
    var finalLcd = printStrings(lcdArray);

    console.log(finalLcd);
}

function buildNumberArray(inputs) {
    var numberArray = inputs.toString().split("");

    return numberArray;
}

function buildLcdString(allLcds, numberArray) {
    var lcdArray = [];

    numberArray.forEach(function (item) {
        lcdArray.push(allLcds[item]);
    });

    return lcdArray;
}

function printStrings(lcdArray) {
    var printString = '';

    for (var i = 0; i < 3; i++) {
        lcdArray.forEach(function (item, index) {
            printString += lcdArray[index][i] + " ";
        });
        if (i < 2) {
            printString += "\n";
        }
    }

    return printString;
}


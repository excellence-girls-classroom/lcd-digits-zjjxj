function printLcd(inputs) {
    var allLcds = loadAllLcds();
    var numberArray = buildNumberArray(inputs);
    var lcdArray = buildLcdString(allLcds, numberArray);
    var finalLcd = printString(lcdArray);

    console.log(finalLcd);
}

function buildNumberArray(inputs) {
    var numberString = inputs.toString();
    var numberArray = [];
    var stringArray = numberString.split("");

    for (var i = 0; i < stringArray.length; i++) {
        numberArray.push(parseInt(stringArray[i]));
    }

    return numberArray;
}

function buildLcdString(allLcds, numberArray) {
    var lcdArray = [];

    for (var i = 0; i < numberArray.length; i++) {
        lcdArray.push(allLcds[numberArray[i]]);
    }

    return lcdArray;
}

function printString(lcdArray) {
    var printString = '';

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < lcdArray.length; j++) {
            printString += lcdArray[j][i] + " ";
        }
        if (i < 2) {
            printString += "\n";
        }
    }

    return printString;
}


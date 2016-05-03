function printLcd(inputs) {
    var allLcds = loadAllLcds();
    var numberArray = buildNumberArray(inputs);
    var lcdArray = buildLcdString(allLcds, numberArray);
    var finalLcd = printString(lcdArray);
    console.log(finalLcd);

}

function buildNumberArray(inputs) {
    var src = inputs.toString();
    var numberArray = [];
    var stringArray = src.split("");

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
    var printString;
    printString = lcdArray[0][0] + ' ' + lcdArray[1][0] + ' ' + lcdArray[2][0] + '\n' + lcdArray[0][1] + ' ' + lcdArray[1][1] + ' ' + lcdArray[2][1] + '\n' +
        lcdArray[0][2] + ' ' + lcdArray[1][2] + ' ' + lcdArray[2][2];

    return printString;
}


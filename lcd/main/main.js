function printReceipt(inputs, grid, gridNum) {

    var stringArray1 = buildNumberToStringArray(inputs);
    var allstr = buildNumberString(stringArray1, grid, gridNum);

    console.log(allstr);

}
function buildNumberToStringArray(inputs) {

    var src = inputs.toString();
    var stringArray = src.split("");

    return stringArray;

}

function buildNumberString(stringArray, grid, gridNum) {

    var allStr = "\n";
    var str = "";

    for (var j = 0; j < 3; j++) {
        allStr += buildEveryRow(stringArray, gridNum, j, grid) + "\n";
    }

    return allStr;
}

function buildEveryRow(stringArray, gridNum, row, grid) {

    var str = "";

    for (var i = 0; i < stringArray.length; i++) {
        var num = parseInt(stringArray[i]);
        var arr = gridNum[num];
        var elem = grid[arr[row]];
        str += elem + " ";
    }

    return str;
}


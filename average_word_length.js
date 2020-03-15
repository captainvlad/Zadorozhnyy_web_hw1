function isAlpha(char) {
    return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(char) > -1;
}

function avgWordLengthCalc(string) {
    if ( !string){
        return 0;
    }

    let wordsAmount = 1;
    let symbolsCounted = 0;

    for (const x of Array(string.length).keys()) {

        symbolsCounted += isAlpha(string[x]);
        wordsAmount = string[x] == ' ' ? wordsAmount + 1 : wordsAmount;

    }
    return symbolsCounted / wordsAmount;
}
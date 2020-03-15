function pentagonalNumber(number){
    if (!number){
        return 0;
    }
    return ( 3 * number ** 2 - number ) / 2;
}
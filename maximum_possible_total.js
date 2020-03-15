function maxTotal( numbers ){
    if (! numbers ){
        return 0;
    }

    const arr = [0, 0, 0, 0, 0];
    arr.length = 5;
    for ( const x of Array(numbers.length).keys() ){

        if ( numbers[x] > arr.sort()[0] ){
            arr[0] = numbers[x];
        }

    }
    return arr.reduce((a, b) => a + b, 0);
}
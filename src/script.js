const fib  = num => {
    if((typeof num !== 'number') || (num % 1 !== 0) || (num < 0)) {
        throw new Error ("The argument is not a natural number");
    }
    else {
        let array = [];
        for (let i = 0; i<num; i++) {
            if (i < 2) {
                array.push(i);
            }
            else {
                array.push(array[i-2] + array[i-1]);
            }
        }
        return array;
    }
}

module.exports = fib;


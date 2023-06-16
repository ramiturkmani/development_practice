//You are given an array of mixed-typed elements. Can you write a function that returns frequency types.

//typeFreq([1,4,'asd']) // {number:2, string:1}



function typeFreq(arr) {
    let result = {};

    arr.forEach(element => {
        const currentType = typeof element;
        if (result[currentType]) {
            result[currentType] += 1;
        } else {
            result[currentType] = 1;
        }
    });

    console.log(result);
}

typeFreq([1,4,'asd', false]);
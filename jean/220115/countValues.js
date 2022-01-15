const countUniqueValues = (numArr) => {
    // const values = {};

    // for (let value of numArr) {
    //     values[value] = (values[value] || 0) + 1;
    // }

    // return Object.keys(values).length

    let i = 0;

    if (numArr.length === 0) return i;
    for (let j in numArr) {
        if (numArr[i] !== numArr[j]) {
          numArr[i++] = numArr[j];
        }
    }

    return i+1;
}

countUniqueValues([1, 1, 1, 1, 1, 1, 2, 2])
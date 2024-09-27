const sumArray = arr => {
    const sum = arr.reduce((total, num) => total + num, 0);
    console.log(sum);
};
sumArray([1, 2, 3, 4, 5]);

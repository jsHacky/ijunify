// CSV Splitter -> returns a two dimensional array
export const resultArray = function (value) {
    console.log("Module csv");
    let temp = value.split('\n'), arr = [];
    if (temp.length >= 1) {
        temp.forEach(function (element) {
            arr.push(element.split(';'));
        });
    }
    console.log(arr);
    return arr;
};
//# sourceMappingURL=csv.js.map
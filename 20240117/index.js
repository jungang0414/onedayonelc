
arr = [1, 2, 2, 1, 1, 3];
// arrSort = [1, 1, 1, 2, 2, 3];

var uniqueOccurrences = function (arr) {
    let occurrences = {};

    for (let i = 0; i < arr.length; i++) {
        if (occurrences[arr[i]] === undefined) {
            occurrences[arr[i]] = 1;
        } else {
            occurrences[arr[i]]++;
        }
    }

    let occurrencesValues = Object.values(occurrences);
    let uniqueOccurrencesSet = new Set(occurrencesValues);

    return occurrencesValues.length === uniqueOccurrencesSet.size;
};

uniqueOccurrences(arr)
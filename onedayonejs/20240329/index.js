/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let count = 0;
        for (let i = 0; i < functions.length; i++) {
            functions[i]()
            .then(result => {
                results[i] = result;
                count++;
                if (count === functions.length) {
                    resolve(results);
                }
            })
            .catch(error => {
                console.log(`錯誤發生: ${error}`);
                reject(error);
            });
        }
    });
};
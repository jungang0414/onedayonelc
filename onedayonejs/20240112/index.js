s = "bokk"

var halvesAreAlike = function (s) {
    //首先將字串 s 轉成小寫，以利等一下的判斷
    //宣告變數 s
    s = s.toLowerCase();

    //將字串分割為兩半
    //宣告 兩變數 a , b
    a = s.slice(0, s.length / 2).split('');
    b = s.slice(s.length / 2).split('');

    //宣告兩變數來儲存 a, b 中包含 vowel元素的次數
    //以及 vowel , 用來判斷的陣列元素
    let aCount = 0;
    let bCount = 0;
    vowels = ['a', 'e', 'i', 'o', 'u']

    //使用 forEach遍歷 a, b 並使用inCludes判斷是否有包含 vowels 中的元素
    a.forEach((x) => {
        if (vowels.includes(x)) {
            aCount++;
        }
    })

    b.forEach((x) => {
        if (vowels.includes(x)) {
            bCount++;
        }
    })

    return aCount === bCount
}

console.log(halvesAreAlike(s))
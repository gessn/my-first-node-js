'use strict' //バグの発生を抑えるStrictモードを使用できる
const number = process.argv[2] || 0;　
/*このコードは、number という定数に、process.argv[2] の値を代入します。
process.argv は Node.js がデフォルトで提供してくれる、コマンドラインの引数が入った配列です。
process.argv[2] が 0 や null や undefined などの Falsy な値である場合、number には 0 が代入されます。
*/
let sum = 0;
for (let i = 1; i <= number; i++){
    sum = sum + i;
}
console.log(sum);
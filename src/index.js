// const arr1 = ["test", "hoge"];
// const arr2 = [...arr1];
// console.log(arr1, arr2);

// const arr3 = arr1;
// arr3[0] = "fixed!"; //参照渡し
// console.log(arr1, arr3);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "田山"];

// 従来のfor
for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index + 1}番目は${nameArr[index]}です`);
}

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// console.log(nameArr2);

// const func = (data) => data * 2;
// console.log(func(2));

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];

// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "田中") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "true" : "false";
// console.log(val1);

// const num = 1300;

// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "over 100" : "under 100";
};

console.log(checkSum(10, 20));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1 or 2 is true");
}

if (flag1 && flag2) {
  console.log("1 and 2 are true");
}

// || は左がfalseになるとき右を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

// && は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);

const arr1 = ["test", "hoge"];
const arr2 = [...arr1];
console.log(arr1, arr2);

const arr3 = arr1;
arr3[0] = "fixed!"; //参照渡し
console.log(arr1, arr3);

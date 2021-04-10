import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = ""; //input-textの内容を空にする

  // div生成
  const div = document.createElement("div"); //divタグを変数として宣言
  div.className = "list-row";
  // console.log(div);

  //liタグ生成
  const li = document.createElement("li"); // liタグを変数として宣言
  li.innerText = inputText;
  // console.log(li);

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  // console.log(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
// // target.addEventListener(type, listener [, options]);

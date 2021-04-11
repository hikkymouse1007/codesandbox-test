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

  // button(完了)タグ生成
  const completeButton = document.createElement("button"); //削除機能を持つボタンオブジェクト
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //　押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // // div以下を初期化
    addTarget.textContent = null;

    // // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });
  // console.log(completeButton);

  // button(削除)タグ生成
  const deleteButton = document.createElement("button"); //削除機能を持つボタンオブジェクト
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //　押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  // console.log(deleteButton);

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // console.log(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
// // target.addEventListener(type, listener [, options]);

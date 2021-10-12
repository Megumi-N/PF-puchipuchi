const fragment = document.createDocumentFragment();
const wrapper = document.getElementById("wrapper_puchi");
const text = document.getElementById("text");

let images = [];

let img;
let div;
let audio;

const puchiImage = document.getElementsByTagName("img");

let num = 10;

const modalTitle = document.getElementById("staticBackdropLabel");
const modalBody = document.getElementById("staticBackdropBody");

const modalBtn = document.getElementById("btn");

const audioTag = document.getElementsByClassName("audio");

for (let i = 0; i < 50; ++i) {
  images.push(i);
}

images.forEach((image) => {
  img = document.createElement("img");
  div = document.createElement("div");
  audio = document.createElement("audio");

  img.src = "./before.png";
  img.id = image;
  img.classList = "puchi";
  img.setAttribute("draggable", true);

  div.id = `puchi${image}`;

  audio.classList = "audio";
  audio.id = `puchi_audio${image}`;
  audio.src = "./puchipuchi.mp3";
  fragment.appendChild(div).appendChild(img);
  fragment.appendChild(div).appendChild(audio);
});

wrapper.appendChild(fragment);

document.addEventListener(
  "DOMContentLoaded",
  () => {
    function menuClick(e) {
      // a.currentTime = 0; // 連続音楽
      e.path[1].children[1].play();
      e.path[0].src = "./after.png";
      // e.path[1].children[1]
      e.path[1].children[1].addEventListener(
        "ended",
        () => {
          document.getElementById(`puchi_audio${e.path[0].id}`).remove();
          if (audioTag.length == 0) {
            myModal.show();
            modalTitle.innerHTML = "クリア！";
            modalBody.innerHTML = "完了";
            modalBtn.innerHTML = "再挑戦";
            modalBtn.setAttribute("onclick", "location.reload();");
          }
        },
        false
      );
    }

    // 引数に指定したclassの値をもつ要素をすべて取得
    const menus = document.getElementsByClassName("puchi");
    // 上記で取得したすべての要素に対してクリックイベントを適用
    for (let i = 0; i < images.length; i++) {
      menus[i].addEventListener("click", menuClick, false);
    }
  },
  false
);

document.getElementById("btn").addEventListener("click", () => {
  const timer = setInterval(() => {
    num -= 1;
    text.innerHTML = num + "秒";
    if (num == 0) {
      clearInterval(timer);
      myModal.show();
      modalTitle.innerHTML = "終了";
      modalBody.innerHTML = "完了";
      modalBtn.innerHTML = "再挑戦";
      modalBtn.setAttribute("onclick", "location.reload();");
    }
  }, 1000);
});

const myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"), {
  keyboard: false,
});

myModal.show();

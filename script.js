let device;

const fragment = document.createDocumentFragment();
const wrapper = document.getElementById("wrapper_puchi");
const text = document.getElementById("text");

let images = [];

let img;
let div;
let audio;
const music = new Audio();
music.src = "./audio/puchipuchi.mp3";

const puchiImage = document.getElementsByTagName("img");

let num = 10;

const modalTitle = document.getElementById("staticBackdropLabel");
const modalBody = document.getElementById("staticBackdropBody");

const modalBtn = document.getElementById("btn");

const audioTag = document.getElementsByClassName("audio");

// デバイス認証
const deviceDetect = () => {
  if (
    navigator.userAgent.match("iPad") ||
    navigator.userAgent.match("iPhone")
  ) {
    device = "apple";
    alert("未対応のデバイスです");
  }
};
deviceDetect();

for (let i = 0; i < 50; ++i) {
  images.push(i);
}

// imgとaudioタグを生成
images.forEach((image) => {
  img = document.createElement("img");
  div = document.createElement("div");
  audio = document.createElement("audio");

  img.src = "./images/before.png";
  img.id = image;
  img.classList = "puchi";
  img.setAttribute("onclick", "");

  div.id = `puchi${image}`;

  audio.classList = "audio";
  audio.id = `puchi_audio${image}`;
  audio.src = music.src;
  fragment.appendChild(div).appendChild(img);
  fragment.appendChild(div).appendChild(audio);
});
wrapper.appendChild(fragment);

document.addEventListener(
  "DOMContentLoaded",
  function () {
    if (device !== "apple") {
      function menuClick(e) {
        // a.currentTime = 0; // 連続音楽

        e.path[1].children[1].play();

        e.path[0].src = "./images/after.png";
        // e.path[1].children[1]
        e.path[1].children[1].addEventListener("ended", () => {
          document.getElementById(`puchi_audio${e.path[0].id}`).remove();
          if (audioTag.length == 0) {
            myModal.show();
            modalTitle.innerHTML = "クリア！";
            modalBody.innerHTML = `数々のプチプチを潰してきた猛者だとお見受けします。<br>
            あなたに泣かされてきたプチプチも数多いことでしょう...。
            `;
            modalBtn.innerHTML = "再挑戦";
            modalBtn.setAttribute("onclick", "location.reload();");
          }
        });
      }
    }

    // 引数に指定したclassの値をもつ要素をすべて取得
    const menus = document.getElementsByClassName("puchi");
    // 上記で取得したすべての要素に対してクリックイベントを適用
    for (let i = 0; i < images.length; i++) {
      if (device === "apple") {
      } else {
        menus[i].addEventListener("click", menuClick, false);
      }
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
      console.log(audioTag.length);
      modalTitle.innerHTML = "タイムアウト〜〜";
      modalBody.innerHTML = "ぷちぷちへの愛が感じられませんでした...";
      modalBtn.innerHTML = "再挑戦";
      modalBtn.setAttribute("onclick", "location.reload();");
    }
  }, 1000);
});

const myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"), {
  keyboard: false,
});

myModal.show();

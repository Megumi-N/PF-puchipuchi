<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <main id="app"></main>
    <script>
      const audios = { itemget: new Audio("./puchipuchi.mp3") };

      for (var i in audios) {
        audios[i].load();
      }

      /**
       * オブジェクトのベースとなるクラス
       */
      class BaseObject {
        constructor(x, y) {
          this.x = x;
          this.y = y;
        }

        // 初期表示
        draw(ctx) {}
        // 自オブジェクトがクリックされたかどうか判定
        testHit(point) {}
        // クリックされたときの処理
        clicked(ctx) {}
      }

      /**
       * 円オブジェクトのクラス
       */
      class Circle extends BaseObject {
        constructor(x, y, r) {
          super(x, y);
          this.r = r;
        }

        draw(ctx) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
          ctx.fillStyle = "black";
          ctx.fill();
          ctx.restore();
        }

        clicked(ctx) {
          audios["itemget"].play();
          ctx.save();
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
          ctx.fillStyle = "red";
          ctx.fill();
          ctx.restore();
        }

        testHit(point) {
          return (
            Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2) <=
            Math.pow(this.r, 2)
          );
        }
      }

      /**
       * main処理
       */
      const main = () => {
        const canvas = document.createElement("canvas");
        document.getElementById("app").appendChild(canvas);

        canvas.width = 640;
        canvas.height = 480;

        const ctx = canvas.getContext("2d");
        ctx.save();
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();

        const items = [];

        // ランダムにオブジェクトを配置する
        const getPos = (min, max) => {
          return Math.round(Math.random() * (max + 1 - min) + min);
        };

        [...Array(1)].forEach(() => {
          const x = canvas.width - 50;
          const y = getPos(0, canvas.height - 50);
          let a = 0;

          const circle = new Circle(x, y, 25);
          items.push(circle);
        });

        // オブジェクトを描画する
        items.forEach((item) => item.draw(ctx));

        canvas.addEventListener("click", (e) => {
          // マウスの座標をCanvas内の座標とあわせるため
          const rect = canvas.getBoundingClientRect();
          const point = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          };

          items.forEach((item) => {
            if (item.testHit(point)) {
              item.clicked(ctx);
            }
          });
        });
      };

      main();
    </script>
  </body>
</html>

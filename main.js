// グローバルに展開
phina.globalize();
/*
const animation_info = {
  // アニメーション情報
  "left": { // アニメーション名
    "frames": [15,16,17], // フレーム番号範囲
    "next": "left", // 次のアニメーション
    "frequency": 6, // アニメーション間隔
  },
  "right": { // アニメーション名
    "frames": [12,13,14], // フレーム番号範囲
    "next": "right", // 次のアニメーション
    "frequency": 6, // アニメーション間隔
  },
  "up": { // アニメーション名
    "frames": [9,10,11,10], // フレーム番号範囲
    "next": "up", // 次のアニメーション
    "frequency": 6, // アニメーション間隔
  },
  "down": { // アニメーション名
    "frames": [6,7,8,7], // フレーム番号範囲
    "next": "down", // 次のアニメーション
    "frequency": 6, // アニメーション間隔
  },
};
*/

var FRAME_INFO = {
  "width": 64, // 1フレームの画像サイズ（横）
  "height": 64, // 1フレームの画像サイズ（縦）
  "cols": 6, // フレーム数（横）
  "rows": 3, // フレーム数（縦）
}

var ANIM_INFO = {
  "walk": { // アニメーション名
    "frames": [6,7,8,7], // フレーム番号範囲
    "next": "walk", // 次のアニメーション
    "frequency": 6, // アニメーション間隔
  },
}

var ASSETS = {
  image:{
    'mika': 'Image\\mikapiyo.png',
    'nasu': 'Image\\nasupiyo.png',
  },
  spritesheet: {
    "mika_ss":{
      frame: FRAME_INFO,
      animations: ANIM_INFO,
    },
    "nasu_ss":{
      frame: FRAME_INFO,
      animations: ANIM_INFO,
    },
  },

  sound: {
    "se_cat": "Sound\\cat.mp3",
    "se_lion": "Sound\\lion.mp3",
  },
};

/*
 * メインシーン
 */
phina.define("MainScene", {
  // 継承
  superClass: 'DisplayScene',
  // 初期化
  init: function() {
    // 親クラス初期化
    this.superInit();
    // 背景色
    this.backgroundColor = 'skyblue';
    // スプライト画像作成
    var mika = Sprite('mika', 64, 64).addChildTo(this);
    mika.setPosition(200, 480);
    var anim_mika = FrameAnimation('mika_ss').attachTo(mika);
    anim_mika.gotoAndPlay('walk');

    var nasu = Sprite('nasu', 64, 64).addChildTo(this);
    nasu.setPosition(400, 480);
    var anim_nasu = FrameAnimation('nasu_ss').attachTo(nasu);
    anim_nasu.gotoAndPlay('walk');
    
    // タッチ可能にする
    mika.setInteractive(true);
    mika.onpointstart = function() { 
      SoundManager.play('se_cat');
    };
    nasu.setInteractive(true);
    nasu.onpointstart = function() { 
      SoundManager.play('se_lion');
    };

  },
});

/*
 * メイン処理
 */
phina.main(function() {
  // アプリケーションを生成
  var app = GameApp({
    // MainScene から開始
    startLabel: 'main',
    // アセット読み込み
    assets: ASSETS,
  });
  // fps表示
  //app.enableStats();
  // 実行
  app.run();
});




// グローバルに展開
phina.globalize();

var ASSETS = {
  image:{
    'cat': 'Image\\cat.png',
    'dog': 'Image\\dog.png',
    'zou': 'Image\\zou.png',
    'lion': 'Image\\lion.png',
    'yagi': 'Image\\yagi.png',
    'hato': 'Image\\hato.png',
    'niwatori': 'Image\\niwatori.png',
  },
  
  sound: {
    "se_cat": "Sound\\cat.mp3",
    "se_dog": "Sound\\dog.mp3",
    "se_zou": "Sound\\zou.mp3",
    "se_lion": "Sound\\lion.mp3",
    "se_yagi": "Sound\\yagi.mp3",
    "se_hato": "Sound\\hato.mp3",
    "se_niwatori": "Sound\\niwatori.mp3",
  },
};

function ChangeScaleAndPlaySound(sp, sound_name)
{
  SoundManager.play(sound_name);
  sp.tweener.scaleTo(2.0, 500).play();
  sp.tweener.scaleTo(1.0, 1000).play();
}

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
    this.backgroundColor = "skyblue";

    // スプライト画像作成
    var cat = Sprite('cat').addChildTo(this);
    cat.setPosition(200, 200);
    cat.width = 100;
    cat.height = 120;

    var dog = Sprite('dog').addChildTo(this);
    dog.setPosition(400, 200);
    dog.width = 100;
    dog.height = 100;

    var zou = Sprite('zou').addChildTo(this);
    zou.setPosition(120, 480);
    zou.width = 100;
    zou.height = 100;
    
    var lion = Sprite('lion').addChildTo(this);
    lion.setPosition(310, 480);
    lion.width = 100;
    lion.height = 100;
    var yagi = Sprite('yagi').addChildTo(this);
    yagi.setPosition(500, 480);
    yagi.width = 100;
    yagi.height = 100;

    var hato = Sprite('hato').addChildTo(this);
    hato.setPosition(200, 720);
    hato.width = 100;
    hato.height = 100;

    var niwatori = Sprite('niwatori').addChildTo(this);
    niwatori.setPosition(400, 720);
    niwatori.width = 100;
    niwatori.height = 100;

    // タッチ可能にする
    cat.setInteractive(true);
    cat.onpointstart = function() { 
      ChangeScaleAndPlaySound(cat, 'se_cat');
    };
    dog.setInteractive(true);
    dog.onpointstart = function() { 
      ChangeScaleAndPlaySound(dog, 'se_dog');
    };
    zou.setInteractive(true);
    zou.onpointstart = function() { 
      ChangeScaleAndPlaySound(zou, 'se_zou');
    };
    lion.setInteractive(true);
    lion.onpointstart = function() { 
      ChangeScaleAndPlaySound(lion, 'se_lion');
    };
    yagi.setInteractive(true);
    yagi.onpointstart = function() { 
      ChangeScaleAndPlaySound(yagi, 'se_yagi');
    };
    hato.setInteractive(true);
    hato.onpointstart = function() { 
      ChangeScaleAndPlaySound(hato, 'se_hato');
    };
    niwatori.setInteractive(true);
    niwatori.onpointstart = function() { 
      ChangeScaleAndPlaySound(niwatori, 'se_niwatori');
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

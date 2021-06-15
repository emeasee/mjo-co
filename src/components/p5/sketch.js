export default function Sketch(p5) {
  // Inspired by Yeohyun Ahn and Viviana Cordova: Type + Code: Processing For Designers
  // https://issuu.com/jpagecorrigan/docs/type-code_yeohyun-ahn
  //Credit to MAKIO135

  var WHITE, RED;

  var params = {
    fontIndex: 3,
    font: window.googleFonts[3].name,
    fontStyle: window.googleFonts[3].styles[0],
    text: 'm',
    textSize: 200,
    textSizeRange: [200, 300],
    number: 10,
    numberRange: [10, 18],
    distance: 90,
    distanceRange: [-100, 100],
    angle: 320,
    angleRange: [0, 360],
    globalAngle: 50,
    globalAngleRange: [0, 360],
    random: true,
  };

  var animParams = {
    textSize: params.textSize,
    number: params.number,
    distance: params.distance,
    angle: params.angle,
    globalAngle: params.globalAngle,
  };

  var font;

  p5.setup = () => {
    p5.createCanvas(1000, 1000);
    font = p5.loadFont(
      window.googleFontsBaseUrl +
        window.googleFonts[params.fontIndex].files[0].url,
      useFont
    );

    WHITE = p5.color('#ffffff');
    RED = p5.color('#FB3550');

    p5.noStroke();
    p5.fill(RED.levels[0], RED.levels[1], RED.levels[2], 1000);
    p5.textAlign('CENTER', 'CENTER');
    randomize();
  }

  p5.draw = () => {
    p5.background(WHITE);

    if (params.random && p5.frameCount % 2000 == 0) {
      randomize();
    }

    p5.textSize(animParams.textSize);
    p5.translate(p5.width / 2, p5.height / 2);
    p5.rotate(p5.radians(animParams.globalAngle));

    for (var i = 0; i < animParams.number; i++) {
      p5.push();
      p5.rotate((i * p5.TAU) / animParams.number);
      p5.translate(
        0,
        -p5.map(
          animParams.distance,
          0,
          100,
          0,
          p5.height / 2 - animParams.textSize / 2
        )
      );
      p5.rotate(p5.radians(animParams.angle));
      p5.text(params.text, 0, 0);
      p5.pop();
    }
  }

  function animate(value, _t) {
    var time = _t || 0.5;
    window.TweenMax.to(animParams, time, {
      textSize: params.textSize,
      number: params.number,
      distance: params.distance,
      angle: params.angle,
      globalAngle: params.globalAngle,
    });
  }

  function randomize() {
    params.fontIndex = ~~p5.random(window.googleFonts.length);
    params.font = window.googleFonts[params.fontIndex].name;
    fontControllerUpdate(params.font);
    animParams.text = params.text = String.fromCharCode(65 + ~~p5.random(26));
    params.textSize = ~~p5.random(
      params.textSizeRange[0],
      params.textSizeRange[1]
    );
    params.number = ~~p5.random(params.numberRange[0], params.numberRange[1]);
    params.distance = ~~p5.random(
      params.distanceRange[0],
      params.distanceRange[1]
    );
    params.angle = ~~p5.random(params.angleRange[0], params.angleRange[1]);
    params.globalAngle = ~~p5.random(
      params.globalAngleRange[0],
      params.globalAngleRange[1]
    );
    animate(0, 1);
  }

  function useFont() {
    p5.textFont(font);
  }

  function fontStyleControllerUpdate(value) {
    for (
      let i = 0;
      i < window.googleFonts[params.fontIndex].files.length;
      i++
    ) {
      if (window.googleFonts[params.fontIndex].files[i].style == value) {
        font = p5.loadFont(
          window.googleFontsBaseUrl +
            window.googleFonts[params.fontIndex].files[i].url,
          useFont
        );
        break;
      }
    }
  }

  function fontControllerUpdate(value) {
    for (let i = 0; i < window.googleFonts.length; i++) {
      if (window.googleFonts[i].name == value) {
        params.fontIndex = i;
        break;
      }
    }

    for (
      let i = 0;
      i < window.googleFonts[params.fontIndex].files.length;
      i++
    ) {
      if (
        window.googleFonts[params.fontIndex].files[i].style ==
        window.googleFonts[params.fontIndex].styles[0]
      ) {
        font = p5.loadFont(
          window.googleFontsBaseUrl +
            window.googleFonts[params.fontIndex].files[i].url,
          useFont
        );
        break;
      }
    }
  }
}

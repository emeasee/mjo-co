export default function Sketch(p5) {
// Inspired by Yeohyun Ahn and Viviana Cordova: Type + Code: Processing For Designers 
// https://issuu.com/jpagecorrigan/docs/type-code_yeohyun-ahn
//Credit to MAKIO135

var WHITE, RED;

var params = {
    fontIndex: 3,
    font: googleFonts[ 3 ].name,
    fontStyle: googleFonts[ 3 ].styles[ 0 ],
    text: 'm',
    textSize: 200,
    textSizeRange: [ 18, 500 ],
    number: 10,
    numberRange: [ 2, 18 ],
    distance: 90,
    distanceRange: [ -100, 100 ],
    angle: 320,
    angleRange: [ 0, 360  ],
    globalAngle: 50,
    globalAngleRange: [ 0, 360  ],
    random: true
};

var animParams = {
    textSize: params.textSize,
    number: params.number,
    distance: params.distance,
    angle: params.angle,
    globalAngle: params.globalAngle
};


var font;

function setup() {
    createCanvas( 600, 600 );
    font = loadFont( googleFontsBaseUrl + googleFonts[ params.fontIndex ].files[ 0 ].url, useFont );
    
    WHITE = color( '#ffffff' );
    RED = color( '#FB3550' );

    noStroke();
    fill( RED.levels[ 0 ], RED.levels[ 1 ], RED.levels[ 2 ], 1000 );
    textAlign( CENTER, CENTER );
    randomize();
}

function draw() {
    background( WHITE );
    
    if( params.random && frameCount % 1000 == 0 ){
        randomize();
    }
    
    textSize( animParams.textSize );
    translate( width/2, height/2 );
    rotate( radians( animParams.globalAngle ) );
    
    for( var i = 0; i < animParams.number; i ++ ){
        push();
        rotate( i * TAU / animParams.number );
        translate( 0, - map( animParams.distance, 0, 100, 0, height / 2 - animParams.textSize / 2 ) );
        rotate( radians( animParams.angle ) );
        text( params.text, 0, 0 );
        pop();
    }
}

function animate( value, _t ){
    var time = _t || 0.5;
    TweenMax.to( animParams, time, {
        textSize: params.textSize,
        number: params.number,
        distance: params.distance,
        angle: params.angle,
        globalAngle: params.globalAngle
    } );
}

function randomize(){
    params.fontIndex = ~~ random( googleFonts.length ) 
    params.font = googleFonts[ params.fontIndex ].name;
    fontControllerUpdate( params.font );
    animParams.text = params.text = String.fromCharCode( 65 + ~~random( 26 ) );
    params.textSize = ~~ random( params.textSizeRange[ 0 ], params.textSizeRange[ 1 ] );
    params.number = ~~ random( params.numberRange[ 0 ], params.numberRange[ 1 ] );
    params.distance = ~~ random( params.distanceRange[ 0 ], params.distanceRange[ 1 ] );
    params.angle = ~~ random( params.angleRange[ 0 ], params.angleRange[ 1 ] );
    params.globalAngle = ~~ random( params.globalAngleRange[ 0 ], params.globalAngleRange[ 1 ] );
    animate( 0, 1 );
}

function useFont(){
    textFont( font );
}

function fontStyleControllerUpdate( value ){
    for( let i = 0; i < googleFonts[ params.fontIndex ].files.length; i ++ ){
        if( googleFonts[ params.fontIndex ].files[ i ].style == value ){
            font = loadFont( googleFontsBaseUrl + googleFonts[ params.fontIndex ].files[ i ].url, useFont );
            break;
        }
    }
}

function fontControllerUpdate( value ){
    for( let i = 0; i < googleFonts.length; i++ ){
      if( googleFonts[ i ].name == value ){
            params.fontIndex = i;
            break;
        }
    }
    
    for( let i = 0; i < googleFonts[ params.fontIndex ].files.length; i ++ ){
        if( googleFonts[ params.fontIndex ].files[ i ].style == googleFonts[ params.fontIndex ].styles[ 0 ] ){
            font = loadFont( googleFontsBaseUrl + googleFonts[ params.fontIndex ].files[ i ].url, useFont );
            break;
        }
    }
    }
}

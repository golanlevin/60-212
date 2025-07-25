// An adaptation of Neil Thapen's Pink Trombone for p5.js
// Copyright 2017 Neil Thapen - https://dood.al/pinktrombone/
// "Bare-handed procedural speech synthesis"
// Adapted to p5.js by Golan Levin, July 2025
//============================================================

let tonguePositionSlider; 
let tongueDiameterSlider;
let pitchSlider;
let voicingSlider;
let nasalitySlider;
let vibratoAmountSlider;
let vibratoFreqSlider;
let wobbleAmountSlider;

//-----------------------
function setup() {
  createCanvas(600, 500);
  createPinkTromboneSynthesizer(); 
  createSliders(); 
}

//-----------------------
function mousePressed() {
  // Don't touch this — the AudioSystem must be initialized by
  // a user action to comply with browser autoplay policies.
  startPinkTromboneAudioSystem(); 
}

//-----------------------
function draw() {
  background(250);

  let bAutoPlay = false; 
  if (bAutoPlay){
     tonguePositionSlider.value( map(noise(millis()/500), 0, 1, tongueMin, tongueMax) );
     tongueDiameterSlider.value( map(noise(millis()/180), 0, 1, innerTongueDiameter, outerTongueDiameter) );
     pitchSlider.value( map(noise(millis()/1300), 0, 1, 90, 240) );
     voicingSlider.value( map(noise(millis()/1100), 0.1, 0.9, 0, 1) );
  }

  setVibratoAmount( vibratoAmountSlider.value() ); // 0 - 0.1
  setVibratoFrequency ( vibratoFreqSlider.value() ); // ~0 - 10 Hz
  setPitchWobbleAmount ( wobbleAmountSlider.value() ); // 0-1
  setPitchByMidiNote( pitchSlider.value() ); // 31-72 (G1-C5)
  setVoicing ( voicingSlider.value() ); // 0-1
  setNasality ( nasalitySlider.value() ); // 0-1
  setTonguePosition( tonguePositionSlider.value() ); // tongueMin - tongueMax
  setTongueDiameter( tongueDiameterSlider.value() ); // innerTongueDiameter - outerTongueDiameter

  setRestDiameter(); 
  if (mouseIsPressed) {
    modifyVocalTractAtMouse(mouseX, mouseY);
  }
   let tractArray = getTractDiameterArray();
  for (let i = 1; i < tractLength-1; i++) {
    if (tractArray[i] > 0.1) {
      tractArray[i] = (tractArray[i-1] + tractArray[i] + tractArray[i+1]) / 3.0;
    }
  }
  drawVocalTractGraphics();
  updateVocalTract();
}




//============================================================
let tractTop = 100; 
let tractLeft = 50;
let tractRight = 550;
let tractScaleY = 50; 

function drawVocalTractGraphics() {
  let tractArray = getTractDiameterArray();

  noStroke(); 
  fill('pink'); 
  rect(tractLeft, tractTop-50, tractRight - tractLeft, tractScaleY*5);
  circle(tractRight, tractTop-25, 50);
  circle(tractRight, tractTop + (tractArray[tractLength-1] * tractScaleY)+25, 50);

  fill('PaleVioletRed'); 
  beginShape();
  vertex(tractLeft, tractTop);
  for (let i = 0; i < tractLength; i++) {
    let x = map(i, 0, tractLength - 1, tractLeft, tractRight);
    let y = tractTop + tractArray[i] * tractScaleY; 
    vertex(x, y);
  }
  vertex(tractRight, tractTop);
  endShape(CLOSE);
}


function modifyVocalTractAtMouse(x, y) {
  let tractArray = getTractDiameterArray();

  // Map x to index
  let index = map(x, tractLeft, tractRight, 0, tractLength - 1);
  if (index < 0 || index >= tractLength) return;

  // Map y to tongue diameter
  let diam = (y - tractTop) / tractScaleY;
  diam = constrain(diam, 0.001, 3);

  // Apply local smoothing
  let spread = 4;
  let intIndex = round(index);
  for (let i = -spread; i <= spread; i++) {
    let idx = intIndex + i;
    if (idx >= 0 && idx < tractLength) {
      let falloff = 1 - abs(i) / spread;
      falloff = pow(falloff, 2.0); 
      tractArray[idx] = lerp(tractArray[idx], diam, falloff);
      tractArray[idx] = constrain(tractArray[idx], 0.001, 3);
    }
  }
}


//=================================================================================
function createSliders() {
  let sliderX = 20;
  let sliderY = height-150;
  let sliderDy = 20;

  tonguePositionSlider = createSlider(tongueMin, tongueMax, 12.9, 0.1);
  tonguePositionSlider.position(sliderX, sliderY+=sliderDy); 
  tonguePositionSlider.elt.addEventListener('mousedown', (e) => e.stopPropagation());
  let tonguePositionSliderLabel = createDiv('tongue position').position(sliderX+140, sliderY);

  tongueDiameterSlider = createSlider(innerTongueDiameter, outerTongueDiameter, 2.43, 0.01);
  tongueDiameterSlider.position(sliderX, sliderY+=sliderDy); 
  tongueDiameterSlider.elt.addEventListener('mousedown', (e) => e.stopPropagation());
  let tongueDiameterSliderLabel = createDiv('tongue diameter').position(sliderX+140, sliderY);

  // pitchSlider uses MIDI note values with cent resolution: 31.00 (G1, 49Hz) to 72.00 (C5, 523Hz)
  // See https://inspiredacoustics.com/en/MIDI_note_numbers_and_center_frequencies
  pitchSlider = createSlider(31, 72, 48, 0.01); // 48 ≈ 130 Hz
  pitchSlider.position(sliderX, sliderY+=sliderDy); 
  pitchSlider.elt.addEventListener('mousedown', (e) => e.stopPropagation());
  let pitchSliderLabel = createDiv('pitch').position(sliderX+140, sliderY);

  voicingSlider = createSlider(0, 1, 0.6, 0.01);
  voicingSlider.position(sliderX, sliderY+=sliderDy);
  voicingSlider.elt.addEventListener('mousedown', (e) => e.stopPropagation());
  let voicingSliderLabel = createDiv('voicing').position(sliderX+140, sliderY);

  nasalitySlider = createSlider(0, 1, 0, 0.01);
  nasalitySlider.position(sliderX, sliderY+=sliderDy);
  nasalitySlider.elt.addEventListener('mousedown', (e) => e.stopPropagation());
  let nasalitySliderLabel = createDiv('nasality').position(sliderX+140, sliderY);

  sliderX = 300;
  sliderY = height-150;

  vibratoAmountSlider = createSlider(0, 0.1, 0.005, 0.001);
  vibratoAmountSlider.position(sliderX, sliderY+=sliderDy);
  vibratoAmountSlider.elt.addEventListener('mousedown', (e) => e.stopPropagation());
  let vibratoAmountSliderLabel = createDiv('vibrato amount').position(sliderX+140, sliderY);
  
  vibratoFreqSlider = createSlider(0, 10, 6, 0.1);
  vibratoFreqSlider.position(sliderX, sliderY+=sliderDy);
  vibratoFreqSlider.elt.addEventListener('mousedown', (e) => e.stopPropagation());
  let vibratoFreqSliderLabel = createDiv('vibrato frequency').position(sliderX+140, sliderY);

  wobbleAmountSlider = createSlider(0, 1.0, 0.5, 0.01);
  wobbleAmountSlider.position(sliderX, sliderY+=sliderDy);
  wobbleAmountSlider.elt.addEventListener('mousedown', (e) => e.stopPropagation());
  let wobbleSliderLabel = createDiv('pitch wobble').position(sliderX+140, sliderY);

  let muteCheckbox = createCheckbox('Mute', false);
  muteCheckbox.position(sliderX, sliderY+=sliderDy); 
  muteCheckbox.elt.addEventListener('mousedown', e => e.stopPropagation());
  muteCheckbox.changed(() => {
    setMuted(muteCheckbox.checked());
  });
}


//=================================================================================
// references to show: 
// https://en.wikipedia.org/wiki/Vowel_diagram
// https://www.yacavone.net/vowel-space/
// https://www.youtube.com/shorts/kNLMDOOkuHM - pink trombone
// https://www.youtube.com/watch?v=0LxiA5CFOzg - Vocal tract 3D models
// https://www.youtube.com/watch?v=S0CLA2bUB4o - minions
// https://www.youtube.com/watch?v=T9aia8EkIQQ - minions
// https://www.youtube.com/watch?v=JTlsu296ed8 - bebot robot synth
// https://www.youtube.com/watch?v=_8_HsEKlr6A - charlie brown teacher
// https://www.youtube.com/watch?v=dD_NdnYrDzY - Kagawa University talking robot
// https://www.youtube.com/watch?v=ocpWpPkxxos - Kagawa University talking robot
// https://www.youtube.com/watch?v=3HoDZVK3J24 - Animalese 
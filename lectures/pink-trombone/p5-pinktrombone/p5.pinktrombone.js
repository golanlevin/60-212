const tractLength = 44;  // lipStart in Pink Trombone
const tongueMin = 9;
const tongueMax = tractLength - 5;
const innerTongueDiameter = 2.05;
const outerTongueDiameter = 3.5;
let tongueIndex = 12.9;   
let tongueDiameter = 2.43;

let tractDiameterArray = [];

function createPinkTromboneSynthesizer() {
    Glottis.init();
    Tract.init();
    setRestDiameter();
    updateVocalTract();
}

function startPinkTromboneAudioSystem(){
    if (!AudioSystem.started) {
        AudioSystem.init();
        AudioSystem.startSound();
    }
}

// p5.js interfaces to Pink Trombone parameters
function setVibratoAmount(a){
  Glottis.vibratoAmount = a;
}
function setVibratoFrequency(f){
  Glottis.vibratoFrequency = f;
}
function setPitchWobbleAmount(a){
  Glottis.wobbleAmount = a;
}
function setPitch(p){
  Glottis.UIFrequency = p;
}
function setPitchByMidiNote(midiNoteFloat) { //  intended for 31 (G1)...72 (C5)
  let freq = 440.0 * Math.pow(2, (midiNoteFloat - 69) / 12);
  Glottis.UIFrequency = freq;
}
function setVoicing(v){
  v = constrain(v, 0, 1);
  Glottis.UITenseness = 1-Math.cos(v*Math.PI*0.5);
  Glottis.loudness = Math.pow(Glottis.UITenseness, 0.25);
}
function setNasality(n){
  Tract.velumTarget = lerp(0.00, 0.4, n);
}
function setTonguePosition(t) {
  tongueIndex = constrain(t, tongueMin, tongueMax);
}
function setTongueDiameter(d) {
  tongueDiameter = constrain(d, innerTongueDiameter, outerTongueDiameter);
}
function setMuted(bMuted){
    if (bMuted) {
        AudioSystem.bZeroVolume = true;
    } else {
        AudioSystem.bZeroVolume = false;
    }
}

function getVolume() {
    let sumSquares = 0;
    let block = AudioSystem.latestAudioBlock;
    for (let i = 0; i < block.length; i++) {
        sumSquares += block[i] * block[i];
    }
    let rms = Math.sqrt(sumSquares / block.length);
    return rms;
}

function getTractDiameterArray(){
    if (!tractDiameterArray || tractDiameterArray.length !== tractLength) {
        tractDiameterArray = new Float64Array(tractLength);
        for (let i = 0; i < tractLength; i++) {
            tractDiameterArray[i] = 1.0; // Default diameter
        }
    }
    return tractDiameterArray;
}

function setRestDiameter(){
    if (!tractDiameterArray || tractDiameterArray.length !== tractLength) {
        tractDiameterArray = new Float64Array(tractLength);
        for (let i = 0; i < tractLength; i++) {
            tractDiameterArray[i] = 1.0;
        }
    }

    // This mimics the restDiameter shape from Pink Trombone
    for (let i = 0; i < tractLength; i++) {
      let curve = 0; 
      if (i <= 6){
        curve = 0.6;
      } else if (i <= tongueMin){
        curve = 1.1;
      } else if (i >= tongueMax){
        curve = 1.5;
      } else {
        let gridOffset = 1.7; 
        var t = 1.1 * Math.PI*(tongueIndex - i)/(Tract.tipStart - Tract.bladeStart);
        var fixedTongueDiameter = 2+(tongueDiameter-2)/1.5;
        curve = (1.5-fixedTongueDiameter+ gridOffset )*Math.cos(t);
        if (i == Tract.bladeStart-2 || i == Tract.lipStart-1) curve *= 0.8;
        if (i == Tract.bladeStart || i == Tract.lipStart-2) curve *= 0.94;   
        curve = 1.5 - Math.min(Math.max(curve, -1.5), 1.5); 
      }
      tractDiameterArray[i] = 0.8*tractDiameterArray[i] + 0.2*curve;
    }
}

function updateVocalTract() {
    for (let i = 0; i < tractLength; i++) {
        Tract.targetDiameter[i] = tractDiameterArray[i];
    }
}


/*

P I N K   T R O M B O N E

Bare-handed procedural speech synthesis

version 1.1, March 2017
by Neil Thapen
venuspatrol.nfshost.com


Bibliography

Julius O. Smith III, "Physical audio signal processing for virtual musical instruments and audio effects."
https://ccrma.stanford.edu/~jos/pasp/

Story, Brad H. "A parametric model of the vocal tract area function for vowel and consonant simulation." 
The Journal of the Acoustical Society of America 117.5 (2005): 3231-3254.

Lu, Hui-Ling, and J. O. Smith. "Glottal source modeling for singing voice synthesis." 
Proceedings of the 2000 International Computer Music Conference. 2000.

Mullen, Jack. Physical modelling of the vocal tract with the 2D digital waveguide mesh. 
PhD thesis, University of York, 2006.


Copyright 2017 Neil Thapen 

Permission is hereby granted, free of charge, to any person obtaining a 
copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation 
the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the 
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in 
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
IN THE SOFTWARE.
*/


//=================================================================================
var UI = {
    touchesWithMouse: []
};

//=================================================================================
var Glottis =
{
    timeInWaveform : 0,
    oldFrequency : 140,
    newFrequency : 140,
    UIFrequency : 140,
    smoothFrequency : 140,
    oldTenseness : 0.6,
    newTenseness : 0.6,
    UITenseness : 0.6,
    totalTime : 0,
    vibratoAmount : 0.005,
    vibratoFrequency : 6,
    vibratoPhase : 0,
    intensity : 0,
    loudness : 1,
    isTouched : false,
    alwaysVoice : true,

    init : function(){
        this.setupWaveform(0);
    },
    
    runStep: function(lambda, noiseSource)
    {
        const timeStep = 1.0 / sampleRate;
        this.timeInWaveform += timeStep;
        this.totalTime += timeStep;

        if (this.timeInWaveform > this.waveformLength) {
            this.timeInWaveform -= this.waveformLength;
            this.setupWaveform(lambda);
        }

        // Periodic (voiced) component
        const voicedSignal = this.normalizedLFWaveform(this.timeInWaveform / this.waveformLength);
        const voiced = (this.isTouched || this.alwaysVoice) ? voicedSignal : 0;

        // Use full aspiration model with intensity
        const aspirationIntensity = 1.0; // hack // this.alwaysVoice ? 1.0 : this.intensity;
        const breathiness = (1 - Math.sqrt(this.UITenseness));
        const noiseMod = this.getNoiseModulator();
        let aspiration = aspirationIntensity * breathiness * noiseMod * noiseSource;

        // Natural variation
        // aspiration *= 0.25 + 0.03 * simplexNoise.simplex1(this.totalTime * 1.99);
        aspiration *= 0.20 + 0.02*simplexNoise.simplex1(this.totalTime * 1.99);

        // Combine with voiced signal
        return voiced + aspiration;
    },


    getNoiseModulator : function()
    {
        let voiced = 0.1+0.2*Math.max(0,Math.sin(Math.PI*2*this.timeInWaveform/this.waveformLength));
        return this.UITenseness* this.intensity * voiced + (1-this.UITenseness* this.intensity ) * 0.3;
    },
    

    finishBlock : function()
    {
      let noiseMod =  0.02 * simplexNoise.simplex1(this.totalTime * 4.07)
                    + 0.04 * simplexNoise.simplex1(this.totalTime * 2.15);
        let effectiveFreq = this.vibratoFrequency + noiseMod;
        let dt = AudioSystem.blockLength / sampleRate;
        this.vibratoPhase += 2 * Math.PI * effectiveFreq * dt;
        this.vibratoPhase %= 2 * Math.PI;
        let vibrato = this.vibratoAmount * Math.sin(this.vibratoPhase);
        vibrato += Glottis.wobbleAmount * 0.2 * simplexNoise.simplex1(this.totalTime * 0.98);
        vibrato += Glottis.wobbleAmount * 0.4 * simplexNoise.simplex1(this.totalTime * 0.5);

        if (this.UIFrequency>this.smoothFrequency) 
            this.smoothFrequency = Math.min(this.smoothFrequency * 1.1, this.UIFrequency);
        if (this.UIFrequency<this.smoothFrequency) 
            this.smoothFrequency = Math.max(this.smoothFrequency / 1.1, this.UIFrequency);
        this.oldFrequency = this.newFrequency;
        this.newFrequency = this.smoothFrequency * (1+vibrato);
        this.oldTenseness = this.newTenseness;
        this.newTenseness = this.UITenseness +
            0.1*simplexNoise.simplex1(this.totalTime*0.46)+0.05*simplexNoise.simplex1(this.totalTime*0.36);
        if (!this.isTouched && this.alwaysVoice) this.newTenseness += (3-this.UITenseness)*(1-this.intensity);
        
        if (this.isTouched || this.alwaysVoice) this.intensity += 0.13;
        else this.intensity -= 0.05;
        this.intensity = Math.clamp(this.intensity, 0, 1);

        // --- Keep intensity from falling too low when alwaysVoice is enabled ---
        if (this.alwaysVoice && this.intensity < 0.2) {
            this.intensity = 1.0;
        }
    },    
    

    setupWaveform : function(lambda)
    {
        this.frequency = this.oldFrequency*(1-lambda) + this.newFrequency*lambda;
        var tenseness = this.oldTenseness*(1-lambda) + this.newTenseness*lambda;
        this.Rd = 3*(1-tenseness);
        this.waveformLength = 1.0/this.frequency;
        
        var Rd = this.Rd;
        if (Rd<0.5) Rd = 0.5;
        if (Rd>2.7) Rd = 2.7;
        var output;
        // normalized to time = 1, Ee = 1
        var Ra = -0.01 + 0.048*Rd;
        var Rk = 0.224 + 0.118*Rd;
        var Rg = (Rk/4)*(0.5+1.2*Rk)/(0.11*Rd-Ra*(0.5+1.2*Rk));
        
        var Ta = Ra;
        var Tp = 1 / (2*Rg);
        var Te = Tp + Tp*Rk; //
        
        var epsilon = 1/Ta;
        var shift = Math.exp(-epsilon * (1-Te));
        var Delta = 1 - shift; //divide by this to scale RHS
           
        var RHSIntegral = (1/epsilon)*(shift - 1) + (1-Te)*shift;
        RHSIntegral = RHSIntegral/Delta;
        
        var totalLowerIntegral = - (Te-Tp)/2 + RHSIntegral;
        var totalUpperIntegral = -totalLowerIntegral;
        
        var omega = Math.PI/Tp;
        var s = Math.sin(omega*Te);
        var y = -Math.PI*s*totalUpperIntegral / (Tp*2);
        var z = Math.log(y);
        var alpha = z/(Tp/2 - Te);
        var E0 = -1 / (s*Math.exp(alpha*Te));
        this.alpha = alpha;
        this.E0 = E0;
        this.epsilon = epsilon;
        this.shift = shift;
        this.Delta = Delta;
        this.Te=Te;
        this.omega = omega;
    },
    
 
    normalizedLFWaveform: function(t)
    {     
        if (t>this.Te) output = (-Math.exp(-this.epsilon * (t-this.Te)) + this.shift)/this.Delta;
        else output = this.E0 * Math.exp(this.alpha*t) * Math.sin(this.omega * t);
     
        return output * this.intensity * this.loudness;
    }
}


//=================================================================================
var AudioSystem = 
{   
    blockLength : 512,
    latestAudioBlock : new Float32Array(512),
    blockTime : 1,
    started : false,
    bZeroVolume : false,


    init : function ()
    {
        window.AudioContext = window.AudioContext||window.webkitAudioContext;
        this.audioContext = new window.AudioContext();      
        sampleRate = this.audioContext.sampleRate;
        this.blockTime = this.blockLength/sampleRate;
    },
    
    startSound : function()
    {
        if (this.started) return;
        this.started = true;

        //scriptProcessor may need a dummy input channel on iOS
        this.scriptProcessor = this.audioContext.createScriptProcessor(this.blockLength, 2, 1);
        this.scriptProcessor.connect(this.audioContext.destination); 
        this.scriptProcessor.onaudioprocess = AudioSystem.doScriptProcessor;

        var whiteNoise = this.createWhiteNoiseNode(2*sampleRate); // 2 seconds of noise
        
        var aspirateFilter = this.audioContext.createBiquadFilter();
        aspirateFilter.type = "bandpass";
        aspirateFilter.frequency.value = 500;
        aspirateFilter.Q.value = 0.5;
        whiteNoise.connect(aspirateFilter);
        aspirateFilter.connect(this.scriptProcessor);  
        
        var fricativeFilter = this.audioContext.createBiquadFilter();
        fricativeFilter.type = "bandpass";
        fricativeFilter.frequency.value = 1000;
        fricativeFilter.Q.value = 0.5;
        whiteNoise.connect(fricativeFilter);
        fricativeFilter.connect(this.scriptProcessor);        
        
        whiteNoise.start(0);
    },
    
    createWhiteNoiseNode : function(frameCount)
    {
        var myArrayBuffer = this.audioContext.createBuffer(1, frameCount, sampleRate);

        var nowBuffering = myArrayBuffer.getChannelData(0);
        for (var i = 0; i < frameCount; i++) 
        {
            nowBuffering[i] = Math.random();// gaussian();
        }

        var source = this.audioContext.createBufferSource();
        source.buffer = myArrayBuffer;
        source.loop = true;

        return source;
    },
    
    doScriptProcessor : function(event) 
    {
        var inputArray1 = event.inputBuffer.getChannelData(0);
        var inputArray2 = event.inputBuffer.getChannelData(1);
        var outArray = event.outputBuffer.getChannelData(0);
        for (var j = 0, N = outArray.length; j < N; j++)
        {
            var lambda1 = j/N;
            var lambda2 = (j+0.5)/N;
            var glottalOutput = Glottis.runStep(lambda1, inputArray1[j]); 
            
            var vocalOutput = 0;
            //Tract runs at twice the sample rate 
            Tract.runStep(glottalOutput, inputArray2[j], lambda1);
            vocalOutput += Tract.lipOutput + Tract.noseOutput;
            Tract.runStep(glottalOutput, inputArray2[j], lambda2);
            vocalOutput += Tract.lipOutput + Tract.noseOutput;
            let sample = AudioSystem.bZeroVolume ? 0.0 : vocalOutput * 0.5;
            outArray[j] = sample;

            AudioSystem.latestAudioBlock[j] = sample;  // <-- store for volume calculation
        }
        Glottis.finishBlock();
        Tract.finishBlock();
    },
    
    mute : function()
    {
        this.scriptProcessor.disconnect();
    },
    
    unmute : function()
    {
        this.scriptProcessor.connect(this.audioContext.destination); 
    }
    
}


//=================================================================================
var Tract = 
{
    n : 44,
    bladeStart : 10,
    tipStart : 32,
    lipStart : 39,
    R : [], //component going right
    L : [], //component going left
    reflection : [],
    junctionOutputR : [],
    junctionOutputL : [],
    maxAmplitude : [],
    tractDiameterArray : [],
    restDiameter : [],
    targetDiameter : [],
    newDiameter : [],
    A : [],
    glottalReflection : 0.85, // 0.75 
    lipReflection : -0.90, //-0.85,
    lastObstruction : -1,
    fade : 1.0, //0.9999,
    movementSpeed : 15, //cm per second
    transients : [],
    lipOutput : 0,
    noseOutput : 0,
    velumTarget : 0.01,

    init : function()
    {
        this.bladeStart = Math.floor(this.bladeStart*this.n/44);
        this.tipStart = Math.floor(this.tipStart*this.n/44);
        this.lipStart = Math.floor(this.lipStart*this.n/44);        
        this.tractDiameterArray = new Float64Array(this.n);
        this.restDiameter = new Float64Array(this.n);
        this.targetDiameter = new Float64Array(this.n);
        this.newDiameter = new Float64Array(this.n);
        for (var i=0; i<this.n; i++)
        {
            var d = 0;
            if (i<7*this.n/44-0.5) d = 0.6;
            else if (i<12*this.n/44) d = 1.1;
            else d = 1.5;
            this.tractDiameterArray[i] = this.restDiameter[i] = this.targetDiameter[i] = this.newDiameter[i] = d;
        }
        this.R = new Float64Array(this.n);
        this.L = new Float64Array(this.n);
        this.reflection = new Float64Array(this.n+1);
        this.newReflection = new Float64Array(this.n+1);
        this.junctionOutputR = new Float64Array(this.n+1);
        this.junctionOutputL = new Float64Array(this.n+1);
        this.A =new Float64Array(this.n);
        this.maxAmplitude = new Float64Array(this.n);
        
        this.noseLength = Math.floor(28*this.n/44)
        this.noseStart = this.n-this.noseLength + 1;
        this.noseR = new Float64Array(this.noseLength);
        this.noseL = new Float64Array(this.noseLength);
        this.noseJunctionOutputR = new Float64Array(this.noseLength+1);
        this.noseJunctionOutputL = new Float64Array(this.noseLength+1);        
        this.noseReflection = new Float64Array(this.noseLength+1);
        this.noseDiameter = new Float64Array(this.noseLength);
        this.noseA = new Float64Array(this.noseLength);
        this.noseMaxAmplitude = new Float64Array(this.noseLength);
        for (var i=0; i<this.noseLength; i++)
        {
            var diam;
            var d = 2*(i/this.noseLength);
            if (d<1) diam = 0.4+1.6*d;
            else diam = 0.5+1.5*(2-d);
            diam = Math.min(diam, 1.9);
            this.noseDiameter[i] = diam;
        }       
        this.newReflectionLeft = this.newReflectionRight = this.newReflectionNose = 0;
        this.calculateReflections();        
        this.calculateNoseReflections();
        this.noseDiameter[0] = this.velumTarget;
    },     
    
    reshapeTract : function(deltaTime)
    {
        var amount = deltaTime * this.movementSpeed; ;    
        var newLastObstruction = -1;
        for (var i=0; i<this.n; i++)
        {
            var diam = this.tractDiameterArray[i];
            var targetDiameter = this.targetDiameter[i];
            if (diam <= 0) newLastObstruction = i;
            var slowReturn; 
            if (i<this.noseStart) slowReturn = 0.6;
            else if (i >= this.tipStart) slowReturn = 1.0; 
            else slowReturn = 0.6+0.4*(i-this.noseStart)/(this.tipStart-this.noseStart);
            this.tractDiameterArray[i] = Math.moveTowards(diam, targetDiameter, slowReturn*amount, 2*amount);
        }
        if (this.lastObstruction>-1 && newLastObstruction == -1 && this.noseA[0]<0.05)
        {
            this.addTransient(this.lastObstruction);
        }
        this.lastObstruction = newLastObstruction;
        
        amount = deltaTime * this.movementSpeed; 
        this.noseDiameter[0] = Math.moveTowards(this.noseDiameter[0], this.velumTarget, 
                amount*0.25, amount*0.1);
        this.noseA[0] = this.noseDiameter[0]*this.noseDiameter[0];        
    },


    calculateReflections: function () {
        const MIN_DIAMETER = 0.001; // mm
        const MIN_AREA = MIN_DIAMETER * MIN_DIAMETER;

        // Compute safe areas from clamped diameters
        for (let i = 0; i < this.n; i++) {
            let d = Math.max(this.tractDiameterArray[i], MIN_DIAMETER);
            this.A[i] = d * d; // ignore π, as before
        }

        // Compute internal reflection coefficients
        for (let i = 1; i < this.n; i++) {
            const A1 = this.A[i - 1];
            const A2 = this.A[i];

            if ((A1 + A2) < 1e-8) {
                this.newReflection[i] = 0.0; // no energy flows
            } else {
                this.newReflection[i] = (A1 - A2) / (A1 + A2);
            }

            this.reflection[i] = this.newReflection[i];
        }

        // Junction with nose
        const AnoseL = this.A[this.noseStart];
        const AnoseR = this.A[this.noseStart + 1];
        const AnoseN = Math.max(this.noseA[0], MIN_AREA);
        const sum = AnoseL + AnoseR + AnoseN;

        if (sum < 1e-8) {
            this.newReflectionLeft = this.newReflectionRight = this.newReflectionNose = 0.0;
        } else {
            this.newReflectionLeft = (2 * AnoseL - sum) / sum;
            this.newReflectionRight = (2 * AnoseR - sum) / sum;
            this.newReflectionNose = (2 * AnoseN - sum) / sum;
        }

        this.reflectionLeft = this.newReflectionLeft;
        this.reflectionRight = this.newReflectionRight;
        this.reflectionNose = this.newReflectionNose;
    },
    

    calculateNoseReflections: function () {
        const MIN_DIAMETER = 0.001;
        const MIN_AREA = MIN_DIAMETER * MIN_DIAMETER;

        // Clamp diameters and compute safe areas
        for (let i = 0; i < this.noseLength; i++) {
            let d = Math.max(this.noseDiameter[i], MIN_DIAMETER);
            this.noseA[i] = d * d;
        }

        // Calculate reflection coefficients safely
        for (let i = 1; i < this.noseLength; i++) {
            const A1 = this.noseA[i - 1];
            const A2 = this.noseA[i];

            if ((A1 + A2) < 1e-8) {
                this.noseReflection[i] = 0.0;
            } else {
                this.noseReflection[i] = (A1 - A2) / (A1 + A2);
            }
        }
    },
    
    runStep : function(glottalOutput, turbulenceNoise, lambda)
    {
        var updateAmplitudes = (Math.random()<0.1);
    
        //mouth
        this.processTransients();
        this.addTurbulenceNoise(turbulenceNoise);

        //this.glottalReflection = -0.8 + 1.6 * Glottis.newTenseness;
        this.lipReflection = Math.clamp(this.lipReflection, -0.99, 0.00);
        this.glottalReflection = Math.clamp(this.glottalReflection, 0.0, 0.99);
        this.junctionOutputR[0] = this.L[0] * this.glottalReflection + glottalOutput;
        this.junctionOutputL[this.n] = this.R[this.n-1] * this.lipReflection; 
        
        for (var i=1; i<this.n; i++)
        {
            var r = this.reflection[i] * (1-lambda) + this.newReflection[i]*lambda;
            var w = r * (this.R[i-1] + this.L[i]);
            this.junctionOutputR[i] = this.R[i-1] - w;
            this.junctionOutputL[i] = this.L[i] + w;
        }    
        
        //now at junction with nose
        var i = this.noseStart;
        var r = this.newReflectionLeft * (1-lambda) + this.reflectionLeft*lambda;
        this.junctionOutputL[i] = r*this.R[i-1]+(1+r)*(this.noseL[0]+this.L[i]);
        r = this.newReflectionRight * (1-lambda) + this.reflectionRight*lambda;
        this.junctionOutputR[i] = r*this.L[i]+(1+r)*(this.R[i-1]+this.noseL[0]);     
        r = this.newReflectionNose * (1-lambda) + this.reflectionNose*lambda;
        this.noseJunctionOutputR[0] = r*this.noseL[0]+(1+r)*(this.L[i]+this.R[i-1]);
         
        for (var i=0; i<this.n; i++)
        {          
            this.R[i] = this.junctionOutputR[i]*0.999;
            this.L[i] = this.junctionOutputL[i+1]*0.999; 
            
            //this.R[i] = Math.clamp(this.junctionOutputR[i] * this.fade, -1, 1);
            //this.L[i] = Math.clamp(this.junctionOutputL[i+1] * this.fade, -1, 1);    
            
            if (updateAmplitudes)
            {   
                var amplitude = Math.abs(this.R[i]+this.L[i]);
                if (amplitude > this.maxAmplitude[i]) this.maxAmplitude[i] = amplitude;
                else this.maxAmplitude[i] *= 0.999;
            }
        }

        this.lipOutput = this.R[this.n-1];
        
        //nose     
        this.noseJunctionOutputL[this.noseLength] = this.noseR[this.noseLength-1] * this.lipReflection; 
        
        for (var i=1; i<this.noseLength; i++)
        {
            var w = this.noseReflection[i] * (this.noseR[i-1] + this.noseL[i]);
            this.noseJunctionOutputR[i] = this.noseR[i-1] - w;
            this.noseJunctionOutputL[i] = this.noseL[i] + w;
        }
        
        for (var i=0; i<this.noseLength; i++)
        {
            this.noseR[i] = this.noseJunctionOutputR[i] * this.fade;
            this.noseL[i] = this.noseJunctionOutputL[i+1] * this.fade;   
            
            //this.noseR[i] = Math.clamp(this.noseJunctionOutputR[i] * this.fade, -1, 1);
            //this.noseL[i] = Math.clamp(this.noseJunctionOutputL[i+1] * this.fade, -1, 1);    
            
            if (updateAmplitudes)
            {
                var amplitude = Math.abs(this.noseR[i]+this.noseL[i]);
                if (amplitude > this.noseMaxAmplitude[i]) this.noseMaxAmplitude[i] = amplitude;
                else this.noseMaxAmplitude[i] *= 0.999;
            }
        }

        this.noseOutput = this.noseR[this.noseLength-1];
       
    },
    
    finishBlock : function()
    {         
        this.reshapeTract(AudioSystem.blockTime);
        this.calculateReflections();
    },
    
    addTransient : function(position)
    {
        var trans = {}
        trans.position = position;
        trans.timeAlive = 0;
        trans.lifeTime = 0.2;
        trans.strength = 0.3;
        trans.exponent = 200;
        this.transients.push(trans);
    },
    
    processTransients : function()
    {
        for (var i = 0; i < this.transients.length; i++)  
        {
            var trans = this.transients[i];
            var amplitude = trans.strength * Math.pow(2, -trans.exponent * trans.timeAlive);
            this.R[trans.position] += amplitude/2;
            this.L[trans.position] += amplitude/2;
            trans.timeAlive += 1.0/(sampleRate*2);
        }
        for (var i=this.transients.length-1; i>=0; i--)
        {
            var trans = this.transients[i];
            if (trans.timeAlive > trans.lifeTime)
            {
                this.transients.splice(i,1);
            }
        }
    },
    
    addTurbulenceNoise : function(turbulenceNoise)
    {
        for (var j=0; j<UI.touchesWithMouse.length; j++)
        {
            var touch = UI.touchesWithMouse[j];
            if (touch.index<2 || touch.index>Tract.n) continue;
            if (touch.diameter<=0) continue;            
            var intensity = touch.fricative_intensity;
            if (intensity == 0) continue;
            this.addTurbulenceNoiseAtIndex(0.66*turbulenceNoise*intensity, touch.index, touch.diameter);
        }
    },
    
    addTurbulenceNoiseAtIndex : function(turbulenceNoise, index, diam)
    {   
        var i = Math.floor(index);
        var delta = index - i;
        turbulenceNoise *= Glottis.getNoiseModulator();
        var thinness0 = Math.clamp(8*(0.7-diam),0,1);
        var openness = Math.clamp(30*(diam-0.3), 0, 1);
        var noise0 = turbulenceNoise*(1-delta)*thinness0*openness;
        var noise1 = turbulenceNoise*delta*thinness0*openness;
        this.R[i+1] += noise0/2;
        this.L[i+1] += noise0/2;
        this.R[i+2] += noise1/2;
        this.L[i+2] += noise1/2;
    }
};





/**********************************************************************************/
/**********************************************************************************/

/*
 * A speed-improved perlin and simplex noise algorithms for 2D.
 *
 * Based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 * Converted to Javascript by Joseph Gentle.
 *
 * Version 2012-03-09
 *
 * This code was placed in the public domain by its original author,
 * Stefan Gustavson. You may use it as you see fit, but
 * attribution is appreciated.
 *
 */

(function(global){
  var module = global.simplexNoise = {};

  function Grad(x, y, z) {
    this.x = x; this.y = y; this.z = z;
  }
  
  Grad.prototype.dot2 = function(x, y) {
    return this.x*x + this.y*y;
  };

  Grad.prototype.dot3 = function(x, y, z) {
    return this.x*x + this.y*y + this.z*z;
  };

  var grad3 = [new Grad(1,1,0),new Grad(-1,1,0),new Grad(1,-1,0),new Grad(-1,-1,0),
               new Grad(1,0,1),new Grad(-1,0,1),new Grad(1,0,-1),new Grad(-1,0,-1),
               new Grad(0,1,1),new Grad(0,-1,1),new Grad(0,1,-1),new Grad(0,-1,-1)];

  var p = [151,160,137,91,90,15,
  131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
  190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
  88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
  77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
  102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
  135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
  5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
  223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
  129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
  251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
  49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
  138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];
  // To remove the need for index wrapping, double the permutation table length
  var perm = new Array(512);
  var gradP = new Array(512);

  // This isn't a very good seeding function, but it works ok. It supports 2^16
  // different seed values. Write something better if you need more seeds.
  module.seed = function(seed) {
    if(seed > 0 && seed < 1) {
      // Scale the seed out
      seed *= 65536;
    }

    seed = Math.floor(seed);
    if(seed < 256) {
      seed |= seed << 8;
    }

    for(var i = 0; i < 256; i++) {
      var v;
      if (i & 1) {
        v = p[i] ^ (seed & 255);
      } else {
        v = p[i] ^ ((seed>>8) & 255);
      }

      perm[i] = perm[i + 256] = v;
      gradP[i] = gradP[i + 256] = grad3[v % 12];
    }
  };

  module.seed(Date.now());

  /*
  for(var i=0; i<256; i++) {
    perm[i] = perm[i + 256] = p[i];
    gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
  }*/

  // Skewing and unskewing factors for 2, 3, and 4 dimensions
  var F2 = 0.5*(Math.sqrt(3)-1);
  var G2 = (3-Math.sqrt(3))/6;

  var F3 = 1/3;
  var G3 = 1/6;

  // 2D simplex noise
  module.simplex2 = function(xin, yin) {
    var n0, n1, n2; // Noise contributions from the three corners
    // Skew the input space to determine which simplex cell we're in
    var s = (xin+yin)*F2; // Hairy factor for 2D
    var i = Math.floor(xin+s);
    var j = Math.floor(yin+s);
    var t = (i+j)*G2;
    var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
    var y0 = yin-j+t;
    // For the 2D case, the simplex shape is an equilateral triangle.
    // Determine which simplex we are in.
    var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
    if(x0>y0) { // lower triangle, XY order: (0,0)->(1,0)->(1,1)
      i1=1; j1=0;
    } else {    // upper triangle, YX order: (0,0)->(0,1)->(1,1)
      i1=0; j1=1;
    }
    // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
    // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
    // c = (3-sqrt(3))/6
    var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
    var y1 = y0 - j1 + G2;
    var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
    var y2 = y0 - 1 + 2 * G2;
    // Work out the hashed gradient indices of the three simplex corners
    i &= 255;
    j &= 255;
    var gi0 = gradP[i+perm[j]];
    var gi1 = gradP[i+i1+perm[j+j1]];
    var gi2 = gradP[i+1+perm[j+1]];
    // Calculate the contribution from the three corners
    var t0 = 0.5 - x0*x0-y0*y0;
    if(t0<0) {
      n0 = 0;
    } else {
      t0 *= t0;
      n0 = t0 * t0 * gi0.dot2(x0, y0);  // (x,y) of grad3 used for 2D gradient
    }
    var t1 = 0.5 - x1*x1-y1*y1;
    if(t1<0) {
      n1 = 0;
    } else {
      t1 *= t1;
      n1 = t1 * t1 * gi1.dot2(x1, y1);
    }
    var t2 = 0.5 - x2*x2-y2*y2;
    if(t2<0) {
      n2 = 0;
    } else {
      t2 *= t2;
      n2 = t2 * t2 * gi2.dot2(x2, y2);
    }
    // Add contributions from each corner to get the final noise value.
    // The result is scaled to return values in the interval [-1,1].
    return 70 * (n0 + n1 + n2);
  };
  
  module.simplex1 = function(x)
  {
    return module.simplex2(x*1.2, -x*0.7);
  };

  
})(this);


Math.clamp = function(number, min, max) {
    if (number<min) return min;
    else if (number>max) return max;
    else return number;
}

Math.moveTowards = function(current, target, amount)
{
    if (current<target) return Math.min(current+amount, target);
    else return Math.max(current-amount, target);
}

Math.moveTowards = function(current, target, amountUp, amountDown)
{
    if (current<target) return Math.min(current+amountUp, target);
    else return Math.max(current-amountDown, target);
}

Math.gaussian = function()
{
    var s = 0;
    for (var c=0; c<16; c++) s+=Math.random();
    return (s-8)/4;
}
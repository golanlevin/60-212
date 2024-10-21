# Programming GLSL shaders

*Topic: pixel-based programming; data-parallel computing; SIMD (Single Instruction, Multiple Data) processing, where the same operation is applied to multiple data points (pixels) simultaneously.*

✅ 
👁️
💤

### Inspirations ✅ 

* [Char Stiles, livecoding practice](http://charstiles.com/shader/)
* [Melissa Wiederrecht, *Cosmic Rays*](https://melissawiederrecht.com/artwork/cosmic-rays), 2023
* [Loie Hollowell, *Contractions*](https://www.artblocks.io/curated/collections/contractions-by-loie-hollowell?tab=Artworks), 2022
* [Junia Farquhar, *Dipolar*](https://www.artblocks.io/curated/collections/dipolar-by-junia-farquhar?tab=Artworks), 2022
* [William Mapan, *Anticyclone*](https://www.artblocks.io/curated/collections/anticyclone-by-william-mapan), 2022
* [John Gerrard, *Petro National*](https://www.artblocks.io/curated/collections/petro-national-by-john-gerrard), 2022
* [Mathias Isaksen, *Gumbo*](https://www.artblocks.io/curated/collections/gumbo-by-mathias-isaksen?tab=Artworks), 2023
* [Zach Lieberman, various works](https://www.instagram.com/zach.lieberman/)

### Tools

* 💤 [Tixy.land](https://tixy.land/)
* 💤 [Google Sheets shader example](https://docs.google.com/spreadsheets/d/1BVeicBmRxTop6quL4ZNBPcoAVWuPXJy6YjqGcTsA4wY/edit?usp=sharing)
* ✅ [*The Force* shader editor by Shawn Lawson](https://shawnlawson.github.io/The_Force/)
* ✅ [*ShaderBooth* shader editor by Max Bittker](https://shaderbooth.com/)

### p5 Shader Template code: 

* ✅ [p5 + Simple shader with uniforms](https://openprocessing.org/sketch/2405238) at OpenProcessing
* 💤 [p5 + Simple shader in p5.js](https://editor.p5js.org/golan/sketches/VNn5GTF94) at Editor.p5js.org
* ✅ [p5 + Shader applied to BMWalker data](https://openprocessing.org/sketch/2405195) at OpenProcessing


### Quick GLSL Facts (Quirks and Gotchas vs. p5.js) ✅ 

* GLSL is not JavaScript, even though it looks similar; it's more like C. 
* A vertex shader is necessary, even if you're just doing fragment (pixel) operations.
* Semicolons are *mandatory*, not optional. 
* Variables must be declared with *types*. Use `int`, `float`, `vec2`, `vec3`, etc. 
* The input values (arguments) and return values of functions are also typed.
* Floating-point constants must be formatted as such (e.g. `3.0`, not `3` which would be interpreted as an integer). Thus numeric constants are interpreted differently depending on whether they have a decimal point. Note that the syntax `5.0f` is illegal. 
* You'll need to explicitly convert from ints to floats: `int a = 3; float b = float(a);`
* Functions and global constants must be defined before they are used (i.e. earlier in the file).
* Vectors support many math operations. `pow(someVec3, 2.0)` will square all three values in `someVec3`. Math can operate on vectors; e.g. `pow(vec2(x,y),vec2(a,b))`
* There's no `random` function! You'll have to copy-paste someone else's, or devise your own.
* There's no `PI` constant! You'll need to define it yourself.
* Values used for coordinates and pixel colors are all between 0...1, not 0...255.
* The origin is in the lower-left; `y` is reversed from p5.js.
* Data from the outside, such as mouse and current time, must be passed in as `uniform`.
* Vector components can be accessed with: `.xyzw` and `.rgba`
* `someVec3.xy = 3.0;` will set the x and y components of `someVec3` to 3.0.
* You can do component *swizzling*: `vec4 a = vec4(1.0,2.0,3.0,4.0); vec4 b = a.zyyw;`


### Some notable GLSL math functions: 👁️

* `type mod (type x, float y)`
* `type fract (type x)`
* `type inversesqrt (type x)`
* `type sign (type x)`
* `type clamp (type x, type minV, type maxV)`
* `type mix (type x, type y, type a)	`
* `type step (type edge, type x)`
* `type smoothstep (type a, type b, type x)`
* `float length (type x)`
* `float distance (type p0, type p1)	`
* `float dot (type x, type y)`
* `vec3 cross (vec3 x, vec3 y)`
* `type normalize (type x)`

### Introductory Readings & Resources

* [Book of Shaders](https://thebookofshaders.com/)
* [Welcome to p5.js Shaders](https://itp-xstory.github.io/p5js-shaders/#/) by Casey Conchinha and Louise Lessél.
* ✅ [p5+shaders](https://github.com/aferriss/p5jsShaderExamples?tab=readme-ov-file) by Adam Ferris 
* 👁️ [p5 Shader Reference](https://archive.p5js.org/reference/#/p5/createShader)
* 👁️ [GLSL Function Documentation](https://gist.github.com/markknol/d06c0167c75ab5c6720fe9083e4319e1)

### Intermediate Readings & Resources

* [Inigo Quilez (iq) Articles](https://iquilezles.org/articles/)
  * [iq 2D Signed Distance Functions](https://iquilezles.org/articles/distfunctions2d/)
  * [iq 2D SDF Analytic Gradients](https://iquilezles.org/articles/distgradfunctions2d/)
  * [iq Smooth Min Function](https://iquilezles.org/articles/smin/)
  * [iq Palette Functions](https://iquilezles.org/articles/palettes/)
  * [iq Useful Little Functions](https://iquilezles.org/articles/functions/)
  * [iq Noise warping, i.e. domain distortion](https://iquilezles.org/articles/warp/)

### (DIY) Noise functions: 

* [Value noise](https://www.shadertoy.com/view/lsf3WH)
* [Gradient noise](https://www.shadertoy.com/view/XdXGW8)
* [Wavelet noise](https://www.shadertoy.com/view/tldSRj)
* [Simplex noise](https://www.shadertoy.com/view/Msf3WH)
* [Perlin-Worley noise](https://www.shadertoy.com/view/3dVXDc)
* [Periodic noise](https://www.shadertoy.com/view/3d2GRh)  

### More Demos and Extensions

* [Lygia shader library](https://lygia.xyz/)
* [Lygia 2D Examples in p5](https://editor.p5js.org/patriciogonzalezvivo/sketches/XCkTzoyB3)
* [Emboss](https://www.shadertoy.com/view/ltfGWf)
* [Newb Box Blur](https://www.shadertoy.com/view/MddGzs)
* [Cosine Palettes](https://www.shadertoy.com/view/tlSBDw)
* [Fields](https://www.shadertoy.com/view/MtKBzw)
* [Metaballs](https://www.shadertoy.com/view/4dj3zh)

### Viewings

* [The SDF of a Line Segment](https://www.youtube.com/watch?v=PMltMdi1Wzg), Inigo Quilez
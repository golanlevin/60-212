### Quick GLSL Facts (versus p5.js)

* GLSL is not JavaScript, even though it looks similar; it's more like C. 
* Semicolons are *mandatory*, not optional. 
* Variables must be declared with *types*. Use `int`, `float`, `vec2`, `vec3`, etc. 
* The input values (arguments) and return values of functions are also typed.
* Numeric constants are interpreted differently depending on whether they have a decimal point. If you want 5 as a float, you must use `5.0`. Note that the syntax `5.0f` is illegal. 
* You'll need to explicitly convert from ints to floats: `int a = 3; float b = float(a);`
* Functions and global constants must be defined before they are used (i.e. earlier in the file).
* Vectors support many math operations. `pow(someVec3, 2.0)` will square all three values in `someVec3`.
* There's no `random` function! You'll have to copy-paste someone else's, or devise your own.
* There's no `PI` constant! You'll need to define it yourself.
* Values used for coordinates and pixel colors are all between 0...1.
* The origin is in the lower-left; `y` is reversed from p5.js.
* Data from the outside, such as mouse and current time, must be passed in as `uniform`.
* Vector components can be accessed with: `.xyzw` and `.rgba`
* `someVec3.xy = 3.0;` will set the x and y components of `someVec3` to 3.0.
* You can do component *swizzling*: `vec4 a = vec4(1.0,2.0,3.0,4.0); vec4 b = a.zyyw;`

### Some notable GLSL math functions:

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

And 

* [The Book of Shaders](https://thebookofshaders.com/) by Patricio Gonzalez Vivo and Jen Lowe
* [Welcome to p5.js Shaders](https://itp-xstory.github.io/p5js-shaders/#/) by Casey Conchinha and Louise Lessél.
* [p5+shaders](https://github.com/aferriss/p5jsShaderExamples?tab=readme-ov-file) by Adam Ferris 
* [p5 Shader Reference](https://archive.p5js.org/reference/#/p5/createShader)

Useful articles: 

* [IQ's articles](https://iquilezles.org/articles/)
* [Useful Little Functions](https://iquilezles.org/articles/functions/)
* [2D Signed Distance Functions](https://iquilezles.org/articles/distfunctions2d/)
* [2D SDF Analytic Gradients](https://iquilezles.org/articles/distgradfunctions2d/)
* [Noise warping, or domain distortion](https://iquilezles.org/articles/warp/)
* [GLSL Functions](https://gist.github.com/markknol/d06c0167c75ab5c6720fe9083e4319e1)

Noise functions: 

* [Value noise](https://www.shadertoy.com/view/lsf3WH)
* [Gradient noise](https://www.shadertoy.com/view/XdXGW8)
* [Wavelet noise](https://www.shadertoy.com/view/tldSRj)
* [Simplex noise](https://www.shadertoy.com/view/Msf3WH)
* [Perlin-Worley noise](https://www.shadertoy.com/view/3dVXDc)
* [Periodic noise](https://www.shadertoy.com/view/3d2GRh)  

And

* [Lygia 2D Examples in p5](https://editor.p5js.org/patriciogonzalezvivo/sketches/XCkTzoyB3)
* [Emboss](https://www.shadertoy.com/view/ltfGWf)
* [Newb Box Blur](https://www.shadertoy.com/view/MddGzs)
* [Cosine Palettes](https://www.shadertoy.com/view/tlSBDw)
* [Fields](https://www.shadertoy.com/view/MtKBzw)
* [Metaballs](https://www.shadertoy.com/view/4dj3zh)

p5 Template code: 

* [Simple Shader with Uniforms](https://openprocessing.org/sketch/2405238) at OpenProcessing
* [Shader applied to BMWalker data](https://openprocessing.org/sketch/2405195) at OpenProcessing




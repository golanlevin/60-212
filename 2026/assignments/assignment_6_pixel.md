# Assignment Set #6: Pixel Logics


As follows:

* 6.1. [Tixy.Land](#61-tixyland) *(5%, 15 minutes, due Monday 10/19)*
* 6.2. [Animated Composition for Flipdot Display](#62-animated-composition-for-flipdot-display) *(10%, 30 minutes, due 10/19)*
* 6.3. [Custom Pixel](#63-custom-pixel) *(30%, 2 hours, due XXXX)*
* 6.4. [Looking Outwards](#64-looking-outwards) *(15%, 1 hour)*
* 6.5. [Shader Composition](#65-shader-composition) *(40%, 3 hours)*


---

## 6.1. Tixy.Land

![tixy.png](../../2024/assignments/images/tixy.png)

*(5%, 15 minutes, due Monday 10/19)* In this very lightweight exercise, we get our first exposure to "data-parallel computing", or "SIMD (Single Instruction, Multiple Data) processing", wherein the same operation is applied to multiple data points (pixels) simultaneously. 

We will use [**tixy.land**](https://tixy.land/), a tiny online environment for JavaScript "code golfing" in which you will write a tiny program that is applied to a 16x16 grid of pixels. In Tixy, each "pixel" executes a common program whose only inputs are the current time (`t`), its index (`i`), and its `x` and `y` coordinates. *Now:*

To get started, **experiment** for a few minutes with the creative coding toolkit at [https://tixy.land](https://tixy.land/). When you feel like you've made something appealing, **paste** the URL of your creation in the Discord channel, `61-tixyland`. **Describe** your project with an evocative title.


---

## 6.2. Animated Composition for Flipdot Display

*(10%, 20 minutes, due Monday 10/19.) Using a SIMD approach, design an animation for a flipdot display.*

![flipdot_1.gif](https://raw.githubusercontent.com/golanlevin/p5-flipdots/main/img/p5_flipdots_loop.gif)

Flip-dot (or flip-disc) displays are widely used in transportation signage. Because of their extremely constrained colors and low resolution, they are an interesting platform for introducing foundational concepts in SIMD (Single Instruction, Multiple Data) programming, i.e. data-parallel computing or shader programming. In this project, you will control an electromechanical flip-dot display by writing a single-line JavaScript formula, similar to Tixy.Land. 

*Now:*

* Birefly **view** the following two artworks by Andreas Gysin & Sidi Vanetti: [*Digits 2*](https://vimeo.com/218010040), and [*Dots 4*](https://vimeo.com/160749809). Optionally, if you like this work, feel free to check out [this interview with the artists](https://verse.works/journal/verse-meets-andreas-gysin-sidi-vanetti), and some [related works by BreakfastNY](https://breakfaststudio.com/works/tides) ([1](https://theartistbreakfast.com/works/billion-dollar-arcade-series), [2](https://theartistbreakfast.com/works/world-skies-purple-sunset), [3](https://theartistbreakfast.com/works/orbital-debris)).
* **Study** the screenshot below, and **experiment** with our flipdot [**control software here**](https://openprocessing.org/sketch/2405498). **Observe** how there is a text field for composing a JavaScript expression. The expression must produce values that are either greater than zero (for *white*), or less-than-or-equal-to zero (for *black*). The expression controls the value of each pixel in the display, based on its `x`, `y`, `i` (index), and `t` (time, counted using `frameCount`). Note that, unlike Tixy.Land, there is *also* a variable `P[]` which contains a one-dimensional array of the pixels' previous states. 
* Here are some examples of programs that show off some features — using our flipdot [control software](https://openprocessing.org/sketch/2405498), **try** them out. **Observe** that you have access to the p5.js math functions, such as `noise()`. 
	* `sin(t-sqrt((x-7.5)**2+(y-6)**2))` — p5's math functions
	* `noise (x/10.0, y/10.0, t/10.0) - 0.5` — p5's 3D Perlin noise
	* `x < map(mouseX,30,width-30,0,28)` — mouse interactions
	* `(t==0)?(random()<0.1):P[(i+1)%(NUM_COLS * NUM_ROWS)]` — uses `P[]`
	* `((x+t)^y)%9` — a very compact generator!
	* `random() < 0.02` — low probability events 
	* `t & 2**i` — binary counting (Every Icon)
* **Tinker** and **devise** one or two different expressions whose results you like. Your results must depend in some way on `t` — that is, they must be time-based or animated. (Consider that the display produces sound as well as image!) We'll test out your ideas together in the late afternoon. 
* **Create** a post in the Discord channel, `#62-flipdots`. 
* **Paste** your JavaScript expression in the post. 
* **Include** a screenshot or animated GIF. Your exercise will be presented on the display in a public exhibition later this semester, in a looping sequence with the other students' exercises.

![flipdot_2.png](https://raw.githubusercontent.com/golanlevin/p5-flipdots/main/img/ptixy_screenrecording.gif)



---

## 6.3. Custom Pixel

![chuck_close_and_jenny_odell.jpg](../../2024/assignments/images/chuck_close_and_jenny_odell.jpg)<br />*(Chuck Close; Jenny Odell)*

*(40%, 2 hours)* Pixels are the fundamental building blocks of bitmap images and digital displays. Conventionally, pixels are square, uniform, and parked in a static Cartesian grid. Challenge these assumptions by writing code to reconstruct a webcam image using “custom picture elements” of your own devising. What if pixels were arranged on a hexagonal or irregular lattice? What if they overlapped, moved, or had a variety of sizes? What if an image was itself constructed from fragments of other images, or from a database of tiny icons, symbols, flags, or emojis? Can you break out of the grid? Can your picture elements be "intelligent"? Can you use graphics primitives in an interesting way?

[![golan-pixels.png](../../2024/assignments/images/golan-pixels.png)](https://openprocessing.org/sketch/2405701)

[**This OpenProcessing tutorial**](https://openprocessing.org/@golan/2730399) demonstrates how to set up a video camera feed, and how to access the colors at a specified pixel location. Note, my screenshot above was created with a [template project by Dan Shiffman](https://openprocessing.org/sketch/2405701), which creates "custom pixels" by modifying the sizes of white squares. What will *your* custom pixel look like?

You might want to research the following terms in the p5 reference: [get()](https://archive.p5js.org/reference/#/p5/get), and [loadPixels()](https://archive.p5js.org/reference/#/p5/loadpixels). For additional instruction, consider these tutorials: *Coding Train* tutorials on [ASCII video](https://www.youtube.com/watch?v=55iwMYv8tGI) and [fetching color values from images](https://www.youtube.com/watch?v=0V3uYA1hafk); this [tutorial by Xin Xin](https://www.youtube.com/watch?v=aza-3oZjY4g); this [tutorial by Zach Whalen](https://www.youtube.com/watch?v=8geaKSvovoA); and tutorials on [spiral betty](https://www.youtube.com/watch?v=Z3PvLZYLW0U) and [ASCII art](https://www.youtube.com/watch?v=4IyeLc6J1Uo) by Patt Vira.

*Now*: 

* **Browse** these [viewings and reference materials](resources/custom_pixel_viewings.md) to see how others have approached this question.
* **Study** [the provided OpenProcessing tutorial](https://openprocessing.org/@golan/2730399) on accessing camera data and making custom pixels.
* **Create** a p5.js program that interprets the camera using custom picture elements. (You are *not* expected to use shaders for this assignment.)
* **Upload** your project to the [appropriate OpenProcessing collection](https://openprocessing.org/class/107236/#/c/107956).
* **Create** a post in the Discord channel, `#63-custom-pixel`.
* **Include** a screenshot or animated GIF of your project. 
* **Write** a couple of sentences describing your approach to designing a custom pixel.


---

## 6.4. Looking Outwards

<video controls width="100%">
  <source src="https://storage.googleapis.com/gd-prod/media/627e3671-dd05-4be6-954e-17b048cb5ab4_rethinking_color_00_2x1.mp4" type="video/mp4">
</video>

*(15%, 1 hour)* This exercise has 3 parts:

1. **Take a photograph** of the sky. Post it in Discord. 
2. **Review** a provided collection of artworks. Select one that speaks to you and write a sentence about it.
3. 


omantic landscape painting through Tonalism, Impressionism, abstraction, perceptual effects, and contemporary computational work



---

## 6.5. Shader Composition

https://openprocessing.org/@golan/2405238

shader programming provides a new technical vocabulary for some very old artistic problems: how to represent light, how to organize atmosphere, how to create depth without objects, how to make color seem luminous, and how to direct attention when there's no obvious subject.

Indistinctness is not the absence of composition. This is the most important idea to preserve. The risk is that students interpret your examples as an invitation to produce arbitrary clouds of noise, gradients, or blurry blobs. Yet your examples are carefully composed. A Rothko painting is not simply a collection of gradients. A Sugimoto seascape is not merely a horizontal division between two gray regions. The precise relationships between areas of near-uniformity, variation, and transition are essential.

Softness is not necessarily produced by blurring. Your inclusion of Alma Thomas and Richard Anuszkiewicz is valuable precisely because it complicates the title. Their hard-edged marks produce perceptual effects that aren't hard-edged. This opens a productive distinction between the local construction of an image and its global perceptual effect. The same distinction applies to dithering, halftoning, stippling, and noise-based shader techniques.
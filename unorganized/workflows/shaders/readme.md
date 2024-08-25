# Programming GLSL shaders

* pixel-based programming
* data-parallel computing
* SIMD (Single Instruction, Multiple Data) processing, where the same operation is applied to multiple data points (pixels) simultaneously

### Inspirations

* [Char Stiles, livecoding practice](http://charstiles.com/shader/)
* [Melissa Wiederrecht, *Cosmic Rays*](https://melissawiederrecht.com/artwork/cosmic-rays), 2023
* [Loie Hollowell, *Contractions*](https://www.artblocks.io/curated/collections/contractions-by-loie-hollowell?tab=Artworks), 2022
* [Junia Farquhar, *Dipolar*](https://www.artblocks.io/curated/collections/dipolar-by-junia-farquhar?tab=Artworks), 2022
* [William Mapan, *Anticyclone*](https://www.artblocks.io/curated/collections/anticyclone-by-william-mapan), 2022
* [John Gerrard, *Petro National*](https://www.artblocks.io/curated/collections/petro-national-by-john-gerrard), 2022
* [Mathias Isaksen, *Gumbo*](https://www.artblocks.io/curated/collections/gumbo-by-mathias-isaksen?tab=Artworks), 2023
* [Zach Lieberman, various works](https://www.instagram.com/zach.lieberman/)

### Tools

* [Tixy.land](https://tixy.land/)
* [Google Sheets shader example](https://docs.google.com/spreadsheets/d/1BVeicBmRxTop6quL4ZNBPcoAVWuPXJy6YjqGcTsA4wY/edit?usp=sharing)
* [*The Force* shader editor by Shawn Lawson](https://shawnlawson.github.io/The_Force/)
* [*ShaderBooth* shader editor by Max Bittker](https://shaderbooth.com/)
* [Simple shader in p5.js](https://editor.p5js.org/golan/sketches/X88aope5y)

### Quirks and Gotchas 

* Semicolons are essential
* GLSL is strongly typed (`float`, `int`)
* Color values go from 0...1, not 0...255
* Floating-point constants must be formatted as such (e.g. `3.0`, not `3`)
* Basic math can operate on vectors; e.g. `pow(vec2(x,y),vec2(a,b))`
* User-defined functions must be defined earlier in the file
* Values are passed in from outside using "uniform" values
* A vertex shader is necessary, even if you're just doing frag ops

### Resources

* [Shadertoy](https://www.shadertoy.com/)
* [Book of Shaders](https://thebookofshaders.com/)
* [Inigo Quilez (iq) Articles](https://iquilezles.org/articles/)
  * [iq 2D Distance Functions](https://iquilezles.org/articles/distfunctions2d/)
  * [iq Smooth Min Function](https://iquilezles.org/articles/smin/)
  * [iq Palette Functions](https://iquilezles.org/articles/palettes/)


### Lygia in p5.js

* [Lygia shader library](https://lygia.xyz/)
* [Lygia 2D Examples](https://editor.p5js.org/patriciogonzalezvivo/sketches/XCkTzoyB3)


### Viewings

* [The SDF of a Line Segment](https://www.youtube.com/watch?v=PMltMdi1Wzg), Inigo Quilez
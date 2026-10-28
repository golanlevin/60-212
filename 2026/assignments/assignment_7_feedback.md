# Assignment Set #7: Feedback Drawing


*In this assignment set, we'll explore ....*



* [7.1. Circle Packing with Geometric Testing](#71-circle-packing-with-geometric-testing) *(10%, 30 minutes, due 10/28)*
* [7.2. Circle Packing with Pixel Testing](#72-circle-packing-with-pixel-testing) *(10%, 30 minutes, due 10/28)*
* [7.3. Guided Master Study: *Substrate*](#73-guided-master-study-substrate) *(20%, 60 minutes, due Monday 11/2)*
* [7.4. Looking Outwards: Generative Art]() *(10%, 45 minutes, due Monday 11/2)* 
* [7.5. Simple Plot Test]() *(5%, 15 minutes, due Monday 11/2)*
* [7.6. Plotted Feedback Composition](#76-plotted-feedback-composition) *(45%, due Monday 11/9)*



---

![buechley_and_watz_packings.png](img/7/buechley_and_watz_packings.png)<br/>Computational circle packing designs by [Leah Buechley](https://x.com/leahbuechley/status/936669240605552640?lang=en) (2017) and [Marius Watz](https://mariuswatz.com/) (2008).

## 7.1. Circle Packing with Geometric Testing

![circle_packing_geombased.png](img/7/circle_packing_geombased.png)

*(10%, 30 minutes) This is a* ***purely technical exercise*,** *intended to be completed in-class on Wednesday 10/28. For this exercise, I ask that you please* ***not use AI assistance.***

> **Note:** there are actually many possible [circle-packing techniques](https://en.wikipedia.org/wiki/Circle_packing), including the lovely [Apollonian Gasket](https://en.wikipedia.org/wiki/Apollonian_gasket) and [Soddy Circles](https://en.wikipedia.org/wiki/Soddy_circles_of_a_triangle), with different definitions of optimality. If you'd like to learn more about circle packing, check out these Coding Train videos on [Animated Circle Packing](https://www.youtube.com/watch?v=QHEQuoIKgNE) and the [Apollonian Gasket Fractal](https://www.youtube.com/watch?v=6UlGLB_jiCs). But here, we are using extremely simple packing techniques with the goal of exploring the creation of **images whose future states depend on their past states**. 

**Create** a p5.js program which uses ***geometric testing***, or explicit geometric memory, to create a circle-packing configuration. For the purposes of this exercise, "circle packing" means a collection of circles which do not intersect each other, and which do not contain each other. The key idea is that each new circle must be tested against the accumulated results of all previous decisions. As the composition develops, the available space for new circles progressively diminishes.

**Proceed** as follows:

* **Setup** a p5 canvas with dimensions of 800x600 pixels.
* **Generate** a circle with a random size and location on the canvas, and **store** information about the circle's geometry into an array called (e.g.) `bubbles`. 
* On every subsequent `draw()` call, **generate** a candidate circle with a new random size and location. **Test** to see whether the candidate circle overlaps any previously stored circle, including cases where one circle contains another. (You should be able to test this using [A-level Maths](https://www.youtube.com/watch?v=lDk_8pFzNZY) and/or the p5.js [`dist()`](https://p5js.org/reference/p5/dist/) function.) If the candidate circle does *not* overlap any previous circle, then **add** it to the array. To speed things up, you may wish to generate a number of candidate circles on each frame.
* **Display** the collection of non-intersecting circles by looping through the `bubbles` array to fetch their parameters. **Demonstrate** the success of your algorithm by rendering all of your circles as unfilled shapes, i.e. with a white stroke and `noFill()`.
* **Upload** your project into the [appropriate collection]() on OpenProcessing.
* During discussion, be prepared to **answer**: what are some advantages and disadvantages of this technique for circle-packing? 


---

![amy_goodchild_manolo_gamboa-naon.jpg](img/7/amy_goodchild_manolo_gamboa-naon.jpg)<br/>Computational shape packing designs by [Amy Goodchild](https://www.amygoodchild.com/blog/maplands) (2022) and Manolo Gamboa Naon (2021).

## 7.2. Circle Packing with Pixel Testing

![circle_packing_pixelbased.png](img/7/circle_packing_pixelbased.png)

*(10%, 30 minutes) This is a* ***purely technical exercise*,** *intended to be completed in-class on Wednesday 10/28. For this exercise, I ask that you please* ***not use AI assistance.***

**Create** a p5.js program which uses ***pixel testing***, or implicit visual memory, to create a circle-packing configuration. In this version of the circle-packing exercise, we will use the *pixels of the canvas itself* as the "memory" that stores the location of previous circles — technically, an *accumulation buffer* or *persistent raster occupancy map*.

**Proceed** as follows:

* **Create** a p5 canvas with dimensions of 800x600 pixels, and in the `setup()` function, set the `background()` to black. **Remove** any subsequent invocation of the `background()` function.
* **Generate** a circle with a random size and location on the canvas, and **draw** it using a white-filled `circle()` command. 
* On every subsequent `draw()` call, **generate** the geometric parameters `(cx,cy,r)` of a candidate circle with a new random size and location. In order to **test** whether that candidate circle overlaps any previously stored circle, **compute** a series of test points `(px,py)` at various angles `a` around its perimeter (using something like `px = cx + r * cos(a)`, *etcetera*). Then, **use** the p5.js `get()` command to fetch the colors at those locations. If all of the circle's points would be drawn at a black location, then you can safely **add** that circle to the accumulation buffer.
* If all of the tested points are black, then **add** the candidate circle to the accumulation buffer. 
  * **Consider** whether this sampling technique guarantees that circles will never overlap.
  * **Consider** how the number of test points affects the reliability and performance of your algorithm. 
  * To speed things up, you may wish to generate a number of candidate circles on each frame.
* **Upload** your project into the [appropriate collection]() on OpenProcessing.

### DISCUSSION

We will follow the implmentation of projects 7.1 and 7.2 with a brief discussion. prepared to **answer**:
 
* What are some **advantages and disadvantages** of each technique for circle packing?
* Both techniques produce images whose future states depend on their past states, but they store and query their histories differently. What are the **implications of these different representations** (e.g. for algorithmic efficiency)?
* Likewise, what kinds of visual effects or behaviors might be **easier to achieve** with one technique than the other?


---

## 7.3. Guided Master Study: *Substrate*

*(20%, 60 minutes, due Monday 11/2) In this exercise, you will study and modify an agent-based drawing system that combines movement, branching, and pixel-based collision detection.*

![jared_tarbell_substrate.jpg](img/7/jared_tarbell_substrate.jpg)

Jared Tarbell's *Substrate* (2003), originally implemented in Processing/Java, is considered a classic work of generative art. Here is an older [screen recording](https://vimeo.com/208903786), and here is a 2023 [re-code/homage by Tom White](https://dribnet.github.io/substrate/) that uses p5.js and runs in the browser. 

*Substrate* is related to a family of generative drawing systems known as [Ice-Ray Grammars](https://www.contrib.andrew.cmu.edu/~ramesh/teaching/course/48-747/subFrames/readings/Stiny-1977-EPB3_89-98.Ice-ray..pdf), described by George Stiny in 1977. These systems generate intricate networks of lines through simple rules governing their growth and interaction.

In *Substrate*, numerous lines — let us call them "cracks" — propagate across the drawing surface. Each crack advances incrementally in a particular direction, leaving a visible trace behind it. When a crack encounters another crack or reaches the edge of the canvas, it stops growing. New cracks originate along existing cracks, typically departing at approximately right angles. Over time, these simple interactions produce an increasingly intricate network of intersecting paths and subdivided regions. Tarbell's artwork also includes delicate, sand-like deposits of color nearby the cracks.

Below and [here at OpenProcessing](https://openprocessing.org/@golan/3046937) is a simplified, approximately 100-line program, loosely based on *Substrate*. It introduces several computational ideas that go beyond our previous circle-packing exercises:

* **Persistent moving agents**. Instead of generating independent candidate shapes, each `Bug` object maintains its position, heading, and alive/dead state across frames.
* **Continuous mark-making**. Agents deposit connected line segments as they move, rather than adding complete geometric shapes.
* **Feedback during growth**. A bug reads the accumulated canvas to determine whether it should stop. In circle packing, an entire candidate circle is accepted or rejected at once.
* **Branching**. New agents inherit positions and headings from existing agents, producing a growing population of related trajectories.
* **Steering**. Perlin noise introduces local variation into the agents' movement, allowing cracks to curve rather than simply travel in straight lines.

### Your Task

Starting with the code provided below, **create** your own modified version of this generative drawing system. *(You are not asked to reproduce Substrate.)* Your goal is to **understand** the existing mechanisms, **experiment** with their behavior, and **make** deliberate changes to the rules that generate the drawing. See if you can *make it your own*.

* **Study** Tarbell's *Substrate*, either from the [screen recording](https://vimeo.com/208903786) or from [Tom White's interactive re-code](https://dribnet.github.io/substrate/). **Observe** how new cracks originate, propagate, branch, and terminate. Notice how the composition becomes increasingly complex as marks accumulate.
* **Fork** the [provided sketch](https://openprocessing.org/@golan/3046937) into your own p5.js project. Run it and examine the code. In particular, identify where the program:
  - Creates and stores its moving agents;
  - Updates their positions and directions;
  - Tests the accumulated canvas for collisions;
  - Creates new agents through branching;
  - Determines when an agent stops moving.
* **Experiment** with the program's parameters, including `branchProbability`, `noiseInfluence`, `noiseScale`, and `hitThreshold`. Observe how each parameter affects the density, curvature, branching, and overall structure of the drawing. Try changing the number and distribution of the initial agents, too.
* **Modify** the program in at least two meaningful ways. At least one modification must change a behavioral rule, rather than merely adjusting a parameter or altering a drawing command. Some possibilities include:
  - Changing the angles at which new cracks branch;
  - Making cracks branch when they encounter another crack;
  - Making the probability of branching depend on an agent's age, position, or other properties;
  - Changing how agents steer, perhaps using trigonometric functions or a different noise field;
  - Giving different agents different speeds, lifespans, or behaviors;
  - Changing the conditions under which agents stop moving;
  - Introducing a new way for agents to respond to the marks already drawn.
* **Upload** your modified project to the [appropriate collection]() on OpenProcessing. 
* **Create** a post in the Discord channel `#73-substrate`. **Write** a brief comment explaining the two most significant changes you made and what effects they had on the drawing.
* **Include** a screenshot or two of your program in your Discord post. 


```javascript
const hitThreshold = 200;
let branchProbability = 0.05;
let noiseInfluence = 0.05;
let noiseScale = 0.1;

let bugs = [];
function setup() {
  createCanvas(700, 500);
  init();
}

function mousePressed() {
  init();
}

function init() {
  noiseScale = 0.1;
  noiseInfluence = 0.05;
  bugs = [];
  noiseSeed(millis());
  background(255);
  for (let i = 0; i < 10; i++) {
    let px = random(width);
    let py = random(height);
    let heading = random(TWO_PI);
    bugs.push(new Bug(px, py, heading));
    bugs.push(new Bug(px, py, heading + PI));
  }
}

function draw() {
  // Potentially change some properties over time
  // branchProbability *= 1.0;
  // noiseScale *= 1.0;
  // noiseInfluence *= 1.0;

  let bDidIt = false;
  for (let i = 0; i < bugs.length; i++) {
    if (!bDidIt && bugs[i].plive) {
      if (random(1.0) < branchProbability) {
        let px = bugs[i].px;
        let py = bugs[i].py;
        let pheading = bugs[i].pheading;
        if (!isNaN(px) && !isNaN(py)) {
          let sig = random(1) < 0.5 ? -1 : 1;
          bugs.push(new Bug(px, py, pheading + sig * HALF_PI));
          bDidIt = true;
        }
      }
    }
  }

  stroke(0);
  strokeWeight(1);
  strokeCap(SQUARE); // unexpectedly important
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].update();
  }
}

//------------------------------------
class Bug {
  constructor(ipx, ipy, iheading) {
    this.px = ipx;
    this.py = ipy;
    this.pheading = iheading;
    this.plive = true;
  }

  update() {
    if (this.px > 0 && this.px < width && this.py > 0 && this.py < height) {
    } else {
      this.plive = false;
    }

    if (this.plive) {
      let nx = this.px * noiseScale;
      let ny = this.py * noiseScale;
      this.pheading += noiseInfluence * (noise(nx,ny) - 0.5);

      let vx = cos(this.pheading);
      let vy = sin(this.pheading);
      this.px += vx;
      this.py += vy;
      if (!isNaN(this.px) && !isNaN(this.py)) {
        let fpx = this.px;
        let fpy = this.py;
        let pcol = get(fpx, fpy);
        if (pcol[0] < hitThreshold) {
          this.plive = false;
        }
        line(this.px, this.py, this.px - vx, this.py - vy);
      }
    }
  }
}
```


---

## 7.4. Looking Outwards: Generative Art

*(10%, 45 minutes, due Monday 11/2)*

---


## 7.5. Simple Plot Test

*(5%, 15 minutes, due Monday 11/2)*


---

## 7.6. (Plotted) Feedback Composition 

![mitchell_whitelaw_limits_to_growth_2008.jpg](img/7/mitchell_whitelaw_limits_to_growth_2008.jpg)<br />Mitchell Whitelaw, *Limits to Growth* (2008)

*(45%, due Monday 11/9)*

*Details TBA.*



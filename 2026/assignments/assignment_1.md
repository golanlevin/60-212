# Assignment Set #1

## Getting Started; Points and Lines

### Due Wednesday, August 26, 2026

---

![assignment_1_banner.jpg](img/assignment_1_banner.jpg)

*This set of deliverables is due by the beginning of class on Wednesday 8/26. There are four main sets of tasks, the total of which should take less than ~5 hours:*

* 1.1. [Administrative Tasks](#11-administrative-tasks) *(30 minutes)*
* 1.2. [Touchstone Sharing](#12-touchstone-sharing) *(15 minutes)*
* 1.3. [p5.js Wayfinding](#13-p5-wayfinding) *(30 minutes)*
* 1.4. [Test Your Coding Agent: Zero-Shot Generation](#14-test-your-coding-agent-zero-shot-generation) *(30 minutes)*
* 1.5. [One Point Set, 27 Ways](#15-one-point-set-27-ways) *(3 hours)*


---

## 1.1. Administrative Tasks

(***30 minutes***) Please **complete** the following administrative tasks:

* (*1 minute*) **Bookmark** our [Course GitHub](https://github.com/golanlevin/60-212/blob/main/2026/readme.md) in your laptop's browser, so you can easily find it. Assignments and lecture notes will be shared here.
* (*4 minutes*) **Create** an ID on [Discord.com](https://discord.com/), if you don't already have one. **Join** our class Discord, using the invitation sent to you by email. **Browse** our server's channels so you know what's where.
* (*5 minutes*) In the `#main-chatter` channel of our course Discord, **introduce** yourself in a sentence or two. Please share something about yourself — pets, favorite food, arcane superpowers, etc.
* (*5 minutes*) **Create** an ID on [OpenProcessing.org](https://openprocessing.org) (if you don't already have one). **Join** our [OpenProcessing classroom](https://openprocessing.org/class/107236/#/), using the invitation sent to you by email, and **bookmark** it in your laptop's browser. Take a moment to **browse** some of the sketches that people have published at [https://openprocessing.org/discover](https://openprocessing.org/discover). *(Note: the quality varies widely!)* Run the programs, and be sure to **look** at their code (*command-shift-return* may help switch to the code view).
* (*15 minutes*) **Review** the [Syllabus](https://github.com/golanlevin/60-212/blob/main/2026/syllabus/README.md) carefully, and **complete** the [**Welcome Form**](https://forms.gle/Dtg5fU9wtkG6q3Fm7).


---

## 1.2. Touchstone Sharing

(***15 minutes***) You are asked to share a "touchstone" — a project (made by someone else) that you admire, hold close to your heart, or find yourself thinking about. The purpose of this exercise is to help us become familiar with your interests and tastes — and for you to be able to share something interesting with your peers. I also want to make sure that you're able to access the Discord.

* **Recall** a project you have admired (by someone else) which you feel falls under the broad umbrella of "Creative Coding".
* **Create** a post in the `#01-touchstone` channel in our course Discord. 
* **Describe** the project in a few sentences, and in your own voice, **explain** what you like about it. It's sufficient to write 3-5 sentences. *Please don't write with AI here.*
* **Answer** the questions: *Who* made this project? (Was it an individual, a small team, a big company?) *Why* did they make it, or for whom (what kind of audience)?
* **Include** a link (URL) to the project and/or its documentation (such as a YouTube video).
* **Embed** an image of the project in your Discord post. 


---

## 1.3. p5.js Wayfinding 

(***30 minutes***) The purpose of this task is to help ensure that you know where to find good-quality information about the p5.js toolkit, such as documentation and tutorials. 

* (*10 minutes*) **Browse** the [p5.js Reference](https://p5js.org/reference/). Examine at least ten Reference pages, starting with the [Shape commands](https://p5js.org/reference/#Shape). Note that most of the Reference pages allow you to see the effects of tinkering with the code.
* (*10 minutes*) **Browse** the [p5.js Examples](https://archive.p5js.org/examples/) archive, which are organized thematically. Review at least ten p5.js Examples, skimming their code. 
* (*10 minutes*) **Browse** some of the many free YouTube tutorials for p5.js, which range from [completely introductory](https://www.youtube.com/watch?v=HerCR8bw_GE&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA) to impressively advanced. Some legendary p5 YouTubers include:
  * [Dan Shiffman](https://www.youtube.com/@TheCodingTrain/playlists) (Coding Train)
  * [Patt Vira](https://www.youtube.com/@pattvira/playlists) (CMU alum!)
  * [Xin Xin](https://www.youtube.com/@xinxin1011/videos)
  * The [ProcessingFoundation](https://www.youtube.com/@ProcessingFoundation/videos)

Remember, if you get stuck, you can always give a shout in the `#haaaalp` channel in the course Discord!

---

## 1.4. Test Your Coding Agent: Zero-Shot Generation

(***10-30 minutes***) Make sure your coding agent is working.

***Note: Your creative effort is purposefully not requested for this task.***

This semester we will make use of LLM-based coding agents such as OpenAI *Codex* or *ChatGPT*, Anthropic *Claude*, or Google's *AI Studio* or *Antigravity*. The purpose of this task is simply infrastructure verification: to make sure that you have one of these tools installed — ideally as a **CLI** (command-line interface) — and that you are able to successfully demonstrate its use.

I am aware that Codex and Claude cost money. Fortunately, as a CMU student, you have free access to Google's Gemini LLM through your university Google account. It can be accessed in your browser through these links:

* [https://www.cmu.edu/computing/services/ai/tools/google-ai-tools/](https://www.cmu.edu/computing/services/ai/tools/google-ai-tools/)
* Gemini.Google.com: [https://gemini.google.com/](https://gemini.google.com/)
* Google AI Studio: [https://aistudio.google.com/apps](https://aistudio.google.com/apps) *(preferable, as it is able to create and manage multi-file projects)*

Now: 

* **Prompt** your preferred coding agent to **"zero-shot a face generator"** using the following prompt:

> Use p5.js to make a simple face generator. Have the program generate a new face each time the user presses the spacebar. Have the program save a screenshot when the user presses the `s` key. 

* **Run** the generated program to **test** it: for example, at [OpenProcessing.org](https://openprocessing.org/), or in the [p5.js editor](https://editor.p5js.org/). 
* **Please don't** do any iterative refinement (as long as the project is working).
* **Note** that the latest version of p5.js (v.2), which is quite new, has made some breaking changes to splines and curves. You might hit a small bug if your agent generated p5v1 curve commands in a p5v2 environment.
* **Create** a post in the `#01-zero-shot` channel in our course Discord. 
* **Tell** us which coding agent you used, and whether you used it at the command line or from within a browser.
* **Observe** the results. In 1-2 sentences, in your own voice, **write** about one specific choice the coding agent made that reveals the agent's assumptions about what “a simple face generator” means.
* **Embed** a screenshot of the agent's project in your Discord post. It might look something like the image below.

<img src="img/random-face.png" width=400>

*(For what it's worth, if you'd like to see a thoughtfully-executed implementation of procedurally generated faces in JavaScript, the artist Mannay [released this project](img/mannay_generated_faces.jpg) last week, published [here](https://x.com/mannay/status/2087522034351796728).)*

---

## 1.5. One Point Set, 27 Ways

(***3 hours***) Please **complete** and **submit** the following three assignments in our [OpenProcessing classroom](https://openprocessing.org/class/107236/#/). (In case it's helpful, a tutorial on how to use OpenProcessing is available [here](https://www.youtube.com/watch?v=Oj3DGSCMAOQ).)

* **1.5.1** (*45 minutes*) **Do** [One Point Set, 9 Ways: Part A]()
* **1.5.2.** (*15 minutes*) **Do** [One Point Set, 9 Ways: Part B]()
* **1.5.3.** (*2 hours*) **Do** [One Point Set, 9 Ways: Part C]()

More details about each part are below. For each exercise, **remember** to do the following:

* **Add a thumbnail image** to your project in OpenProcessing. To do this, click *SAVE* or ⓘ, then click *EDIT*, and add information to the various fields. Click on the thumbnail square in order to capture a thumbnail image of your project. Projects that are missing thumbnail images will lose an unexpectedly large amount of points.
* **Submit** your project to the appropriate collection in the OpenProcessing classroom.


### 1.5.0. Overview

Creative coding is not about making pictures with code. It is about making **systems whose behavior can be seen**.

In this assignment, you will explore how a single set of random points can give rise to many different geometric structures. You will be given a p5.js template with a 3x3 grid of panels, where each panel shows the same set of points. Your job is to create a different computational process to interpret the points in each panel. Every panel will show the visible consequence of a different process: the results of a different question asked of the same set of points. 

You will do this 3 times, writing a total of 27 functions: 

* In **Part A**, you will be given a list of 9 functions to write. *You must write all the code for these functions yourself, without any AI.* The point is to make sure you have the basic programming skills necessary to take this course.
* In **Part B**, you will be given a list of 9 algorithms that are widely used in computer graphics, but which are tricky to implement correctly and efficiently. You are asked to direct an LLM to write the code for these algorithms, and to ensure they are working properly. The point is for you to develop an intuitive understanding of what these algorithms do. 
* **Part C** is open-ended. You are asked to research or devise algorithms that interpret the points in creative and surprising new ways. In this part, you are encouraged to work collaboratively, in two-person teams. 

Put another way, while **Part A** must be completed solely with your own mind, **Part B** and **Part C** of this assignment are intentionally designed so that they cannot reasonably be completed *without* AI assistance.

This assignment draws from several computational disciplines, including computational geometry, graph theory, statistics, computer vision, numerical analysis, optimization, and machine learning. Each field offers different ways of interpreting the same point set: as a spatial arrangement, a network, a statistical distribution, a collection of clusters, a noisy sample of an underlying form, or the initial state of a dynamic system. Some of the methods you will encounter are ordinarily taught only in advanced undergraduate or graduate courses, if they are taught at all. Many of these algorithms would require substantial time, even for an expert, to implement correctly and efficiently. And yet, many of these algorithms have intuitive 





### 1.5.1. Part A

1. Spline curve connecting all the points, in order
2. Draw a perpendicular projection from every point to the horizontal centerline
3. Star Graph: Connect every point to the centroid of the set
4. Sort points from left to right; connect them with a polyline
5. Axis-aligned (min/max) bounding box
6. Sort points clockwise around the centroid; connect them with a closed loop
7. Connect each point to its nearest neighbor
8. Connect each point to the point furthest from it
9. Complete Graph: Connect each point to every other (hairball)



*Note: for the exercises that specify sorting, be sure to copy the points array so the original data remains unchanged. This is a good time to learn JavaScript's spread syntax, e.g. `[...points]`, to create a shallow copy,*



For all three parts, here is the p5.js starter code you will modify: 

```
// One Point Set, 9 Ways. 
// Press spacebar to get a new set of points.
// Prese `s` to save a screenshot of the canvas. 
// Click on points to move them around.

// =================================================
// Don't change any of the code in this section, 
// up to line 130
//
const cellW = 300;
const cellH = 250;
let draggedPointIndex = -1;
let theRandomSeed = 0;
let points = [];

const drawingFunctions = [
  function1, function2, function3,
  function4, function5, function6,
  function7, function8, function9
];

function setup() {
  createCanvas(cellW*3, cellH*3);
  pixelDensity(2);
  initPoints();
}

function draw() {
  background(255);
  drawStage();
  drawCells();
}

function initPoints() {
  points = [];
  theRandomSeed = int(millis()*127); 
  randomSeed(theRandomSeed); 
  const nPoints = round(random(4, 18));
  for (let i = 0; i < nPoints; i++) {
    const px = random(0.2, 0.8) * cellW;
    const py = random(0.2, 0.8) * cellH;
    points.push(new p5.Vector(px, py));
  }
  draggedPointIndex = -1;
}

function drawCells() {
  for (let cy = 0; cy < 3; cy++) {
    for (let cx = 0; cx < 3; cx++) {
      const whichFunction = cy * 3 + cx;
      push();
      translate(cx * cellW, cy * cellH);
      drawingFunctions[whichFunction]();
      drawPoints();
      pop();
    }
  }
}

function keyPressed() {
  if (key == 's'){
    save("configuration_" + theRandomSeed + ".png");
  } else {
    initPoints();
  }
}

function mousePressed() {
  if ((mouseX < 0) || (mouseX >= width) || 
      (mouseY < 0) || (mouseY >= height)) {
    return;
  }
  const localX = mouseX % cellW;
  const localY = mouseY % cellH;
  const selectionRadius = 8;
  let nearestGap = selectionRadius;
  draggedPointIndex = -1;
  for (let i = 0; i < points.length; i++) {
    const gap = dist(localX, localY, points[i].x, points[i].y);
    if (gap < nearestGap) {
      nearestGap = gap;
      draggedPointIndex = i;
    }
  }
}

function mouseDragged() {
  if (draggedPointIndex < 0) return;
  const localX = mouseX % cellW;
  const localY = mouseY % cellH;
  points[draggedPointIndex].x = constrain(localX, 0, cellW);
  points[draggedPointIndex].y = constrain(localY, 0, cellH);
}

function mouseReleased() {
  draggedPointIndex = -1;
}

function drawStage(){
  stroke(245);
  strokeWeight(8); 
  line(cellW*1,0,cellW*1,cellH*3);  
  line(cellW*2,0,cellW*2,cellH*3);
  line(0,cellH*1,cellW*3,cellH*1);  
  line(0,cellH*2,cellW*3,cellH*2);  
  strokeWeight(1); 
}

function drawPoints() {
  fill(0);
  noStroke();
  const nPoints = points.length;
  for (let i = 0; i < nPoints; i++) {
    const px = points[i].x;
    const py = points[i].y;
    circle(px, py, 5);
  }
}

function drawCaption(caption){
  fill(0); 
  noStroke(); 
  textSize(8); 
  text(caption, 12,18); 
  stroke(0); 
  noFill(); 
}


// ===================================================
// Students should fill in the functions below.
// Each function can access the global `points` array.
// ===================================================

function function0(){
  drawCaption("Generic function, just draws circles");
  stroke(0); 
  noFill(); 
  const nPoints = points.length; 
  for (let i=0; i<nPoints; i++){
    let px = points[i].x;
    let py = points[i].y;
    circle(px,py, 40);
  }
}

//--------------------
function function1() {
  drawCaption("Spline curve connecting all the points, in order"); 
}

//--------------------
function function2() {
  drawCaption("Draw a perpendicular projection from every point to the horizontal centerline");
}

//--------------------
function function3() {
  drawCaption("Star Graph: Connect every point to the centroid of the set");
}

//--------------------
function function4() {
  drawCaption("Sort points from left to right, connect them with a polyline");
  // Note: When sorting, copy the array so the original remains unchanged.
}

//--------------------
function function5() {
  drawCaption("Axis-aligned bounding box"); 
}

//--------------------
function function6() {
  drawCaption("Sort points clockwise around the centroid;\nconnect them with a closed loop"); 
  // Note: When sorting, copy the array so the original remains unchanged.
}

//--------------------
function function7() {
  drawCaption("Connect each point to its nearest neighbor"); 
}

//--------------------
function function8() {
  drawCaption("Connect each point to the point furthest from it"); 
}

//--------------------
function function9() {
  drawCaption("Complete Graph (hairball)");
}

```




## 1.5.2. Part B. 

**Part B** is intended to teach an important lesson that computer science courses often miss.

There is a tendency to equate *understanding an algorithm* with *being able to implement it from scratch*. These are not the same skill. 

Some algorithms are so well-established, intricate, and widely available that reimplementing them from first principles is rarely the best use of your effort. Very few practicing engineers write their own FFTs or Delaunay triangulations from scratch. Instead, they understand:

* what problem the algorithm solves;
* what assumptions it makes;
* what its output represents;
* how to verify that it is behaving correctly;
* what its limitations and failure modes are;
* when it is the wrong tool.

As creative coders, our challenge is not to recreate an algorithm’s internal mechanics; it is to understand its behavior, limitations — and what might make it potentially compelling as an artistic building block.

In this part of the assignment, our learning objective shifts from **writing algorithms** to **working responsibly with sophisticated algorithms**.

Use your coding agent to implement each of the following 

1. Minimal Spanning Tree of the points (Prim's algorithm)
2. Minimum-area oriented bounding box of the points
3. Delaunay triangulation (Bowyer-Watson) of the points
4. Open traveling-salesperson path (TSP) through the points
5. Isoline of the points' density-field, using marching squares
6. Convex hull peeling (onion decomposition) of the point set
7. Project every point onto the Principal Component Analysis major axis
8. Voronoi diagram, clipped to circular bubbles around each point
9. Project every point onto the minimum bounding circle








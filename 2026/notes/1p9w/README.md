# One Point Set, Nine Ways

## Overview

Creative coding is not about making images with code. It is about making systems whose behavior can be seen.

In this assignment, you will explore how a single set of random points can give rise to many different geometric structures. You will be given a p5.js template with a 3x3 grid of panels, where each panel shows the same set of points. Your job is to create a different computational process to interpret the points in each panel. Every panel will show the visible consequence of a different process: the results of a different question asked of the same set of points.

A Voronoi diagram asks:

> Which part of the plane is closest to each point?

A minimum spanning tree asks:

> How can all the points be connected using the least total length of line?

A convex hull asks:

> What is the smallest convex boundary containing all the points?

A nearest-neighbor graph, principal curve, Delaunay triangulation, clustering algorithm, or circle-packing method will ask something different.

Each algorithm is a different question. Each image is its answer.

## The larger purpose

This assignment is intended to teach an important lesson that computer science courses often miss.

There is a tendency to equate *understanding an algorithm* with *being able to derive or implement it from scratch*. These are not the same skill.

Some algorithms are so well-established, intricate, and widely available that reimplementing them from first principles is rarely the best use of your effort. Very few practicing engineers write their own FFTs, Delaunay triangulations, PCA systems, or convex-hull algorithms from scratch. Instead, they understand:

* what problem the algorithm solves;
* what assumptions it makes;
* what its output represents;
* how to verify that it is behaving correctly;
* what its limitations and failure modes are;
* when it is the wrong tool.

As creative coders, our challenge is not  to recreate an algorithm’s internal mechanics; it is to understand its behavior, limitations — and what makes it compelling as an artistic building block.

In this assignment, the learning objective shifts from **writing algorithms** to **working responsibly with sophisticated algorithms**.

## AI is required

This assignment draws from several computational disciplines, including computational geometry, graph theory, statistics, computer vision, numerical analysis, optimization, and machine learning. Each field offers different ways of interpreting the same point set: as a spatial arrangement, a network, a statistical distribution, a collection of clusters, a noisy sample of an underlying form, or the initial state of a dynamic system. Some of the methods you encounter are ordinarily taught only in advanced undergraduate or graduate courses, if they are taught at all. The assignment is therefore intentionally designed so that it cannot reasonably be completed without AI assistance.


You will create:

* **One or two constructions entirely by hand.** Choose comparatively simple methods, such as a complete graph, centroid star, nearest-neighbor chain, or angle-sorted polygon. This demonstrates that you understand loops, arrays, functions, geometry, and basic graphics programming.

* **Seven or eight constructions with AI assistance.** These may involve substantially more sophisticated computational methods. This demonstrates that you can research, direct, evaluate, repair, compare, and integrate algorithms that exceed what you could reasonably implement unaided during the available time.

Using AI does not end your responsibility for the result. AI-generated code may be subtly incorrect, only approximately correct, numerically unstable, inefficient, poorly matched to p5.js, or mathematically valid but visually uninteresting.

You are responsible for supervising the entire process:

1. Selecting a computational method worth exploring.
2. Understanding what question it asks of the point set.
3. Prompting the AI clearly and precisely.
4. Integrating its output into the provided program.
5. Testing it with many different point configurations.
6. Deciding whether it is an **interesting** tool for the project at hand.

Note that a mathematically correct algorithm may produce uninteresting imagery. Part of your task is to develop aesthetic judgment about which computational processes generate rich, surprising, or expressive structures.

## What you will make

Create a p5.js program that displays **nine panels**.

Each panel must:

* receive the same set of 2D points;
* derive a different geometric construction from those points;
* update when the points are regenerated or moved;
* remain contained within its allotted panel;
* display its algorithm’s name;
* produce a visually legible result.

Your nine methods must be **substantially different**. Changing a parameter does not generally produce a new method. For example, nine variations of a k-nearest-neighbor graph would not satisfy the assignment.

Aim for conceptual breadth. Your selections might include methods from several of the following families:

* **Connections:** complete graph, centroid star, minimum spanning tree, k-nearest neighbors, Gabriel graph, relative-neighborhood graph
* **Paths and orderings:** nearest-neighbor path, traveling salesperson path, angle sorting, space-filling-curve ordering
* **Boundaries:** convex hull, concave hull, alpha shape, onion decomposition
* **Partitions:** Voronoi diagram, Delaunay triangulation, power diagram, recursive subdivision
* **Fitting and summarization:** PCA axes, regression lines, RANSAC circles, principal curves, enclosing circles or ellipses
* **Fields and regions:** metaballs, density contours, distance fields, largest empty circles
* **Clustering and growth:** hierarchical clustering, cluster hulls, circle packing, dilation, agglomeration
* **Curves:** Catmull–Rom spline, Bézier chain, natural cubic spline, Hobby curve
* **Optimization and topology:** minimum matching, Steiner approximations, alpha complexes, persistent-homology filtrations

You may use methods discussed in class, methods found through your own research, or methods proposed during conversations with an AI.

## Explain what each algorithm depicts

Be prepared to explain any algorithm you use.

You are not expected to derive its mathematics, reproduce its implementation from memory, discuss its complexity, or explain an advanced implementation technique such as Fortune’s sweep-line algorithm.

You are expected to explain, in clear language:

1. **What question does the algorithm answer?**
2. **What does it *****do*****?**
3. **What does the resulting graphic represent?**
4. **What conditions, parameters, or assumptions affect it?**
5. **Why did you find it interesting to include?**

For example:

> A Voronoi diagram divides the plane into territories belonging to the points. Every location in a territory is closer to its point than to any other point. The boundaries mark locations equally close to two or more points.

Or:

> A minimum spanning tree connects every point while minimizing the total length of the connections. It produces a branching skeleton without any loops.

During critique, *you may be called to the whiteboard and asked to explain one of the algorithms you used*.

## Document your AI collaboration

For each AI-assisted construction, briefly record:

* the name of the algorithm;
* the principal prompt or sequence of prompts you used;
* where you found an independent description of the algorithm;
* at least one test you used to evaluate the result;
* any bug, limitation, or misleading claim you discovered;
* any correction or improvement you made;
* what you learned about the algorithm through the process.

A perfect first response from the AI is neither expected nor especially instructive. Evidence that you tested, questioned, and improved its output is more important.

## Testing

Do not decide that an algorithm works merely because it produces a plausible-looking image.

Test it with point sets designed to expose errors, such as:

* only one, two, or three points;
* points arranged in a straight line;
* points arranged on a circle or regular grid;
* coincident or nearly coincident points;
* one distant outlier;
* dense clusters separated by large gaps;
* symmetric configurations;
* points close to the panel boundaries.

Whenever possible, identify properties that must remain true. For example:

* a convex hull must contain every point;
* a tree connecting (n) distinct points must contain (n-1) edges;
* Voronoi boundaries must be equidistant from their neighboring sites;
* a minimum enclosing circle must contain every point;
* a claimed interpolating curve must pass through its input points.

## Submission

Submit:

1. Your working p5.js program.
2. Nine labeled geometric constructions.
3. An indication of which one or two constructions you wrote by hand.
4. A concise explanation of every construction.
5. Your AI-collaboration and testing notes.
6. References for the algorithms you used.

## Evaluation

Your project will be evaluated according to:

* **Conceptual breadth:** Do the nine panels explore genuinely different computational relationships?
* **Correctness and robustness:** Do the constructions behave as claimed across varied and difficult inputs?
* **Understanding:** Can you clearly explain what every algorithm does and represents?
* **AI supervision:** Did you critically test, repair, and evaluate AI-generated work?
* **Integration and code quality:** Do the methods coexist coherently in a readable, functional program?
* **Visual and aesthetic judgment:** Did you select and tune processes that produce interesting behavior and suggest possibilities for future artworks?

## Final perspective

The goal is not to collect algorithms for their own sake. The goal is to begin building a personal vocabulary of computational ideas that you may later use as components of artworks.

You are not making nine pictures *of* something. You are constructing nine open-ended systems: nine different ways for the same information to behave, organize itself, and become visible.

---

Each drawing is the answer to a question. Are you a curious person?

Based on the quality of your research, not the quality of ChatGPT's algo implementations. 

Now I need recommendations for art and other inspirations to look at:


* Core inspiration - this assignment was inspired by [this IG post by @tsumikiroom](https://www.instagram.com/p/DbdZWERoBKu) 
* Sol Lewitt wall drawings
 - *Wall Drawing #118* (1971)
Fifty random points, all mutually connected. This establishes that an elementary graph operation can constitute a complete artwork.
* Casey Reas, [Software Structures](https://whitney.org/exhibitions/software-structures)
* Algorithm visualization channels: 
  - [algo_visuals](https://www.instagram.com/algo_visuals/)
  - [3blue1brown](https://www.instagram.com/3blue1brown/)
  - [mathmotion97](https://www.instagram.com/mathmotion97/)
  - [codevisuals.io/](https://www.instagram.com/codevisuals.io/)
* [Tokyo Strut (Masahiko Sato & Mio Ueta)](https://www.youtube.com/watch?v=4M-j0Wnjb7Q&t=6s)
* Agnes Denes, Isometric Systems in Isotropic Space - multiple geometric transformations applied to a common conceptual object.
* [CGAL](https://doc.cgal.org/latest/Manual/packages.html#PartConvexHullAlgorithms)
* [cartography-playground](https://cartography-playground.gitlab.io/)
* Snibbe CodeDoc [Tripolar](https://www.snibbe.com/generative/tripolar), https://editor.p5js.org/golan/sketches/nurnJ6_8l 
* Snibbe [*Boundary Functions*](https://www.youtube.com/watch?v=5wA3lKcDrlM)
* Snibbe [*Near*](https://web.archive.org/web/20090228201714/http://snibbe.com/scott/public/near/index.html) (2004)
* Sol Lewitt, *Wall Drawing #118*
  * https://www.artic.edu/artworks/196148/wall-drawing-118-50-randomly-placed-points-connected-by-straight-lines
  * https://www.youtube.com/watch?v=ky9K_-NJoPU
* Bruno Munari, *Flight of Fancy*


---

## Part A. 

No AI is permitted for Part A: you must be able to accomplish these yourself. 

*Note: for the exercises that specify sorting, be sure to copy the points array so the original data remains unchanged.*

1. Spline curve connecting all the points, in order
2. Draw a perpendicular projection from every point to the horizontal centerline
3. Star Graph: Connect every point to the centroid of the set
4. Sort points from left to right; connect them with a polyline
5. Axis-aligned (min/max) bounding box
6. Sort points clockwise around the centroid; connect them with a closed loop
7. Connect each point to its nearest neighbor
8. Connect each point to the point furthest from it
9. Complete Graph (hairball)

## Part B. 

1. Minimal Spanning Tree (Prim's algorithm)
2. Minimum-area oriented bounding box
3. Delaunay triangulation (Bowyer-Watson)
4. Open traveling-salesperson path
5. Density-field isoline using marching squares
6. Convex hull peeling (Onion Decomposition)
7. Project every point onto the PCA major axis
8. Bubble-clipped Voronoi diagram
9. Projections onto minimum bounding circle



#### Some Possible Starting Points

Here are a few places you might get started — but note, it's important to get to a place where you're coming up with your own ideas for treatments, and not just reaching into a grab bag of existing techniques. 

* [@algo_visuals](https://www.instagram.com/algo_visuals/)
* [@codevisuals.io/](https://www.instagram.com/codevisuals.io/)
* [@3blue1brown](https://www.instagram.com/3blue1brown/)
* [cartography-playground](https://cartography-playground.gitlab.io/)
* [Computational Geometry Algorithms Library](https://doc.cgal.org/latest/Manual/packages.html#PartConvexHullAlgorithms) (CGAL)

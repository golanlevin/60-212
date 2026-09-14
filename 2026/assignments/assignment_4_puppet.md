# Assignment Set #4: Puppet




---

## Summary of Deliverables

This assignment has six parts, paced out on different days, totaling about 6 hours:

* [4.1. Viewings (Realtime Tracking)](#41-viewings-realtime-tracking) *(10%, 40m)*
* [4.2. Inverse Kinematics Exercise](#42-inverse-kinematics-exercise) *(5%, 20m)*

---

## 4.1. Viewings (Realtime Tracking)

(*10%, 40 minutes*) In order to keep you on track, this set of viewings and its written response is due this Wednesday, September 16.

* **Spend** 30 minutes reviewing this set of lecture notes on [**Realtime Tracking in Interactive Art**](https://github.com/CMUSchoolOfArt/60-120/blob/main/lectures/responsive_environment/body_tracking/readme.md). *(It's possible you may have seen this presentation before, in 60-120.)* This presentation links to dozens documentation videos of projects.  
* If you find this material interesting and want more, here are some additional/alternative lectures you can browse: 
  * [The Expanded Body](https://github.com/golanlevin/lectures/tree/master/lecture_expanded_body)
  * [Shadow Play (Computing with Silhouettes)](https://github.com/golanlevin/lectures/tree/master/lecture_shadow)
  * [Faces in New Media Art](https://github.com/golanlevin/lectures/tree/master/lecture_face)
* **Select** one project whose way of responding to the body you find interesting. *(You may choose any project, with the exception of those created by the Professor.)*
* **Create** a post in the Discord channel `#41-viewing-response`. **Write** a sentence or two, describing the interaction and what you appreciate about it. **Include** a link to documentation of the project. 


<!--

Live Animation

* [**DesignIO**](https://www.design-io.com/) (Emily Gobeille and Theo Watson)
  * [Original prototype](https://vimeo.com/16985224)
  * [Puppet Parade](https://www.design-io.com/projects/puppetparade)
* [**Cartoon Mess Live**](https://www.cartoonmess.live/)
	* [Roger and Gorf](https://www.instagram.com/p/DXF6SdtkhJ_)
	* [Tom's custom software](https://www.instagram.com/p/DXSKQdTEojQ/)
	* [Ninja turtle drawing](https://www.instagram.com/p/DYieH0eyh4C/)
	* [Duck in use; mild cartoon violence](https://www.instagram.com/p/DXxj2IBPJVr/)
	* [Duck in use; building](https://www.instagram.com/p/Db-D3rayrHq)
* [**Kiafoolish**](https://www.instagram.com/foolishkia/) (Kellie Kiakas)
	* [Interactive Rig Demo](https://www.instagram.com/p/DbI1A7zuHTk)

Hand Stuff

![ojrgb_touchdesigner_2026.gif](https://raw.githubusercontent.com/CMUSchoolOfArt/60-120/main/lectures/responsive_environment/body_tracking/images/ojrgb_touchdesigner_2026.gif)

* [@ojrgb](https://www.instagram.com/p/DVn2ryfkSOj)
* [@cottondesigninc](https://www.instagram.com/p/DdBwZBNtErn)
* @Karakold: [jealous](https://www.instagram.com/p/Dc58CAENsqE), [yesterday](https://www.instagram.com/p/DcWOZgMNG9L)
* [@julip.mp3](https://www.instagram.com/p/DSoKeDGjMHU/), [nike](https://www.instagram.com/p/DZ5pmXLIlQV/)
* [@elliotisacoolguy](https://www.instagram.com/p/Dbr08NlxDXO)

Face Stuff

* Karolina Sobecka, [All the Universe is Full of the Lives of Perfect Creatures](https://vimeo.com/35262930) (2012)
* Zach Lieberman, [Más Que la Cara overview](https://medium.com/@zachlieberman/m%C3%A1s-que-la-cara-overview-48331a0202c0) (2016)
* Rachel Ciavarella (CMU), [Animatronic Avatars](https://vimeo.com/126283584) (2015)

-->

---

## 4.2. Inverse Kinematics Exercise

(*10%, 20 minutes*) In order to keep you on track, this simple technical exercise is due this Wednesday, September 16.

**Inverse kinematics** (IK) is a technique for figuring out how a chain of connected joints should bend in order to place its endpoint at a desired location. Instead of specifying the angle of every shoulder, elbow, or knee yourself, you specify where you want a hand, foot, or robotic gripper to go, and IK computes the joint angles needed to get it there.

* **View** and **explore** the "[BoxSquad](https://spacetypegenerator.com/boxsquad)" artwork by creative coder, [Kiel Mutschelknaus](https://www.instagram.com/kiel.d.m/?hl=en). Here is the [Live interactive experience](https://spacetypegenerator.com/boxsquad) (try the "twerk" and "debug" buttons), and here is a [recorded interaction](https://www.instagram.com/p/DajD1SPmK8t/) on Instagram (as a backup).
* **Read** [this 800-word article on Inverse Kinematics](https://www.davepagurek.com/blog/inverse-kinematics/) by Dave Pagurek, an artist and p5.js contributor. (If you'd like to learn more about Inverse Kinematics, feel free to **watch** [this 35m Coding Train video](https://www.youtube.com/watch?v=hbgDqyy8bIw).)
* **View** and **explore** [this p5.js sketch](https://editor.p5js.org/golan/sketches/txTrE72lG), adapted from Pagurek's demo, which allows you to easily see the IK code. In this project: 

> The mouse specifies a target position, and the chain of connected bones repeatedly adjusts its joint angles to reach toward it. The IK solver works recursively from the end of the chain backward, rotating each bone so that the chain’s current endpoint moves toward the target; repeating this process several times rapidly converges on a solution.

*Now,* in [the OpenProcessing slot for Exercise 4.2](), you are asked to **modify** the construction of the skeleton so that it forms a simple **Y**-shaped puppet: a torso with two articulated arms extending from the same shoulder point:

![ik-y-arms.gif](img/4/ik-y-arms1.gif)

**Here are some hints:**

* You should not need to modify the `Bone` class or the IK algorithm itself.
* Currently, Dave Pagurek's inverse-kinematics sketch consists of a single chain of connected bones. Instead of one variable called `chain`, you will want *two* IK chains, with variable names like (e.g.) `leftArm` and `rightArm`. Both arms can begin at the same (x, y) position. Call `updateIK()` and `draw()` separately for each arm.
* Have the two hands chase points located 50 pixels to the left and right of the mouse cursor, i.e, `[mouseX - 50, mouseY]` and `[mouseX + 50, mouseY]`.
* Finally and additionally, **make** the shoulder point move independently (autonomously) according to a slow sinusoid or noise wave.

![ik-y-arms2.gif](img/4/ik-y-arms2.gif)

---

## 4.3. ARAP Shape Exercise

(*10%, 40 minutes*) In order to keep you on track, this technical exercise is due this Wednesday, September 16.

**ARAP**, or “as-rigid-as-possible” deformation, lets you bend, stretch, or pose a 2D shape by moving a few control points while the rest of the shape tries to preserve its original local structure. It is an interesting and useful algorithm because it feels almost like puppeteering a material object: the shape can change globally, but local regions still behave as if they have some stiffness and memory.

You are provided with a p5.js wrapper on Kyle McDonald's [reimplementation](https://github.com/kylemcdonald/puppetry) of the 2D "[As-Rigid-As-Possible (ARAP) Shape Manipulation](https://dl.acm.org/doi/10.1145/1073204.1073323)" method by Takeo Igarashi, Tomer Moscovich, John F. Hughes, published in SIGGRAPH 2005. Igarashi's algorithm is discussed and demonstrated [in this video](https://www.youtube.com/watch?v=1M_oyUEOHK8): 

[![igarashi.gif](img/4/igarashi.gif)](https://www.youtube.com/watch?v=1M_oyUEOHK8)

**Here is what you need:** 

* **The arap-p5 library is available here:** [https://golanlevin.github.io/arap-p5/arap-p5.js](https://golanlevin.github.io/arap-p5/arap-p5.js)
* If you want to work *purely* locally, you will also need this .wasm (web assembly) file: [https://golanlevin.github.io/arap-p5/arap2d_bg.wasm](https://golanlevin.github.io/arap-p5/arap2d_bg.wasm)
* **Documentation for the library's API is here:** 

![the-letter-y.gif](img/4/the-letter-y.gif)

https://github.com/kylemcdonald/puppetry
https://kylemcdonald.github.io/puppetry/

The script is served from: 
https://golanlevin.github.io/arap-p5/arap-p5.js

```
  myShapeVertices = [
    [200, 150],
    [300,  50],
    [325,  75],
    [225, 175],
    [225, 350],
    [175, 350],
    [175, 175],
    [ 75,  75],
    [100,  50],
  ];

  myControlPoints = [
    [300,75],
    [100,75],
    [250,125],
    [150,125],
    [200,175],
    [200,250],
  ];

  myPins = [
    [200,325],
  ];
```

[![the-letter-y.jpg](img/4/the-letter-y.jpg)](https://www.youtube.com/watch?v=FEzxchU4RUY)

---

<!--

https://www.youtube.com/watch?v=oW3Xt-FqWng
https://www.youtube.com/watch?v=NP2pfCPV8sM
-->


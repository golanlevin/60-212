# Fall 2026 Notes

This is a scratchpad for Golan's course prep notes. It's not specifically for public consumption, but has no reason to be private. 

---

* [Patt Vira shader tutorial](https://www.youtube.com/watch?v=q1xzpZu1KTc)

---

### Inverse Kinematics

* https://www.instagram.com/p/DajD1SPmK8t/?img_index=1
  * https://spacetypegenerator.com/boxsquad
  * https://www.instagram.com/p/Da1GgunmOMj/?img_index=1
* Coding Train viewing:
  * https://thecodingtrain.com/challenges/64-kinematics
  * https://editor.p5js.org/codingtrain/sketches/p8hH8INCv
* Reading: https://www.davepagurek.com/blog/inverse-kinematics/
  * Demo: https://codepen.io/davepvm/pen/gmgGdQ
* https://www.youtube.com/watch?v=hbgDqyy8bIw
* Sketches: 
  * https://editor.p5js.org/YunYouJun/sketches/bS8jB3EsC
  * https://editor.p5js.org/SebastienR/sketches/91TlA2ckq

---

## 4.2. Inverse Kinematics

(*20 minutes, 5%*) 

**Inverse kinematics** (IK) is a technique for figuring out how a chain of connected joints should bend in order to place its endpoint at a desired location. Instead of specifying the angle of every shoulder, elbow, or knee yourself, you specify where you want a hand, foot, or robotic gripper to go, and IK computes the joint angles needed to get it there.

* **View** and **explore** the "[BoxSquad](https://spacetypegenerator.com/boxsquad)" artwork by creative coder, [Kiel Mutschelknaus](https://www.instagram.com/kiel.d.m/?hl=en). Here is the [Live interactive experience](https://spacetypegenerator.com/boxsquad) (try the "twerk" and "debug" buttons), and here is a [recorded interaction](https://www.instagram.com/p/DajD1SPmK8t/) on Instagram (as a backup).
* **Read** [this 800-word article on Inverse Kinematics](https://www.davepagurek.com/blog/inverse-kinematics/) by Dave Pagurek, an artist and p5.js contributor. (If you'd like to learn more about Inverse Kinematics, feel free to **watch** [this 35m Coding Train video](https://www.youtube.com/watch?v=hbgDqyy8bIw).)
* **View** and **explore** [this p5.js sketch](https://editor.p5js.org/golan/sketches/txTrE72lG), adapted from Pagurek's demo, which allows you to easily see the IK code. In this project: 

> The mouse specifies a target position, and the chain of connected bones repeatedly adjusts its joint angles to reach toward it. The IK solver works recursively from the end of the chain backward, rotating each bone so that the chain’s current endpoint moves toward the target; repeating this process several times rapidly converges on a solution.


*Now,* in [the OpenProcessing slot for Exercise 4.2](), 

Dave Pagurek's inverse-kinematics sketch currently consists of a single chain of connected bones.

Modify the construction of the skeleton so that it forms a simple Y-shaped puppet: a torso with two articulated arms extending from the same shoulder point.

Each arm should be its own IK chain. Have the two hands chase points located 50 pixels to the left and right of the mouse cursor:

[mouseX - 50, mouseY]
[mouseX + 50, mouseY]

You do not need to modify the Bone class or the IK algorithm itself.

Hints
Instead of one variable called chain, you will probably want two, such as leftArm and rightArm.
Both arms can begin at the same (x, y) position.
Call updateIK() separately for each arm.
Call draw() separately for each arm.
The torso does not need IK. It can simply be drawn as a line extending downward from the shared shoulder point.






  
 
# Assignment Set #8a: Experiment

## Overview

For the remainder of the semester, you will work on a *Self-Directed Project* in three phases. Some possible directions for your project include: 

* A creativity tool or app
* A generative composition or simulated environment
* Something else.

## Logistics

The three phases of the Self-Directed Project are collectively worth **2 regular course units**, as follows: 

* **8A. Experiment** (50%)
* **8B. Project** (100%)
* **8C. Presentation/Documentation** (50%)

**Summary of Deliverables**

* **8A. Experiment** (50% total) 
  * 8A.1. Reading: Claude Code and AI Safety (5%, due Wednesday 11/11)
  * 8A.2. Looking Outwards (5%, due Wednesday 11/11)
  * 8A.3. Claude Code Testdrive: Make "The Beach" (10%, due Wednesday 11/11)
  * 8A.4. **Experiment** (30%, Due Monday 11/16)
* **8B. Self-Directed Project** (100% total, due 12/2)
  * Details TBA. 
* **8C. Presentation & Documentation (50% total, due 12/9)


---

## 8A.1. Reading: Claude Code and AI Safety

*(5%, 10 minutes, due before Wednesday 11/11)* You have been provided with access to a paid version of Claude Code, a powerful LLM which is able to work on complicated code projects. Note that this is a *public* version of Claude — it is *not* a university-protected service. For this reason, I respectfully ask you to review some safety measures. *Now:*

* **Read** [this advisory notice](resources/privacy_and_ai.md) about using the Claude Code LLM. This reading should take less than 5 minutes.
* In the Discord channel `8a1-privacy`, **create** a post and **write** a sentence acknowledging that you have read and understand the advisory. 


---

## 8A.2. Looking Outwards

*(5%, 20 minutes, due before Wednesday 11/11)* 

* **Identify** two tiny-scale creative coding projects that inspire you. Think: something made by a [single person on Instagram](https://www.instagram.com/p/Den-Mhbp0dc/) or [on Twitter](https://x.com/FILO_gamedev/status/2052026160390013110) — not a 50-person [Teamlab installation](https://www.teamlab.art/e/tokyo/). 
* **Create** a post the Discord channel `8a2-looking-outwards`. 
* **Write** a sentence about each project. **Include** a URL link and an image or screenshot.

If you're interested, here are some vibecoded apps that various people have made: 

* [blobSketch](https://cpreid2.github.io/blobSketch/) by Colin Reid
* [Hangulish](https://dirt.design/Hangulish/) and [EscherColoring](https://dirt.design/EscherColoring/) by David Braun
* [Symmetry Tool](https://sites.laura.computer/004/) by [Laura Sinisterra](https://laura.computer/#symmetry)
* [Ball Painter](https://ttillberg.github.io/codevember-2026/07/) by Theo Tillberg
* [Ray-Color](https://meodai.github.io/ray-color/) by David Aerne
* [Schematic Brush](https://x.com/blak3shao/status/2095592282665648144) by Blake Shao
* [Plottimation Tool](https://golanlevin.github.io/plottimation/) by Golan Levin
* [Cartoon Show Maker](https://dlobser.github.io/showmaker/) by David Lobser
* [Flipbook Tool](https://flipflipflip.netlify.app/) by Natalie Freed
* [The Flattery](https://theflattery.net/) by Olivia Robinson
* [Ants Explorer](https://ants.superradiance.net/) by Memo Akten
* [Lichen](https://fox-gieg.com/lichen/) by Nick Fox-Gieg
* [sanctuary.lucidspace](https://sanctuary.lucidspace.nyc/) by Ritesh Lala
* [StitchSlop](https://www.stitchslop.com/) by William Osmans
* [Orthomania](https://x.com/andreasgysin/status/2118628093006913822) by Andreas Gysin
* [Sample Chopper](https://x.com/_nok__/status/2100929883434320355) by @_nok__
* [Sumiiid](https://takayustudio.jp/sumiiid/) by Takayu
* [ink-inky](https://ink-inky.vercel.app/) by Ben Lau
* [Fractal Glass Orb](https://x.com/airlasart/status/2077188766301892628) by Airla Fan
* [Paint IRL](https://github.com/LingDong-/paint-irl) by Lingdong Huang
* [Paper303](https://www.instagram.com/p/DfMhKxGAsxh) by Yunlong Gong
* [KnitCanvas](https://www.instagram.com/p/Dez6iX6IEas) by Fatih Izciler
* [Noise Grid](https://www.instagram.com/p/Deg7JEeBcNx) by zorphamax



---

## 8A.3. Claude Code Testdrive: Make "The Beach"

*(10%, 30 minutes, to be completed as an* ***in-class exercise*** *by the end of class Wednesday 11/11)*

I want to make sure that you are able to use the provided version of Claude Code — whether or not you choose to use it for your final project. So the purpose of this exercise is solely to ensure this.

### 1. Install Claude Code

**Follow** [these instructions for installing and registering your Claude Code account](resources/installing_claude.md). After doing so, you should be able to launch Claude Code using the provided (paid) account, part of the "Team" I have made. 

### 2. Create "The Beach" in p5.js

You will recall the emergent-form exercise "[The Beach](https://conditionaldesign.org/workshops/the-beach/)", created by Studio Moniker [as part of their Conditional Design](https://conditionaldesign.org/workshops/the-beach/) series of drawing experiments. Use Claude Code to create an interactive and/or generative version of this idea. You can choose to use Claude Code at the Terminal CLI (command-line app), which is my personal preference; or you may use it from within the VSCode IDE development environment; or you may use it from within the Claude Code app itself.

* **Create** a folder on your Desktop called `claude-test`. 
* **Open** your Terminal app. **Change** directory (`cd`) to the folder you just made, using the command: `cd ~/Desktop/claude-test`.
* In Terminal, **launch** Claude by typing: `claude`. If it asks whether you want to give it permission to work in the `claude-test` directory, say yes.
* **Prompt** Claude Code with a prompt, or series of prompts, to create a version of *The Beach* in p5.js. The app should use `https://cdn.jsdelivr.net/npm/p5@2.3.4/lib/p5.js`, and the p5.js sketch should be 800x600 pixels. If your prompt fails, use the one provided below.
* **Ask** your Claude Code to provide an explanation about how it understood the problem and how it implemented its solution. 
* **Upload** your project to the [corresponding collection in OpenProcessing](https://openprocessing.org/class/107236/#/c/108134).
* **Create** a post in the Discord channel, `8a3-claude-test`. In this post, **paste** Claude's explanation of its problem-solving. 

> <details><summary>Click to reveal a possible prompt for Claude Code to make The Beach.</summary><em>Make an interactive generative artwork based on "The Beach," one of the Conditional Design exercises by Studio Moniker. The main rule of the exercise is: "On each turn, find the most empty space on the paper and place a dot in the middle of it". The project should take the form of a p5.js sketch with an 800×600 canvas. (Use `https://cdn.jsdelivr.net/npm/p5@2.3.4/lib/p5.js`). The sketch should be implemented as a two-player game, with one human player and the computer as the second player, each taking turns. The human always goes first; clicking on the canvas leaves a small black dot where they clicked. The computer then takes its turn by following the main rule: it leaves a small red dot, the same size as the human's. Turns keep alternating for as long as the human keeps clicking. The computer should display its reasoning: When the computer places a dot, briefly draw the empty region it identified (its "most empty space") as a thin outline, then have it fade away quickly. When you're done, tell me in a couple of plain sentences how the computer decides where to put its dot. Include an explanation of how you interpreted "most empty space" and "the middle of it," and whether the paper's edges count as boundaries.</em>
</details>

---

## 8A.4. Experiment

*(30%, due Monday 11/16)*

* **Conduct** an experiment. It can be small. 
* **Document** your experiment: 
  * **Create** a post in the Discord channel, `8a4-experiment`.
  * **Write** 1-2 paragraphs explaining your experiment. **Address** questions like: What *is* it? What inspired it? How did you develop it? What did you test or try out? What struggles did you overcome, or what did you learn?
  * **Include** 1-2 still images of your project. 
  * **Include** other visual documentation of your project, such as a link to an unlisted YouTube video, or an animated GIF.






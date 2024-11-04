# Assignment Set #9

### Creative Coding with AI

* **9.1 Dino Diffusion + p5 Exercise** (10%, 45 minutes)
* 

---

## 9.1 Dino Diffusion + p5 Exercise

*(10%, 45 minutes)* [Diffusion models](https://en.wikipedia.org/wiki/Diffusion_model) are the core AI algorithms used in popular image generation tools like Midjourney and DALL-E. In this warm-up exercise, you will experiment with using custom generative p5.js graphics to "condition" (guide) a simple diffusion AI. We will base our work on "Dino Diffusion", an ultra-minimal diffusion model created by [Ollin Boer Bohan](https://madebyoll.in/) that generates 512×512 botanical images in the browser. 

* **Read** "[Dino Diffusion: Bare-bones Diffusion Models](https://madebyoll.in/posts/dino_diffusion/)" (2023) by Ollin Boer Bohan. (You can play with Bohan's [demo here](https://madebyoll.in/posts/dino_diffusion/demo/).) This is an estimated 12-minute reading.
* **Write** a sentence sharing something you learned from this article, in the Discord channel `09-dino-reading`.
* **Fork** [this OpenProcessing sketch](https://openprocessing.org/sketch/2321795), which is a p5.js port of Bohan's Dino-Diffusion project. (Make sure your forked sketch includes the 8MB ONNX model file, "network.onnx"; if you're lacking this file for some reason, you can also find it [here](https://github.com/golanlevin/dino-diffusion-p5/tree/main).)
* **Experiment** with this sketch as follows:
  * Press RETURN to start or re-start the AI process.
  * Press SPACE to clear the canvas and start over.
  * Press a letter key (and then RETURN) to guide the AI with that letter.
  * **Draw** on the canvas with the cursor to provide input to the AI.
* *Now*, **modify** the code of this sketch, specifically creating your own generative image for guiding the AI. You are expected to do this by modifying the  `generateInputImage()` function. (There are no other parts of the code that should be modified.) Keep in mind that your graphics must be rendered into the `inputGraphics` buffer, an offscreen image whose dimensions are 64×64 pixels. Your program should generate a novel input image every time the user presses a key. (What works well? What doesn't? Why do you suppose?)

---

https://www.youtube.com/watch?v=T2qQGqZxkD0
https://www.youtube.com/watch?v=ydzJPeeMiMI Teachable Sorter
https://medium.com/google-design/teaching-a-bell-to-ring-when-your-pancakes-are-ready-d65db43fffe5 (2020)

# Notes

This is a landfill of mostly unstructured notes to myself.




---

### Color Demonstrations

* [Color Interpolation (Simple)](https://editor.p5js.org/golan/sketches/r7BTC6kdl) by Golan
* [Color Randomness (Simple)](https://editor.p5js.org/golan/sketches/h3ltTBZUd) by Golan

### Advanced Color Library Demos 

Let's first look at the [**Chroma.js Color Palette Helper**](https://gka.github.io/palettes/#/9|s|00429d,96ffea,ffffe0|ffffe0,ff005e,93003a|0|1). This tool can help us master multi-hued, multi-stop color scales.

* [**Chroma.js + p5 demo**](https://editor.p5js.org/golan/sketches/2pkxnwYxF): [Chroma.js](https://www.vis4.net/chromajs/) is a small, zero-dependency JavaScript library for all kinds of color conversions and color scales.
* [**Texel/color + p5 demo**](https://editor.p5js.org/golan/sketches/Ya1xm67i6): [Texel/Color](https://github.com/texel-org/color) by Matt Deslauriers is a minimal and modern color library for JavaScript. It is especially useful for real-time  applications and generative art. Features include fast color conversion, color difference, and gamut mapping.
* [**Mixbox + p5 demo**](https://editor.p5js.org/golan/sketches/FPtOVXlpV): [Mixbox](https://github.com/scrtwpns/mixbox), developed by Šárka Sochorová and Ondřej Jamriška, is a new JavaScript library for natural color mixing. It models colors as real-life pigments using the Kubelka & Munk theory to predict realistic color behavior. The inputs are converted into a version of CMYK; the K–M mixing is performed in that latent space, and then the output is converted to RGB.
* *Also: [Color.js](https://colorjs.io/)*
* *Also: [Culori.js](https://culorijs.org/)*




Uniform Color Palettes

* [The "Magma" color palette in p5](https://editor.p5js.org/golan/sketches/BlPUeC-mf)


### Inspirations

#### Color Pickers: 

* [OK* Color Picker](https://bottosson.github.io/misc/colorpicker/) and related [article](https://bottosson.github.io/posts/colorpicker/) by Björn Ottosson
* [OKLCH Color Picker & Converter](https://oklch.com/#77.33,0.141,123.88,100) by Evil Martians
* [CIELUV Color Picker](https://www.hsluv.org/) by  Alexei Boronine

#### Color Explorers

* David Aerne's [**Poline**](https://meodai.github.io/poline/)
* David Aerne's [**Rampensau**](https://meodai.github.io/rampensau/). RampenSau is a lightweight, dependency-free and blazingly fast color generation library. It makes use of hue cycling and easing functions to generate pleasing color ramps.
* Cynthia Brewer's [**Color Advice for Cartographers**](https://colorbrewer2.org/#type=sequential&scheme=BuPu&n=3)

#### Artworks

* Kjetil Golid's [**Archetype**](https://www.artblocks.io/curated/collections/archetype-by-kjetil-golid?tab=Artworks)
* Anatoly Zenkov's [**Parametric Pottery**](https://anatolyzenkov.com/parametric-pottery/preview/22) (click!) & [code](https://anatolyzenkov.com/preview/parametric-pottery/js/colors.js) (uses OKlab!)
* David Aerne's [**Albers**](https://albers.elastiq.ch/)



### Assignments

* 60-30-10: https://editor.p5js.org/golan/sketches/U5EgeSwwR






Readings: 

* [Computational Color](http://printingcode.runemadsen.com/lecture-color/) by Rune Madsen
* [Computer Color is Broken](https://www.youtube.com/watch?v=LKnqECcg6Gw) (video)
* [Mastering Multi-Hued Color Scales](https://www.vis4.net/blog/mastering-multi-hued-color-scales/)
* [Chroma.js Color Palette Helper](https://gka.github.io/palettes/#/9|s|00429d,96ffea,ffffe0|ffffe0,ff005e,93003a|1|1)
* https://bottosson.github.io/posts/oklab/
* [*An interactive review of Oklab*](https://raphlinus.github.io/color/2021/01/18/oklab-critique.html#update-2021-01-29), Raph Levien, 2021. Includes interactives.
* [*Okay, Color Spaces*](https://ericportis.com/posts/2024/okay-color-spaces/), Eric Portis, 2024. Includes interactives.
* [*Color Spaces*](https://ciechanow.ski/color-spaces/), Bartosz Ciechanowski, 2019. Includes interactives.
* https://github.com/mattdesl/workshop-generative-color

60-30-10: 

* https://www.youtube.com/watch?v=rAfjUOkbyr0

---

---

---

Gemini + p5 + littleBits? 

---

### Diffusion

* Google [GenType](https://labs.google/gentype) & [MakingOf](https://developers.googleblog.com/en/how-its-made-gentype-alphabet-creator/)
* Dino Diffusion
	* Explainer - https://madebyoll.in/posts/dino_diffusion/
	* Demo - https://madebyoll.in/posts/dino_diffusion/demo/
	* Training repo - https://github.com/madebyollin/dino-diffusion
	* p5+Dino (mine) - https://openprocessing.org/sketch/2321795

DinoDiffusion

* [Netron network inspector](https://github.com/lutzroeder/netron)
* [Netron DinoDiffusion](https://netron.app/?url=https://madebyoll.in/posts/dino_diffusion/demo/network.onnx)
* [Colab](https://colab.research.google.com/drive/1lqdR9NS-p1E0-qnpl-0otEryjhcQsdfj#scrollTo=6cGKrZLlcwXG)
* [Colab](https://colab.research.google.com/drive/1lqdR9NS-p1E0-qnpl-0otEryjhcQsdfj#scrollTo=ky0RHfx1buVD)
* [Colab](https://colab.research.google.com/drive/1jrrVNE3zOj2pWGaKOpgaBnRbYZLif1aM?usp=sharing)
* [Colab](https://colab.research.google.com/drive/1SIo3U_5FzW9qHzcc4GtoXleFHy0LJ1S-#scrollTo=GtJSiiuF382r)
* [Colab](https://colab.research.google.com/drive/1g4ennvR90uka-ELYK4yBdxHZzYJk8oRU#scrollTo=cpWAckmG5XEI)
* [ChatGPT ONNX](https://chatgpt.com/c/7e28c77e-060d-4587-a8fa-f09350b0595a)

ComfyUI: 

* [List of nodes](https://ltdrdata.github.io/)
* [LoRAs](https://drive.google.com/drive/folders/1ERcu6v7RHT3v98cyeC715xiAiB3uzEhp)

AI: 

* [What's Really Real? Slide deck](https://docs.google.com/presentation/d/1Jl_CdMicE1chWOqJQOGSXj3o0VVv01v-Y76XaJIuRgE/edit#slide=id.g2c84f3ab5a8_0_3442)


---

### Custom Pixel Project

* Nested For Loop
* Rejection Sampling
* Colored thatch lines

And:

Alvy Ray Smith Pixel book? 
Woman pixel book? 
Fogleman quadtree
CACM Custom Pixel chapter

* Filippo Aleotti's Monocular depth estimation in-browser [demo](https://filippoaleotti.github.io/demo_live/run/)
* https://annotate.pixlab.io/

Segmentation:

* Tom's segmenter: https://github.com/baaivision/Painter
* Meta demo: https://segment-anything.com/demo# 
* Comfy UI node in RunComfy: https://www.runcomfy.com/comfyui-workflows/comfyui-segment-anything-v2-SAM2-image-and-video-segmentation using https://github.com/kijai/ComfyUI-segment-anything-2/tree/main
* SegmentAnything2 Huggingface Space: https://huggingface.co/spaces/SkalskiP/segment-anything-model-2
* Single image segmentation in browser: https://huggingface.co/spaces/webml-community/segment-anything-webgpu or 
https://huggingface.co/spaces/Xenova/segment-anything-webgpu 
* Colab notebook: https://colab.research.google.com/github/facebookresearch/segment-anything/blob/main/notebooks/automatic_mask_generator_example.ipynb
* https://dinov2.metademolab.com/demos?category=depth 


Readings: 

* [From Point to Pixel : A Genealogy of Digital Aesthetics, Meredith Hoy](https://web.p.ebscohost.com/ehost/ebookviewer/ebook/ZTAwMHhuYV9fMTIwMTk5Nl9fQU41?sid=36b96674-49a6-44f1-b0d9-50f2653a40a8@redis&vid=0&lpid=lp_53&format=EB)
* [A Biography of the Pixel, Alvy Ray Smith](https://ebookcentral.proquest.com/lib/cm/reader.action?docID=6676817)


---

### Artists

* [Anna Lucia](https://x.com/annaluciacodes)
* [William Mapan](https://x.com/williamapan)


### Tiny Exercises

* tixy



### Blobs

* https://www.artblocks.io/marketplace/collections/66ba40ed77ff57fa951bc1ef/explore?tokenId=90&hash=0x7df942e0d0ea45f01bc2f4a453efeda1a241e4466ecfeda0ea82457c106d7857


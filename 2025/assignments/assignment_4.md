# Assignment Set #4

### Due Wednesday, September 17, 2025

--- 

![banded_clock.gif](../../2024/assignments/images/banded_clock.gif)

The interactive and dynamic control of visual media over time is a core concern in new media arts. In this project, you are asked to create visualizations that display novel or unconventional representations of the time. This work is due at the beginning of class on Wednesday, September 17. As usual, please feel welcome to contact me via Discord by DM or in the `#haaalp` channel. 

This project has **4 main components**: 

1. *(15 minutes; 5%)* **[Looking Outwards](#41-looking-outwards)**
2. *(60 minutes; 10%)* **[Readings and Viewings](#42-readings-and-viewings)**
3. *(9 hours; 80%)* **[Make Three Clocks](#43-make-three-clocks)**
4. *(15 minutes, 5%)* **[Document Your Work](#document-your-work)**

The learning objectives of this project are:

* To become acquainted with the history of systems and devices for timekeeping
* To devise technologies and graphic concepts for representing time that go beyond conventional methods of visualization and mediation
* To refine your craft skills in the use of code to govern a spatiotemporal design, by effectively and expressively controlling shape, color, form, and motion.

<!--
* 41-looking-outwards
* 42-time-readings
* 43-clocks
-->

---

## 41. Looking Outwards

*(15 minutes; 5%)* **Browse** the timepieces listed in my [**Lecture on Clocks**](https://github.com/golanlevin/lectures/tree/master/lecture_clock) directory. Now, in the `#41-looking-outwards` Discord channel, **write** a couple of sentences about a clock that you find particularly memorable. Why does it stick with you? **Include** an image or screenshot of that project if possible.

---

## 42. Readings and Viewings

*(60 minutes; 10%)* You are asked to enrich your understanding of clocks and timekeeping by **reviewing** the following resources. These readings and viewings should take less an hour.

![history-of-calendar.jpg](../../2024/assignments/images/history-of-calendar.jpg)

Attempts to mark time stretch back many thousands of years, with some of the earliest timekeeping technologies being gnomons, sundials, water clocks, and lunar calendars. Even today’s standard representation of time, with hours and minutes divided into 60 parts, is a legacy inherited from the ancient Sumerians, who used a sexagesimal counting system.

The history of timekeeping is a history driven by economic and militaristic desires for greater precision, accuracy, and synchronization. Every increase in our ability to precisely measure time has had a profound impact on science, agriculture, navigation, communications, and, as always, warcraft.

Despite the widespread adoption of technological standards, there are many other ways to understand time. *Psychological* time contracts and expands with attention; *biological* cycles affect our moods and behavior; *ecological* time is observed in species and resource dynamics; *geological* and *astronomical* rhythms can span millennia. In the twentieth century, Einstein’s theory of relativity further upended our understanding of time, showing that it does not flow in a constant way, but rather in relation to the position from which it is measured—a possibly surprising return to the significance of the observer.

Please **review** the following **5** resources:

* Please **read** this this [**5-page PDF about timekeeping**](../../2024/assignments/readings/drucker_timekeeping.pdf) by design theorist Johanna Drucker, from her book *Graphesis: Visual Forms of Knowledge Production* (Harvard Press, 2014).
* **Browse** or **skim** the [**Wikipedia History of Timekeeping Devices**](https://en.wikipedia.org/wiki/History_of_timekeeping_devices).
* **Review** the information at [**https://yourcalendricalfallacyis.com/**](https://yourcalendricalfallacyis.com/). (It’s awesome!)
* In case you missed it in class, please **watch** this excellent 6-minute YouTube video on the [**History of Timekeeping Devices**](https://www.youtube.com/watch?v=SsULOvIWSUo).
* In case you missed it in class, please **watch** the first 13 minutes of [**A Brief History of the Calendar and Timekeeping**](https://www.youtube.com/watch?v=OaYMK2n9Aow&t=4s), a YouTube lecture by [Dr. Donna Carroll](https://www.maastrichtuniversity.nl/dl-carroll), Lecturer of Physics, Maastricht University.

*Now:* In a Discord post in the `#42-time-readings` channel, please **write** two sentences about something that stuck with you from any of these readings or viewings. What did you see, read or learn that was interesting? Why was it interesting to you?

---

## 43. Make Three Clocks

![proposals-for-clocks_horvitz.jpg](../../2024/assignments/images/proposals-for-clocks_horvitz.jpg)<br />*“Proposals for Clocks” by David Horvitz*

*(9 hours; 80%)* In OpenProcessing, make three different clocks: 

* **A**. *(20%)* One clock which is "digital", and presents the current time in an appealing way using *numbers* — for example: Arabic, Roman, or Chinese numerals. (This can be an opportunity to experiment with self-made type design or dynamic typography.)
* **B**. *(20%)* One clock which is "analog", and presents the current time in an appealing way using the changing positions of (for example) rotating indicators.
* **C**. *(40%)* One clock which is entirely of your own design, which makes the time legible in a new way (through means other than numbers or a traditional clock face). For example, you might visualize numeric bit patterns, or use iteration to present countable graphic elements.

Each timepiece should appear different at all times of the day, and should (probably) repeat its appearance every 24 hours (or other relevant cycle, if desired). You will probably want to use the *[hour()](https://archive.p5js.org/reference/#/p5/hour), [minute()](https://archive.p5js.org/reference/#/p5/minute), [second()](https://archive.p5js.org/reference/#/p5/second)*, and *[millis()](https://archive.p5js.org/reference/#/p5/millis)* functions, but you’re also welcome to use *[day()](https://archive.p5js.org/reference/#/p5/day), [month()](https://archive.p5js.org/reference/#/p5/month)*, and *[year()](https://archive.p5js.org/reference/#/p5/year)* functions in order to build a clock that evolves over longer timescales. If your timepiece measures other phenomena, that’s fine too. You may choose the dimensions and aspect ratio of each clock as necessary, including fullscreen clocks. If your laptop screen does not inspire you, feel free to design a prototype clock display intended for a different display, such as a smart-watch or a public outdoor LED screen.

You are encouraged to **question** basic assumptions about which kind of time is represented, and how. **Consider** things like biological time ([chronobiology](https://en.wikipedia.org/wiki/Chronobiology)), [ultradian rhythms](https://en.wikipedia.org/wiki/Ultradian_rhythm) and [infradian rhythms](https://en.wikipedia.org/wiki/Infradian_rhythm), solar and lunar cycles, celestial time, geological time, decimal time, historical time, [psychological time](http://cpl.revues.org/4998), and subjective time. (This list is not exclusive or exhaustive.) Remember to **sketch** first in your paper sketchbook. At the top of your code for each timepiece, **add a comment** which explains that project. For example, you might explain what your timepiece displays, or how to read it, or how it works.

[This sketch](https://openprocessing.org/sketch/2018166) demonstrates how to use the p5.js basic time functions:<br />[![clock demo](../../2024/assignments/images/clock-demo.gif)](https://openprocessing.org/sketch/2018166)

Here are some potentially helpful clock tutorials on YouTube: 

* Coding Train's [clock tutorial](https://www.youtube.com/watch?v=E4RyStef-gY)
* Patt Vira's [clock tutorial](https://www.youtube.com/watch?v=3Aa8CzklS6c)
* Xin Xin's [clock tutorial](https://www.youtube.com/watch?v=JgLlQPF22Gw)

### Document Your Work

*(15 minutes, 5%)* In one or more Discord posts in the channel `#43-clocks`, concisely describe your three clocks.

**Embed** one or more images of each clock. Show what it looks like or how it behaves at different times of day. If a clock involves animation in a special way, embed an animated GIF.

**Write** a couple sentences that describes each clock (what is the concept, how is it made, how is a person meant to experience it). **Write** another few sentences reflecting on your experience making this work (what was successful, what was a struggle, what did you learn).

---

## Previous CMU Student Projects

Below are some clocks made by former CMU students for this class: Lee Byron's [*Center Clock*]((https://leebyron.com/centerclock/)), 2007; and Caroline Hermans's [*Alarm Sundial*](https://vimeo.com/274997165), 2018.

[![Center Clock](https://raw.githubusercontent.com/golanlevin/60-212/main/openprocessing_images/centerclock.png)](https://leebyron.com/centerclock/)

[![Alarm Sundial by Caroline Hermans](../../2024/assignments/images/sundial_clock_caro.jpg)](https://vimeo.com/274997165)

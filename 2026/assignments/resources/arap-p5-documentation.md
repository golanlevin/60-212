# ARAP-p5 Documentation

This is a p5.js wrapper on Kyle McDonald's implementation of the 2D as-rigid-as-possible shape manipulation method by Igarashi, Moscovich, and Hughes:

* [https://github.com/kylemcdonald/puppetry](https://github.com/kylemcdonald/puppetry) (repo)
* [https://kylemcdonald.github.io/puppetry/](https://kylemcdonald.github.io/puppetry/) (demo)

---

ARAP-p5 lets you make a deformable 2D shape and control it from a p5.js sketch. Your sketch does the drawing. The library does the meshing and shape deformation.

Load the library with:

```html
<script src="https://golanlevin.github.io/arap-p5/arap-p5.js"></script>
```

The matching `.wasm` file is loaded automatically from the same folder.

## Basic Sketch Pattern

```js
let arapShape;
let activeControl = -1;

function setup() {
  createCanvas(400, 400);

  let vertices = [
    [200, 150],
    [300, 50],
    [325, 75],
    [225, 175],
    [225, 350],
    [175, 350],
    [175, 175],
    [75, 75],
    [100, 50],
  ];

  arapShape = new ArapP5.ArapShape(vertices);
  arapShape.setResolution("medium");

  arapShape.addPin(200, 325);
  arapShape.addControl(300, 75);
  arapShape.addControl(100, 75);

  arapShape.build();
}

function draw() {
  background(220);

  let boundary = arapShape.getBoundary();

  fill(255);
  stroke(0);
  beginShape();
  for (let p of boundary) {
    vertex(p.x, p.y);
  }
  endShape(CLOSE);
}
```

## Creating A Shape

### `new ArapP5.ArapShape(vertices)`

Creates a new deformable shape.

`vertices` is an array of points around the outside edge of the shape. The
points should be in order around the boundary.

```js
let vertices = [
  [100, 100],
  [300, 100],
  [300, 300],
  [100, 300],
];

let arapShape = new ArapP5.ArapShape(vertices);
```

Points can be written as arrays:

```js
[100, 200]
```

or objects:

```js
{ x: 100, y: 200 }
```

## Building The Shape

### `arapShape.build()`

Builds the internal mesh and prepares the shape for deformation.

Call this after adding your pins and controls.

```js
arapShape.addPin(200, 325);
arapShape.addControl(300, 75);
arapShape.addControl(100, 75);
arapShape.build();
```

`build()` is asynchronous, but in many simple sketches you can call it normally.
If you want to wait until it is definitely ready, use `await` inside an
`async` function:

```js
async function setup() {
  createCanvas(400, 400);
  arapShape = new ArapP5.ArapShape(vertices);
  arapShape.addPin(200, 325);
  await arapShape.build();
}
```

## Mesh Resolution

### `arapShape.setResolution("medium")`

Sets how detailed the internal mesh should be.

Use `"low"` for a simpler, faster mesh. Use `"medium"` for a smoother mesh.

```js
arapShape.setResolution("medium");
```

Set the resolution before calling `build()`:

```js
arapShape = new ArapP5.ArapShape(vertices);
arapShape.setResolution("medium");
arapShape.build();
```

You can also change the resolution later. Since this rebuilds the mesh, use
`await` if the next line depends on the rebuild being finished:

```js
await arapShape.setResolution("low");
```

## Pins

### `arapShape.addPin(x, y)`

Adds a fixed point. A pin holds part of the shape in place.

```js
arapShape.addPin(200, 325);
```

You can also pass an array:

```js
arapShape.addPin([200, 325]);
```

or an object:

```js
arapShape.addPin({ x: 200, y: 325 });
```

The point you give will snap to the nearest mesh vertex.

## Controls

### `arapShape.addControl(x, y)`

Adds a movable control point.

```js
let controlIndex = arapShape.addControl(300, 75);
```

The returned number is the control's index. You can use that index later when
moving the control:

```js
arapShape.moveControl(controlIndex, mouseX, mouseY);
```

Like pins, controls can be written as separate coordinates, arrays, or objects:

```js
arapShape.addControl(300, 75);
arapShape.addControl([300, 75]);
arapShape.addControl({ x: 300, y: 75 });
```

## Moving Controls

### `arapShape.moveControl(index, x, y)`

Moves one control point and updates the shape.

```js
arapShape.moveControl(0, mouseX, mouseY);
```

`index` is the order in which the control was added. The first control is `0`,
the second is `1`, and so on.

### `arapShape.setControl(index, x, y)`

This does the same thing as `moveControl()`.

```js
arapShape.setControl(0, mouseX, mouseY);
```

### `arapShape.resetControls()`

Moves all controls back to their starting positions.

```js
arapShape.resetControls();
```

## Finding A Control With The Mouse

### `arapShape.nearestControl(x, y, maxDistance)`

Finds the closest control point to a position.

This is useful in `mousePressed()` when you want to decide which control the
user is trying to drag.

```js
function mousePressed() {
  activeControl = arapShape.nearestControl(mouseX, mouseY, 18);
}
```

If no control is close enough, the function returns `-1`.

`maxDistance` is optional. If you leave it out, the library uses `18` pixels.

```js
let which = arapShape.nearestControl(mouseX, mouseY);
```

## Getting The Deformed Boundary

### `arapShape.getBoundary()`

Returns the current deformed outside edge of the shape.

This is the main function you will usually use for drawing.

```js
let boundary = arapShape.getBoundary();

beginShape();
for (let p of boundary) {
  vertex(p.x, p.y);
}
endShape(CLOSE);
```

Each point has `.x` and `.y` properties:

```js
let firstPoint = boundary[0];
circle(firstPoint.x, firstPoint.y, 10);
```

### `arapShape.getRestBoundary()`

Returns the original, undeformed boundary.

```js
let originalBoundary = arapShape.getRestBoundary();
```

## Getting Pins And Controls

### `arapShape.getPins()`

Returns information about the pins.

```js
let pins = arapShape.getPins();

for (let pin of pins) {
  fill(255, 0, 0);
  square(pin.x - 5, pin.y - 5, 10);
}
```

Each pin includes:

```js
pin.index
pin.x
pin.y
pin.rest
pin.meshIndex
```

### `arapShape.getControls()`

Returns information about the controls.

```js
let controls = arapShape.getControls();

for (let control of controls) {
  fill(0);
  circle(control.x, control.y, 8);
}
```

Each control includes:

```js
control.index
control.x
control.y
control.rest
control.target
control.meshIndex
```

## Drawing The Debug Mesh

### `arapShape.drawDebug()`

Draws the triangle mesh using p5.js drawing functions.

This is only for debugging. It does not draw the filled shape or the controls.

```js
arapShape.drawDebug();
```

A common pattern is to toggle it with a key:

```js
let showDebug = false;

function draw() {
  background(220);

  drawMyShape();

  if (showDebug) {
    arapShape.drawDebug();
  }
}

function keyPressed() {
  if (key === "d") {
    showDebug = !showDebug;
  }
}
```

If you are using p5 instance mode, pass `this`:

```js
arapShape.drawDebug(this);
```

You can optionally customize the mesh drawing:

```js
arapShape.drawDebug({
  stroke: [0, 0, 255, 80],
  strokeWeight: 1,
});
```

## Getting The Whole Mesh

### `arapShape.getMesh()`

Returns the full internal mesh data. You probably don't need this for simple sketches.

```js
let mesh = arapShape.getMesh();
```

The returned object includes:

```js
mesh.vertices
mesh.deformedVertices
mesh.triangles
mesh.boundaryCount
mesh.resolution
```

`vertices` are the original mesh points. `deformedVertices` are the current
deformed mesh points. `triangles` is an array of triangle index lists.

## Changing The Boundary

### `arapShape.setBoundary(vertices)`

Replaces the shape's boundary vertices.

After changing the boundary, call `build()` again.

```js
arapShape.setBoundary(newVertices);
await arapShape.build();
```

## Rebuilding

### `arapShape.rebuild()`

Builds the mesh again using the current boundary, pins, controls, and settings.

This is useful if you changed a setting and want to update the mesh.

```js
await arapShape.rebuild();
```

## Complete Mouse Drag Example

```js
let arapShape;
let activeControl = -1;

function setup() {
  createCanvas(400, 400);

  arapShape = new ArapP5.ArapShape(vertices);
  arapShape.setResolution("medium");
  arapShape.addPin(200, 325);
  arapShape.addControl(300, 75);
  arapShape.addControl(100, 75);
  arapShape.build();
}

function draw() {
  background(220);

  let boundary = arapShape.getBoundary();
  fill(255);
  stroke(0);
  beginShape();
  for (let p of boundary) {
    vertex(p.x, p.y);
  }
  endShape(CLOSE);

  let controls = arapShape.getControls();
  fill(0);
  for (let c of controls) {
    circle(c.x, c.y, 8);
  }
}

function mousePressed() {
  activeControl = arapShape.nearestControl(mouseX, mouseY);
}

function mouseDragged() {
  if (activeControl >= 0) {
    arapShape.moveControl(activeControl, mouseX, mouseY);
  }
}

function mouseReleased() {
  activeControl = -1;
}
```

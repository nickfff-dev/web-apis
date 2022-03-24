const sensor = new AbsoluteOrientationSensor();
const mat4 = new Float32Array(16);
sensor.start();
sensor.onerror = event => console.log(event.error.name, event.error.message);

sensor.onreading = () => {
  sensor.populateMatrix(mat4);
};


let startElem = document.querySelector("p");
let endElem = startElem.querySelector("span");
let range = document.createRange();

range.setStart(startElem, 0);
range.setEnd(endElem, endElem.childNodes[0].length/2);
let contents = range.cloneContents();

document.body.appendChild(contents);
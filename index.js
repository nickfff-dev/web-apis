const sensor = new AbsoluteOrientationSensor();
const mat4 = new Float32Array(16);
sensor.start();
sensor.onerror = event => console.log(event.error.name, event.error.message);

sensor.onreading = () => {
  sensor.populateMatrix(mat4);
};
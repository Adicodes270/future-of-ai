const lenis = new Lenis();

function raf(time){
    lenis.raf(time);
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

const canvas = document.getElementById("neuralWave");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let t = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  for (let x = 0; x < canvas.width; x++) {
    const y = canvas.height / 1.8 + Math.sin((x + t) * 0.012) * 70;
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = "rgba(67, 99, 202, 0.9)";
  ctx.lineWidth = 5;
  ctx.stroke();
  t += 1;
  requestAnimationFrame(draw);
}


draw();

import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.157.0/build/three.module.js";

const container = document.getElementById("neural3d");
const scene2 = new THREE.Scene();

const camera2 = new THREE.PerspectiveCamera(40, 1, 0.1, 10);
camera2.position.z = 3;

const renderer2 = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer2.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer2.domElement);

// Create node points
const geometry2 = new THREE.IcosahedronGeometry(1, 2);
const material2 = new THREE.PointsMaterial({
  color: "#9947fdff",
  size: 0.04,
});
const points = new THREE.Points(geometry2, material2);
scene2.add(points);

// Connect the points with faint lines
const wireMaterial = new THREE.LineBasicMaterial({
  color: "#4D9FFF",
  transparent: true,
  opacity: 0.7
});
const wireframe = new THREE.LineSegments(
  new THREE.WireframeGeometry(geometry2),
  wireMaterial
);
scene2.add(wireframe);

function animateNeural() {
  points.rotation.y += 0.002;
  wireframe.rotation.y += 0.002;
  points.rotation.x += 0.001;
  wireframe.rotation.x += 0.001;

  renderer2.render(scene2, camera2);
  requestAnimationFrame(animateNeural);
}
animateNeural();

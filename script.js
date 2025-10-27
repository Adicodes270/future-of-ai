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




const pointsSpans = document.querySelectorAll(".ai-content-points span");

pointsSpans.forEach(span => {
    span.style.background = "linear-gradient(135deg, #4d9fff, #ffffff)";
    span.style.webkitBackgroundClip = "text";
    span.style.webkitTextFillColor = "transparent";
    
      
    span.style.fontSize = "2.3rem";
});






const quoteElements = document.querySelectorAll('.quotes h1, .quotes h2, .quotes span')
quoteElements.forEach(quote => {
    quote.style.transition = 'transform 0.4s ease, color 0.4s ease';
    quote.addEventListener('mouseenter', () => {
        quote.style.transform = 'scale(1.05)';
    });
    quote.addEventListener('mouseleave', () => {
        quote.style.transform = 'scale(1)';
    });
});

const WhatlaElements = document.querySelectorAll('.what-lies-ahead #ai-content-title');
WhatlaElements.forEach(p => {
    p.style.transition = 'transform 0.4s ease, color 0.4s ease';
    p.addEventListener('mouseenter', () => {
        p.style.transform = 'scale(1.05)';
    });
    p.addEventListener('mouseleave', () => {
        p.style.transform = 'scale(1)';
    });
});



const aiDevelopersElements = document.querySelectorAll('.ai-developers h1, .ai-developers h2, .ai-developers p');
aiDevelopersElements.forEach(element => {
  element.style.transition = 'transform 0.4s ease, color 0.4s ease';
  element.addEventListener('mouseenter', () => {
    element.style.transform = 'scale(1.05)';
    element.style.color = '#4d9fff'; 
  });
  element.addEventListener('mouseleave', () => {
    element.style.transform = 'scale(1)';
    element.style.color = ''; 
  });
});


const quotes = document.querySelectorAll('.quote');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentQuote = 0;

function showQuote(index) {
    quotes.forEach(q => q.classList.remove('active'));
    quotes[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    currentQuote = (currentQuote - 1 + quotes.length) % quotes.length;
    showQuote(currentQuote);
});

nextBtn.addEventListener('click', () => {
    currentQuote = (currentQuote + 1) % quotes.length;
    showQuote(currentQuote);
});




document.querySelectorAll('.card1, .card2, .card3, .card4').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = y / rect.height * 50; 
        const rotateY = -x / rect.width * 50;
        card.style.transform = `perspective(500px) scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
       card.style.transform = 'perspective(500px) scale(1) rotateX(0deg) rotateY(0deg)'
    });
});


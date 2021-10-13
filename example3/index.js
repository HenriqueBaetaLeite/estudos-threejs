import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor('#e5e5e5');
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Mantenho o aspecto do objeto mesmo quando redimensiono a tela!
const updateScreenSize = () => {
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
};

const raycaster = new THREE.Raycaster();

const mouse = new THREE.Vector2();

const geometry = new THREE.BoxGeometry(2, 2, 2);

const material = new THREE.MeshLambertMaterial({ color: 0xffcc00 });

const cube = new THREE.Mesh(geometry, material);

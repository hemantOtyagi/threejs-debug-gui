import * as THREE from 'three';
import * as dat from '../node_modules/dat.gui';
import * as lil from "lil-gui";
import gsap from "gsap";
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js'


//adding controls using dat.ui
const gui = new dat.GUI();
const parameter = {
  color: 0xffffff,
  spinY: () => {
    gsap.to(cube.rotation, { duration: 1, y: cube.rotation.y + 5})
  },
  spinX: () => {
    gsap.to(cube.rotation, { duration: 1, x: cube.rotation.x + 5})    
  }
}



//defining sizes
const sizes = {
  width: 600,
  height: 800
}


//getting dom element as canvas on which all these element gets mounted
const canvas = document.getElementById('webgl');

//creating a scene
const scene = new THREE.Scene();


//creating a object 
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: parameter.color , wireframe: false });
const cube = new THREE.Mesh(geometry , material);
scene.add(cube);

//adding  a propertie to  debug-gui for manipulating it 
//gui.add(cube.position, 'x', -2, 2, 0.01)
gui
  .add(cube.position, 'y')
  .min(-3)
  .max(3)
  .step(0.01)
  .name('elevation')


gui
  .add(cube.position, 'x')
  .min(-3)
  .max(3)
  .step(0.01)
  .name('dragging')

//adding color changes control in thr gui
gui
   .addColor(parameter, 'color')
   .onChange(() => {
    material.color.set(parameter.color)
  })

//adding a spin function into the gui controls for Y-axis
gui
   .add(parameter, 'spinY')
   .name("Spin Y-axis")

//adding a spin function into the gui controls for Y-axis
gui
   .add(parameter, 'spinX')
   .name('Spin X-axis')

//adding visibility controls in the gui 
gui
   .add(cube, 'visible')

//adding wireframe controls in the gui
gui
   .add(material, 'wireframe')



//creating a camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height , 0.1, 1000);
camera.position.z = 3;
scene.add(camera);


//creating a WebGLRenderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas})
renderer.setSize( sizes.width , sizes.height );
renderer.setAnimationLoop( animate );
renderer.render(scene, camera);


//modifying the size as the screen size changes
window.addEventListener('resize', () => {

//updated width and height
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

//updated aspect ratio of the camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

//updated the size of the renderer
  renderer.setSize(sizes.width , sizes.height);
 
})

//adding OrbitControls 
const controls = new OrbitControls(camera, canvas);
controls.enableDamping= true;




renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

function animate() {

  renderer.setAnimationLoop(animate)
	cube.rotation.x += 0.005;
	cube.rotation.y += 0.005;

	renderer.render( scene , camera);

}

animate()

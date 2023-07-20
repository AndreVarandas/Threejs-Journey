import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()
const sizes = {
  width: 800,
  height: 600,
}

// Red cube
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 }),
)
scene.add(cube)

// Create camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(2, 2, 2)
camera.lookAt(cube.position)
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// Time
const clock = new THREE.Clock()

// Animations

const tick = () => {
  // Time
  const elapsedTime = clock.getElapsedTime()

  // Update objects
  cube.rotation.y = elapsedTime

  // // Render
  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()

import * as THREE from 'three'

// Cursor
const cursor = {
  x: 0,
  y: 0,
}

document.addEventListener('mousemove', event => {
  cursor.x = event.clientX / sizes.width - 0.5
  cursor.y = -(event.clientY / sizes.height - 0.5)
})

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
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100,
)

// const aspectRatio = sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRatio,
//   1 * aspectRatio,
//   1,
//   -1,
//   0.1,
//   100,
// )
// camera.position.set(2, 2, 2)
camera.position.z = 3
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
  // cube.rotation.y = elapsedTime

  // Update camera
  // camera.position.x = cursor.x * 10
  // camera.position.y = cursor.y * 10
  camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
  camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
  camera.position.y = cursor.y * 5

  camera.lookAt(cube.position)

  // // Render
  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()

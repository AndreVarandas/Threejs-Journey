import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

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
  width: window.innerWidth,
  height: window.innerHeight,
}

// Resize window on resize
window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Fullscreen
window.addEventListener('dblclick', () => {
  if (!document.fullscreenElement) {
    console.log('Go fullscreen')
    canvas.requestFullscreen()
  } else {
    console.log('Leave fullscreen')
    document.exitFullscreen()
  }
})

// Red cube
// const cube = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1, 2, 2, 2),
//   new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true }),
// )
// scene.add(cube)

// const positionsArray = new Float32Array(9)
// positionsArray[0] = 0
// positionsArray[1] = 0
// positionsArray[2] = 0

// positionsArray[3] = 0
// positionsArray[4] = 1
// positionsArray[5] = 0

// positionsArray[6] = 1
// positionsArray[7] = 0
// positionsArray[8] = 0

const geometry = new THREE.BufferGeometry()

// const positionsArray = new Float32Array([0, 0, 0, 0, 1, 0, 1, 0, 0])

// const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3)

// geometry.setAttribute('position', positionsAttribute)

const count = 500

const positionsArray = new Float32Array(count * 3 * 3)

for (let i = 0; i < count * 3 * 3; i++) {
  positionsArray[i] = (Math.random() - 0.5) * 4
}

const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3)

geometry.setAttribute('position', positionsAttribute)

const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// Create camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100,
)
camera.position.z = 3
camera.lookAt(cube.position)
scene.add(camera)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Animations

const tick = () => {
  // Update objects
  controls.update()

  // // Render
  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()

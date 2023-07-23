import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// Since the version 0.152 of Three.js, colors might look different by default.
// These two lines have been added in order to get the same results.
THREE.ColorManagement.enabled = false

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
window.addEventListener('dblclick', () =>
  document.fullscreenElement
    ? document.exitFullscreen()
    : canvas.requestFullscreen(),
)

// Red cube
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
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
renderer.outputColorSpace = THREE.LinearSRGBColorSpace

// Animations

const tick = () => {
  // Update objects
  controls.update()

  // // Render
  renderer.render(scene, camera)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  window.requestAnimationFrame(tick)
}

tick()

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import gsap from 'gsap'

// Since the version 0.152 of Three.js, colors might look different by default.
// These two lines have been added in order to get the same results.
THREE.ColorManagement.enabled = false

/**
 * Textures
 */
const loadingManager = new THREE.LoadingManager()

// loadingManager.onLoad = () => {
//   console.log('load')
// }

// loadingManager.onError = () => {
//   console.log('error')
// }

// loadingManager.onProgress = () => {
//   console.log('progress')
// }

const textureLoader = new THREE.TextureLoader(loadingManager)
const colorTexture = textureLoader.load('/static/textures/door/color.jpg')
const alphaTexture = textureLoader.load('/static/textures/door/opacity.jpg')
const heightTexture = textureLoader.load('/static/textures/door/height.png')
const normalTexture = textureLoader.load('/static/textures/door/normal.jpg')
const ambientOcclusionTexture = textureLoader.load(
  '/static/textures/door/occlusion.jpg',
)
const metalnessTexture = textureLoader.load(
  '/static/textures/door/metallic.jpg',
)
const roughnessTexture = textureLoader.load(
  '/static/textures/door/roughness.jpg',
)

// colorTexture.repeat.x = 2
// colorTexture.repeat.y = 3
// colorTexture.wrapS = THREE.MirroredRepeatWrapping
// colorTexture.wrapT = THREE.MirroredRepeatWrapping

// colorTexture.offset.x = 0.5
// colorTexture.offset.y = 0.5

// colorTexture.rotation = Math.PI / 4
// colorTexture.center.x = 0.5
// colorTexture.center.y = 0.5

// colorTexture.minFilter = THREE.NearestFilter

// If nearest filter is used in the minFilter, we can disable the mipmaps to gain performance
colorTexture.generateMipmaps = false
colorTexture.magFilter = THREE.NearestFilter
colorTexture.minFilter = THREE.NearestFilter

/**
 * Debug UI
 */
const gui = new GUI()

const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

const parameters = {
  color: 0xff0000,
  spin: () => {
    gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + 10 })
  },
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
const geometry = new THREE.BoxGeometry(1, 1, 1)

const material = new THREE.MeshBasicMaterial({
  map: colorTexture,
})

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Debug
gui.add(mesh.position, 'y').min(-3).max(3).step(0.01).name('elevation')
gui.add(mesh, 'visible')
gui.add(material, 'wireframe')
gui.addColor(material, 'color')
gui.add(parameters, 'spin')

// Create camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100,
)
camera.position.z = 3
camera.lookAt(mesh.position)
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

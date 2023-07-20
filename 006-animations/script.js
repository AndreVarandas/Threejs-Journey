import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()

const sizes = {
  width: 800,
  height: 600,
}

// Create camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// Time
let time = Date.now()

// Animations
const tick = () => {
  // Time
  const currentTime = Date.now()
  const deltaTime = currentTime - time
  time = currentTime

  // Update objects
  mesh.rotation.x += 0.001 * deltaTime

  // Render
  renderer.render(scene, camera)

  window.requestAnimationFrame(tick)
}

tick()

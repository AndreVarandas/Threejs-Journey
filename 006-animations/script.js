import * as THREE from 'three'
import gsap from 'gsap'

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
const clock = new THREE.Clock()

// Animations

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 })

const tick = () => {
  // Time
  // const elapsedTime = clock.getElapsedTime()
  // // Update objects
  // mesh.position.y = Math.sin(elapsedTime)
  // mesh.position.x = Math.cos(elapsedTime)
  // // Render
  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()

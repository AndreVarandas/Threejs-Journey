import * as THREE from 'three'

const canvas = document.querySelector('.webgl')

// Create scene
const scene = new THREE.Scene()

// Object Group
const group = new THREE.Group()
group.position.y = 1
scene.add(group)

// Object 1
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 }),
)
group.add(cube1)

// Object 2
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
)
cube2.position.x = -2
group.add(cube2)

// Object 3
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff }),
)
cube3.position.x = 2
group.add(cube3)

// Axes Helper
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

// Sizes
const sizes = {
  width: 800,
  height: 600,
}

// Create camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

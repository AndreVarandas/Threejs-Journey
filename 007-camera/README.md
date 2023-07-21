## Notes on 007-camera

### Perspective Camera

-   Perspective camera is the most common camera type
-   It mimics the way the human eye sees the world
-   It has a field of view, an aspect ratio, and near and far clipping planes

The field of view is the angle of the camera's lens. The larger the angle, the more the camera can see. The aspect ratio is the ratio of the camera's width to its height. The near and far clipping planes define the range of distances that the camera can see. Anything closer than the near clipping plane or farther than the far clipping plane will not be rendered.

### Controls

Controls are used to move the camera around the scene. The [OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls) allow you to rotate the camera around the scene, zoom in and out, and pan the camera. The [TrackballControls](https://threejs.org/docs/#examples/en/controls/TrackballControls) allow you to rotate the camera around the scene and zoom in and out. The [FlyControls](https://threejs.org/docs/#examples/en/controls/FlyControls) allow you to move the camera forward, backward, left, right, up, and down.

**Key points**

-   Perspective camera is the most common camera type
-   Near and far clipping planes define the range of distances that the camera can see
-   Using extreme values for the near and far clipping planes can cause rendering issues such as z-fighting
-   Orthographic camera far elements are the same size as near elements
-   Use controls to move the camera around the scene

## Run it

```bash
# Install dependencies
yarn

# Run dev server
yarn dev
```

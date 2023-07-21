## Notes on 007-camera

### Perspective Camera

-   Perspective camera is the most common camera type
-   It mimics the way the human eye sees the world
-   It has a field of view, an aspect ratio, and near and far clipping planes

The field of view is the angle of the camera's lens. The larger the angle, the more the camera can see. The aspect ratio is the ratio of the camera's width to its height. The near and far clipping planes define the range of distances that the camera can see. Anything closer than the near clipping plane or farther than the far clipping plane will not be rendered.

**Key points**

-   Perspective camera is the most common camera type
-   Near and far clipping planes define the range of distances that the camera can see
-   Using extreme values for the near and far clipping planes can cause rendering issues such as z-fighting
-   Orthographic camera far elements are the same size as near elements

## Run it

```bash
# Install dependencies
yarn

# Run dev server
yarn dev
```

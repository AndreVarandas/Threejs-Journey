## Notes on 005-transform-objects

1 unit is 1 unit of wathever we want. It could be 1 meter, 1 kilometer, 1 mile, 1 light year, etc.

By default z goes into the screen, x goes to the right and y goes up.

We can change and set positions of objects using the `position` property of the `mesh` object, but should be done before rendering the scene.

Use groups to group objects together. The group will have the same position, rotation and scale as the objects it contains. This is useful to move a group of objects together without having to move each one of them.

### Position

Position is a vector that has 3 components: x, y and z. It is a property of the `mesh` object.

### Rotation

The rotation property of a Mesh instance is a Euler object. It has 3 components: x, y and z. Each component is a rotation in radians.

### Scale

Scale is a vector that has 3 components: x, y and z. It is a property of the `mesh` object.

**Key points**

-   `position` property of the `mesh` object.
-   `rotation` property of the `mesh` object.
-   `scale` property of the `mesh` object.
-   axes helper to see the axes of the scene.
-   Rotation can be reordered using the `rotation.reorder` property of the `mesh` object.

## Run it

```bash
# Install dependencies
yarn

# Run dev server
yarn dev
```

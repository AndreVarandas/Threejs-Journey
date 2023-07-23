## Notes on 009 Geometries

A Geometry is a collection of points, lines, and/or faces that define the shape of an object. Three.js comes with a number of built-in geometries, and provides an easy way to create your own.

Three.js provides a number of built-in geometries.

More triangles means more faces, which means more computation for the GPU. So, it's important to keep the number of triangles as low as possible. It also means more detail, so it's a trade-off.

We can manually create a geometry by specifying the vertices and faces. This is useful if we want to create a custom shape. We start by creating a Float32Array of vertices. Each vertex is a set of three numbers, representing the x, y, and z coordinates of the vertex. We then set a position attribute on the geometry, and pass in the vertices.

**Key points**

-   A Geometry is a collection of points, lines, and/or faces that define the shape of an object.
-   Three.js comes with a number of built-in geometries, and provides an easy way to create your own.

## Run it

```bash
# Install dependencies
yarn

# Run dev server
yarn dev
```

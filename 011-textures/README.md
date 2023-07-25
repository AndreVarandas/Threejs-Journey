## Notes on 011 Textures

### What are textures?

Textures are based on images. They are used to add details to a material.

We have Color or Albedo textures, Normal textures, Ambient Occlusion textures, Roughness textures, Metalness textures, Displacement textures, etc.

-   Color, Albedo add color to the Material.
-   Alpha textures are used to define the transparency of a material.
-   Height or Displacement textures are used to add depth to a material.
-   Normal textures are used to add details to a material.
-   Ambient Occlusion textures are used to add shadows to a material.
-   Metalness textures are used to define the metalness of a material.
-   Roughness textures are used to define the roughness of a material.
-   PBR Physically Based Rendering is a technique to render realistic materials. PBR is also becoming the standard.

Filtering and mipmapping are used to improve the quality of the textures. Either by reducing the size of the texture or by reducing the number of pixels used to render the texture.

Mipmappings create a pyramid of textures. Each level of the pyramid is half the size of the previous level. The smallest level is 1x1 pixel.

Magnification and Minification are used to improve the quality of the textures. Either by increasing the size of the texture or by increasing the number of pixels used to render the texture.

The mipmapping will produce half the size of the original texture. So the texture must be a power of 2. 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, etc.

Three.js will automatically resize the texture to a power of 2 if the texture is not a power of 2, at the cost of performance.

### Image formats and compression

As the useres would have to download the textures keep in mind that Png is a lossless format. Jpeg is a lossy format.

GPU has a limited amount of memory. So we need to compress the textures and send smaller textures to the GPU.

PNG supports transparency, which might be useful for the material that we are using.

Normals are also usually stored in PNG format.

**Key points**

-   UV Coordinates are used to map a texture to a 3D model.
-   UV Coordinates are defined in a 2D space.
-   Filtering and mipmapping are used to improve the quality of the textures.
-   Magnification turn small textures into sharp textures.

## Run it

```bash
# Install dependencies
yarn

# Run dev server
yarn dev
```

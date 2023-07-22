## Notes on 008 Fullscreen and Resizing

Fullscreen in order to make it more immersive. There are a few things to keep in mind:

-   Margin and padding should be removed. There might be scrollbars as well which are removed with `overflow: hidden`. Some browsers might also outline the page with a blue border which can be removed with `outline: none`.
-   The canvas should be resized to the window size. This can be done with `window.innerWidth` and `window.innerHeight`. The canvas size can be set with `canvas.width` and `canvas.height`. The canvas size should be set in the `resize` event listener and also when the page loads.

Fullscreen can be toggled with `requestFullscreen` and `exitFullscreen` methods. The request method is called on the element to be made fullscreen. The exit method is called on the document.

**Key points**

-   `window.innerWidth` and `window.innerHeight` give the window size.
-   Add resize event listener to window to resize the canvas when the window is resized.
-   Devices have different pixel ratios. `window.devicePixelRatio` gives the pixel ratio of the device.
-   `requestFullscreen` and `exitFullscreen` methods are used to make the page fullscreen and exit fullscreen respectively.

## Run it

```bash
# Install dependencies
yarn

# Run dev server
yarn dev
```

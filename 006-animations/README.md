## Notes on 006 Animations

Animations are added by changing the position or rotation of a mesh over time.

Delta time is the time between frames. It is used to make sure that the animation is smooth and not dependent on the frame rate. It is calculated by subtracting the current time from the previous time.

requestAnimationFrame is a function that runs a function on every frame. It can be used to run the animation loop.

**Key points**

-   Animations are added by changing the position or rotation of a mesh over time.
-   Delta time is the time between frames.
-   We can use the `requestAnimationFrame` function to run a function on every frame.
-   External libraries like `gsap` can be used to make animations easier.

## Run it

```bash
# Install dependencies
yarn

# Run dev server
yarn dev
```

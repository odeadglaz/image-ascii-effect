export const mouse = {
  x: 0,
  y: 0,
};

export const increaseHue = () => (hue += 0.5);
export const setMousePosition = ({ x, y }) => Object.assign(mouse, { x, y });

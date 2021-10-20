import { canvas, context } from './constants';

export const wipe = () => context.clearRect(0, 0, canvas.width, canvas.height);

export const imageData = (bitmap: ImageBitmap) => {
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;

  context.drawImage(bitmap, 0, 0);

  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

  return imageData;
};

export const letter = (letter, color, position, size) => {
  context.fillStyle = color;
  context.font = `${size + 8}px Verdana`;
  context.fillText(letter, position.x, position.y);
};

export const line = (x = 0, y = 0, length = 300, color = 'white') => {
  context.beginPath();
  context.fillStyle = color;
  context.moveTo(x, y);
  context.lineTo(x + length, y + length);
  context.stroke();
  context.closePath();
};

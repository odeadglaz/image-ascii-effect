import { AsciiEffect } from './AsciiEffect';
import * as painter from './painter';

import './style.css';

const rangeInput: HTMLInputElement = document.querySelector('.range input');
const rangeLabel: HTMLLabelElement = document.querySelector('.range-label');

const fetchImageBitmap = async () => {
  const imageData = await fetch(
    'https://newsletter.gradle.com/images/gradle-400x400.png'
  );

  const blob = await imageData.blob();

  return await createImageBitmap(blob);
};

let effect;
const runEffect = () => {
  const value = Number(rangeInput.value);

  rangeLabel.innerHTML = value === 1 ? 'Original Image' : `${value} PX`;

  effect.apply(value);
};

const init = async () => {
  const bitmap = await fetchImageBitmap();

  const imageData = painter.imageData(bitmap);

  effect = new AsciiEffect(imageData);

  effect.apply();
};

rangeInput.addEventListener('input', runEffect);
init();

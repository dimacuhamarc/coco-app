import React from 'react'

export default function Subtitle({
  style,
  text,
  type = 1,
  theme = 1,
}: SubtitleProps) {

  let fontSize = 'text-subtitle-1';
  let weight = 'font-normal';
  let color = 'text-t-dark';

  if (theme === 1) {
    color = 'text-t-dark';
  } else if (theme === 2) {
    color = 'text-t-light';
  } else {
    color = 'text-t-default';
  }

  if (type === 1) {
    fontSize = 'text-subtitle-1';
    weight = 'font-medium';
  } else if (type === 2) {
    fontSize = 'text-subtitle-2';
    weight = 'font-medium'; 
  }

  return (
    <h2 className={`${color} ${style} font-vollkorn ${fontSize} ${weight}`}>
      {text || 'Sample Subtitle'}
    </h2>
  );
}

type SubtitleProps = {
  text: string
  theme?: number
  style?: string
  type?: number
}
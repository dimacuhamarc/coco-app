import React from 'react'

export default function Caption({
  style,
  text,
  theme = 1,
}: CaptionProps) {

  let fontSize = 'text-caption';
  let weight = 'font-bold';
  let color = 'text-t-dark';

  if (theme === 1) {
    color = 'text-t-dark';
  } else if (theme === 2) {
    color = 'text-t-light';
  } else {
    color = 'text-t-default';
  }

  return (
    <span className={`${color} ${style} font-poppins ${fontSize} ${weight}`}>
      {text || 'Sample Caption'}
    </span>
  );
}

type CaptionProps = {
  text: string
  theme?: number
  style?: string
  type?: number
}
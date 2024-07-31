import React from 'react'

export default function Heading({
  style,
  text,
  type = 1,
  theme = 1,
}: HeadingProps) {

  let fontSize = 'text-4xl';
  let weight = 'font-bold';
  let color = 'text-t-dark';

  if (theme === 1) {
    color = 'text-t-dark';
  } else if (theme === 2) {
    color = 'text-t-light';
  } else {
    color = 'text-t-default';
  }

  if (type === 1) {
    fontSize = 'text-heading-1';
    weight = 'font-bold';
  } else if (type === 2) {
    fontSize = 'text-heading-2';
    weight = 'font-semi-bold'; 
  } else if (type === 3) {
    fontSize = 'text-heading-3';
    weight = 'font-semi-bold';
  } else if (type === 4) {
    fontSize = 'text-heading-4';
    weight = 'font-semi-bold';
  }

  return (
    <h1 className={`${color} ${style} font-poppins ${fontSize} ${weight}`}>
      {text || 'Sample Heading'}
    </h1>
  );
}

type HeadingProps = {
  text: string
  theme?: number
  style?: string
  type?: number
}
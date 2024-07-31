import React from 'react'

export default function Paragraph({
  style,
  text,
  type = 1,
  theme = 1,
}: ParagraphProps) {

  let fontSize = 'text-paragraph-1';
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
    fontSize = 'text-paragraph-1';
    weight = 'font-normal';
  } else if (type === 2) {
    fontSize = 'text-paragraph-2';
    weight = 'font-normal'; 
  }

  return (
    <p className={`${color} ${style} font-vollkorn ${fontSize} ${weight}`}>
      {text || 'Sample Paragraph'}
    </p>
  );
}

type ParagraphProps = {
  text: string
  theme?: number
  style?: string
  type?: number
}
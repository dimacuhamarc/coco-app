import React from 'react'

export default function GradientHeader({
  style,
  text,
  theme = 1,
}: GradientHeaderProps) {

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

  return (
    <h1 className={`text-transparent ${style} font-poppins bg-gradient-to-r to-primary-500 from-primary-900 bg-clip-text text-pretty leading-none pb-2 ${fontSize} ${weight}`}>
      {text || 'Sample Heading'}
    </h1>
  );
}

type GradientHeaderProps = {
  text: string
  theme?: number
  style?: string
}
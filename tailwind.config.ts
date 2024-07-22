import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.707rem',
        base: '1rem',
        xl: '1.414rem',
        '2xl': '1.999rem',
        '3xl': '2.827rem',
        '4xl': '3.997rem',
        '5xl': '5.652rem',
      },
      fontFamily: {
        heading: 'Poppins',
        body: 'Poppins',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['cupcake', 'dracula']
  },
  darkMode: ['class', '[data-theme="dracula"]']
};
export default config;

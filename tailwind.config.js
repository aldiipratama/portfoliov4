/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "blinkCursor": {
          "50%": { borderRightColor: "transparent" },
        },
        "typeAndDelete": {
          "0%,10%": { width: 0 },
          "45%, 55%": { width: "6.2em" },
          "90%, 100%": { width: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "terminal-typing":
          "typeAndDelete 4s steps(11) infinite, blinkCursor 0.5s step-end infinite alternate",
      },
      fontFamily: {
        "fira-code": ["Fira Code", "sans-serif"]
      },
      colors: {
        "primary": "#c778dd",
        "secondary": "#62AEEF",
        'background': "#282c33",
        'gray': "#ABB2BF"
      }
    },
  },
  // eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")({ nocompatible: true, preferredStrategy: 'pseudoelements' })],
}
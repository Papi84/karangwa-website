import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00ff9d',
        'neon-blue': '#00d9ff',
        'cyber-purple': '#9d00ff',
        'dark-bg': '#0a0a0f',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'mono': ['Share Tech Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;

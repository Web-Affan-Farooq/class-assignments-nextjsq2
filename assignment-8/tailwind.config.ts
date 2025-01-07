import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue':"#2467d4",
        'orange':"#ed5d15",
      },
      fontFamily: {
        'playfair':"var(--playfair-font)",
        'ubuntu':"var(--ubuntu-font)"
      }
    },
  },
  plugins: [],
} satisfies Config;

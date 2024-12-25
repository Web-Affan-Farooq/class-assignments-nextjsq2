import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        custom14:"1440px"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red:"#DB4444"
      },
    },
  },
  plugins: [],
} satisfies Config;

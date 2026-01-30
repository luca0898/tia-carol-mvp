import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "hsl(var(--brand))",
          600: "hsl(var(--brand-600))",
          700: "hsl(var(--brand-700))",
        },
      },
      boxShadow: {
        soft: "0 12px 30px -20px rgba(124, 58, 237, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;

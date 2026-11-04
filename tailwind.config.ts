import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        shoreline: {
          50: "#F4F7F7",
          100: "#E8EFEF",
          200: "#C8D8D8",
          300: "#A2B8B8", // Primary Shoreline Calm
          400: "#819F9F",
          500: "#608585",
          600: "#486B6B",
          700: "#365151",
          800: "#243737",
          900: "#131E1E",
        },
        ocean: {
          50: "#EBF5FC",
          100: "#CCE7FA",
          200: "#99CEF5",
          300: "#66B6F0",
          400: "#339DEB",
          500: "#006DFF", // Accent highlight
          600: "#006BB3", // Primary button
          700: "#005087",
          800: "#00365B",
          900: "#001D30",
        },
        neutral: {
          50: "#FAFAFA",
          100: "#EEEEEE",
          200: "#E0E0E0",
          300: "#CCCCCC",
          400: "#9E9E9E",
          500: "#757575",
          600: "#4B4B4B",
          700: "#333333",
          800: "#212121",
          900: "#111111",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        editorial: ["'Cormorant Garamond'", "Garamond", "serif"],
        sans: ["'DM Sans'", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
        reading: "720px",
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      letterSpacing: {
        'relaxed-headline': '-0.015em',
        'subtle-caps': '0.05em',
      },
      lineHeight: {
        'display': '1.08',
        'heading': '1.25',
      },
    },
  },
  plugins: [],
};

export default config;

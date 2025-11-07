/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#667EEA",
        success: "#48BB78",
        warning: "#F6AD55",
        error: "#FC8181",
        "background-light": "#F7FAFC",
        "background-dark": "#1A202C",
        "card-light": "#FFFFFF",
        "card-dark": "#2D3748",
        "text-light": "#2D3748",
        "text-dark": "#E2E8F0",
        "subtext-light": "#718096",
        "subtext-dark": "#A0AEC0",
        "border-light": "#E2E8F0",
        "border-dark": "#4A5568"
      },
      fontFamily: {
        display: ["Poppins", "Noto Sans SC", "sans-serif"],
        english: ["Poppins", "sans-serif"],
        chinese: ["Noto Sans SC", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px"
      },
    },
  },
  plugins: [],
}

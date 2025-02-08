/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom Colors
        navy: {
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#627d98",
          600: "#486581",
          700: "#334e68",
          800: "#243b53",
          900: "#102a43",
        },
        gold: {
          500: "#FFD700",
          600: "#e6b800",
        },
        // Additional Colors (if needed)
        green: {
          500: "#10B981",
          600: "#059669",
        },
        yellow: {
          500: "#FBBF24",
          600: "#F59E0B",
        },
        red: {
          500: "#EF4444",
          600: "#DC2626",
        },
      },
      boxShadow: {
        // Custom Shadows
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {
        // Custom Border Radius
        xl: "12px",
        "2xl": "16px",
      },
      animation: {
        fadeInOut: 'fadeInOut 4s ease-in-out forwards',
      },
      keyframes: {
        fadeInOut: {
          '0%': { opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}


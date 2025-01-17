/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        codeboost: "#653df5",
        "blue-primary": "#1D4FFE",
        "green-primary": "#4BCE97",
        "gray-border-card": "#131317",
        "gray-area-favorite": "#05030A",
        "gray-hover-btn-slide": "#07050F",
      },

      maxWidth: {
        grid: "77.5rem",
        "600px": "600px",
        "card-nft": "17.4rem",
        "w-80": "80%",
        "logo-size-mb": "10rem",
        "nav-header": "48.3rem",
        "left-cont-footer": "20rem",
        "content-desc-hero": "41.1rem",
      },
      width: {
        "600px": "600px",
        "80percent": "80%",
      },
      height: {
        128: "32rem",
      },
      backgroundImage: {
        banner: 'url("../assets/phone-mockup-dark.png")',
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" }, // Ponto inicial e final (sem movimento)
          "50%": { transform: "translateY(-10px)" }, // Movimento para cima
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite", // Definindo a animação float com duração de 3s
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

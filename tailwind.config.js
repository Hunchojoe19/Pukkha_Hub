/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "358px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        navbarBcg: "#0F0F0F",
        backGround: "#000",
        CtaBackground: "#0B0A0A",
        CaseBackground: "#4A4A4A",
        testimonialBackground: "#282828",
        backGroundSecondary: "#171717",
        gold: "rgba(230, 198, 14, 0.847)",
        buttonBackground: "#DC7C00",
        cardBackground: "#282828",
        iconBcg: "#030303",
      },
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      clash: ["Clash Display"],
      eudoxus: ["Eudoxus Sans"],
      display: ["Oswald"],
      body: ['"Open Sans", "Inter", "Dancing Script", "Roboto", "Bebas Neue",'],
    },
  },
  plugins: [],
};

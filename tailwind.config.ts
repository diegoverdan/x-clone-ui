import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "500px",
        sm: "600px",
        md: "690px",
        lg: "988px",
        xl: "1078px",
        xxl: "1265px",
      },
      colors: {
        textGray: "#71767B",
        textGrayLight: "#E7E9EA",
        borderGray: "#2F3336",
        inputGray: "#202327",
        iconBlue: "#1D9BF0",
        iconGreen: "#00BA7C",
        iconPink: "#F91880",
      },
    },
  },
  plugins: [],
} satisfies Config;

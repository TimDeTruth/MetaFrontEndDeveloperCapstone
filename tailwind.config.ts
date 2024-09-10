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
        background: "var(--background)",
        foreground: "var(--foreground)",

        green: "#495E57",
        yellow: "#F4CE14",
        peach: "#EE9972",
        lightPeach: "#FBDABB",
        white: "#EDEFEE",
        black: "#333333",
      },
    },
  },
  plugins: [],
};
export default config;

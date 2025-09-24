import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design minimalista Alexander McQueen - Preto e branco dominantes
        primary: {
          DEFAULT: "#000000", // Preto principal
          foreground: "#FFFFFF", // Branco
        },
        secondary: {
          DEFAULT: "#FFFFFF", // Branco secundário
          foreground: "#000000", // Preto
        },
        accent: {
          DEFAULT: "#F5F5F5", // Cinza muito claro
          foreground: "#000000",
        },
        muted: {
          DEFAULT: "#F8F9FA", // Cinza suave para backgrounds
          foreground: "#6B7280", // Cinza médio para textos secundários
        },
        border: "#E5E7EB", // Cinza claro para bordas
        input: "#F9FAFB",
        ring: "#000000",
        background: "#FFFFFF",
        foreground: "#000000",
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
        },
      },
      fontFamily: {
        // Tipografia elegante
        serif: ["var(--font-playfair-display)", "Playfair Display", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      fontSize: {
        // Hierarquia tipográfica - Alexander McQueen style
        "display-1": ["4rem", { lineHeight: "1.1", fontWeight: "300" }], // 64px
        "display-2": ["3rem", { lineHeight: "1.1", fontWeight: "300" }], // 48px
        "heading-1": ["2.25rem", { lineHeight: "1.2", fontWeight: "300" }], // 36px
        "heading-2": ["1.875rem", { lineHeight: "1.3", fontWeight: "400" }], // 30px
        "heading-3": ["1.5rem", { lineHeight: "1.3", fontWeight: "400" }], // 24px
        "body": ["1rem", { lineHeight: "1.6", fontWeight: "400" }], // 16px
        "body-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }], // 14px
        "caption": ["0.875rem", { lineHeight: "1.4", fontWeight: "500" }], // 14px para códigos
      },
      spacing: {
        // Espaçamentos generosos
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
      },
      animation: {
        // Animações suaves e elegantes
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-in-right": "slideInRight 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      transitionProperty: {
        "height": "height",
        "spacing": "margin, padding",
      },
      transitionDuration: {
        "250": "250ms",
        "400": "400ms",
      },
      transitionTimingFunction: {
        "out-cubic": "cubic-bezier(0.33, 1, 0.68, 1)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        // Sombras sutis e elegantes
        "elegant": "0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.08)",
        "elegant-lg": "0 8px 32px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04)",
        "inner-elegant": "inset 0 1px 2px rgba(0, 0, 0, 0.04)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
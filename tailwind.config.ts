import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class", '[data-theme="quickbooks"][data-colorscheme="dark"]'],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // QuickBooks light theme colors
        quickbooks: {
          // UI Colors
          primary: "#2ca01c",
          "primary-hover": "#258f1d",
          "primary-active": "#108000",
          "primary-focus": "#2ca01c",
          secondary: "#2ca01c",
          "secondary-hover": "#258f1d",
          "secondary-active": "#108000",
          "secondary-focus": "#2ca01c",
          tertiary: "#393a3d",
          "tertiary-hover": "#2b2b2e",
          "tertiary-active": "#000000",
          "tertiary-focus": "#393a3d",
          info: "#0077c5",
          positive: "#108000",
          attention: "#ff6a00",
          "attention-hover": "#fc6000",
          "attention-active": "#f95700",
          negative: "#d52b1e",
          "negative-hover": "#c6160f",
          "negative-active": "#b80000",
          neutral: "#6b6c72",
          "neutral-selected": "#393a3d",
          "neutral-hover": "#525357",
          "neutral-active": "#393a3d",
          "neutral-focus": "#6b6c72",
          beta: "#008481",
          new: "#c9007a",
          discover: "#0097e6",
          completed: "#2ca01c",

          // Focus and indicators
          "focus-indicator": "#0077c5",
          "selection-indicator": "#2ca01c",
          "progress-indicator": "#2ca01c",
          shadow: "#000000",
          overlay: "rgba(0, 0, 0, 0.4)",

          // Page backgrounds
          "page-background": {
            primary: "#ffffff",
            secondary: "#eceef1",
            tertiary: "#eceef1",
            accent: "#eceef1",
          },

          // Container backgrounds
          "container-background": {
            primary: "#ffffff",
            secondary: "#eceef1",
            tertiary: "#e3e5e8",
            accent: "#f4f5f8",
            "accent-hover": "rgba(212, 215, 220, 0.1)",
            "accent-active": "rgba(212, 215, 220, 0.2)",
            "accent-focus": "rgba(212, 215, 220, 0.1)",
            "accent-selected": "rgba(212, 215, 220, 0.2)",
            info: "#EBF9FF",
            positive: "#F6FDEB",
            attention: "#FFF7EF",
            negative: "#FFF3F2",
            new: "#ff88ec",
            complementary: "#393a3d",
          },

          // Container borders
          "container-border": {
            primary: "#8d9096",
            secondary: "#babec5",
            tertiary: "#d4d7dc",
            accent: "#108000",
            complementary: "#8d9096",
            info: "#0097e6",
            positive: "#53b700",
            negative: "#e43834",
            attention: "#ff8000",
          },

          // Text colors
          text: {
            accent: "#ffffff",
            primary: "#393a3d",
            secondary: "#6b6c72",
            tertiary: "#6b6c72",
            quaternary: "#6b6c72",
            disabled: "#8d9096",
            inverse: "#ffffff",
            complementary: "#ffffff",
          },

          // Link colors
          link: {
            text: "#0365AC",
            "text-complementary": "#34bfff",
            "text-hover": "#055393",
            "text-active": "#055393",
            "text-focus": "#0365AC",
            "text-complementary-visited": "#a898ff",
            "text-visited": "#7a3dd8",
            background: "#ebf9ff",
            "background-visited": "rgba(168, 152, 255, 0.1)",
          },

          // Icon colors
          icon: {
            primary: "#393a3d",
            secondary: "#6b6c72",
            inverse: "#ffffff",
            disabled: "#8d9096",
            complementary: "#ffffff",
          },

          // Track and divider colors
          track: {
            primary: "#8d9096",
            secondary: "#d4d7dc",
          },
          divider: {
            primary: "#8d9096",
            secondary: "#babec5",
            tertiary: "#d4d7dc",
          },

          // Input colors
          input: {
            "background-readonly": "#f4f5f8",
            "background-disabled": "#ffffff",
            "background-error": "rgba(213, 43, 30, 0.1)",
            "background-error-focus": "rgba(213, 43, 30, 0.07)",
            "background-warning": "rgba(255, 187, 0, 0.25)",
            "background-warning-focus": "rgba(255, 187, 0, 0.07)",
            "background-primary": "#ffffff",
            "background-primary-hover": "#ffffff",
            "background-primary-active": "#ffffff",
            "background-primary-focus": "#ffffff",
            "background-primary-selected": "#2ca01c",
            "background-secondary": "#babec5",
            "background-secondary-hover": "#babec5",
            "background-secondary-active": "#babec5",
            "background-secondary-focus": "#babec5",
            "background-tertiary": "#eceef1",
            "background-tertiary-hover": "#eceef1",
            "background-tertiary-active": "#eceef1",
            "background-tertiary-focus": "#eceef1",
            "border-readonly": "#babec5",
            "border-disabled": "rgba(141, 144, 150, 0.5)",
            "border-error": "#d52b1e",
            "border-warning": "#ff6a00",
            "border-primary": "#8d9096",
            "border-primary-hover": "#2ca01c",
            "border-primary-active": "#2ca01c",
            "border-primary-focus": "#2ca01c",
            "border-primary-selected": "#2ca01c",
            "border-secondary": "#8d9096",
            "border-secondary-hover": "#2ca01c",
            "border-secondary-active": "#2ca01c",
            "border-secondary-focus": "#2ca01c",
            "border-tertiary": "#8d9096",
            "border-tertiary-hover": "#2ca01c",
            "border-tertiary-active": "#2ca01c",
            "border-tertiary-focus": "#2ca01c",
            label: "#6b6c72",
            placeholder: "#6b6c72",
            "placeholder-disabled": "#babec5",
          },

          // Action colors
          action: {
            standard: "#2ca01c",
            "standard-hover": "#258f1d",
            "standard-active": "#108000",
            "standard-focus": "#2ca01c",
            "standard-subtle": "rgba(107, 108, 114, 0)",
            "standard-subtle-hover": "rgba(107, 108, 114, 0.1)",
            "standard-subtle-active": "rgba(107, 108, 114, 0.2)",
            "standard-subtle-focus": "rgba(107, 108, 114, 0)",
            passive: "#e3e5e8",
            "passive-subtle": "rgba(107, 108, 114, 0)",
            "passive-subtle-hover": "rgba(107, 108, 114, 0.1)",
            "passive-subtle-active": "rgba(107, 108, 114, 0.2)",
            "passive-subtle-focus": "rgba(107, 108, 114, 0)",
            "passive-hover": "#d4d7dc",
            "passive-active": "#babec5",
            "passive-focus": "#e3e5e8",
            "passive-border": "#6b6c72",
            "complementary-border": "#ffffff",
            complementary: "#6b6c72",
            "complementary-subtle": "rgba(255, 255, 255, 0)",
            "complementary-subtle-hover": "rgba(255, 255, 255, 0.1)",
            "complementary-subtle-active": "rgba(255, 255, 255, 0.2)",
            "complementary-subtle-focus": "rgba(255, 255, 255, 0)",
            "complementary-hover": "rgba(107, 108, 114, 0.85)",
            "complementary-active": "rgba(107, 108, 114, 0.75)",
            "complementary-focus": "#6b6c72",
            negative: "#d52b1e",
            "negative-subtle": "rgba(213, 43, 30, 0)",
            "negative-subtle-hover": "rgba(213, 43, 30, 0.1)",
            "negative-subtle-active": "rgba(213, 43, 30, 0.2)",
            "negative-subtle-focus": "rgba(213, 43, 30, 0)",
            "negative-hover": "#c6160f",
            "negative-active": "#b80000",
            "negative-focus": "#d52b1e",
            "special-use": "#ff6a00",
            "special-use-subtle": "rgba(255, 106, 0, 0)",
            "special-use-subtle-hover": "rgba(255, 106, 0, 0.1)",
            "special-use-subtle-active": "rgba(255, 106, 0, 0.2)",
            "special-use-subtle-focus": "rgba(255, 106, 0, 0)",
            "special-use-hover": "#fc6000",
            "special-use-active": "#f95700",
            "special-use-focus": "#ff6a00",
          },

          // Data category colors
          "data-category": {
            1: "#0077c5",
            2: "#00a6a4",
            3: "#4e2b8f",
            4: "#f95700",
            5: "#b80000",
            6: "#c9007a",
            7: "#7a3dd8",
            8: "#2ca01c",
            9: "#21abf6",
            10: "#ffad00",
          },

          // Data colors
          data: {
            primary: "#53b700",
            "primary-100": "#7fd000",
            "primary-200": "#53b700",
            "primary-300": "#2ca01c",
            "primary-400": "#108000",
            secondary: "#00a6a4",
            "secondary-100": "#00d7d7",
            "secondary-200": "#00c1bf",
            "secondary-300": "#00a6a4",
            "secondary-400": "#008481",
            tertiary: "#7a3dd8",
            "tertiary-100": "#9457fa",
            "tertiary-200": "#7a3dd8",
            "tertiary-300": "#6436af",
            "tertiary-400": "#4e2b8f",
            neutral: "rgba(212, 215, 220, 0.5)",
            "neutral-100": "#babec5",
            "neutral-200": "#8d9096",
            "neutral-300": "#6b6c72",
            "neutral-400": "#393a3d",
            positive: "#108000",
            "positive-100": "#7fd000",
            "positive-200": "#53b700",
            "positive-300": "#2ca01c",
            "positive-400": "#108000",
            negative: "#d52b1e",
            "negative-100": "#f25a52",
            "negative-200": "#e43834",
            "negative-300": "#d52b1e",
            "negative-400": "#b80000",
            attention: "#ff8000",
            "attention-100": "#ff9331",
            "attention-200": "#ff8000",
            "attention-300": "#ff6a00",
            "attention-400": "#f95700",
          },

          // Code colors
          code: {
            text: "#21262a",
            "line-number": "#859299",
            "line-highlight": "#f0f4f6",
            operator: "#859299",
            keyword: "#d72792",
            number: "#c84f00",
            boolean: "#6100c2",
            string: "#00828d",
            comment: "#6b6c72",
            attribute: "#00892e",
            qualifier: "#3bd85e",
            "variable-1": "#21262a",
            "variable-2": "#21262a",
            "variable-3": "#fca354",
            type: "#fca354",
          },

          // Dark mode overrides would go here
        },
      },

      // Border radius
      borderRadius: {
        none: "0px", // --radius-none
        sm: "2px", // --radius-x-small
        DEFAULT: "4px", // --radius-small
        md: "6px", // --radius-medium
        lg: "8px", // --radius-large
        xl: "12px", // --radius-x-large
        full: "9999px", // --radius-full
      },

      // Box shadows
      boxShadow: {
        none: "0px 0px 0px 0px rgba(0, 0, 0, 0.2)", // elevation-level-0
        sm: "0px 1px 4px 0px rgba(0, 0, 0, 0.2)", // elevation-level-1
        DEFAULT: "0px 2px 8px 0px rgba(0, 0, 0, 0.2)", // elevation-level-2
        md: "0px 4px 16px 0px rgba(0, 0, 0, 0.2)", // elevation-level-3
        lg: "0px 6px 24px 0px rgba(0, 0, 0, 0.2)", // elevation-level-4
      },

      // Font families
      fontFamily: {
        // Primary font: Inter (closest to Avenir Next)
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        component: ["var(--font-inter)", "system-ui", "sans-serif"],

        // Alternative fonts
        nunito: ["var(--font-nunito-sans)", "system-ui", "sans-serif"],
        work: ["var(--font-work-sans)", "system-ui", "sans-serif"],
      },

      // Font sizes
      fontSize: {
        "display-1": ["84px", { lineHeight: "1.3" }], // --font-size-display-1
        "display-2": ["72px", { lineHeight: "1.3" }], // --font-size-display-2
        "display-3": ["60px", { lineHeight: "1.3" }], // --font-size-display-3
        "display-4": ["48px", { lineHeight: "1.3" }], // --font-size-display-4
        "heading-1": ["48px", { lineHeight: "1.3" }], // --font-size-heading-1
        "heading-2": ["40px", { lineHeight: "1.3" }], // --font-size-heading-2
        "heading-3": ["34px", { lineHeight: "1.3" }], // --font-size-heading-3
        "heading-4": ["28px", { lineHeight: "1.3" }], // --font-size-heading-4
        "heading-5": ["24px", { lineHeight: "1.3" }], // --font-size-heading-5
        "heading-6": ["16px", { lineHeight: "1.3" }], // --font-size-heading-6
        "body-1": ["20px", { lineHeight: "1.5" }], // --font-size-body-1
        "body-2": ["16px", { lineHeight: "1.5" }], // --font-size-body-2
        "body-3": ["14px", { lineHeight: "1.5" }], // --font-size-body-3
        "body-4": ["12px", { lineHeight: "1.5" }], // --font-size-body-4
        "component-xl": ["24px", { lineHeight: "1.3" }], // --font-size-component-x-large
        "component-lg": ["20px", { lineHeight: "1.3" }], // --font-size-component-large
        "component-md": ["16px", { lineHeight: "1.3" }], // --font-size-component-medium
        "component-sm": ["14px", { lineHeight: "1.3" }], // --font-size-component-small
        "component-xs": ["12px", { lineHeight: "1.3" }], // --font-size-component-x-small
      },

      // Font weights
      fontWeight: {
        display: "700", // --font-weight-display
        "display-bold": "900", // --font-weight-display-bold
        heading: "700", // --font-weight-heading
        "heading-bold": "800", // --font-weight-heading-bold
        body: "400", // --font-weight-body
        "body-semibold": "500", // --font-weight-body-semibold
        "body-bold": "600", // --font-weight-body-bold
        component: "400", // --font-weight-component
        "component-semibold": "500", // --font-weight-component-semibold
        "component-bold": "600", // --font-weight-component-bold
      },

      // Line heights
      lineHeight: {
        display: "1.3", // --line-height-display
        heading: "1.3", // --line-height-heading
        body: "1.5", // --line-height-body
        component: "1.3", // --line-height-component
      },

      // Spacing
      spacing: {
        xs: "8px", // --space-x-small
        sm: "12px", // --space-small
        md: "16px", // --space-medium
        lg: "24px", // --space-large
        xl: "40px", // --space-x-large
        "page-inline": "20px", // --space-page-inline
        "component-gap-xs": "2px", // --space-component-gap-x-small
        "component-gap-sm": "4px", // --space-component-gap-small
        "component-gap-md": "8px", // --space-component-gap-medium
        "component-gap-lg": "12px", // --space-component-gap-large
        "component-inline-padding-2xs": "2px", // --space-component-inline-padding-xx-small
        "component-inline-padding-xs": "4px", // --space-component-inline-padding-x-small
        "component-inline-padding-sm": "6px", // --space-component-inline-padding-small
        "component-inline-padding-md": "8px", // --space-component-inline-padding-medium
        "component-inline-padding-lg": "10px", // --space-component-inline-padding-large
        "component-inline-padding-xl": "12px", // --space-component-inline-padding-x-large
        "component-inline-padding-2xl": "16px", // --space-component-inline-padding-xx-large
        "component-inline-padding-3xl": "20px", // --space-component-inline-padding-xxx-large
      },

      // Animation
      transitionTimingFunction: {
        "ease-fade": "cubic-bezier(0.35, 0, 0.5, 1)", // --ease-fade
        "ease-transform": "cubic-bezier(0.35, 0, 0.25, 1)", // --ease-transform
        "ease-appear": "cubic-bezier(0, 0, 0.25, 1)", // --ease-appear
        "ease-disappear": "cubic-bezier(0.35, 0, 1, 1)", // --ease-disappear
        "ease-transform-emphasize": "cubic-bezier(0.35, 1.4, 0.25, 1)", // --ease-transform-emphasize
        "ease-appear-emphasize": "cubic-bezier(0.15, 1.4, 0.25, 1)", // --ease-appear-emphasize
        "ease-disappear-emphasize": "cubic-bezier(0.4, 0, 0.6, -0.4)", // --ease-disappear-emphasize
      },

      // Transition durations
      transitionDuration: {
        "appear-slow": "0.35s", // --duration-appear-slow
        "appear-moderate": "0.3s", // --duration-appear-moderate
        "appear-fast": "0.25s", // --duration-appear-fast
        "appear-emphasize-slow": "0.8s", // --duration-appear-emphasize-slow
        "appear-emphasize-moderate": "0.7s", // --duration-appear-emphasize-moderate
        "appear-emphasize-fast": "0.5s", // --duration-appear-emphasize-fast
        "disappear-slow": "0.3s", // --duration-disappear-slow
        "disappear-moderate": "0.25s", // --duration-disappear-moderate
        "disappear-fast": "0.2s", // --duration-disappear-fast
        "transform-slow": "0.45s", // --duration-transform-slow
        "transform-moderate": "0.4s", // --duration-transform-moderate
        "transform-fast": "0.35s", // --duration-transform-fast
      },

      // Screen breakpoints
      screens: {
        "2xs": "320px", // --media-query-xx-small
        xs: "480px", // --media-query-x-small
        sm: "768px", // --media-query-small
        "md-alt": "992px", // --media-query-medium-alt
        md: "1024px", // --media-query-medium
        lg: "1200px", // --media-query-large
        xl: "1440px", // --media-query-x-large
        "2xl": "1680px", // --media-query-xx-large
        "3xl": "1920px", // --media-query-xxx-large
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
} satisfies Config;

export default config;

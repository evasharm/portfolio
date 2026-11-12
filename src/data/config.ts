export const CONFIG = {
  // ---------------------------------------------------------------------------
  // Site Settings
  // ---------------------------------------------------------------------------
  site: {
    url: "https://evasharma.vercel.app",
    locale: "en_US",
    twitterHandle: "",
  },

  // ---------------------------------------------------------------------------
  // SEO Settings
  // ---------------------------------------------------------------------------
  seo: {
    titleTemplate: "%s | %n", // %s = page title, %n = DATA.name
    twitterCard: "summary_large_image" as const,
    robots: "index, follow",
  },

  // ---------------------------------------------------------------------------
  // Typography
  // ---------------------------------------------------------------------------
  typography: {
    // Base font size as a percentage. 100 = browser default (16px).
    // 110 = 10% larger or 90 = 10% smaller, across all text, headings, and links simultaneously.
    baseFontSize: 115,
  },

  // ---------------------------------------------------------------------------
  // Blog Settings
  // ---------------------------------------------------------------------------
  blog: {
    postsPerPage: 10,
  },

  // ---------------------------------------------------------------------------
  // Font Settings
  // See https://fontsource.org/?variable=true for fonts that can be installed via package registry
  // To change fonts:
  // 1. pnpm install @fontsource-variable/<font-name> (for example 'pnpm add @fontsource-variable/inter'). Install BOTH the sans and mono fonts.
  // 2. Edit src/styles/global.css - swap the @import and --font-sans and --font-mono values
  // ---------------------------------------------------------------------------

  // ---------------------------------------------------------------------------
  // Design Settings
  // 1. Pick a theme at ui.shadcn.com/themes or generate one with a tool like tweakcn.com
  // 2. Copy the CSS variables block
  // 3. Paste into BELOW with the naming conversion already used
  // ---------------------------------------------------------------------------

    theme: {
    radius: "0.625rem",

    light: {
      background: "#FAF7F0",
      foreground: "#14213D",
      card: "#FFFDF8",
      cardForeground: "#14213D",
      popover: "#FFFDF8",
      popoverForeground: "#14213D",
      primary: "#14213D",
      primaryForeground: "#FAF7F0",
      secondary: "#F1ECE1",
      secondaryForeground: "#14213D",
      muted: "#F1ECE1",
      mutedForeground: "#55607A",
      accent: "#F6E3D3",
      accentForeground: "#9A3F12",
      destructive: "#B42318",
      border: "#E4DCCB",
      input: "#E4DCCB",
      ring: "#B5541C",
    },

        dark: {
      background: "#1F3054",
      foreground: "#F5F0E6",
      card: "#26396A",
      cardForeground: "#F5F0E6",
      popover: "#26396A",
      popoverForeground: "#F5F0E6",
      primary: "#E8B07A",
      primaryForeground: "#1A2440",
      secondary: "#2B3F6B",
      secondaryForeground: "#F5F0E6",
      muted: "#2B3F6B",
      mutedForeground: "#B8C2D6",
      accent: "#3A3A52",
      accentForeground: "#F2C08F",
      destructive: "#F97066",
      border: "rgb(245 240 230 / 14%)",
      input: "rgb(245 240 230 / 18%)",
      ring: "#E8B07A",
    },
  },

} as const;

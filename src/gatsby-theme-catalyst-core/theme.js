// See https://theme-ui.com/ for more info and also https://www.gatsbyjs.org/docs/theme-ui/
// Try changing some of the colors below to see what happens.
import { tailwind, baseColors } from "@theme-ui/preset-tailwind"
import "typeface-playfair-display"

export default {
  ...tailwind,
  breakpoints: ["480px", "768px", "1024px", "1440px"],
  fonts: {
    ...tailwind.fonts,
    heading: '"Playfair Display", sans-serif',
    siteTitle: "inherit",
    navLinks: '"Playfair Display", sans-serif',
    alt: '"Playfair Display", sans-serif',
  },
  colors: {
    ...tailwind.colors,
    primary: "#3e5a70",
    secondary: "#cba654",
    accent: "#eed4cc",
    muted: "#FFF2FC",
    textWhite: baseColors.gray[1],
    header: {
      background: "transparent",
      backgroundOpen: "#3e5a70",
      text: "#333333",
      textOpen: "#ffffff",
      icons: "#333333",
      iconsHover: "#48487A",
      iconsOpen: "#ffffff",
    },
    footer: {
      background: "#eed4cc",
      text: "#333",
      links: "#333",
      icons: "#333",
    },
  },
  sizes: {
    ...tailwind.sizes,
    maxPageWidth: "1440px", // Sets the max width of elements like the header/footer on really large screens
    maxContentWidth: "720px", // Sets the container size on larger screens, e.g. tablets and laptops
    contentWidth: "90vw", // Sets the container width on smaller screens, results in a 5vw margin on the left and right
    headerHeight: "auto", // Provides fallback setting to control header height
    logoWidthXS: "225px", // Logo width on extra small screens, up to 480px
    logoWidthS: "225px", // Logo width on small screens, 480px - 768px
    logoWidthM: "275px", // Logo width on medium screens, 768px - 1024px
    logoWidthL: "300px", // Logo width on large screens, 1024px - 1440px
    logoWidthXL: "300px", // Logo width on extra large screens, above 1440px
    logoHeightXS: "45px", // Logo height on extra small screens, up to 480px
    logoHeightS: "45px", // Logo height on small screens, 480px - 768px
    logoHeightM: "55px", // Logo height on medium screens, 768px - 1024px
    logoHeightL: "60px", // Logo height on large screens, 1024px - 1440px
    logoHeightXL: "60px", // Logo height on extra large screens, above 1440px
    iconsFooter: "32px", // Sets the icons size for the footer
    iconsHeader: "20px", // Sets the icons size for the header
  },
  styles: {
    ...tailwind.styles,
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 2,
    },
    h1: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 5,
      fontSize: 6,
      mt: 5,
      display: "flex",
      alignItems: "center",
      "::before": {
        content: '""',
        height: "4px",
        backgroundColor: "accent",
        width: "2rem",
        mr: 2,
        mt: "8px",
      },
      "::after": {
        content: '""',
        flex: "1",
        height: "4px",
        backgroundColor: "accent",
        ml: 2,
        mt: "8px",
        display: ["none", null, "inline", null, null],
      },
    },
    h2: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 4,
      fontSize: 5,
      mt: 5,
      display: "flex",
      alignItems: "center",
      "::before": {
        content: '""',
        height: "2px",
        backgroundColor: "accent",
        width: "2rem",
        mr: 2,
        mt: "4px",
        display: ["none", null, "inline", null, null],
      },
      "::after": {
        content: '""',
        flex: "1",
        height: "2px",
        backgroundColor: "accent",
        ml: 2,
        mt: "4px",
      },
    },
    blockquote: {
      bg: "muted",
      p: 3,
      borderLeft: "5px solid",
      borderColor: "primary",
    },
    inlineCode: {
      fontFamily: "monospace",
      backgroundColor: "muted",
      p: 1,
      fontSize: 2,
    },
    pre: {
      fontFamily: "monospace",
      fontSize: 2,
      overflowX: "auto",
      bg: "muted",
      p: 3,
      border: "1px solid",
      borderColor: "grey",
      borderRadius: "0.25rem",
      code: {
        color: "inherit",
        p: 0,
      },
    },
  },
  variants: {
    main: {
      mt: [0, null, 3, null, null], // Modified spacing from core theme
    },
  },
}

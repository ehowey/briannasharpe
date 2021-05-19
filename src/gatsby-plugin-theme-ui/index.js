// See https://theme-ui.com/ for more info and also https://www.gatsbyjs.org/docs/theme-ui/
// Try changing some of the colors below to see what happens.
import { tailwind, baseColors } from "@theme-ui/preset-tailwind"
import "typeface-playfair-display"

const theme = {
  ...tailwind,
  breakpoints: ["480px", "768px", "1024px", "1440px"],
  fonts: {
    ...tailwind.fonts,
    heading: '"Playfair Display", sans-serif',
  },
  colors: {
    ...tailwind.colors,
    primary: "#3e5a70",
    secondary: "#cba654",
    accent: "#eed4cc",
    muted: "#FFF2FC",
    text: baseColors.gray[8],
    textWhite: baseColors.gray[1],
    textGray: baseColors.gray[7],
    header: {
      background: "transparent",
      backgroundOpen: "#3e5a70",
      text: baseColors.gray[8],
      textOpen: baseColors.gray[1],
      icons: baseColors.gray[7],
      iconsHover: "#cba654",
      iconsOpen: baseColors.gray[1],
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
    iconsFooter: "32px", // Sets the icons size for the footer
    iconsHeader: "20px", // Sets the icons size for the header
  },
  styles: {
    ...tailwind.styles,
    root: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    p: {
      fontSize: 2,
    },
    ul: {
      fontSize: 2,
    },
    ol: {
      fontSize: 2,
    },
    a: {
      color: "primary",
      transition: "all 0.3s ease",
      ":hover": {
        color: "secondary",
      },
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
      mt: 0,
      mb: 5,
    },
    siteTitle: {
      fontSize: [4, null, null, 5, null],
      "::after": {
        display: "none",
      },
    },
    navLink: {
      fontFamily: '"Playfair Display", sans-serif',
      "::after": {
        position: "absolute",
        top: "100%",
        left: "0",
        width: "100%",
        height: "1px",
        backgroundColor: "secondary",
        content: "''",
        opacity: "0",
        transition: "height 0.3s, opacity 0.3s, transform 0.3s",
        transform: "translateY(-6px)",
      },
      ":hover, :focus, :active": {
        textDecoration: "none",
      },
      ":hover::after, :active::after, :focus::after": {
        height: "4px",
        opacity: "1",
        transform: "translateY(0px)",
      },
    },
    navLinkActive: {
      textDecoration: "none",
      "::after": {
        position: "absolute",
        top: "100%",
        left: "0",
        width: "100%",
        height: "4px",
        backgroundColor: "secondary",
        content: "''",
        opacity: "1",
        transform: "translateY(0px)",
      },
    },
    navLinkSub: {
      "::after": {
        content: "none",
      },
      ":hover::after": {
        content: "none",
      },
      ":hover, :focus, :active": {
        color: "primary",
      },
    },
    navLinkSubActive: {
      textDecoration: "none",
      color: "primary",
      "::after": {
        content: "none",
      },
    },
  },
}

export default theme

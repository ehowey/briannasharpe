import merge from "deepmerge"
import { BaseThemeColors } from "gatsby-theme-catalyst-core"

export default merge(BaseThemeColors, {
  primary: "#7995ad",
  secondary: "#354450",
  muted: "#FFF2FC",
  // grey: "#c0c0c0",
  // text: "#333333",
  // textWhite: "#ffffff",
  // background: "#ffffff",
  header: {
    background: "#eed4cc",
    backgroundOpen: "#eed4cc",
    text: "#333333",
    textOpen: "#ffffff",
    icons: "#333333",
    iconsHover: "#3273dc",
    iconsOpen: "#ffffff",
  },
  footer: {
    background: "#eed4cc",
    text: "#666",
    links: "#666",
    icons: "#666",
  },
})

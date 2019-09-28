import merge from "deepmerge"
import { BaseThemeColors } from "gatsby-theme-catalyst-core"

export default merge(BaseThemeColors, {
  primary: "#792f4a",
  secondary: "#770087",
  muted: "#FFF2FC",
  // grey: "#c0c0c0",
  // text: "#333333",
  // textWhite: "#ffffff",
  // background: "#ffffff",
  header: {
    background: "transparent",
    backgroundOpen: "#792f4a",
    text: "#333333",
    textOpen: "#ffffff",
    icons: "#333333",
    iconsHover: "#3273dc",
    iconsOpen: "#ffffff",
  },
  footer: {
    background: "#792f4a",
    text: "#ffffff",
    links: "#ffffff",
    icons: "#ffffff",
  },
})

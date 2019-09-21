import merge from "deepmerge"
import { BaseThemeColors } from "gatsby-theme-catalyst-core"

export default merge(BaseThemeColors, {
  primary: "#8e446a",
  secondary: "#3a8e99",
  // muted: "#f5f5f5",
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
  // footer: {
  //   background: "#333333",
  //   text: "#ffffff",
  //   links: "#ffffff",
  //   icons: "#ffffff",
  // },
})

import merge from "deepmerge"
import { BaseThemeVariants } from "gatsby-theme-catalyst-core"

export default merge(BaseThemeVariants, {
  buttons: {
    primary: {
      backgroundColor: "primary",
      color: "textWhite",
      borderColor: "primary",
      borderWidth: "2px",
      borderStyle: "solid",
    },
    secondary: {
      backgroundColor: "transparent",
      borderColor: "primary",
      borderWidth: "2px",
      borderStyle: "solid",
      color: "text",
    },
    large: {
      backgroundColor: "primary",
      color: "textWhite",
      textTransform: "uppercase",
      fontSize: 4,
      px: 4,
      py: 3,
    },
    small: {
      backgroundColor: "primary",
      color: "textWhite",
      fontSize: 2,
    },
  },
})

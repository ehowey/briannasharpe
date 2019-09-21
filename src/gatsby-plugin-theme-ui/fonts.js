import merge from "deepmerge"
import { BaseThemeFonts } from "gatsby-theme-catalyst-core"
import "typeface-homemade-apple"
import "typeface-playfair-display"

export default merge(BaseThemeFonts, {
  text:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  heading: '"Playfair Display", sans-serif',
  monospace: "Menlo, monospace",
  siteTitle: '"Homemade Apple", cursive',
  navLinks: '"Playfair Display", sans-serif',
  alt: '"Playfair Display", sans-serif',
})

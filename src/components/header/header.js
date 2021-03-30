/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import Branding from "./branding"
import Nav from "gatsby-theme-catalyst-header-top/src/components/nav"
import HamburgerButton from "gatsby-theme-catalyst-header-top/src/components/hamburger-button"
import { NavContext } from "gatsby-theme-catalyst-core"
import { useHeaderConfig } from "gatsby-theme-catalyst-header-top/src/utils/use-header-config"
import { useLocation } from "@reach/router"

const SiteHeader = () => {
  const [isNavOpen] = useContext(NavContext)
  const { useStickyHeader } = useHeaderConfig()
  const location = useLocation()
  const isHome = location.pathname === "/"
  return (
    <header
      sx={{
        display: "grid",
        position: useStickyHeader ? "sticky" : "static",
        top: 0,
        width: "100%",
        color: isNavOpen ? "header.textOpen" : "header.text",
        backgroundColor: isNavOpen
          ? "header.backgroundOpen"
          : isHome
          ? "accent"
          : "header.background",
        gridArea: "header",
        zIndex: "888", // Ensure the header is always on top
        variant: "variants.header",
      }}
      id="header"
    >
      <div
        sx={{
          gridRow: "1 / -1",
          gridColumn: "1 / -1",
          alignSelf: "start",
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gridTemplateRows: ["auto 1fr", null, "auto", null, null],
          maxWidth: "maxPageWidth",
          width: "100%",
          minHeight: isNavOpen ? "100vh" : "50px",
          m: "0 auto",
          px: [1, null, 3, null, null],
          py: [1, null, 2, null, null],
        }}
      >
        <Branding />
        <Nav />
        <HamburgerButton />
      </div>
    </header>
  )
}

export default SiteHeader

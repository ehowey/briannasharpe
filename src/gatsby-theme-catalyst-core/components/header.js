/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { useContext } from "react"
import Branding from "gatsby-theme-catalyst-header-top/src/components/branding/branding"
import Nav from "gatsby-theme-catalyst-header-top/src/components/navbar/nav"
import MobileButton from "gatsby-theme-catalyst-header-top/src/components/navbar/nav-mobile-button"
import {
  NavContext,
  HomeContext,
  useCatalystConfig,
} from "gatsby-theme-catalyst-core"

const SiteHeader = () => {
  const [isNavOpen] = useContext(NavContext)
  const [isHome] = useContext(HomeContext)
  const { useStickyHeader } = useCatalystConfig()
  const { theme } = useThemeUI()
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
          gridTemplateRows: [
            theme.sizes.headerHeight + " 1fr",
            null,
            theme.sizes.headerHeight,
            null,
            null,
          ],
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
        <MobileButton />
      </div>
    </header>
  )
}

export default SiteHeader

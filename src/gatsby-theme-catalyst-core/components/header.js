/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import HeaderLayout from "gatsby-theme-catalyst-header-top/src/components/header-layout"
import Branding from "gatsby-theme-catalyst-header-top/src/components/branding/branding"
import Nav from "gatsby-theme-catalyst-header-top/src/components/navbar/nav-layout"
import { NavContext } from "gatsby-theme-catalyst-core"
import { HomeContext } from "gatsby-theme-catalyst-core"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"

const SiteHeader = () => {
  const [isNavOpen] = useContext(NavContext)
  const [isHome] = useContext(HomeContext)
  const { useStickyHeader } = useCatalystConfig()
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
      <HeaderLayout>
        <Branding />
        <Nav />
      </HeaderLayout>
    </header>
  )
}

export default SiteHeader

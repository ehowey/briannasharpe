/** @jsx jsx */
import { jsx } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useContext } from "react"
import { NavContext } from "gatsby-theme-catalyst-core"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"

const SiteBranding = () => {
  const [isNavOpen, setIsNavOpen] = useContext(NavContext)
  const { title, logo } = useSiteMetadata()
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        ml: 2,
        mr: 2,
        variant: "variants.branding",
      }}
    >
      <Link
        to="/"
        onClick={() => setIsNavOpen(false)}
        sx={{ textDecoration: "none", display: "flex", alignItems: "center" }}
      >
        <GatsbyImage
          image={logo}
          sx={{
            height: ["45px", null, "55px", "60px", null],
            width: ["225px", null, "275px", "300px", null],
            variant: "variants.siteLogo",
          }}
          alt={title}
          objectFit="contain"
          loading="eager"
          imgStyle={{
            objectFit: "contain",
            filter: isNavOpen ? "invert(1)" : "none",
          }}
        />
      </Link>
    </div>
  )
}

export default SiteBranding

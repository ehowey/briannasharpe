/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { ButtonInternal } from "gatsby-theme-catalyst-core"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div
      sx={{
        mb: 5,
      }}
    >
      <Img
        sx={{
          height: ["250px", "auto", "auto"],
          width: ["100%", "250px", "300px"],
          float: ["none", "left", "left"],
          mr: 3,
          mb: 2,
          mt: [3, 2, 2],
        }}
        fluid={data.headshot.childImageSharp.fluid}
        alt="Brianna Sharpe"
      />
      <Styled.p
        sx={{
          "::first-letter": {
            fontWeight: "bold",
            fontFamily: "alt",
            fontSize: 8,
            float: "left",
            mt: "-8px",
            pr: "8px",
            lineHeight: "65px",
          },
        }}
      >
        It feels nicer to be on a short-form basis, so feel free to just call me
        Bri (she/her). I live on a mini-acreage in Alberta, Canada with my two
        mini-humans, my very tall partner, and my husky who believes he is mini,
        but is not.
      </Styled.p>
      <Styled.p>
        I’ve been a high school teacher, dogsled guide, Outward Bound
        instructor, base camp cook, and adventure therapy facilitator. These
        things have prepared me pretty well for certain key aspects of my life
        currently: dealing with poop, making meals with few ingredients and
        little time, and giving 100% of my heart 24/7.
      </Styled.p>
      <Styled.p>
        Although I have an M.Ed., two other degrees, and am a certified yoga
        teacher, I am currently auditing courses in advanced sleep deprivation
        studies and the postmodern semiotics of preschooler communication. For
        extracurricular activities, I help run an LGBTQ2S+ community
        organization.
      </Styled.p>
      <Styled.p>
        I love the idea of bringing the margins into the centre — allowing the
        body’s peripheral stories into the heart, inviting folks on the outside
        into the hearth, and helping my kiddos feel that they have a strong
        centre to orbit.
      </Styled.p>
      <ButtonInternal to="/bio" text="Full Bio" variant="small" />
    </div>
  )
}

export default Bio

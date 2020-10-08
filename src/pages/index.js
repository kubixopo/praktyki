import React from "react"
import SEO from "../components/seo"
import Layout from "../Layout/Layout"
import Nav from "../components/Nav/Nav"
import Hero from "../components/Hero/Hero"
import ServicesSection from "../components/ServicesSection/ServicesSection"

const IndexPage = () => (
  <Layout>
    <Nav />
    <Hero />
    <ServicesSection />
  </Layout>
)

export default IndexPage

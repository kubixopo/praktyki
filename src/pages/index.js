import React from "react"
import SEO from "../components/seo"
import Layout from "../Layout/Layout"
import Nav from "../components/Nav/Nav"
import Hero from "../components/Hero/Hero"
import ServicesSection from "../components/ServicesSection/ServicesSection"
import ContactSection from "../components/ContactSection/ContactSection"
import Footer from "../components/Footer/Footer"


const IndexPage = () => (
  <>
  <SEO title="Komputronik Opole" />
  <Layout>
    <Hero />
    <ServicesSection />
    <ContactSection/>
    <Footer />
  </Layout>
  </>
)

export default IndexPage

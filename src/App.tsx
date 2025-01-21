import { Navbar } from "./components/Navbar"
import { CryptoDashboard } from "./sections/CryptoDashboard"
import { Hero } from "./sections/Hero"
import { Features } from "./sections/Features"
import { News } from "./sections/News"
import { Footer } from "./sections/Footer"
import { Analytics } from "@vercel/analytics/react"

export const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <CryptoDashboard/>
    <Features/>
    <News/>
    <Footer/>
    <Analytics/>
    </>
  )
}

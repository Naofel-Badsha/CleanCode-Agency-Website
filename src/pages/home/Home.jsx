
import HeroSection from './HeroSection'
import ToolsSection from './ToolsSection'
import CompanyLogos from './CompanyLogos'
import Services from './Services'
import Testimonials from './Testimonials'
import Blogs from '../blogs/Blogs'
import TeamSection from './TeamSection'
import Pricing from './Pricing'
import FAQs from './FAQs'
import Newsletter from './Newsletter'
import CustomerSection from './CustomerSection'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <ToolsSection/>
    <CompanyLogos/>
    <CustomerSection />
    <Services/>
    <Testimonials/>
    <Blogs/>
    <TeamSection/>
    <Pricing/>
    <FAQs/>
    <Newsletter/>
    </>
  )
}

export default Home
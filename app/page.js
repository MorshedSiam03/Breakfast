import React from 'react'
import Breakfast from './Header/page'
import About from './About/page'
import WhyChooseUs from './WhyChooseUs/page'
import Dishes from './Dishes/page'
import CustomerFeedback from './CustomerFeedback/page'
import TeamMember from './TeamMember/page'
import HoeItWorks from './HowItWorks/page'
import BlogSection from './Blogs/page'
import PartnersSection from './Partner/page'
import Footer from './Footer/page'

function Home () {
  return (
    <div className='w-screen mx-auto'>
      <Breakfast></Breakfast>
      <About></About>
      <WhyChooseUs></WhyChooseUs>
      <Dishes></Dishes>
      <CustomerFeedback></CustomerFeedback>
      <TeamMember></TeamMember>
      <HoeItWorks></HoeItWorks>
      <BlogSection></BlogSection>
      <PartnersSection></PartnersSection>
      <Footer></Footer>
    </div>
  )
}

export default Home
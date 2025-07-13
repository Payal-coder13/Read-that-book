import React from 'react'

import Home from './HomePage/Home'
import IconSection from './HomePage/IconSection'
import FeatureSection from './HomePage/FeatureSection'
import NewsLetterSection from './HomePage/NewsLetterSection'
import ArrivalsSection from './HomePage/ArrivalsSection'
import DealsSection from './HomePage/DealsSection'
import ReviewSection from './HomePage/ReviewSection'
import BlogsSection from './HomePage/BlogsSection'
import FooterSection from './HomePage/FooterSection'

const Homepage = () => {
  return (
    <>
    <Home/>
    <IconSection/>
    <FeatureSection/>
    <NewsLetterSection/>
    <ArrivalsSection/>
    <DealsSection/>
    <ReviewSection/>
    <BlogsSection/>
    <FooterSection/>
    </>
  )
}

export default Homepage
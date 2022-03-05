import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import LastSection from '../../components/LastSection'
import Trending from '../../components/Trending'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Trending/>
        <hr/>
        <LastSection/>
    </div>
  )
}

export default Home
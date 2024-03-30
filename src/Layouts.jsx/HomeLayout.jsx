import React, { Fragment } from 'react'
import Home from '../components/Home'
import Slider from '../common/Slider'
import Header from '../common/Header'

const HomeLayout = () => {
  return (
    <Fragment>
      <Header />
      <Home />
    </Fragment>
  )
}

export default HomeLayout

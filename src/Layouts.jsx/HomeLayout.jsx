import React, { Fragment } from 'react'
import Home from '../components/Home'
import Slider from '../common/Slider'

const HomeLayout = () => {
  return (
    <Fragment>
      <Slider />
      <Home />
    </Fragment>
  )
}

export default HomeLayout

import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts'
import Exercises from './Exercises'

export default class extends Component {
  render() {
    return <Fragment>
      <Header />

      <Exercises />

      <Footer />
    </Fragment>
  }
}

import React from 'react'
import {Link} from 'gatsby'
import './base.css'


import Container from './container'
import Footer from '../components/Footer/Footer'
import Navigation from './Header/navigation.jsx'



class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        
        <Navigation /> 
         {children}
         </Container>
         
        
    )
  }
}

export default Layout

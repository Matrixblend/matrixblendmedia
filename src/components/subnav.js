import React from 'react'
import Link from 'gatsby-link'
import Styles from '../components/subnav.module.css'




export default () => (
 
				<div className={Styles.subnav}>
          <Link to="/">Home</Link>
        <Link className="" to="/blog">Blog</Link>
          <Link className="" to="/music">Music</Link>
          {/* <Link className="" to="/money">Money</Link>
          <Link to="/videos"></Link> */}

          
         
        
          </div>

)

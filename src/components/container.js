import React from 'react'
import { Helmet } from "react-helmet"


export default ({ children }) => (
  <div id="main">
    <Helmet>
          <meta charSet="utf-8" />
          <title>Matrixblend Media | inspire | Ideas | inspiration</title>
          <script type="text/javascript" src='/js/breakpoints.min.js'></script>
        </Helmet>
  <div className="inner">
  {children}
  </div>
  
  <script type="text/javascript" src='/js/jquery.min.js'></script>
          {/* <script type="text/javascript" src='/js/browser.min.js'></script>
          <script type="text/javascript" src='/js/breakpoints.min.js'></script>
          <script type="text/javascript" src='/js/util.min.js'></script> */}
          <script type="text/javascript" src='/js/main.js'></script>
          
  </div>
)

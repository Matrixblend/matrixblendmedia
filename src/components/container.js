import React from 'react'


export default ({ children }) => (
  <div id="main">
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

import React from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
const $ =  'jquery'

import AwesomeSlider from '../../plugins/gatsby-plugin-awesome-slider/src'
// import AwsSliderStyles from '../../plugins/gatsby-plugin-awesome-slider/src/styles'
import sidebar from './sidebar'


const slider = (
	
  <AwesomeSlider >
	    <div data-src="//live.staticflickr.com/65535/48614325241_af47f75bb4_c.jpg" />
    <div data-src="//live.staticflickr.com/65535/48614325241_af47f75bb4_c.jpg" />
    <div data-src="//live.staticflickr.com/65535/48613971828_cfc7bf65bf_c.jpg" />
  </AwesomeSlider>
);
 

export default ({ data }) => (
  <section id="banner">
	

{slider}
{sidebar}
			{/* Offer free consultation service. */}
			{/* Make this a scroller where the data comes from outsoureces - e.g. Google Docs. */}
			{/* <h1>Web Consultation: Use our experience to fix your web related issues.</h1> */}
		
			
			{/* Free Webinar/With one of our Featured host. */}
			{/* Calendy account */}
	  </section>
	
		
)

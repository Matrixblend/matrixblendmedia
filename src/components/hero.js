import React from 'react'
import classNames from "classnames"

import Img from 'gatsby-image'
import Link from 'gatsby-link'
import '../jss/material-kit-react/components/parallaxStyle'
import Parallax from './Parallex/Parallax'
import videoSrc from "../videos/logoVideo.mp4"



export default ({ data }) => (
	<Parallax video="test" image={('')}>
		         
						 
					<video
            width="100%"
            height="703"
            autoPlay
           >
            <source src={videoSrc} type="video/mp4" />
          </video>  

  <section id="banner">
		
				<div className="content">
					<header>
					<h1>{data.name}</h1>
						<p>{data.title}</p>
					</header>
					<p>{data.shortBio.shortBio}</p>
					<ul className="actions">
						<li>
							
							<a href="https://soundcloud.com/matrixblend" className="button big">Music Production</a>
						<Link className="button big" to={`/blog/${data.slug}`}>{data.title}</Link>
						</li>
					</ul>
				</div>
				<span className="image object">
				{/* <Img  alt={data.name} sizes={data.heroImage.sizes} /> */}
				</span>
				{/* <!-- Calendly link widget begin --> */}

	  </section>
	</Parallax>
		
)

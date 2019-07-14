import React from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'


export default ({ data }) => (
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
						{/* <Link className="button big" to={`/artist/${data.slug}`}>{data.title}</Link> */}
						</li>
					</ul>
				</div>
				<span className="image object">
				<Img  alt={data.name} sizes={data.heroImage.sizes} />
				</span>
	  </section>
	
		
)

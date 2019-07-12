import React from 'react'
import Img from 'gatsby-image'
import style from './main.css'
import styles from './hero.module.css'

export default ({ data }) => (
  <section id="banner">
									<div className="content">
										<header>
                    <h1>{data.name}</h1>
											<p>{data.title}</p>
										</header>
										<p>{data.shortBio.shortBio}</p>
										<ul className="actions">
											<li><a href="#" className="button big">Learn More</a></li>
										</ul>
									</div>
									<span className="image object">
                  <Img  alt={data.name} sizes={data.heroImage.sizes} />
									</span>
	  </section>

)

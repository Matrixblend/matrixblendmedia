import React from 'react'
import Link from 'gatsby-link'

import $ from 'jquery'

// import breakpoints from 'breakpoints-js'



class Sidebar extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			mobileOpen: false,
			
		}
	
	}
	componentDidMount(){
		
		this.$head = $('head')
		this.$sidebar = $('#sidebar')


	


		
		this.$button = $('.toggle').appendTo(this.$sidebar).on('click',function(e){
				// Prevent default.
				e.preventDefault();
				e.stopPropagation();
				
			// Toggle.
			$('#sidebar').toggleClass('inactive' );
		})
		
		

		}


	componentWillUnmount(){
		this.$sidebar.off()
	}



	render(){
		
		return(
			<div id="sidebar" ref={sidebar => this.sidebar = sidebar} className="inactive">
									<div className="inner">
										
										<section id="search" className="alt">
												<form method="post" action="#">
													<input type="text" name="query" id="query" placeholder="Search"></input>
												</form>
											</section>
									
											<nav id="menu">
												<header className="major">
													<h2>Menu</h2>
												</header>
												<ul>
														<li><Link className="tk" to="/">Home</Link></li>
														<li><Link className="tk" to="/blog">Blog</Link></li>
														<li><Link className="tk" to="/music">Music</Link></li>
														
													{/* <li> */}
														{/* <span className="opener">Submenu</span>
														<ul>
															<li><a href="#">Lorem Dolor</a></li>
															<li><a href="#">Ipsum Adipiscing</a></li>
															<li><a href="#">Tempus Magna</a></li>
															<li><a href="#">Feugiat Veroeros</a></li>
														</ul> */}
													{/* </li> */}
													{/* <li><a href="#">Etiam Dolore</a></li>
													<li><a href="#">Adipiscing</a></li>
													<li>
														<span className="opener">Another Submenu</span>
														<ul>
															<li><a href="#">Lorem Dolor</a></li>
															<li><a href="#">Ipsum Adipiscing</a></li>
															<li><a href="#">Tempus Magna</a></li>
															<li><a href="#">Feugiat Veroeros</a></li>
														</ul>
													</li>
													<li><a href="#">Maximus Erat</a></li>
													<li><a href="#">Sapien Mauris</a></li>
													<li><a href="#">Amet Lacinia</a></li> */}
												</ul>
											</nav>
			
			
							
											<section>
												<header className="major">
													<h2>Get in touch</h2>
												</header>
												<p>Matrixblend Media is community of experts that can guide you to finding your inner power to maniplute your lifes matrix. With the proper insight, ideas and inspiration, anyone can achieve success.</p>
												<ul className="contact">
													<li className="icon solid fa-envelope"><a href="#">matrixblend@gmail.com</a></li>
													<li className="icon solid fa-phone">518.768.1257</li>
													<li className="icon solid fa-home">Hollywood, CA</li>
												</ul>
											</section>
			
									
											<footer id="footer">
												<p className="copyright">2019 © Matrixblend Media. All rights reserved.</p>
											</footer>
							</div>
								<a href="#sidebar" ref={button => this.button = button}  className="toggle"></a>
							
			</div>
			
			
			
			
			)

			
		
	}
}
export default Sidebar
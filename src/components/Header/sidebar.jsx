import React from 'react'
import Link from 'gatsby-link'

import $ from 'jquery'
import breakpoints from 'breakpoints-js'





class Sidebar extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			mobileOpen: false,
			side: open,
			left: false,
			
		}
	
	}
	componentDidMount(){
		this.$head = $('head')
		this.$sidebar = $('#sidebar')

		// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ],
			'xlarge-to-max':    '(min-width: 1681px)',
			'small-to-xlarge':  '(min-width: 481px) and (max-width: 1680px)'
		});

		
		// Inactive by default on <= large.
		breakpoints.on('<=large', function() {
			this.$sidebar.addClass('inactive');
		});

		breakpoints.on('>large', function() {
			this.$sidebar.removeClass('inactive');
		});



		
		this.$button = $('.toggle').appendTo(this.$sidebar).on('click',function(e){
				// Prevent default.
				e.preventDefault();
				e.stopPropagation();
				console.log(e)
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
													<li className="icon solid fa-home">hollywood, CA</li>
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
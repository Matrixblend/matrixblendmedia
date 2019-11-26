import React from 'react'
import Link from 'gatsby-link'
import '../main.css'
import Sidebar from './sidebar'


class Navigation extends React.Component {
constructor(props){
	super(props)
	this.state = {
		mobileOpen: false,
	}
	
}
	render () {

		return(
			<header id='header'>
		<Sidebar />
    <a href="/" className="logo"><strong>Matrixblend Media</strong> Influence Inspiration, insight, and   ideas</a>
    <ul className="icons">
										<li><a href="https://twitter.com/matrixblend" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                   
										<li><a href="https://www.facebook.com/matrixblend/" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
										<li><a href="#" className="icon brands fa-snapchat-ghost"><span className="label">Snapchat</span></a></li>
										<li><a href="https://www.instagram.com/matrixblend/" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
								
									</ul>
  </header>
 

		)
	
		

	}
}

export default Navigation
  

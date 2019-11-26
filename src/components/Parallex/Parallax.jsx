import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// core components
import parallaxStyle from "../../jss/material-kit-react/components/parallaxStyle"

class Parallax extends React.Component {
  constructor(props) {
    super(props)
    var windowScrollTop =
      typeof window !== "undefined" && window.pageYOffset / 3
    this.state = {
      transform: "translate3d(0," + windowScrollTop + "px,0)",
    }
    this.resetTransform = this.resetTransform.bind(this)
  }
  componentDidMount() {
    var windowScrollTop = window.pageYOffset / 3
    this.setState({
      transform: "translate3d(0," + windowScrollTop + "px,0)",
    })
    window.addEventListener("scroll", this.resetTransform)
  }
  componentWillUnmount() {
    typeof window !== "undefined" &&
      window.removeEventListener("scroll", this.resetTransform)
  }
  resetTransform() {
    var windowScrollTop =
      typeof window !== "undefined" && window.pageYOffset / 3
    this.setState({
      transform: "translate3d(0," + windowScrollTop + "px,0)",
    })
  }
  render() {
    const {
      classes,
      filter,
      className,
      children,
      style,
      image,
      small,
    } = this.props

    const parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes.filter]: filter,
      [classes.small]: small,
      [className]: className !== undefined,
    })

    return (
      <div
        className={parallaxClasses}
        style={{
          ...style,
          backgroundImage: "url(" + image + ")",
          ...this.state,
        }}
        ref="parallax"
      >
        {/* <video  autoplay loop="true" controls className={classes.textCenter}>
                  <source  src="https://www.youtube.com/watch?v=vo4pMVb0R6M" type="video/mp4" />
        </video>   */}
        {children}
      </div>
    )
  }
}

Parallax.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
}

export default withStyles(parallaxStyle)(Parallax)
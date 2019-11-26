/*eslint-disable*/
import React from "react"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// nodejs library that concatenates classes
import classNames from "classnames"
import { List, ListItem, withStyles } from "@material-ui/core"

// @material-ui/icons
// import Favorite from "@material-ui/icons/Favorite";

import footerStyle from '../../jss/material-kit-react/components/footerStyle'

function Footer({ ...props }) {
  const { classes, whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.twitter.com/_joshhead_"
                className={classes.block}
                target="_blank"
              >
                J.eldon
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/about" className={classes.block}>
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/blog" className={classes.block}>
                Blog 
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/music" className={classes.block}>
                music
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}{" "}
          <a
            href="https://www.matrixblendmedia.com"
            className={aClasses}
            target="_blank"
          >
            Matrixblend Media
          </a>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool,
}

export default withStyles(footerStyle)(Footer)

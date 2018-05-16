import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import styles from 'styles/global'

const Container = ({ children, classes }) => (
  <div className={classes.container}>{children}</div>
)

Container.propTypes = {
  children: PropTypes.object,
  classes: PropTypes.object
}

export default injectSheet(styles)(Container)

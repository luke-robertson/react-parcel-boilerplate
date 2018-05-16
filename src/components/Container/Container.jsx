import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import styles from 'styles/global'

const Container = ({ children }) => <div>{children}</div>

Container.propTypes = {
  children: PropTypes.object
}

export default injectSheet(styles)(Container)

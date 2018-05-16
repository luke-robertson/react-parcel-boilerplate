import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import mainStore from 'stores/mainStore'

const styles = {
  text: {
    color: 'red',
    fontSize: '20px'
  }
}

const Background = ({ classes }) => (
  <div className={classes.text}>
    <p>Hello World</p>
    <p>Value from store: {mainStore.testText}</p>
  </div>
)

Background.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(observer(Background))

import React from 'react'

import { observer } from 'mobx-react'

import Background from 'components/Background/Background'

import './styles/styles.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Background />
      </div>
    )
  }
}

export default observer(App)

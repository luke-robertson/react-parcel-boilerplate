import reset from './reset'

const styles = {
  container: {
    height: '100%'
  },
  '@global': {
    ...reset,
    body: {
      fontFamily: '"Lato", sans-serif',
      background: '#eaeaea'
    },
    '*': {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      boxSizing: 'border-box'
    },
    '#root': {
      height: '100%'
    }
  }
}

export default styles

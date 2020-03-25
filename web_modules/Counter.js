import React, { Component } from "react"
import { FormattedMessage } from 'react-intl';

class Counter extends Component {
  state = {
    count: 0,
  }
  render() {
    const { t } = this.props
    const { count } = this.state
    return (
      <div style={styles.container}>
        <div>
          <FormattedMessage id="COUNT" values={{ count: count }} />
        </div>
        <div>
          <button onClick={() => this.setState({ count: count - 1 })}>-</button>
          <button onClick={() => this.setState({ count: count + 1 })}>+</button>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    padding: 16,
    background: "#f0f0f0",
    textAlign: "center",
  },
}

export default Counter

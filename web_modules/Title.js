import React from "react"
import { FormattedMessage } from 'react-intl';

const Title = ({ name }) => (
  <div style={styles.title}>
    <FormattedMessage id="HELLO" values={{ name: name }}/>
  </div>
)

const styles = {
  title: {
    fontSize: 30,
    textAlign: "center",
    paddingTop: 100,
    paddingBottom: 100,
  }
}

export default Title

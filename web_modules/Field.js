import React from "react";
import { useIntl } from 'react-intl';

const Field = ({ value, onChange }) => {
  const intl = useIntl();

  return (
    <input
      style={styles.field}
      value={value}
      onChange={onChange}
      placeholder={ intl.formatMessage({ id: 'ENTER_NAME' }) } />
  )
}

const styles = {
  field: {
    fontSize: 32,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ccc",
    margin: "0 auto",
    display: "block",
    marginTop: 16,
  },
}

export default Field

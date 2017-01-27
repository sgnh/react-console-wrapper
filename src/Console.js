import React from 'react';

const { string, bool } = React.PropTypes;

const Console = (props) => {
  if (props.log) {
    console.log(props.log);
  }

  if (props.info) {
    console.info(props.info);
  }

  if (props.error) {
    console.error(props.error);
  }

  if (props.clear) {
    console.clear();
  }

  return null;
};

Console.propTypes = {
  log: string,
  info: string,
  error: string,
  clear: bool,
};

Console.defaultProps = {
  log: '',
  info: '',
  error: '',
  clear: false,
};

export default Console;

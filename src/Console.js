import React from 'react';

const { array, string, bool, shape } = React.PropTypes;

const Console = (props) => {
  if (props.assert.assertion) {
    console.assert(props.assert.assertion, props.assert.message);
  }

  if (props.clear) {
    console.clear();
  }

  if (props.count) {
    console.count(props.count);
  }

  if (props.error) {
    console.error(props.error);
  }

  if (props.group) {
    console.group();
  }

  if (props.groupColapsed) {
    console.groupCollapsed();
  }

  if (props.groupEnd) {
    console.groupEnd();
  }

  if (props.info) {
    console.info(props.info);
  }

  if (props.log) {
    console.log(props.log);
  }

  if (props.table.data.length) {
    console.table(props.table.data, props.table.columns);
  }

  if (props.time) {
    console.time(props.time);
  }

  if (props.timeEnd) {
    console.timeEnd(props.timeEnd);
  }

  if (props.trace) {
    console.trace();
  }

  if (props.warn) {
    console.warn(props.warn);
  }

  return null;
};

Console.propTypes = {
  assert: shape({
    assertion: bool,
    message: string,
  }),
  clear: bool,
  count: string,
  error: string,
  group: bool,
  groupColapsed: bool,
  groupEnd: bool,
  info: string,
  log: string,
  table: shape({
    data: array,
    columns: array,
  }),
  time: string,
  timeEnd: string,
  trace: bool,
  warn: string,
};

Console.defaultProps = {
  assert: {
    assertion: false,
    message: '',
  },
  clear: false,
  count: '',
  error: '',
  group: false,
  groupColapsed: false,
  groupEnd: false,
  info: '',
  log: '',
  table: {
    data: [],
    columns: [],
  },
  time: '',
  timeEnd: '',
  trace: false,
  warn: '',
};

export default Console;

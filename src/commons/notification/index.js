import * as React from 'react';
import PropTypes from 'prop-types';

const TYPE = {
  success: 'green',
  danger: 'red',
};

const Notification = props => (
  <div
    class={`bg-${TYPE[props.type]}-200 border border-${
      TYPE[props.type]
    }-400 px-4 py-3 rounded text-${TYPE[props.type]}-500 relative mb-4`}
    role="alert">
    <strong class="font-bold text-sm">{props.title}</strong>
    &nbsp;
    <span class="block sm:inline text-sm">{props.message}</span>
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3" />
  </div>
);

Notification.defaultProps = {
  type: TYPE.success,
};

export default Notification;

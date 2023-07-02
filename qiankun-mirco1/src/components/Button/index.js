import * as React from 'react';

const Button = props => {
  return <button>{props?.text || '默认内容'}</button>;
};

export default Button;

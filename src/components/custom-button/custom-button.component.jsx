import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, ...props}) => {
  return (
    <button className="btn-container" {...props}>
      <div className="pixel"><p>{children}</p></div>
    </button>
  )
};

export default CustomButton;
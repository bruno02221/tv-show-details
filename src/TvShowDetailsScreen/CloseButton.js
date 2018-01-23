import React from "react";

const CloseButton = ({ className, ...rest }) => {
  return (
    <div {...rest} className={className}>
      Close
    </div>
  );
}

export default CloseButton;
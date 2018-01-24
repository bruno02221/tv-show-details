import React from "react";
import classnames from "classnames";
import styles from "./CloseButton.css";
import CloseSvg from "./close.svg";

const CloseButton = ({ className, ...rest }) => {
  return (
    <button {...rest} className={classnames(styles.button, className)}>
      <CloseSvg className={styles.closeImg} />
    </button>
  );
}

export default CloseButton;
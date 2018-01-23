import React from "react";
import classnames from "classnames";
import styles from "./Background.css";

const Background = ({ imageSrc, className, ...rest }) => {
  return (
    <div className={classnames(styles.background, className)} style={{
      backgroundImage: `url(${imageSrc})`
    }}>
      <div className={styles.fog}/>
    </div>
  );
};

export default Background;
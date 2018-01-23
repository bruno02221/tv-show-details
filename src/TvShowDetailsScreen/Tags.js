import React from "react";
import classes from "./Tags.css";

const Tags = ({ children }) => {
  return (
    <div className={classes.tags}>
      {children}
    </div>
  );
};

const Tag = ({ children }) => {
  return (
    <div className={classes.tag}>
      {children}
    </div>
  );
};

export default Tags;
export {
  Tag
}
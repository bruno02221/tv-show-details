import React from "react";
import classnames from "classnames";
import styles from "./MainInfo.css";
import Tags, { Tag } from "./Tags";

const MainInfo = ({ title, genres, year, className, ...rest }) => {
  return (
    <div {...rest} className={classnames(styles.mainInfo, className)}>
      <h1>{title}</h1>
      <div className={classnames(styles.description)}>
        <Tags className={classnames(styles.tags)}>
          {genres.map(genre => <Tag key={genre.ID}>{genre.Title}</Tag>)}
        </Tags>
        <h4>{year}</h4>
      </div>
    </div>
  );
};

export default MainInfo;

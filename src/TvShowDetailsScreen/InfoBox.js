import React from "react";
import classnames from "classnames";
import styles from "./InfoBox.css";
import Tabs from "../Tabs";

const InfoBox = ({ cast, synopsis, className, ...rest }) => {
  const titles = ["Synopsis", "Cast"];
  const contents = [
    <Synopsis>{synopsis}</Synopsis>,
    <Cast cast={cast} />
  ]

  return (
    <div {...rest} className={classnames(styles.infoBox, className)}>
      <Tabs
        titles={titles}
        contents={contents}
      />
    </div>
  );
}

const Synopsis = ({ children }) => {
  return (
    <p>{children}</p>
  );
}

const Cast = ({ cast }) => {
  return (
    <div className={styles.cast}>
      {cast.map(it => {
        return <div key={it.id} className={styles.castPerson}>{it.name}</div>
      })}
    </div>
  );
}

export default InfoBox;
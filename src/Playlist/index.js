import React from "react";
import classnames from "classnames";
import styles from "./index.css";
import Tabs from "../Tabs";
import List from "./List";

const Playlist = ({ episodes, className, ...rest }) => {
  const titles = episodes.map(it => {
    return <SeasonNumber>{it.seasonNumber}</SeasonNumber>;
  });

  const contents = episodes.map(it => {
    return <List episodes={it.episodes} />
  });

  return (
    <div {...rest} className={classnames(styles.playlist, className)}>
      <Tabs
        titles={titles}
        contents={contents}
       />
    </div>
  );
};

const SeasonNumber = ({ children }) => {
  return <span>Season {children}</span>;
};

export default Playlist;

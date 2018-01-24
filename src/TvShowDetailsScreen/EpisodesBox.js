import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import Playlist from "../Playlist";

const EpisodesBox = ({ episodes, className, ...rest }) => {
  return (
    <div {...rest} className={className}>
      <Playlist episodes={episodes} />
    </div>
  );
};

export default EpisodesBox;

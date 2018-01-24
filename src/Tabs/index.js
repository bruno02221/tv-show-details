import React from "react";
import classnames from "classnames";
import styles from "./index.css";
import { Tabs, Tab, TabPanel, TabList } from "react-tabs";

const CustomTabs = ({ titles, contents, className, ...rest }) => {
  return (
    <Tabs className={classnames(styles.tabs, className)}>
      <TabList className={classnames(styles.tabList)}>
        {titles.map((title, index) => {
          return (
            <Tab
              className={styles.tab}
              selectedClassName={styles.tabSelected}
              key={index}
            >
              {title}
            </Tab>
          );
        })}
      </TabList>
      {contents.map((content, index) => {
        return (
          <TabPanel
            className={styles.tabPanel}
            selectedClassName={styles.tabPanelSelected}
            key={index}
          >
            {content}
          </TabPanel>
        );
      })}
    </Tabs>
  );
};

export default CustomTabs;

import React, { Component } from "react";
import styles from "./TvShowDetailsScreen.css";

class TvShowDetailsScreen extends Component {

  constructor(props) {
    super(props);
    this.requestClose = this.requestClose.bind(this);
  }

  render() {
    return (
      <div className={styles.root}>
        Tv show details screen
        <button onClick={this.requestClose}>
          Close
        </button>
      </div>
    );
  }

  requestClose() {
    if (this.props.onRequestClose) {
      this.props.onRequestClose();
    }
  }

}

export default TvShowDetailsScreen;
import React, { Component } from "react";
import styles from "./Main.css";
import { getTvShowDetails, getTvShowEpisodes } from "../api";
import TvShowDetailsScreen from "../TvShowDetailsScreen";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: ["123"], // Fake show list,
      selectedTvShow: null
    };
    this.onCloseTvShowDetails = this.onCloseTvShowDetails.bind(this);
  }

  render() {
    return (
      <div className={styles.root}>
        {this.state.shows.map(show => (
          <button key={show} onClick={() => this.openTvShow(show)}>
            {`Open TV show ${show} details`}
          </button>
        ))}

        {this.state.selectedTvShow ? (
          <TvShowDetailsScreen
            show={this.state.selectedTvShow}
            onRequestClose={this.onCloseTvShowDetails}
          />
        ) : null}
      </div>
    );
  }

  openTvShow(showId) {
    this.setState({
      selectedTvShow: showId
    });
  }

  onCloseTvShowDetails() {
    this.setState({
      selectedTvShow: null
    })
  }
}

export default Main;

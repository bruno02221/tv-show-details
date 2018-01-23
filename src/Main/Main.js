import React, { Component } from "react";
import styles from "./Main.css";
import TvShowDetailsScreen from "../TvShowDetailsScreen";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: ["123"], // Fake show list,
      selectedTvShowId: "123" // TODO: change it to null
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

        {this.state.selectedTvShowId ? (
          <TvShowDetailsScreen
            tvShowId={this.state.selectedTvShowId}
            onRequestClose={this.onCloseTvShowDetails}
          />
        ) : null}
      </div>
    );
  }

  openTvShow(tvShowId) {
    this.setState({
      selectedTvShowId: tvShowId
    });
  }

  onCloseTvShowDetails() {
    this.setState({
      selectedTvShowId: null
    })
  }
}

export default Main;

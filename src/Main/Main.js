import React, { Component } from "react";
import TvShowDetailsScreen from "../TvShowDetailsScreen";

// "https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json"
// "https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json"

class Main extends Component {
  render() {
    return (
      <div>
        <TvShowDetailsScreen />
      </div>
    );
  }
}

export default Main;

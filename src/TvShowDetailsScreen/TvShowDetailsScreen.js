import React, { Component } from "react";
import styles from "./TvShowDetailsScreen.css";
import { getTvShowDetails, getTvShowEpisodes } from "../api";

class TvShowDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: null
    };
    this.requestClose = this.requestClose.bind(this);
    this._onLoadData = this._onLoadData.bind(this);
  }

  componentDidMount() {
    this._loadData(this.props.tvShowId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.showId !== nextProps.tvShowId) {
      this._loadData(nextProps.tvShowId);
    }
  }

  _loadData(tvShowId) {
    this.setState({
      loading: true,
      data: null
    });
    Promise.all([
      getTvShowDetails(tvShowId).then(resp => resp.json()),
      getTvShowEpisodes(tvShowId).then(resp => resp.json())
    ]).then(this._onLoadData);
  }

  _onLoadData(data) {
    this.setState({
      loading: false,
      data: {
        tvShowDetails: data[0],
        episodesDetails: data[1]
      }
    });
  }

  render() {
    const renderContent = () => {
      if (this.state.loading) {
        return this._renderLoading();
      } else if (this.state.data) {
        return this._renderData();
      } else {
        return null;
      }
    };

    return <div className={styles.root}>{renderContent()}</div>;
  }

  _renderData() {
    return (
      <div>
        <div
          className={styles.background}
          style={{
            backgroundImage: `url(
              ${this.state.data.tvShowDetails.Images.Background}
            )`
          }}
        >
          <div className={styles.fog} />
        </div>

        <div className={styles.content}>
          <button onClick={this.requestClose}>Close</button>
        </div>
      </div>
    );
  }

  _renderLoading() {
    return <div>Waiting</div>;
  }

  requestClose() {
    if (this.props.onRequestClose) {
      this.props.onRequestClose();
    }
  }
}

export default TvShowDetailsScreen;

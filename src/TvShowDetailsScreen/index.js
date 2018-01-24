import React, { Component } from "react";
import { getTvShowDetails, getTvShowEpisodes } from "../api";
import styles from "./index.css";
import Background from "./Background";
import CloseButton from "./CloseButton";
import MainInfo from "./MainInfo";
import EpisodesBox from "./EpisodesBox";
import InfoBox from "./InfoBox";

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
    Promise.all([getTvShowDetails(tvShowId), getTvShowEpisodes(tvShowId)]).then(
      this._onLoadData
    );
  }

  _onLoadData(data) {
    this.setState({
      loading: false,
      data: {
        tvShowDetails: data[0],
        episodes: data[1]
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
    return <div className={styles.content}>{renderContent()}</div>;
  }

  _renderData() {
    return (
      <div className={styles.dataRoot}>
        <Background
          className={styles.background}
          imageSrc={this.state.data.tvShowDetails.images.background}
        />
        <CloseButton
          className={styles.closeButton}
          onClick={this.requestClose}
        />
        <div className={styles.info}>
          <MainInfo
            className={styles.mainInfo}
            title={this.state.data.tvShowDetails.title}
            year={this.state.data.tvShowDetails.year}
            genres={this.state.data.tvShowDetails.genres}
          />
          <InfoBox
            className={styles.infoBox}
            cast={this.state.data.tvShowDetails.cast}
            synopsis={this.state.data.tvShowDetails.synopsis}
          />
        </div>
        <EpisodesBox
          className={styles.episodesBox}
          episodes={this.state.data.episodes}
        />
      </div>
    );
  }

  _renderLoading() {
    return <div className={styles.loadingRoot}>Loading</div>;
  }

  requestClose() {
    if (this.props.onRequestClose) {
      this.props.onRequestClose();
    }
  }
}

export default TvShowDetailsScreen;

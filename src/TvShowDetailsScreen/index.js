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
    return <div className={styles.content}>{renderContent()}</div>;
  }

  _renderData() {
    return (
      <div className={styles.dataRoot}>
        <Background
          className={styles.background}
          imageSrc={this.state.data.tvShowDetails.Images.Background}
        />
        <CloseButton className={styles.closeButton} />
        <div className={styles.info}>
          <MainInfo
            className={styles.mainInfo}
            title={this.state.data.tvShowDetails.Title}
            year={this.state.data.tvShowDetails.Year}
            genres={this.state.data.tvShowDetails.Genres}
          />
          <InfoBox
            className={styles.infoBox}
            cast={this.state.data.tvShowDetails.Cast}
            synopsis={this.state.data.tvShowDetails.Synopsis}
          />
        </div>
        <EpisodesBox
          className={styles.episodesBox}
          episodes={this.state.data.episodesDetails}
        />
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

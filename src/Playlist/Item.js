import React, { Component } from "react";
import classnames from "classnames";
import styles from "./Item.css";
import PlaySvg from "./play.svg";

const Item = ({ episode, onSelect, selected }) => {
  const modifiersClasses = classnames(selected && styles.itemSelected);
  return (
    <div className={classnames(styles.item, modifiersClasses)}>
      <div className={styles.info}>
        <div className={styles.title} onClick={onSelect}>
          <span className={styles.number}>
            {formatNumber(episode.episodeNumber)}
          </span>
          <span className={styles.titleText}>{episode.title}</span>
        </div>
        <button className={styles.play}>
          <PlaySvg className={styles.playImage} />
        </button>
      </div>
      {selected ? <MoreContent episode={episode} /> : null}
    </div>
  );
};

function formatNumber(number) {
  const asString = number.toString();
  return asString.length === 1 ? "0" + number : number;
}

class MoreContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        mounted: true
      });
    }, 0);
  }
  render() {
    const modifiersClasses = classnames(
      this.state.mounted && styles.moreActive
    );
    return (
      <div className={classnames(styles.more, modifiersClasses)}>
        <img src={this.props.episode.image} />
        <p>{this.props.episode.synopsis}</p>
      </div>
    );
  }
}

export default Item;

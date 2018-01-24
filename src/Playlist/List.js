import React, { Component } from "react";
import styles from "./List.css";
import Item from "./Item";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEpisode: null
    };
  }

  render() {
    return (
      <div className={styles.list}>
        {this.props.episodes.map(ep => {
          return (
            <Item
              key={ep.id}
              episode={ep}
              selected={this.state.selectedEpisode === ep.id}
              onSelect={() => this.selectEpisode(ep.id)}
            />
          );
        })}
      </div>
    );
  }

  selectEpisode(ep) {
    this.setState(prevState => ({
      selectedEpisode: ep === prevState.selectedEpisode ? null : ep
    }))
  }
}

export default List;

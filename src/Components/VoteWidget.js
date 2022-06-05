import React from "react";
import styles from "../App.module.scss";

const INITIAL_REACTION = "🤔";
const REACTIONS = ["👎", "🤌", "👌", "👍", "🤟"];
const STARS = 5;

export class VoteWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialReaction: INITIAL_REACTION,
      selected: 0,
      voted: false
    };
    this.handleStarChange = this.handleStarChange.bind(this);
  }

  handleStarChange(e) {
    const current = e.target.value;
    if (isNaN(current)) return;
    this.setState({ initialReaction: REACTIONS[current] });
    const currentStar = +current + 1;
    this.props.storeVote(currentStar);
    this.setState({ selected: current });
    if (this.state.voted === false) this.setState({voted:true}); 
  }

  renderStars() {
    return [...Array(STARS)].map((star, index) => {
      const selectedClass =  this.state.selected >= index ? (styles.widget__star_selected+ ' ' + styles.widget__star) : styles.widget__star;
      let currentClass = this.state.voted === false ? styles.widget__star: selectedClass;
      return (
        <label key={"star" + index} className={styles.widget__label}>
          <input
            className={styles.widget__radio}
            type="radio"
            name="vote"
            value={index}
            onChange={this.handleStarChange}
          />
          <img
            className={currentClass}
            src={process.env.PUBLIC_URL + "/images/star.png"}
            alt={index + " star"}
          />
        </label>
      );
    });
  }

  render() {
    return (
      <div className={styles.widget}>
        <h1 className={styles.widget__header}>Rate us!</h1>
        <input
          className={styles.widget__rate}
          type="text"
          name="rate"
          value={this.state.initialReaction}
          disabled
        />
        <div className={styles.widget__wrapper}>{this.renderStars()}</div>
      </div>
    );
  }
}

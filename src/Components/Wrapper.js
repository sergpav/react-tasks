import React from "react";

import styles from "../App.module.scss";
import { VoteWidget } from "./VoteWidget";
import { TotalVotes } from "./TotalVotes";

export class Wrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      negative: 0,
      neutral: 0,
      positive: 0,
      totalVotes: 0,
    };
    this.storeVote = this.storeVote.bind(this);
  }

  storeVote(vote) {
    if (vote <= 0 || vote > 5) return;
    if (vote <= 2) this.setState({ negative: +this.state.negative + 1 });
    if (vote === 3) this.setState({ neutral: +this.state.neutral + 1 });
    if (vote > 3) this.setState({ positive: +this.state.positive + 1 });
    this.setState({ totalVotes: +this.state.totalVotes + 1 });
  }

  getPositivePercentage() {
    if (this.state.totalVotes === 0) return 0;
    const percentage = (this.state.positive / this.state.totalVotes) * 100;
    return +percentage.toFixed(2);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <VoteWidget storeVote={this.storeVote} />
        <TotalVotes
          negativeVotes={this.state.negative}
          neutralVotes={this.state.neutral}
          positiveVotes={this.state.positive}
          totalVotes={this.state.totalVotes}
          positivePercentage={this.getPositivePercentage()}
        />
      </div>
    );
  }
}

import React from "react";
import styles from "../App.module.scss";

export class TotalVotes extends React.Component {
  render() {
    const {
      negativeVotes,
      neutralVotes,
      positiveVotes,
      totalVotes,
      positivePercentage,
    } = this.props;
    return (
      <div className={styles.widget}>
        <table className={styles.widget__table}>
          <thead>
            <tr>
              <th>negative</th>
              <th>neutral</th>
              <th>positive</th>
              <th>total</th>
              <th>positive %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{negativeVotes}</th>
              <th>{neutralVotes}</th>
              <th>{positiveVotes}</th>
              <th>{totalVotes}</th>
              <th>{positivePercentage}%</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

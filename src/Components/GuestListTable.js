import { Component } from "react";
import styles from "../style.module.scss";

export class GuestListTable extends Component {
  getGuestsTableHead() {
    return (
      <div className={styles.guest__table}>
        <div>#</div>
        <div>Name</div>
        <div>Age</div>
        <div>Gender</div>
        <div>Is Arrive?</div>
      </div>
    );
  }

  sortByArriveStatus(list) {
    return list.sort((a, b) => {
      return b.visit - a.visit;
    });
  }

  sortByAlpha(list) {
    return list.sort((a, b) => a.name.localeCompare(b.name));
  }

  getSorted(guests) {
    return this.sortByArriveStatus(this.sortByAlpha(guests));
  }

  getGuestsTable() {
    const { guests } = this.props;
    const sorted = this.getSorted(guests);
    return sorted.map((guest, i) => {
      const { name, age, gender } = guest;
      return (
        <div key={"guest_" + i} className={styles.guest__table}>
          <div>{i + 1}</div>
          <div>{name}</div>
          <div>{age}</div>
          <div>{gender}</div>
          <div>
            <input
              type="checkbox"
              name="arrive_status"
              checked={guest.visit}
              data-id={i}
              onChange={this.props.setVisitStatus}
            />
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className={styles.guest}>
        {this.getGuestsTableHead()}
        {this.getGuestsTable()}
      </div>
    );
  }
}

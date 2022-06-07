import { Component } from "react";
import styles from "../styles.module.scss";

export class AdminTableHead extends Component {
  render() {
    return (
      <div
        className={`${styles.admin__table_head}`}
      >
        <div>#</div>
        <div>name</div>
        <div>department</div>
        <div>actions</div>
      </div>
    );
  }
}

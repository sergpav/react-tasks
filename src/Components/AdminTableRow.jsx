import { Component } from "react";
import styles from "../styles.module.scss";

const AVAILABLE_ACTIONS = ["edit", "delete"];

export class AdminTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      department: "",
    };
  }

  actionButtons() {
    return AVAILABLE_ACTIONS.map((actionName, i) => {
      return (
        <button className={styles[actionName]} key={i}>
          {actionName}
        </button>
      );
    });
  }

  render() {
    return (
      <div
        className={styles.admin__table_body}
      >
        <div>{this.props.id}</div>
        <div>{this.props.name}</div>
        <div>{this.props.department}</div>
        <div>{this.actionButtons()}</div>
      </div>
    );
  }
}

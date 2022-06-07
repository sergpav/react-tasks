import { Component } from "react";
import { AdminForm } from "./AdminForm";
import styles from '../styles.module.scss';
import { AdminTable } from "./AdminTable";

export class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      search: ''
    }
    this.setPerson = this.setPerson.bind(this);
  }

  setPerson(info) {
    this.setState({persons: [...this.state.persons, info]});
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <AdminForm setPerson={this.setPerson}/>
        <AdminTable search={this.state.search} persons={this.state.persons}/>
      </div>
    );
  }
}

import { Component } from "react";
import styles from "../styles.module.scss";
import { AdminTableHead } from "./AdminTableHead";
import { AdminTableRow } from "./AdminTableRow";

export class AdminTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.setSearch = this.setSearch.bind(this);
  }

  personRows() {
    return this.props.persons.map((person, key) => {
      const { username, department} = person;
      return (
        <AdminTableRow
          id={key + 1}
          key={key}
          name={username}
          department={department}
        />
      );
    });
  }

  setSearch(e) {
    this.setState({search: e.target.value});
  }

  render() {
    return (
      <div className={styles.admin__wrapper + " " + styles.admin__wrapper_colomn}>
        <h2>Admin Panel</h2>
        <div className={styles.admin__search}>
          <input type='text' name='search' placeholder="enter name to search" value={this.state.values} onChange={this.setSearch}/>
        </div>
        <AdminTableHead></AdminTableHead>
        {this.personRows()}
      </div>
    );
  }
}

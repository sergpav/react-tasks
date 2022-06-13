import { Component } from "react";
import styles from "../styles.module.scss";
import { AdminTableHead } from "./AdminTableHead";

const AVAILABLE_ACTIONS = ["edit", "delete"];

export class AdminTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.setSearch = this.setSearch.bind(this);
  }

  setSearch(e) {
    const search = e.target.value.toLowerCase();
    this.setState({search});
  }

  actionButtons(id) {
    return AVAILABLE_ACTIONS.map((actionName, i) => {
      return (
        <button
          className={styles[actionName]}
          key={i}
          onClick={() => this.props[actionName](id)}
        >
          {actionName === 'delete' ? '❌': '🖊️'}
        </button>
      );
    });
  }

  addRows() {
    const {search} = this.state;
    return this.props.persons.map((person, key) => {
      const { username, department} = person;
      const userShow = (!search || username.toLowerCase().includes(search));
      const id = key + 1; 
      return (
        <div key={key} className={`${styles.admin__table_body} ${userShow ? '' : styles.admin__table_hide}`}>
          <div>{id}</div>
          <div>{username}</div>
          <div>{department}</div>
          <div>{this.actionButtons(key)}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className={styles.admin__wrapper + " " + styles.admin__wrapper_colomn}>
        <h2>Admin Panel</h2>
        <div className={styles.admin__search}>
          <input type='text' name='search' placeholder="enter name to search" value={this.state.values} onChange={this.setSearch}/>
        </div>
        <AdminTableHead></AdminTableHead>
        { this.addRows() }
      </div>
    );
  }
}

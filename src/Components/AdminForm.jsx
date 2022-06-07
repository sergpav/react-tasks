import { Component } from "react";
import styles from '../styles.module.scss';
import { getDepartments } from "../helpers/getDepartments";

const initialState = {
  username: '',
  department: ''
};

export class AdminForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.setProp = this.setProp.bind(this);
    this.storeForm = this.storeForm.bind(this);
  }

  createDepartmentsDropDown() {
    const defaultValue = <option key={"department_"} value="">Pleace choise department</option>;
    const options = getDepartments().map((department, i) => {
      return <option key={"department_" + i} value={department}>{department}</option>;
    });
    return [defaultValue, ...options];
  }

  storeForm(e) {
    e.preventDefault();
    this.props.setPerson(this.state);
  }

  setProp(e) {
    if(!e.target.name) return;
    this.setState({[e.target.name] : e.target.value});
  }

  render() {
    return (
      <div className={styles.admin__wrapper}>
        <form onSubmit={this.storeForm}>
          <div className={styles.admin__wrapper_section}>
            <label htmlFor="username">User name</label>
            <input
              type="text"
              id="username"
              name="username"
              pattern="[a-zA-Z]+"
              min="2"
              max="255"
              placeholder="enter your name"
              value={this.state.username}
              onChange={this.setProp}
              required
            />
          </div>
          <div className={styles.admin__wrapper_section}>
            <label htmlFor="department">Department</label>
            <select name="department" id="department" value={this.state.department} onChange={this.setProp} required>
              {this.createDepartmentsDropDown()}
            </select>
          </div>
          <div className={styles.admin__wrapper_section}>
            <button className={styles.store__user}>Save</button>
          </div>
        </form>
      </div>
    );
  }
}

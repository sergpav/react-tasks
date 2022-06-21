import { Component } from "react";
import { AdminForm } from "./AdminForm";
import styles from '../styles.module.scss';
import { AdminTable } from "./AdminTable";

export class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      edit: ''
    }
    this.setPerson = this.setPerson.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
  }

  componentDidMount() {
    const storedPersons = this.getFromStorage('persons');
    this.setState({persons: storedPersons});
  }

  componentDidUpdate() {
    this.storeToStorage('persons', this.state.persons);
  }

  getFromStorage(itemName) {
    if(!this.isStorageAvailible('localStorage')) return;
    const res = localStorage.getItem(itemName);
    if (res === null) return [];
    return JSON.parse(res);
  }

  storeToStorage(name, value) {
    if(!this.isStorageAvailible('localStorage')) return;
    localStorage.setItem(name, JSON.stringify([...value]));
  }

  isStorageAvailible(type) {
    try {
      let storage = window[type],
        x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch(e) {
      return false;
    }
  }

  setPerson(info) {
    const {id} = info;
    const persons = [...this.state.persons];
    let storeData;
    if(!isNaN(id)) {
      const {username, department} = info;
      storeData = persons.map((person, key) => {
        return key === id ? {username, department} : person;
      });
    } else {
      storeData = [...persons, info];
    }
    this.setState({ persons:storeData });
  }

  delete(id, username) {
    const result = window.confirm(`delete user ${username}?`);
    if(!result) return
    const storedPersons = this.getFromStorage('persons');
    storedPersons.splice(id, 1);
    this.setState({persons: storedPersons});
  }

  edit(id) {
    const personInfo = this.state.persons[id];
    if(personInfo === undefined) return;
    const edit = {...personInfo, id};
    this.setState({edit});
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <AdminForm setPerson={this.setPerson} edit={this.state.edit} />
        <AdminTable delete={this.delete} edit={this.edit} persons={this.state.persons} />
      </div>
    );
  }
}

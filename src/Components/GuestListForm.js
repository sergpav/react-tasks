import { Component } from "react";
import styles from "../style.module.scss";

const initialState = {
  name: '',
  age: '',
  gender: '',
  visit: false,
};

export class GuestListForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.setPerson = this.setPerson.bind(this);
    this.setInputState = this.setInputState.bind(this);
  }

  setPerson(e) {
    e.preventDefault();
    this.props.storeGuests(this.state);
    this.setState(initialState);
  }

  setInputState(e) {
    this.setState({ [e.target.name] : e.target.value});
  }

  render() {
    return (
      <div className={styles.guest}>
        <form className={styles.guest__form} onSubmit={this.setPerson}>
          <h1>Guest list</h1>
          <p>Please add guest below</p>
          <div className={styles.guest__form_section}>
            <label htmlFor="name">Your name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ex.: John"
              min="2"
              max="255"
              pattern="[a-zA-Z]+"
              required
              value={this.state.name}
              onChange={this.setInputState}
            />
          </div>
          <div className={styles.guest__form_section}>
            <label htmlFor="age">Your age:</label>
            <input
              type="number"
              name="age"
              placeholder="Age (e.g. 25)"
              min="18"
              max="99"
              required
              value={this.state.age}
              onChange={this.setInputState}
            />
          </div>
          <div className={styles.guest__form_radio}>
            <div>
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={this.state.gender === 'male'}
                required
                onChange={this.setInputState}
              />
            </div>
            <div>
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={this.state.gender === 'female'}
                onChange={this.setInputState}
              />
            </div>
            <div>
              <label htmlFor="m270">M270 MLRS</label>
              <input
                type="radio"
                id="m270"
                name="gender"
                value="m270"
                checked={this.state.gender === 'm270'}
                onChange={this.setInputState}
              />
            </div>
          </div>
          <div className={styles.guest__form_section}>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

import { useState } from "react";
import styles from "./GuestForm.module.scss";

export function GuestFrom({addPerson}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addPerson(name, age, gender);
    setName("");
    setAge("");
    setGender("");
  }

  return (
    <div className={styles.form__wrapper}>
      <form method="GET" action="#" onSubmit={onSubmit}>
        <div className={styles.form__control}>
          <label htmlFor="name">Your name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ex.: John"
            min="2"
            max="255"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.form__control}>
          <label htmlFor="age">Your age:</label>
          <input
            type="number"
            name="age"
            placeholder="Age (e.g. 25)"
            min="18"
            max="99"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className={`${styles.form__control} ${styles.form__radio}`}>
          <div>
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              required
              checked={gender === 'male'}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="m270">M270 MLRS</label>
            <input
              type="radio"
              id="m270"
              name="gender"
              value="m270"
              checked={gender === 'm270'}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.form__control}>
          <input type="submit" value="Add Guest" />
        </div>
      </form>
    </div>
  );
}

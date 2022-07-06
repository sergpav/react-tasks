import { useState, useEffect } from "react";
import styles from "./UserForm.module.scss";
import { getDepartments } from "../../helpers/getDepatment";

export const UserForm = ({addPerson, edit}) => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState();
  
  useEffect(() => {
    const {id, name, department} = edit;
    if(isNaN(id) || !name || !department) return;
    setName(name);
    setDepartment(department);

  }, [edit]);

  const departments = getDepartments().map((department, i) => <option key={"department_" + i} value={department}>{department}</option>);

  const onSubmit = (e) => {
    e.preventDefault();
    addPerson(name, department, edit.id);
    setName("");
    setDepartment("");
  }

  return(
    <div className={styles.wrapper}>
      <form method="GET" action="#" onSubmit={onSubmit}>
        <div className={styles.wrapper__control}>
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
        <div className={styles.wrapper__control}>
          <label htmlFor="department">Your department:</label>
          <select  name="department" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} required>
            <option value="">Pleace choise department</option>
            { departments }
          </select>
        </div>
        
        <div className={styles.wrapper__control}>
          <input type="submit" value="Add Guest" />
        </div>
      </form>
    </div>
  )
}
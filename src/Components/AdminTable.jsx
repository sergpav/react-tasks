import styles from "../App.module.scss";
import { GetPersons } from "../helpers/GetPersons";
import { AdminTableHead } from "./AdminTableHead";
import { AdminTableRow } from "./AdminTableRow";

const persons = GetPersons();

export function AdminTable() {
  function personRows() {
    return persons.map((person, key) => {
      const { name, department, created_at, updated_at } = person;
      return (
        <AdminTableRow
          id={key + 1}
          key={key}
          name={name}
          department={department}
          created_at={created_at}
          updated_at={updated_at}
        />
      );
    });
  }

  return (
    <div className={styles.admin__table}>
      <h2>Admin Panel</h2>
      <AdminTableHead></AdminTableHead>
      {personRows()}
    </div>
  );
}

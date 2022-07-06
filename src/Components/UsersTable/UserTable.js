
import styles from "./UserTable.module.scss";

export const UserTable = ({persons, editPerson, deletePerson}) => {
  const editButton = (id) => {
    return (<button onClick={() => editPerson(id)}>🖊️</button>)
  }

  const deleteButton = (id) => {
    return (<button onClick={() => deletePerson(id)}>❌</button>)
  }

  return (<div className={styles.table}>
    <div className={styles.table__head}>
      <div>id</div>
      <div>name</div>
      <div>department</div>
      <div>actions</div>
    </div>
    {persons.map(({id, name, department}, i) => {
      return (<div key={i} className={styles.table__body}>
        <div>{ i + 1 }</div>
        <div>{name}</div>
        <div>{department}</div>
        <div>{editButton(id)}{deleteButton(id)}</div>
      </div>);
    })}
    
  </div>)
}
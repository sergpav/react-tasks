import styles from "./GuestTable.module.scss";

export function GuestTable({ users, storeArrive }) {

  const sortByArriveStatus = (list) => {
    return list.sort((a, b) => {
      return a.arrived - b.arrived;
    });
  }

  const sortByAlpha = (list) => {
    return list.sort((a, b) => a.name.localeCompare(b.name));
  }

  const getSorted = (guests) => {
    return sortByArriveStatus(sortByAlpha(guests));
  }

  return (
    <div className={styles.table__control}>
      <div className={styles.table__head}>
        <div>#</div>
        <div>name</div>
        <div>gender</div>
        <div>age</div>
        <div>status</div>
      </div>
      { getSorted(users).map(({id, name, age, gender, arrived }, i) => {
        return (
          <div key={id} className={styles.table__body}>
            <div>{i + 1}</div>
            <div>{name}</div>
            <div>{age}</div>
            <div>{gender}</div>
            <div>
              <input
                type="checkbox"
                name="arrive"
                value={arrived}
                onChange={() => storeArrive(id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

import styles from "../App.module.scss";

export function AdminTableHead() {
  return (
    <div
      className={`${styles.admin__table_head} ${styles.admin__table_container}`}
    >
      <div>#</div>
      <div>name</div>
      <div>department</div>
      <div>created at</div>
      <div>upadted at</div>
      <div>actions</div>
    </div>
  );
}

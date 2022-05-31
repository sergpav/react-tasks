import styles from "../App.module.scss";
import { FormatDate } from "../helpers/FormatDate";

const AVAILABLE_ACTIONS = ["edit", "delete"];

export function AdminTableRow({
  id,
  name,
  department,
  created_at,
  updated_at,
}) {
  const actionButtons = () => {
    return AVAILABLE_ACTIONS.map((actionName, i) => {
      const className =
        actionName === "delete"
          ? `${styles.admin__button} ${styles.admin__button_delete}`
          : styles.admin__button;
      return (
        <button className={className} key={i}>
          {actionName}
        </button>
      );
    });
  };

  return (
    <div
      className={`${styles.admin__table_body} ${styles.admin__table_container}`}
    >
      <div>{id}</div>
      <div>{name}</div>
      <div>{department}</div>
      <div>{FormatDate(created_at)}</div>
      <div>{FormatDate(updated_at)}</div>
      <div>{actionButtons()}</div>
    </div>
  );
}

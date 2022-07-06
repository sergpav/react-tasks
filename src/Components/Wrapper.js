import { useState, useEffect } from "react";
import { getFromStorage, storeToStorage } from "../helpers/storageHelper";
import { UserForm } from "./Form/UserForm";
import { UserTable } from "./UsersTable/UserTable";

export const Wrapper = () => {
  const [edit, setEdit] = useState({});
  const [storage, setStorage] = useState(() => getFromStorage('persons'));

  const addPerson = (name, department, uid) => {
    setStorage((prevState) => {
      if(!isNaN(uid)) {
        return prevState.map(person => 
          (person.id === uid) ? {...person, department, name} : person
        );
      } else {
        return [...prevState, {id: Date.now(), name, department}]
      }
    });
    setEdit({});
  } 

  const deletePerson = (uid) => {
    const user = storage.filter(user => user.id === uid);
    if(!user.length) return;
    const result = window.confirm(`delete user ${user[0].name}?`);
    if(!result) return;
    const users = storage.filter(user => user.id !== uid);
    setStorage(() => users);
  }

  const editPerson = (uid) => {
    const user = storage.filter(user => user.id === uid);
    if(!user.length) return;
    setEdit(() => user[0]);
  }

  useEffect(() => {
    storeToStorage('persons', storage);
  }, [storage]);

  return (<div>
    <UserForm addPerson={addPerson} edit={edit} />
    <UserTable persons={storage} editPerson={editPerson} deletePerson={deletePerson} />
  </div>)
}
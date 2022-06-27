import { useState } from "react";

import { GuestFrom } from "./Form/GuestFrom";
import { GuestTable } from "./Table/GuestTable";

export function Wrapper() {
  const [id, setId] = useState(1);
  const [users, setUsers] = useState([]);

  const addPerson = (name, age, gender) => {
    setUsers((prevState) => {
      return [
        ...prevState,
        {
          id,
          name,
          age,
          gender,
          arrived: false,
        },
      ];
    });
    setId((prevState) => prevState + 1);
  };

  const storeArrive = (id) => {
    const modifiedUsers = users.map((user)=> {
      return id === user.id ? {...user, arrived: !user.arrived} : user;
    });

    setUsers(modifiedUsers);
  }

  return (
    <div>
      <GuestFrom addPerson={addPerson} />
      <GuestTable users={users} storeArrive={storeArrive} />
    </div>
  );
}

import { Contact } from "./Contact";

function Contacts({ contacts }) {
  const list = () => {
    return contacts.map((contact, i) => {
      return <Contact key={i} info={contact}></Contact>;
    });
  };

  return <div>{list()}</div>;
}

export { Contacts };

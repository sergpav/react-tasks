import "./App.css";

import { Contacts } from "./Components/Contacts";
import { getContactsList } from "./utils/getContactsList";
const contactsList = getContactsList();

function App() {
  return <Contacts contacts={contactsList}></Contacts>;
}

export default App;

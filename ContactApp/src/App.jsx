import { useEffect, useState } from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import ContactDetails from "./components/ContactDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const addContactHandler = (contact) => {
    setContacts((prev) => [...prev, contact]);
  };

  const removeContactHandler = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <ContactList
              contacts={contacts}
              onDeleteContact={removeContactHandler}
            />
          }
        />
        <Route
          path="/add"
          element={<AddContact onAddContact={addContactHandler} />}
        />
        <Route
          path="/contact/:id"
          element={<ContactDetails contacts={contacts} />}
        />
      </Routes>
    </>
  );
}

export default App;

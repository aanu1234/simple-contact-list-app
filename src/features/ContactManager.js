import React, { useState } from "react";
import AddContactForm from "./AddContactForm";
import ContactList from "./ContactList";

function ContactManager() {
  const [contacts, setContacts] = useState("");

  function addContact(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddContactForm handleSubmit={addContact} />
      <ContactList />
    </div>
  );
}

export default ContactManager;

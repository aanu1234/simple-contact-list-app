import React, { useReducer, useState } from "react";

// component
import Button from "../components/Button";
import TextInput from "../components/TextInput";

// reducers
import { ACTION_TYPES } from "../reducers/actions";
import ContactReducer, { INITIAL_STATE } from "../reducers/ContactReducer";

// ----------------------------------------------
import ContactList from "./ContactList";
// ----------------------------------------------

const AddContactForm = () => {
  const [state, dispatch] = useReducer(ContactReducer, INITIAL_STATE);
  const [person, setPerson] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person === "") {
      setError("Person is required");
      return;
    }
    dispatch({ type: ACTION_TYPES.ADD_PERSON, payload: person });
    setPerson("");
  };

  const handleChange = (e) => {
    setPerson(e.target.value);
  };

  return (
    <div className="contact-menu">
      <span className="error">{error}</span>
      <form onSubmit={handleSubmit}>
        <TextInput type="text" value={person} onChange={handleChange} />
        <Button className="btn primary" type="submit" text="Add Contact" />
      </form>
      <ContactList data={state.contacts} />
    </div>
  );
};

export default AddContactForm;

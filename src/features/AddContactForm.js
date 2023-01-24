import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import addPerson from "../reducers/ContactReducer";

const AddContactForm = () => {
  const [person, setPerson] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPerson(person));
    setPerson("");
  };

  const handleChange = (e) => {
    setPerson(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput type="text" value={person} onChange={handleChange} />
      <Button type="submit" text="Add Contact" />
    </form>
  );
};

export default AddContactForm;

import React from "react";
import { useSelector } from "react-redux";

const ContactList = () => {
  const arr = useSelector((state) => state.contacts);
  // const arr = props.data;
  const listItem = arr.map((val, index) => {
    return <li key={index}>{val}</li>;
  });

  return <ul>{listItem}</ul>;
};

export default ContactList;

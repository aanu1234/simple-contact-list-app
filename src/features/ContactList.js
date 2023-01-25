const ContactList = ({ data }) => {
  // const arr = props.data;
  const listItem = data.map((val, index) => {
    return <li key={index}>{val}</li>;
  });

  return <ul>{listItem}</ul>;
};

export default ContactList;

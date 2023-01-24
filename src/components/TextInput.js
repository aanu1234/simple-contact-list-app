const TextInput = ({ type, value, ...others }) => {
  return <input type="type" value={value} {...others} />;
};

export default TextInput;

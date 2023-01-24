const Button = ({ className, type, text, ...others }) => {
  return (
    <button className={className} type={type} {...others}>
      {text}
    </button>
  );
};

export default Button;

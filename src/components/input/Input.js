import { StyledInputContainer } from "./styles";

const Input = ({ icon, title, placeholder, value, setValue, error }) => {
  const onChangeHandler = (e) => {
    const value = e.target.value;

    setValue(value);
  };

  return (
    <StyledInputContainer error={error}>
      <h2>{title}</h2>
      <input
        type="number"
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value}
        min="0"
      />
      <img src={icon} alt="icon" />
      <p>Can't be zero</p>
    </StyledInputContainer>
  );
};

export default Input;

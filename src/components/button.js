const propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  primary: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  size: PropTypes.string.isRequired
};
Button.propTypes = propTypes
Button.displayName = "Button"

export default function Button(props) {
  const {
    id,
    label,
    value,
    name,
    onClick,
    primary,
    disabled,
    size,
    ...attributes
  } = props;
  const buttonClasses = primary ? "c-button c-button__primary" : "c-button"
  return (
    <React.Fragment>
      <label htmlFor={id}>{label}</label>
      <input
        type="button"
        name={name}
        id={id}
        value={value}
        onClick={()=>{onClick()}}
        className={buttonClasses}
        disabled={disabled}
      />
    </React.Fragment>
  );
}

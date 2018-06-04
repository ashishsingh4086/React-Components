const propTypes = {
  iconClass: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}
export default function IconButton(props) {
  const { iconClass, onClick, label } = props;
  return (
    <React.Fragment>
      <button onClick={()=>{onClick()}} type="button" aria-label={label}>
        <i className={iconClass} />
      </button>
    </React.Fragment>
  )
}

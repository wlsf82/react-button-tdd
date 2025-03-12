import './Button.css'

const Button = ({
  className = '',
  disabled = false,
  icon = null,
  label = '',
  onClick = () => {},
}) => {
  return (
    <button
      className={`button ${className}`}
      disabled={disabled ? true : false}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  )
}

export default Button

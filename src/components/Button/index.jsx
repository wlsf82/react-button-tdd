import './Button.css'

const Button = ({
  className = '',
  icon = null,
  label = '',
  onClick = () => {},
}) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  )
}

export default Button

import './Button.css'

const Button = ({
  className = '',
  icon = null,
  label = '',
}) => {
  return (
    <button className={`button ${className}`}>
      {icon}
      {label}
    </button>
  )
}

export default Button

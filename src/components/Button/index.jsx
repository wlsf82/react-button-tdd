import './Button.css'

const Button = ({
  className = '',
  label = '',
}) => {
  return (
    <button className={`button ${className}`}>
      {label}
    </button>
  )
}

export default Button

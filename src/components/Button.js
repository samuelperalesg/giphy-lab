function Button(props) {
  
  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleSubmit()
  }

  return (
    <button onClick={handleSubmit}>Make API Call Again</button>
    )

  }

export default Button

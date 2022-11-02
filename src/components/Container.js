// CHILDREN PROPS

const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>Este é o título do container</h2>
      {children}
      <h2>O valor é: {myValue}</h2>
    </div>
  )
}

export default Container
export const HeaderItem = ({ item }) => {
  const key = Object.keys(item)[0]

  return (
    <div>
      <strong>{key}</strong>
      <span>{item[key]}</span>
    </div>
  )
}

export const BodyItem = ({ result }) => (
  <p>
    <span>{result.text}</span>
    <span>{result.value}</span>
  </p>
)

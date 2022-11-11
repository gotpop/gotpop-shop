export const HeaderItem = ({ item }) => {
  const key = Object.keys(item)[0]

  return (
    <div>
      <strong>{key}</strong>
      <span>{item[key]}</span>
    </div>
  )
}

export const BodyItem = ({ objKey, value }) => (
  <p>
    <span>{objKey}</span>
    <span>{value}</span>
  </p>
)

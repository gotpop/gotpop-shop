import { BodyItem, HeaderItem } from './elements'
import { useEffect, useState } from 'react'

import Box from '@components/Box'

export const Results = ({ res }) => {
  const { response, results } = res
  const [headersArray, setHeadersArray] = useState<object[]>()

  useEffect(() => {
    let myheadersArr = []
    const entries = response.headers.entries()

    for (const pair of entries) {
      myheadersArr.push({ [pair[0]]: pair[1] })
    }

    setHeadersArray(myheadersArr)
  }, [])

  return (
    <>
      <h4>Http Post</h4>
      <Box>
        <details>
          <summary>Headers</summary>
          {headersArray?.map((item, i) => (
            <HeaderItem key={i} item={item} />
          ))}
        </details>
      </Box>
      <Box>
        <details>
          <summary>Body</summary>
          {Object.keys(results).map((key, i) => (
            <BodyItem key={i} result={results[key]} />
          ))}
        </details>
      </Box>
    </>
  )
}

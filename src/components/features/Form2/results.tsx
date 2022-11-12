import { Details, Intro, ListItem } from './elements'
import { useEffect, useState } from 'react'

export const Results = ({ res }) => {
  const { response, results } = res
  const { form, requestHeaders } = results
  const reqHeaders = JSON.parse(requestHeaders)
  const [resHeaders, setResHeaders] = useState<object[]>()

  useEffect(() => {
    let headersArr = []
    const entries = response.headers.entries()

    for (const pair of entries) {
      headersArr.push({ [pair[0]]: pair[1] })
    }

    setResHeaders(headersArr)
  }, [])

  return (
    <>
      <Intro response={response} />
      <Details summary="Request headers">
        {Object.keys(reqHeaders).map((text, i) => (
          <ListItem key={i} text={text} value={reqHeaders[text]} />
        ))}
      </Details>
      <Details summary="Response Headers">
        {resHeaders?.map((item, i) => (
          <ListItem
            key={i}
            text={Object.keys(item)[0]}
            value={item[Object.keys(item)[0]]}
          />
        ))}
      </Details>
      <Details summary="Body">
        {Object.keys(form).map((key, i) => (
          <ListItem key={i} text={form[key].text} value={form[key].value} />
        ))}
      </Details>
    </>
  )
}

import Box from '@components/Box'

export const Results = ({ results }) => (
  <>
    <h4>Http Response Body</h4>
    <Box>
      <p>
        <span>First name: </span>
        <span>{results.first}</span>
      </p>
      <p>
        <span>Last name: </span>
        <span>{results.last}</span>
      </p>
    </Box>
  </>
)

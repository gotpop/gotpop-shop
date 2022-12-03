import Box from '@components/ui/Box'

type Props = {
  results: any
}

export const Results = ({ results }: any) => (
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

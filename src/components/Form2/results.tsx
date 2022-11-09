import Box from '@components/Box'

export const Results = ({ results }) => (
  <>
    <h4>Http Response Body</h4>
    <Box>
      <p>
        <span>First name: </span>
        <span>{results.firstName}</span>
      </p>
      <p>
        <span>Last name: </span>
        <span>{results.lastName}</span>
      </p>
      <p>
        <span>Email: </span>
        <span>{results.email}</span>
      </p>
      <p>
        <span>Password: </span>
        <span>{results.password}</span>
      </p>
    </Box>
  </>
)

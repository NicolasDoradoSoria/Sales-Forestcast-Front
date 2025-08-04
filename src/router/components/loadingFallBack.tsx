import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"

// Loading component
const LoadingFallback = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    }}
  >
    <CircularProgress />
  </Box>
)

export default LoadingFallback

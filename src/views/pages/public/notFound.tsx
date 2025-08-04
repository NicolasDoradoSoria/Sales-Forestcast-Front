import { Box, Typography, Button } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { Link as RouterLink } from 'react-router'

export default function NotFoundPage() {
  return (
    <Box
      px={2}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        bgcolor: '#f5f5f5',
        animation: 'fadeInUp 0.7s ease-out',
        '@keyframes fadeInUp': {
          from: { opacity: 0, transform: 'translateY(40px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      }}
    >
      <Typography
        variant="h1"
        fontWeight="bold"
        color="primary"
        fontSize={{ xs: '5rem', md: '8rem' }}
      >
        404
      </Typography>

      <Typography variant="h4" fontWeight={500} gutterBottom>
        Página no encontrada
      </Typography>

      <Typography variant="body1" color="textSecondary" mb={4}>
        Lo sentimos, la página que estás buscando no existe.
      </Typography>

      <Button
        variant="contained"
        startIcon={<HomeIcon />}
        size="large"
        component={RouterLink}
        to="/"
        sx={{
          textTransform: 'none',
          borderRadius: 3,
          px: 4,
          py: 1.5,
          fontWeight: 'bold',
          fontSize: '1rem',
          boxShadow: 3,
          '&:hover': {
            boxShadow: 6,
          },
        }}
      >
        Volver al inicio
      </Button>
    </Box>
  )
}

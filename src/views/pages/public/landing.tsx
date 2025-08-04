import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import { useNavigate } from "react-router";
import PrimaryButton from "../../components/buttons/primary";

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <>
        <Box sx={styles.background_img}></Box>
        <Box sx={styles.container}>
            <Box sx={styles.logo_container}>
            <Box
                component="img"
                style={{ maxWidth: '80px' }}
                src={'/img/logo/LogoBlack.png'}
            />
            <Typography sx={styles.logo_title}>SalesForecast</Typography>
            </Box>
            <Box sx={styles.welcome_container}>
            <Typography sx={styles.title}>Sales Forecast</Typography>
            <Typography sx={styles.description}>
                subi un archivo y lee lo q pasa. Rápido, fácil y a un
                toque.
            </Typography>
            <Box sx={styles.button_container}>
                <PrimaryButton onClick={() => navigate('/login')} label={'Iniciar sesión'} />
            </Box>
            </Box>
        </Box>
        </>
    )
}


const styles: Record<string, SxProps<Theme>> = {
  background_img: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    zIndex: -1,
    backgroundImage: 'url("/img/backgrounds/backgroundQuickfix.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.2,
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100dvh',
    padding: '60px 0 60px 0',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    boxSizing: 'border-box',
  },

  logo_container: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    paddingX: '10px',
  },

  logo_title: {
    fontSize: '48px',
    fontWeight: 'bold',
  },

  welcome_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '15px',
    height: '400px',
    boxSizing: 'border-box',
  },

  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: '350px',
  },

  description: {
    fontSize: '18px',
    textAlign: 'center',
    maxWidth: '250px',
  },

  button_container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',
    maxWidth: 'var(--button-width-container)',
  },
}

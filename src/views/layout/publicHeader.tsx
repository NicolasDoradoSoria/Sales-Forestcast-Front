import { Box, Typography, type SxProps, type Theme } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from "react-router";

interface PublicHeaderProps {
  isRegisterPage?: boolean // Flag para indicar contexto especial
  currentStep?: number // El paso actual (si aplica)
  onStepBack?: () => void // Función para volver al paso anterior (si aplica)
  titleOverride?: string // Para forzar un título específico
}

export default function PublicHeader({
  isRegisterPage,
  currentStep,
  onStepBack,
  titleOverride,
}: PublicHeaderProps) {
    const [baseTitle, setBaseTitle] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
      if (!titleOverride) {
        const titles: Record<string, string> = {
          '/login': 'Ingresá a tu cuenta',
        }
        setBaseTitle(titles[location.pathname] || '')
      }
      if (titleOverride) {
        setBaseTitle('')
      }
    }, [location.pathname, titleOverride])

    const handleBackClick = () => {
      if ((isRegisterPage && currentStep === 2 && onStepBack) || (currentStep === 3 && onStepBack)) {
        onStepBack()
      } else {
        navigate(-1)
      }
    }

    const displayTitle = titleOverride ?? baseTitle


    return (
       <Box sx={styles.container}>
            <ArrowBackIcon onClick={handleBackClick} sx={styles.icon} />
            <Typography sx={styles.title}>{displayTitle}</Typography>
       </Box>
    );
}

const styles : Record<string, SxProps<Theme>> = {
    container: {
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        height: 'var(--public-header-height)',
        width: '100%',
        borderBottom: '1px solid black',
    },
    icon: {
        color: 'black',
        position: 'absolute',
        width: '50px',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        fontSize: '20px',
        fontWeight: 'bold',
    },


}
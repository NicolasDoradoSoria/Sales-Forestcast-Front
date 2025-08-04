import { Box} from '@mui/material'
import { Outlet } from 'react-router'
import type { SxProps, Theme } from "@mui/material";
import Footer from './footer';
import useLocationPublic from '../../hooks/useLocationPublic';


export default function Frame({ children }: { children?: React.ReactNode }) {
  const { isPublicRoute } = useLocationPublic()
  
  return (
    <Box sx={styles.container}>
      <Box sx={styles.outlet_container}>
        <Outlet />
      </Box>
      { !isPublicRoute && <Footer />}
    </Box>
  )
}

const styles: Record<string, SxProps<Theme>> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },

  outlet_container: {
    flex: 1,
    overflowY: 'auto',
  },
}

import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useState } from "react";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";

const Footer = () => {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        switch (newValue) {
            case 0:
                navigate('/user/dashboard');
                break;
            case 1:
                navigate('/user/upload');
                break;
            case 2:
                handleLogout();
                break;
            default:
                break;
        }
    };

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={handleChange}
            >
                <BottomNavigationAction label="Dashboard" icon={<DashboardIcon />} />
                <BottomNavigationAction label="Subir Archivo" icon={<FileUploadIcon />} />
                <BottomNavigationAction label="Cerrar Sesión" icon={<LogoutIcon />} />
            </BottomNavigation>
        </Paper>
    );
}

export default Footer;

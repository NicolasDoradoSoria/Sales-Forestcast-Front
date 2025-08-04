import { Box, IconButton, InputAdornment } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { StyledTextFieldInput } from "../../components/inputs/styledTextFieldInput";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import PrimaryButton from "../../components/buttons/primary";
import type { LoginDto } from "../../../dto/user/login";
import { useNavigate } from "react-router";
import { useErrorHandler } from "../../../router/context/errorHandler";
import PublicHeader from "../../layout/publicHeader";
import { AuthService } from "../../../services/auth";
import { useAuth } from "../../../hooks/useAuth";


const LoginPage = () => {
    const { login } = useAuth()
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const { handleError } = useErrorHandler()

    type FormData = {
        email: string
        password: string
    }


    const {control, handleSubmit, reset, formState: { errors, isValid  } } = useForm<FormData>({
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const onSubmit = async(loginData: FormData) => {
        try {
            const loginDto: LoginDto = {
                email: loginData.email,
                password: loginData.password,
            }
            const jwtToken = await AuthService.login(loginDto)
            login(jwtToken)
            navigate("/user/upload")
            reset()

        } catch (error) {
            console.error("Login error:", error)
            handleError(error, true)
        }
    }
    return (
        <Box sx={styles.container}>
            <PublicHeader /> 
            <Box sx={styles.body_container}>
                <form style={{width: "100%"}}>
                    <Box sx={styles.form_container}>
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: "mail requerido"
                            }}
                            render= {({field}) => (
                                <StyledTextFieldInput
                                    {...field}
                                    type="email"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                    autoComplete="email"
                                />
                            )}
                        />
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: "Contraseña requerida"
                            }}
                            render={({ field }) => (
                                <StyledTextFieldInput
                                    {...field}
                                    type={showPassword ? 'text' : 'password'}
                                    label="Contraseña"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.password}
                                    helperText={errors.password?.message}
                                    autoComplete="password"
                                    slotProps={{
                                        input: {
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        onMouseUp={handleMouseUpPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }
                                    }}
                                />
                            )}
                        />
                        <PrimaryButton
                            label="Iniciar sesión"
                            onClick={handleSubmit(onSubmit)}
                            disabled={!isValid}
                        />
                    </Box>
                </form>
            </Box>
        </Box>
    );
}
 
export default LoginPage;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    
    body_container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexGrow: 1,
        overflowY: 'auto',
        padding: '2.5rem 2rem 2rem 2rem',
        backgroundColor: '#eeeeee',
        gap: '10px',
    },

    form_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    },

}
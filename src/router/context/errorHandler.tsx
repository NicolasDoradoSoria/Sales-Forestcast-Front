import { createContext, useContext } from "react"
import { useNavigate} from "react-router"
import { toast } from "react-toastify"
import type { ErrorResponse } from "../../utils/types/errorResponse"
import { useAuth } from "../../hooks/useAuth"

interface ErrorHandlerContextType {
  handleError: (error: any, isLogin?: boolean) => void
}

const EXPIRED_SESSION_ERROR_CODE = 401
const INTERNAL_SERVER_ERROR_CODE = 500

const ErrorHandlerContext = createContext<ErrorHandlerContextType | undefined>(undefined)


export const ErrorHandlerProvider = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate()
    const {logout} = useAuth()
    
    const handleError = (error: any, isLogin: boolean = false) : void => {

        const errorResponse = error as ErrorResponse
        const status = errorResponse.response?.status
        const isSessionExpiredCode = status === EXPIRED_SESSION_ERROR_CODE

        const errormMsg = status === INTERNAL_SERVER_ERROR_CODE
            ? 'Ocurrió un error. Consulte al administrador del sistema'
            : !status
                ? 'Ocurrió un error. Consulte al administrador del sistema'
                : errorResponse.response.data.error || errorResponse.response.data.message
        
        if(isLogin){
            toast.error(errormMsg)
            return
        }

        if(isSessionExpiredCode){
            logout()
            navigate('/expiredSession')
            return
        }

        toast.error(errormMsg)
    }

    return (
    <ErrorHandlerContext.Provider value={{ handleError }}>
      {children}
    </ErrorHandlerContext.Provider>
    )
}
export const useErrorHandler = () => useContext(ErrorHandlerContext)!!
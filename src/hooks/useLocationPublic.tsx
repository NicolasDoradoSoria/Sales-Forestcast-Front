import { useLocation } from 'react-router'

function useLocationPublic() {
  const location = useLocation()
  const isPublicRoute =
    location.pathname === '/'                  ||
    location.pathname === '/login'             
    
  return { isPublicRoute }
}

export default useLocationPublic

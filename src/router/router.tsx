import { createBrowserRouter } from "react-router";
import LandingPage from "../views/pages/public/landing";
import Frame from "../views/layout/frame";
import LoginPage from "../views/pages/public/login";
import BackendCaller from "./components/backEndCaller";
import NotFoundPage from "../views/pages/public/notFound";
import UploadPage from "../views/pages/user/upload";
import DashboardPage from "../views/pages/user/DashboardPage";
import { ProtectedRoute } from "./components/protectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        element: <Frame />,
        children: [
            {path: "login", element: <BackendCaller child={<LoginPage />} /> },
        ]
    },
    {
        path: '/user',
        element: <Frame />,
        children: [
            {
             element: <ProtectedRoute />,   
             children: [
                {
                    path: 'upload',
                    element: <BackendCaller child={<UploadPage />} />
                },
                {
                    path: 'dashboard',
                    element: <BackendCaller child={<DashboardPage />} />
                }
             ]
            }
        ]
    },
    { path: '*', element: <NotFoundPage /> },

])
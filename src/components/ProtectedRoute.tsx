import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ user, isLoading }: { user: { firstName: string } | null; isLoading: boolean }) => {
    if (isLoading) {
        return <div>Loading...</div>; 
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return <Outlet />;
};

export default ProtectedRoute;

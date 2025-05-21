
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, isLoading } = useAuth();

  // If we're still checking the user's session, show nothing
  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-ghana-green border-t-transparent"></div>
      </div>
    );
  }
  
  // If no user is logged in, redirect to login page
  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }
  
  // User is authenticated, render the protected route
  return <>{children}</>;
};

export default ProtectedRoute;

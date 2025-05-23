
import React, { ReactNode } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquareText, 
  Home,
  FileImage, 
  BarChart2, 
  User, 
  LogOut,
  ExternalLink
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate("/admin/login");
  };

  const navItems = [
    { label: "Dashboard", icon: <LayoutDashboard className="h-5 w-5" />, path: "/admin/dashboard" },
    { label: "Blog Posts", icon: <FileText className="h-5 w-5" />, path: "/admin/posts" },
    { label: "Chatbot", icon: <MessageSquareText className="h-5 w-5" />, path: "/admin/chatbot" },
  ];

  // Check if we're on the posts page to show a more specific link
  const isPostsPage = location.pathname.includes('/admin/posts');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-4 border-b">
          <Link to="/admin/dashboard" className="flex items-center">
            <div className="w-8 h-8 bg-ghana-green rounded-full flex items-center justify-center mr-2">
              <span className="text-white font-bold text-sm">CIC</span>
            </div>
            <span className="font-bold text-lg">Admin Portal</span>
          </Link>
        </div>
        
        <nav className="flex-grow p-4">
          <ul className="space-y-1">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className={`flex items-center p-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-ghana-green ${
                    location.pathname === item.path ? 'bg-gray-100 text-ghana-green font-medium' : ''
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="pt-8">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Other
            </div>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/"
                  className="flex items-center p-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-ghana-green"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Home className="h-5 w-5" />
                  <span className="ml-3">View Main Website</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Link>
              </li>
              {isPostsPage && (
                <li>
                  <Link
                    to="/blog"
                    className="flex items-center p-2 rounded-md hover:bg-gray-100 text-gray-700 hover:text-ghana-green"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="h-5 w-5" />
                    <span className="ml-3">View Blog</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </li>
              )}
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center p-2 w-full text-left rounded-md hover:bg-gray-100 text-gray-700 hover:text-red-600"
                >
                  <LogOut className="h-5 w-5" />
                  <span className="ml-3">Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">Admin Portal</h1>
            <div className="flex items-center space-x-3">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-ghana-green flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Home className="h-5 w-5 mr-1" />
                <span>Main Site</span>
                <ExternalLink className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-4">
          <div className="container mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

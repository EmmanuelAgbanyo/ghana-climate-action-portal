
import { ReactNode, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  Users, 
  Settings, 
  LogOut,
  Menu,
  X,
  FileImage,
  FileEdit
} from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { useAuth } from "@/context/AuthContext";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const navigate = useNavigate();
  const { logout, user, isAdmin, isEditor } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    toast.success("Logged out successfully");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Get the user role from metadata
  const userRole = user?.user_metadata?.role || "contributor";
  
  // Base navigation items that everyone can see
  const navItems = [
    { name: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, path: "/admin/dashboard" },
    { name: "Blog Posts", icon: <FileText className="w-5 h-5" />, path: "/admin/posts" },
    { name: "Chatbot Knowledge", icon: <MessageSquare className="w-5 h-5" />, path: "/admin/chatbot" },
    { name: "Media Library", icon: <FileImage className="w-5 h-5" />, path: "/admin/media" },
  ];
  
  // Items for editors and admins only
  if (isEditor()) {
    navItems.push({ name: "Pages", icon: <FileEdit className="w-5 h-5" />, path: "/admin/pages" });
  }
  
  // Items for admins only
  if (isAdmin()) {
    navItems.push({ name: "Users", icon: <Users className="w-5 h-5" />, path: "/admin/users" });
    navItems.push({ name: "Settings", icon: <Settings className="w-5 h-5" />, path: "/admin/settings" });
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleSidebar}
          className="bg-white"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-white shadow-lg transition-all duration-300 z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } w-64`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 p-6 border-b">
            <div className="w-10 h-10 bg-ghana-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">CIC</span>
            </div>
            <div>
              <h2 className="font-bold text-ghana-green">Admin Portal</h2>
              <p className="text-xs text-gray-500">Climate Information Centre</p>
            </div>
          </div>

          <div className="px-6 py-4 border-b">
            <div className="font-medium">{user?.email}</div>
            <div className="text-xs text-gray-500 capitalize">Role: {userRole}</div>
          </div>

          <nav className="flex-grow py-6 px-3">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-md ${
                        isActive 
                          ? "bg-ghana-green text-white" 
                          : "hover:bg-gray-100"
                      }`
                    }
                    onClick={() => setSidebarOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t mt-auto">
            <Button 
              variant="outline" 
              className="w-full flex items-center gap-2"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className={`transition-all duration-300 ${
        sidebarOpen ? "lg:ml-64" : "lg:ml-64 ml-0"
      }`}>
        <div className="p-6">
          {children}
        </div>
      </main>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ClimateWiseChatbot from "./components/ClimateWiseChatbot";
import Index from "./pages/Index";
import About from "./pages/About";
import ClimateInfo from "./pages/ClimateInfo";
import Adaptation from "./pages/Adaptation";
import Leadership from "./pages/Leadership";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Login from "./pages/Admin/Login";
import Dashboard from "./pages/Admin/Dashboard";
import Posts from "./pages/Admin/Posts";
import ChatbotManager from "./pages/Admin/ChatbotManager";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/climate-info" element={<ClimateInfo />} />
            <Route path="/adaptation" element={<Adaptation />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/login" element={<Login />} />
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/posts" 
              element={
                <ProtectedRoute>
                  <Posts />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/chatbot" 
              element={
                <ProtectedRoute>
                  <ChatbotManager />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ClimateWiseChatbot />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

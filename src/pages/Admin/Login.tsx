
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/sonner";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";

const Login = () => {
  const navigate = useNavigate();
  const { login, user } = useAuth();
  
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const [signupCredentials, setSignupCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
  });

  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isSignupLoading, setIsSignupLoading] = useState(false);
  
  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/admin/dashboard");
    }
  }, [user, navigate]);
  
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupCredentials((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoginLoading(true);
    
    const { error } = await login(loginCredentials.email, loginCredentials.password);
    
    if (error) {
      toast.error("Login failed: " + error.message);
    } else {
      toast.success("Login successful!");
    }
    
    setIsLoginLoading(false);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSignupLoading(true);

    // Password validation
    if (signupCredentials.password !== signupCredentials.confirmPassword) {
      toast.error("Passwords do not match");
      setIsSignupLoading(false);
      return;
    }

    if (signupCredentials.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      setIsSignupLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: signupCredentials.email,
        password: signupCredentials.password,
        options: {
          data: {
            full_name: signupCredentials.fullName,
            role: 'contributor' // Default role for new users
          }
        }
      });

      if (error) {
        toast.error("Sign up failed: " + error.message);
      } else {
        toast.success("Sign up successful! Please check your email for verification.");
        // Clear the form
        setSignupCredentials({
          email: "",
          password: "",
          confirmPassword: "",
          fullName: ""
        });
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error('An unknown error occurred');
      toast.error("Sign up failed: " + error.message);
    } finally {
      setIsSignupLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-ghana-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">CIC</span>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center">Admin Portal</CardTitle>
          <CardDescription className="text-center">
            Access the Climate Information Centre admin dashboard
          </CardDescription>
        </CardHeader>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4 mx-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <CardContent>
              <form onSubmit={handleLogin}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="admin@cic-ghana.org" 
                      value={loginCredentials.email} 
                      onChange={handleLoginChange} 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                    <Input 
                      id="password" 
                      name="password" 
                      type="password" 
                      placeholder="••••••••" 
                      value={loginCredentials.password} 
                      onChange={handleLoginChange} 
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-ghana-green hover:bg-ghana-green/90"
                    disabled={isLoginLoading}
                  >
                    {isLoginLoading ? "Logging in..." : "Log In"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </TabsContent>

          <TabsContent value="signup">
            <CardContent>
              <form onSubmit={handleSignup}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium mb-2">Full Name</label>
                    <Input 
                      id="fullName" 
                      name="fullName" 
                      type="text" 
                      placeholder="John Doe" 
                      value={signupCredentials.fullName} 
                      onChange={handleSignupChange} 
                      required 
                    />
                  </div>

                  <div>
                    <label htmlFor="signupEmail" className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      id="signupEmail" 
                      name="email" 
                      type="email" 
                      placeholder="user@example.com" 
                      value={signupCredentials.email} 
                      onChange={handleSignupChange} 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="signupPassword" className="block text-sm font-medium mb-2">Password</label>
                    <Input 
                      id="signupPassword" 
                      name="password" 
                      type="password" 
                      placeholder="••••••••" 
                      value={signupCredentials.password} 
                      onChange={handleSignupChange} 
                      required 
                    />
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">Confirm Password</label>
                    <Input 
                      id="confirmPassword" 
                      name="confirmPassword" 
                      type="password" 
                      placeholder="••••••••" 
                      value={signupCredentials.confirmPassword} 
                      onChange={handleSignupChange} 
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-ghana-green hover:bg-ghana-green/90"
                    disabled={isSignupLoading}
                  >
                    {isSignupLoading ? "Signing up..." : "Sign Up"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </TabsContent>
        </Tabs>

        <CardFooter>
          <p className="text-center text-sm text-gray-500 w-full">
            For admin access, please contact the administrator
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;


import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ error: Error | null }>;
  logout: () => Promise<void>;
  isAdmin: () => boolean;
  isEditor: () => boolean;
  isContributor: () => boolean;
  signup: (email: string, password: string, metadata?: { [key: string]: any }) => Promise<{ error: Error | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);

        // After initial load is complete, we can stop showing loading state
        setIsLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (!error) {
        navigate('/admin/dashboard');
      }
      return { error };
    } catch (err) {
      return { error: err instanceof Error ? err : new Error('An unknown error occurred') };
    }
  };

  const signup = async (email: string, password: string, metadata?: { [key: string]: any }) => {
    try {
      const { error } = await supabase.auth.signUp({ 
        email, 
        password,
        options: {
          data: metadata
        }
      });
      return { error };
    } catch (err) {
      return { error: err instanceof Error ? err : new Error('An unknown error occurred') };
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  // Role checking functions
  const isAdmin = () => {
    return user?.user_metadata?.role === 'admin';
  };

  const isEditor = () => {
    return user?.user_metadata?.role === 'editor' || isAdmin();
  };

  const isContributor = () => {
    return user?.user_metadata?.role === 'contributor' || isEditor();
  };

  return (
    <AuthContext.Provider value={{ user, session, isLoading, login, logout, isAdmin, isEditor, isContributor, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

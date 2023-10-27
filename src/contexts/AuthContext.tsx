import Authentication from '@/pages/authentication/Authentication';
import React, { SetStateAction, createContext, useState } from 'react';

interface User {
  name: string;
  email: string;
  avatar_url: string;
}

// interface SignInData {
//   email: string;
//   password: string;
// }

interface AuthContextInterface {
  user: User;
  isAuthenticated: boolean;
  isSigningUp: boolean;
  setIsSigningUp: React.Dispatch<SetStateAction<boolean>>;
  // signIn: (data: SignInData) => Promise<void>;
  signIn: () => void;
  signOut: () => void;
}

interface AuthProviderInterface {
  children?: React.ReactNode;
}

const initialUserState: User = {
  name: '',
  email: '',
  avatar_url: '',
};

export const AuthContext = createContext({} as AuthContextInterface);

export function AuthProvider({ children }: AuthProviderInterface) {
  const [user, setUser] = useState(initialUserState);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const signIn = () => {
    setIsAuthenticated(true);
  };

  const signOut = () => {
    const copy = { ...initialUserState };
    setUser(copy);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        signOut,
        isSigningUp,
        setIsSigningUp,
      }}
    >
      {isAuthenticated ? children : <Authentication />}
    </AuthContext.Provider>
  );
}

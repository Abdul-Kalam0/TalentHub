import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import api from "../services/api";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // =============================
  // Get Current User
  // =============================

  const getCurrentUser = async () => {
    try {
      const { data } = await api.get("/auth/me");

      setUser(data.data);

      return data.data;
    } catch (error) {
      setUser(null);

      return null;
    } finally {
      setLoading(false);
    }
  };

  // =============================
  // Register
  // =============================

  const register = async (formData) => {
    try {
      const { data } = await api.post("/auth/register", formData);

      toast.success(data.message);

      return {
        success: true,
      };
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed.");

      return {
        success: false,
      };
    }
  };

  // =============================
  // Login
  // =============================

  const login = async (formData) => {
    try {
      const { data } = await api.post("/auth/login", formData);

      const currentUser = await getCurrentUser();

      toast.success(data.message);

      return {
        success: true,
        user: currentUser,
      };
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed.");

      return {
        success: false,
        user: null,
      };
    }
  };

  // =============================
  // Logout
  // =============================

  const logout = async () => {
    try {
      const { data } = await api.post("/auth/logout");

      setUser(null);

      toast.success(data.message);

      return {
        success: true,
      };
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed.");

      return {
        success: false,
      };
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        register,
        login,
        logout,
        getCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// =============================
// Custom Hook
// =============================

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
};

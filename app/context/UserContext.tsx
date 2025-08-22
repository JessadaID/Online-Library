// contexts/UserContext.tsx
"use client";
import { createContext, useContext, useState, useEffect } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
}

type UserContextType = {
  user: User | null;
  setUserData: (userData: User) => void;
  logout: () => Promise<void>;
  updateUser: (userData: Partial<User>) => void;
  loading: boolean;
  isAuthenticated: boolean;
};

// สร้าง context ด้วย undefined และจะตรวจสอบใน useUser
const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // ฟังก์ชันสำหรับตั้งค่า user หลัง login สำเร็จ
  const setUserData = (userData: User) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // ฟังก์ชันสำหรับ logout
  const logout = async () => {
    try {
      setLoading(true);
      setUser(null);
      localStorage.removeItem("user");
      window.location.href = "/";
    } catch (error) {
      console.error("Logout error:", error);
      setUser(null);
      localStorage.removeItem("user");
      window.location.href = "/";
    } finally {
      setLoading(false);
    }
  };

  // ฟังก์ชันสำหรับอัพเดทข้อมูล user
  const updateUser = (userData: Partial<User>) => {
    if (!user) return;
    const updatedUser = { ...user, ...userData };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  // ตรวจสอบการ login เมื่อโหลดหน้าแรก
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error loading user data:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  // สร้าง value object ที่ตรงกับ UserContextType
  const value: UserContextType = {
    user,
    setUserData,
    logout,
    updateUser,
    loading,
    isAuthenticated: !!user,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
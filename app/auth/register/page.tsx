"use client";

import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (password !== passwordConfirm) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, password, passwordConfirm }),
      });
      if (!response.ok) {
        throw new Error("Registration failed");
      }

      if(response.status === 201) {
        alert("User registered successfully");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">สมัครสมาชิก</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              ชื่อ
            </label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              อีเมล
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="กรุณากรอกอีเมล"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              รหัสผ่าน
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="กรุณากรอกรหัสผ่าน"
              required
            />

            <label
              htmlFor="password-confirm"
              className="block text-sm font-medium text-gray-700 mt-2"
            >
              ยืนยันรหัสผ่าน
            </label>
            <input
              type="password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              value={passwordConfirm}
              id="password-confirm"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="กรุณากรอกรหัสผ่านอีกครั้ง"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            สมัครสมาชิก
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          มีบัญชีอยู่แล้ว?{" "}
          <a href="/auth/login" className="text-blue-600 hover:underline">
            เข้าสู่ระบบ
          </a>
        </p>
      </div>
    </div>
  );
}

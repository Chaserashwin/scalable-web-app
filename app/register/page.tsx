"use client";
import api from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async () => {
    await api.post("/auth/register", form);
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md card">
        <h1 className="text-2xl font-semibold mb-1">Create account</h1>
        <p className="text-sm text-gray-500 mb-6">Start managing your tasks</p>

        <div className="space-y-4">
          <input
            className="input"
            placeholder="Full name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="input"
            placeholder="Email address"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <button onClick={submit} className="btn-primary w-full mt-6">
          Register
        </button>
      </div>
    </div>
  );
}

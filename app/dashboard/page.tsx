"use client";
import api from "@/lib/axios";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    api.get("/user/profile").then((res) => setProfile(res.data));
  }, []);

  if (!profile) return null;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-1">Dashboard</h1>
      <p className="text-sm text-gray-500 mb-6">Welcome back, {profile.name}</p>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="card">
          <p className="text-sm text-gray-500">Email</p>
          <p className="font-medium mt-1">{profile.email}</p>
        </div>
      </div>
    </div>
  );
}

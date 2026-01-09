"use client";
import { logout } from "@/lib/auth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <aside className="hidden md:flex md:w-64 md:flex-col bg-white border-r">
        <div className="px-6 py-5 text-lg font-semibold">Task Manager</div>

        <nav className="flex-1 px-3 space-y-1">
          <a
            href="/dashboard"
            className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100"
          >
            Overview
          </a>
          <a
            href="/dashboard/tasks"
            className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100"
          >
            Tasks
          </a>
        </nav>

        <div className="p-4 border-t">
          <button onClick={logout} className="btn-danger w-full text-left">
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-8">{children}</main>
    </div>
  );
}

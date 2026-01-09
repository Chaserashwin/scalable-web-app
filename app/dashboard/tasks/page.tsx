"use client";
import api from "@/lib/axios";
import { useEffect, useState } from "react";

export default function TasksPage() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [title, setTitle] = useState("");

  const load = () => api.get("/tasks").then((res) => setTasks(res.data));

  useEffect(() => {
    load();
  }, []);

  const create = async () => {
    if (!title.trim()) return;
    await api.post("/tasks", { title });
    setTitle("");
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Tasks</h1>
      </div>

      <div className="card mb-6">
        <div className="flex gap-2">
          <input
            className="input flex-1"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={create} className="btn-primary">
            Add
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {tasks.length === 0 && (
          <p className="text-sm text-gray-500">No tasks yet.</p>
        )}

        {tasks.map((t) => (
          <div key={t._id} className="card flex items-center justify-between">
            <span className="text-sm font-medium">{t.title}</span>
            <button
              onClick={async () => {
                await api.delete(`/tasks/${t._id}`);
                load();
              }}
              className="btn-danger"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

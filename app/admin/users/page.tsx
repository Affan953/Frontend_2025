"use client";
import { useContext } from "react";
import { AppContext } from "@/app/componen/AppContext";

export default function UsersPage() {
  const { user } = useContext(AppContext);

  const users = [
    { id: 1, name: "Affan Abdullah", role: "Admin" },
    { id: 2, name: "Hapit", role: "User" },
    { id: 3, name: "Yazid", role: "Moderator" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Selamat Datang {user?.name?.toUpperCase()}</h2>

      <div className="overflow-x-auto rounded-xl shadow-sm">
        <table className="min-w-full border-collapse bg-gray-100">
          <thead>
            <tr className="bg-gray-300 text-left">
              <th className="py-3 px-6 font-semibold text-gray-800 border-b">Nama</th>
              <th className="py-3 px-6 font-semibold text-gray-800 border-b">Role</th>
              <th className="py-3 px-6 font-semibold text-gray-800 border-b">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="bg-gray-50 hover:bg-gray-100 transition">
                <td className="py-3 px-6 border-b">{u.name}</td>
                <td className="py-3 px-6 border-b">{u.role}</td>
                <td className="py-3 px-6 border-b text-blue-600 cursor-pointer hover:underline">
                  Lihat Detail
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

"use client";
import { useContext } from "react";
import { AppContext } from "@/app/componen/AppContext";

export default function SettingsPage() {
  const { user } = useContext(AppContext);

  return (
    <>
      <h2 className="text-2xl font-semibold mb-2">
        Selamat Datang {user?.name?.toUpperCase()}
      </h2>
      <p className="mb-6">Halaman Settings</p>
    </>
  );
}

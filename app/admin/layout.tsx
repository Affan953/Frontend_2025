"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import { AppContext } from "@/app/componen/AppContext"; 
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const appContext = useContext(AppContext);
  const { user, logout, isAuth } = appContext;
  const pathname = usePathname();
  const router = useRouter();

   useEffect(() => {
    if (!isAuth) {
      router.push("/login");
    }
  }, [isAuth, router]);

  if (!isAuth || !user) return null;

  const menus = [
    { name: "Dashboard", path: "/admin" },
    { name: "Data", path: "/admin/data" },
    { name: "Users", path: "/admin/users" },
    { name: "Settings", path: "/admin/setting" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-red-600 text-white flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Hello Next!</h1>
        <div className="text-right">
          <div className="font-semibold">{user?.username}</div>
          <div className="text-sm opacity-75">@{user?.name}</div>
        </div>
      </header>
      <div className="flex flex-1">
        <section className="w-64 bg-gray-100 p-4">
          <h2 className="text-lg font-semibold mb-2">Navigation</h2>
          <div className="border-t border-black mb-4"></div>
          <ul className="space-y-2">
            {menus.map((menu) => (
              <li key={menu.path}>
                <Link href={menu.path}>
                  <div
                    className={`w-full px-4 py-2 rounded-lg font-medium cursor-pointer ${
                      pathname === menu.path
                        ? "bg-red-500 text-white"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    {menu.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

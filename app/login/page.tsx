"use client";
import { AppContext } from "../componen/AppContext";
import { useRouter } from "next/navigation";
import Button from "../componen/Button";
import { useContext, useState } from "react";
import InputText from "../componen/InputText";
import Label from "../componen/Label";

export default function Login() {
  const appContext = useContext(AppContext);
  const { login } = appContext;
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (!username || !name) {
      alert("Masukkan Username dan Nama terlebih dahulu!");
      return;
    }
    login(username, name);
    router.push("/admin");
  };

  return (
    <div className="px-[30%] mt-10 ">
      <div className="font-bold mb-1 ">Halaman Login</div>

      <div className="my-4">
        <Label title="Username" color="black" />
        <InputText
          placeholder="Masukkan Username"
          value={username}
          onChange={(e: any) => setUsername(e.target.value)}
        />
      </div>

      <div className="my-4">
        <Label title="Nama" color="black" />
        <InputText
          placeholder="Masukkan Nama"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />
      </div>

      <Button onClick={handleLogin} title="Login" colorSchema="blue" />
    </div>
  );
}

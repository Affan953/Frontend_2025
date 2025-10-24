"use client";
import { use, useState } from "react";
import InputText from "../componen/InputText";
import Label from "../componen/Label";
import RadioButton from "../componen/Radio";

interface Profile {
  name: string;
  umur: number | null | string;
  email: string;
  password: string;
  isLulus: boolean;
}

export default function LearnObject() {
  const [profile, setProfile] = useState<Profile>({
    name: "Affan",
    umur: 16,
    email: "Affan@gmail.com",
    password: "123456",
    isLulus: false,
  });
  return (
    <>
      <h1 className="font-semibold">Siap belajar Object :</h1>
      <Card value={profile.name} label="Nama" />
      <Card value={profile.umur} label="Umur" />
      <Card value={profile.email} label="Email" />
      <Card value={profile.password} label="Password" />
      <Card value={profile.isLulus ? "Lulus" : "Tidak Lulu"} label="Lulus" />

      <Label htmlFor="nama" title="Nama" />
      <InputText
        value={profile.name}
        id="nama"
        onChange={(e) => {
          setProfile((prevProfile) => {
            return {
              ...prevProfile,
              name: e.target.value,
            };
          });
        }}
      />

      <Label htmlFor="umur" title="Umur" />
      <InputText
        value={profile.umur as string}
        id="Umur"
        onChange={(e) => {
          setProfile((prevProfile) => {
            return {
              ...prevProfile,
              name: e.target.value,
            };
          });
        }}
      />

      <Label htmlFor="email" title="Email" />
      <InputText
        value={profile.email}
        id="Email"
        onChange={(e) => {
          setProfile((prevProfile) => {
            return {
              ...prevProfile,
              name: e.target.value,
            };
          });
        }}
      />

      <Label htmlFor="password" title="Password" />
      <InputText
        value={profile.password}
        id="Password"
        onChange={(e) => {
          setProfile((prevProfile) => {
            return {
              ...prevProfile,
              name: e.target.value,
            };
          });
        }}
      />

      <Label htmlFor="isLulus" title="Keterangan"/>
            <div className="flex items-center space-x-5">
                <RadioButton
                title={"Lulus"}
                value="true"
                checked={profile.isLulus}
                onChange={(e) => {
                    setProfile((prevProfile) => {
                        return {
                            ...prevProfile,
                            isLulus: true,
                        }
                    })
                }}
                />
            </div>
    </>
  );
}

function Card({
  label,
  value,
}: {
  label: string;
  value?: string | number | null;
}) {
  return (
    <>
      <div className="grid grid-cols-2 gap-5 w-[40%]">
        <h2 className="font-semibold">{label}</h2>
        <h2 className="font-semibold">{value}</h2>
      </div>
    </>
  );
}

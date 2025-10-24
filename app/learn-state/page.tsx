"use client";

import { useContext, useState } from "react";
import Button from "../componen/Button";
import InputText from "../componen/InputText";
import clsx from "clsx";
import { AppContext } from "../componen/AppContext";
import Link from "next/link";

export default function BelajarState() {
  let [count, setCount] = useState<number>(0);
  let [text, setText] = useState<string>("");
  let [isOn, setIsOn] = useState<boolean>(false);
  const appContext = useContext(AppContext);
  const { theme, toggleTheme } = appContext;
  return (
    <>
      <h1>Siap belajar State</h1>
      {theme === "dark" ? "ini malam" : "ini siang"}
      <Button
        onClick={() => {
          toggleTheme();
        }}
        title="Ubah Tema"
        colorSchema="blue"
      />
    <Link href={"/learn-useEffect"}>Pindah</Link>
      <div
        className={clsx(
          "border w-28 h-28 mt-5 rounded-full flex items-center justify-center",
          {
            "bg-red-500": isOn === true,
            "bg-black": isOn === false,
          }
        )}
      ></div>

      <div className="border h-36 mb-5 flex items-center justify-center border-blue-500">
        {text}
      </div>

      <InputText
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setCount(count + 1);
        }}
      />

      <div className="border w-28 h-28 mt-5 rounded-full flex items-center justify-center border-red-500">
        {count}
      </div>

      <Button
        onClick={() => {
          setIsOn(!isOn);
        }}
        width="md"
        title="Mati/Nyala"
        colorSchema="green"
      />
      <Button
        onClick={() => {
          setCount(count++);
        }}
        width="md"
        title="Tambah"
        colorSchema="red"
      />
      <Button
        onClick={() => {
          setCount(count--);
        }}
        width="md"
        title="kurang"
        colorSchema="blue"
      />
    </>
  );
}

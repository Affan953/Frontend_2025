"use client";

import { useState, useEffect } from "react";
import InputText from "../componen/InputText";
import { text } from "stream/consumers";
import Link from "next/link";

export default function LearnUseEffect() {
  const [count, setCount] = useState(0);
  let [text, setText] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Use Effect di panggil");
      setCount((c) => c + 1);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // useEffect(() => {
  //   // Code yang akan di jalankan ketika useEffect di panggil
  //   console.log("Use Effect di panggil");
  //   setCount((c) => c + 8 * 9);
  // }, [text, count]);

  return (
    <>
      <Link href={"/learn-state"}>Back</Link>
      <h1 className="font-semibold">Siap belajar Use Effect :</h1>
      <h2 className="mt-4">Count : {count}</h2>
      <InputText
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {/* <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setCount(count + 1)}
      >
        Tambah Count
      </button> */}
    </>
  );
}

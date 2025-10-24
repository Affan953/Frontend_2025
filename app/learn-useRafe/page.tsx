"use client";

import { useRef } from "react";
import Button from "../componen/Button";
export default function LearnUseRafe() {
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <h1 className="font-semibold pb-4 mt-4 ml-6">
        Siap belajar Use Rafe : 😜
      </h1>
      <div
        onMouseEnter={() => {
          console.log("Masuk", divRef.current);

          if (divRef.current) {
            divRef.current.classList.remove("bg-green-400");
            divRef.current.classList.add("bg-blue-400");
          }
          console.log("Okyy");
        }}
        onMouseLeave={() => {
          console.log("Byyy");

          if (divRef.current) {
            divRef.current.classList.remove("bg-blue-400");
            divRef.current.classList.add("bg-green-400");
          }
        }}
        ref={divRef}
        className="bg-green-400 h-16 w-60 rounded-2xl drop-shadow-2xl shadow-2xl hover:bg-blue-400 transition-all duration-500 ml-6"
      ></div>
      {/* <Button
        onClick={() => {
          if (divRef.current) {
            const node = document.createElement("div");
            node.className = "text-white bg-red-500 p-2";
            const textnode = document.createTextNode("Water");
            node.appendChild(textnode);
            divRef.current.appendChild(node);
          }
        }}
        title="Swich Color & Add Text"
        colorSchema="blue"
      /> */}
    </>
  );
}

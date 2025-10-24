"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Button from "../componen/Button";
import { useEffect, useState } from "react";

export default function Siswapage() {
  const router = useRouter();
  const path = usePathname()
  console.log(path)
  
  let [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 5) {
      router.push("/siswa/22/analisa");
    }
  }, [count]);
  return (
    <div className="grid grid-cols-1 gap-5">
      <Link href={`${path}/22/analisa`}>analisa 22</Link>
      <Link href={`${path}/23/analisa`}>analias 23</Link>

      <Button
        onClick={() => {
          router.push(`${path}/22/analisa`);
        }}
        title="Affan"
        colorSchema="blue"
      />siswa//

      <Button
        onClick={() => {
          setCount(count + 1);
        }}
        title="Add"
        colorSchema="blue"
      />
    </div>
  );
}

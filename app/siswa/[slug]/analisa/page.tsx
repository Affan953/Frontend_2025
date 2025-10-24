"use client"

import { use } from "react";

export default function Siswapage({ params }: { params: Promise< { slug: string } >}) {
//   console.log("params slug", params);
const resolved = use(params);
  return (
    <>
      <h1>halaman {resolved.slug} </h1>
    </>
  );
}
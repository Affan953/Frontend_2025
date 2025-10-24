"use client";

import { use } from "react";

interface Params {
  slug: string;
  lug: string;
}

export default function Siswapage({ params }: { params: Promise<Params> }) {
  const resolved: Params = use(params);

  return (
    <>
      <h1>halaman {resolved.lug} </h1>
    </>
  );
}

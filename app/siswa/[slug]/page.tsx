"use client";
export default function Siswapage({ params }: { params: { slug: string } }) {
  console.log("params slug", params);
  return (
    <>
      <h1>halaman {params.slug} </h1>
    </>
  );
}

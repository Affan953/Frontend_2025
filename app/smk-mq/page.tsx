"use client";
import { useEffect, useState } from "react";
import Loading from "../componen/Loading";
import ArtikelWp from "../componen/ArtikelWp";
// useState untuk menyimpan state
export default function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refesh, setRefesh] = useState(true);

  // Funtion untuk get data dari api
  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://smkmadinatulquran.sch.id/wp-json/wp/v2/posts"
      );

      const artikel = await res.json();
      setData(artikel);
      console.log("Artikel", artikel);
    } catch {
      setError("Yaaa.. Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [refesh]);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Posts dari WordPress
        </h1>
    <button title="Refresh" className="pb-7" onClick={() => {
        setRefesh(!refesh)
    }}>Refresh</button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((post, index) => (
            <section key={index}>
              <ArtikelWp post={post} />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

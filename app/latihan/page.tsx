"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FilterLatihan, Latihan } from "./interface";
import { latihanService } from "./service";
import Button from "../component/Button";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Drawer from "../component/Drawer";
import InputText from "../component/InputText";

// const nilaiSiswa = [
//   { id: 1, name: "Andi", score: 85 },
//   { id: 2, name: "Budi", score: 78 },
// ];

export default function LatihanPage() {
  const router = useRouter();

  // Filter untuk menyimpan nilai input yang sedang diketik pengguna.
  // FilterSubmit untuk nilai filter yang benar-benar digunakan saat query dijalankan.
  const [open, setOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<FilterLatihan>({
    title: "",
    name: "",
    umur: "",
    alamat: "",
    keyword: "",
    page: 1,
    limit: 10,
  });

  const [filterSubmit, setFilterSubmit] = useState<FilterLatihan>({
    title: "",
    name: "",
    umur: "",
    alamat: "",
    keyword: "",
    page: 1,
    limit: 10,
  });

  const handleChangeFilter = (e: any) => {
    setFilter((v) => {
      return {
        ...v,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = () => {
    setFilterSubmit({ ...filter, page: 1 });
    setOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilterSubmit((prev) => ({
        ...prev,
        keyword: filter.keyword,
        page: 1,
      }));
    }, 1500);

    return () => clearTimeout(timer);
  }, [filter.keyword]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1) return;
    setFilter((prev) => ({ ...prev, page: newPage }));
    setFilterSubmit((prev) => ({ ...prev, page: newPage }));
  };

  const handleLimitChange = (limit: number) => {
    setFilter((prev) => ({ ...prev, limit: limit, page: 1 }));
    setFilterSubmit((prev) => ({ ...prev, limit: limit, page: 1 }));
  };

  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: ["latihan-list", { filterSubmit }],
    queryFn: () => latihanService.list(filterSubmit),
    retry: 1, // mencoba ulang 1x jika gagal
    select: (res) => res,
  });

  console.log("Filter", filterSubmit);
  console.log("filter2", filter);

  if (isFetching) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-3 text-blue-600 font-medium">Memuat data latihan...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center h-[60vh] text-center">
        <p className="text-red-600 font-semibold mb-2">{isError}</p>
        <button
          onClick={() => refetch}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
        >
          Coba Lagi
        </button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        📚 Daftar Latihan
      </h1>

      {/* Drawer Filter */}
      <Drawer title="Filter" isOpen={open} onClose={() => setOpen(false)}>
        <div className="space-y-5">
          <InputText
            name="title"
            value={filter.title}
            placeholder="title..."
            onChange={handleChangeFilter}
          />
          <InputText
            name="name"
            value={filter.name}
            placeholder="Name..."
            onChange={handleChangeFilter}
          />
          <InputText
            name="alamat"
            value={filter.alamat}
            placeholder="alamat..."
            onChange={handleChangeFilter}
          />
          <InputText
            name="umur"
            value={filter.umur}
            placeholder="umur..."
            onChange={handleChangeFilter}
          />
          <Button onClick={handleSubmit} title="Submit" colorSchema="green" />
        </div>
      </Drawer>

      {/* Filter & Keyword Input */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        <div className="col-span-5">
          <InputText
            name="keyword"
            value={filter.keyword}
            placeholder="Cari latihan..."
            onChange={(e) =>
              setFilter((prev) => ({
                ...prev,
                keyword: e.target.value,
              }))
            }
          />
        </div>
        <div className="col-end-12 w-full">
          <Button
            onClick={() => setOpen(!open)}
            title="Filter"
            colorSchema="blue"
          />
        </div>
      </div>

      {/* Table */}
      {isFetching ? (
        <div className="text-center py-10 text-gray-600">Memuat data...</div>
      ) : isError ? (
        <div className="text-center text-red-600 py-10">Gagal memuat data.</div>
      ) : (
        <>
          <table className="min-w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Nama</th>
                <th className="px-4 py-2 text-left">Alamat</th>
                <th className="px-4 py-2 text-left">Umur</th>
                <th className="px-4 py-2 text-left">Detail</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((item: any, i: number) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{i + 1}</td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.alamat}</td>
                  <td className="px-4 py-2">{item.umur}</td>
                  <td className="px-4 py-2">
                    <Button
                      colorSchema="blue"
                      title="Detail"
                      onClick={() => router.push(`latihan/${item.id}/detail`)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-6 space-x-5">
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              value={filterSubmit.limit}
              onChange={(e) => handleLimitChange(Number(e.target.value))}
            >
              <option value={1}>1</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>

            <div className="flex items-center">
              <button
                className="border rounded-full h-8 w-8 bg-blue-400 text-white hover:bg-blue-500"
                onClick={() => handlePageChange(filterSubmit.page - 1)}
                disabled={filterSubmit.page === 1}
              >
                ←
              </button>

              <p className="text-gray-600 whitespace-nowrap border p-2 rounded-lg mx-5">
                Halaman {filterSubmit.page} dari {data?.meta.lastPage || 1}
              </p>

              <button
                className="border rounded-full h-8 w-8 bg-blue-400 text-white hover:bg-blue-500"
                onClick={() => handlePageChange(filterSubmit.page + 1)}
                disabled={filterSubmit.page === data?.meta.lastPage}
              >
                →
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

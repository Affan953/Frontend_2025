"use client";
import { useState } from "react";
import Button from "../componen/Button";
import InputText from "../componen/InputText";
import RadioButton from "../componen/Radio";

interface HasilUjian {
  mata_pelajaran: string;
  nilai: number;
  isRemedial: boolean;
}

export default function BelajarStateObjek() {
  let [hasil, setHasil] = useState<HasilUjian[]>([
    { mata_pelajaran: "Matematika", nilai: 100, isRemedial: false },
    { mata_pelajaran: "PAI", nilai: 98, isRemedial: false },
    { mata_pelajaran: "Tahfidz", nilai: 90, isRemedial: false },
    { mata_pelajaran: "Kejuruan", nilai: 95, isRemedial: false },
    { mata_pelajaran: "Kejuruan", nilai: 95, isRemedial: false },
  ]);

  let [mapel, setMapel] = useState("");
  let [nilai, setNilai] = useState("");
  let [isRemedial, setIsRemedial] = useState(false);

  let handleTambah = () => {
    if (!mapel || !nilai) return;

    setHasil((prev) => [
      ...prev,
      { mata_pelajaran: mapel, nilai: Number(nilai), isRemedial },
    ]);

    setMapel("");
    setNilai("");
    setIsRemedial(false);
  };

  return (
    <>
      <h1 className="text-2xl mb-3">Belajar State Array</h1>

      {/* Tabel */}
      <table>
        <thead>
          <tr>
            <th className="p-5 border">No</th>
            <th className="p-5 border">Mata Pelajaran</th>
            <th className="p-5 border">Nilai</th>
            <th className="p-5 border">Keterangan</th>
          </tr>
        </thead>
        <tbody>
          {hasil.map((item, index) => (
            <tr key={index}>
              <td className="p-5 border">{index + 1}</td>
              <td className="p-5 border">{item.mata_pelajaran}</td>
              <td className="p-5 border">{item.nilai}</td>
              <td className="p-5 border">
                {item.isRemedial ? "Remidial" : "Tidak Remedial"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <InputText
        value={mapel}
        onChange={(e) => setMapel(e.target.value)}
        placeholder="Mata Pelajaran"
      />
      <InputText
        type="number"
        value={nilai}
        onChange={(e) => setNilai(e.target.value)}
        placeholder="Nilai"
      />
      <div>
        <RadioButton
          name="remedial"
          value="false"
          title="Tidak"
          checked={!isRemedial}
          onChange={() => setIsRemedial(false)}
        />
        <RadioButton
          name="remedial"
          value="true"
          title="Remidial"
          checked={isRemedial}
          onChange={() => setIsRemedial(true)}
        />
      </div>

      <Button colorSchema="blue" title="Add" onClick={handleTambah} />
    </>
  );
}
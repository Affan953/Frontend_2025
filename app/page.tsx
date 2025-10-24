// export default function Home() {
// return (
//   <div>
//     <h1 className="text-red-500">Welcome to Rafasy</h1>
//     <Card count={1} wording="test aja"/>
//      <Card count={2} isView={false}/>
//       <Card count={3} isView/>
//        <Card count={4} isView={true}/>

//   </div>

// )
// }

// function Card({count,wording,isView}:{count:number; wording?:string, isView?:boolean}){
//   return(
//     <div className=" h-40 w-40 mt-10 border rounded-2xl  border-red-500">
//       {count}
//      <span className="text-red-400">{wording}</span>
//      {isView? <span>Ok</span> : <div>tidak ok</div>}
//     </div>
//   )
// }

// export default function Home() {
//   return (
//     <section>
//       <div className="bg-black min-h-screen">
//         <h1 className="flex items-center justify-center mt-14 text-4xl font-semibold">
//           Projek
//           <span className="text-blue-400 ml-2 text-4xl">Dashboard</span>
//         </h1>
//         <p className="flex items-center justify-center mt-6 text-white">
//           Welcome back, Budi Santoso. Here's an overview of your current project and task.
//         </p>
//         <div className="flex items-center justify-center gap-10">
//           <Container icon="" angka={12} judul="Project" />
//           <Container icon="" angka={7} judul="Completed" />
//           <Container icon="" angka={3} judul="In Progress" />
//           <Container icon="" angka={2} judul="Pending" />
//         </div>
//         <div className="flex flex-col items-start justify-start gap-10">
//           <p className="text-white text-2xl ml-56 mt-24">Task Overview</p>
//         </div>
//         <div className="ml-52 flex flex-col items-start justify-start gap-2">
//           <Task label="Create user" keterangan="In Progress" />
//           <Task label="Design" keterangan="Deployed" />
//           <Task label="Write" keterangan="Pending" />
//           <Task label="Test" keterangan="Completed" />
//         </div>
//       </div>
//     </section>
//   );
// }

// function Container({
//   icon,
//   angka,
//   judul,
// }: {
//   icon?: string;
//   angka?: number;
//   judul?: string;
// }) {
//   return (
//     <div className="h-40 w-72 mt-10 border rounded-2xl bg-white text-black border-white/10">
//       <div className="p-4">
//         <p className="text-2xl">{icon}</p>
//         <h1 className="mt-4 text-4xl font-bold">{angka}</h1>
//         <p className="mt-1 text-gray-400">{judul}</p>
//       </div>
//     </div>
//   );
// }

// function Task({ label, keterangan }: { label: string; keterangan: string }) {
//   return (
//     <div className="h-32 w-[500px] mt-10 border rounded-2xl bg-white text-black border-white/10 flex flex-col items-start p-4 gap-4">
//       <div className="flex items-center">
//         <input type="checkbox" id={`task-${label}`} className="mr-4 h-5 w-5" />
//         <label htmlFor={`task-${label}`} className="text-lg">
//           {label}
//         </label>
//       </div>

//       <div className="ml-12 flex items-center">
//         <input type="checkbox" className="h-5 w-5" />
//         <div className="ml-4 bg-gray-200 rounded-lg px-4 py-2 flex items-center">
//           <span className="text-gray-700 text-[10px]">{keterangan}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
//       <Button wording="Satu">ok</Button>
//       <Card title="NestJS">
//         <Button wording="NEstJs">yes</Button>
//       </Card>
//       <Card title="NextJS">
//         <div className="bg-green-500">
//           <p className="text-white">
//             Saya sedang belajar NestJS untuk menjadi backend developer
//           </p>
//         </div>
//       </Card>

//       <Test title="Tabel" >
//         <table>
//           <thead>
//             <tr>
//               <th>Header 1</th>
//               <th>Header 2</th>
//               <th>Header 3</th>
//             </tr>
//           </thead>
//         </table>
//       </Test>
//        <Test title="Lingkaran">
//        <div className="h-48 w-48 rounded-full border bg-blue-500"></div>
//       </Test>
//     </main>
//   );
// }

// function Button({
//   wording,
//   children,
// }: {
//   wording: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
//       <h1>{wording}</h1>
//       <div className="text-red-500 font-bold">{children}</div>
//     </div>
//   );
// }

// function Card({
//   title,
//   children,
// }: {
//   title: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <section className=" border border-red-500 mt-5 rounded-lg  shadow-md px-2">
//       <div className="border-b border-red-500  py-2 ">
//         <h5 className="font-bold text-red-500"> {title}</h5>
//       </div>
//       <div className="py-3 text-sm p-5 rounded-2xl shadow-2xl">{children}</div>
//     </section>
//   );
// }

// function Test({ title, children }: { title:string, children: React.ReactNode }) {
//   return (
//     <div className="bg-green-500">
//       <p className="text-white">
//        {title}
//       </p>

//       <div className="border mt-5 px-5 bg-red-500">{children}</div>
//     </div>
//   );
// }

// "use client";

// import Button from "./componen/Button";
// import Label from "./componen/Label";
// import InputText from "./componen/InputText";

// export default function Home() {
//   return (
//     <div className="flex items-center justify-center h-screen w-screen">
//       <form>
//         <Label color="red" title="Nama" text="xl" isRequired/>
//         <InputText 
//         isError
//         massageError="Berikan Usernama mu"
//         type="text"
//         name="name"
//         placeholder="Name"
//         />
//         <InputText 
//         isError
//         type="text"
//         name="name"
//         placeholder="Email"
//         />
//         <InputText 
//         type="text"
//         name="name"
//         placeholder="Jabatan"
//         />
//         <InputText 
//         type="text"
//         name="name"
//         placeholder="Password"
//         />
//         <Button isLoading title="Save" colorSchema="blue" variant="solid"/>
//         <Button title="Save" colorSchema="blue" variant="solid"/>
//         <Button title="Save" colorSchema="green" variant="solid"/>
//       </form>
//     </div>
//   );
// }

"use client";


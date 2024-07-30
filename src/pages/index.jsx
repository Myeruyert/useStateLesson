import Image from "next/image";
import { Inter } from "next/font/google";
import Input from "@/components/input";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-5xl text-gray-950">User Find Application</h1>
      <div className="">
        <Input />
      </div>
      <p>list</p>
    </main>
  );
}

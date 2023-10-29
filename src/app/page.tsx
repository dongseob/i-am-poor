import Image from "next/image";
import Background from "@/app/Background";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full bg-slate-400">
      <Background></Background>
    </div>
  );
}

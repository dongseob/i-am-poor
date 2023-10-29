"use client";
import Background from "@/app/Background";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Background></Background>
      <div className="z-10 text-white px-4">
        <h1>Want donate</h1>
        <h2
          className="ml-4 hover:text-[#ff6347] hover:underline transition-all duration-200"
          onClick={() => window.open("https://www.buymeacoffee.com/jds3567")}
        >
          1. Buy me a coffee
        </h2>
        <h2 className="ml-4 hover:text-[#ff6347] hover:underline transition-all duration-200" onClick={() => window.open("https://qr.kakaopay.com/FMQhIObcS")}>
          2. KakaoTalk (only mobile)
        </h2>

        <div className="h-2"></div>

        <h1>Or say something warm</h1>
        <input type="text" name="" id="" />
      </div>
    </div>
  );
}

"use client";

import { CoolMode } from "@/components/ui/cool-mode";

export default function Navbar() {
  return (
    <div className="navbar bg-blue-950 font-extrabold text-2xl text-white flex justify-center">
      <CoolMode
        options={{
          speedUp: 5,
          size: 250,
          particle:
            "https://ik.imagekit.io/manuelalferez/amortify/500euro_aWx_AoowW.webp",
        }}
      >
        <button className="flex gap-1">amortify</button>
      </CoolMode>
    </div>
  );
}

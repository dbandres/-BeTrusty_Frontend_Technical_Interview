'use client'
import { HeaderUser } from "@/components/headerUser/HeaderUser";
import { Slider } from "@/components/slider/Slider";
import { ReservaInfo } from "@/components/reservaInfo/Reserva"

export default function Home() {

  return (
    <div className="tablet:ml-[90px] phone:mr-0 flex justify-center items-center h-[92vh] bg-[#0F172A]">
      <div className="w-full overflow-y-auto h-full">
        <HeaderUser />
        <div className="w-full h-[27vh] relative">
          <Slider />
        </div>
        <div className="w-full h-[400px]  flex justify-center items-center">
          <ReservaInfo />
        </div>
      </div>
    </div>
  );
}

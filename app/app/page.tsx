'use client'
import { HeaderUser } from "@/components/headerUser/HeaderUser";
import { Slider } from "@/components/slider/Slider";
import { ReservaInfo } from "@/components/reservaInfo/Reserva"
import { BtnInvitar } from "@/components/btn/BtnInvitar";
import { Services } from "@/components/services/Services";
import { DescriptionText } from "@/components/description/DescriptionText";
import avatar from '../assets/Avatar.png'
import Image from "next/image";

export default function Home() {

  return (
    <div className="tablet:ml-[90px] phone:mr-0 flex justify-center items-center h-[92vh] bg-[#0F172A]">
      <div className="w-full overflow-y-auto h-full">
        <HeaderUser />
        <section className="w-full h-[27vh] relative">
          <Slider />
        </section>
        <section className="w-full h-[400px] flex justify-center items-center">
          <ReservaInfo />
        </section>
        <section className="h-[70px] flex justify-center items-center">
          <BtnInvitar />
        </section>
        <section className="h-[200px] flex justify-center items-center">
          <Services />
        </section>
        <section className="h-[350px] flex justify-center items-center ">
          <DescriptionText />
        </section>
        <div className="h-[190px] flex justify-center ">
          <div className="w-[285px] h-[80px] ">
            <h1 className="text-[20px] font-bold">Propietario</h1>
            <div className="flex space-x-3 items-center">
              <Image
                src={avatar}
                width={50}
                height={50}
                alt="avatar"
              />
              <h2 className="text-[17px] font-medium">Elon Musk</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client'
import { HeaderUser } from "@/components/headerUser/HeaderUser";
import { Slider } from "@/components/slider/Slider";
import { ReservaInfo } from "@/components/reservaInfo/Reserva"
import { BtnInvitar } from "@/components/btn/BtnInvitar";
import { Services } from "@/components/services/Services";
import { DescriptionText } from "@/components/description/DescriptionText";
import avatar from '../assets/Avatar.png'
import Image from "next/image";
import { Galeria } from "@/components/galeria/Galeria";

export default function Home() {

  return (
    <div className="tablet:ml-[90px] phone:mr-0 flex justify-center items-center h-[92vh] tablet:h-auto bg-[#0F172A]">
      <div className="w-full h-full phone:overflow-y-auto tablet:overflow-y-hidden tablet:w-[90%]">
        <HeaderUser />
        <section className="w-full h-[27vh] relative tablet:hidden phone:block">
          <Slider />
        </section>
        <section className="w-full h-[42vh] items-center tablet:flex phone:hidden ">
          <Galeria />
        </section>
        <div className="tablet:flex tablet:flex-row tablet:relative">
          <div className=" tablet:absolute tablet:right-0">
            <section className="w-full h-[400px] flex justify-center items-center">
              <ReservaInfo />
            </section>
            <section className="h-[70px] flex justify-center items-center">
              <BtnInvitar />
            </section>
          </div>
          <div className=" flex flex-col tablet:items-start phone:items-center">
            <section className="phone:h-[200px] tablet:h-[257px] flex items-center ">
              <Services />
            </section>
            <section className="phone:h-[350px] tablet:h-[189px] flex justify-center items-center ">
              <DescriptionText />
            </section>
            <div className="phone:h-[190px] tablet:h-[100px] flex justify-center ">
              <div className="w-[285px] phone:h-[80px] ">
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
      </div>
    </div>
  );
}

import logo from "../assets/logoBe.png";
import avatar from '../assets/Avatar.png'
import Image from "next/image";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="">
      <div className="bg-[#000000] w-full h-[75px] absolute right-0 tablet:pl-[115px] flex items-center justify-between tablet:pr-[25] phone:pl-[20px] phone:pr-[20px]">
          <Image
            src={logo}
            height={35}
            width={120}
            alt="logo"
          />
          <Image
            src={avatar}
            height={45}
            width={45}
            alt="avatar"
          />
        </div>
        <Navbar/>
    </div>
  );
}

import Image from "next/image"
import menu from '../../assets/menuIcons/top.png'
import inicio from '../../assets/menuIcons/inicio.png'
import credencial from '../../assets/menuIcons/Identification.png'
import dash from '../../assets/menuIcons/Dashboard.png'
import qr from '../../assets/menuIcons/QrCode.png'
import llave from '../../assets/menuIcons/llave.png'
import notif from '../../assets/menuIcons/Notifications.png'
import settings from '../../assets/menuIcons/Settings.png'

export const Navbar = () => {

  const arreglo = [1, 2, 3, 4, 5, 6]

  return (
    <div className="
    tablet:bg-[#000000] 
    tablet:w-[90px] 
    tablet:h-[100vh] 
    tablet:justify-start 
    tablet:items-center 
    tablet:flex-col
    phone:bg-[#000000] 
      phone:absolute 
      phone:h-[75] 
      phone:w-full
      phone:bottom-0
      phone:items-center
      phone:justify-center
      phone:flex
      phone:flex-row
      ">
      <div className=" w-full h-[75px] tablet:flex justify-center items-end pb-1 cursor-pointer phone:hidden ">
        <Image
          src={menu}
          height={40}
          width={40}
          alt="menu"
          className="phone:hidden tablet:block"
        />
      </div>
      <div className="
      tablet:w-[35px] 
      tablet:h-[400px] 
      tablet:flex 
      tablet:justify-center 
      tablet:items-center gap-5 
      phone:h-[40px] 
      phone:w-[340px]">
        <div className=" 
        tablet:w-full 
        tablet:h-[80%] 
        tablet:flex-col 
        tablet:space-y-4 
        phone:w-[340px] 
        phone:h-[40px] 
        phone:flex-row 
        phone:flex 
        phone:justify-between">
          <Image
            src={inicio}
            height={40}
            width={40}
            alt="menu"
          />
          <Image
            src={credencial}
            height={40}
            width={40}
            alt="menu"
            className="phone:hidden tablet:block"
          />
          <Image
            src={dash}
            height={40}
            width={40}
            alt="menu"
          />
          <Image
            src={qr}
            height={40}
            width={40}
            alt="menu"
          />
          <Image
            src={llave}
            height={40}
            width={40}
            alt="menu"
            className="phone:hidden tablet:block"
          />
          <Image
            src={notif}
            height={40}
            width={40}
            alt="menu"
          />
          <Image
            src={settings}
            height={40}
            width={40}
            alt="menu"
            className="tablet:absolute tablet:bottom-4"
          />
        </div>
      </div>
    </div>
  )
}
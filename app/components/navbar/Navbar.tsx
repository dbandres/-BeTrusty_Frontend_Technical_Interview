import Image from "next/image"
import menu from '../../public/menuIcons/top.png'
import Link from "next/link"
import { menuItems } from './utils';

export const Navbar = () => {

  const itemsRender = () => {
    return (
      menuItems.map((menu) => (
        <Link key={menu.id} href={menu.href}>
          <Image
            src={menu.img}
            height={40}
            width={40}
            alt="menu"
            className={`${menu.className}`}
          />
        </Link>
      ))
    )
  }

  return (
    <div className="
    tablet:bg-[#000000] 
    tablet:w-[90px] 
    tablet:h-[100vh] 
    tablet:justify-start 
    tablet:items-center 
    tablet:flex-col
    tablet:fixed
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
        phone:justify-around">

        {
          itemsRender()
        }
        </div>
      </div>
    </div>
  )
}
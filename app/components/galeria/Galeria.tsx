import Image from "next/image"
import { imgs } from "../slider/images"
import btn from '../../assets/ButtonImagesAll.png'

export const Galeria = () => {
  return (
    <>
      <div className="w-[49%] mr-[1%]">
        {
          imgs.slice(0, 1).map((img, index) => (
            <Image
              key={index}
              src={img.src}
              alt="img"
              width={500}
              height={100}
              className="w-full h-[42vh]"
            />
          ))
        }
      </div>
      <div className="w-[50%] h-[42vh] flex flex-col">
        <div className="h-[49%]  mb-[2vh]">
          <div className="grid grid-cols-2">
            {
              imgs.slice(1, 2).map((img, index) => (
                <Image
                  key={index}
                  src={img.src}
                  alt="img"
                  width={280}
                  height={100}
                  className="w-[96%] h-[20vh]"
                />
              ))
            }
            <div className="w-[96%] ml-[4%] rounded-lg bg-[#162342] flex justify-center items-center">
              <h1>Ver los detalles de las habiatciones</h1>
            </div>
          </div>
        </div>
        <div className="h-[49%]">
          <div className="phone:grid grid-cols-2 tablet:relative">
          {
              imgs.slice(2, 4).map((img, index) => (
                <Image
                  key={index}
                  src={img.src}
                  alt="img"
                  width={280}
                  height={100}
                  className={`w-[96%] h-[20vh] ${img.id === 4 ? "ml-[4%]" : ""}`}
                />
              ))
            }
            <div className="absolute right-3 bottom-2 phone:hidden tablet:block">
              <Image
                src={btn}
                alt="btn"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
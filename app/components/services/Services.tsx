import Image from 'next/image';
import { data } from './data';


export const Services = () => {
  return (
    <div className="h-full w-[316] flex justify-center items-center flex-col">
      {
        data.map((d, index) => (
          <div key={index} className='flex w-[295px] h-[37px] items-center'>
            <Image
              src={d.img}
              width={20}
              height={15}
              alt='img'
              className='mr-3'
            />
            <p className='leading-[15px] text-[14px]'>{d.title}</p>
          </div>
        ))
      }
    </div>
  )
}
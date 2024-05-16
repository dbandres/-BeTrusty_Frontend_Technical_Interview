import Image from 'next/image';
import { data } from './data';


export const Services = () => {
  return (
    <div className="h-full phone:w-[316px] tablet:w-[372px] flex phone:justify-center phone:items-center flex-col tablet:items-start">
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
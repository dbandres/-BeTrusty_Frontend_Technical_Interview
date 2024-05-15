import Image from 'next/image'
import editShare from '../../assets/editShare.png'

export const HeaderUser = () =>{
  return(
    <div className="w-full h-[85px] flex items-center justify-between px-[20px]">
      <h1 className='text-[24px] font-bold leading-[28px]'>Frank Apart</h1>
      <Image
        src={editShare}
        width={100}
        height={45}
        alt='editShare'
      />
    </div>
  )
}
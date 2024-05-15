import Image from 'next/image'
import icon from '../../assets/edit.png'
import { useDisclosure } from '@nextui-org/modal';
import { ModalPicker } from '../modalPicker/ModalPicker';
import { useEffect, useState } from 'react';
import { calcularCantidadDias, setFormatoFecha } from './utils';

export const ReservaInfo = () => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [checkin, setCheckin] = useState(null)
  const [checkout, setCheckout] = useState(null)
  const [entrada, setEntrada] = useState(null)
  const [salida, setSalida] = useState(null)
  const [dias, setDias] = useState(null)

  useEffect(() => {

    if (checkin !== null && checkout !== null) {
      setEntrada(setFormatoFecha(checkin))
      setSalida(setFormatoFecha(checkout))
      setDias(calcularCantidadDias(checkin.day, checkin.month, checkout.day, checkout.month))
    }
  }, [checkin, checkout])

  const renderItem = () => {
    return (
      <>
        <div className='border-r-[1px] w-[50%] h-full justify-center flex flex-col items-center'>
          <h1>CHECK-IN</h1>
          {
            entrada !== null ? entrada : <p>dd/mm/aaaa</p>
          }
        </div>
        <div className='w-[50%] justify-center flex flex-col items-center'>
          <h1>CHECK-OUT</h1>
          {
            salida !== null ? salida : <p>dd/mm/aaaa</p>
          }
        </div>
      </>
    )
  }

  return (
    <div className="border-[1px] border-[#FFFFFF] h-[355px] w-[320px] rounded-[10px] justify-center items-center flex flex-col">
      <ModalPicker
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setCheckin={setCheckin}
        setCheckout={setCheckout}
      />
      <div className=" h-[115px] w-full border-b-2 border-[#FFFFFF] flex justify-center items-center">
        <div className=" w-[69%] justify-center items-center flex flex-col">
          <h1 className='text-[24px]'>$60 USD por noche</h1>
          <p>Precio por habitación</p>
        </div>
        <div className="w-[52px] h-[52px] ">
          <Image
            src={icon}
            alt='icon'
          />
        </div>
      </div>
      <div onClick={onOpen} className="h-[100px] w-full flex justify-center items-center border-b-2 border-[#FFFFFF]">
        {
          renderItem()
        }
      </div>
      <div className=" h-[45px] w-full justify-center items-center flex border-b-2 border-[#FFFFFF]">
        <p className='text-[14px]'>Cantidad de días: {dias}</p>
      </div>
      <div className=" h-[45px] w-full justify-center items-center flex border-b-2 border-[#FFFFFF]">
        <p className='text-[14px]'>Depósito reembolsable: $60 USD</p>
      </div>
      <div className=" h-[45px] w-full justify-center items-center flex">
        <p className='text-[14px]'>Ingreso total: ${dias * 60} USD</p>
      </div>
    </div>
  )
}
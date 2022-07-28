import React from 'react'
import Image from 'next/image'
import { formatearDinero } from '../helpers'
const Producto = ({producto}) => {
    const {nombre, precio, imagen} = producto
  return (
    <div className='border p-3'>
        <Image
            src={`/assets/img/${imagen}.jpg`}
            width={400}
            height={500}
            alt={`Producto ${nombre}`}
        />
        <div className='p-5'>
            <h3 className='text-2xl font-bold'>{nombre}</h3>
            <p className='mt-5 text-4xl font-black text-amber-400'>
                {formatearDinero(precio)}
            </p>
        </div>
    </div>
  )
}

export default Producto
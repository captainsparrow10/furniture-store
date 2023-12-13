import { XCircleIcon } from '@heroicons/react/20/solid'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'
type Props = {
	image: string | StaticImport
	name: string
	price: string
	quantity: string
}
export default function CartSideItem({ image, name, price, quantity }: Props) {
  return (
    <div className="h-28 w-full flex group">
    <div className="flex gap-x-4 h-full w-full">
      <div>
        <div className="h-full w-24 relative bg-yellow rounded-xl">
          <Image src={image} alt={name} fill={true} />
        </div>
      </div>
      <div className="h-full  w-full flex flex-col justify-center">
        <p className="body2">{name}</p>
        <p className="text-gray">
          {quantity} x {price}
        </p>
      </div>
    </div>
    <div className="h-full w-fit items-center hidden group-hover:flex">
      <XCircleIcon className="icon text-gray hover:text-black" />
    </div>
  </div>
  )
}

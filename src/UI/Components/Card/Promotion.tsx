/* eslint-disable @next/next/no-img-element */
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'
import Check from '@/components/Button/Check'
type Props = {
  image: string,
  name : string
}
export default function Promotion({image, name}: Props) {
  return (
    <div className='w-[600px] h-[560px] flex flex-col gap-y-2'>
					<div className="w-full h-[458px]">
						<img
							src={image}
							alt={name}
							className="w-full h-full"
						/>
					</div>
      <h3>
        {name}
      </h3>
      <Check text="show now" />
    </div>
  )
}

import Image from 'next/image'
import Check from '../button/Check'

type Props = {
	image: string
	name: string
}
export default function Promotion({ image, name }: Props) {
	return (
		<div className="w-[600px] h-[560px] flex flex-col gap-y-2">
			<div className="w-full h-[458px] relative">
				<Image src={image} alt={name} fill />
			</div>
			<h3>{name}</h3>
			<Check text="show now" />
		</div>
	)
}

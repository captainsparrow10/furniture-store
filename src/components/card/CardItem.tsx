import Image from 'next/image'

type Props = {
	image: string
	name: string
	price: string
}
export default function CardItem({ image, name, price }: Props) {
	return (
		<div className="w-[287px] h-[372px] flex flex-col gap-y-2 hover:shadow-md p-3 hover:border  border-gray-line  hover:rounded-lg ">
			<div className="w-full h-[292px] relative">
				<Image src={image} alt={name} fill />
			</div>
			<h5>{name}</h5>
			<h4 className="font-bold">$ {price}</h4>
		</div>
	)
}

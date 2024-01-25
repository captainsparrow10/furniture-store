import { ClockIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function ContactSchedule() {
	return (
		<div className="max-w-[277px] w-full flex flex-col gap-y-12">
			<div className="flex gap-x-6">
				<MapPinIcon className="h-9 w-9" />
				<div className="w-full">
					<h4>Address</h4>
					<p className="text-gray">
						236 5th SE Avenue, New York NY10000, United States
					</p>
				</div>
			</div>
			<div className="flex gap-x-6">
				<PhoneIcon className="h-9 w-9" />
				<div className="w-full">
					<h4>Phone</h4>
					<p className="text-gray">Mobile: +(84) 546-6789</p>
					<p className="text-gray">Hotline: +(84) 456-6789</p>
				</div>
			</div>
			<div className="flex gap-x-6">
				<ClockIcon className="h-9 w-9" />
				<div className="w-full">
					<h4>working time</h4>
					<p className="text-gray">Monday - Friday: 9:00 - 22:00</p>
					<p className="text-gray">Saturday - Sunday: 9:00 - 21:00</p>
				</div>
			</div>
		</div>
	)
}

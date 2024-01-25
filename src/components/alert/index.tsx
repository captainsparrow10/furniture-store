'use client'
import { XMarkIcon } from '@heroicons/react/20/solid'
import {
	CheckCircleIcon,
	ExclamationTriangleIcon,
	LockClosedIcon,
} from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'

type Props = {
	status: number
	title: string
	changeView: () => void
}

export default function AlertStatus({ status, title, changeView }: Props) {
	const [view, setView] = useState(false)
	const handleSuccess = () => {
		setView(false)
		changeView()
	}

	const statusIcons: Record<number, React.JSX.Element> = {
		400: (
			<CheckCircleIcon className="h-6 w-6 text-red-400 flex flex-shrink-0" />
		),
		404: (
			<ExclamationTriangleIcon className="h-6 w-6 text-orange-400 flex flex-shrink-0" />
		),
		401: (
			<LockClosedIcon className="h-6 w-6 text-orange-400 flex flex-shrink-0" />
		),
		200: (
			<CheckCircleIcon className="h-6 w-6 text-green-400 flex flex-shrink-0" />
		),
	}

	useEffect(() => {
		setTimeout(() => {
			setView(true)
			changeView()
		}, 3000)
	}, [changeView])

	return (
		<div
			className={`pointer-events-none fixed  top-16 right-0 items-end px-4 py-6 sm:items-start sm:p-6 flex z-50 w-full max-w-fit ${
				view ? 'opacity-0 transition-opacity' : 'opacity-100 transition-opacity'
			} `}
		>
			<div className="flex w-full flex-col items-center space-y-4 sm:items-end">
				<div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
					<div className="p-4">
						<div className="flex items-start">
							{statusIcons[status]}
							<div className="ml-3 flex-1 pt-0.5 w-full">
								<p className="text-sm font-medium text-gray-900">{title}</p>
							</div>
							<div className="ml-4 flex flex-shrink-0">
								<button
									type="button"
									className="inline-flex rounded-md bg-white text-gray-line hover:text-black"
									onClick={handleSuccess}
								>
									<XMarkIcon className="h-5 w-5 flex flex-shrink-0" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

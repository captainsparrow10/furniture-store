'use client'

import { XMarkIcon } from '@heroicons/react/20/solid'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

type Props = {
	handleChangeView: (value: boolean) => void
}

export default function SuccessAlert({ handleChangeView }: Props) {
	const [view, setView] = useState(false)
	const handleSuccess = () => {
		handleChangeView(false)
	}
	useEffect(() => {
		setTimeout(() => {
			setView(true)
			handleChangeView(false)
		}, 3000)
	}, [])

	return (
		<div
			aria-live="assertive"
			className={`pointer-events-none fixed inset-y-32 inset-x-1 items-end px-4 py-6 sm:items-start sm:p-6 flex z-50 ${
				view ? 'opacity-0 transition-opacity' : 'opacity-100 transition-opacity'
			} `}
		>
			<div className="flex w-full flex-col items-center space-y-4 sm:items-end">
				<div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
					<div className="p-4">
						<div className="flex items-start">
							<CheckCircleIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
							<div className="ml-3 w-0 flex-1 pt-0.5">
								<p className="text-sm font-medium text-gray-900">
									Successfully saved!
								</p>
							</div>
							<div className="ml-4 flex flex-shrink-0">
								<button
									type="button"
									className="inline-flex rounded-md bg-white text-gray-line hover:text-black"
									onClick={handleSuccess}
								>
									<XMarkIcon className="h-5 w-5" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

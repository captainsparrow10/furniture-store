'use client'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { ChangeEvent, useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
type Props = {
	register: UseFormRegister<any>
	label: string
	type: 'text' | 'email' | 'password'
	valueInput:
		| 'firstname'
		| 'lastname'
		| 'email'
		| 'password'
		| 'confirmPassword'
		| 'userName'
		| 'company'
		| 'street'
		| 'province'
		| 'zipcode'
		| 'phone'
		| 'country'
	placeholder: string
	defaultValue?: string
	required?: boolean
	forgot?: boolean
	value?: string | undefined
	errors: FieldErrors<any>
	optional?: boolean
}

const Input = ({
	register,
	label,
	placeholder,
	errors,
	type,
	valueInput,
	defaultValue,
	forgot,
	optional = false,
	required = true,
}: Props) => {
	const [open, setOpen] = useState(false)
	const [data, setData] = useState(defaultValue || '')
	const [userData, setUserData] = useState(defaultValue)
	const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setData(e.target.value)
		setUserData(e.target.value)
		if (data.length < 1) {
			setOpen(false)
		}
	}
	console.log({ data })
	return (
		<div className="flex flex-col w-full space-y-1 relative">
			<label htmlFor={label}>
				<h5 className="capitalize">
					{label} {optional && <span className="text-gray">(Optional)</span>}
				</h5>
			</label>
			<div className="w-full h-fit flex justify-between items-center rounded-xl bg-button px-4 py-3 space-x-6 border border-gray">
				<input
					type={type === 'password' ? (open ? 'text' : 'password') : type}
					id={label}
					{...register(valueInput, {
						required,
					})}
					value={data}
					defaultValue={userData}
					placeholder={placeholder}
					onChange={onHandleChange}
					className="text-body body2 focus:text-header w-full bg-transparent outline-none"
				/>
				{type === 'password' && (
					<div
						className="h-fit w-fit flx shrink-0"
						onClick={() => setOpen(!open)}
					>
						{open && data?.length > 0 ? (
							<EyeIcon className="icon shrink-0" />
						) : (
							<EyeSlashIcon className="icon shrink-0" />
						)}
					</div>
				)}
			</div>
			<div
				className={clsx(
					'flex justify-end mt-2',
					errors[valueInput] && 'flex-col justify-between items-end'
				)}
			>
				{forgot ? (
					<>
						{errors[valueInput] && (
							<span className="text-red-500 text-[12px] font-normal w-full flex items-start">
								{errors[valueInput]?.message?.toString()}
							</span>
						)}
						<p className="text-gray cursor-pointer hover:text-black">
							forgot the password?
						</p>
					</>
				) : (
					errors[valueInput] && (
						<span className="text-red-400 text-[12px] w-full flex items-start">
							{errors[valueInput]?.message?.toString()}
						</span>
					)
				)}
			</div>
		</div>
	)
}

export default Input

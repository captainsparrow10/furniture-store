'use client'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useState } from 'react'
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
		| 'message'
		| 'name'
		| 'subject'
	placeholder: string
	required?: boolean
	forgot?: boolean
	errors: FieldErrors<any>
	optional?: boolean
	disable?: boolean
}

const Input = ({
	register,
	label,
	placeholder,
	errors,
	type,
	valueInput,
	forgot,
	optional = false,
	required = true,
	disable = false,
}: Props) => {
	const [open, setOpen] = useState(false)
	return (
		<div className="flex flex-col w-full space-y-1 relative">
			<label htmlFor={label}>
				<h5 className="capitalize">
					{label} {optional && <span className="text-gray">(Optional)</span>}
				</h5>
			</label>
			<div
				className={clsx(
					'w-full h-fit flex justify-between items-center rounded-xl bg-button px-4 py-3 space-x-6 border border-gray',
					disable && 'bg-gray/20'
				)}
			>
				<input
					type={type === 'password' ? (open ? 'text' : 'password') : type}
					id={label}
					{...register(valueInput, {
						required,
					})}
					placeholder={placeholder}
					disabled={disable}
					className="text-body body2 focus:text-header w-full bg-transparent outline-none"
				/>
				{type === 'password' && (
					<div
						className="h-fit w-fit flx shrink-0"
						onClick={() => setOpen(!open)}
					>
						{open ? (
							<EyeIcon className="icon shrink-0" />
						) : (
							<EyeSlashIcon className="icon shrink-0" />
						)}
					</div>
				)}
			</div>
			{
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
			}
		</div>
	)
}

export default Input

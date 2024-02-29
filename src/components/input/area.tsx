import React, { ReactNode } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

type Props = {
	children?: ReactNode
	placeholder: string
	register: UseFormRegister<any>
	valueInput: 'area' | 'about' | 'message'
	value?: string | undefined
	errors: FieldErrors<any>
	label?: string
}

export default function TextArea({
	children,
	placeholder,
	errors,
	register,
	label,
	valueInput,
}: Props) {
	return (
		<div className="flex flex-col w-full space-y-1">
			{label && (
				<label htmlFor={label}>
					<h5 className="capitalize">{label}</h5>
				</label>
			)}

			<textarea
				className="rounded-xl bg-button p-4 text-body body2 focus:text-header w-full resize-none  h-40 border border-gray"
				{...register(valueInput, { required: true })}
				id={label}
				placeholder={placeholder}
			>
				{children}
			</textarea>
			{errors[valueInput] && (
				<span className="text-red-500 text-[12px]">
					{errors[valueInput]?.message?.toString()}
				</span>
			)}
		</div>
	)
}

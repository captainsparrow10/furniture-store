import React from 'react'

export default function Check({text}:any) {
	return (
		<div className="w-fit cursor-pointer group">
			<p className="button">{text}</p>
			<div className="w-full bg-black h-[2px] group-hover:opacity-100 opacity-0 transition-all" />
		</div>
	)
}

"use client"
import Indications from '@/UI/Components/Navegation/Indications'
import Sponsor from '@/UI/Components/Sponsor'
import {
	EyeDropperIcon,
	EyeIcon,
	EyeSlashIcon,
} from '@heroicons/react/24/outline'
import React, { useState } from 'react'

export default function Page() {
	const [see, setSee] = useState(false)
	return (
		<main>
			<Indications />
			<div>
				
			</div>
			<Sponsor />

		</main>
	)
}

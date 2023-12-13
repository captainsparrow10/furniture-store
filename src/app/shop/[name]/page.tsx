'use client'
import Check from '@/components/Button/Check'
import Count from '@/components/Button/Count'
import CardItem from '@/components/Card/CardItem'
import Footer from '@/components/Common/Footer'
import Indications from '@/components/navegation/Indications'
import NavBar from '@/components/navegation/NavBar'
import SizeBtn from '@/components/navegation/Size'
import UrlIndications from '@/components/navegation/UrlIndications'
import { shopItems } from '@/utils/interface'
import { StarIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useState } from 'react'

function SingleProduct() {
	const [data, setData] = useState<shopItems[]>([])
	const [loading, setLoading] = useState(true)
	const [url, setUrl] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch('http://localhost:3000/api/shop')
				const fetchedData: shopItems[] = await res.json()
				setData(fetchedData)
				setLoading(false)
			} catch (error) {
				console.error('Error fetching data:', error)
				setLoading(false)
			}
		}

		if (data.length === 0) {
			fetchData()
		}
	}, [data])

	const changeUrl = (url:string) =>{
		setUrl(url)
	}
	return (
		<main>
			<NavBar />
			<UrlIndications />
			<div className="py-12 px-6">
				<div className="flex gap-6 ">
					<div>
						{!loading && (
							<>
								<img src={data[0].colors[0].urlList[0]} className="w-12 h-12" onClick={() => changeUrl(data[0].colors[0].urlList[0])} />
								<img src={data[0].colors[0].urlList[1]} className="w-12 h-12" onClick={() => changeUrl(data[0].colors[0].urlList[1])} />
								<img src={data[0].colors[0].urlList[2]} className="w-12 h-12" onClick={() => changeUrl(data[0].colors[0].urlList[2])} />
							</>
						)}
					</div>
					<div>
						{!loading && (
							<img
								src={ url.length == 0 ? data[0].colors[0].urlList[0] : url}
								className="w-full h-[300px]"
							/>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</main>
	)
}

export default SingleProduct

'use client'
import AlertStatus from '@/components/alert'
import { useAlert } from '@/lib/alerts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import React, { ReactNode, useState } from 'react'

export default function ReactQuery({ children }: { children: ReactNode }) {
	const [queryClient] = useState(() => new QueryClient())
	const alertStatus = useAlert((state) => state.alert)
	const changeView = useAlert((state) => state.changeView)
	return (
		<QueryClientProvider client={queryClient}>
			{alertStatus.view && (
				<AlertStatus
					changeView={changeView}
					title={alertStatus.title}
					status={alertStatus.status}
				/>
			)}
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

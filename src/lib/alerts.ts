import { create } from 'zustand'

interface alertInterface {
	alert: {
		view: boolean
		status: number
		title: string
	}
	changeView: () => void
	changeStatus: (title: string, status: number) => void
}

export const useAlert = create<alertInterface>()((set) => ({
	alert: {
		status: 0,
		title: '',
		view: false,
	},
	changeView: () =>
		set((state) => ({ ...state, alert: { ...state.alert, view: false } })),

	changeStatus: (title, status) =>
		set((state) => ({
			alert: {
				status,
				title,
				view: true,
			},
		})),
}))

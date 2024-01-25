import axios from 'axios'

const apiRoute = {
	register: '/api/auth/register',
	profile: 'api/auth/profile',
	cart: '/api/cart'
}



const apiUrl = axios.create({
	baseURL: process.env.NEXT_PUBLIC_URL,
})


export { apiUrl, apiRoute }


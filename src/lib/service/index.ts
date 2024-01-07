import CartService from './CartServer'
import ShopService from './ShopServer'
import UserService from './UserServer'

const Service = {
	shop: ShopService,
	cart: CartService,
	user: UserService,
}

export default Service

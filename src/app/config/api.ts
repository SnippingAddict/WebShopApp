import { environment } from 'src/environments/environment'

export const baseUrl = environment.production ? 'http://api.shoppingcart.com' : 'http://localhost:53103/api/'
export const productsUrl = baseUrl + 'ShoppingDetails'
export const cartUrl = baseUrl + 'Carts'
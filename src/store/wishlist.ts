import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { Database } from '../types/supabase'

// type Item = Database['public']['Tables']['products']['Row']

interface State {
	wishlist: string[]
}

interface Actions {
	addToWishList: (item: string) => void
	removeToWishList: (item: string) => void
}

export const useWishlistStore = create<State & Actions>()(
	devtools(
		persist(
			(set, get) => ({
				wishlist: [],
				addToWishList: (item: string) =>
					set((state) => ({
						wishlist: [...state.wishlist, item]
					})),
				removeToWishList: (item: string) =>
					set((state) => ({
						wishlist: state.wishlist.filter((i) => i !== item)
					}))
			}),

			{ name: 'wishlistStore' }
		)
	)
)

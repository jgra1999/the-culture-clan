import type { Database } from './supabase'

// type oversized = Database['public']['Tables']['inventory']

export interface Products {
	collection: string
	created_at: string
	dollar_price: number
	id: string
	image_url: string
	name: string
	pesos_price: number
	ref: string
	popularity: number
}

export interface Shirt {
	id: string
	color: string
	size: string
	ref: number
	stock: number
	created_at?: string
}

export interface DTF {
	id: string
	design_name: string
	collection: string
	stock: number
	created_at?: string
}

export interface billRegister {
	id: number
	title: string
	description: string
	dollar_amount: number
	pesos_amount: number
	date: string
	created_at: string
}

export interface incomeRegister {
	client_name: string
	client_email: string
	description: string
	dollar_amount: number
	pesos_amount: number
	date: string
	created_at: string
}

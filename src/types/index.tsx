import type { Database } from './supabase'

// type oversized = Database['public']['Tables']['inventory']

interface oversized {
	row: Database['public']['Tables']['inventory']['Row']
	insert: Database['public']['Tables']['inventory']['Insert']
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

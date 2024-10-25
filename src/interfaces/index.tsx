import type { Database } from '@/types/supabase'

interface oversized {
	row: Database['public']['Tables']['inventory']['Row']
	insert: Database['public']['Tables']['inventory']['Insert']
}

interface incomeItem {
	row: Database['public']['Tables']['income']['Row']
}

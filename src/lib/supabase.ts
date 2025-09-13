import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('Supabase URL:', supabaseUrl)
console.log('Supabase Key:', supabaseAnonKey ? 'Present' : 'Missing')

let supabase: any

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase environment variables')
    // Create a mock client instead of throwing an error
    supabase = {
        from: () => ({
            insert: () => Promise.resolve({ error: null, data: null }),
            select: () => Promise.resolve({ error: null, data: [] })
        })
    }
} else {
    supabase = createClient(supabaseUrl, supabaseAnonKey)
}

export { supabase }

// Database types
export interface WaitlistEntry {
    id?: number
    name: string
    email: string
    source?: string
    created_at?: string
}

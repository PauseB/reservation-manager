import { createClient } from "@supabase/supabase-js"
import { Database } from "./database.types"

const supabaseUrl = "https://beqtabocuujwbtsbrcoy.supabase.co"
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlcXRhYm9jdXVqd2J0c2JyY295Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5NDU0MzgsImV4cCI6MjA0NTUyMTQzOH0.mg7mpJFaMloRJh1PJ6m1pu9XqmieYWezK-RnreS7P7I"

export const supabase = createClient<Database>(supabaseUrl, anonKey)

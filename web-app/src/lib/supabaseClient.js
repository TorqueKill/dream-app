import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://tvtxwckassjcuelfmbme.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2dHh3Y2thc3NqY3VlbGZtYm1lIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNDQ2NTExOCwiZXhwIjoyMDMwMDQxMTE4fQ.EuT57_1XdjRmuEb0dI1qnmoTRuyH9Proh5sUNYdP7zE')
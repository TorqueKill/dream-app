import { json } from '@sveltejs/kit';
import { supabase } from "$lib/supabaseClient";

export async function POST({ request }) {

    const body = await request.json();

    console.log(body)

    
    const { data, error } = await supabase
    .from('users')
    .select()

    console.log(data)
    console.log(error)
    
    return json({data})
}
  
  
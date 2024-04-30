import { json } from '@sveltejs/kit';
import { supabase } from "$lib/supabaseClient";

export async function POST({ request }) {

    const body = await request.json();

    console.log(body)

    const { error } = await supabase
        .from('users')
        .insert({ username: body.username, points: body.points })
    
    return json({})
}
  
  
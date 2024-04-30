<script>
    import { username } from '$lib/store.js'
    import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

    let userInput = ""
    function handleClick() {
      $username = userInput
      goto('/home')
    }

    onMount(async () => {
      const resp = await fetch('api/fetchData', {
                method: 'POST',
                body: JSON.stringify({ 
                }),
      })

      let respObj = await resp.json()
      let data = respObj.data
      console.log(data)

    })


  </script>
  
  <style>
    .container {
      height: 40vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  
    input {
      margin: 0.5rem;
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px black solid;
      width: 80%;
      height: 50px;
    }
  
    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      cursor: pointer;
      width: 80%;
    }
  </style>
  
  <div class="bg-red-700">
    <div class="header bg-red-700 text-white text-5xl text-center font-bold py-5 flex items-center justify-center">
      <i class="material-icons" style="font-size: 45px;">emoji_events</i>
      <span>DreamTeam</span>
    </div>
  
    <div class="container bg-white rounded-tl-3xl rounded-tr-3xl">
      <input class="rounded-xl" type="text" bind:value={userInput} placeholder="Username">
      <button class="next-button bg-red-700 text-white rounded-xl my-3" on:click={handleClick}>Next</button>
    </div>
  </div>
  
  
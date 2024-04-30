<script>
    import { username } from '$lib/store.js'
    import { goto } from '$app/navigation';
  
    let userInput = ""
    function handleClick() {
      $username = userInput
      goto('/home')
    }

  </script>
  
  <style>
    .container {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  
    input {
      margin: 0.5rem;
      padding: 0.5rem;
      font-size: 1rem;
    }
  
    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      cursor: pointer;
    }
  </style>
  
  <div class="container">
    <h2>Enter Username</h2>
    <input type="text" bind:value={userInput} placeholder="Username">
    <button on:click={handleClick}>Next</button>
  </div>
  
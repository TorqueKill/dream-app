<!-- Scoreboard.svelte -->
<script>
  //red-700
  //black n white


 
    import PakFlag from '$lib/Imgs/lahore.jpg'
    import NewsFlag from '$lib/Imgs/Karachi.png'
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    let loading = true;
    onMount(() => {
      setTimeout(() => {
      loading = false;
    }, 3000); // hides the spinner after 5 seconds
    })

    let gray1 = "bg-gray-900"
    let gray2 = "bg-gray-800"
    let white = "bg-white"
    let gray3 = "bg-gray-400"
    let gray4 = "bg-gray-700"

    let red1 = "bg-red-600"
    let red2 = "bg-red-500"
    let stone = "bg-stone-200"
    let stone2 = "bg-slate-500"
    let stone3 = "bg-slate-900"
    
    // You can set your data here or fetch it from an API

    let team1 = [
      {
        name: 'Fakhar zaman',
        status: 'b Muhammad Amir',
        runs: '25',
        balls: '10',
        fours: '2',
        sixes: '1',
        strikeRate: '250.00'
      },
      {
        name: 'Cris Lynn',
        status: 'not out',
        runs: '25',
        balls: '10',
        fours: '2',
        sixes: '1',
        strikeRate: '250.00'
      },
      {
        name: 'Muhammad Hafeez (C)',
        status: 'not out',
        runs: '30',
        balls: '10',
        fours: '2',
        sixes: '2',
        strikeRate: '300.00'
      },
      {
        name: 'Shaheen Shah Afridi',
        status: 'did not bat',
        runs: '0',
        balls: '0',
        fours: '0',
        sixes: '0',
        strikeRate: '0'
      }
    ];

    //lahore bowling:
    //shaheen afridi 1-42 (3 overs)
    //muhammad hafeez 1-33 (2 overs)

    let team1_bowling = [
      {
        name: 'Shaheen Shah Afridi',
        overs: '3',
        runs: '42',
        wickets: '1',
        economy: '14.00'
      },
      {
        name: 'Muhammad Hafeez',
        overs: '2',
        runs: '33',
        wickets: '1',
        economy: '16.50'
      }
    ]

    let team2  = [
      {
        name: 'Sharjeel Khan',
        status: 'b Shaheen Afridi',
        runs: '0',
        balls: '1',
        fours: '0',
        sixes: '0',
        strikeRate: '0.00'
      },
      {
        name: 'Babar Azam',
        status: 'not out',
        runs: '50',
        balls: '18',
        fours: '5',
        sixes: '2',
        strikeRate: '277.77'
      },
      {
        name: 'Imad Wasim',
        status: 'b Muhammad Hafeez',
        runs: '25',
        balls: '10',
        fours: '3',
        sixes: '1',
        strikeRate: '250.00'
      },
      {
        name: 'Muhammad Amir',
        status: 'not out',
        runs: '0',
        balls: '1',
        fours: '0',
        sixes: '0',
        strikeRate: '0.00'
      },
    ];

    //karachi (bowling): 
    //muhammad amir 1- 45 (3 overs)
    //imad wasim 0-35 (2 overs) 

    let team2_bowling = [
      {
        name: 'Muhammad Amir',
        overs: '3',
        runs: '45',
        wickets: '1',
        economy: '15.00'
      },
      {
        name: 'Imad Wasim',
        overs: '2',
        runs: '35',
        wickets: '0',
        economy: '17.50'
      }
    ]
    

    let matchInfo = {
      date: 'Sat, 27 Apr',
      teams: {
        home: {
          name: 'Lahore Qalandars',
          score: '80/1',
          overs: '5'
        },
        away: {
          name: 'Karachi Kings',
          score: '75/2',
          overs: '5'
        }
      },
      result: 'LHR won by 5 runs',
      seriesStatus: 'PSL 5 of 5 (Tied 2-2)'
    };
  
    let currentTeam = 'Lahore Qalandars';
    let players = team1;
    let players_bowling = team1_bowling;

    function switchTeam(team) {
      currentTeam = team;
      players = team === 'Lahore Qalandars' ? team1 : team2;
      players_bowling = team === 'Lahore Qalandars' ? team1_bowling : team2_bowling;
    }


    let outerContainer 

  </script>

{#if loading}
<main>
  <div class="spinner"></div>
  <p class="text-2xl font-bold text-black my-5">Match In Progress</p>
</main>

{:else}
  <!-- outer container, nests scoreboard -->
  <div class="min-h-screen w-full bg-gray-200 py-8 px-8">
    <div class="bg-white p-4 min-h-screen text-black rounded">
      <div class="flex justify-between items-center mb-4 text-lg">
        <div>
          <div class="flex items-center">
            <img src={PakFlag} alt="Pakistan" class="w-10 h-8 mr-2"/>
            <p class="font-bold ">{matchInfo.teams.home.score} ({matchInfo.teams.home.overs})</p>
          </div>
        </div>
        <div>
          <div class="flex items-center">
            <img src={NewsFlag} alt="New Zealand" class="w-10 h-8 mr-2"/>
            <p>{matchInfo.teams.away.score} ({matchInfo.teams.away.overs})</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col mb-4 items-center text-lg">
        <p>{matchInfo.result}</p>
        <p>{matchInfo.seriesStatus}</p>
      </div>
    
      <div class="mb-4">
        <!--buttons for switching team players-->
        <div class="flex justify-center gap-4 mb-6">
          <button
              class={`px-4 py-2 rounded transition-colors ${currentTeam === 'Lahore Qalandars' ? 'bg-red-700 text-white' : 'bg-gray-800 text-gray-400'}`}
              on:click={() => switchTeam('Lahore Qalandars')}>
              Lahore Qalandars
          </button>
          <button
              class={`px-4 py-2 rounded transition-colors ${currentTeam === 'Karachi Kings' ? 'bg-red-700 text-white' : 'bg-gray-800 text-gray-400'}`}
              on:click={() => switchTeam('Karachi Kings')}>
              Karachi Kings
          </button>
      </div>
        <table class="min-w-full">
          <thead>
            <tr>
              <th class="text-left">Batting</th>
              <th>R</th>
              <th>B</th>
              <th>4s</th>
              <th>6s</th>
              <th>S/R</th>
            </tr>
          </thead>
          <tbody>
            {#each players as player}
            <tr class="border-b border-gray-700">
              <td class="py-2">
                <div class="font-semibold">{player.name}</div>
                <div class="text-xs text-gray-400">{player.status}</div>
              </td>
              <td>{player.runs}</td>
              <td>{player.balls}</td>
              <td>{player.fours}</td>
              <td>{player.sixes}</td>
              <td>{player.strikeRate}</td>
            </tr>
            {/each}
          </tbody>
        </table>
  
        <table class="min-w-full mt-8">
          <thead>
            <tr>
              <th class="text-left">Bowling</th>
              <th>O</th>
              <th>R</th>
              <th>W</th>
              <th>Econ</th>
            </tr>
          </thead>
          <tbody>
            {#each players_bowling as player}
            <tr class="border-b border-gray-700">
              <td class="py-2">
                <div class="font-semibold">{player.name}</div>
              </td>
              <td>{player.overs}</td>
              <td>{player.runs}</td>
              <td>{player.wickets}</td>
              <td>{player.economy}</td>
            </tr>
            {/each}
          </tbody>
      </div>
      <div class="next-button flex justify-center my-5 p-2 rounded bg-red-700 text-white" on:click={()=>{goto('/results')}}>
        <button class=" text-lg">Next</button>
      </div>
    </div>
  
    </div>
{/if}

  
  <style>
    main {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }
    th, td {
      padding: 0.5rem;
      text-align: center;
    }
    th {
      text-transform: uppercase;
      font-size: 0.75rem;
    }
    td:first-child {
      text-align: left;
    }

    .next-button:hover {
      cursor: pointer;
    }

    .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-left-color: rgb(255, 0, 0);
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  </style>
  
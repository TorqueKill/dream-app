<script>
    import { globalSelectedPlayers } from '$lib/store.js'
    import { username } from '$lib/store.js'
    import { onMount } from 'svelte';
    

    let gray1 = "bg-white"
    let gray2 = "bg-red-700"
    let white = "bg-gray-200"
    let gray3 = "bg-gray-400"
    let gray4 = "bg-gray-200"

    let totalPool = 1400;
    let totalPoints = 0;
    let reward = 0;

    let playerNames = [];
    let selectedPlayers = $globalSelectedPlayers;

    onMount(async () => {

        selectedPlayers.forEach(player => {
            playerNames.push(player.name)
        });
        playerNames = playerNames;

        playerPoints.forEach(player => {
            player.points = player.runs + (player.boundaries * 4) + (player.sixes * 6) + (player.wickets * 35);
        });

        playerPoints.sort((a, b) => b.points - a.points);
        playerPoints = playerPoints;

        totalPoints = playerPoints.reduce((acc, player) => {
        if (playerNames.includes(player.name)) {
            return acc + player.points;
        } else {
            return acc;
        }
        }, 0);

        reward = (totalPoints/200) * totalPool;

        const resp = await fetch('api/addData', {
                method: 'POST',
                body: JSON.stringify({ 
                    username: $username,
                    points: Number(totalPoints),
                }),
            })
        })

    let playerPoints = [
        { name: "Fakhar Zaman", runs: 25, boundaries: 10, sixes: 1, wickets: 0 },
        { name: "Shaheen Shah Afridi", runs: 0, boundaries: 0, sixes: 0, wickets: 1 },
        { name: "Muhammad Hafeez", runs: 30, boundaries: 10, sixes: 2, wickets: 0 },
        { name: "Cris Lynn", runs: 25, boundaries: 10, sixes: 2, wickets: 0 },
        { name: "Imad Wasim", runs: 25, boundaries: 10, sixes: 1, wickets: 0 },
        { name: "Muhammad Amir", runs: 0, boundaries: 1, sixes: 0, wickets: 0 },
        { name: "Sharjeel Khan", runs: 0, boundaries: 1, sixes: 0, wickets: 0 },
        { name: "Babar Azam", runs: 50, boundaries: 18, sixes: 2, wickets: 0 },
    ];

</script>

<div class="body {gray2}">
    <div class="header flex flex-col items-center text-white py-4">
        <p class="text-3xl">Your Points: {totalPoints}</p>
    </div>
    
    
    <div class="player-cards-container {gray1} text-black rounded-tl-3xl rounded-tr-3xl py-2">
        {#each playerPoints as player}
            <div class="player-card {gray4} rounded-2xl" class:selected={playerNames.includes(player.name)}>
                <p class="font-bold">({player.points}) {player.name}</p>
                <p>Runs: {player.runs}</p>
                <p>Boundaries: {player.boundaries}</p>
                <p>Sixes: {player.sixes}</p>
                <p>Wickets: {player.wickets}</p>
                <p>Run Bonus: {player.runs >= 30 ? '+30' : '0'}</p>
            </div>
        {/each}
    </div>
</div>



<style>
    .player-cards-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .player-card {
        padding: 10px;
        margin: 10px;
        width: 180px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    }

    .player-card.selected {
    border: red dotted 2px;
    }
</style>
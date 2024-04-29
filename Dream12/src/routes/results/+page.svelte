<script>
    import { globalSelectedPlayers } from '$lib/store.js'

    let gray1 = "bg-gray-900"
    let gray2 = "bg-gray-800"
    let white = "bg-white"
    let gray3 = "bg-gray-400"
    let gray4 = "bg-gray-700"

    let totalPool = 1400;

    let playerNames = [];
    //let playerNames = ["Fakhar Zaman", "Shaheen Shah Afridi", "Muhammad Hafeez", "Cris Lynn"]
    let selectedPlayers = $globalSelectedPlayers;
    selectedPlayers.forEach(player => {
       playerNames.push(player.name)
    });

    let playerPoints = [
        { name: "Fakhar Zaman", runs: 45, boundaries: 5, sixes: 2, wickets: 1 },
        { name: "Shaheen Shah Afridi", runs: 60, boundaries: 7, sixes: 4, wickets: 3 },
        { name: "Muhammad Hafeez", runs: 25, boundaries: 3, sixes: 1, wickets: 0 },
        { name: "Cris Lynn", runs: 25, boundaries: 3, sixes: 1, wickets: 0 },
        { name: "Imad Wasim", runs: 25, boundaries: 3, sixes: 1, wickets: 0 },
        { name: "Muhammad Amir", runs: 25, boundaries: 3, sixes: 1, wickets: 0 },
        { name: "Sharjeel Khan", runs: 25, boundaries: 3, sixes: 1, wickets: 0 },
        { name: "Babar Azam", runs: 25, boundaries: 3, sixes: 1, wickets: 0 },
    ];

    let totalPoints = playerPoints.reduce((acc, player) => {
        if (playerNames.includes(player.name)) {
            return acc + player.runs + (player.boundaries * 4) + (player.sixes * 6) + (player.wickets * 10);
        } else {
            return 0;
        }
    }, 0);  // Initial accumulator value is 0

    let reward = (totalPoints/200) * totalPool;

</script>

<div class="body {gray1}">
    <div class="header flex flex-col items-center text-white py-4">
        <p class="text-3xl">Reward: PKR {reward}</p>
        <p class="text-2xl">Points: {totalPoints}</p>
    </div>
    
    
    <div class="player-cards-container {gray2} text-white rounded-3xl py-2">
        {#each playerPoints as player}
            <div class="player-card {gray4} rounded-md" class:selected={playerNames.includes(player.name)}>
                <p class="font-bold">{player.name}</p>
                <p>Runs: {player.runs}</p>
                <p>Boundaries: {player.boundaries}</p>
                <p>Sixes: {player.sixes}</p>
                <p>Wickets: {player.wickets}</p>
                <p>Run Bonus: {player.runs >= 30 ? '+30' : 'No Bonus'}</p>
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
        width: 200px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    }

    .player-card.selected {
    border: white dotted 1px;}
</style>
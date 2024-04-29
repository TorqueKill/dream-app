<script>
    //import { globalSelectedPlayers } from '$lib/store.js'

    //let selectedPlayers = $globalSelectedPlayers;
    export const globalSelectedPlayers = writable([
    { name: "Player 1", runs: 45, boundaries: 5, sixes: 2, wickets: 1 },
    { name: "Player 2", runs: 60, boundaries: 7, sixes: 4, wickets: 3 },
    { name: "Player 3", runs: 25, boundaries: 3, sixes: 1, wickets: 0 }
    ]);


</script>

<div class="player-cards-container">
    {#each $globalSelectedPlayers as player}
        <div class="player-card">
            <h3>{player.name}</h3>
            <p>Runs: {player.runs}</p>
            <p>Boundaries: {player.boundaries}</p>
            <p>Sixes: {player.sixes}</p>
            <p>Wickets: {player.wickets}</p>
            <p>Run Bonus: {player.runs >= 30 ? '+30' : 'No Bonus'}</p>
        </div>
    {/each}
</div>

<style>
    .player-cards-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .player-card {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
        width: 200px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    }

    .player-card h3 {
        color: #333;
    }
</style>

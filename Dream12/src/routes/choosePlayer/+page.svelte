<script>
    import { writable } from 'svelte/store';
    import test from '$lib/Imgs/test.png'
    let selectedPlayers = writable([]);

    let players = [
        { name: "Fakhar Zaman", points: 100, team: "Team A", image: test },
        { name: "Shaheen Shah Afridi", points: 100, team: "Team A", image: "path/to/image2.jpg" },
        { name: "Muhammad Hafeez", points: 100, team: "Team A", image: "path/to/image3.jpg" },
        { name: "Cris Lynn", points: 100, team: "Team A", image: "path/to/image4.jpg" },
        { name: "Imad Wasim", points: 100, team: "Team B", image: "path/to/image5.jpg" },
        { name: "Muhammad Amir", points: 100, team: "Team B", image: "path/to/image6.jpg" },
        { name: "Sharjeel Khan", points: 100, team: "Team B", image: "path/to/image7.jpg" },
        { name: "Babar Azam", points: 100, team: "Team B", image: "path/to/image8.jpg" },
    ];

    function togglePlayerSelection(player) {
        selectedPlayers.update(current => {
            const index = current.findIndex(p => p.name === player.name);
            if (index !== -1) {
                return current.filter(p => p.name !== player.name); // Remove player if already selected
            } else if (current.filter(p => p.team === player.team).length < 2) {
                return [...current, player]; // Add player if less than 2 from the same team
            }
            return current; // Return current state if no changes
        });
    }

</script>

<div class="header bg-red-700 text-white text-3xl text-center font-bold py-5">
    Create Team
</div>

<div class="progress-container">
    <div class="progress-bar" style="width: {($selectedPlayers.length * 100) / 4}%;"></div>
</div>


<div class="teams-container">
    <div class="team">
        <h2>Team A</h2>
        {#each players.filter(p => p.team === 'Team A') as player (player.name)}
            <div class="player-card {$selectedPlayers.some(p => p.name === player.name) ? 'selected' : ''}" on:click={() => togglePlayerSelection(player)}>
                <img src={player.image} alt={`Image of ${player.name}`} class="player-image"/>
                <div class="player-info">
                    <h3>{player.name}</h3>
                    <p>{player.points}</p>
                </div>
            </div>
        {/each}
    </div>
    <div class="team">
        <h2>Team B</h2>
        {#each players.filter(p => p.team === 'Team B') as player (player.name)}
            <div class="player-card {$selectedPlayers.some(p => p.name === player.name) ? 'selected' : ''}" on:click={() => togglePlayerSelection(player)}>
                <img src={player.image} alt={`Image of ${player.name}`} class="player-image"/>
                <div class="player-info">
                    <h3>{player.name}</h3>
                    <p>{player.points}</p>
                </div>
            </div>
        {/each}
    </div>
</div>




<div class="button-container">
    <button class="next-button"><a href="/Scoreboard">Next</a></button>
</div>


<style>
.teams-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
}

.team {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%; /* Each team takes up half the width */
}


.player-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}

.player-info h3, .player-info p {
    margin: 5px;
    text-align: center;
}

.progress-container {
    background-color: #eee;
    margin: 10px;
}

.progress-bar {
    height: 100%;
    background-color: green; /* Green */
    transition: width 0.4s ease;
    padding: 10px;
    border: black solid 2px;
}

.button-container {
    margin-top: 20px;
    display: flex;
    justify-content: center; /* Centers content horizontally */
    width: 100%; /* Takes full width to allow centering */
}


.next-button {
    width: 100px;
    border: black solid 2px;
    border-radius: 10px;
    padding: 10px;
    margin: auto;
}

.teams-container {
    display: flex;
    justify-content: space-between;
}

.team {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 48%; /* Adjusted for a slight gap between columns */
}

.player-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}

.player-info h3, .player-info p {
    margin: 5px;
    text-align: center;
}

.player-card {
    cursor: pointer;
    margin: 10px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    background: white;
    border-radius: 10px;
    width: 100%;
    transition: background-color 0.3s ease;
}

.player-card.selected {
    background-color: #4CAF50; /* Green background for selected players */
    color: white;
}


</style>

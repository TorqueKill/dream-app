<script>
    import { writable } from 'svelte/store';
    import Fakhar from '$lib/Imgs/Fakhar.png'
    import Shaheen from '$lib/Imgs/Shaheen.jpeg'
    import Hafeez from '$lib/Imgs/Hafeez.jpeg'
    import Lynn from '$lib/Imgs/Cris.jpeg'
    import Imad from '$lib/Imgs/Imad.jpeg'
    import Amir from '$lib/Imgs/Amir.jpeg'
    import Sharjeel from '$lib/Imgs/Sharjeel.jpeg'
    import Babar from '$lib/Imgs/Babar.jpeg'
    import { globalSelectedPlayers } from '$lib/store.js'
    import { goto } from '$app/navigation';

    let selectedPlayers = writable([]);

    let players = [
        { name: "Shaheen Shah Afridi", points: 100, team: "Team A", image: Shaheen },
        { name: "Fakhar Zaman", points: 50, team: "Team A", image: Fakhar },
        { name: "Cris Lynn", points: 20, team: "Team A", image: Lynn },
        { name: "Muhammad Hafeez", points: 10, team: "Team A", image: Hafeez },
        
        { name: "Babar Azam", points: 100, team: "Team B", image: Babar },
        { name: "Imad Wasim", points: 50, team: "Team B", image: Imad },
        { name: "Sharjeel Khan", points: 20, team: "Team B", image: Sharjeel },
        { name: "Muhammad Amir", points: 10, team: "Team B", image: Amir },
    ];

    function togglePlayerSelection(player) {
        
        selectedPlayers.update(current => {
            const index = current.findIndex(p => p.name === player.name);
            if (index !== -1) {
                totalBudget = totalBudget + player.points
                return current.filter(p => p.name !== player.name); // Remove player if already selected
            } else if (current.filter(p => p.team === player.team).length < 2) {
                if (totalBudget - player.points >= 0) {
                    totalBudget = totalBudget - player.points
                    return [...current, player]; // Add player if less than 2 from the same team
                } else {
                    return current
                }
                
            }
            return current; // Return current state if no changes
        });
        $globalSelectedPlayers = selectedPlayers
    }

    let totalBudget = 200;

    function next() {
        let currentSelectedPlayers = [];

        const unsubscribe = selectedPlayers.subscribe(value => {
            currentSelectedPlayers = value;
        });
        unsubscribe(); // Immediately unsubscribe after getting the value

        // Now you can use currentSelectedPlayers as a regular array
        $globalSelectedPlayers = currentSelectedPlayers;

        goto('/Scoreboard')
    }

</script>

<div class="flex flex-col bg-red-700">
    <div class="header text-white text-3xl text-center font-bold py-5">
        Create Team
    </div>
    
    <div class=" bg-white rounded-tl-3xl rounded-tr-3xl m-0">
    
        <div class="progress-container rounded-3xl">
            <div class="progress-bar  rounded-3xl" style="width: {($selectedPlayers.length * 100) / 4}%;"></div>
        </div>
        
        <!--Budget Div-->
        <div class="budget-container flex justify-center items-center text-2xl mx-4 my-4">
            <h2 class="font-bold">
              <!-- Show remaining budget on update-->
                Credits: {totalBudget}
            </h2>
        </div>
        
        
        <div class="teams-container">
            <div class="team">
                <p class="font-bold pb-2">Lahore Qalandars</p>
                {#each players.filter(p => p.team === 'Team A') as player (player.name)}
                <div class="player-card w-32 h-32 border {$selectedPlayers.some(p => p.name === player.name) ? 'border-red-700 border-2' : 'border-gray-300'}" on:click={() => togglePlayerSelection(player)}>
                    <div class="flex h-full">
                        <div class="w-1/3 h-full">
                            <img src={player.image} alt={`Image of ${player.name}`} class="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"/>
                        </div>
                        <div class="w-2/3 h-full flex flex-col justify-center items-start p-2">
                            <h3 class="text-lg font-semibold">{player.name}</h3>
                            <p class="text-sm">{player.points}</p>
                        </div>
                    </div>
                </div>
            {/each}
        
            </div>
            <div class="team">
                <h2 class="font-bold pb-2">Karachi Kings</h2>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                {#each players.filter(p => p.team === 'Team B') as player (player.name)}
                <div class="player-card w-32 h-32 border {$selectedPlayers.some(p => p.name === player.name) ? 'border-red-700 border-2' : 'border-gray-300'}" on:click={() => togglePlayerSelection(player)}>
                    <div class="flex h-full">
                        <div class="w-1/3 h-full">
                            <img src={player.image} alt={`Image of ${player.name}`} class="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"/>
                        </div>
                        <div class="w-2/3 h-full flex flex-col justify-center items-start p-2">
                            <h3 class="text-lg font-semibold">{player.name}</h3>
                            <p class="text-sm">{player.points}</p>
                        </div>
                    </div>
                </div>
            {/each}
            </div>
        </div>
        
        
        
        
        <div class="button-container ">
            <button class="next-button bg-red-700 text-white" on:click={next}>Next</button>
        </div>
    </div>
    
</div>




<style>
.teams-container {
    display: flex;
    width: 100%;
    justify-content: center;
}

.team {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%; /* Each team takes up half the width */
}

.progress-container {
    background-color: #eee;
    margin: 10px;
}

.progress-bar {
    height: 100%;
    background-color: #5cb85c; /* Green */
    transition: width 0.4s ease;
    padding: 10px;
    border: gray solid 2px;
}

.button-container {
    margin-top: 20px;
    display: flex;
    justify-content: center; /* Centers content horizontally */
    width: 100%; /* Takes full width to allow centering */
}


.next-button {
    width: 100px;
    width: 300px;
    border-radius: 10px;
    padding: 10px;
    margin: auto;
    margin-bottom: 30px;
}

.team {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 48%; /* Adjusted for a slight gap between columns */
}

.player-card {
    cursor: pointer;
    margin: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    background: white;
    border-radius: 10px;
    width: 90%;
    height: 100px;
    transition: background-color 0.3s ease;
}

</style>

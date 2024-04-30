<script>
    import { onMount, afterUpdate } from 'svelte';

    let users = [];
    let positions = new Map();
    let interval;
    let TOTAL_POOL = 5000;
    // Distribution ratios for top 3 and the rest
    let scoreDistribution = [80, 20];
    let running = true; // Control flag for the interval

    onMount(() => {
        interval = setInterval(() => {
            if (running) {
                users.push({
                    username: "User" + Math.floor(Math.random() * 10000),
                    points: Math.floor(Math.random() * 1000),
                    reward: 0
                });
                updatePositions();
                users.sort((a, b) => b.points - a.points);
                users = [...users];
            }
        }, 2000);
    });

    function stopAndDistributeRewards() {
        clearInterval(interval);
        running = false; // Stop adding new users
        distributeRewards();
    }

    function distributeRewards() {
        let totalTopThree = (TOTAL_POOL * scoreDistribution[0]) / 100;
        let totalRest = (TOTAL_POOL * scoreDistribution[1]) / 100;

        console.log("Total: ", totalTopThree+totalRest, "Top Three: ", totalTopThree, "Rest: ", totalRest)
        let topThree = users.slice(0, 3);
        let rest = users.slice(3);
        
        topThree.forEach(user => user.reward += Math.floor(totalTopThree / topThree.length));
        rest.forEach(user => user.reward += Math.floor(totalRest / rest.length));

        users = [...topThree, ...rest];
    }

    afterUpdate(updatePositions);
    function updatePositions() {
        users.forEach(user => {
            const elem = document.getElementById(user.username);
            if (elem) {
                const newPos = elem.offsetTop;
                const oldPos = positions.get(user.username) || newPos;
                if (newPos !== oldPos) {
                    const deltaY = newPos - oldPos;
                    elem.animate([
                        { transform: `translateY(${deltaY * -1}px)` },
                        { transform: 'translateY(0)' }
                    ], {
                        duration: 500,
                        easing: 'ease-out'
                    });
                }
                positions.set(user.username, newPos);
            }
        });
    }
</script>

<div class="max-w-4xl mx-auto mt-10">
    <h1 class="text-2xl font-bold text-center">User Points Board</h1>
    <div class="flex justify-center mt-4">
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" on:click={stopAndDistributeRewards}>
            Stop and Distribute Rewards
        </button>
    </div>
    <div class="mt-8">
        {#each users as user, index (user.username)}
            {#if !running && index < 3}
                <div id={user.username} class='flex justify-between items-center p-4 my-2 bg-yellow-200 rounded-lg shadow-md top3'>
                    <span class="text-lg font-medium">{user.username}</span>
                    <span class="text-lg font-semibold text-blue-500">{user.points} Points</span>
                    {#if user.reward > 0}
                        <span class="text-lg font-semibold text-green-500">Reward: PKR {user.reward}</span>
                    {/if}
                </div>
            {:else}
                <div id={user.username} class='flex justify-between items-center p-4 my-2 bg-gray-100 rounded-lg shadow-md'>
                    <span class="text-lg font-medium">{user.username}</span>
                    <span class="text-lg font-semibold text-blue-500">{user.points} Points</span>
                    {#if user.reward > 0}
                        <span class="text-lg font-semibold text-green-500">Reward: PKR {user.reward}</span>
                    {/if}
                </div>
            {/if}
        {/each}
    </div>
</div>

<style>
    .top3 {
        background-color: rgb(236, 221, 135); /* Highlight top three with a gold background */
        border: 2px solid darkgoldenrod;
    }
</style>

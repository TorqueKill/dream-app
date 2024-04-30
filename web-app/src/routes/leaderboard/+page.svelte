<script>
    import { onMount,onDestroy } from 'svelte';
    let BASE_FARE = 50;
    let users = [];
    let interval;
    let TOTAL_POOL = 5000;
    let SHARE = 30; // 30% of the total pool
    // Distribution ratios for top 3 and the rest
    let scoreDistribution = [80, 20];
    let running = true; // Control flag for the interval

    onMount(async () => {
        interval = setInterval(async () => {
            if (running) {
                // users.push({
                //     username: "User" + Math.floor(Math.random() * 10000),
                //     points: Math.floor(Math.random() * 1000),
                //     reward: 0
                // });
                const resp = await fetch('api/fetchData', {
                    method: 'POST',
                    body: JSON.stringify({ 
                    }),
                })
                let respObj = await resp.json()
                let data = respObj.data
                console.log(data)

                //Remove usernames with '{}' or empty string 
                data = data.filter(user => user.username && user.username !== '{}')

                users = data


                users.sort((a, b) => b.points - a.points);
                users = [...users];
            }
        }, 5000);

        return () => clearInterval(interval);
    });

    function stopAndDistributeRewards() {
        clearInterval(interval);
        running = false; // Stop adding new users
        distributeRewards();
    }

    function distributeRewards() {
        //set total pool based on people present in the game
        TOTAL_POOL = users.length * BASE_FARE;
        let POOL = TOTAL_POOL * SHARE / 100;
        let totalTopThree = (POOL * scoreDistribution[0]) / 100;
        let totalRest = (POOL * scoreDistribution[1]) / 100;

        console.log("Total: ", totalTopThree+totalRest, "Top Three: ", totalTopThree, "Rest: ", totalRest)
        let topThree = users.slice(0, 3);
        let rest = users.slice(3);
        
        topThree.forEach(user => user.reward = Math.floor(totalTopThree / topThree.length));
        rest.forEach(user => user.reward = Math.floor(totalRest / rest.length));

        users = [...topThree, ...rest];

        console.log(users)
    }

    //on destroy, clear interval
    onDestroy(() => {
        clearInterval(interval);
    });

    function makeDummyUserName() {
        return "User" + Math.floor(Math.random() * 10000);
    }



</script>
<div>
<div class="max-w-4xl mx-auto mt-10">
    <h1 class="text-2xl font-bold text-center ">User Points Board</h1>
    <div class="flex justify-center mt-4 space-x-10">
        <!--SHOW TOTAL POOL-->
        {#if !running}
            <div class="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                Total Pool: PKR {TOTAL_POOL}
            </div>
        {/if}

        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" on:click={stopAndDistributeRewards}>
            Stop and Distribute Rewards
        </button>

        <!--SHOW PROFITS-->
        {#if !running}
            <div class="bg-green-500 text-white font-bold py-2 px-4 rounded">
                Profits: PKR {TOTAL_POOL * SHARE / 100}
            </div>
        {/if}
    </div>
    <div class="mt-8">
        {#each users as user, index (user.id)}
            {#if !running && index < 3}
                <div id={user.id} class='flex justify-between items-center p-4 my-2 bg-yellow-200 rounded-lg shadow-md top3'>
                    <span class="text-lg font-medium">{user.username}</span>
                    <span class="text-lg font-semibold text-blue-500">{user.points} Points</span>
                    {#if user.reward > 0}
                        <span class="text-lg font-semibold text-green-500">Reward: PKR {user.reward}</span>
                    {/if}
                </div>
            {:else}
                <div id={user.id} class='flex justify-between items-center p-4 my-2 bg-gray-100 rounded-lg shadow-md'>
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
</div>

<style>
    .top3 {
        background-color: rgb(236, 221, 135); /* Highlight top three with a gold background */
        border: 2px solid darkgoldenrod;
    }
</style>

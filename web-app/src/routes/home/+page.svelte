<script>
    import { goto } from '$app/navigation';
    let red1 = "bg-red-700"
    let red2 = "bg-red-500"
    let stone = "bg-stone-200"
    let stone2 = "bg-slate-500"
    let stone3 = "bg-slate-900"
</script>



<div class="main w-full {red1}">
    <div class="header {red1} text-white text-5xl text-center font-bold py-5 flex items-center justify-center">
        <i class="material-icons" style="font-size: 45px;">emoji_events</i>
        <span>DreamTeam</span>
    </div>
    

    <div class="headerDrawer text-white rounded-tl-3xl rounded-tr-3xl">
        <nav class="navbar bg-stone-100">
            <ul class="nav-menu">
                <li class="nav-item selected"><a href="#cricket"><i class="material-icons">sports_cricket</i>Cricket</a></li>
                <li class="nav-item disabled"><a href="#football"><i class="material-icons">sports_soccer</i>Football</a></li>
                <li class="nav-item disabled"><a href="#hockey"><i class="material-icons">sports_hockey</i>Hockey</a></li>
                <li class="nav-item disabled"><a href="#tennis"><i class="material-icons">sports_tennis</i>Tennis</a></li>
            </ul>
        </nav>
    </div>    
      

    <div class="body rounded-md w-full h-full flex flex-col items-center p-0 ">
        <!-- My Match Section -->
        <div class="myMatch bg-white w-full p-5">
            <h2 class="section-title text-xl font-bold">My Matches</h2>
            <div class="goto-box" on:click={()=>{goto('/choosePlayer')}}>
                <div class="matchCard border-black border-2 rounded">
                    <div class=" bg-red-500 w-full font-bold text-white">PSL</div>
                    <div class="teams flex">
                        <div class="team left text-center text-lg font-bold">Lahore Qalandars</div>
                        <div class="time-remaining text-base text-red-700 font-bold">2h 34m</div>
                        <div class="team right text-center text-lg font-bold">Karachi Kings</div>
                        
                    </div>
                    <div class="prize bg-gray-500 p-2 mt-2 text-center text-sm text-white">Entry Fee: PKR 50</div>
                    <div class="prize {stone3} p-2  text-center text-sm text-white">Prize Pool: PKR 5000</div>
                </div>  
            </div>
                      
        </div>

        <!-- Upcoming Matches Section -->
        <div class="upcomingMatches bg-white w-full p-5">
            <h2 class="section-title text-xl font-bold">Upcoming Matches</h2>
                <div class="matchCard border-black border-2 rounded opacity-50">
                    <div class=" bg-red-500 w-full font-bold text-white">PSL</div>
                    <div class="teams flex">
                        <div class="team left text-center text-lg font-bold">Islamabad United</div>
                        <div class="time-remaining text-base text-red-700 font-bold">2h 34m</div>
                        <div class="team right text-center text-lg font-bold">Multan Sultans</div>
                        
                    </div>
                    <div class="prize bg-gray-500 p-2 mt-2 text-center text-sm text-white">Entry Fee: PKR 50</div>
                    <div class="prize {stone3} p-2  text-center text-sm text-white">Prize Pool: PKR 5000</div>
                </div>  
                <div class="matchCard border-black border-2 rounded opacity-50">
                    <div class=" bg-red-500 w-full font-bold text-white">PSL</div>
                    <div class="teams flex">
                        <div class="team left text-center text-lg font-bold">Lahore Qalandars</div>
                        <div class="time-remaining text-base text-red-700 font-bold">2h 34m</div>
                        <div class="team right text-center text-lg font-bold">Peshawar Zalmi</div>
                        
                    </div>
                    <div class="prize bg-gray-500 p-2 mt-2 text-center text-sm text-white">Entry Fee: PKR 50</div>
                    <div class="prize {stone3} p-2  text-center text-sm text-white">Prize Pool: PKR 5000</div>
                </div>  
                <div class="matchCard border-black border-2 rounded opacity-50">
                    <div class=" bg-red-500 w-full font-bold text-white">PSL</div>
                    <div class="teams flex">
                        <div class="team left text-center text-lg font-bold">Quetta Gladiators</div>
                        <div class="time-remaining text-base text-red-700 font-bold">2h 34m</div>
                        <div class="team right text-center text-lg font-bold">Karachi Kings</div>
                        
                    </div>
                    <div class="prize bg-gray-500 p-2 mt-2 text-center text-sm text-white">Entry Fee: PKR 50</div>
                    <div class="prize {stone3} p-2  text-center text-sm text-white">Prize Pool: PKR 5000</div>
                </div>  


        </div>
    </div>
</div>

<style>
    /* Style for the body and its contents */
.body {
    padding: 0px;
    width: 100%;
}

.myMatch, .upcomingMatches {
    width: 100%;
}

.section-title {
    text-align: left; /* Aligns titles to the left */
    margin-left: 5%; /* Provides a little left margin for aesthetics */
}

.goto-box:hover {
    cursor: pointer;
}

/* Match card styling to make them stand out */
.matchCard {
    width: 90%;
    min-height: 150px;
    margin: 10px auto; /* Auto margins for horizontal centering */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.5em;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Adds a subtle shadow for better visibility */
    display: flex;
    flex-direction: column;
}

.headerDrawer {
    width: 100%;
    overflow: hidden;
    border-bottom: black 1px solid;
}

.navbar {
    display: flex;
    justify-content: center;
    padding: 10px 0;
}

.nav-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
}

.nav-item {
    margin: 0 20px;
}

.team {
    width: 50%;
    display: inline-block;
}

.time-remaining {
    width: 100%;
    text-align: center;
    margin: 10px 0;
}

.prize {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
}

.nav-item a {
    display: flex;
    align-items: center;
    gap: 10px; /* Space between icon and text */
    text-decoration: none; /* Removes underline from links */
    font-size: 16px; /* Sets size of the font */
    font-weight: bold; /* Makes font bold */
}

.material-icons {
    font-size: 24px; /* Icon size */
    color: #fff; /* Icon color */
}

.nav-item a {
    display: flex;
    flex-direction: column; /* Stack the icon and text vertically */
    align-items: center;
    gap: 5px; /* Space between icon and text */
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
}

.nav-item i {
    font-size: 24px; /* Icon size */
}

.selected a, .selected i {
    color: red; /* Red color for selected item */
    cursor: default; /* Default cursor for the selected item */
}

.selected a {
    border-bottom: 4px solid red; /* Solid red border at the bottom */
}

.disabled a, .disabled i {
    color: #000000; /* Dim color for unselectable items */
    cursor: not-allowed; /* Cursor indicates not allowed action */
    pointer-events: none; /* Prevents click events */
}


</style>
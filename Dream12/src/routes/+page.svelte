<script>
    let red1 = "bg-red-600"
    let red2 = "bg-red-500"
    let stone = "bg-stone-200"
    let stone2 = "bg-slate-500"
    let stone3 = "bg-slate-900"

</script>



<div class="main w-full">
    <div class="header {red1} text-stone-300 text-5xl text-center font-bold py-5">
        DreamTeam
    </div>

    <div class="headerDrawer bg-gray-800 text-white">
        <nav class="navbar {stone}">
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
        <div class="myMatch {stone} w-full p-5">
            <h2 class="section-title">My Matches</h2>
            <a href="/choosePlayer">
                <div class="matchCard my-5 border-black border-2 rounded">
                    <div class="{stone3} w-full font-bold text-stone-300">PSL</div>
                    <div class="teams flex space-x-2">
                        <div class="team left text-center text-lg ">Lahore Qalandars</div>
                        <div class="team right text-center text-lg">Karachi Kings</div>
                    </div>
                    <div class="time-remaining text-base text-red-700 font-bold">2h 34m</div>
                    <div class="prize {stone3} p-2 mt-2 text-center text-sm text-stone-300">PKR 5000</div>
                </div>  
            </a>
                      
        </div>

        <!-- Upcoming Matches Section -->
        <div class="upcomingMatches {stone} w-full p-5">
            <h2 class="section-title">Upcoming Matches</h2>
            <div class="matchCard p-10 my-5 border-black border-2 rounded">
                Upcoming Match Card 1
            </div>
            <div class="matchCard p-10 my-5 border-black border-2 rounded">
                Upcoming Match Card 2
            </div>
            <div class="matchCard p-10 my-5 border-black border-2 rounded">
                Upcoming Match Card 3
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
    margin: 0 auto; /* Centers the sections */
}

.section-title {
    text-align: left; /* Aligns titles to the left */
    margin-left: 5%; /* Provides a little left margin for aesthetics */
    font-size: 2em; /* Increases the font size for visibility */
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
    align-items: center;
    justify-content: center;
}

.headerDrawer {
    width: 100%;
    background-color: #ffffff;
    overflow: hidden;
    border-bottom: black 2px solid;
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
    color: white; /* Sets link color */
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
    color: white;
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
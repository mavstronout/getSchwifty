/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/


/* HTML5 display-role reset for older browsers */
// Version without passing functions

var plumbusvalue = 0;
var defensevalue = 0;
var speedvalue = 0;
var megavalue = 0;
var goalnumber = 0;
var wins = 0;
var losses = 0;
var crystaltotal = 0;

//game start - display wins and losses

// assign random value to each stone and generate the goal score
function randomizecrystalvalue (){
    plumbusvalue = Math.floor(Math.random() * 12) + 1;
    defensevalue = Math.floor(Math.random() * 12) + 1;
    speedvalue = Math.floor(Math.random() * 12) + 1;
    megavalue = Math.floor(Math.random() * 12) + 1;
    console.log("Values in order: Plumbus, Defense, Speed, Mega");
    console.log(plumbusvalue, defensevalue, speedvalue, megavalue);
};

function randomizegoalnumber () {
    goalnumber = Math.floor(Math.random() * 102) + 19;
    console.log("Goal number is...")
    console.log(goalnumber)
    $("#GoalNumber").text(goalnumber);
}

//show Total, wins, and losses

function showinitialvalues () {
    $("#totalscore").text(crystaltotal);
    $("#Wins").text(wins);
    $("#Losses").text(losses);

    
}

// click commands to add value of each crystal to total and update screen with current crystal total
$("#mega-seed").on("click", function() {
    console.log(plumbusvalue);
    crystaltotal += plumbusvalue;
    console.log("Current Total = " + crystaltotal);
    $("#totalscore").text(crystaltotal);
    valuechecker();
})

$("#plumbus").on("click", function() {
    console.log(defensevalue);
    crystaltotal += defensevalue;
    console.log("Current Total = " + crystaltotal);
    $("#totalscore").text(crystaltotal);
    valuechecker();
})

$("#defense").on("click", function() {
    console.log(speedvalue);
    crystaltotal += speedvalue;
    console.log("Current Total = " + crystaltotal);
    $("#totalscore").text(crystaltotal);
    valuechecker();
})

$("#speed").on("click", function() {
    console.log(megavalue);
    crystaltotal += megavalue;
    console.log("Current Total = " + crystaltotal);
    $("#totalscore").text(crystaltotal);
    valuechecker();
})
function valuechecker (){
if (crystaltotal===goalnumber) {
    wins++;
    $("#Wins").text(wins);
    gamereset();
}
else if (crystaltotal>goalnumber) {
    losses++;
    $("#Losses").text(losses);
    gamereset();
}
else {}
}

function gamereset () {
    randomizecrystalvalue();
    randomizegoalnumber();
    crystaltotal = 0;
    showinitialvalues();
}

gamereset ()
//if totalscore<goalnumber keep going
//else if totalscore = goalnumber win and increment wins count
//else if totalscore> goal number lose and increment losses count
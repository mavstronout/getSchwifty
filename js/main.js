$(document).ready(function() {

    
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
            console.log("Values in order: plumbus, defense, speed, mega");
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


        gems = {
            onclickFunction: function (clickValue){
                if (clickValue==="plumbus"){
                    clickValue= plumbusvalue
                }else if(clickValue==="defense"){
                    clickValue=defensevalue
                }else if(clickValue==="speed"){
                    clickValue=speedvalue
                }else if(clickValue==="mega-seed"){
                    clickValue=megavalue
                }


                //====
            
                crystaltotal += clickValue;
                console.log("Current Total = " + crystaltotal);
                $("#totalscore").text(crystaltotal);
                valuechecker();
            }

        }


        // click commands to add value of each crystal to total and update screen with current crystal total
        $(".buttons").on("click", function() {
            idOfInput=$(this).attr("id")
            gems.onclickFunction(idOfInput)
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
        else {    
        }
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

        function gameLose() {
            document.getElementById('mainGame').style.display='none';
            document.getElementById('youLose').style.display='block';
        }

        function gameWin() {
            document.getElementById('mainGame').style.display='none';
            document.getElementById('RRguess').style.display='none';
            document.getElementById('youWin').style.display='block';
        }

        function restart() {
            document.getElementById('mainGame').style.display='none';
            document.getElementById('RRguess').style.display='none';
            document.getElementById('youLose').style.display='none';
            document.getElementById('youWin').style.display='none';
            document.getElementById('chooseDifficulty').style.display='block';


        }

        
});
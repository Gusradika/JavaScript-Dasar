var cpu = 0,  String1 = "", String2 = "", sYou = 0, sCPU = 0;


/*
[1] - ROCK
[2] - PAPER
[3] - SCISSORS

*/



do{
    
    
    var pilihan = parseInt(prompt("Pilih :\n[1] - Rock\n[2] - Paper\n[3] - Scissors\n\n[Score]\nYou: " + sYou + "\nCPU : " + sCPU));
    
    var cpu = Math.floor(Math.random() * 4);
    if(cpu == 0){
        cpu +=1;
    }
    
    if(pilihan == 1){
        String1 = "Rock";
    }else if (pilihan == 2){
        String1 = "Paper";
    }else if (pilihan == 3) {
        String1 = "Scissors";
    }

    if(cpu == 1){
        String2 = "Rock";
    }else if(cpu == 2){
        String2 = "Paper";
    }else if (cpu == 3){
        String2 = "Scissors";
    }

    console.log(cpu);

    if(pilihan == cpu){
        alert("Draw!");
    }else if(pilihan == 1 && cpu == 3){
        alert("You win! " + String1 + " vs " + String2)
        var ulang = confirm("Ulang?");
        sYou++;
    }else if(pilihan == 2 && cpu == 1){
        alert("You win! " + String1 + " vs " + String2)
        var ulang = confirm("Ulang?");
        sYou++;
    }else if(pilihan == 3 && cpu == 2){
        alert("You win! " + String1 + " vs " + String2)
        var ulang = confirm("Ulang?");
        sYou++;
    }else{
        alert("You Lose! " + String1 + " vs " + String2);
        var ulang = confirm("Ulang?");
        sCPU++;
    }

}while(ulang);

console.log("Game Ended!");

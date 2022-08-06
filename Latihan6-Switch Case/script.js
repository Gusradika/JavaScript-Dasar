
//Catatan*
// Prompt akan mengubah semua inputan menjadi STRING secara Otomatis!. tolong di ingat!. untuk equalsIgnoreCase tidak berlaku maka harus di gunakanlah .toLowerCase(); yang akan menjadikan semua prompt ke lower case semua lalu di scan ke switch case.

var String = "";

var ok = false;

while(!ok){
      var nilai = prompt("Print 1\n[1] - Ashiap\n[2] - Dog\n[3] - Cat\n[4] - Bigger Cat");

    switch (nilai){
        case "1" :
            alert("Ashiap");
            String = "Ashiap";
            ok = true;
            break;
        case "2" :
            alert("Dog");
            String = "Dog";
            ok = true;
            break;
        case "3" :
            alert("Cat");
            String = "Cat";
            ok = true;
            break;
        case "4" :
            alert("Bigger Cat");
            String = "Bigger Cat";
            ok = true;
            break;
    }
}
  
ok = false;


while(!ok){
      var nilai =parseInt(prompt("Print 2 (ParseInt)\n[1] - Ashiap\n[2] - Dog\n[3] - Cat\n[4] - Bigger Cat"));

    switch (nilai){
        case 1 :
            alert("Ashiap");
            String = "Ashiap";
            ok = true;
            break;
        case 2 :
            alert("Dog");
            String = "Dog";
            ok = true;
            break;
        case 3 :
            alert("Cat");
            String = "Cat";
            ok = true;
            break;
        case 4 :
            alert("Bigger Cat");
            String = "Bigger Cat";
            ok = true;
            break;
    }
}


ok = false;

while(!ok){
      var nilai =prompt("Print 3 String \nAshiap\nDog\nCat\nBigger Cat").toLowerCase();

    switch (nilai){
        case "ashiap" :
            alert("Ashiap");
            String = "Ashiap";
            ok = true;
            break;
        case "dog" :
            alert("Dog");
            String = "Dog";
            ok = true;
            break;
        case "cat" :
            alert("Cat");
            String = "Cat";
            ok = true;
            break;
        case "bigger cat" :
            alert("Bigger Cat");
            String = "Bigger Cat";
            ok = true;
            break;
        default :
            ok = false;
            break;
    }
}

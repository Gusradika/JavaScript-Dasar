/*
 Dalam JS kita harus mengetahui algoritma dari JS itu sendiri jadi jika kita memiliki 2 file JS maka kita harus mengimport satu sama lain File tersebut dengan cara import { [nama method] } from "source url.js";

 atau kita dapat mendahulukan script yang memiliki function function tersebut di dalam algoritma HTML (index.html).

*/

var a, b;

do{
    a = parseInt(prompt("Masukan nilai a"));
    b = parseInt(prompt("Masukan nilai b"));

    alert("Hasil penjumlahan dari " + a + " + " + b + " adalah : " + penjumlahan(a, b));
    
    alert("Hasil perkalian dari " + a + " * " + b + " adalah : " + perkalian(a, b));
    

    var ulang = confirm("Ulang?");
    if(!ulang){
        break;
    }
}while(true);


function penjumlahan(a,b) {
    var total = a + b;
    return total;
}
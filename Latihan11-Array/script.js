var daftarNama = [];

var banyak = prompt("Masukan banyak nama : ");


for(var i = 0; i < banyak; i++){
    daftarNama[i] = prompt("Masukan nama ke " + (i+1));
}

for(var i = 0; i < daftarNama.length; i++){
    console.log("Nama ke " + (i+1) + " : " + daftarNama[i]);
}

// Integer


var daftarAngka = [];

banyak = prompt("Masukan banyak angka : ");

for(var i = 0; i < banyak; i++){
    daftarAngka[i] = parseInt(prompt("Masukan angka ke " + (i+1)));
}

for(var i = 0; i < daftarAngka.length; i++){
    console.log("Angka ke " + (i+1) + " : " + daftarAngka[i]);
}

console.log("\n\n" + daftarAngka);

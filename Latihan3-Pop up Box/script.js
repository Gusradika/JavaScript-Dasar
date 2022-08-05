var yakin = false,
    umur = false;


alert("Sudah Ashiap tidak?");
var nama = prompt("Masukan nama anda: "); // Memasukan inputan dan memasukan Inputan user ke var nama
alert("Nama anda adalah : " + nama);
confirm("Lanjut?"); // Confirtm bisa di masukan ke Variable dengan cara menambahkan Variable sebelum confirm

var yakin = confirm("Apakah anda yakin?");

if (yakin) {
    alert("Anda sudah Yakin!");
} else{
    alert("anda belum yakin!");
}

do{
    var age = prompt("Masukan umur anda: ");
    if(age < 18){
        umur = true;
        alert("umur anda adalah : " + age + "[Tidak boleh lanjut!]");
    }else if(age >= 18) {
        umur = false;
        alert("umur anda adalah : " + age + "[Silahkan masuk!]");
    }else{
        alert("Try again!");
    }
}while (umur);

alert("Anda telah Login!");
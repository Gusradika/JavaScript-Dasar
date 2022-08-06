
var a = 5;



do{
    var nilai = prompt("Masukan Nilai akhir : ");
}while(nilai < 0);

for(var i = 0; i <= nilai; i++){
    if(i == 1){
        console.log(i);
    }else if(i == a){
        console.log(i);
         a += 5;
    }else{
        console.log("ashiap!");
    }
}
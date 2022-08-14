var arr = ["a", 1 , true];

console.log(arr);


//Menghapus Array (Cara Manual)

var arr2 = [1,2,3,4,5,6,7,8,9,10,11];

arr2[2] = undefined;
arr2[3] = undefined;

console.log(arr2);

//Method pada array
//1. Join

var arr3 = ["aditya","ngurah","kesuma"];
console.log(arr3.join(" - "));

//2. Push & pop. keluar / masuk di akhir

arr3.push("Jack","Gembrot");
console.log(arr3.pop());
console.log(arr3.join());


//3. Shift & Unshift. keluar / masuk di awal

arr3.unshift("Hamster","lele"); // Menambah di awalan
arr3.shift();   // Menghilangkan awalan
console.log(arr3.join());

//4. Splice. menyisipkan array di tengah2.
// Splice(beginIndex, Hapus berapa, ElementBaru1, Elementbaru2, ...)

var arr4 = ["aditya","ngurah","kesuma"];
arr4.splice(1,1,"I Gusti");
console.log(arr4);

//5. Slice. Mengiris
// Slice(BeginIndex, EndIndex);
// Slice selalu menghasilkan array Baru

var arr5 = ["aditya","ngurah","kesuma"];
var arr6 = arr5.slice(1,3);
console.log(arr6);
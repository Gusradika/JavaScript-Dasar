/*
        arguments merupakan pseudo Array dalam JS.
*/

function arg () {
    console.log(arguments.length);  // Cetak Length dari argument
    return arguments;               // cetak isi arguments
}


var test = arg(5,10,20,"hi",false);

console.log(test);
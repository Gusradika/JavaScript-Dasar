function arg () {
    console.log(arguments.length);
    return arguments;
}


var test = arg(5,10,20,"hi",false);

console.log(test);
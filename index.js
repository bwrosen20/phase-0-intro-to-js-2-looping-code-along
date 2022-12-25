
function writeCards(names){
    let counter=0;
    let namesArray=[...names];
    while (counter<names.length){
        namesArray[counter]=`Thank you, ${names[counter]}, for the wonderful surprise gift!`;
        counter++
    }
    return namesArray;
}
function countDown(number){
    while (number>=0){
    console.log(number);
    number--;
    }
}

// Write your solution here!
const cats=["Milo","Otis","Garfield"];

function destructivelyAppendCat(name)
{
    return cats.push(name);//Adds a new array item to the end of the array
}
function destructivelyPrependCat(name)
{
    return cats.unshift(name);//Adds a new element at the beginning of the array
}
function destructivelyRemoveLastCat()
{
    return cats.pop()//Removes the last item of the array
}
function destructivelyRemoveFirstCat()
{
    return cats.shift()//Removes first array item
}
function appendCat(name)
{
    const cats1=cats.slice();//Creayes a new array and does not remove any elements from the source array
    cats1.push(name);//Adds a new element at the end of the array
    return cats1;
}
function prependCat(name)
{
    const cats1=cats.slice();//Creayes a new array and does not remove any elements from the source array
    cats1.unshift(name);//Adds a new element at the beginning of the array
    return cats1;//Returns the new array 
}
function removeLastCat()
{
    const cats1=cats.slice()//Creayes a new array and does not remove any elements from the source array
    cats1.pop()//Removes the last item from the cats array
    return cats1
}
function removeFirstCat()
{
    const cats1=cats.slice()//Creayes a new array and does not remove any elements from the source array
    cats1.shift()//Removes the first element of the array
    return cats1
}

destructivelyAppendCat('Ralph');
destructivelyPrependCat('Bob');
destructivelyRemoveLastCat();
destructivelyRemoveFirstCat();
appendCat('Broom');
prependCat('Arnold');
removeLastCat()
removeFirstCat()
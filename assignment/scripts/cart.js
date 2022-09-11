console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem( item ){
    basket.push(item);
    return true;
}

function listItems( basket ){
    for( let i = 0; i < basket.length; i++)
        console.log( basket[i] );
}

function empty( basket ){
    for( i = 0; basket.length > 0; i++){
        basket.pop()
    }
    return basket;
}

console.log( addItem( 'apple' ));
console.log( addItem( 'banana' ));
console.log( addItem( 'carrot' ));
console.log(basket);

listItems(basket);
console.log(basket.length);
console.log(empty(basket));

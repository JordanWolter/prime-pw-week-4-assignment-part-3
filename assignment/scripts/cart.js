console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem( item ){
    if( basket.length < 5){
    basket.push(item);
    return true;
    } else {
        console.log('Cart is full, could not add item');
        return false;
    }
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

function isFull( basket ){
    if( basket.length < 5 ){
        return false;
    } else {
        return true;
    }
}

function removeItem( item ){
    basket.indexOf( item );
    basket.splice ( item );
}

console.log( 'Adding apples (expect true)', addItem( 'apple' ));
console.log( 'Adding bananas (expect true)', addItem( 'banana' ));
console.log( 'Adding carrot (expect true)', addItem( 'carrot' ));
console.log( 'Adding beef (expect true)', addItem( 'beef' ));
console.log( 'Adding noodles (expect true)', addItem( 'noodles' ));
console.log( 'Adding milk (cart full expect false)', addItem( 'milk' ));

console.log( 'Listing items in basket', basket );
console.log( 'Using function to list items' );
listItems(basket)

//removeItem( 'beef' );
//console.log( basket );

console.log( 'Number of items in basket', basket.length );
console.log( 'Using function to empty array', empty(basket) );
console.log( 'Number of items in basket', basket.length );
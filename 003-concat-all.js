// Flatten nested data structures.

const exchanges = [ [
    { symbol: 'XFX', price: 12.44, volume: 212 },
    { symbol: 'TNZ', price: 332.11, volume: 12322 },
    { symbol: 'JXJ', price: 1121.11, volume: 12322 }
], [
    { symbol: 'XFX', price: 12.44, volume: 212 },
    { symbol: 'TNZ', price: 332.11, volume: 12322 },
    { symbol: 'JXJ', price: 1121.11, volume: 12322 }
] ];

Array.prototype.concatAll = function() {
    const results = [];

    this.forEach( ( items ) => items.forEach( ( item ) => results.push( item ) ) );

    return results;
};

// exchanges.forEach( ( exchange ) => exchange.forEach( ( stock ) => console.log( stock ) ) );

exchanges.concatAll().forEach( ( stock ) => console.log( stock ) );
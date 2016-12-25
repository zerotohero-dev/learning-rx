const stocks = [
    { symbol: 'XFX', price: 12.44, volume: 212 },
    { symbol: 'TNZ', price: 332.11, volume: 12322 },
    { symbol: 'JXJ', price: 1121.11, volume: 12322 }
];

stocks
    .filter( stock => stock.price >= 150 )
    .map( stock => stock.symbol )
    .forEach( ( symbol ) => console.log( symbol ) );
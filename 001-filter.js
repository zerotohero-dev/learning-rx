const getStocksOver = ( stocks, minPrice ) => stocks.filter( ( stock ) => stock.price >= minPrice );

const expensiveStocks = getStocksOver( [
    { symbol: 'XFX', price: 12.44, volume: 212 },
    { symbol: 'TNZ', price: 332.11, volume: 12322 },
    { symbol: 'JXJ', price: 1121.11, volume: 12322 }
], 150 );

console.log( expensiveStocks );
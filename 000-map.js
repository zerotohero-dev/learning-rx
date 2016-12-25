const getStockSymbolsForEach = ( stocks ) => {
    const symbols = [];

    stocks.forEach( ( stock ) => symbols.push( stock.symbol ) );

    return symbols;
};

const getStockSymbols = ( stocks ) => stocks.map( ( stock ) => stock.symbol );

const symbols = getStockSymbols( [
    { symbol: 'XFX', price: 12.44, volume: 212 },
    { symbol: 'TNZ', price: 332.11, volume: 12322 },
    { symbol: 'JXJ', price: 121.11, volume: 12322 }
] );

console.log( symbols );
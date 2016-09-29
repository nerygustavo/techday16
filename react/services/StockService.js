export const getStockData = (stock) => fetch(`https://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quotes where symbol in (${stock.join(",")})&format=json&env=store://datatables.org/alltableswithkeys`)
.then(response => response.json())
.then(data => data.query.results.quote.map(stock => ({
  name: stock.Name,
  symbol: stock.symbol,
  price: stock.Bid,
  change: stock.Change,
  changeinPercent: stock.ChangeInPercent,
  volume: stock.Volume,
  dayHigh: stock.DaysHigh,
  dayLow: stock.DaysLow,
  image: `${stock.symbol.toLowerCase()}.png`,
})));


// {name, symbol, price, change, changeinPercent, volume, dayHigh, dayLow, imagePath}

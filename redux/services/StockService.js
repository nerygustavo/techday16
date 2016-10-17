export const getStockData = (stock) =>
fetch(`https://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quotes where symbol in (${stock.join(",")})&format=json&env=store://datatables.org/alltableswithkeys`)
.then(response => response.json())
.then(data => new Promise(resolve => setTimeout(() => resolve(data.query.results.quote.map(stock => ({
  name: stock.Name,
  symbol: stock.symbol,
  price: stock.Bid,
  change: stock.Change,
  changeinPercent: stock.ChangeinPercent,
  volume: stock.Volume,
  dayHigh: stock.DaysHigh,
  dayLow: stock.DaysLow,
  image: `${stock.symbol.toLowerCase()}.png`,
}))), 2000)));


// {name, symbol, price, change, changeinPercent, volume, dayHigh, dayLow, imagePath}


export const filterStock = (stock, filter) => {
  console.log(stock);
  console.log(filter);
  return  (stock.symbol.toLowerCase().indexOf(filter.toLowerCase()) >= 0)
          ||
          (stock.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0);
}

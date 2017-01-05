function makeChange(n, coins) {
var numberOfCoins = [0];
var coinUsed = [0];

// Dynamic programming, compute the coin used from 1..n.
for (var i=1; i<=n; i++) {
  var minNumberOfCoins = n;
  var coin = -1;
  
  // What next coin would get to 'i' using the minimum # of coins.
  coins.forEach( function(c) {
      if (c <= i) {
          var min = numberOfCoins[i-c] + 1;
          if (min < minNumberOfCoins) {
          	minNumberOfCoins = min;
          	coin = c;
          }
      }
  });
  
  numberOfCoins[i] = minNumberOfCoins;
  coinUsed[i] = coin;
}

// What coins were used?
var change = [];
var total = n;
while (total > 0) {
	change.push(coinUsed[total]);
    total -= coinUsed[total];
}

return change;
}
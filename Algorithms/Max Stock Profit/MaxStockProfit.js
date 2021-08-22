function maxStockProfit(priceArray) {
	let maxProfit = -1,
		buyPrice = 0,
		sellPrice = 0;
	let changeBuyPrice = true;

	for (i = 0; i < priceArray.length; i++) {
		if (changeBuyPrice) {
			buyPrice = priceArray[i];
		}
		sellPrice = priceArray[i + 1];

		if (sellPrice < buyPrice) {
			changeBuyPrice = true;
		} else {
			let tempProfit = sellPrice - buyPrice;
			if (tempProfit > maxProfit) {
				maxProfit = tempProfit;
			}
			changeBuyPrice = false;
		}
	}

	return maxProfit;
}

console.log(maxStockProfit([32, 46, 26, 38, 40, 48, 42]));

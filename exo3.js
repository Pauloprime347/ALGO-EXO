function analyzePurchases(purchases, priceLimit) {

  function isAboveLimit(price, limit) {
    return price > limit;
  }

  function addCategoryCount(counts, category) {
    counts[category] ? counts[category]++ : counts[category] = 1;
  
}
  function findMostFrequentCategory(counts) {
    let maxCount = 0;
    let mostFrequent = "";

    for (let category in counts) {
      counts[category] > maxCount
        ? (maxCount = counts[category], mostFrequent = category)//?= terme
        : 0;
    }

    return mostFrequent;
  }
  let totalCount = 0;


  let totalPrice = 0;



  for (let i = 0;i < purchases.length; i++) {
    let product = purchases[i];

    if (isAboveLimit(product.p, priceLimit)) {
      totalPrice += product.p;
      totalCount++;
      addCategoryCount(categoryCount, product.c);
    }
  }

  let averagePrice = totalCount > 0 ? totalPrice / totalCount : 0;

  let mostFrequentCategory = findMostFrequentCategory(categoryCount);


  console.log("Moyenne des prix :", averagePrice);
  console.log("Catégorie la plus fréquente :", mostFrequentCategory);
}
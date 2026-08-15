export const fetchProductCatalog = (): Promise<{ productId: number; name: string; price: number }[]> => {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.8) {
    resolve([
        { productId: 1, name: "Laptop", price: 1200 },
        { productId: 2, name: "Headphones", price: 200 },
    ]);
    } else {
    reject("Failed to fetch product catalog.");
    }
  }, 1000);
  });
};

export const fetchProductReviews = (productId: number): Promise<{productId:number, review: string}[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          { productId: 1, review: `Games like an absolute beast while maintaing daily use functionality.`},
          { productId: 1, review: `Hardware lacks capability for gaming even though it is advertised for gaming`},
          { productId: 2, review: `High price, average sound quality and poor comfort, don't expect to wear these for long.`},
          { productId: 2, review: `Nice Bass man!, These things be boomin`},
        ]);
      } else {
        reject(`Failed to fetch reviews for Product ID ${productId}.`);
      }
    }, 1500)
  });
}

export const fetchSalesReport = (): Promise<{ productId: number, totalSales: number, unitsSold: number, averagePrice: number}[]> => {
  return new Promise ((resolve, reject) => {
    setTimeout (() => {
      if (Math.random() < 0.8) {
        resolve([
          {productId: 1, totalSales: 1865465.28, unitsSold: 1568, averagePrice: 1189.71},
          {productId: 2, totalSales: 119346.63, unitsSold: 799, averagePrice: 149.37}
        ]);
      } else {
        reject("Failed to fetch sales report.")
      }
    }, 2000)
  });
}

fetchProductCatalog()
  .then(catalog => {
    const product1 = catalog.find(p => p.productId === 1);
    console.log("Product Info:", product1);
    return fetchProductReviews(1);
  })
  .then(reviews => {
    const product1Reviews = reviews.find(r => r.productId === 1);
    console.log("Reviews:", product1Reviews);
    return fetchSalesReport();
  })
  .then(sales => {
    const product1Sales = sales.find(s => s.productId === 1);
    console.log("Sales:", product1Sales);
  })
  .catch(error => {
    console.error("Error:", error);
  });

  async function displayProduct1Data() {
    try {
      const catalog = await fetchProductCatalog();
      const product1 = catalog.find(p1 => p1.productId === 1);
      console.log('Product Info:', product1)

      const reviews = await fetchProductReviews(1);
      const p1Reviews = reviews.find(p1R => p1R.productId === 1);
      console.log('Reviews:', p1Reviews);

      const sales = await fetchSalesReport();
      const p1Sales = sales.find(p1S => p1S.productId === 1);
      console.log('Sales:', p1Sales);
      
    } catch (error) {
      console.error('Error:', error);
    }
    
  }

  displayProduct1Data();

  // import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator";
  // function displayCatalogdata (){
  //   const variable = fetchProductCatalog()
  //   variable.then (data =>{
  //       console.log(data)
  //   })
  // }
  // displayCatalogdata()

  // function displayReviewsdata (){
  //   const Reviewsvariable = fetchProductReviews()
  //   Reviewsvariable.then (data =>{
  //       console.log(data)
  //   })
  // }
  // displayReviewsdata()
  //   function displaySalesdata (){
  //   const Salesvariable = fetchSalesReport()
  //   Salesvariable.then (data =>{
  //       console.log(data)
  //   })
  // }
  // displaySalesdata()
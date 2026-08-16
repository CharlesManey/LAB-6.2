import { DataError, NetworkError } from "./lab2ErrorHandling";

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface Review {
  id: number;
  productId: number;
  rating: number;
  comment: string;
}

export interface SalesReport {
  totalSales: number;
  unitsSold: number;
  averagePrice: number;
}


export const fetchProductCatalog = (): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    const roll = Math.random();
    if (roll < 0.7) {
      const sampleProducts : Product[] = [
        { id: 1, name: "Laptop", price: 1200 },
        { id: 2, name: "Headphones", price: 200 },
        { id: 3, name: "Mouse", price: 50}
      ]
    resolve(sampleProducts);
    } else if (roll < 0.85) {
    reject(new NetworkError("Check connection and try again"));
    } else {
      reject(new DataError("Failed to fetch Product Catalog"));
    }
  }, 1000);
  });
};

export const fetchProductReviews = (productId: number): Promise<Review[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const roll = Math.random();
      if (roll < 0.7) {
        const sampleReviews : Review[] = [
          { id: 1, productId: 1, rating: 5, comment: `Games like an absolute beast while maintaing daily use functionality.`},
          { id: 2, productId: 1, rating: 2, comment: `Hardware lacks capability for gaming even though it is advertised for gaming`},
          { id: 3, productId: 2, rating: 2, comment: `High price, average sound quality and poor comfort, don't expect to wear these for long.`},
          { id: 4, productId: 2, rating: 5, comment: `Nice Bass man!, These things be boomin`},
          { id: 5, productId: 3, rating: 3, comment: `Can barely get two gaming sessions out of one charge but has great ergonomics`},
          { id: 6, productId: 3, rating: 4, comment: `Very light weight and responsive mouse`},
        ]
        const productReviews = sampleReviews.filter(data => data.productId === productId);
        resolve(productReviews);
      } else if (roll < 0.85) {
        reject(new NetworkError("Check connection and try again"));
      } else {
        reject(new DataError(`Failed to fetch reviews for Product ID ${productId}.`));
      }
    }, 1500);
  });
};

export const fetchSalesReport = (): Promise<SalesReport> => {
  return new Promise ((resolve, reject) => {
    setTimeout (() => {
      const roll = Math.random();
      if (roll < 0.7) {
        const sampleSalesReport: SalesReport = {
          totalSales: 2000000, unitsSold: 4000, averagePrice: 500 
        }
        resolve(sampleSalesReport);
      } else if (roll < 0.85) {
        reject(new NetworkError("Check connection and try again"))
      } else {
        reject(new DataError("Failed to fetch sales report"));
      }
    }, 1000);
  });
};

// fetchProductCatalog()
//   .then(catalog => {
//     const product1 = catalog.find(p => p.productId === 1);
//     console.log("Product Info:", product1);
//     return fetchProductReviews(1);
//   })
//   .then(reviews => {
//     const product1Reviews = reviews.find(r => r.productId === 1);
//     console.log("Reviews:", product1Reviews);
//     return fetchSalesReport();
//   })
//   .then(sales => {
//     const product1Sales = sales.find(s => s.productId === 1);
//     console.log("Sales:", product1Sales);
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });

//   async function displayProduct1Data() {
//     try {
//       const catalog = await fetchProductCatalog();
//       const product1 = catalog.find(p1 => p1.productId === 1);
//       console.log('Product Info:', product1)

//       const reviews = await fetchProductReviews(1);
//       const p1Reviews = reviews.find(p1R => p1R.productId === 1);
//       console.log('Reviews:', p1Reviews);

//       const sales = await fetchSalesReport();
//       const p1Sales = sales.find(p1S => p1S.productId === 1);
//       console.log('Sales:', p1Sales);
      
//     } catch (error) {
//       console.error('Error:', error);
//     }
    
//   }

//   displayProduct1Data();

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
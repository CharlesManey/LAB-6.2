import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./lab2ApiSimulator";
import { NetworkError, DataError } from "./lab2ErrorHandling";

async function loadProducts(): Promise<void> {
  try {
    const products = await fetchProductCatalog();
    console.log("Product Catalog:", products);
  } catch (error) {
    console.error(error);
  }
}

loadProducts();

async function loadReviews(productId: number): Promise<void> {
  try {
    const reviews = await fetchProductReviews(productId);
    console.log(`Reviews for product ${productId}:`, reviews);
  } catch (error) {
    console.error(error);
  }
}

loadReviews(1);

async function loadSalesReport(): Promise<void> {
  try {
    const sales = await fetchSalesReport();
    console.log("Sales Report:", sales);
  } catch (error) {
    console.error(error);
  }
}

loadSalesReport();

async function runSimulation(productId: number): Promise<void> {
  try {
    const products = await fetchProductCatalog();
    console.log("Product Catalog:", products);

    const reviews = await fetchProductReviews(productId);
    console.log(`Reviews for product ${productId}:`, reviews);

    const sales = await fetchSalesReport();
    console.log("Sales Report:", sales);

  } catch (error) {
    if (error instanceof DataError) {
      console.error(`Not Found: ${error.message}`);
    } else if (error instanceof NetworkError) {
      console.error(`Network Error: ${error.message}`);
    } else if (error instanceof Error) {
      console.error(`Unexpected Error: ${error.message}`);
    }
  } finally {
    console.log("all API calls have been attempted");
  }
  
}

runSimulation(1);
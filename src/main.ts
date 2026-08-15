import { fetchProductReviews } from "./lab2ApiSimulator";


async function loadReviews(productId: number): Promise<void> {
  try {
    const reviews = await fetchProductReviews(productId);
    console.log(`Reviews for product ${productId}:`, reviews)
  } catch (error) {
    console.error(error);
  }
}

loadReviews(1);
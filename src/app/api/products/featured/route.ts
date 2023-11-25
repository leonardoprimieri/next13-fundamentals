import { products } from "../data.json";

export async function GET() {
  const featuredProducts = products.filter((product) => product.featured);

  return Response.json(featuredProducts);
}

import SectionTitle from "@/components/global/SectionTitle";
//import ProductsGrid from "@/components/products/ProductsGrid";
import ProductsGrid from "@/components/products-server/ProductsGrid";
import { fetchUserFavorites } from "@/utils/actionsServer";

async function FavoritesPage() {
  const favorites = await fetchUserFavorites();
  if (favorites.length === 0)
    return <SectionTitle text="You have no favorites yet." />;

  return (
    <div className="productsContent px-0.5 sm:px-2 pt-4 pb-4 lg:mt-2 bg-muted/100">
      <SectionTitle text="Favorites" />
      <ProductsGrid products={favorites.map((favorite) => favorite.product)} />
    </div>
  );
}
export default FavoritesPage;

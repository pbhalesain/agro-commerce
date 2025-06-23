import Link from "next/link";
import BestSellerSectionTitle from "./BestSellerSectionTitle";
import SingleItem from "./SingleItem";
import { getBestSellingProducts } from "@/get-api-data/product";

const BestSeller = async () => {
  const bestSellProducts = await getBestSellingProducts();

  return (
    <section className="overflow-hidden">
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-8 xl:px-0">
        <BestSellerSectionTitle />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
          {bestSellProducts.length > 0 &&
            bestSellProducts.map((item, key) => (
              <SingleItem item={item} key={key} />
            ))}
        </div>

        <div className="text-center mt-12.5">
          <Link
            href="/shop-without-sidebar"
            className="inline-flex font-medium text-custom-sm py-3 px-7 sm:px-12.5 rounded-lg border-gray-3 border bg-gray-1 text-dark ease-out duration-200 hover:bg-dark hover:text-white hover:border-transparent"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;

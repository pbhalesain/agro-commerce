import { TrashIcon } from "@/assets/icons";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { useRouter } from "next/navigation";

const SingleItem = ({ item }: any) => {
  const { removeItem,handleCartClick } = useShoppingCart();
  const router = useRouter();
  const handleRemoveFromCart = () => {
    removeItem(item.id);
  };

  const handleProductClick = () => {
    router.push(`/products/${item.slug}`);
    setTimeout(() => {
      handleCartClick();
    }, 500);
  };  

  return (
    <div className="flex items-center justify-between gap-5">
      <div className="flex items-center w-full gap-6">
        <div className="flex items-center justify-center rounded-[10px] bg-gray-3 w-22.5 h-22.5 shrink-0">
          <Image src={item.image} alt="product" width={64} height={64} />
        </div>

        <div>
          <h3 className="mb-1 text-base font-medium duration-200 ease-out text-dark hover:text-blue">
            <button onClick={handleProductClick} className="text-start">
              {item.name} ({item.quantity})
            </button>
          </h3>
          <p className="font-normal text-custom-sm">Price: ${item.price}</p>
        </div>
      </div>

      <div>
        <button
          onClick={handleRemoveFromCart}
          aria-label="button for remove product from cart"
          className="flex items-center justify-center rounded-lg w-[38px] h-[38px] bg-gray-2 border border-gray-3 text-dark ease-out duration-200 hover:bg-red-light-6 hover:border-red-light-4 hover:text-red"
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};

export default SingleItem;

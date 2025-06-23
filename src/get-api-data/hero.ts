import { prisma } from "@/lib/prismaDB";
import { unstable_cache } from "next/cache";


// get hero banners
export const getHeroBanners = unstable_cache(
  async () => {
    const heroBanners = await prisma.heroBanner.findMany({
      orderBy: { updatedAt: "desc" },
      include: {
        product: {
          select: {
            price: true,
            discountedPrice: true,
            title: true,
            slug: true
          }
        }
      }
    });

    return heroBanners.map((item) => ({
      ...item,
      product: {
        ...item.product,
        price: item.product.price.toNumber(),
        discountedPrice: item.product.discountedPrice ? item.product.discountedPrice.toNumber() : null
      }
    }));
  },
  ['heroBanners'], { tags: ['heroBanners'] }
);

// get hero sliders
export const getHeroSliders = unstable_cache(
  async () => {
    const heroSliders = await prisma.heroSlider.findMany({
      orderBy: { updatedAt: "desc" },
      include: {
        product: {
          select: {
            price: true,
            discountedPrice: true,
            title: true,
            slug: true,
            shortDescription: true
          }
        }
      }
    });

    return heroSliders.map((item) => ({
      ...item,
      product: {
        ...item.product,
        price: item.product.price.toNumber(),
        discountedPrice: item.product.discountedPrice ? item.product.discountedPrice.toNumber() : null
      }
    }))
  },
  ['heroSliders'], { tags: ['heroSliders'] }
);


// single hero banner
export const getSingleHeroBanner = async (id:number) => 
  unstable_cache(
    async () => {
      return await prisma.heroBanner.findUnique({
        where: {
          id: id
        }
      });
    },
    ['single-hero-banner'], { tags: [`single-hero-banner-${id}`] }
  )

import ContactUs from "@/app/components/ContactUs";
import CustomLink from "@/app/components/CustomLink";
import Footer from "@/app/components/Footer";
import ProductCard from "@/app/components/ProductCard";
import productsData from "@/data/products.json";

export default function CategoryPage({ params: { categoryName } }) {
  const categoryProducts =
    categoryName.toString() === "all"
      ? productsData
      : productsData.filter((p) => p.category == categoryName);
  //   console.log(categoryProducts.length);

  return (
    <>
      <header
        className="h-[500px] bg-center flex flex-col-reverse bg-cover w-full"
        style={{ backgroundImage: `url('/header.webp')` }}
      />
      <main>
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
          <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
            <CustomLink path={`/category/all`}>
              <button className="hover:border-b border-black block h-6 box-border mt-4">
                All
              </button>
            </CustomLink>
            <CustomLink
              path={`/category/smartphones`}
              className="hover:border-b border-black block h-6 box-border mt-5"
            >
              <button className="hover:border-b border-black block h-6 box-border mt-4">
                Smartphones
              </button>
            </CustomLink>
            <CustomLink
              path={`/category/laptops`}
              className="hover:border-b border-black block h-6 box-border mt-5"
            >
              <button className="hover:border-b border-black block h-6 box-border mt-4">
                Laptops
              </button>
            </CustomLink>
            <CustomLink
              path={`/category/fragrances`}
              className="hover:border-b border-black block h-6 box-border mt-5"
            >
              <button className="hover:border-b border-black block h-6 box-border mt-4">
                Fragrances
              </button>
            </CustomLink>
            <CustomLink
              path={`/category/skincare`}
              className="hover:border-b border-black block h-6 box-border mt-5"
            >
              <button className="hover:border-b border-black block h-6 box-border mt-4">
                Skincare
              </button>
            </CustomLink>
            <CustomLink
              path={`/category/groceries`}
              className="hover:border-b border-black block h-6 box-border mt-5"
            >
              <button className="hover:border-b border-black block h-6 box-border mt-4">
                Groceries
              </button>
            </CustomLink>
          </div>
          {categoryProducts.length < 1 && (
            <div className="w-full lg:w-10/12 my-4 lg:my-10 flex justify-center">
              <p className="text-center text-lg my-4">
                No products found in the category &quot;{categoryName}&quot;
              </p>
            </div>
          )}

          <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <ContactUs />
      </main>

      <Footer />
    </>
  );
}

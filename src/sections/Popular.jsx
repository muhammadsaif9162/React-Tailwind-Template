import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"
const Popular = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="font-montserrat lg:max-w-lg mt-2 text-slate-gray">Discover the Pinnacle of Quality and Style within Our Exclusive Product Lineup. Immerse Yourself in a World of Unparalleled Comfort, Thoughtful Design, and Exceptional Value.</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map(product=>(
          <PopularProductCard key={product.name} {...product}/>
        ))}
      </div>
    </section>
  )
}

export default Popular

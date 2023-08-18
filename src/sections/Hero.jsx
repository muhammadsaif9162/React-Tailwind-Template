import Button from "../components/Button"
import { arrowRight } from '../assets/icons'
import { bigProducts, statistics } from '../constants'
import { bigproduct1 } from "../assets/images"
import ProductCard from "../components/ProductCard"
import { useState } from "react"

const Hero = () => {
  const[bigProductImg ,setBigProductImg] = useState(bigproduct1) 

  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Season Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Daari Mooch</span> 
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Premium Grooming, Unmatched Quality, and Innovation for the Modern Man.</p>
        <Button label='Shop Now' iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((statistic) => (
            <div key={statistic.label}>
              <p className="text-4xl font-palanquin font-bold">{statistic.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{statistic.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigProductImg}
          alt="product collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {bigProducts.map((product, index) => (
            <div key={index}>
              <ProductCard imgURL={product} changeBigProductImage={(product) => setBigProductImg(product)}
                bigProductImg={bigProductImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
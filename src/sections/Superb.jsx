import { product8 } from "../assets/images"
import Button from "../components/Button"

const Superb = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super</span>
          <span className="text-coral-red">Quality</span> Products
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Experience Unrivaled Comfort and Style with Our Carefully Curated Selection. Explore a World of Quality, Design, and Value.</p>
        <p className="mt-6 lg:max-w-lg info-text">Our Unwavering Commitment to Detail and Excellence Serves as the Cornerstone of Your Utmost Satisfaction. Every Product, a Testament to Quality and Care.</p>
        <div className="mt-11">
          <Button label='View Details' />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img 
          src={product8}
          width={580}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default Superb

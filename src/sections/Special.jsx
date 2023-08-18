import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const Special = () => {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img 
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Embark on an Unforgettable Shopping Expedition that Redefines Your Experience with Irresistible Offers. From Premium Selections to Unbelievable Savings, Discover Unparalleled Value that Truly Sets Us Apart.</p>
        <p className="mt-6 lg:max-w-lg info-text">Explore a Realm of Possibilities Tailored to Fulfill Your Unique Desires, Exceeding the Loftiest Expectations. Your Experience with Us is Nothing Short of Extraordinary.</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label='Shop now' iconURL={arrowRight}/>
          <Button label='Learn more' backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray'/>
        </div>
      </div>
    </section>
  )
}

export default Special

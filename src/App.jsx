import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Popular from "./sections/Popular"
import Superb from "./sections/Superb"
import Services from "./sections/Services"
import Special from "./sections/Special"
import CustomerReviews from "./sections/CustomerReviews"
import Subscribe from "./sections/Subscribe"
import Footer from "./sections/Footer"

const App = () => {
  return (
    <main>
      <Navbar/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <Popular/>
      </section>
      <section className="padding">
        <Superb/>
      </section>
      <section className="padding-x py-10 w-full">
        <Services/>
      </section>
      <section className="padding">
        <Special/>
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews/>
      </section>
      <section className="padding-x sm:py-32 py-16">
        <Subscribe/>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}

export default App
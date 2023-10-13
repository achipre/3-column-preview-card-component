import iconSedan from './assets/icon-sedans.svg'
import iconSuvs from './assets/icon-suvs.svg'
import iconLuxury from './assets/icon-luxury.svg'
function App() {
  return (
    <main className="flex text-[1.5rem] flex-col lg:flex-row m-8">
      <article className="bg-bright-orange p-[4.8rem] max-w-[30.65rem] rounded-t-xl  lg:rounded-s-xl lg:rounded-e-none">
        <img className="mb-11" src={iconSedan} alt="Icono de Sedan" />
        <h1 className="mb-[2.2rem] uppercase text-very-light-gray text-[4rem]">Sedans</h1>
        <p className="mb-[8.2rem] font-lexend text-transparent-white leading-10">
          Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the
          city or on your next road trip.
        </p>
        <button className="font-lexend text-bright-orange bg-very-light-gray p-[1.1rem] px-[3rem] rounded-full hover:bg-transparent hover:text-transparent-white border-2 box-border">
          Learn More
        </button>
      </article>
      <article className=" bg-dark-cyan p-[4.8rem] max-w-[30.65rem]">
        <img className="mb-11" src={iconSuvs} alt="Icono de Suvs" />
        <h1 className="mb-[2.2rem] uppercase text-very-light-gray text-[4rem]">SUVs</h1>
        <p className="mb-[8.2rem] font-lexend text-transparent-white leading-10">
          Take an SUV for its spacious interior, power, and versatility. Perfect for your next
          family vacation and off-road adventures.
        </p>
        <button className="font-lexend text-dark-cyan bg-very-light-gray p-[1.1rem] px-[3rem] rounded-full hover:bg-transparent hover:text-transparent-white border-2 box-border">
          Learn More
        </button>
      </article>
      <article className="bg-very-dark-cyan p-[4.8rem] max-w-[30.65rem] rounded-b-xl lg:rounded-e-xl lg:rounded-s-none">
        <img className="mb-11" src={iconLuxury} alt="Icono de Luxury" />
        <h1 className="mb-[2.2rem] uppercase text-very-light-gray text-[4rem]">Luxury</h1>
        <p className="mb-[8.2rem] font-lexend text-transparent-white leading-10">
          Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a
          luxury rental and arrive in style.
        </p>
        <button className="font-lexend text-very-dark-cyan bg-very-light-gray p-[1.1rem] px-[3rem] rounded-full hover:bg-transparent hover:text-transparent-white border-2 box-border">
          Learn More
        </button>
      </article>
    </main>
  )

}

export default App

type Country = {
  name: {
    common: string
  }
}
async function getCountries(): Promise<Country[]> {
  const response = fetch("https://restcountries.com/v3.1/all")
  return (await response).json()

}


export default async function Home() {
  const countries = await getCountries()

  return (
    <section className="grid grid-cols-5 container w-full gap-2 mt-16 ">
      {
        countries.map((country) => (
          <article className="h-64 min-w-full p-2 bg-white border-2 rounded-xl" key={country.name.common}>
            <h1>{country.translations.por.common}</h1>

          </article>
        ))
      }
    </section>
  );
}

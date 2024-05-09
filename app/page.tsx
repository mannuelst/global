
async function getCountries() {
  const response = fetch("https://restcountries.com/v3.1/all")
  return (await response).json()

}


export default async function Home() {
  const countries = await getCountries()

  return (
    <section className="flex container w-full">
      {
        countries.map((country) => (
          <h1 key={country.name.common}>{country.name.common}</h1>
        ))
      }
    </section>
  );
}

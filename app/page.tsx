import CountryCard from "./_components/country-card";

export type Country = {
  name: {
    common: string
  };
  translations: {
    por: {
      common: string
    }
  };
  flags: {
    svg: string,
    alt: string
  }
  capital: string;
  region: string;
  sobregion: string;
  population: number,
  languages?: {
    [key: string]: string
  },
  borders?: string[],
  cca3: string

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
          <CountryCard key={country.name.common} name={country.name.common} ptName={country.translations.por.common} flag={country.flags.svg} flagAlt={country.flags.alt} />
        ))
      }
    </section>
  );
}

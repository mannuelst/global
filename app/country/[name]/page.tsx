import type { Country } from "@/app/page";
import { ArrowLeft, Earth, Languages, MapPinned, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function getCountryByName(name: string): Promise<Country> {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
    return (await response.json())[0]


}

export default async function CountryPage({ params: { name } }: { params: { name: string } }) {
    const country = await getCountryByName(name)
    // console.log("HEYEYEYEYDI", country)
    const formatter = Intl.NumberFormat("en", { notation: "compact" })
    return (
        <section className="flex flex-col container">
            <h1 className="text-5xl text-center font-bold text-gray-800 my-16">
                {country.translations.por.common}
            </h1>

            <Link className="flex items-center py-2 gap-1" href={"/"}>
                <ArrowLeft size={21} />Voltar
            </Link>
            <article className="flex justify-between min-w-full p-10 bg-white rounded-xl">
                <section>
                    {country.capital && (
                        <h2 className="flex gap-1 text-xl text-gray-800"> <MapPinned /> <b>Capital:</b>{country.capital} </h2>
                    )}
                    <h2 className="flex gap-1 text-xl text-gray-800"><Earth /> <b>Continente: </b>{country.region}{country.subregion && `- {country.subregion}`}</h2>
                    <h2 className="flex gap-1 text-xl text-gray-800"> <UsersRound /> <b>População: </b>{formatter.format(country.population)}</h2>
                    {country.languages && (
                        <h2 className="flex gap-1 text-xl text-gray-800">  <Languages /><b>Idiomas: </b>{Object.values(country.languages).map((language) => (
                            <span key={language} className="inline-block p-1 bg-indigo-700 text-white mr-2 text-sm rounded-2xl">
                                {language}
                            </span>
                        ))}</h2>
                    )}

                </section>
                <div className="relative h-auto w-96 shadow-md">
                    <Image src={country.flags.svg}
                        alt={country.flags.alt} fill className="object-cover" />
                </div>
            </article>
        </section>


    )
}
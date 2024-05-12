"use client"

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ErrorCountry() {
    return (
        <section className="flex flex-col container items-center">
            <h1 className="textt-5xl text-center font-bold text-gray-800 my-16">
                Ops, ocorreu um erro ao exibir este país!
            </h1>
            <Link href="/" className="flex items-center py-2">
                <ArrowLeft /> Voltar para a página inicial
            </Link>

        </section>
    )
}
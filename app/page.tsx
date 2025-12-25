import { client } from "@/sanity/lib/client"
import { RESIDENTIALS_LIST_QUERY } from "@/sanity/lib/queries"
import type { Residential } from "@/sanity.types"

import { CardList } from "@/components/CardList"

export default async function Home() {
  const properties = await client.fetch<Residential[]>(RESIDENTIALS_LIST_QUERY)

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Immobili Residenziali
          </h1>

          {properties.length > 0 && (
            <p className="mt-2 text-muted-foreground">
              {properties.length}{" "}
              {properties.length === 1 ? "annuncio" : "annunci"}{" "}
              {properties.length > 1 ? "disponibili" : "disponibile"}
            </p>
          )}
        </div>

        <CardList properties={properties} />
      </main>
    </div>
  )
}

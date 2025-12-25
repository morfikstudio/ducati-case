import Image from "next/image"
import Link from "next/link"

import { urlFor } from "@/sanity/lib/image"
import type { Residential } from "@/sanity.types"

function formatPrice(price?: number, privateNegotiation?: boolean) {
  if (privateNegotiation) return "Trattativa Riservata"
  if (!price) return "Prezzo non disponibile"
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price)
}

function formatAddress(address?: Residential["address"]) {
  if (!address) return "Indirizzo non disponibile"
  const parts = [
    address.streetName,
    address.streetNumber,
    address.city,
    address.province,
  ].filter(Boolean)
  return parts.join(", ")
}

interface CardListProps {
  properties: Residential[]
}

export function CardList({ properties }: CardListProps) {
  if (properties.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-muted-foreground">Nessun annuncio disponibile</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => {
        const imageUrl = property.contents?.mainImage?.landscape
          ? urlFor(property.contents.mainImage.landscape)
              .width(600)
              .height(400)
              .url()
          : null

        return (
          <div
            key={property._id}
            className="overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm"
          >
            {imageUrl && (
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={property.contents?.excerpt || "Immagine immobile"}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="line-clamp-2 font-semibold leading-none tracking-tight">
                {formatAddress(property.address)}
              </h3>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                {property.contents?.excerpt ||
                  "Nessuna descrizione disponibile"}
              </p>
            </div>
            <div className="p-6 pt-0">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground">
                    {formatPrice(
                      property.info?.price,
                      property.info?.privateNegotiation,
                    )}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  {property.info?.rooms && (
                    <div>
                      <span className="font-medium">{property.info.rooms}</span>{" "}
                      {property.info.rooms === 1 ? "camera" : "camere"}
                    </div>
                  )}
                  {property.info?.bathrooms && (
                    <div>
                      <span className="font-medium">
                        {property.info.bathrooms}
                      </span>{" "}
                      {property.info.bathrooms === 1 ? "bagno" : "bagni"}
                    </div>
                  )}
                  {property.mainSpecs?.commercialSquareMeters && (
                    <div>
                      <span className="font-medium">
                        {property.mainSpecs.commercialSquareMeters}
                      </span>{" "}
                      m²
                    </div>
                  )}
                  {property.info?.locals && (
                    <div>
                      <span className="font-medium">
                        {property.info.locals}
                      </span>{" "}
                      {property.info.locals === 1 ? "locale" : "locali"}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center p-6 pt-0">
              <Link
                href={`/immobili/${property._id}`}
                className="w-full rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Visualizza dettagli
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

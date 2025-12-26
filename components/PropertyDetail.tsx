import Image from "next/image"

import { urlFor } from "@/sanity/lib/image"
import type { Residential } from "@/sanity.types"

import RichText from "@/components/RichText"
import MapDetail from "@/components/MapDetail"

interface PropertyDetailProps {
  property: Residential
}

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

function formatFullAddress(address?: Residential["address"]) {
  if (!address) return "Indirizzo non disponibile"
  const parts = [
    address.streetName,
    address.streetNumber,
    address.zip && `CAP ${address.zip}`,
    address.city,
    address.province,
    address.country,
  ].filter(Boolean)
  return parts.join(", ")
}

export function PropertyDetail({ property }: PropertyDetailProps) {
  const landscapeImageUrl = property.contents?.mainImage?.landscape
    ? urlFor(property.contents.mainImage.landscape)
        .width(1200)
        .height(600)
        .url()
    : null

  const portraitImageUrl = property.contents?.mainImage?.portrait
    ? urlFor(property.contents.mainImage.portrait).width(600).height(800).url()
    : null

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {formatAddress(property.address)}
          </h1>
          <p className="mt-2 text-2xl font-bold text-foreground">
            {formatPrice(
              property.info?.price,
              property.info?.privateNegotiation,
            )}
          </p>
          {property.address && (
            <p className="mt-2 text-muted-foreground">
              {formatFullAddress(property.address)}
            </p>
          )}
        </div>

        {/* Immagine principale */}
        {landscapeImageUrl && (
          <div className="relative mb-8 h-96 w-full overflow-hidden rounded-xl">
            <Image
              src={landscapeImageUrl}
              alt={property.contents?.excerpt || "Immagine immobile"}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Contenuto principale */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Colonna principale */}
          <div className="lg:col-span-2">
            {/* Descrizione */}
            {property.contents?.description && (
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">Descrizione</h2>
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <RichText text={property.contents.description} />
                </div>
              </section>
            )}

            {/* Informazioni generali */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                Informazioni generali
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {property.info?.price && (
                  <div className="rounded-lg border bg-card p-4">
                    <p className="text-sm text-muted-foreground">Prezzo</p>
                    <p className="text-lg font-semibold">
                      {formatPrice(
                        property.info.price,
                        property.info.privateNegotiation,
                      )}
                    </p>
                  </div>
                )}
                {property.info?.rooms && (
                  <div className="rounded-lg border bg-card p-4">
                    <p className="text-sm text-muted-foreground">Camere</p>
                    <p className="text-lg font-semibold">
                      {property.info.rooms}
                    </p>
                  </div>
                )}
                {property.info?.bathrooms && (
                  <div className="rounded-lg border bg-card p-4">
                    <p className="text-sm text-muted-foreground">Bagni</p>
                    <p className="text-lg font-semibold">
                      {property.info.bathrooms}
                    </p>
                  </div>
                )}
                {property.info?.locals && (
                  <div className="rounded-lg border bg-card p-4">
                    <p className="text-sm text-muted-foreground">Locali</p>
                    <p className="text-lg font-semibold">
                      {property.info.locals}
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Specifiche principali */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                Informazioni principali
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {property.mainSpecs?.commercialSquareMeters && (
                  <div className="rounded-lg border bg-card p-4">
                    <p className="text-sm text-muted-foreground">
                      Superficie commerciale
                    </p>
                    <p className="text-lg font-semibold">
                      {property.mainSpecs.commercialSquareMeters} m²
                    </p>
                  </div>
                )}
                {property.mainSpecs?.condominiumExpenses && (
                  <div className="rounded-lg border bg-card p-4">
                    <p className="text-sm text-muted-foreground">
                      Spese condominiali annuali
                    </p>
                    <p className="text-lg font-semibold">
                      {new Intl.NumberFormat("it-IT", {
                        style: "currency",
                        currency: "EUR",
                        maximumFractionDigits: 0,
                      }).format(property.mainSpecs.condominiumExpenses)}
                    </p>
                  </div>
                )}
                {property.mainSpecs?.floor?.label && (
                  <div className="rounded-lg border bg-card p-4">
                    <p className="text-sm text-muted-foreground">Piano</p>
                    <p className="text-lg font-semibold">
                      {property.mainSpecs.floor.label}
                    </p>
                  </div>
                )}
                {property.mainSpecs?.conciergeService?.label && (
                  <div className="rounded-lg border bg-card p-4">
                    <p className="text-sm text-muted-foreground">
                      Servizio portineria
                    </p>
                    <p className="text-lg font-semibold">
                      {property.mainSpecs.conciergeService.label}
                    </p>
                  </div>
                )}
                {property.mainSpecs?.constructionYear && (
                  <div className="rounded-lg border bg-card p-4">
                    <p className="text-sm text-muted-foreground">
                      Anno di costruzione
                    </p>
                    <p className="text-lg font-semibold">
                      {property.mainSpecs.constructionYear}
                    </p>
                  </div>
                )}
                {property.mainSpecs?.heatingSystem?.label && (
                  <div className="rounded-lg border bg-card p-4">
                    <p className="text-sm text-muted-foreground">
                      Riscaldamento
                    </p>
                    <p className="text-lg font-semibold">
                      {property.mainSpecs.heatingSystem.label}
                    </p>
                  </div>
                )}
                {property.mainSpecs?.energyClass?.label && (
                  <div className="rounded-lg border bg-card p-4">
                    <p className="text-sm text-muted-foreground">
                      Classe energetica
                    </p>
                    <p className="text-lg font-semibold">
                      {property.mainSpecs.energyClass.label}
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Informazioni aggiuntive */}
            {(property.additionalSpecs?.furnishing ||
              property.additionalSpecs?.garden ||
              property.additionalSpecs?.garage ||
              property.additionalSpecs?.parking ||
              property.additionalSpecs?.airConditioning ||
              property.additionalSpecs?.pool ||
              property.additionalSpecs?.tennisCourt) && (
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  Informazioni aggiuntive
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {property.additionalSpecs?.furnishing?.label && (
                    <div className="rounded-lg border bg-card p-4">
                      <p className="text-sm text-muted-foreground">
                        Arredamento
                      </p>
                      <p className="text-lg font-semibold">
                        {property.additionalSpecs.furnishing.label}
                      </p>
                    </div>
                  )}
                  {property.additionalSpecs?.garden?.label && (
                    <div className="rounded-lg border bg-card p-4">
                      <p className="text-sm text-muted-foreground">Giardino</p>
                      <p className="text-lg font-semibold">
                        {property.additionalSpecs.garden.label}
                      </p>
                    </div>
                  )}
                  {property.additionalSpecs?.garage?.label && (
                    <div className="rounded-lg border bg-card p-4">
                      <p className="text-sm text-muted-foreground">Garage</p>
                      <p className="text-lg font-semibold">
                        {property.additionalSpecs.garage.label}
                      </p>
                    </div>
                  )}
                  {property.additionalSpecs?.parking?.label && (
                    <div className="rounded-lg border bg-card p-4">
                      <p className="text-sm text-muted-foreground">
                        Posto Auto
                      </p>
                      <p className="text-lg font-semibold">
                        {property.additionalSpecs.parking.label}
                      </p>
                    </div>
                  )}
                  {property.additionalSpecs?.airConditioning?.label && (
                    <div className="rounded-lg border bg-card p-4">
                      <p className="text-sm text-muted-foreground">
                        Climatizzazione
                      </p>
                      <p className="text-lg font-semibold">
                        {property.additionalSpecs.airConditioning.label}
                      </p>
                    </div>
                  )}
                  {property.additionalSpecs?.pool?.label && (
                    <div className="rounded-lg border bg-card p-4">
                      <p className="text-sm text-muted-foreground">Piscina</p>
                      <p className="text-lg font-semibold">
                        {property.additionalSpecs.pool.label}
                      </p>
                    </div>
                  )}
                  {property.additionalSpecs?.tennisCourt?.label && (
                    <div className="rounded-lg border bg-card p-4">
                      <p className="text-sm text-muted-foreground">
                        Campo da Tennis
                      </p>
                      <p className="text-lg font-semibold">
                        {property.additionalSpecs.tennisCourt.label}
                      </p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Mappa */}
            {property.map?.isActive &&
              property.map?.lat &&
              property.map?.lng && (
                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-semibold">Posizione</h2>
                  <div className="rounded-lg border bg-card overflow-hidden">
                    <MapDetail
                      center={[property.map.lat, property.map.lng]}
                      popupContent={formatAddress(property.address)}
                    />
                  </div>
                </section>
              )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Caratteristiche booleane */}
              {(property.additionalSpecs?.balcony ||
                property.additionalSpecs?.terrace ||
                property.additionalSpecs?.cellar ||
                property.additionalSpecs?.attic ||
                property.additionalSpecs?.tavern ||
                property.additionalSpecs?.alarmSystem ||
                property.additionalSpecs?.disabledAccess) && (
                <section className="rounded-lg border bg-card p-6">
                  <h3 className="mb-4 text-lg font-semibold">
                    Caratteristiche
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {property.additionalSpecs?.balcony && <li>✓ Balcone</li>}
                    {property.additionalSpecs?.terrace && <li>✓ Terrazza</li>}
                    {property.additionalSpecs?.cellar && <li>✓ Cantina</li>}
                    {property.additionalSpecs?.attic && <li>✓ Solaio</li>}
                    {property.additionalSpecs?.tavern && <li>✓ Taverna</li>}
                    {property.additionalSpecs?.alarmSystem && (
                      <li>✓ Impianto di allarme</li>
                    )}
                    {property.additionalSpecs?.disabledAccess && (
                      <li>✓ Accesso per disabili</li>
                    )}
                  </ul>
                </section>
              )}

              {/* Immagine portrait (mobile) */}
              {portraitImageUrl && (
                <section className="rounded-lg border bg-card overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src={portraitImageUrl}
                      alt={property.contents?.excerpt || "Immagine immobile"}
                      fill
                      className="object-cover"
                    />
                  </div>
                </section>
              )}

              {/* Contatti */}
              <section className="rounded-lg border bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold">Contatti</h3>
                <button
                  className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  type="button"
                >
                  Contatta agente
                </button>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

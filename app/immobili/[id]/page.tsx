import { notFound } from "next/navigation"

import { client } from "@/sanity/lib/client"
import { RESIDENTIAL_DETAIL_QUERY } from "@/sanity/lib/queries"
import type { RESIDENTIAL_DETAIL_QUERYResult } from "@/sanity.types"

import { PropertyDetail } from "@/components/PropertyDetail"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ResidentialDetailPage({ params }: PageProps) {
  const { id } = await params
  const property = await client.fetch<RESIDENTIAL_DETAIL_QUERYResult>(
    RESIDENTIAL_DETAIL_QUERY,
    { id },
  )

  if (!property) {
    notFound()
  }

  return <PropertyDetail property={property} />
}

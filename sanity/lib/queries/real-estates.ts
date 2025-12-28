import { defineQuery } from "next-sanity"

/**
 * Query for residential properties list
 * Includes only partial information necessary for list display
 */
export const RESIDENTIALS_LIST_QUERY = defineQuery(
  `*[_type == "residential"] | order(_createdAt desc) {
    _id,
    address {
      streetName,
      streetNumber,
      city,
      province
    },
    info {
      price,
      privateNegotiation,
      rooms,
      bathrooms,
      locals
    },
    mainSpecs {
      commercialSquareMeters
    },
    contents {
      excerpt,
      mainImage {
        landscape {
          asset->,
          hotspot,
          crop
        }
      }
    }
  }`,
)

/**
 * Complete query for residential property detail page
 * Includes all fields necessary for full display
 */
export const RESIDENTIAL_DETAIL_QUERY = defineQuery(
  `*[_type == "residential" && _id == $id][0] {
    _id,
    address,
    map,
    info,
    mainSpecs,
    additionalSpecs,
    contents,
    pdfFiles[] {
      asset-> {
        _id,
        url,
        originalFilename,
        size
      }
    }
  }`,
)

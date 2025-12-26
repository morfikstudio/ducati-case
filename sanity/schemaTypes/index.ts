import type { SchemaTypeDefinition } from "sanity"

/* Real Estates */
import { residentialType } from "./real-estates/residentialType"
/* Website Content */
import { homePageType } from "./content/homePage"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    /* Real Estates */
    residentialType,
    // commercialType,
    // officeType,
    // landPlotsType,
    // warehouseType,
    // villaType,
    // industrialType,

    /* Website Content */
    homePageType,
  ],
}
